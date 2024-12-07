import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const taxServices = [
  {
    title: 'Tax Planning',
    services: [
      'Personal Tax Planning',
      'Investment Tax Strategy',
      'Estate Tax Planning',
      'International Tax Planning',
      'Tax-Efficient Structuring',
    ],
  },
  {
    title: 'Tax Compliance',
    services: [
      'Tax Return Preparation',
      'Tax Audit Support',
      'Tax Documentation',
      'Regulatory Compliance',
      'Tax Calendar Management',
    ],
  },
  {
    title: 'Specialized Services',
    services: [
      'Cross-Border Taxation',
      'Corporate Tax Planning',
      'Real Estate Taxation',
      'Trust & Foundation Tax',
      'Wealth Transfer Tax',
    ],
  },
];

const benefits = [
  {
    title: 'Expert Guidance',
    description: 'Professional tax advice from experienced specialists in domestic and international taxation.',
  },
  {
    title: 'Tax Optimization',
    description: 'Strategic planning to minimize tax liability while ensuring full compliance.',
  },
  {
    title: 'Comprehensive Solutions',
    description: 'Integrated approach covering personal, investment, and business taxation.',
  },
  {
    title: 'Proactive Support',
    description: 'Regular updates on tax law changes and proactive planning for future obligations.',
  },
];

const process = [
  {
    title: 'Assessment',
    description: 'We analyze your current tax situation and identify opportunities for optimization.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategy Development',
    description: 'We create a comprehensive tax strategy aligned with your financial goals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Implementation',
    description: 'We execute your tax strategy and ensure proper documentation.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Management',
    description: 'We monitor tax law changes and adjust strategies to maintain optimization.',
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
        title="Tax Advisory"
        description="Expert tax planning and advisory services to optimize your tax position and ensure compliance. We provide comprehensive solutions for both domestic and international taxation."
        primaryButtonText="Get Started"
        secondaryButtonText="Our Services"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Why Choose Our Tax Services?"
        benefits={benefits}
      />

      <ServicesSection
        title="Our Tax Services"
        categories={taxServices}
      />

      <ProcessSection
        title="Our Process"
        description="We follow a structured approach to help you optimize your tax position while maintaining compliance."
        steps={process}
      />

      <CTASection
        title="Ready to Optimize Your Tax Strategy?"
        description="Contact us today for a personalized tax consultation and take the first step towards tax efficiency."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="/en/contact"
      />

      <Footer />
    </main>
  );
}
