import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';
import Link from 'next/link';

const insuranceServices = [
  {
    title: 'Lebensversicherung',
    services: [
      'Risikolebensversicherung',
      'Kapitallebensversicherung',
      'Fondsgebundene Lebensversicherung',
      'Variable Lebensversicherung',
      'Gruppenlebensversicherung',
    ],
  },
  {
    title: 'Krankenversicherung',
    services: [
      'Private Krankenversicherung',
      'Zusatzversicherung',
      'Zahnversicherung',
      'Sehhilfeversicherung',
      'Pflegeversicherung',
    ],
  },
  {
    title: 'Sachversicherung',
    services: [
      'Hausratversicherung',
      'Mietversicherung',
      'Kfz-Versicherung',
      'Wertsachenversicherung',
      'Elementarschadenversicherung',
    ],
  },
];

const benefits = [
  {
    title: 'Umfassender Schutz',
    description: 'Maßgeschneiderte Versicherungslösungen für alle Lebensbereiche.',
  },
  {
    title: 'Professionelle Beratung',
    description: 'Fachkundige Beratung von erfahrenen Versicherungsspezialisten.',
  },
  {
    title: 'Wettbewerbsfähige Tarife',
    description: 'Zugang zu den besten Versicherungstarifen führender Anbieter.',
  },
  {
    title: 'Schadenunterstützung',
    description: 'Umfassende Unterstützung im Schadenfall.',
  },
];

const process = [
  {
    title: 'Erstanalyse',
    description: 'Wir evaluieren Ihren Versicherungsbedarf und bestehende Versicherungen.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Versicherungsanalyse',
    description: 'Wir analysieren verschiedene Versicherungsoptionen und Anbieter.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Versicherungsauswahl',
    description: 'Wir helfen Ihnen bei der Auswahl der passenden Versicherungspolicen.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Laufende Betreuung',
    description: 'Wir bieten kontinuierliche Unterstützung und Policenüberprüfungen.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function InsurancePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Versicherungsdienstleistungen"
        description="Umfassende Versicherungslösungen zum Schutz dessen, was Ihnen am wichtigsten ist. Wir helfen Ihnen, den richtigen Schutz für Ihre individuellen Bedürfnisse zu finden."
        primaryButtonText="Jetzt starten"
        secondaryButtonText="Unsere Services"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Warum unsere Versicherungsdienstleistungen?"
        benefits={benefits}
      />

      <ServicesSection
        title="Unsere Versicherungsdienstleistungen"
        services={insuranceServices}
      />

      <ProcessSection
        title="Unser Prozess"
        description="Wir folgen einem strukturierten Ansatz, um sicherzustellen, dass Sie den besten Versicherungsschutz für Ihre Bedürfnisse erhalten."
        steps={process}
      />

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/de/contact" className="btn btn-primary">
          Kontakt
        </Link>
        <Link href="/de/calculator" className="btn btn-primary">
          Prämie Berechnen
        </Link>
      </div>

      <CTASection
        title="Bereit für Ihre sichere Zukunft?"
        description="Kontaktieren Sie uns noch heute für eine persönliche Versicherungsberatung und erfahren Sie, wie wir Ihnen beim Schutz dessen helfen können, was Ihnen am wichtigsten ist."
        primaryButtonText="Beratung vereinbaren"
        secondaryButtonText="Kontakt aufnehmen"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="/de/contact"
      />

      <Footer />
    </main>
  );
}
