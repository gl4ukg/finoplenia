'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Testimonials } from '@/components/Testimonials';
import { useRef } from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Service {
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

interface Dictionary {
  home: {
    hero: {
      title: string;
      subtitle: string;
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
  testimonials: Testimonial[];
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

  const isHeroInView = useInView(heroRef);
  const isPrivateServicesInView = useInView(privateServicesRef);
  const isCorporateServicesInView = useInView(corporateServicesRef);
  const [scrollY, setScrollY] = useState(0);

  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative pt-28 pb-16 sm:pt-28 sm:pb-24 lg:pb-28 overflow-hidden"
      >
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <motion.svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            style={{
              transform: `translateX(-50%) translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`,
            }}
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </motion.svg>
          <div className="absolute z-10 top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-primary/5 via-primary/2 to-transparent" />
          <div className="absolute z-10 bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-primary/5 via-primary/2 to-transparent" />
        </div>

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
              className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white sm:h-32"
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
        className="relative py-16 sm:py-24 bg-gray-50 overflow-hidden"
      >
        {/* Floating Icons */}
        <div className="absolute inset-0 z-10">
          {/* Bank Icon */}
          <motion.div
            className="absolute top-20 left-[10%] text-primary/20"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05}px)`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
          </motion.div>

          {/* Wallet Icon */}
          <motion.div
            className="absolute top-40 right-[15%] text-primary/10"
            style={{
              transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.06}px) rotate(${scrollY * 0.02}deg)`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
            </svg>
          </motion.div>

          {/* Document Icon */}
          <motion.div
            className="absolute bottom-20 left-[33%] text-primary/15"
            style={{
              transform: `translate(${scrollY * -0.12}px, ${scrollY * -0.08}px) rotate(${scrollY * -0.03}deg)`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </motion.div>

          {/* Lock Icon */}
          <motion.div
            className="absolute bottom-40 right-[25%] text-primary/20"
            style={{
              transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px) rotate(${scrollY * 0.04}deg)`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </motion.div>
        </div>

        {/* Background Circles */}
        <motion.div 
          className="absolute inset-0 z-10"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
          </svg>
        </motion.div>
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
                  className="z-20 relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <div className="relative h-48 w-full mb-6 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={key === 'wealth' || key === 'insurance'}
                      />
                    </div>
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
        className="relative py-16 sm:py-24 overflow-hidden"
      >
        {/* Background Blobs */}
        <motion.div 
          className="absolute inset-0 z-10"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          <svg
            className="absolute left-[calc(50%-4rem)] top-10 h-[32rem] w-[32rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset="1" stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
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
                    <div className="relative h-48 w-full mb-6 overflow-hidden rounded-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
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
