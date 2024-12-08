'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '@/contexts/CookieContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function CookieConsent() {
  const [showCustomize, setShowCustomize] = useState(false);
  const { preferences, updatePreferences, hasConsented, acceptAll, rejectAll } = useCookieConsent();
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'de';

  const translations = {
    title: {
      en: 'Cookie Settings',
      de: 'Cookie-Einstellungen'
    },
    description: {
      en: 'We use cookies to enhance your browsing experience and analyze our traffic.',
      de: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und unseren Verkehr zu analysieren.'
    },
    essential: {
      en: 'Essential Cookies',
      de: 'Essentielle Cookies'
    },
    essentialDesc: {
      en: 'Required for the website to function properly.',
      de: 'Erforderlich für die ordnungsgemäße Funktion der Website.'
    },
    analytics: {
      en: 'Analytics Cookies',
      de: 'Analyse-Cookies'
    },
    analyticsDesc: {
      en: 'Help us understand how visitors interact with our website.',
      de: 'Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.'
    },
    marketing: {
      en: 'Marketing Cookies',
      de: 'Marketing-Cookies'
    },
    marketingDesc: {
      en: 'Used to deliver personalized advertisements.',
      de: 'Werden verwendet, um personalisierte Werbung zu liefern.'
    },
    customize: {
      en: 'Customize',
      de: 'Anpassen'
    },
    acceptAll: {
      en: 'Accept All',
      de: 'Alle akzeptieren'
    },
    rejectAll: {
      en: 'Reject All',
      de: 'Alle ablehnen'
    },
    save: {
      en: 'Save Preferences',
      de: 'Einstellungen speichern'
    },
    privacyPolicy: {
      en: 'Privacy Policy',
      de: 'Datenschutzerklärung'
    }
  };

  if (hasConsented || !preferences) return null;

  const [localPreferences, setLocalPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  const handleSave = () => {
    updatePreferences(localPreferences);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200"
    >
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {translations.title[lang]}
            </h3>
            <p className="mt-1 text-gray-600">
              {translations.description[lang]}
            </p>
          </div>

          <AnimatePresence>
            {showCustomize && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {translations.essential[lang]}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {translations.essentialDesc[lang]}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {translations.analytics[lang]}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {translations.analyticsDesc[lang]}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={localPreferences.analytics}
                    onChange={(e) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        analytics: e.target.checked,
                      }))
                    }
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {translations.marketing[lang]}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {translations.marketingDesc[lang]}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={localPreferences.marketing}
                    onChange={(e) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        marketing: e.target.checked,
                      }))
                    }
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href={`/${lang}/privacy`} className="hover:text-primary">
                {translations.privacyPolicy[lang]}
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {!showCustomize ? (
                <>
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="btn btn-outline"
                  >
                    {translations.customize[lang]}
                  </button>
                  <button onClick={rejectAll} className="btn btn-outline">
                    {translations.rejectAll[lang]}
                  </button>
                  <button onClick={acceptAll} className="btn btn-primary">
                    {translations.acceptAll[lang]}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="btn btn-outline"
                  >
                    {translations.customize[lang]}
                  </button>
                  <button onClick={handleSave} className="btn btn-primary">
                    {translations.save[lang]}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
