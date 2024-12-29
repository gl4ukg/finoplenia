'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '@/contexts/CookieContext';
import Link from 'next/link';

export function CookieConsent() {
  const [showCustomize, setShowCustomize] = useState(false);
  const { preferences, updatePreferences, hasConsented, acceptAll, rejectAll } = useCookieConsent();
  
  const [localPreferences, setLocalPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  if (hasConsented || !preferences) return null;

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
              Cookies
            </h3>
            <p className="mt-1 text-gray-600">
              We use cookies to improve your experience on our website.
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
                      Essential Cookies
                    </h4>
                    <p className="text-sm text-gray-600">
                      These cookies are necessary for the website to function.
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
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-gray-600">
                      These cookies help us understand how you interact with our website.
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
                      Marketing Cookies
                    </h4>
                    <p className="text-sm text-gray-600">
                      These cookies help us deliver targeted advertising.
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
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {!showCustomize ? (
                <>
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="btn btn-outline"
                  >
                    Customize
                  </button>
                  <button onClick={rejectAll} className="btn btn-outline">
                    Reject All
                  </button>
                  <button onClick={acceptAll} className="btn btn-secondary">
                    Accept All
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="btn btn-outline"
                  >
                    Customize
                  </button>
                  <button onClick={handleSave} className="btn btn-secondary">
                    Save
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
