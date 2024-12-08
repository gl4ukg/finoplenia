'use client';

import { LazyMotion, domAnimation, m as motion, AnimatePresence } from 'framer-motion';
import { CookieProvider } from '@/contexts/CookieContext';
import { CookieConsent } from './components/CookieConsent';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CookieProvider>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </LazyMotion>
      <CookieConsent />
    </CookieProvider>
  );
}
