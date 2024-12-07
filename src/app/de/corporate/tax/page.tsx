import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const taxServices = [
  {
    title: 'Unternehmenssteuerplanung',
    services: [
      'Strategische Steuerplanung',
      'Unternehmensumstrukturierung',
      'Fusionen & Übernahmen Steuer',
      'Internationale Steuerstrategie',
      'Verrechnungspreise',
    ],
  },
  {
    title: 'Steuercompliance',
    services: [
      'Unternehmenssteuererklärungen',
      'Umsatzsteuer-Compliance',
      'Steuerrisikomanagement',
      'Steuerprüfungsverteidigung',
      'Regulatorische Berichterstattung',
    ],
  },
  {
    title: 'Spezielle Dienstleistungen',
    services: [
      'Grenzüberschreitende Transaktionen',
      'Konzernsteueroptimierung',
      'F&E-Steuergutschriften',
      'Investitionsanreize',
      'Digitale Unternehmensbesteuerung',
    ],
  },
];

const benefits = [
  {
    title: 'Strategischer Ansatz',
    description: 'Umfassende Steuerstrategien, die auf Ihre Unternehmensziele und Wachstumspläne abgestimmt sind.',
  },
  {
    title: 'Risikomanagement',
    description: 'Proaktive Identifizierung und Minderung von Steuerrisiken über Jurisdiktionen hinweg.',
  },
  {
    title: 'Kosteneffizienz',
    description: 'Optimierung Ihrer Steuerposition bei vollständiger Compliance.',
  },
  {
    title: 'Globale Expertise',
    description: 'Zugang zu internationaler Steuerexpertise und grenzüberschreitenden Planungsmöglichkeiten.',
  },
];

const process = [
  {
    title: 'Steuerbeurteilung',
    description: 'Wir analysieren Ihre aktuelle Steuerstruktur und identifizieren Optimierungsmöglichkeiten.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategieentwicklung',
    description: 'Wir erstellen eine umfassende Steuerstrategie, die auf Ihre Unternehmensziele abgestimmt ist.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Umsetzung',
    description: 'Wir setzen die Strategie um und stellen dabei eine ordnungsgemäße Dokumentation und Compliance sicher.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Überwachung & Überprüfung',
    description: 'Wir überwachen kontinuierlich die Steuerpositionen und passen uns an regulatorische Änderungen an.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function CorporateTaxPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Unternehmenssteuerberatung"
        description="Strategische Steuerplanung und Compliance-Lösungen für Unternehmen. Wir helfen bei der Optimierung Ihrer Unternehmenssteuerposition unter Gewährleistung der regulatorischen Compliance über Jurisdiktionen hinweg."
        primaryButtonText="Jetzt Starten"
        secondaryButtonText="Unsere Dienste"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Warum unsere Unternehmenssteuerberatung wählen?"
        benefits={benefits}
      />

      <ServicesSection
        title="Unsere Unternehmenssteuerberatungsdienste"
        categories={taxServices}
      />

      <ProcessSection
        title="Unser Prozess"
        description="Wir folgen einem strukturierten Ansatz zur Optimierung Ihrer Unternehmenssteuerposition bei gleichzeitiger Einhaltung der Compliance."
        steps={process}
      />

      <CTASection
        title="Bereit Ihre Unternehmenssteuerstrategie zu optimieren?"
        description="Kontaktieren Sie uns noch heute für eine Beratung und erfahren Sie, wie wir Ihre Unternehmenssteuerstruktur optimieren können."
        primaryButtonText="Beratung Planen"
        secondaryButtonText="Kontakt"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="/de/contact"
      />

      <Footer />
    </main>
  );
}
