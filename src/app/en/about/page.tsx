import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Timeline } from '../../components/Timeline';
import { HeroSection } from '../../components/HeroSection';
import { ValuesSection } from '../../components/ValuesSection';

const timelineEvents = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'Finoplenia was founded with the vision to provide comprehensive financial services for private and corporate clients.',
  },
  {
    year: '2013',
    title: 'Digital Transformation',
    description: 'Introduction of our digital platform to make financial services more accessible to our clients.',
  },
  {
    year: '2015',
    title: 'International Expansion',
    description: 'Extension of our services to international markets with a focus on cross-border wealth management.',
  },
  {
    year: '2018',
    title: 'Corporate Advisory Launch',
    description: 'Introduction of comprehensive consulting services to support companies on their growth journey.',
  },
  {
    year: '2020',
    title: 'Sustainability Focus',
    description: 'Integration of ESG principles into our investment strategies and corporate processes.',
  },
  {
    year: '2023',
    title: 'Innovation Hub',
    description: 'Establishment of our innovation hub for developing forward-thinking financial solutions.',
  },
];

const values = [
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of integrity in all our business relationships.',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every service we provide.',
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve to meet changing financial needs.',
  },
  {
    title: 'Client Focus',
    description: 'The success of our clients is at the center of everything we do.',
  },
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title="About Finoplenia"
        description="We are a leading financial services provider committed to helping our clients achieve their financial goals through expert advice and innovative solutions."
        showButtons={false}
        className="bg-gradient-to-b from-primary/5 to-white"
      />

      <ValuesSection
        title="Our Values"
        values={values}
      />

      {/* History Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Our History
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From our foundation to today, we are committed to excellence in financial services.
            </p>
          </div>
          <Timeline events={timelineEvents} isGerman={false} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
