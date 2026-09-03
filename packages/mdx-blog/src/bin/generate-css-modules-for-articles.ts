import fs from "node:fs";
import path from "node:path";
import invariant from "tiny-invariant";

import {
  schema_frontmatterData,
  schema_listingFrontmatterData,
} from "@patricktree-homepage/mdx/schema";

import { Classes, DataAttribute, ColorTheme, ClassesAliases } from "#pkg/constants-browser.js";
import { PATHS } from "#pkg/constants-server.js";
import { createFaviconsMapping } from "#pkg/favicons.js";
import { parseMDXFileAndCollectHrefs } from "#pkg/mdx.js";

/*
 * Generate .module.css files for every article page containing icons for FancyAnchors.
 * We construct CSS such that we transmit every data URL only once and apply it to the associated
 * FancyAnchors via attribute selectors.
 *
 * Idea of those FancyAnchor's is based on https://twitter.com/simevidas/status/1481753210578690064.
 *
 * @example
 * .favicons .fancy-anchor[href="https://playwright.dev/docs/test-fixtures"]::before,
 * .favicons .fancy-anchor[href="https://playwright.dev/docs/test-advanced#projects"]::before,
 * .favicons .fancy-anchor[href="https://playwright.dev/docs/test-components#planned-work"]::before {
 *   display: inline-block;
 *   background-image: url(DATA_URL_OF_PLAYWRIGHT_FAVICON);
 * }
 */
async function generateCssModulesForArticles() {
  const articleDirectories = [
    {
      content: PATHS.POSTS,
      frontmatterSchema: schema_frontmatterData,
      pages: PATHS.POSTS_PAGES_DIR,
    },
    {
      content: PATHS.PROJECTS,
      frontmatterSchema: schema_listingFrontmatterData,
      pages: PATHS.PROJECTS_PAGES_DIR,
    },
    {
      content: PATHS.TIDBITS,
      frontmatterSchema: schema_frontmatterData,
      pages: PATHS.TIDBITS_PAGES_DIR,
    },
  ];

  await Promise.all(
    articleDirectories.map(async ({ content, frontmatterSchema, pages }) => {
      const basenames = await fs.promises.readdir(content);

      await Promise.all(
        basenames
          .filter((basename) => basename.endsWith(".mdx"))
          .map(async (basename) => {
            const nameWithoutExt = path.parse(basename).name;
            const cssModule = await generateCssModuleForPage(
              content,
              nameWithoutExt,
              frontmatterSchema,
            );
            await fs.promises.writeFile(
              path.join(pages, nameWithoutExt, `styles.module.css`),
              cssModule,
              { encoding: "utf8" },
            );
          }),
      );
    }),
  );
}

async function generateCssModuleForPage(
  absolutePathToSourceDirectory: string,
  nameWithoutExt: string,
  frontmatterSchema: { parse: (data: unknown) => unknown },
) {
  const { faviconDataURLsForWebsiteURLs } = await fetchMDXFileAndFavicons(
    absolutePathToSourceDirectory,
    nameWithoutExt,
    frontmatterSchema,
  );

  const lightIconsCss = Object.values(faviconDataURLsForWebsiteURLs.lightIcons).map((icon) => {
    invariant(icon);
    const selector = icon.associatedWebsites
      .map(
        (url) =>
          `.${ClassesAliases.FAVICONS} :global(.${Classes.STYLED_ANCHOR})[href="${url}"] :global(.${Classes.FANCY_ANCHOR_ICON})::before`,
      )
      .join(", ");
    const rule = `{ display: inline-block; background-image: url(${icon.iconDataURL}); }`;
    return `${selector} ${rule}`;
  });

  const darkIconsCss = Object.values(faviconDataURLsForWebsiteURLs.darkIcons).map((icon) => {
    invariant(icon);
    const selector = icon.associatedWebsites
      .map(
        (url) =>
          `*:root[${DataAttribute.THEME}='${ColorTheme.DARK}'] .${ClassesAliases.FAVICONS} :global(.${Classes.STYLED_ANCHOR})[href="${url}"] :global(.${Classes.FANCY_ANCHOR_ICON})::before`,
      )
      .join(", ");
    const rule = `{ display: inline-block; background-image: url(${icon.iconDataURL}); }`;
    return `${selector} ${rule}`;
  });

  const css = `${lightIconsCss.join(" ")} ${darkIconsCss.join(" ")}`;

  return css;
}

async function fetchMDXFileAndFavicons(
  absolutePathToDirectory: string,
  segment: string,
  frontmatterSchema: { parse: (data: unknown) => unknown },
) {
  const mdxParseResult = await parseMDXFileAndCollectHrefs(
    path.join(absolutePathToDirectory, `${segment}.mdx`),
    frontmatterSchema,
  );

  const faviconDataURLsForWebsiteURLs = await createFaviconsMapping(mdxParseResult);

  return {
    mdxParseResult,
    faviconDataURLsForWebsiteURLs,
  };
}

void generateCssModulesForArticles();
