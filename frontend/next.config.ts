import type { NextConfig } from "next";
import { STRAPI_MEDIA_URL } from "./lib/strapi";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL(STRAPI_MEDIA_URL + "**")],
  },
};

export default nextConfig;
