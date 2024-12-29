import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { motion } from 'framer-motion';
import { getDictionary } from '@/i18n/server';
import { Locale } from '@/i18n/settings';

export default async function TermsAndConditions({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-grow container py-32">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div {...fadeIn} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{dict.terms.hero.title}</h1>
            <p className="text-xl text-gray-600">{dict.terms.hero.description}</p>
            <p className="text-gray-500 mt-4">{dict.terms.lastUpdated}</p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.introduction.title}</h2>
              <p>{dict.terms.sections.introduction.content}</p>
            </motion.section>

            {/* Definitions */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.definitions.title}</h2>
              <p>{dict.terms.sections.definitions.content}</p>
              <div className="mt-6 space-y-4">
                {dict.terms.sections.definitions.items.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">{item.term}</h3>
                    <p className="text-gray-600">{item.definition}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Services */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.services.title}</h2>
              <p>{dict.terms.sections.services.content}</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                {dict.terms.sections.services.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-gray-600 italic">{dict.terms.sections.services.disclaimer}</p>
            </motion.section>

            {/* License */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.license.title}</h2>
              <p>{dict.terms.sections.license.content}</p>
              <div className="mt-6">
                <h3 className="font-semibold mb-4">{dict.terms.sections.license.restrictions.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {dict.terms.sections.license.restrictions.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* User Accounts */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.userAccounts.title}</h2>
              <p>{dict.terms.sections.userAccounts.content}</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                {dict.terms.sections.userAccounts.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.section>

            {/* Liability */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.liability.title}</h2>
              <p>{dict.terms.sections.liability.content}</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                {dict.terms.sections.liability.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.section>

            {/* Indemnification */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.indemnification.title}</h2>
              <p>{dict.terms.sections.indemnification.content}</p>
            </motion.section>

            {/* Termination */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.termination.title}</h2>
              <p>{dict.terms.sections.termination.content}</p>
            </motion.section>

            {/* Changes */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.changes.title}</h2>
              <p>{dict.terms.sections.changes.content}</p>
            </motion.section>

            {/* Governing Law */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.governing.title}</h2>
              <p>{dict.terms.sections.governing.content}</p>
            </motion.section>

            {/* Contact */}
            <motion.section {...fadeIn} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">{dict.terms.sections.contact.title}</h2>
              <p>{dict.terms.sections.contact.content}</p>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <a href={`mailto:${dict.terms.sections.contact.methods.email}`} className="text-blue-600 hover:text-blue-800">
                      {dict.terms.sections.contact.methods.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href={`tel:${dict.terms.sections.contact.methods.phone}`} className="text-blue-600 hover:text-blue-800">
                      {dict.terms.sections.contact.methods.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{' '}
                    {dict.terms.sections.contact.methods.address}
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
