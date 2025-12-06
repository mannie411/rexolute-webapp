/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  allowedDevOrigins: ["app.localhost", "admin.localhost"],
  async redirects() {
    return [
      // Basic redirect
      // {
      //   source: "/auth/admin",
      //   destination: "/auth/admin/login",
      //   permanent: true,
      // },
      // {
      //   source: "/",
      //   destination: "/home",
      //   permanent: true,
      // },
      // Wildcard path matching
      // {
      //   source: '/blog/:slug',
      //   destination: '/news/:slug',
      //   permanent: true,
      // },
    ];
  },
  async rewrites() {
    return [
      /**
       * ======================================
       *  AUTH REWRITES (put FIRST)
       * ======================================
       */
      {
        source: "/admin/login",
        destination: "/auth/admin/login",
      },
      {
        source: "/client/login",
        destination: "/auth/client/login",
      },
      // {
      //   source: "/admin/:slug*",
      //   destination: "/auth/admin/:slug*",
      // },

      // {
      //   source: "/client/:slug*",
      //   destination: "/auth/client/:slug*",
      // },

      /**
       * ======================================
       *  HOME REWRITES (put AFTER)
       *  Exclude admin|client|sites|api|auth
       * ======================================
       */

      // homepage
      {
        source: "/",
        destination: "/home",
      },

      // single slug
      {
        source: "/:slug((?!admin|client|sites|api|auth).*)",
        destination: "/home/:slug",
      },

      // deep paths
      {
        source: "/:slug((?!admin|client|sites|api|auth).*)/:subslug*",
        destination: "/home/:slug/:subslug*",
      },
    ];
  },
};

export default nextConfig;
