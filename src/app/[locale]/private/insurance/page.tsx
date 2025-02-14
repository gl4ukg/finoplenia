import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function PrivateInsurance({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  const { hero, services } = dict.private.insurance;

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <HeroSection
        title={hero.title}
        description={hero.description}
        className="bg-gradient-to-b from-primary/5 to-white"
      />

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {services.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {services.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.items.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="relative isolate overflow-hidden bg-primary px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to protect your future?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Contact our insurance experts today to find the right coverage for you.
              </p>
              <div className="mt-10">
                <Link
                  href={`/${locale}/contact`}
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
