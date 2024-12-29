'use client';

import { useParams } from 'next/navigation';
import { useCallback } from 'react';
import type { Locale } from '@/i18n/settings';

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale || 'de') as Locale;

  const t = useCallback((key: string, dict: any) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj?.[k], dict) || key;
  }, []);

  return { t, locale };
}
