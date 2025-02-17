import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import { CorporateClient } from '@/components/CorporateClient';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Corporate({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  return <CorporateClient dict={dict} />;
}
