"use client";

import { useEffect } from "react";
import axios, { AxiosHeaders } from "axios";
import { useSession, signOut } from "next-auth/react";
import { jwtDecode } from "jwt-decode";
import { ApiClient as api } from "@/lib/api";

export function useAxiosInterceptors() {
  const { data: session, update } = useSession();
  const accessToken = session?.user?.accessToken;
  const refreshToken = session?.user?.refreshToken;

  useEffect(() => {
    if (!session) return;

    /** -----------------------------
     * 1. ATTACH ACCESS TOKEN
     * ------------------------------*/
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        // Normalize headers to an AxiosHeaders instance so assignments are type-safe
        config.headers = new AxiosHeaders(config.headers as any);
        if (accessToken) {
          config.headers.set("Authorization", `Bearer ${accessToken}`);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    /** -----------------------------
     * 2. REFRESH TOKEN ON 401
     * ------------------------------*/
    const responseInterceptor = api.interceptors.response.use(
      (res) => res,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          refreshToken
        ) {
          originalRequest._retry = true;

          try {
            originalRequest.headers.Authorization = "Bearer " + refreshToken;
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
              {},
              originalRequest
            );

            const newAccessToken = res.data?.data?.access_token;
            const newRefreshToken = res.data?.data?.refresh_token;

            if (!newAccessToken || !newRefreshToken) {
              throw new Error("Invalid refresh response");
            }

            /** Update NextAuth session */
            await update({
              user: {
                ...session.user,
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
              },
            });

            /** Update request and retry */
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return api(originalRequest);
          } catch (refreshError) {
            console.error("Refresh token failed:", refreshError);
            await signOut();
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [session, accessToken, refreshToken, update]);

  return api;
}
