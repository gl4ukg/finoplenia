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
    title: 'Life Insurance',
    services: [
      'Term life insurance',
      'Whole life insurance',
      'Universal life insurance',
      'Variable life insurance',
      'Group life insurance',
    ],
  },
  {
    title: 'Health Insurance',
    services: [
      'Private health insurance',
      'Supplementary insurance',
      'Dental insurance',
      'Vision insurance',
      'Long-term care insurance',
    ],
  },
  {
    title: 'Property Insurance',
    services: [
      'Homeowners insurance',
      'Renters insurance',
      'Auto insurance',
      'Valuable items coverage',
      'Natural disaster protection',
    ],
  },
];

const benefits = [
  {
    title: 'Comprehensive Coverage',
    description: 'Tailored insurance solutions that protect all aspects of your life and assets.',
  },
  {
    title: 'Expert Guidance',
    description: 'Professional advice from experienced insurance specialists.',
  },
  {
    title: 'Competitive Rates',
    description: 'Access to the best insurance rates from leading providers.',
  },
  {
    title: 'Claims Support',
    description: 'Dedicated assistance throughout the claims process.',
  },
];

const process = [
  {
    title: 'Initial Assessment',
    description: 'We evaluate your insurance needs and current coverage.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Coverage Analysis',
    description: 'We analyze various insurance options and providers.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Policy Selection',
    description: 'We help you select the most suitable insurance policies.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Support',
    description: 'We provide continuous support and policy reviews.',
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
        title="Insurance Services"
        description="Comprehensive insurance solutions to protect what matters most. We help you find the right coverage for your unique needs."
        primaryButtonText="Get Started"
        secondaryButtonText="Our Services"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Why Choose Our Insurance Services?"
        benefits={benefits}
      />

      <ServicesSection
        title="Our Insurance Services"
        services={insuranceServices}
      />

      <ProcessSection
        title="Our Process"
        description="We follow a structured approach to ensure you get the best insurance coverage for your needs."
        steps={process}
      />

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/en/contact" className="btn btn-primary">
          Contact Us
        </Link>
        <Link href="/en/calculator" className="btn btn-primary">
          Calculate Your Premium
        </Link>
      </div>

      <CTASection
        title="Ready to Secure Your Future?"
        description="Contact us today for a personalized insurance consultation and discover how we can help protect what matters most to you."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="/en/contact"
      />

      <Footer />
    </main>
  );
}
