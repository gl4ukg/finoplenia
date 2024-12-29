'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';

interface PrivateClientProps {
  hero: {
    title: string;
    description: string;
  };
}

export function PrivateClient({ hero }: PrivateClientProps) {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <HeroSection
        title={hero.title}
        description={hero.description}
        className="bg-primary relative bg-gradient-to-b from-primary/5 to-white"
      />

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        {/* Content */}
      </section>

      <Footer />
    </main>
  );
}
