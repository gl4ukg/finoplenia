import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const taxServices = [
  {
    title: 'Steuerplanung',
    services: [
      'Persönliche Steuerplanung',
      'Anlagensteuerstrategien',
      'Erbschaftssteuerplanung',
      'Internationale Steuerplanung',
      'Steuereffiziente Strukturierung',
    ],
  },
  {
    title: 'Steuercompliance',
    services: [
      'Steuererklärungsvorbereitung',
      'Steuerprüfungsunterstützung',
      'Steuerdokumentation',
      'Regulatorische Compliance',
      'Steuerkalendermanagement',
    ],
  },
  {
    title: 'Spezielle Dienstleistungen',
    services: [
      'Grenzüberschreitende Besteuerung',
      'Unternehmenssteuerplanung',
      'Immobilienbesteuerung',
      'Stiftungs- & Treuhandbesteuerung',
      'Vermögensübertragungssteuer',
    ],
  },
];

const benefits = [
  {
    title: 'Expertenberatung',
    description: 'Professionelle Steuerberatung von erfahrenen Spezialisten für nationale und internationale Besteuerung.',
  },
  {
    title: 'Steueroptimierung',
    description: 'Strategische Planung zur Minimierung der Steuerlast bei vollständiger Compliance.',
  },
  {
    title: 'Umfassende Lösungen',
    description: 'Integrierter Ansatz für private, Investment- und Unternehmensbesteuerung.',
  },
  {
    title: 'Proaktive Unterstützung',
    description: 'Regelmäßige Updates zu Steuerrechtsänderungen und vorausschauende Planung zukünftiger Verpflichtungen.',
  },
];

const process = [
  {
    title: 'Beurteilung',
    description: 'Wir analysieren Ihre aktuelle Steuersituation und identifizieren Optimierungsmöglichkeiten.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategieentwicklung',
    description: 'Wir erstellen eine umfassende Steuerstrategie, die auf Ihre finanziellen Ziele abgestimmt ist.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Umsetzung',
    description: 'Wir setzen Ihre Steuerstrategie um und stellen die ordnungsgemäße Dokumentation sicher.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Laufende Verwaltung',
    description: 'Wir überwachen Steuerrechtsänderungen und passen Strategien an, um die Optimierung aufrechtzuerhalten.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function TaxPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Steuerberatung"
        description="Professionelle Steuerplanung und Beratung zur Optimierung Ihrer Steuerposition und Sicherstellung der Compliance. Wir bieten umfassende Lösungen für nationale und internationale Besteuerung."
        primaryButtonText="Jetzt Starten"
        secondaryButtonText="Unsere Dienste"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Warum unsere Steuerberatung wählen?"
        benefits={benefits}
      />

      <ServicesSection
        title="Unsere Steuerdienstleistungen"
        services={taxServices}
      />

      <ProcessSection
        title="Unser Prozess"
        description="Wir folgen einem strukturierten Ansatz, um Ihre Steuerposition zu optimieren und dabei die Compliance zu gewährleisten."
        steps={process}
      />

      <CTASection
        title="Bereit Ihre Steuerstrategie zu optimieren?"
        description="Kontaktieren Sie uns noch heute für eine persönliche Steuerberatung und machen Sie den ersten Schritt in Richtung Steuereffizienz."
        primaryButtonText="Beratung Planen"
        secondaryButtonText="Kontakt"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="/de/contact"
      />

      <Footer />
    </main>
  );
}
