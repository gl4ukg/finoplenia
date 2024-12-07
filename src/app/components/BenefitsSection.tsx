import { motion } from 'framer-motion';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
}

export function BenefitsSection({ title, benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center sm:text-4xl">
          {title}
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="text-lg font-semibold text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
