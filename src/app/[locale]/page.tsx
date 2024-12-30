import { getDictionary } from '@/i18n/server';
import type { Locale } from '@/i18n/settings';
import HomeClient from '@/components/HomeClient';

interface Props {
  params: {
    locale: Locale;
  };
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Tincidunt integer commodo, cursus etiam aliquam neque, blandit congue hac amet dictum sapien, lectus tellus tincidunt. Urna placerat.',
    name: 'Tom Cook',
    role: 'Director of Product',
    company: 'Acme Inc',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    quote: 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
    name: 'Judith Rogers',
    role: 'CEO',
    company: 'Workcation',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default async function Home({ params: { locale } }: Props) {
  const dict = await getDictionary(locale);
  return <HomeClient dict={dict} locale={locale} testimonials={testimonials} />;
}