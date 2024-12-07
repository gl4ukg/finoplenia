import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const taxServices = [
  {
    title: 'Corporate Tax Planning',
    services: [
      'Strategic Tax Planning',
      'Corporate Restructuring',
      'Merger & Acquisition Tax',
      'International Tax Strategy',
      'Transfer Pricing',
    ],
  },
  {
    title: 'Tax Compliance',
    services: [
      'Corporate Tax Returns',
      'VAT Compliance',
      'Tax Risk Management',
      'Tax Audit Defense',
      'Regulatory Reporting',
    ],
  },
  {
    title: 'Specialized Services',
    services: [
      'Cross-Border Transactions',
      'Group Tax Optimization',
      'R&D Tax Credits',
      'Investment Incentives',
      'Digital Business Taxation',
    ],
  },
];

const benefits = [
  {
    title: 'Strategic Approach',
    description: 'Comprehensive tax strategies aligned with your corporate objectives and growth plans.',
  },
  {
    title: 'Risk Management',
    description: 'Proactive identification and mitigation of tax risks across jurisdictions.',
  },
  {
    title: 'Cost Efficiency',
    description: 'Optimization of your tax position while maintaining full compliance.',
  },
  {
    title: 'Global Expertise',
    description: 'Access to international tax expertise and cross-border planning capabilities.',
  },
];

const process = [
  {
    title: 'Tax Assessment',
    description: 'We analyze your current tax structure and identify optimization opportunities.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategy Development',
    description: 'We create a comprehensive tax strategy aligned with your business objectives.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Implementation',
    description: 'We execute the strategy while ensuring proper documentation and compliance.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Monitoring & Review',
    description: 'We continuously monitor tax positions and adapt to regulatory changes.',
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
        title="Corporate Tax Advisory"
        description="Strategic tax planning and compliance solutions for businesses. We help optimize your corporate tax position while ensuring regulatory compliance across jurisdictions."
        primaryButtonText="Get Started"
        secondaryButtonText="Our Services"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Why Choose Our Corporate Tax Services?"
        benefits={benefits}
      />

      <ServicesSection
        title="Our Corporate Tax Services"
        services={taxServices}
      />

      <ProcessSection
        title="Our Process"
        description="We follow a structured approach to optimize your corporate tax position while maintaining compliance."
        steps={process}
      />

      <CTASection
        title="Ready to Optimize Your Corporate Tax Strategy?"
        description="Contact us today for a consultation and discover how we can help optimize your corporate tax structure."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="/en/contact"
      />

      <Footer />
    </main>
  );
}
