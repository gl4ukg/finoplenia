'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProcessStep {
  title: string;
  description?: string;
  icon?: ReactNode;
}

interface ProcessSectionProps {
  title?: string;
  description?: string;
  steps: (ProcessStep | string)[];
}

export function ProcessSection({ 
  title = 'Unser Prozess',
  description = 'Wir folgen einem strukturierten Ansatz, um die besten Ergebnisse für unsere Kunden zu erzielen.',
  steps 
}: ProcessSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8">
            {steps.map((step, index) => {
              const stepObj = typeof step === 'string' ? { title: step } : step;
              
              return (
                <motion.div
                  key={stepObj.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-lg font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {stepObj.title}
                    </h3>
                    {stepObj.description && (
                      <p className="mt-2 text-base leading-7 text-gray-600">
                        {stepObj.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
