import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';
import Link from 'next/link';

const privateServices = [
  {
    name: 'Wealth Management',
    description: 'Grow and protect your wealth with personalized investment strategies.',
    href: '/en/private/wealth',
  },
  {
    name: 'Insurance Solutions',
    description: 'Comprehensive insurance coverage for all aspects of your life.',
    href: '/en/private/insurance',
  },
  {
    name: 'Retirement Planning',
    description: 'Secure your future with our expert retirement planning services.',
    href: '/en/private/retirement',
  },
  {
    name: 'Tax Advisory',
    description: 'Expert tax planning and compliance services for individuals.',
    href: '/en/private/tax',
  },
];

const corporateServices = [
  {
    name: 'Corporate Tax Advisory',
    description: 'Strategic tax planning and compliance for businesses.',
    href: '/en/corporate/tax',
  },
  {
    name: 'Strategic Advisory',
    description: 'Expert guidance for business growth and transformation.',
    href: '/en/corporate/advisory',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Tech Innovations Ltd',
    image: '/images/testimonials/sarah.jpg',
    quote: 'Finoplenia has been instrumental in helping our company navigate complex financial decisions. Their expertise in corporate advisory has been invaluable for our growth strategy.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Entrepreneur',
    company: 'Green Energy Solutions',
    image: '/images/testimonials/michael.jpg',
    quote: 'The wealth management team at Finoplenia provided me with personalized strategies that perfectly aligned with my investment goals. Their attention to detail and professional approach is outstanding.',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Director',
    company: 'Wilson & Partners',
    image: '/images/testimonials/emma.jpg',
    quote: `I've been working with Finoplenia for over 5 years now, and their tax advisory services have consistently exceeded my expectations. They're truly experts in their field.`,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Your Financial Future Starts Here
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert financial advice, insurance solutions, and wealth management services
              for private individuals and corporate customers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/en/contact" className="btn btn-secondary">
                Get Started
              </Link>
              <Link href="/en/calculator" className="btn btn-secondary">
                Try Our Calculator
              </Link>
              <Link href="/en/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Private Services Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Private Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive financial services tailored to your personal needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {privateServices.map((service) => (
                <div
                  key={service.name}
                  className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold leading-6 text-secondary hover:text-secondary-light"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Corporate Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic solutions to help your business thrive and grow.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {corporateServices.map((service) => (
                <div
                  key={service.name}
                  className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold leading-6 text-secondary hover:text-secondary-light"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <section className="relative isolate py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us today to discuss how we can help you achieve your financial goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/en/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
