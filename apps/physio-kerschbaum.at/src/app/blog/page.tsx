import type { Metadata } from 'next';
import { ArrowLeftCircle } from 'react-feather';

import {
  BacklinkAnchor,
  BackLinkParagraph,
  Heading,
  PageArticle,
} from '#pkg/components/commons.jsx';

function BlogPage() {
  return (
    <PageArticle>
      <Heading as="h1">Blog</Heading>
      <p>
        Hier entstehen künftig Beiträge rund um Physiotherapie, Bewegung im Alltag und hilfreiche
        Impulse für Patient*innen.
      </p>
      <p>
        Die Seite ist vorbereitet und wird freigeschaltet, sobald die ersten Beiträge online sind.
      </p>
      <BackLinkParagraph>
        <BacklinkAnchor href="/">
          <ArrowLeftCircle size="1em" />
          Zurück zur Startseite
        </BacklinkAnchor>
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
