import type { Metadata } from 'next';
import { ArrowLeftCircle } from 'react-feather';

import {
  BacklinkAnchor,
  BackLinkParagraph,
  Heading,
  PageArticle,
} from '#pkg/components/commons.jsx';

function ImpressumPage() {
  return (
    <PageArticle>
      <Heading as="h1">Impressum</Heading>

      <Heading as="h2">Angaben gemäß § 5 ECG und § 24 Mediengesetz</Heading>
      <p>
        <strong>Physiotherapie Jasmin Kerschbaum</strong>
        <br />
        Jasmin Kerschbaum, BSc
        <br />
        Physiotherapeutin
      </p>
      <p>
        Telefon: <a href="tel:+4368110799824">+43 681 10799824</a>
        <br />
        E-Mail: <a href="mailto:physio.kerschbaum@gmx.at">physio.kerschbaum@gmx.at</a>
        <br />
        Website: <a href="https://www.physio-kerschbaum.at">www.physio-kerschbaum.at</a>
      </p>
      <p>
        <strong>Praxisstandorte:</strong>
        <br />
        Traungasse 1/4/14, 1030 Wien
        <br />
        Muthgasse 36, 1190 Wien
      </p>

      <Heading as="h2">Berufsbezeichnung und berufsrechtliche Vorschriften</Heading>
      <p>
        <strong>Berufsbezeichnung:</strong> Physiotherapeutin
      </p>
      <p>
        Die Tätigkeit unterliegt dem Bundesgesetz über die Regelung der gehobenen
        medizinisch-technischen Dienste (MTD-Gesetz).
      </p>

      <Heading as="h2">Zuständige Aufsichtsbehörde</Heading>
      <p>Bezirkshauptmannschaft / Magistrat (je nach Standort)</p>

      <Heading as="h2">Mitgliedschaft</Heading>
      <p>Mitglied im Berufsverband: Physio Austria</p>

      <Heading as="h2">Unternehmensgegenstand</Heading>
      <p>Physiotherapeutische Behandlungen und Therapieleistungen</p>

      <Heading as="h2">Haftung für Inhalte</Heading>
      <p>
        Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>

      <Heading as="h2">Haftung für Links</Heading>
      <p>
        Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Haftung.
      </p>

      <Heading as="h2">Urheberrecht</Heading>
      <p>
        Die Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der schriftlichen Zustimmung
        der Betreiberin.
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
  title: 'Impressum – Physiotherapie Jasmin Kerschbaum',
  openGraph: {
    title: 'Impressum – Physiotherapie Jasmin Kerschbaum',
  },
};

export default ImpressumPage;
