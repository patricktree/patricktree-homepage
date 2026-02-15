import path from 'node:path';

/*
 * AI GENERATED EXPLANATION - NOT SURE IF THIS IS 100% CORRECT, PLEASE REVIEW CAREFULLY
 *
 * Use getters so that `path` and `process.cwd()` are only accessed when properties are read, not
 * at module-evaluation time. This is necessary because Pigment CSS (wyw-in-js) evaluates all
 * imported modules in a sandbox where Node.js builtins like `node:path` resolve to `null`.
 * Since Pigment CSS never reads these values (it only cares about CSS), the getters are never
 * triggered in that context.
 *
 * process.cwd() returns the Next.js project root (where next.config.js lives) in both dev and
 * production. For bin scripts invoked via pnpm from the app directory, it also returns the app root.
 */
export const PATHS = {
  get FAVICONS_FOR_WEBSITES() {
    return path.join(process.cwd(), 'generated', 'favicons-for-websites.json');
  },
  get POSTS() {
    return path.join(process.cwd(), 'src', 'writing', 'posts');
  },
  get TIDBITS() {
    return path.join(process.cwd(), 'src', 'writing', 'tidbits');
  },
  get POSTS_PAGES_DIR() {
    return path.join(process.cwd(), 'src', 'app', 'blog');
  },
  get TIDBITS_PAGES_DIR() {
    return path.join(process.cwd(), 'src', 'app', 'tidbits');
  },
  get PUBLIC_DIR() {
    return path.join(process.cwd(), 'public');
  },
};
export const RSS_FEED_XML_SLUG = 'rss.xml';
export const RSS_FEED_JSON_SLUG = 'rss.json';

export function getRssFeedXmlPath() {
  return path.join(PATHS.PUBLIC_DIR, RSS_FEED_XML_SLUG);
}

export function getRssFeedJsonPath() {
  return path.join(PATHS.PUBLIC_DIR, RSS_FEED_JSON_SLUG);
}
