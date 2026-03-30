import { styled } from '@pigment-css/react';
import type { Metadata } from 'next';
import type React from 'react';

import { merriweather } from '#pkg/app/fonts.jsx';
import { headingIds } from '#pkg/app/page-constants.js';
import photoshooting_11DSC0068 from '#pkg/assets/11-DSC_0068.jpg';
import photoshooting_15DSC0081 from '#pkg/assets/15-DSC_0081.jpg';
import photoshooting_20DSC0108 from '#pkg/assets/20-DSC_0108.jpg';
import photoshooting_24DSC01312 from '#pkg/assets/24-DSC_0131-2.jpg';
import photoshooting_3DSC0018 from '#pkg/assets/3-DSC_0018.jpg';
import photoshooting_7DSC0039 from '#pkg/assets/7-DSC_0039.jpg';
import photoshooting_8DSC0042 from '#pkg/assets/8-DSC_0042.jpg';
import { ImageCarousel, Slide } from '#pkg/components/image-carousel/index.js';
import { Anchor } from '#pkg/elements/Anchor.jsx';
import { Image } from '#pkg/elements/Image.jsx';

function HomePage() {
  return (
    <>
      <Section ContentComponent={HeroSectionContent}>
        <ImageCarousel>
          <Slide>
            <CarouselSlideImage alt="" src={photoshooting_8DSC0042} fill />
          </Slide>

          <Slide>
            <CarouselSlideImage alt="" src={photoshooting_11DSC0068} fill />
          </Slide>

          <Slide>
            <CarouselSlideImage alt="" src={photoshooting_20DSC0108} fill />
          </Slide>

          <Slide>
            <CarouselSlideImage alt="" src={photoshooting_7DSC0039} fill />
          </Slide>

          <Slide>
            <CarouselSlideImage alt="" src={photoshooting_3DSC0018} fill />
          </Slide>

          <Slide>
            <CarouselSlideImage alt="" src={photoshooting_15DSC0081} fill />
          </Slide>
        </ImageCarousel>
      </Section>
      <Section>
        <Heading as="h1" id={headingIds.welcome}>
          Herzlich Willkommen!
        </Heading>
        <p>
          Gemeinsam an alltäglichen Problemen arbeiten, mit Herz und Spaß bei der Sache - dafür
          stehe ich in der Physiotherapie!
        </p>
        <p>
          Mein Name ist Jasmin Kerschbaum. Ich bin als freiberufliche Physiotherapeutin in Wien
          tätig (siehe{' '}
          <Anchor href={`/#${headingIds.standorteTerminbuchung}`}>
            &quot;Standorte & Terminbuchung&quot;
          </Anchor>
          ). Hausbesuche sind auf Anfrage (per Mail oder Telefon) ebenso möglich.
        </p>
        <span>Meine 3 Schwerpunkte:</span>
        <ul>
          <li>
            <strong>neurologische Erkrankungen</strong> wie Schlaganfall, Multiple Sklerose, Morbus
            Parkinson, ALS, etc.
          </li>
          <li>
            Erkrankungen/Verletzungen der <strong>Wirbelsäule</strong> (Bandscheibenvorfall,
            Operationen, Instabilitäten, etc.)
          </li>
          <li>
            <strong>Schwindel, Tinnitus, Kopfschmerzen, Migräne</strong>
          </li>
        </ul>
      </Section>

      <Section>
        <Heading as="h2" id={headingIds.ueberMich}>
          Über mich
        </Heading>
        <AboutImageContainer>
          <AboutImage src={photoshooting_24DSC01312} alt="" fill />
        </AboutImageContainer>
        <p>
          Mein Name ist Jasmin Kerschbaum. Ich komme ursprünglich aus dem Waldviertel und wohne seit
          einigen Jahren in Wien. Im Jahr 2022 habe ich das Bachelor-Studium Physiotherapie an der
          FH St. Pölten abgeschlossen und bin seither als Physiotherapeutin in Wien tätig.
        </p>
        <p>
          Bereits vor meinem Studium war ich von der Idee begeistert, Menschen dabei zu
          unterstützen, ihren Alltag aktiv und möglichst beschwerdefrei zu gestalten. Während des
          Studiums stellte sich schnell heraus, dass ich als Physiotherapeutin in der Neurologie und
          in der Behandlung von Wirbelsäulenbeschwerden tätig werden möchte. Im Laufe der Zeit
          entwickelte sich ein weiterer Schwerpunkt in der Behandlung von Beschwerden im
          Kopfbereich, wie Migräne, Schwindel und Tinnitus.
        </p>
        <p>
          In meiner therapeutischen Arbeit lege ich großen Wert auf eine individuelle Betreuung.
          Gemeinsam definieren wir realistische Ziele und bauen auf vorhandenen Ressourcen auf. Der
          Schwerpunkt meiner Therapie liegt auf aktiven, funktionellen Übungen, die gezielt in den
          Alltag integriert werden können sowie ergänzende passive Maßnahmen. Bei Bedarf berate ich
          zu Hilfsmitteln sowie weiteren Behandlungsmöglichkeiten. Dabei steht für mich immer im
          Vordergrund, die Beschwerden zu reduzieren und die Lebensqualität nachhaltig zu steigern.
        </p>
        <span>
          <strong>Berufserfahrung:</strong>
        </span>
        <ul>
          <li>seit 04/2026 freiberufliche Physiotherapeutin im HNO Zentrum 19, Wien</li>
          <li>
            seit 06/2025 freiberufliche Physiotherapeutin in der Praxis &quot;Physio Allround&quot;,
            Wien
          </li>
          <li>
            12/2023-07/2025 Intensivstation für Innere Medizin und Schwerbrandverletzte im AKH Wien
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
        <p>
          <strong>Achtung:</strong> Da ich eine <strong>Wahltherapeutin</strong> bin, wird nach
          Ansuchen nur ein Teil der Kosten von der Krankenkassa übernommen! Mehr Infos erhalten Sie
          beim Gespräch - persönlich oder telefonisch!
        </p>
      </Section>

      <Section>
        <Heading as="h2" id={headingIds.derWegZurPhysiotherapie}>
          Der Weg zur Physiotherapie
        </Heading>
        <ol>
          <li>
            <strong>Verordnung vom Arzt:</strong> 10x Neurophysiotherapie/Physiotherapie à 45 Min
            (oder 60 Min) - bei Hausbesuchen muss der Hausbesuch verordnet sein!
          </li>
          <li>
            <span>
              <strong>Bewilligung durch Krankenkassa:</strong>
            </span>
            <ol>
              <li>ÖGK und BVA: bis auf Weiteres keine Bewilligung notwendig</li>
              <li>KFA: Bewilligung vor der 1. Therapieeinheit notwendig!</li>
            </ol>
          </li>
          <li>
            <strong>Termin buchen:</strong> siehe unter{' '}
            <Anchor href={`/#${headingIds.standorteTerminbuchung}`}>
              &quot;Standorte & Terminbuchung&quot;
            </Anchor>
          </li>
          <li>
            <strong>Ersttermin:</strong> gründliche Befundung des aktuellen Zustandes, gemeinsame
            Zielvereinbarung, erste Behandlungsmaßnahmen → (bewilligte) Verordnung und ärztliche
            Befunde falls vorhanden mitnehmen
          </li>
          <li>
            <strong>Folgetermine:</strong> bequeme Kleidung, Handtuch, Trinkflasche mitbringen
          </li>
        </ol>
        <p>
          <strong>Terminabsagen</strong> müssen bis 24h vor dem vereinbarten Termin erfolgen
          (telefonisch oder per E-Mail). Bei kurzfristigen Absagen wird ein Entfallshonorar
          verrechnet!
        </p>
        <p>
          <strong>Achtung:</strong> Da ich eine <strong>Wahltherapeutin</strong> bin, wird nach
          Ansuchen nur ein Teil der Kosten von der Krankenkassa übernommen! Mehr Infos erhalten Sie
          beim Gespräch - persönlich oder telefonisch!
        </p>
      </Section>

      <Section>
        <Heading as="h2" id={headingIds.kooperierendeAerztInnen}>
          Kooperierende Ärzt*innen:
        </Heading>
        <p>
          Priv.-Doz. Mag. Dr. Georg Dirnberger - Facharzt für Neurologie & Psychologe
          <br />
          Dominikanerbastei 3, 1010 Wien
          <br />
          <a href="https://neurologe-dirnberger.at">https://neurologe-dirnberger.at</a>
        </p>
      </Section>

      <Section>
        <Heading as="h2" id={headingIds.leistungen}>
          Leistungen
        </Heading>
        <table>
          <tbody>
            <tr>
              <td>Physiotherapie 60 Min</td>
              <td>120€</td>
            </tr>
            <tr>
              <td>Physiotherapie 45 Min</td>
              <td>100€</td>
            </tr>
            <tr>
              <td>Physiotherapie 30 Min</td>
              <td>70€</td>
            </tr>
          </tbody>
        </table>
        <p>
          → bei <strong>Hausbesuchen</strong> wird pro Einheit eine zusätzliche Pauschale
          verrechnet!
        </p>
      </Section>

      <Section>
        <Heading as="h2" id={headingIds.standorteTerminbuchung}>
          Standorte & Terminbuchung
        </Heading>

        <LocationCards>
          <LocationCard>
            <LocationCardHeading>Praxis &quot;Physio Allround&quot;</LocationCardHeading>
            <span>
              Traungasse 1, Stiege 4, Tür 14
              <br />
              1030 Wien
            </span>
            <LocationCardSchedule>
              <strong>Termine:</strong>{' '}
              <LocationCardScheduleValue>Montags 13:30 bis 19:00 Uhr</LocationCardScheduleValue>
            </LocationCardSchedule>
            <a href="https://termine-physioallround.as.me/schedule/058f2326/category/01%2520Physiotherapie%2520/appointment/9235042/calendar/12010307">
              Termin buchen - Physio Allround
            </a>
          </LocationCard>

          <LocationCard>
            <LocationCardHeading>HNO Zentrum 19</LocationCardHeading>
            <span>
              Muthgasse 36, Stock 3
              <br />
              1190 Wien
            </span>
            <LocationCardSchedule>
              <strong>Termine:</strong>{' '}
              <LocationCardScheduleValue>Freitag 14-18 Uhr</LocationCardScheduleValue>
            </LocationCardSchedule>
            <a href="https://app.synaptos.at/myapp/smartSchedule/scheduleOnlineBookingCore.jsf?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzeW5hcHRvcyIsImlhdCI6MTc3NDE3MDc2NiwiYXVkIjoiYmMxYTBhMjA4NzVjYjBkMTM5OTM4Njk5OTQ0MjQ0MWVmNiJ9.7oo4SklusB77xN3LLlIIkGvRYsEc8b0rO8U-64FhE1C7ApGQXAyd-5F-Q29-1TgTfU56QrZRo2NpkGeLYzUkWQ;">
              Termin buchen - HNO Zentrum 19
            </a>
          </LocationCard>
        </LocationCards>

        <ContactInformation>
          <strong>Weitere Kontaktmöglichkeiten:</strong>
          <br />
          E-Mail: <a href="mailto:physio.kerschbaum@gmx.at">physio.kerschbaum@gmx.at</a>
          <br />
          Telefon: <a href="tel:+4368110799824">+43 681 10799824</a>
        </ContactInformation>
      </Section>

      <Section as="footer" ContentComponent={FooterSectionContent}>
        <Anchor href="/impressum">Impressum</Anchor> und{' '}
        <Anchor href="/datenschutz">Datenschutz</Anchor>
      </Section>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Physiotherapie Jasmin Kerschbaum',
  openGraph: {
    title: 'Physiotherapie Jasmin Kerschbaum',
  },
};

export default HomePage;

type SectionProps = {
  children: React.ReactNode;
  as?: 'section' | 'footer';
  ContentComponent?: React.ElementType<React.ComponentPropsWithoutRef<'div'>>;
};

const Section: React.FC<SectionProps> = ({
  children,
  as = 'section',
  ContentComponent = DefaultSectionContent,
}) => {
  return (
    <SectionRoot as={as}>
      <ContentComponent>{children}</ContentComponent>
    </SectionRoot>
  );
};

const Heading: React.FC<
  React.ComponentPropsWithoutRef<'h1'> & {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
> = ({ as, children, className, ...delegated }) => {
  return (
    <HeadingRoot
      as={as}
      {...delegated}
      className={[className, merriweather.className].filter(Boolean).join(' ')}
    >
      {children}
    </HeadingRoot>
  );
};

const SectionRoot = styled.section`
  container-name: container-section;
  container-type: inline-size;

  &:nth-last-child(even) {
    background-color: var(--color-tertiary);
  }

  &:nth-last-child(odd) {
    background-color: var(--color-quaternary);
  }
`;

const BaseSectionContent = styled.div`
  --section-padding-inline: 0px;
  --section-padding-block-end: 32px;

  max-width: var(--app-box-width);
  margin-inline: auto;

  & > ol,
  ul {
    margin-block-start: 0.25em;
  }

  & > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-block-start: 32px;
  }

  & > *:first-child {
    margin-block-start: 0;
  }

  & > *:last-child {
    padding-block-end: var(--section-padding-block-end);
    margin-block-end: 0;
  }
`;

const DefaultSectionContent = styled(BaseSectionContent)`
  --section-padding-inline: var(--app-padding-inline);

  padding-inline: var(--section-padding-inline);
`;

const UnpaddedSectionContent = styled(BaseSectionContent)`
  --section-padding-block-end: 0px;

  padding-inline: 0;
`;

const HeroSectionContent = styled(UnpaddedSectionContent)`
  height: 280px;

  @container container-section (min-width: 570px) {
    height: 400px;
  }
`;

const FooterSectionContent = styled(DefaultSectionContent)`
  --section-padding-block-end: 0px;

  padding-block: calc(1 * var(--spacing-base));
`;

const CarouselSlideImage = styled(Image)`
  object-fit: cover;
`;

const AboutImageContainer = styled.div`
  position: relative;
  height: 400px;
  margin-inline: calc(-1 * var(--section-padding-inline));

  container-type: size;
  container-name: image-container;
`;

const AboutImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 50%;

  @container image-container (aspect-ratio > 1.10) {
    object-position: 50% 40%;
  }

  @container image-container (aspect-ratio > 1.25) {
    object-position: 50% 25%;
  }
`;

const LocationCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-block-start: 0.5em;
`;

const LocationCard = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 20px;

  background-color: #f3f3f3;
  border: 1px solid var(--color-fg);
  border-radius: 8px;
`;

const LocationCardHeading = styled.strong`
  display: block;
  margin-block-end: calc(0.5 * var(--spacing-base));

  font-size: var(--font-size-lg);
  text-wrap: nowrap;
`;

const LocationCardSchedule = styled.p`
  margin-block: 0.6em;
`;

const LocationCardScheduleValue = styled.span`
  text-wrap: nowrap;
`;

const ContactInformation = styled.p`
  margin-block-start: 1.2em;
`;

const HeadingRoot = styled.h1`
  scroll-margin-block-start: var(--header-height);
`;
