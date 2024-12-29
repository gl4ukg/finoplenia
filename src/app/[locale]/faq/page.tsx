'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import Link from 'next/link';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function FAQ({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  const t = dict.faq;

  const [openCategory, setOpenCategory] = useState<string | null>('general');
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (categoryId: string, index: number) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${categoryId}-${index}`]: !prev[`${categoryId}-${index}`]
    }));
  };

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(prev => prev === categoryId ? null : categoryId);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <section className="relative pt-32 pb-0sm:pt-40 sm:pb-24 lg:pb-32 bg-gradient-to-b from-primary/5 to-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-primary sm:text-6xl"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              {t.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            {Object.entries(t.categories).map(([categoryId, category]) => (
              <div key={categoryId} className="py-6">
                <button
                  onClick={() => toggleCategory(categoryId)}
                  className="flex w-full items-start justify-between text-left"
                >
                  <h3 className="text-2xl font-semibold leading-7 text-primary">
                    {category.title}
                  </h3>
                  <span className="ml-6 flex h-7 items-center">
                    <svg
                      className={`h-6 w-6 transform transition-transform ${
                        openCategory === categoryId ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
                {openCategory === categoryId && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 space-y-4"
                  >
                    {category.questions.map((item, index) => (
                      <div key={index} className="pt-6 first:pt-0">
                        <button
                          onClick={() => toggleQuestion(categoryId, index)}
                          className="flex w-full items-start justify-between text-left"
                        >
                          <span className="text-base font-semibold leading-7 text-gray-900">
                            {item.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <svg
                              className={`h-5 w-5 transform transition-transform ${
                                openQuestions[`${categoryId}-${index}`]
                                  ? 'rotate-180'
                                  : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                        {openQuestions[`${categoryId}-${index}`] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2"
                          >
                            <p className="text-base leading-7 text-gray-600">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-primary">
              {t.support.title}
            </h2>
            <p className="mt-4 text-gray-600">
              {t.support.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="btn btn-primary mt-8 inline-block"
            >
              {t.support.contactButton}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
