import { styled } from '@pigment-css/react';
import type { Metadata } from 'next';
import type React from 'react';
import { ArrowRightCircle } from 'react-feather';

import { headingIds } from '#pkg/app/page-constants.js';
import photoshooting_11DSC0068 from '#pkg/assets/11-DSC_0068.jpg';
import photoshooting_15DSC0081 from '#pkg/assets/15-DSC_0081.jpg';
import photoshooting_20DSC0108 from '#pkg/assets/20-DSC_0108.jpg';
import photoshooting_24DSC01312 from '#pkg/assets/24-DSC_0131-2.jpg';
import photoshooting_3DSC0018 from '#pkg/assets/3-DSC_0018.jpg';
import photoshooting_7DSC0039 from '#pkg/assets/7-DSC_0039.jpg';
import photoshooting_8DSC0042 from '#pkg/assets/8-DSC_0042.jpg';
import icon_brain from '#pkg/assets/icons/brain.svg';
import icon_head_confused from '#pkg/assets/icons/head-confused.svg';
import icon_headache from '#pkg/assets/icons/headache.svg';
import icon_spine from '#pkg/assets/icons/spine.svg';
import { AboutImage, AboutImageContainer, Heading } from '#pkg/components/commons.jsx';
import { ImageCarousel, Slide } from '#pkg/components/image-carousel/index.js';
import { Anchor } from '#pkg/elements/Anchor.jsx';
import { Image } from '#pkg/elements/Image.jsx';

const diseaseIconHeight = 72;

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
          Herzlich Willkommen bei Physiotherapie Jasmin Kerschbaum
        </Heading>
        <p>
          Ihre Expertin für Beschwerdefreiheit und mehr Leichtigkeit im Alltag. Mit Kompetenz, Herz
          und Freude begleite ich dir dabei, alltägliche Einschränkungen nachhaltig zu verbessern -
          ganz auf dich abgestimmt.
        </p>
        <p>
          Mein Name ist Jasmin Kerschbaum. Ich bin als freiberufliche Physiotherapeutin in Wien
          tätig.
          <br />
          Hausbesuche sind auf Anfrage (per Mail oder Telefon) ebenso möglich.
        </p>

        <HeroActions>
          <PrimaryActionLink href={`/#${headingIds.standorteTerminbuchung}`}>
            Termin buchen
          </PrimaryActionLink>
        </HeroActions>
      </Section>
      <Section>
        <Heading as="h2" id={headingIds.ihreExpertinFuer}>
          Ihre Expertin für:
        </Heading>

        <CardsGrid>
          <Card>
            <CardIcon>
              <Image
                alt=""
                src={
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  icon_brain
                }
                height={diseaseIconHeight}
              />
            </CardIcon>
            <DiseaseCardHeading>Neurologie</DiseaseCardHeading>
            <FancyDivider />
            <span>
              Therapie bei neurologischen Erkrankungen wie Multiple Sklerose, ALS, Schlaganfall und
              anderen neurologischen Beschwerden.
            </span>
          </Card>

          <Card>
            <CardIcon>
              <Image
                alt=""
                src={
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  icon_spine
                }
                height={diseaseIconHeight}
              />
            </CardIcon>
            <DiseaseCardHeading>Rückenbeschwerden</DiseaseCardHeading>
            <FancyDivider />
            <span>
              Gezielte Behandlung bei akuten sowie chronischen Rückenschmerzen, Bandscheibenvorfall
              oder Instabilitäten - für mehr Beweglichkeit und weniger Schmerzen.
            </span>
          </Card>

          <Card>
            <CardIcon>
              <Image
                alt=""
                src={
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  icon_headache
                }
                height={diseaseIconHeight}
              />
            </CardIcon>
            <DiseaseCardHeading>Kopfschmerzen & Migräne</DiseaseCardHeading>
            <FancyDivider />
            <span>
              Individuelle ganzheitliche Behandlung von Kopfschmerzen und Migräne - mit Fokus auf
              Ursachen und langfristiger Linderung.
            </span>
          </Card>

          <Card>
            <CardIcon>
              <Image
                alt=""
                src={
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  icon_head_confused
                }
                height={diseaseIconHeight}
              />
            </CardIcon>
            <DiseaseCardHeading>Schwindel & Tinnitus</DiseaseCardHeading>
            <FancyDivider />
            <span>
              Gezielte Therapie bei Schwindel, Gleichgewichtsstörungen und Tinnitus - zur
              Verbesserung der Stabilität im Alltag.
            </span>
          </Card>
        </CardsGrid>
      </Section>

      <Section>
        <Heading as="h2" id={headingIds.ueberMich}>
          Über mich
        </Heading>

        <AboutImageContainer>
          <AboutImage src={photoshooting_24DSC01312} alt="" fill />
        </AboutImageContainer>

        <p>
          Bereits vor meinem Studium war ich von der Idee begeistert, mit Menschen zu arbeiten und
          ihnen dabei zu helfen, das Beste aus ihrem Alltag herauszuholen. Patient*innen dabei zu
          unterstützen, Schmerzen zu lindern, die Beweglichkeit zu verbessern und somit die
          Lebensqualität zu steigern - darauf liegt mein Fokus in der Physiotherapie.
        </p>

        <SubpageAnchor href="/ueber-mich">
          <ArrowRightCircle size="1em" />
          Mehr Infos
        </SubpageAnchor>
      </Section>

      <Section>
        <Heading as="h2" id={headingIds.vierSchritteZurPhysiotherapie}>
          4 Schritte zur Physiotherapie
        </Heading>

        <ol>
          <li>Verordnung vom Arzt</li>
          <li>Bewilligung durch Krankenkasse (nur bei SVS und KFA notwendig)</li>
          <li>Termin buchen</li>
          <li>Ersttermin</li>
        </ol>

        <SubpageAnchor href="/der-weg-zur-physiotherapie">
          <ArrowRightCircle size="1em" />
          Mehr Infos
        </SubpageAnchor>
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
        <Heading as="h2" id={headingIds.leistungenUndPreise}>
          Leistungen und Preise
        </Heading>
        <table>
          <tbody>
            <tr>
              <td>Physiotherapie Ersttermin 60 Min</td>
              <td>120€</td>
            </tr>
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
          Bei <strong>Hausbesuchen</strong> wird pro Einheit eine zusätzliche Pauschale von 35€
          verrechnet.
        </p>
      </Section>

      <Section>
        <Heading as="h2" id={headingIds.standorteTerminbuchung}>
          Standorte & Terminbuchung
        </Heading>

        <CardsGrid>
          <Card>
            <CardHeading>Praxis &quot;Physio Allround&quot;</CardHeading>
            <span>
              Traungasse 1, Stiege 4, Tür 14
              <br />
              1030 Wien
            </span>
            <LocationCardSchedule>
              <strong>Termine:</strong>
              <br />
              <LocationCardScheduleValue>Montags 13:30 bis 19:00 Uhr</LocationCardScheduleValue>
              <br />
              <LocationCardScheduleValue>Freitags 14:00 bis 18:00 Uhr</LocationCardScheduleValue>
            </LocationCardSchedule>
            <a href="https://termine-physioallround.as.me/?calendarID=12010307">
              Termin buchen - Physio Allround
            </a>
          </Card>

          <Card>
            <CardHeading>HNO Zentrum 19</CardHeading>
            <span>
              Muthgasse 36, Stock 3
              <br />
              1190 Wien
            </span>
            <LocationCardSchedule>
              <strong>Termine:</strong>
              <br />
              <LocationCardScheduleValue>Freitags 08:00 bis 13:00 Uhr</LocationCardScheduleValue>
            </LocationCardSchedule>
            <a href="https://app.synaptos.at/myapp/smartSchedule/scheduleOnlineBookingCore.jsf?jwt=eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzeW5hcHRvcyIsImlhdCI6MTc3NDE3MDc2NiwiYXVkIjoiYmMxYTBhMjA4NzVjYjBkMTM5OTM4Njk5OTQ0MjQ0MWVmNiJ9.7oo4SklusB77xN3LLlIIkGvRYsEc8b0rO8U-64FhE1C7ApGQXAyd-5F-Q29-1TgTfU56QrZRo2NpkGeLYzUkWQ;">
              Termin buchen - HNO Zentrum 19
            </a>
          </Card>
        </CardsGrid>

        <p>
          <strong>Weitere Kontaktmöglichkeiten (auch für Terminbuchung):</strong>
          <br />
          E-Mail: <a href="mailto:physio.kerschbaum@gmx.at">physio.kerschbaum@gmx.at</a>
          <br />
          Telefon: <a href="tel:+4368110799824">+43 681 10799824</a>
        </p>

        <p>
          <strong>Terminabsagen</strong> müssen bis 24h vor dem vereinbarten Termin erfolgen,
          telefonisch oder per E-Mail. Bei kurzfristigen Absagen wird ein Entfallshonorar
          verrechnet.
        </p>

        <p>
          <strong>Achtung:</strong> Da ich eine <strong>Wahltherapeutin</strong> bin, wird nach
          Ansuchen ein Teil der Kosten von der Krankenkassa übernommen! Mehr Infos erhalten Sie beim
          Gespräch - persönlich oder telefonisch!
        </p>
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

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(1.5 * var(--spacing-base));
  margin-block: calc(2 * var(--spacing-base));
