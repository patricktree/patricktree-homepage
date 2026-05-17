import type { Metadata } from 'next';
import { ArrowLeftCircle } from 'react-feather';

import photoshooting_24DSC01312 from '#pkg/assets/24-DSC_0131-2.jpg';
import {
  AboutImage,
  AboutImageContainer,
  BacklinkAnchor,
  BackLinkParagraph,
  Heading,
  PageArticle,
} from '#pkg/components/commons.jsx';

function UeberMichPage() {
  return (
    <PageArticle>
      <Heading as="h1">Über Mich</Heading>

      <AboutImageContainer>
        <AboutImage src={photoshooting_24DSC01312} alt="" fill />
      </AboutImageContainer>

      <p>
        Mein Name ist Jasmin Kerschbaum. Ich komme ursprünglich aus dem Waldviertel und wohne seit
        einigen Jahren in Wien. Im Jahr 2022 habe ich das Bachelor-Studium Physiotherapie an der FH
        St. Pölten abgeschlossen.
      </p>
      <p>
        In der Physiotherapie lege ich den Fokus darauf, die Stärken und Ressourcen meiner
        Patient*innen herauszufiltern und gemeinsam den Weg ans Ziel zu gehen. Bei mir findest du
        die perfekte Mischung aus aktiven Übungen und passiven Maßnahmen. Egal, ob Schmerzen,
        Bewegungseinschränkung oder Problemen bei Alltagstätigkeiten - ich werde dir bestmöglich
        helfen, dein Ziel zu erreichen.
      </p>
      <span>
        <strong>Berufserfahrung:</strong>
      </span>
      <ul>
        <li>seit 04/2026 freiberufliche Physiotherapeutin im HNO Zentrum 19, Wien</li>
        <li>
          seit 06/2025 freiberufliche Physiotherapeutin in der Gemeinschaftspraxis
          &quot;PhysioAllround&quot;, Wien
        </li>
        <li>
          seit 12/2023 Intensivstation für Innere Medizin und Schwerbrandverletzte im AKH Wien
        </li>
        <li>07/2023-01/2024 Wirbelsäulengymnastik bei Willl-Gesund, Zwettl-NÖ</li>
        <li>07/2022-11/2023 NRZ Rosenhügel, Wien</li>
      </ul>
      <span>
        <strong>Fortbildungen:</strong>
      </span>
      <ul>
        <li>ESP Wirbelsäulenrehabilitation</li>
        <li>Spiegeltherapie</li>
        <li>Evidenzbasierte Ganganalyse & Gangtherapie in der Neurologie und Geriatrie</li>
        <li>Bandscheibenproblematik</li>
        <li>Atempacing bei geringer Belastungstoleranz</li>
        <li>Schwindel-, Tinnitus-, Kopfschmerz-, & Migränetherapie</li>
      </ul>

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
  title: 'Über mich – Physiotherapie Jasmin Kerschbaum',
  openGraph: {
    title: 'Über mich – Physiotherapie Jasmin Kerschbaum',
  },
};

export default UeberMichPage;
