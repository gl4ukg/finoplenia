import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { HeroSection } from '../../../components/HeroSection';
import { BenefitsSection } from '../../../components/BenefitsSection';
import { ServicesSection } from '../../../components/ServicesSection';
import { ProcessSection } from '../../../components/ProcessSection';
import { CTASection } from '../../../components/CTASection';

const advisoryServices = [
  {
    title: 'Strategic Advisory',
    services: [
      'Business Strategy Development',
      'Market Entry Analysis',
      'Growth Strategy',
      'Digital Transformation',
      'Innovation Strategy',
    ],
  },
  {
    title: 'Transaction Advisory',
    services: [
      'Mergers & Acquisitions',
      'Due Diligence',
      'Valuation Services',
      'Post-Merger Integration',
      'Corporate Restructuring',
    ],
  },
  {
    title: 'Performance Improvement',
    services: [
      'Operational Excellence',
      'Cost Optimization',
      'Process Optimization',
      'Working Capital Management',
      'Supply Chain Optimization',
    ],
  },
];

const benefits = [
  {
    title: 'Strategic Insight',
    description: 'Deep industry knowledge and strategic expertise to drive business growth.',
  },
  {
    title: 'Proven Methodology',
    description: 'Structured approach based on best practices and proven frameworks.',
  },
  {
    title: 'Implementation Focus',
    description: 'Practical solutions with clear implementation roadmaps.',
  },
  {
    title: 'Measurable Results',
    description: 'Clear metrics and KPIs to track and demonstrate value creation.',
  },
];

const process = [
  {
    title: 'Assessment',
    description: 'We analyze your current situation and identify key opportunities and challenges.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Strategy Development',
    description: 'We develop a comprehensive strategy aligned with your business objectives.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Implementation',
    description: 'We support the execution of strategic initiatives and transformation programs.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Value Realization',
    description: 'We track and measure results to ensure value creation and sustainability.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function CorporateAdvisoryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="Corporate Advisory"
        description="Strategic business advisory services to drive growth and create sustainable value. We partner with you to transform challenges into opportunities and achieve your business objectives."
        primaryButtonText="Get Started"
        secondaryButtonText="Our Services"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="#services"
      />

      <BenefitsSection
        title="Why Choose Our Advisory Services?"
        benefits={benefits}
      />

      <ServicesSection
        title="Our Advisory Services"
        categories={advisoryServices}
      />

      <ProcessSection
        title="Our Process"
        description="We follow a structured approach to help you achieve your business transformation goals."
        steps={process}
      />

      <CTASection
        title="Ready to Transform Your Business?"
        description="Contact us today for a consultation and discover how we can help drive your business forward."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonHref="/en/contact"
      />

      <Footer />
    </main>
  );
}