`;

const PrimaryActionLink = styled(Anchor)`
  display: inline-flex;
  padding: 10px 18px;

  font-weight: var(--font-weight-bold);
  color: var(--color-bg);
  text-decoration: none;

  background-color: var(--color-primary);
  border: 1px solid var(--color-fg);
  border-radius: 9999px;
  box-shadow: var(--shadow-style);
`;

const SubpageAnchor = styled(Anchor)`
  display: flex;
  gap: calc(0.5 * var(--spacing-base));
  align-items: center;
`;

const CardsGrid = styled.div`
  --card-min-with: 300px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--card-min-with), 100%), 1fr));
  gap: 16px;
  margin-block-start: 0.5em;
`;

const Card = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 20px;

  background-color: var(--color-white);
  border: 1px solid var(--color-fg);
  border-radius: 8px;
`;

const CardIcon = styled.div`
  display: flex;
  justify-content: center;

  margin-block-end: calc(2 * var(--spacing-base));
`;

const CardHeading = styled.strong`
  display: flex;
  margin-block-end: calc(0.5 * var(--spacing-base));

  font-size: var(--font-size-lg);
`;

const LocationCardSchedule = styled.div`
  margin-block: 0.6em;
`;

const LocationCardScheduleValue = styled.span``;

const FancyDivider = styled.div`
  --spacing-block: calc(2 * var(--spacing-base));
  width: 64px;
  margin-block-start: var(--spacing-block);
  margin-block-end: var(--spacing-block);
  margin-inline: auto;
  border: 1px solid var(--color-primary);
  border-radius: 999px;
`;

const DiseaseCardHeading = styled(CardHeading)`
  justify-content: center;
`;
