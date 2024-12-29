'use client';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  services: string[];
}

interface ServicesSectionProps {
  title?: string;
  services: Service[];
}

export function ServicesSection({ title = 'Unsere Dienstleistungen', services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center sm:text-4xl mb-16">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold leading-7 text-gray-900 mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + serviceIndex * 0.05,
                    }}
                    className="flex items-start"
                  >
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-600">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
