import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { InsuranceCalculator } from '@/components/InsuranceCalculator';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import type { Dictionary } from '@/i18n/client';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function CalculatorPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <section className="flex-grow container py-32">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            {dict.calculator.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {dict.calculator.hero.subtitle}
          </p>
        </div>

        <InsuranceCalculator dict={dict} locale={locale} />
      </section>

      <Footer />
    </main>
  );
}
