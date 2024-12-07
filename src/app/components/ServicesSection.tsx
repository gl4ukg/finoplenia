import { motion } from 'framer-motion';

interface ServiceCategory {
  title: string;
  services: string[];
}

interface ServicesSectionProps {
  title: string;
  categories: ServiceCategory[];
}

export function ServicesSection({ title, categories }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-primary text-center sm:text-4xl mb-16">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-secondary mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
