'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

interface Section {
  title: string;
  content: string;
  items?: string[] | Array<{ term: string; definition: string }>;
  disclaimer?: string;
  restrictions?: {
    title: string;
    items: string[];
  };
  methods?: {
    email: string;
    phone: string;
    address: string;
  };
}

interface TermsClientProps {
  dict: {
    terms: {
      hero: {
        title: string;
        description: string;
      };
      lastUpdated: string;
      sections: Record<string, Section>;
    };
  };
}

export function TermsClient({ dict }: TermsClientProps) {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <div className="flex-grow container py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold text-center mb-16">
            {dict.terms.hero.title}
          </h1>

          <div className="space-y-12">
            {Object.entries(dict.terms.sections).map(([sectionKey, section], index) => (
              <motion.div
                key={sectionKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  {section.title}
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4">
                    {section.content}
                  </p>

                  {/* Definitions section */}
                  {sectionKey === 'definitions' && section.items && (
                    <div className="mt-6 space-y-4">
                      {(section.items as Array<{ term: string; definition: string }>).map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded">
                          <h3 className="font-semibold text-lg mb-2">{item.term}</h3>
                          <p className="text-gray-600">{item.definition}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Services section */}
                  {sectionKey === 'services' && section.items && (
                    <>
                      <ul className="list-disc pl-6 mt-4 space-y-2">
                        {(section.items as string[]).map((item, idx) => (
                          <li key={idx} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                      {section.disclaimer && (
                        <p className="mt-4 text-gray-500 italic">
                          {section.disclaimer}
                        </p>
                      )}
                    </>
                  )}

                  {/* License section */}
                  {sectionKey === 'license' && section.restrictions && (
                    <div className="mt-6">
                      <h3 className="font-semibold text-lg mb-4">
                        {section.restrictions.title}
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {section.restrictions.items.map((item, idx) => (
                          <li key={idx} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sections with simple items list */}
                  {['userAccounts', 'liability'].includes(sectionKey) && 
                   section.items && (
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      {(section.items as string[]).map((item, idx) => (
                        <li key={idx} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Contact section */}
                  {sectionKey === 'contact' && section.methods && (
                    <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-4">
                        <p className="flex items-center text-gray-600">
                          <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                          <a href={`mailto:${section.methods.email}`} className="hover:text-primary">
                            {section.methods.email}
                          </a>
                        </p>
                        <p className="flex items-center text-gray-600">
                          <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                          <a href={`tel:${section.methods.phone}`} className="hover:text-primary">
                            {section.methods.phone}
                          </a>
                        </p>
                        <p className="flex items-center text-gray-600">
                          <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {section.methods.address}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
