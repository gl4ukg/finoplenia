import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BlogPostContent } from '@/components/BlogPostContent';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    locale: Locale;
    id: string;
  };
}

export default async function BlogPost({ params: { locale, id } }: Props) {
  const dict = await getDictionary(locale);
  // Convert string ID from URL to number to match the JSON structure
  const post = dict.blog.posts.find((p: any) => p.id === parseInt(id, 10));

  if (!post) {
    notFound();
  }

  // Transform the post data to match what BlogPostContent expects
  const transformedPost = {
    ...post,
    image: post.imageUrl, // Map imageUrl to image for the component
    content: post.excerpt // Use excerpt as content if no full content is available
  };

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Navigation />
      <BlogPostContent post={transformedPost} />
      <Footer />
    </main>
  );
}
