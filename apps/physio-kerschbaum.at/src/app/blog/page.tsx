import { styled } from '@pigment-css/react';
import type { Metadata } from 'next';

import { merriweather } from '#pkg/app/fonts.jsx';
import { Anchor } from '#pkg/elements/Anchor.jsx';

function BlogPage() {
  return (
    <PageArticle>
      <h1 className={merriweather.className}>Blog</h1>
      <p>
        Hier entstehen künftig Beiträge rund um Physiotherapie, Bewegung im Alltag und hilfreiche
        Impulse für Patient*innen.
      </p>
      <p>
        Die Seite ist vorbereitet und wird freigeschaltet, sobald die ersten Beiträge online sind.
      </p>
      <BackLinkParagraph>
        <Anchor href="/">← Zurück zur Startseite</Anchor>
      </BackLinkParagraph>
    </PageArticle>
  );
}

export const metadata: Metadata = {
  title: 'Blog – Physiotherapie Jasmin Kerschbaum',
  robots: {
    follow: false,
    index: false,
  },
  openGraph: {
    title: 'Blog – Physiotherapie Jasmin Kerschbaum',
  },
};

export default BlogPage;

const PageArticle = styled.article`
  max-width: var(--app-box-width);
  padding-block: 32px;
  padding-inline: var(--app-padding-inline);
  margin-inline: auto;
`;

const BackLinkParagraph = styled.p`
  margin-block-start: 2em;
`;
