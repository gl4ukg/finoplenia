import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const retirementServices = [
  {
    title: 'Retirement Planning',
    services: [
      'Personal retirement analysis',
      'Pension optimization',
      'Investment strategy development',
      'Tax-efficient retirement planning',
      'Social security optimization',
    ],
  },
  {
    title: 'Investment Solutions',
    services: [
      'Retirement investment portfolios',
      'Pension fund management',
      'IRA and 401(k) planning',
      'Asset allocation strategy',
      'Risk management',
    ],
  },
  {
    title: 'Estate Planning',
    services: [
      'Wealth transfer planning',
      'Trust services',
      'Legacy planning',
      'Tax-efficient inheritance',
      'Charitable giving strategies',
    ],
  },
];

const benefits = [
  {
    title: 'Expert Guidance',
    description: 'Professional retirement planning advice from experienced specialists.',
  },
  {
    title: 'Customized Solutions',
    description: 'Retirement strategies tailored to your unique goals and circumstances.',
  },
  {
    title: 'Comprehensive Planning',
    description: 'Integrated approach covering investments, taxes, and estate planning.',
  },
  {
    title: 'Ongoing Support',
    description: 'Regular reviews and adjustments to keep your retirement plan on track.',
  },
];

const process = [
  {
    title: 'Initial Consultation',
    description: 'We assess your retirement goals, current financial situation, and risk tolerance.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategy Development',
    description: 'We create a comprehensive retirement strategy based on your needs.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Implementation',
    description: 'We put your retirement plan into action with carefully selected investments.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Regular Review',
    description: 'We monitor and adjust your plan to ensure you stay on track for retirement.',
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
        title="Retirement Planning"
        description="Secure your future with our comprehensive retirement planning services. We help you build and maintain the retirement lifestyle you deserve."
        primaryButtonText="Get Started"
        secondaryButtonText="Our Services"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Why Choose Our Retirement Services?"
        benefits={benefits}
      />

      <ServicesSection
        title="Our Retirement Services"
        categories={retirementServices}
      />

      <ProcessSection
        title="Our Process"
        description="We follow a structured approach to help you achieve your retirement goals."
        steps={process}
      />

      <CTASection
        title="Ready to Plan Your Retirement?"
        description="Contact us today for a personalized retirement planning consultation and take the first step towards a secure future."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="/en/contact"
      />

      <Footer />
    </main>
  );
}
