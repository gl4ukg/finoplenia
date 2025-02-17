import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CareerPostContent } from '@/components/CareerPostContent';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    locale: Locale;
    id: string;
  };
}

export default async function CareerPost({ params: { locale, id } }: Props) {
  const dict = await getDictionary(locale);
  // Convert string ID from URL to number to match the JSON structure
  const post = dict.career.posts.find((p: any) => p.id === parseInt(id, 10));

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Navigation />
      <CareerPostContent post={post} />
      <Footer />
    </main>
  );
}
