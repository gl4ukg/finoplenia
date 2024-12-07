import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { HeroSection } from '@/app/components/HeroSection';
import { BenefitsSection } from '@/app/components/BenefitsSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { ProcessSection } from '@/app/components/ProcessSection';
import { CTASection } from '@/app/components/CTASection';

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
      'Steuererklärungen',
      'Steuerberichterstattung',
      'Steuerprüfungen',
      'Digitale Steuerlösungen',
    ],
  },
  {
    title: 'Spezialberatung',
    services: [
      'Umsatzsteuer',
      'Grundsteuer',
      'Erbschaftssteuer',
      'Zoll und Verbrauchsteuern',
    ],
  },
];

const benefits = [
  {
    title: 'Expertise',
    description: 'Jahrzehntelange Erfahrung in der Steuerberatung für Unternehmen aller Größen',
  },
  {
    title: 'Digitalisierung',
    description: 'Modernste digitale Tools und Prozesse für effiziente Steuerverwaltung',
  },
  {
    title: 'Compliance',
    description: 'Sicherstellung der Einhaltung aller steuerlichen Vorschriften und Regularien',
  },
];

const process = [
  'Analyse der aktuellen Steuersituation',
  'Entwicklung einer maßgeschneiderten Steuerstrategie',
  'Implementierung der Steueroptimierung',
  'Kontinuierliche Überwachung und Anpassung',
];

export default function CorporateTaxPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection
        title="Steuerberatung für Unternehmen"
        subtitle="Optimieren Sie Ihre Steuerstrategie mit unserer Expertise"
        description="Unsere Steuerexperten unterstützen Sie bei der Entwicklung und Umsetzung einer effizienten Steuerstrategie für Ihr Unternehmen."
        primaryButtonText="Jetzt beraten lassen"
        primaryButtonHref="/de/contact"
      />
      <BenefitsSection
        title="Warum uns wählen?"
        benefits={benefits}
      />
      <ServicesSection
        title="Unsere Steuerberatungsdienste"
        services={taxServices}
      />
      <ProcessSection
        title="Unser Steuerberatungsprozess"
        description="Wir folgen einem strukturierten Ansatz zur Optimierung Ihrer Steuerstrategie"
        steps={process}
      />
      <CTASection
        title="Optimieren Sie Ihre Steuerstrategie"
        description="Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch"
        primaryButtonText="Jetzt beraten lassen"
        primaryButtonHref="/de/contact"
      />
      <Footer />
    </main>
  );
}
