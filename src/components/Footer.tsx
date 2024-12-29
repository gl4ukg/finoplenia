'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'de';

  const navigation = {
    solutions: [
      { name: lang === 'de' ? 'Versicherung' : 'Insurance', href: `/${lang}/private/insurance` },
      { name: lang === 'de' ? 'Altersvorsorge' : 'Retirement Planning', href: `/${lang}/private/retirement` },
      { name: lang === 'de' ? 'Vermögensberatung' : 'Wealth Advice', href: `/${lang}/private/wealth` },
      { name: lang === 'de' ? 'Steuerberatung' : 'Tax Advisory', href: `/${lang}/private/tax` },
      { name: lang === 'de' ? 'Versicherungsrechner' : 'Insurance Calculator', href: `/${lang}/calculator` },
    ],
    company: [
      { name: lang === 'de' ? 'Über uns' : 'About', href: `/${lang}/about` },
      { name: lang === 'de' ? 'Blog' : 'Blog', href: `/${lang}/blog` },
      { name: lang === 'de' ? 'Karriere' : 'Careers', href: `/${lang}/careers` },
      { name: lang === 'de' ? 'Kontakt' : 'Contact', href: `/${lang}/contact` },
    ],
    legal: [
      { name: lang === 'de' ? 'Datenschutz' : 'Privacy', href: `/${lang}/privacy` },
      { name: lang === 'de' ? 'AGB' : 'Terms', href: `/${lang}/terms` },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: FaFacebook,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: FaTwitter,
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: FaLinkedin,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: FaInstagram,
      },
    ],
  };

  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href={`/${lang}`} className="text-2xl font-bold text-white">
              Finoplenia
            </Link>
            <p className="text-sm leading-6 text-white/80">
              {lang === 'de'
                ? 'Ihre vertrauenswürdige Finanzberatung für eine sichere Zukunft.'
                : 'Your trusted financial advisory for a secure future.'}
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {lang === 'de' ? 'Lösungen' : 'Solutions'}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white/80 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {lang === 'de' ? 'Unternehmen' : 'Company'}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white/80 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {lang === 'de' ? 'Rechtliches' : 'Legal'}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white/80 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {lang === 'de' ? 'Social Media' : 'Social Media'}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white/80 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-900/10 pt-8">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Finoplenia. {lang === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
