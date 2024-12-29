import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import ContactClient from './ContactClient';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Contact({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  
  return <ContactClient locale={locale} dict={dict} />;
}