import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';
import Link from 'next/link';

const privateServices = [
  {
    name: 'Vermögensverwaltung',
    description: 'Wachsen und schützen Sie Ihr Vermögen mit personalisierten Anlagestrategien.',
    href: '/de/private/wealth',
  },
  {
    name: 'Versicherungslösungen',
    description: 'Umfassender Versicherungsschutz für alle Lebensbereiche.',
    href: '/de/private/insurance',
  },
  {
    name: 'Altersvorsorge',
    description: 'Sichern Sie Ihre Zukunft mit unseren professionellen Vorsorgeplanungen.',
    href: '/de/private/retirement',
  },
  {
    name: 'Steuerberatung',
    description: 'Professionelle Steuerplanung und Compliance-Services für Privatpersonen.',
    href: '/de/private/tax',
  },
];

const corporateServices = [
  {
    name: 'Unternehmenssteuerberatung',
    description: 'Strategische Steuerplanung und Compliance für Unternehmen.',
    href: '/de/corporate/tax',
  },
  {
    name: 'Strategische Beratung',
    description: 'Professionelle Begleitung für Unternehmenswachstum und Transformation.',
    href: '/de/corporate/advisory',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Tech Innovations GmbH',
    image: '/images/testimonials/sarah.jpg',
    quote: 'Finoplenia war maßgeblich daran beteiligt, unserem Unternehmen bei komplexen Finanzentscheidungen zu helfen. Ihre Expertise in der Unternehmensberatung war für unsere Wachstumsstrategie von unschätzbarem Wert.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Unternehmer',
    company: 'Green Energy Solutions',
    image: '/images/testimonials/michael.jpg',
    quote: 'Das Vermögensverwaltungsteam von Finoplenia hat mir personalisierte Strategien zur Verfügung gestellt, die perfekt auf meine Anlageziele abgestimmt waren. Ihre Liebe zum Detail und ihr professioneller Ansatz sind hervorragend.',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Direktorin',
    company: 'Wilson & Partners',
    image: '/images/testimonials/emma.jpg',
    quote: 'Ich arbeite jetzt seit über 5 Jahren mit Finoplenia zusammen, und ihre Steuerberatungsdienstleistungen haben meine Erwartungen stets übertroffen. Sie sind wirklich Experten auf ihrem Gebiet.',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Ihre finanzielle Zukunft beginnt hier
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professionelle Finanzberatung, Versicherungslösungen und Vermögensverwaltung
              für Privatkunden und Unternehmen.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/de/contact" className="btn btn-primary">
                Loslegen
              </Link>
              <Link href="/de/about" className="btn btn-outline">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Private Services Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Private Dienstleistungen
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Umfassende Finanzdienstleistungen, maßgeschneidert auf Ihre persönlichen Bedürfnisse.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {privateServices.map((service) => (
                <div
                  key={service.name}
                  className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold leading-6 text-secondary hover:text-secondary-light"
                  >
                    Mehr erfahren <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Unternehmensdienstleistungen
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategische Lösungen für den Erfolg und das Wachstum Ihres Unternehmens.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {corporateServices.map((service) => (
                <div
                  key={service.name}
                  className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold leading-6 text-secondary hover:text-secondary-light"
                  >
                    Mehr erfahren <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} isGerman={true} />

      {/* CTA Section */}
      <section className="relative isolate py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Bereit loszulegen?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kontaktieren Sie uns noch heute, um zu besprechen, wie wir Ihnen bei der Erreichung Ihrer finanziellen Ziele helfen können.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/de/contact" className="btn btn-primary">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
