'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences | null;
  updatePreferences: (newPreferences: CookiePreferences) => void;
  hasConsented: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const COOKIE_NAME = 'finoplenia_cookie_preferences';
const COOKIE_EXPIRY = 365; // Days

export function CookieProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const savedPreferences = Cookies.get(COOKIE_NAME);
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
        setHasConsented(true);
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
      }
    }
  }, []);

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setHasConsented(true);
    Cookies.set(COOKIE_NAME, JSON.stringify(newPreferences), {
      expires: COOKIE_EXPIRY,
      sameSite: 'strict'
    });

    // Update cookie consent for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: newPreferences.analytics ? 'granted' : 'denied'
      });
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true
    };
    updatePreferences(allAccepted);
  };

  const rejectAll = () => {
    const allRejected: CookiePreferences = {
      essential: true, // Essential cookies are always required
      analytics: false,
      marketing: false
    };
    updatePreferences(allRejected);
  };

  return (
    <CookieContext.Provider
      value={{
        preferences,
        updatePreferences,
        hasConsented,
        acceptAll,
        rejectAll
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
