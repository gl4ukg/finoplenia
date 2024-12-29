'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import Link from 'next/link';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Privacy({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  const t = dict.privacy;

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      <section className="relative pt-32 pb-0sm:pt-40 sm:pb-24 lg:pb-32 bg-gradient-to-b from-primary/5 to-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-primary sm:text-6xl"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              {t.hero.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-sm text-gray-500"
            >
              {t.lastUpdated}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.introduction.title}
              </h2>
              <p className="text-gray-600">
                {t.sections.introduction.content}
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.collection.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {t.sections.collection.content}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8">
                {t.sections.collection.items.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                {t.sections.collection.dataTypes.title}
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {t.sections.collection.dataTypes.personal.title}
                </h4>
                <p className="text-gray-600 mb-2">
                  {t.sections.collection.dataTypes.personal.content}
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  {t.sections.collection.dataTypes.personal.items.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {t.sections.collection.dataTypes.usage.title}
                </h4>
                <p className="text-gray-600 mb-2">
                  {t.sections.collection.dataTypes.usage.content}
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  {t.sections.collection.dataTypes.usage.items.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.use.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {t.sections.use.content}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {t.sections.use.items.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.sharing.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {t.sections.sharing.content}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {t.sections.sharing.items.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.security.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {t.sections.security.content}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {t.sections.security.items.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.rights.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {t.sections.rights.content}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {t.sections.rights.items.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.cookies.title}
              </h2>
              <p className="text-gray-600">
                {t.sections.cookies.content}
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.children.title}
              </h2>
              <p className="text-gray-600">
                {t.sections.children.content}
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.changes.title}
              </h2>
              <p className="text-gray-600">
                {t.sections.changes.content}
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.sections.contact.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {t.sections.contact.content}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a href={`mailto:${t.sections.contact.methods.email}`} className="hover:text-primary">
                      {t.sections.contact.methods.email}
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href={`tel:${t.sections.contact.methods.phone}`} className="hover:text-primary">
                      {t.sections.contact.methods.phone}
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {t.sections.contact.methods.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
