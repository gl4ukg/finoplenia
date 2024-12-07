import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'Versicherung',
    description: 'Schützen Sie, was Ihnen wichtig ist. Von Leben und Gesundheit bis hin zu Eigentum und Fahrzeugversicherung.',
    href: '/de/private/insurance',
    categories: ['Gesundheit & Vorsorge', 'Fahrzeug & Reise', 'Wohnen & Eigentum'],
  },
  {
    name: 'Altersvorsorge',
    description: 'Sichern Sie Ihre Zukunft mit professioneller Beratung zur Altersvorsorge. Wir helfen Ihnen, eine solide finanzielle Grundlage aufzubauen.',
    href: '/de/private/retirement',
    categories: ['Rentenplanung', 'Anlagestrategie', 'Steueroptimierung'],
  },
  {
    name: 'Vermögensberatung',
    description: 'Vermehren und schützen Sie Ihr Vermögen mit personalisierten Anlagestrategien und professioneller Finanzberatung.',
    href: '/de/private/wealth',
    categories: ['Anlageplanung', 'Portfoliomanagement', 'Risikoanalyse'],
  },
  {
    name: 'Immobilien & Hypotheken',
    description: 'Navigieren Sie sicher durch den Immobilienmarkt. Professionelle Beratung für Immobilieninvestitionen und Hypothekenlösungen.',
    href: '/de/private/property',
    categories: ['Hypothekenberatung', 'Immobilieninvestition', 'Risikoschutz'],
  },
  {
    name: 'Steuerplanung',
    description: 'Optimieren Sie Ihre Steuersituation mit professioneller Planung und Beratung. Wir helfen Ihnen, legal und effizient Steuern zu sparen.',
    href: '/de/private/tax',
    categories: ['Steueroptimierung', 'Finanzplanung', 'Compliance'],
  },
];

export default function PrivateServices() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 bg-gradient-to-b from-primary to-primary-light text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Privatkundenservices
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Umfassende Finanzlösungen, maßgeschneidert für Ihre persönlichen Bedürfnisse.
              Entdecken Sie unsere Dienstleistungen für Ihre finanzielle Zukunft.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
                    <p className="mt-4 text-gray-600">{service.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.categories.map((category) => (
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
                      href={service.href}
                      className="inline-flex items-center text-secondary hover:text-secondary-light"
                    >
                      Mehr erfahren
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="relative isolate overflow-hidden bg-primary px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bereit für Ihre finanzielle Zukunft?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Kontaktieren Sie noch heute unsere Experten und machen Sie den ersten
                Schritt zu Ihren finanziellen Zielen.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/de/contact"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/de/about"
                  className="btn text-white border-2 border-white hover:bg-white hover:text-primary"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
