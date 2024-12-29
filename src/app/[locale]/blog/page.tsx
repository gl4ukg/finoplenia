import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BlogContent } from '@/components/BlogContent';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Blog({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  const { hero, posts } = dict.blog;

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <BlogContent 
        blogPosts={posts}
        title={hero.title}
        description={hero.description}
      />
      <Footer />
    </main>
  );
}
