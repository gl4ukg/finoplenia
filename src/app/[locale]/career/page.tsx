import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CareerContent } from '@/components/CareerContent';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Career({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  const { hero, posts } = dict.career;

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <CareerContent 
        careerPosts={posts}
        title={hero.title}
        description={hero.description}
      />
      <Footer />
    </main>
  );
}
