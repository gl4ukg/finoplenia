'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { useCookieConsent } from '@/contexts/CookieContext';

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  const { preferences } = useCookieConsent();

  useEffect(() => {
    if (preferences?.analytics) {
      // Initialize GA only if analytics cookies are accepted
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    } else {
      // Revoke consent if analytics cookies are not accepted
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  }, [preferences?.analytics]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Set default consent state
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
