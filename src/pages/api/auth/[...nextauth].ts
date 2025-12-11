import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";
import { AuthToken } from "@/types";

import { ApiClient as api } from "@/lib/api";
import { JWT } from "next-auth/jwt";

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const { data } = await api.post("/auth/refresh-token", {});
    const decoded: any = jwtDecode(data);

    return {
      ...token,
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? token.refreshToken,
      expiresAt: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    console.error("Refresh Token Error:", error);
    return { ...token, error: "RefreshTokenError" };
  }
}

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify",
    error: "/auth/error",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  providers: [
    CredentialsProvider({
      id: "admin-auth",
      name: "admin-auth",
      credentials: {
        code: { label: "OTP", type: "text" },
        identity: { label: "Identity", type: "text" },
        provider: { label: "Provider", type: "text" },
      },
      authorize: async (credentials) => {
        const { code, identity, provider } = credentials || {};
        console.log("verifying...", { identity });
        const res = await api.post("/auth/verify-otp?mode=token", {
          provider: provider,
          payload: {
            identity: identity,
            code: code,
          },
        });

        const { data } = res.data;
        const accessToken = data?.access_token;
        const refreshToken = data?.refresh_token;

        if (!accessToken || !refreshToken) return null;

        const decoded: any = jwtDecode(accessToken);

        return {
          id: decoded.sub,
          email: identity,
          role: decoded.role,
          permissions: decoded.permissions,
          accessToken,
          refreshToken,
        };
      },
    }),
  ],

  callbacks: {
    /**
     * Runs whenever a JWT is created or updated
     */
    async jwt({ token, user }) {
      if (user) {
        const accessToken = (user as any).accessToken;
        const refreshToken = (user as any).refreshToken;
        const decoded: any = jwtDecode(accessToken);

        token.id = user.id;
        token.email = user.email;
        token.role = decoded.role;
        token.permissions = decoded.permissions;
        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
        token.expiresAt = decoded.exp * 1000;
      }

      // If token still valid → return it
      // if (Date.now() < token.expiresAt) {
      //   return token;
      // }

      // Refresh
      // return refreshAccessToken(token);

      return token;
    },
    /**
     * Controls what is sent to the client inside session
     */
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email!,
        role: token.role,
        permissions: token.permissions,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };

      return session;
    },
  },
});
