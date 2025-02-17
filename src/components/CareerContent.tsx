'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface CarerPost {
  id: number;
  title: string;
  shortText?: string;
  bigText?: string;
}

interface Props {
  careerPosts: CarerPost[];
  title: string;
  description: string;
}

export function CareerContent({ careerPosts, title, description }: Props) {
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
            className='mb-14'
          >
            <h1 className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl md:text-5xl lg:text-6xl/none">
              {title}
            </h1>
            <p className="mx-auto w-3/4 text-gray-500 md:text-xl dark:text-gray-400 mt-4" dangerouslySetInnerHTML={{ __html: description }} />
          </motion.div>
          <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">
            {careerPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Link 
                  href={`/${locale}/career/${post.id}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="bg-white p-6">
                  <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {post.shortText}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
