'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title: string;
}

export function FaqAccordion({ items, title }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6 text-primary">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
