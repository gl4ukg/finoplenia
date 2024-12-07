import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const wealthServices = [
  {
    title: 'Investment Management',
    services: [
      'Portfolio Management',
      'Asset Allocation',
      'Risk Management',
      'Investment Strategy',
      'Performance Monitoring',
    ],
  },
  {
    title: 'Wealth Planning',
    services: [
      'Financial Planning',
      'Estate Planning',
      'Tax Planning',
      'Succession Planning',
      'Philanthropic Planning',
    ],
  },
  {
    title: 'Banking Services',
    services: [
      'Private Banking',
      'Credit Solutions',
      'Currency Management',
      'Structured Products',
      'Alternative Investments',
    ],
  },
];

const benefits = [
  {
    title: 'Personalized Service',
    description: 'Tailored wealth management solutions designed around your unique needs and goals.',
  },
  {
    title: 'Global Expertise',
    description: 'Access to world-class investment opportunities and international markets.',
  },
  {
    title: 'Comprehensive Solutions',
    description: 'Integrated approach covering investments, planning, and banking services.',
  },
  {
    title: 'Long-term Partnership',
    description: 'Dedicated team committed to growing and preserving your wealth across generations.',
  },
];

const process = [
  {
    title: 'Discovery',
    description: 'We understand your financial goals, risk tolerance, and unique circumstances.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategy Development',
    description: 'We create a comprehensive wealth management strategy tailored to your needs.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Implementation',
    description: 'We execute your strategy across investments, planning, and banking services.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Management',
    description: 'We actively manage your portfolio and adjust strategies as needed.',
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
        title="Wealth Management"
        description="Expert wealth management services to help you grow, protect, and transfer your wealth across generations. We provide comprehensive solutions tailored to your unique needs."
        primaryButtonText="Get Started"
        secondaryButtonText="Our Services"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Why Choose Our Wealth Management?"
        benefits={benefits}
      />

      <ServicesSection
        title="Our Wealth Management Services"
        services={wealthServices}
      />

      <ProcessSection
        title="Our Process"
        description="We follow a structured approach to help you achieve your wealth management goals."
        steps={process}
      />

      <CTASection
        title="Ready to Grow Your Wealth?"
        description="Contact us today for a personalized wealth management consultation and take the first step towards securing your financial future."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="/en/contact"
      />

      <Footer />
    </main>
  );
}
