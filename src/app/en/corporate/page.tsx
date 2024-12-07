import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { corporateServices } from '@/constants/corporate';
import { ServiceCard } from '@/app/components/ServiceCard';

export default function CorporateServices() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 bg-gradient-to-b from-primary to-primary-light text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Corporate Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Comprehensive business solutions to drive your company's growth and success.
              Partner with us for strategic guidance and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {corporateServices.en.map((service) => (
              <ServiceCard
                key={service.name}
                {...service}
                learnMoreText="Learn more"
              />
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
                Ready to transform your business?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Contact our expert consultants today and discover how we can help your business thrive.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/en/contact"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  Contact us
                </Link>
                <Link
                  href="/en/about"
                  className="btn text-white border-2 border-white hover:bg-white hover:text-primary"
                >
                  Learn more
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
