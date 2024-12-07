import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const retirementServices = [
  {
    title: 'Ruhestandsplanung',
    services: [
      'Persönliche Ruhestandsanalyse',
      'Rentenoptimierung',
      'Entwicklung von Anlagestrategien',
      'Steuereffiziente Ruhestandsplanung',
      'Sozialversicherungsoptimierung',
    ],
  },
  {
    title: 'Anlagelösungen',
    services: [
      'Ruhestandsinvestmentportfolios',
      'Pensionsfondsverwaltung',
      'Altersvorsorgeplanung',
      'Vermögensallokationsstrategie',
      'Risikomanagement',
    ],
  },
  {
    title: 'Nachlassplanung',
    services: [
      'Vermögensübertragungsplanung',
      'Treuhanddienstleistungen',
      'Vermächtnisplanung',
      'Steuereffiziente Vererbung',
      'Strategien für wohltätige Spenden',
    ],
  },
];

const benefits = [
  {
    title: 'Expertenberatung',
    description: 'Professionelle Ruhestandsplanung von erfahrenen Spezialisten.',
  },
  {
    title: 'Maßgeschneiderte Lösungen',
    description: 'Ruhestandsstrategien, die auf Ihre individuellen Ziele und Umstände zugeschnitten sind.',
  },
  {
    title: 'Umfassende Planung',
    description: 'Integrierter Ansatz für Investitionen, Steuern und Nachlassplanung.',
  },
  {
    title: 'Kontinuierliche Unterstützung',
    description: 'Regelmäßige Überprüfungen und Anpassungen, um Ihren Ruhestandsplan auf Kurs zu halten.',
  },
];

const process = [
  {
    title: 'Erstkonsultation',
    description: 'Wir bewerten Ihre Ruhestandsziele, aktuelle finanzielle Situation und Risikotoleranz.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategieentwicklung',
    description: 'Wir erstellen eine umfassende Ruhestandsstrategie basierend auf Ihren Bedürfnissen.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Umsetzung',
    description: 'Wir setzen Ihren Ruhestandsplan mit sorgfältig ausgewählten Investitionen um.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Regelmäßige Überprüfung',
    description: 'Wir überwachen und passen Ihren Plan an, um sicherzustellen, dass Sie auf Kurs bleiben.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function RetirementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Ruhestandsplanung"
        description="Sichern Sie Ihre Zukunft mit unseren umfassenden Ruhestandsplanungsdiensten. Wir helfen Ihnen, den Ruhestandslebensstil aufzubauen und zu erhalten, den Sie verdienen."
        primaryButtonText="Jetzt Starten"
        secondaryButtonText="Unsere Dienste"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Warum unsere Ruhestandsdienste wählen?"
        benefits={benefits}
      />

      <ServicesSection
        title="Unsere Altersvorsorge-Dienstleistungen"
        services={retirementServices}
      />

      <ProcessSection
        title="Unser Prozess"
        description="Wir folgen einem strukturierten Ansatz, um Ihnen bei der Erreichung Ihrer Ruhestandsziele zu helfen."
        steps={process}
      />

      <CTASection
        title="Bereit für die Ruhestandsplanung?"
        description="Kontaktieren Sie uns noch heute für eine persönliche Ruhestandsplanungsberatung und machen Sie den ersten Schritt in eine sichere Zukunft."
        primaryButtonText="Beratung Planen"
        secondaryButtonText="Kontakt"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="/de/contact"
      />

      <Footer />
    </main>
  );
}
