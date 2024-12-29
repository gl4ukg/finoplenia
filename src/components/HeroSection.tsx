'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
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
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref,
  secondaryButtonHref,
  showButtons = true,
  className = '',
}: HeroSectionProps) {
  return (
    <section className={`relative isolate overflow-hidden bg-primary pt-14 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-white"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-white"
          >
            {description}
          </motion.p>
          {showButtons && (primaryButtonText || secondaryButtonText) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              {primaryButtonText && primaryButtonHref && (
                <Link href={primaryButtonHref} className="btn btn-primary">
                  {primaryButtonText}
                </Link>
              )}
              {secondaryButtonText && secondaryButtonHref && (
                <Link href={secondaryButtonHref} className="btn btn-outline">
                  {secondaryButtonText}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
