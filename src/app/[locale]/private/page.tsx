import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import { PrivateClient } from '@/components/PrivateClient';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Private({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  return <PrivateClient dict={dict} />;
}
