import type { NextConfig } from "next";
import { APEX_HOST, SITE_URL } from "./lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/attribution-mmm-incrementality-different-answers",
        destination: "/blog/attribution-vs-mmm",
        permanent: true,
      },
      {
        source: "/blog/wholesale-distribution-case-study",
        destination: "/blog/wholesale-distribution",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: APEX_HOST }],
        destination: `${SITE_URL}/`,
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host", value: APEX_HOST }],
        destination: `${SITE_URL}/:path+`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
