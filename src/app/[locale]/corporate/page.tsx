import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import Link from 'next/link';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Corporate({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  const { hero, services } = dict.corporate;

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 bg-gradient-to-b from-primary/5 to-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

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
              <Link
                key={index}
                href={`/${locale}${service.link}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
