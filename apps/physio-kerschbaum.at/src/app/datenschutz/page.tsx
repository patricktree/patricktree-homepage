import type { Metadata } from 'next';
import { ArrowLeftCircle } from 'react-feather';

import {
  BacklinkAnchor,
  BackLinkParagraph,
  Heading,
  PageArticle,
} from '#pkg/components/commons.jsx';

function DatenschutzPage() {
  return (
    <PageArticle>
      <Heading as="h1">Datenschutzerklärung</Heading>

      <Heading as="h2">1. Verantwortliche Stelle</Heading>

      <p>
        Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten auf dieser Website ist:
      </p>
      <p>
        <strong>Physiotherapie Jasmin Kerschbaum</strong>
        <br />
        Jasmin Kerschbaum, BSc, Physiotherapeutin
        <br />
        Telefon: <a href="tel:+4368110799824">+43 681 10799824</a>
        <br />
        E-Mail: <a href="mailto:physio.kerschbaum@gmx.at">physio.kerschbaum@gmx.at</a>
      </p>
      <p>
        <strong>Praxisstandorte:</strong>
        <br />
        Traungasse 1/4/14, 1030 Wien
        <br />
        Muthgasse 36, 1190 Wien
      </p>

      <Heading as="h2">2. Allgemeines zur Datenverarbeitung</Heading>

      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre
        Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
      </p>
      <p>
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
        können.
      </p>

      <Heading as="h2">3. Erhebung und Verarbeitung personenbezogener Daten</Heading>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
        funktionsfähigen Website sowie unserer Leistungen erforderlich ist.
      </p>
      <p>Folgende Daten können verarbeitet werden:</p>
      <ul>
        <li>Name</li>
        <li>Kontaktdaten (Telefonnummer, E-Mail-Adresse)</li>
        <li>IP-Adresse</li>
        <li>Nutzungsdaten der Website</li>
        <li>Gesundheitsdaten im Rahmen der Behandlung</li>
      </ul>

      <Heading as="h2">4. Kontaktaufnahme</Heading>
      <p>
        Wenn Sie per E-Mail oder Kontaktformular mit uns Kontakt aufnehmen, werden Ihre angegebenen
        Daten zwecks Bearbeitung der Anfrage sowie für den Fall von Anschlussfragen gespeichert.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong>
      </p>
      <ul>
        <li>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)</li>
        <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
      </ul>

      <Heading as="h2">5. E-Mail-Kommunikation</Heading>
      <p>
        Für die Kommunikation nutzen wir einen externen E-Mail-Dienst (GMX). Dabei werden
        personenbezogene Daten (z.&nbsp;B. Name, E-Mail-Adresse, Inhalte der Nachricht) verarbeitet.
      </p>
      <p>
        Wir weisen darauf hin, dass die Datenübertragung per E-Mail Sicherheitslücken aufweisen
        kann. Ein vollständiger Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
      </p>
      <p>Die Nutzung der E-Mail-Kommunikation erfolgt freiwillig.</p>

      <Heading as="h2">6. Terminbuchung</Heading>

      <Heading as="h3">Synaptos (Praxissoftware)</Heading>
      <p>
        Auf dieser Seite sind Funktionen des Dienstes Synaptos eingebunden (Online-Terminanfrage).
        Anbieter dieses Dienstes ist die Synaptos GmbH, St. Veiter Straße 188/1 EG, 9020 Klagenfurt
        am Wörthersee, Österreich. Synaptos ist eine browserbasierte Praxissoftware für
        Therapeut:innen, Ärzt:innen und alle Selbstständigen im Gesundheitswesen. Daten, welche Sie
        an Synaptos weitergeben, werden dort empfangen, verarbeitet und gespeichert.
      </p>
      <p>
        Im Rahmen der Online-Terminbuchung werden personenbezogene Daten (z.&nbsp;B. Name,
        Kontaktdaten sowie Terminangaben) ausschließlich zum Zweck der Terminvereinbarung und
        Terminorganisation verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO (Vertragserfüllung bzw. Terminvereinbarung).
      </p>
      <p>
        Weitere Informationen hierzu finden Sie in der{' '}
        <a href="https://synaptos.at/datenschutzerklaerung/">Datenschutzerklärung von Synaptos</a>.
      </p>

      <Heading as="h3">Acuity Scheduling (Online-Terminbuchung – je nach Standort)</Heading>
      <p>
        An einzelnen Praxisstandorten wird zusätzlich das Online-Terminbuchungssystem Acuity
        Scheduling eingesetzt.
      </p>
      <p>
        Bei der Nutzung dieses Dienstes werden personenbezogene Daten (z.&nbsp;B. Name,
        E-Mail-Adresse, Telefonnummer, Terminangaben) an den Anbieter übermittelt und dort
        verarbeitet.
      </p>
      <p>
        Acuity Scheduling ist ein Dienst der Squarespace Inc. mit Sitz in den USA. Es kann daher
        nicht ausgeschlossen werden, dass Daten in ein Drittland übermittelt werden. Die
        Übermittlung erfolgt auf Grundlage geeigneter Garantien gemäß Art. 44 f. DSGVO (z.&nbsp;B.
        Standardvertragsklauseln).
      </p>
      <p>
        Die Nutzung der Online-Terminbuchung ist freiwillig. Alternativ können Termine telefonisch
        oder direkt vor Ort vereinbart werden.
      </p>

      <Heading as="h3">Hinweis zur unterschiedlichen Nutzung</Heading>
      <p>
        Je nach Praxisstandort erfolgt die Terminverwaltung entweder ausschließlich über die
        Praxissoftware Synaptos oder ergänzend über das Online-Buchungssystem Acuity Scheduling.
      </p>

      <Heading as="h2">7. Hosting der Website</Heading>
      <p>
        Unsere Website wird bei einem externen Dienstleister gehostet. Dabei werden automatisch
        folgende Daten verarbeitet:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Browsertyp und Version</li>
        <li>Betriebssystem</li>
      </ul>
      <p>Diese Daten sind erforderlich, um die Website technisch bereitzustellen.</p>
      <p>
        <strong>Rechtsgrundlage:</strong>
      </p>
      <ul>
        <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
      </ul>

      <Heading as="h2">8. Ihre Rechte</Heading>
      <p>Sie haben jederzeit folgende Rechte gemäß DSGVO:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
      </ul>

      <Heading as="h2">9. Beschwerderecht</Heading>
      <p>
        Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
        verstößt, haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren:
      </p>
      <p>
        Österreichische Datenschutzbehörde
        <br />
        Barichgasse 40–42
        <br />
        1030 Wien
      </p>

      <Heading as="h2">10. Speicherung von Daten</Heading>
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke
        erforderlich ist bzw. gesetzliche Aufbewahrungsfristen bestehen.
      </p>

      <Heading as="h2">11. Datensicherheit</Heading>
      <p>
        Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen
        Manipulation, Verlust oder unbefugten Zugriff zu schützen.
      </p>

      <Heading as="h2">12. Hinweis zu Gesundheitsdaten</Heading>
      <p>
        Im Rahmen physiotherapeutischer Leistungen werden Gesundheitsdaten verarbeitet. Diese zählen
        zu den besonders schützenswerten Daten gemäß Art. 9 DSGVO.
      </p>
      <p>
        Die Verarbeitung erfolgt ausschließlich zum Zweck der Behandlung und unterliegt der
        gesetzlichen Verschwiegenheitspflicht.
      </p>

      <Heading as="h2">13. Änderungen dieser Datenschutzerklärung</Heading>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte
        rechtliche Anforderungen oder neue Leistungen anzupassen.
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
  title: 'Datenschutzerklärung – Physiotherapie Jasmin Kerschbaum',
  openGraph: {
    title: 'Datenschutzerklärung – Physiotherapie Jasmin Kerschbaum',
  },
};

export default DatenschutzPage;
