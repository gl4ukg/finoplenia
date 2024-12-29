'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Timeline } from '@/components/Timeline';
import { HeroSection } from '@/components/HeroSection';
import { ValuesSection } from '@/components/ValuesSection';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface AboutClientProps {
  dict: {
    about: {
      hero: {
        title: string;
        description: string;
      };
      history: {
        title: string;
        description: string;
      };
      values: {
        title: string;
        list: Record<string, {
          title: string;
          description: string;
        }>;
      };
    };
  };
  timelineEvents: TimelineEvent[];
}

export function AboutClient({ dict, timelineEvents }: AboutClientProps) {
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

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {dict.about.history.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600">
              {dict.about.history.description}
            </motion.p>
          </div>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
