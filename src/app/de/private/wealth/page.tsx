import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const wealthServices = [
  {
    title: 'Anlageverwaltung',
    services: [
      'Portfoliomanagement',
      'Vermögensallokation',
      'Risikomanagement',
      'Anlagestrategie',
      'Performanceüberwachung',
    ],
  },
  {
    title: 'Vermögensplanung',
    services: [
      'Finanzplanung',
      'Nachlassplanung',
      'Steuerplanung',
      'Nachfolgeplanung',
      'Philanthropische Planung',
    ],
  },
  {
    title: 'Bankdienstleistungen',
    services: [
      'Private Banking',
      'Kreditlösungen',
      'Währungsmanagement',
      'Strukturierte Produkte',
      'Alternative Anlagen',
    ],
  },
];

const benefits = [
  {
    title: 'Persönlicher Service',
    description: 'Maßgeschneiderte Vermögensverwaltungslösungen, die auf Ihre individuellen Bedürfnisse und Ziele ausgerichtet sind.',
  },
  {
    title: 'Globale Expertise',
    description: 'Zugang zu erstklassigen Anlagemöglichkeiten und internationalen Märkten.',
  },
  {
    title: 'Umfassende Lösungen',
    description: 'Integrierter Ansatz für Anlagen, Planung und Bankdienstleistungen.',
  },
  {
    title: 'Langfristige Partnerschaft',
    description: 'Engagiertes Team, das sich dem Wachstum und der Erhaltung Ihres Vermögens über Generationen hinweg widmet.',
  },
];

const process = [
  {
    title: 'Erstgespräch',
    description: 'Wir verstehen Ihre finanziellen Ziele, Risikotoleranz und individuellen Umstände.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategieentwicklung',
    description: 'Wir erstellen eine umfassende Vermögensverwaltungsstrategie, die auf Ihre Bedürfnisse zugeschnitten ist.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Umsetzung',
    description: 'Wir setzen Ihre Strategie in den Bereichen Anlagen, Planung und Bankdienstleistungen um.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Laufende Verwaltung',
    description: 'Wir verwalten Ihr Portfolio aktiv und passen Strategien bei Bedarf an.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WealthPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Vermögensverwaltung"
        description="Professionelle Vermögensverwaltung, die Ihnen hilft, Ihr Vermögen über Generationen hinweg zu vermehren, zu schützen und zu übertragen. Wir bieten umfassende Lösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind."
        primaryButtonText="Jetzt Starten"
        secondaryButtonText="Unsere Dienste"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Warum unsere Vermögensverwaltung wählen?"
        benefits={benefits}
      />

      <ServicesSection
        title="Unsere Vermögensverwaltungsdienstleistungen"
        services={wealthServices}
      />

      <ProcessSection
        title="Unser Prozess"
        description="Wir folgen einem strukturierten Ansatz, um Ihnen bei der Erreichung Ihrer Vermögensziele zu helfen."
        steps={process}
      />

      <CTASection
        title="Bereit, Ihr Vermögen zu vermehren?"
        description="Kontaktieren Sie uns noch heute für eine persönliche Vermögensverwaltungsberatung und machen Sie den ersten Schritt in eine sichere finanzielle Zukunft."
        primaryButtonText="Beratung Planen"
        secondaryButtonText="Kontakt"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="/de/contact"
      />

      <Footer />
    </main>
  );
}
