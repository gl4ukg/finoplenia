'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  date?: string;
  category?: string;
  author?: string;
  readTime?: string;
  excerpt?: string;
}

interface Props {
  blogPosts: BlogPost[];
  title: string;
  description: string;
}

export function BlogContent({ blogPosts, title, description }: Props) {
  const params = useParams();
  const locale = params?.locale as string;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-32'
          >
            <h1 className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl md:text-5xl lg:text-6xl/none">
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
              {description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Link 
                  href={`/${locale}/blog/${post.id}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post?.imageUrl}
                    alt={post.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                  />
                </div>
                <div className="bg-white p-6">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  {post.category && (
                    <span className="ml-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      {post.category}
                    </span>
                  )}
                  <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                  {post.author && (
                    <div className="mt-4 flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {post.author}
                      </span>
                      {post.readTime && (
                        <span className="ml-2 text-sm text-gray-500">
                          · {post.readTime}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
