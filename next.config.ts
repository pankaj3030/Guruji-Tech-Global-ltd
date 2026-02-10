import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  
  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googleapis.com https://*.gstatic.com https://*.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com https://*.google.com; style-src 'self' 'unsafe-inline' https://*.googleapis.com; img-src 'self' data: https: blob: https://*.google.com https://*.googletagmanager.com; font-src 'self' data: https://*.gstatic.com; connect-src 'self' https://*.googleapis.com https://*.analytics.google.com https://region1.analytics.google.com https://www.google.com https://googleads.g.doubleclick.net https://*.google.com https://*.doubleclick.net; frame-src 'self' https://*.youtube.com https://*.googletagmanager.com https://googleads.g.doubleclick.net; base-uri 'self'; form-action 'self';"
          }
        ],
      },
    ];
  },

  // Image Optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
