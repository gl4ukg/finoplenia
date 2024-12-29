'use client';
import { motion } from 'framer-motion';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  benefits: Benefit[];
}

export function BenefitsSection({ title, benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight text-primary text-center sm:text-4xl">
            {title}
          </h2>
        )}
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${title ? 'mt-16' : ''}`}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold leading-7 text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
