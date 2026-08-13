/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  reactCompiler: true,
  experimental: {
    optimizePackageImports: [
      "@tabler/icons-react",
      "motion",
      "date-fns",
      "clsx",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: [
    "localhost:3000", // Local development host
    "*.lhr.life", // localhost.run secure tunnels
    "*.localhost.run", // localhost.run alternative domains
    "*.ngrok-free.app", // Ngrok free subdomains
    "*.preview.app.github.dev", // Github Codespaces tunnel domains
    "*.tunnels.api.visualstudio.com", // VS Code native port forwarding tunnels
  ],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
