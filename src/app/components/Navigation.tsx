'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = {
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
  languages: [
    { name: 'DE', code: 'de' },
    { name: 'EN', code: 'en' },
  ],
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'de';

  const localizedNavigation = {
    ...navigation,
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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur">
      <nav className="container flex items-center justify-between py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${lang}`} className="-m-1.5 p-1.5 text-2xl font-bold text-primary">
            Finoplenia
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {localizedNavigation.main.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`inline-block text-sm font-semibold leading-6 ${
                  pathname === item.href ? 'text-secondary' : 'text-gray-900 hover:text-secondary'
                }`}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform pointer-events-none group-hover:pointer-events-auto">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="relative">
                      {/* Invisible overlay to maintain hover */}
                      <div className="absolute -top-3 inset-x-0 h-3" />
                      
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`-m-3 rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50 ${
                                pathname === subItem.href ? 'text-secondary' : 'text-gray-900'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
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
          <Link href={`/${lang}/contact`} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
          >
            <div className="fixed h-screen inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href={`/${lang}`} className="-m-1.5 p-1.5 text-2xl font-bold text-primary">
                  Finoplenia
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {localizedNavigation.main.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                            pathname === item.href
                              ? 'text-secondary bg-gray-50'
                              : 'text-gray-900 hover:bg-gray-50'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block rounded-lg px-3 py-2 text-sm font-semibold ${
                                  pathname === subItem.href
                                    ? 'text-secondary bg-gray-50'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-secondary'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <div className="flex gap-4">
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
                    <Link
                      href={`/${lang}/contact`}
                      className="btn btn-primary mt-4 w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
