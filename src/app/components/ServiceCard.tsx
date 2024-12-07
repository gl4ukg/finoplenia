'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
  categories: string[];
  learnMoreText: string;
}

export function ServiceCard({ name, description, href, categories, learnMoreText }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="p-8">
          <h3 className="text-xl font-semibold text-primary">{name}</h3>
          <p className="mt-4 text-gray-600">{description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto p-6 pt-0">
          <Link
            href={href}
            className="inline-flex items-center text-secondary hover:text-secondary-light"
          >
            {learnMoreText}
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
