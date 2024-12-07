import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Timeline } from '../../components/Timeline';
import { HeroSection } from '../../components/HeroSection';
import { ValuesSection } from '../../components/ValuesSection';

const timelineEvents = [
  {
    year: '2010',
    title: 'Gründung',
    description: 'Finoplenia wurde mit der Vision gegründet, umfassende Finanzdienstleistungen für Privat- und Firmenkunden anzubieten.',
  },
  {
    year: '2013',
    title: 'Digitale Transformation',
    description: 'Einführung unserer digitalen Plattform, um Finanzdienstleistungen für unsere Kunden zugänglicher zu machen.',
  },
  {
    year: '2015',
    title: 'Internationale Expansion',
    description: 'Erweiterung unserer Dienstleistungen auf internationale Märkte mit Fokus auf grenzüberschreitendes Vermögensmanagement.',
  },
  {
    year: '2018',
    title: 'Start der Unternehmensberatung',
    description: 'Einführung umfassender Beratungsdienstleistungen zur Unterstützung von Unternehmen auf ihrem Wachstumskurs.',
  },
  {
    year: '2020',
    title: 'Fokus auf Nachhaltigkeit',
    description: 'Integration von ESG-Prinzipien in unsere Anlagestrategien und Unternehmensabläufe.',
  },
  {
    year: '2023',
    title: 'Innovations-Hub',
    description: 'Etablierung unseres Innovations-Hubs zur Entwicklung zukunftsweisender Finanzlösungen.',
  },
];

const values = [
  {
    title: 'Integrität',
    description: 'Wir halten in allen unseren Geschäftsbeziehungen höchste Integritätsstandards ein.',
  },
  {
    title: 'Exzellenz',
    description: 'Wir streben bei jedem Service, den wir anbieten, nach Exzellenz.',
  },
  {
    title: 'Innovation',
    description: 'Wir entwickeln uns kontinuierlich weiter, um sich verändernde Finanzbedürfnisse zu erfüllen.',
  },
  {
    title: 'Kundenorientierung',
    description: 'Der Erfolg unserer Kunden steht im Mittelpunkt all unseres Handelns.',
  },
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Über Finoplenia"
        description="Wir sind ein führender Finanzdienstleister, der sich dafür einsetzt, unseren Kunden durch fachkundige Beratung und innovative Lösungen bei der Erreichung ihrer finanziellen Ziele zu helfen."
        showButtons={false}
        className="bg-gradient-to-b from-primary/5 to-white"
      />

      <ValuesSection
        title="Unsere Werte"
        values={values}
      />

      {/* History Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Unsere Geschichte
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Von unserer Gründung bis heute setzen wir uns für Exzellenz in Finanzdienstleistungen ein.
            </p>
          </div>
          <Timeline events={timelineEvents} isGerman={true} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
