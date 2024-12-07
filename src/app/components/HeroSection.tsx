'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  showButtons?: boolean;
  className?: string;
}

export function HeroSection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref,
  secondaryButtonHref,
  showButtons = true,
  className = '',
}: HeroSectionProps) {
  return (
    <section className={`relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 bg-gradient-to-b from-primary to-primary-light text-white ${className}`}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {title}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-6 text-lg leading-8 text-gray-200">
              {description}
            </p>
          </motion.div>
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {primaryButtonHref && (
                  <Link
                    href={primaryButtonHref}
                    className="btn bg-white text-primary hover:bg-gray-100"
                  >
                    {primaryButtonText}
                  </Link>
                )}
                {secondaryButtonHref && (
                  <Link
                    href={secondaryButtonHref}
                    className="btn text-white border-2 border-white hover:bg-white hover:text-primary"
                  >
                    {secondaryButtonText}
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
