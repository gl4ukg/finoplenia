'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useFooter } from '@/hooks/useFooter';

export function Footer() {
  const { footer, locale } = useFooter();
  const { company, services, legal, social } = footer;

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container pb-8 pt-16 sm:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href={`/${locale}`}>
              <span className="sr-only">Finoplenia</span>
              <img className="h-8 w-auto" src="/logo-white.svg" alt="" />
            </Link>
            <p className="text-sm leading-6 text-gray-400">
              {locale === 'de'
                ? 'Ihre vertrauenswürdige Finanzberatung für eine sichere Zukunft.'
                : 'Your trusted financial advisory for a secure future.'}
            </p>
            <div className="flex space-x-6">
              {social.links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.name === 'Facebook' && <FaFacebook className="h-6 w-6" aria-hidden="true" />}
                  {item.name === 'Twitter' && <FaTwitter className="h-6 w-6" aria-hidden="true" />}
                  {item.name === 'LinkedIn' && <FaLinkedin className="h-6 w-6" aria-hidden="true" />}
                  {item.name === 'Instagram' && <FaInstagram className="h-6 w-6" aria-hidden="true" />}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {company.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {company.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={`/${locale}${item.href}`}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {services.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {services.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={`/${locale}${item.href}`}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
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
                  {legal.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {legal.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={`/${locale}${item.href}`}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {social.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {social.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
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
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Finoplenia. {locale === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
