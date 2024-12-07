import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const propertyServices = [
  {
    title: 'Mortgage Advisory',
    services: [
      'Mortgage comparison and selection',
      'Interest rate optimization',
      'Refinancing solutions',
      'Fixed and variable rate mortgages',
      'Special financing options',
    ],
  },
  {
    title: 'Property Investment',
    services: [
      'Investment property analysis',
      'Market research and valuation',
      'Portfolio diversification strategy',
      'Risk assessment',
      'ROI optimization',
    ],
  },
  {
    title: 'Property Management',
    services: [
      'Property maintenance planning',
      'Tenant management',
      'Cost optimization',
      'Legal compliance',
      'Property value preservation',
    ],
  },
];

const benefits = [
  {
    title: 'Expert Guidance',
    description: 'Professional advice from experienced property and mortgage specialists.',
  },
  {
    title: 'Tailored Solutions',
    description: 'Customized financing solutions that match your needs and circumstances.',
  },
  {
    title: 'Market Access',
    description: 'Access to exclusive property listings and competitive mortgage rates.',
  },
  {
    title: 'End-to-End Support',
    description: 'Comprehensive support from property search to mortgage completion.',
  },
];

const process = [
  {
    title: 'Initial Consultation',
    description: 'We assess your needs, financial situation, and property goals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Property Search & Analysis',
    description: 'We help you find and evaluate suitable properties based on your criteria.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Financing Strategy',
    description: 'We develop an optimal financing strategy and compare mortgage options.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Implementation',
    description: 'We handle negotiations, paperwork, and coordinate with all parties.',
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
        title="Property & Mortgage Services"
        description="Expert guidance for your property investments and mortgage needs. We help you make informed decisions and secure the best financing options."
        primaryButtonText="Get Started"
        secondaryButtonText="Our Services"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Why Choose Our Property Services?"
        benefits={benefits}
      />

      <ServicesSection
        title="Our Property & Mortgage Services"
        categories={propertyServices}
      />

      <ProcessSection
        title="Our Process"
        description="We follow a structured approach to ensure the best outcomes for your property and mortgage needs."
        steps={process}
      />

      <CTASection
        title="Ready to Start Your Property Journey?"
        description="Contact us today for a personalized consultation and discover how we can help you achieve your property goals."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="/en/contact"
      />

      <Footer />
    </main>
  );
}
