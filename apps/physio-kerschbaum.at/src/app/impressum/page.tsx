import { styled } from '@pigment-css/react';
import type { Metadata } from 'next';

import { merriweather } from '#pkg/app/fonts.jsx';
import { Anchor } from '#pkg/elements/Anchor.jsx';

function ImpressumPage() {
  return (
    <PageArticle>
      <h1 className={merriweather.className}>Impressum</h1>

      <h2 className={merriweather.className}>Angaben gemäß § 5 ECG und § 24 Mediengesetz</h2>
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

      <h2 className={merriweather.className}>
        Berufsbezeichnung und berufsrechtliche Vorschriften
      </h2>
      <p>
        <strong>Berufsbezeichnung:</strong> Physiotherapeutin
      </p>
      <p>
        Die Tätigkeit unterliegt dem Bundesgesetz über die Regelung der gehobenen
        medizinisch-technischen Dienste (MTD-Gesetz).
      </p>

      <h2 className={merriweather.className}>Zuständige Aufsichtsbehörde</h2>
      <p>Bezirkshauptmannschaft / Magistrat (je nach Standort)</p>

      <h2 className={merriweather.className}>Mitgliedschaft</h2>
      <p>Mitglied im Berufsverband: Physio Austria</p>

      <h2 className={merriweather.className}>Unternehmensgegenstand</h2>
      <p>Physiotherapeutische Behandlungen und Therapieleistungen</p>

      <h2 className={merriweather.className}>Haftung für Inhalte</h2>
      <p>
        Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>

      <h2 className={merriweather.className}>Haftung für Links</h2>
      <p>
        Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Haftung.
      </p>

      <h2 className={merriweather.className}>Urheberrecht</h2>
      <p>
        Die Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der schriftlichen Zustimmung
        der Betreiberin.
      </p>

      <BackLinkParagraph>
        <Anchor href="/">← Zurück zur Startseite</Anchor>
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

const PageArticle = styled.article`
  max-width: var(--app-box-width);
  padding-block: 32px;
  padding-inline: var(--app-padding-inline);
  margin-inline: auto;
`;

const BackLinkParagraph = styled.p`
  margin-block-start: 2em;
`;
