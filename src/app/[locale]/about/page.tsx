import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Timeline } from '@/components/Timeline';
import { HeroSection } from '@/components/HeroSection';
import { ValuesSection } from '@/components/ValuesSection';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function About({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  const timelineEvents = Object.entries(dict.about.history.timeline).map(([year, event]) => ({
    year,
    title: event.title,
    description: event.description,
  }));

  const values = Object.entries(dict.about.values.list).map(([key, value]) => ({
    title: value.title,
    description: value.description,
  }));

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <HeroSection
        title={dict.about.hero.title}
        description={dict.about.hero.description}
        showButtons={false}
        className="bg-gradient-to-b from-primary/5 to-white"
      />

      <ValuesSection
        title={dict.about.values.title}
        values={values}
      />

      {/* History Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {dict.about.history.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {dict.about.history.description}
            </p>
          </div>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
