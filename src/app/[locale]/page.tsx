import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Testimonials } from '@/components/Testimonials';
import Link from 'next/link';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';

interface Props {
  params: {
    locale: Locale;
  };
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Tech Innovations GmbH',
    image: '/images/testimonials/sarah.jpg',
    quote: 'Finoplenia war maßgeblich daran beteiligt, unserem Unternehmen bei komplexen Finanzentscheidungen zu helfen. Ihre Expertise in der Unternehmensberatung war für unsere Wachstumsstrategie von unschätzbarem Wert.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Unternehmer',
    company: 'Green Energy Solutions',
    image: '/images/testimonials/michael.jpg',
    quote: 'Das Vermögensverwaltungsteam von Finoplenia hat mir personalisierte Strategien zur Verfügung gestellt, die perfekt auf meine Anlageziele abgestimmt waren. Ihre Liebe zum Detail und ihr professioneller Ansatz sind hervorragend.',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Direktorin',
    company: 'Wilson & Partners',
    image: '/images/testimonials/emma.jpg',
    quote: 'Ich arbeite jetzt seit über 5 Jahren mit Finoplenia zusammen, und ihre Steuerberatungsdienstleistungen haben meine Erwartungen stets übertroffen. Sie sind wirklich Experten auf ihrem Gebiet.',
  },
];

export default async function Home({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              {dict.home.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {dict.home.hero.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href={`/${locale}/contact`} className="btn btn-secondary">
                {dict.common.getStarted}
              </Link>
              <Link href={`/${locale}/calculator`} className="btn btn-secondary">
                {dict.common.calculator}
              </Link>
              <Link href={`/${locale}/about`} className="btn btn-outline">
                {dict.common.learnMore}
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
              {dict.home.privateServices.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {dict.home.privateServices.subtitle}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(dict.home.privateServices.services).map(([key, service]) => (
                <div
                  key={key}
                  className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-secondary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/${locale}/private/${key}`}
                      className="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark"
                    >
                      {dict.common.learnMore} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
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
              {dict.home.corporateServices.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {dict.home.corporateServices.subtitle}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {Object.entries(dict.home.corporateServices.services).map(([key, service]) => (
                <div
                  key={key}
                  className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-secondary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/${locale}/corporate/${key}`}
                      className="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark"
                    >
                      {dict.common.learnMore} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
