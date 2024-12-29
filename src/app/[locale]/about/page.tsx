import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import { AboutClient } from '@/components/AboutClient';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function About({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);

  const timelineEvents = Object.entries(dict.about.history.timeline).map(([year, event]) => ({
    year,
    title: event.title,
    description: event.description,
  }));

  return <AboutClient dict={dict} timelineEvents={timelineEvents} />;
}
