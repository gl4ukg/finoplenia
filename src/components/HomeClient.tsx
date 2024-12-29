'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Testimonials } from '@/components/Testimonials';
import { useRef } from 'react';

interface Service {
  title: string;
  description: string;
}

interface Dictionary {
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    privateServices: {
      title: string;
      subtitle: string;
      services: Record<string, Service>;
    };
    corporateServices: {
      title: string;
      subtitle: string;
      services: Record<string, Service>;
    };
  };
  common: {
    getStarted: string;
    calculator: string;
    learnMore: string;
  };
}

interface HomeClientProps {
  dict: Dictionary;
  locale: string;
  testimonials: any[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HomeClient({ dict, locale, testimonials }: HomeClientProps) {
  const heroRef = useRef(null);
  const privateServicesRef = useRef(null);
  const corporateServicesRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isPrivateServicesInView = useInView(privateServicesRef, { once: true, amount: 0.3 });
  const isCorporateServicesInView = useInView(corporateServicesRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative pt-28 pb-16 sm:pt-28 sm:pb-24 lg:pb-28"
      >
        <div className="bg-white">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
            <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="px-6 lg:px-0 lg:pt-4"
              >
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                    >
                      {dict.home.hero.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="mt-6 text-lg leading-8 text-gray-600"
                    >
                      {dict.home.hero.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mt-10 flex items-center gap-x-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={`/${locale}/contact`} className="btn btn-secondary">
                          {dict.common.getStarted}
                        </Link>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={`/${locale}/calculator`} className="btn btn-secondary">
                          {dict.common.calculator}
                        </Link>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          x: 10,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={`/${locale}/about`} className="btn btn-outline">
                          {dict.common.learnMore}
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
              >
                <div className="md:rounded-3xl">
                  <div className="relative px-6 md:pl-16 md:pr-0">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="mx-auto max-w-2xl md:mx-0 md:max-w-none relative h-[500px]"
                    >
                      <motion.img
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        src="https://i.pinimg.com/736x/19/c0/e5/19c0e5503d99096e38ebeb93a718e0d2.jpg"
                        alt="Insurance illustration"
                        className="absolute inset-0 w-full h-full object-cover rounded-tl-xl bg-white/5 ring-1 ring-white/10"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"
            />
          </div>
        </div>
      </motion.section>

      {/* Private Services Section */}
      <motion.section 
        ref={privateServicesRef}
        initial="hidden"
        animate={isPrivateServicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 sm:py-24 bg-gray-50"
      >
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              {dict.home.privateServices.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              {dict.home.privateServices.subtitle}
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {Object.entries(dict.home.privateServices.services).map(([key, service]) => (
                <motion.div 
                  key={key}
                  variants={fadeInUp}
                  className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                    <Link
                      href={`/${locale}/private/${key}`}
                      className="mt-6 text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      {dict.common.learnMore} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Corporate Services Section */}
      <motion.section 
        ref={corporateServicesRef}
        initial="hidden"
        animate={isCorporateServicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 sm:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              {dict.home.corporateServices.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              {dict.home.corporateServices.subtitle}
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              {Object.entries(dict.home.corporateServices.services).map(([key, service]) => (
                <motion.div 
                  key={key}
                  variants={fadeInUp}
                  className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                    <Link
                      href={`/${locale}/corporate/${key}`}
                      className="mt-6 text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      {dict.common.learnMore} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef}
        initial="hidden"
        animate={isCtaInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative isolate py-16 sm:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Contact us today to discuss how we can help you achieve your financial goals.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link href={`/${locale}/contact`} className="btn btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
