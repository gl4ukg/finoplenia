'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
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
  calculator: {
    href: '/calculator'
  }
};

const translations: { calculator: { [key: string]: string } } = {
  calculator: {
    en: 'Calculator',
    de: 'Rechner'
  }
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg">
      <nav className="container flex items-center justify-between py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${lang}`} className="-m-1.5 p-1.5 text-2xl font-bold">
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
        <div className="hidden lg:flex lg:gap-x-8">
          {localizedNavigation.main.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              )}
              {item.submenu && activeDropdown === item.name && (
                <div className="absolute left-0 z-10 mt-3 w-48 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-8">
          {localizedNavigation.languages.map((l) => (
            <Link
              key={l.code}
              href={pathname.replace(`/${lang}`, `/${l.code}`)}
              className={`text-sm font-semibold ${
                l.code === lang ? 'text-primary' : 'text-gray-900'
              }`}
            >
              {l.name}
            </Link>
          ))}
          <Link
            href={`/${lang}${navigation.calculator.href}`}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            {translations.calculator[lang]}
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed bg-white w-full z-50"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {localizedNavigation.main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      pathname === item.href
                        ? 'bg-gray-50 text-secondary'
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block rounded-md px-3 py-2 text-sm font-medium ${
                            pathname === subItem.href
                              ? 'bg-gray-50 text-secondary'
                              : 'text-gray-700 hover:bg-gray-50'
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
              <Link
                href={`/${lang}${navigation.calculator.href}`}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === `/${lang}${navigation.calculator.href}`
                    ? 'bg-gray-50 text-secondary'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {translations.calculator[lang]}
              </Link>
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
