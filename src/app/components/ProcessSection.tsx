import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProcessStep {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessSectionProps {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export function ProcessSection({ title, description, steps }: ProcessSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
