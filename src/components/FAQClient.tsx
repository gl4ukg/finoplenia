'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface FAQClientProps {
  dict: {
    faq: {
      hero: {
        title: string;
        description: string;
      };
      categories: {
        [key: string]: {
          title: string;
          questions: {
            question: string;
            answer: string;
          }[];
        };
      };
      support: {
        title: string;
        description: string;
        contactButton: string;
      };
    };
  };
}

export function FAQClient({ dict }: FAQClientProps) {
  const t = dict.faq;
  const [openCategory, setOpenCategory] = useState<string | null>('general');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <div className="flex-grow container py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold text-center mb-16">{t.hero.title}</h1>

          <div className="space-y-8">
            {Object.entries(t.categories).map(([categoryId, category]) => (
              <div key={categoryId} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setOpenCategory(openCategory === categoryId ? null : categoryId)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                  <span className="transform transition-transform duration-200">
                    {openCategory === categoryId ? '−' : '+'}
                  </span>
                </button>

                {openCategory === categoryId && (
                  <div className="px-6 pb-4">
                    <div className="space-y-4">
                      {category.questions.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-0">
                          <button
                            onClick={() => setOpenQuestion(openQuestion === `${categoryId}-${index}` ? null : `${categoryId}-${index}`)}
                            className="w-full py-4 flex items-center justify-between text-left"
                          >
                            <h3 className="text-lg font-medium pr-8">{item.question}</h3>
                            <span className="transform transition-transform duration-200">
                              {openQuestion === `${categoryId}-${index}` ? '−' : '+'}
                            </span>
                          </button>

                          {openQuestion === `${categoryId}-${index}` && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pb-4 text-gray-600"
                            >
                              {item.answer}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
