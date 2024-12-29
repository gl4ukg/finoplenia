import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import HomeClient from '@/components/HomeClient';

interface Props {
  params: {
    locale: Locale;
  };
}

const testimonials = [
  {
    content:
      'Tincidunt integer commodo, cursus etiam aliquam neque, blandit congue hac amet dictum sapien, lectus tellus tincidunt. Urna placerat.',
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    content:
      'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    author: {
      name: 'Judith Rogers',
      role: 'CEO at Workcation',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default async function Home({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  return <HomeClient dict={dict} locale={locale} testimonials={testimonials} />;
}