'use client';

import { motion } from 'framer-motion';

interface Value {
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title: string;
  values: Value[];
}

export function ValuesSection({ title, values }: ValuesSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-16">
            {title}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values?.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <div className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 flex-grow">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 flex-grow">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
