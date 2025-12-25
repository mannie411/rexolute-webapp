import { getSession, signOut } from "next-auth/react";

import api from "./axios";

let isRefreshing = false;

let failedQueue: {
  resolve: (value: string | PromiseLike<string>) => void;
  reject: (reason?: any) => void;
}[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });

  failedQueue = [];
};

export const setupAxiosInterceptors = () => {
  console.log("setupAxiosInterceptors...");
  api.interceptors.request.use(async (config) => {
    const session = await getSession();
    console.log("axios:", session);

    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,

    async (error) => {
      const originalRequest = error.config;

      // If unauthorized
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const session = await getSession();
        const refreshToken = session?.user?.refreshToken;

        if (!refreshToken) {
          signOut();
          return Promise.reject(error);
        }

        // If already refreshing → queue request
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }).then((token) => {
            originalRequest.headers.Authorization = "Bearer " + token;
            return api(originalRequest);
          });
        }

        isRefreshing = true;

        try {
          originalRequest.headers.Authorization = "Bearer " + refreshToken;
          const { data } = await api.post(
            "/auth/refresh-token",
            {},
            originalRequest
          );

          const newAccessToken = data.access_token;

          // Update session client-side
          if (session?.user) {
            session.user.accessToken = newAccessToken;
          }

          isRefreshing = false;
          processQueue(null, newAccessToken);

          originalRequest.headers.Authorization = "Bearer " + newAccessToken;
          return api(originalRequest);
        } catch (e) {
          isRefreshing = false;
          processQueue(e, null);
          signOut();
          return Promise.reject(e);
        }
      }

      return Promise.reject(error);
    }
  );
};
