import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import { FAQClient } from '@/components/FAQClient';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function FAQ({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  return <FAQClient dict={dict} />;
}