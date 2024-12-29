import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import { TermsClient } from '@/components/TermsClient';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Terms({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  return <TermsClient dict={dict} />;
}