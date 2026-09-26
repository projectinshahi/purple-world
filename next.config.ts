import type { NextConfig } from "next";

const apiUrl = new URL(process.env.API_URL ?? "http://localhost:4000");
const isLocalApi = ["localhost", "127.0.0.1"].includes(apiUrl.hostname);

const nextConfig: NextConfig = {
  // Let the dev server hydrate when opened from the LAN IP (e.g. on a phone),
  // not just localhost. Without this the JS never runs and the navbar stays
  // transparent on scroll.
  allowedDevOrigins: ["192.168.1.7"],
  images: {
    // Images uploaded through the admin panel are served by purple-backend
    remotePatterns: [
      {
        protocol: apiUrl.protocol.replace(":", "") as "http" | "https",
        hostname: apiUrl.hostname,
        port: apiUrl.port,
        pathname: "/uploads/**",
      },
    ],
    // Next 16 refuses to optimise images from local addresses; allow it only
    // while the backend runs on this machine during development.
    dangerouslyAllowLocalIP: isLocalApi && process.env.NODE_ENV !== "production",
  },
};

export default nextConfig;
