import type { Metadata } from 'next';
import path from 'path';
import type React from 'react';
import invariant from 'tiny-invariant';

import { MDXContentClientComponent } from '#pkg/app/tidbits/sensible-tsconfig-defaults/mdx-content-client-component.jsx';
import styles from '#pkg/app/tidbits/sensible-tsconfig-defaults/styles.module.css';
import { ArticleContainerTidbit } from '#pkg/components/article-container-tidbit/index.js';
import { SEARCH_PARAM_KEY } from '#pkg/components/version-tabs/constants.jsx';
import { ClassesAliases } from '#pkg/constants-browser.js';
import { PATHS } from '#pkg/constants-server.js';
import { mapMDXParseResultToMetadata, parseMDXFileAndCollectHrefs } from '#pkg/mdx/index.js';

const faviconsClassName = styles[ClassesAliases.FAVICONS];

const SEGMENT = path.parse(__dirname).name;

type TidbitPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

async function TidbitPage(props: TidbitPageProps) {
  invariant(faviconsClassName);

  const [searchParams, mdxParseResult] = await Promise.all([
    props.searchParams,
    parseMDXFileAndCollectHrefs(path.join(PATHS.TIDBITS, `${SEGMENT}.mdx`)),
  ]);

  const versionFromUrl =
    typeof searchParams[SEARCH_PARAM_KEY] === 'string' ? searchParams[SEARCH_PARAM_KEY] : undefined;

  return (
    <ArticleContainerTidbit
      mdxContent={<MDXContentClientComponent versionFromUrl={versionFromUrl} />}
      mdxParseResult={mdxParseResult}
      faviconsClassName={faviconsClassName}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const mdxParseResult = await parseMDXFileAndCollectHrefs(
    path.join(PATHS.TIDBITS, `${SEGMENT}.mdx`),
  );

  return mapMDXParseResultToMetadata(mdxParseResult);
}

export default TidbitPage;
