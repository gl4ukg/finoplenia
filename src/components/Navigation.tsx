'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useNavigation } from '@/hooks/useNavigation';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const { navigation, locale, pathname } = useNavigation();
  const { main, callToAction, languages, calculator } = navigation;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur">
      <nav className="container flex items-center justify-between py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5 text-2xl font-bold">
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
        
        {/* Desktop Navigation */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {main.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <Link
                  href={`/${locale}${item.href}`}
                  className="flex items-center text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                  <ChevronDownIcon
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={`h-4 w-4 ml-2 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                </Link>
              ) : (
                <Link
                  href={`/${locale}${item.href}`}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              )}

              {item.submenu && (
                <Transition
                  show={activeDropdown === item.name}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div className="absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {item.submenu.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex-auto">
                            <Link
                              href={`/${locale}${subItem.href}`}
                              className="block font-semibold text-gray-900"
                            >
                              {subItem.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">{subItem.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Transition>
              )}
            </div>
          ))}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-8">
          {languages.map((l) => (
            <Link
              key={l.code}
              href={pathname.replace(`/${locale}`, `/${l.code}`)}
              className={`text-sm font-semibold ${
                l.code === locale ? 'text-primary' : 'text-gray-900'
              }`}
            >
              {l.name}
            </Link>
          ))}
          <Link
            href={`/${locale}${calculator.href}`}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            {calculator.text}
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="-m-1.5 p-1.5 text-2xl font-bold">
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
                {main.map((item) => (
                  <Fragment key={item.name}>
                    {item.submenu ? (
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                              {item.name}
                              <ChevronDownIcon
                                className={cn(
                                  'h-5 w-5 flex-none',
                                  open && 'rotate-180'
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {item.submenu.map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as={Link}
                                  href={`/${locale}${subItem.href}`}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        href={`/${locale}${item.href}`}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    )}
                  </Fragment>
                ))}
                <Link
                  href={`/${locale}${calculator.href}`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {calculator.text}
                </Link>
              </div>
              <div className="py-6">
                <div className="flex justify-center gap-x-4 py-2">
                  {languages.map((lang) => (
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
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
