import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import { PrivacyClient } from '@/components/PrivacyClient';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Privacy({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  return <PrivacyClient dict={dict} />;
}