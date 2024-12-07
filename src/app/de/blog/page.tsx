'use client';

import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Sample blog data - in a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'Investitionsstrategien im Jahr 2024 verstehen',
    excerpt: 'Entdecken Sie die wichtigsten Investitionstrends und Strategien, die die Finanzlandschaft im Jahr 2024 prägen.',
    date: '15. März 2024',
    category: 'Investment',
    imageUrl: '/images/blog/investment.jpg',
    author: 'Sarah Johnson',
    readTime: '5 Min. Lesezeit'
  },
  {
    id: 2,
    title: 'Die Zukunft des Digital Banking',
    excerpt: 'Erfahren Sie, wie die digitale Transformation den Bankensektor revolutioniert und was das für Kunden bedeutet.',
    date: '10. März 2024',
    category: 'Digital Banking',
    imageUrl: '/images/blog/digital-banking.jpg',
    author: 'Michael Chen',
    readTime: '4 Min. Lesezeit'
  },
  {
    id: 3,
    title: 'Nachhaltige Finanzen: Ein wachsender Trend',
    excerpt: 'Lernen Sie mehr über die steigende Bedeutung nachhaltiger Finanzen und deren Einfluss auf Investitionsentscheidungen.',
    date: '5. März 2024',
    category: 'Nachhaltigkeit',
    imageUrl: '/images/blog/sustainable-finance.jpg',
    author: 'Emma Wilson',
    readTime: '6 Min. Lesezeit'
  },
];

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 bg-gradient-to-b from-primary/5 to-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-primary sm:text-6xl"
            >
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Bleiben Sie informiert mit unseren neuesten Erkenntnissen, Nachrichten und Expertenanalysen zu Finanzen und Investitionen.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-gray-500">
                        {post.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                        {post.category}
                      </span>
                    </div>
                    <div className="group relative mt-3">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary">
                        <Link href={`/de/blog/${post.id}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-gray-600">{post.readTime}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
