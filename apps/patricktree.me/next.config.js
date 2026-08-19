// @ts-check
import createMDX from "@next/mdx";
import {
  createNextConfig,
  withPigmentCss,
} from "@patricktree-stack/config-nextjs/next-base-config.js";

import { createMdxOptions } from "@patricktree-homepage/mdx/mdx";

/** @type {import("next").NextConfig} */
let nextConfig = createNextConfig({
  outputFileTracingIncludes: {
    "/": [
      // Include MDX source files
      "./src/writing/**/*",
    ],
    "/*": [
      // Include MDX source files
      "./src/writing/**/*",
    ],
  },

  async rewrites() {
    /*
     * https://plausible.io/docs/proxy/guides/nextjs#step-1-add-url-rewrite-rules
     * avoid using "plausible" in the source path (use "p.io" instead) because otherwise it could get blocked by adblockers
     */
    return [
      {
        source: "/p.io/js/script.js",
        destination: "https://analytics.pkerschbaum.com/js/script.js",
      },
      {
        source: "/p.io/api/event",
        destination: "https://analytics.pkerschbaum.com/api/event",
      },
    ];
  },

  async redirects() {
    return [
      {
        // Preserve links shared before the TS 6.0 tabs were expanded to cover TS 7.0.
        source: "/tidbits/sensible-tsconfig-defaults",
        has: [
          {
            type: "query",
            key: "version-tab",
            value: "TS 6.0 Node.js",
          },
        ],
        destination: "/tidbits/sensible-tsconfig-defaults?version-tab=TS+6.0%2F7.0+Node.js",
        permanent: true,
      },
      {
        source: "/tidbits/sensible-tsconfig-defaults",
        has: [
          {
            type: "query",
            key: "version-tab",
            value: "TS 6.0 Browser",
          },
        ],
        destination: "/tidbits/sensible-tsconfig-defaults?version-tab=TS+6.0%2F7.0+Browser",
        permanent: true,
      },
      {
        source: "/tidbits/wsl-web-dev-setup",
        destination: "/tidbits/wsl-and-ubuntu-web-dev-setup",
        permanent: true,
      },
    ];
  },

  // include .md and .mdx files, see https://nextjs.org/docs/app/building-your-application/configuring/mdx#configure-nextconfigmjs
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});

const withMDX = createMDX({
  options: createMdxOptions({ collectedHrefs: [], collectedHeadings: [] }),
});

nextConfig = withMDX(nextConfig);

nextConfig = withPigmentCss(nextConfig);

export default nextConfig;
