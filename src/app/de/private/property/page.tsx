import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const propertyServices = [
  {
    title: 'Hypothekenberatung',
    services: [
      'Hypothekenvergleich und -auswahl',
      'Zinsoptimierung',
      'Refinanzierungslösungen',
      'Fest- und variable Hypotheken',
      'Spezielle Finanzierungsoptionen',
    ],
  },
  {
    title: 'Immobilieninvestment',
    services: [
      'Investitionsimmobilienanalyse',
      'Marktforschung und Bewertung',
      'Portfolio-Diversifikationsstrategie',
      'Risikobeurteilung',
      'ROI-Optimierung',
    ],
  },
  {
    title: 'Immobilienverwaltung',
    services: [
      'Immobilienwartungsplanung',
      'Mieterverwaltung',
      'Kostenoptimierung',
      'Rechtliche Compliance',
      'Werterhaltung der Immobilie',
    ],
  },
];

const benefits = [
  {
    title: 'Expertenwissen',
    description: 'Professionelle Beratung von erfahrenen Immobilien- und Hypothekenspezialisten.',
  },
  {
    title: 'Maßgeschneiderte Lösungen',
    description: 'Individuell angepasste Finanzierungslösungen für Ihre Bedürfnisse und Umstände.',
  },
  {
    title: 'Marktzugang',
    description: 'Zugang zu exklusiven Immobilienangeboten und wettbewerbsfähigen Hypothekenzinsen.',
  },
  {
    title: 'Umfassende Unterstützung',
    description: 'Ganzheitliche Betreuung von der Immobiliensuche bis zum Hypothekenabschluss.',
  },
];

const process = [
  {
    title: 'Erstberatung',
    description: 'Wir analysieren Ihre Bedürfnisse, finanzielle Situation und Immobilienziele.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Immobiliensuche & Analyse',
    description: 'Wir unterstützen Sie bei der Suche und Bewertung passender Immobilien.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Finanzierungsstrategie',
    description: 'Wir entwickeln eine optimale Finanzierungsstrategie und vergleichen Hypothekenangebote.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Umsetzung',
    description: 'Wir übernehmen Verhandlungen, Papierkram und koordinieren mit allen Beteiligten.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

export default function PropertyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Immobilien & Hypotheken"
        description="Professionelle Beratung für Ihre Immobilieninvestitionen und Hypothekenbedürfnisse. Wir helfen Ihnen, fundierte Entscheidungen zu treffen und die besten Finanzierungsoptionen zu sichern."
        primaryButtonText="Jetzt starten"
        secondaryButtonText="Unsere Services"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Warum unsere Immobiliendienstleistungen?"
        benefits={benefits}
      />

      <ServicesSection
        title="Unsere Immobilien- & Hypothekenservices"
        categories={propertyServices}
      />

      <ProcessSection
        title="Unser Prozess"
        description="Wir folgen einem strukturierten Ansatz, um die besten Ergebnisse für Ihre Immobilien- und Hypothekenbedürfnisse zu gewährleisten."
        steps={process}
      />

      <CTASection
        title="Bereit für Ihre Immobilienreise?"
        description="Kontaktieren Sie uns noch heute für eine persönliche Beratung und erfahren Sie, wie wir Ihnen bei der Erreichung Ihrer Immobilienziele helfen können."
        primaryButtonText="Beratung vereinbaren"
        secondaryButtonText="Kontakt aufnehmen"
        primaryButtonHref="/de/contact"
        secondaryButtonHref="/de/contact"
      />

      <Footer />
    </main>
  );
}
