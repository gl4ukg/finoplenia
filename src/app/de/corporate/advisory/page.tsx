import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const advisoryServices = [
  {
    title: 'Strategieberatung',
    services: [
      'Geschäftsstrategieentwicklung',
      'Markteintrittsanalyse',
      'Wachstumsstrategie',
      'Digitale Transformation',
      'Innovationsstrategie',
    ],
  },
  {
    title: 'Transaktionsberatung',
    services: [
      'Fusionen & Übernahmen',
      'Due Diligence',
      'Bewertungsdienstleistungen',
      'Post-Merger Integration',
      'Unternehmensrestrukturierung',
    ],
  },
  {
    title: 'Leistungsverbesserung',
    services: [
      'Operative Exzellenz',
      'Kostenoptimierung',
      'Prozessoptimierung',
      'Working Capital Management',
      'Supply Chain Optimierung',
    ],
  },
];

const benefits = [
  {
    title: 'Strategische Einblicke',
    description: 'Tiefgreifende Branchenkenntnisse und strategische Expertise für Unternehmenswachstum.',
  },
  {
    title: 'Bewährte Methodik',
    description: 'Strukturierter Ansatz basierend auf Best Practices und bewährten Frameworks.',
  },
  {
    title: 'Umsetzungsfokus',
    description: 'Praktische Lösungen mit klaren Implementierungsplänen.',
  },
  {
    title: 'Messbare Ergebnisse',
    description: 'Klare Metriken und KPIs zur Verfolgung und Demonstration der Wertschöpfung.',
  },
];

const process = [
  {
    title: 'Beurteilung',
    description: 'Wir analysieren Ihre aktuelle Situation und identifizieren wichtige Chancen und Herausforderungen.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategieentwicklung',
    description: 'Wir entwickeln eine umfassende Strategie, die auf Ihre Unternehmensziele abgestimmt ist.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Umsetzung',
    description: 'Wir unterstützen die Durchführung strategischer Initiativen und Transformationsprogramme.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Werterkennung',
    description: 'Wir verfolgen und messen Ergebnisse, um Wertschöpfung und Nachhaltigkeit sicherzustellen.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function CorporateAdvisoryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Unternehmensberatung"
        description="Strategische Unternehmensberatung zur Förderung des Wachstums und zur Schaffung nachhaltiger Werte. Wir unterstützen Sie dabei, Herausforderungen in Chancen zu verwandeln und Ihre Unternehmensziele zu erreichen."
        primaryButtonText="Jetzt Starten"
        secondaryButtonText="Unsere Dienste"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Warum unsere Beratungsdienste wählen?"
        benefits={benefits}
      />

      <ServicesSection
        title="Unsere Beratungsdienste"
        categories={advisoryServices}
      />

      <ProcessSection
        title="Unser Prozess"
        description="Wir folgen einem strukturierten Ansatz, um Ihnen bei der Erreichung Ihrer Geschäftstransformationsziele zu helfen."
        steps={process}
      />

      <CTASection
        title="Bereit Ihr Unternehmen zu transformieren?"
        description="Kontaktieren Sie uns noch heute für eine Beratung und erfahren Sie, wie wir Ihr Unternehmen voranbringen können."
        primaryButtonText="Beratung Planen"
        secondaryButtonText="Kontakt"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="/de/contact"
      />

      <Footer />
    </main>
  );
}
