import NextAuth, { DefaultSession } from "next-auth";
import { Role } from "./index";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string;
      email?: string;
      role?: Role;
      permissions?: string[];
      accessToken: string;
      refreshToken: string;
    } & DefaultSession["user"];
    error?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    accessToken: string;
    refreshToken: string;
    role: Role;
    permissions: string[];
    expiresAt: number;
    error?: string;
  }
}
