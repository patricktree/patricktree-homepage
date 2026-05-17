import type { Metadata } from 'next';
import { ArrowLeftCircle } from 'react-feather';

import {
  BacklinkAnchor,
  BackLinkParagraph,
  Heading,
  PageArticle,
} from '#pkg/components/commons.jsx';
import { Anchor } from '#pkg/elements/Anchor.jsx';
import { headingIds } from '../page-constants';

function UeberMichPage() {
  return (
    <PageArticle>
      <Heading as="h1">Der Weg zur Physiotherapie</Heading>
      <ol>
        <li>
          <strong>Verordnung vom Arzt:</strong> Sie benötigen für Physiotherapie eine ärztliche
          Verordnung mit: 10x Physiotherapie à 45 Min + 10x Heilmassage à 15 Min ODER 10x
          Physiotherapie à 60 Min - bei Hausbesuchen muss der Hausbesuch verordnet sein!
        </li>
        <li>
          <strong>Bewilligung durch Krankenkassa:</strong> Bei ÖGK und BVA ist bis auf Weiteres
          keine Bewilligung notwendig. Versicherte der KFA oder SVS benötigen eine Bewilligung vor
          der 1. Therapieeinheit!
        </li>
        <li>
          <strong>Termin buchen:</strong> Termine können online, per Telefon oder Mail gebucht
          werden - siehe unter{' '}
          <Anchor href={`/#${headingIds.standorteTerminbuchung}`}>
            &quot;Standorte & Terminbuchung&quot;
          </Anchor>
        </li>
        <li>
          <strong>Ersttermin:</strong> Beim Ersttermin erfolgt eine gründliche Befundung des
          aktuellen Zustandes, gemeinsame Zielvereinbarung und erste Behandlungsmaßnahmen werden
          gesetzt → (bewilligte) Verordnung und ärztliche Befunde falls vorhanden mitnehmen.
        </li>
      </ol>
      <p>
        <strong>Terminabsagen</strong> müssen bis 24h vor dem vereinbarten Termin erfolgen
        (telefonisch oder per E-Mail). Bei kurzfristigen Absagen wird ein Entfallshonorar
        verrechnet!
      </p>
      <p>
        <strong>Achtung:</strong> Da ich eine <strong>Wahltherapeutin</strong> bin, wird nach
        Ansuchen ein Teil der Kosten von der Krankenkassa übernommen! Mehr Infos erhalten Sie beim
        Gespräch - persönlich oder telefonisch!
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
  title: 'Der Weg zur Physiotherapie – Physiotherapie Jasmin Kerschbaum',
  openGraph: {
    title: 'Der Weg zur Physiotherapie – Physiotherapie Jasmin Kerschbaum',
  },
};

export default UeberMichPage;
