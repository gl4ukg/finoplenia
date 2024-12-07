'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocale } from '@/hooks/useLocale';

const navigation = {
  languages: [
    { name: 'EN', code: 'en' },
    { name: 'DE', code: 'de' },
  ],
  main: [
    {
      name: 'Private',
      href: '/private',
      submenu: [
        { name: 'Insurance', href: '/private/insurance' },
        { name: 'Retirement', href: '/private/retirement' },
        { name: 'Wealth', href: '/private/wealth' },
        { name: 'Property', href: '/private/property' },
        { name: 'Tax', href: '/private/tax' },
      ],
    },
    {
      name: 'Corporate',
      href: '/corporate',
      submenu: [
        { name: 'Advisory', href: '/corporate/advisory' },
        { name: 'Tax', href: '/corporate/tax' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLocale();
  const pathname = usePathname();

  const localizedNavigation = {
    languages: navigation.languages,
    main: navigation.main.map(item => ({
      ...item,
      href: `/${lang}${item.href}`,
      submenu: item.submenu?.map(subItem => ({
        ...subItem,
        href: `/${lang}${subItem.href}`,
      })),
    })),
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link href={`/${lang}`} className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-primary">Finoplenia</span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {localizedNavigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href
                  ? 'text-secondary'
                  : 'text-gray-900 hover:text-secondary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Language switcher */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {localizedNavigation.languages.map((lang) => (
            <Link
              key={lang.code}
              href={pathname.replace(/^\/[^/]+/, `/${lang.code}`)}
              className={`text-sm font-semibold ${
                pathname.startsWith(`/${lang.code}`)
                  ? 'text-secondary'
                  : 'text-gray-900 hover:text-secondary'
              }`}
            >
              {lang.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {localizedNavigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    pathname === item.href
                      ? 'bg-gray-50 text-secondary'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 my-4" />
              <div className="flex justify-center gap-x-4 py-2">
                {localizedNavigation.languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={pathname.replace(/^\/[^/]+/, `/${lang.code}`)}
                    className={`text-sm font-semibold ${
                      pathname.startsWith(`/${lang.code}`)
                        ? 'text-secondary'
                        : 'text-gray-900 hover:text-secondary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
