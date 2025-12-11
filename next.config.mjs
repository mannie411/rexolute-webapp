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
    esmExternals: "loose",
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /canvas/,
        use: "null-loader",
      });

      // Don't resolve 'fs' module on the client to prevent errors
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        canvas: false,
        worker_threads: false,
      };
    }

    return config;
  },

  // Important: Ensure proper transpilation
  transpilePackages: ["pdfjs-dist", "react-pdf", "react-doc-viewer"],
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
