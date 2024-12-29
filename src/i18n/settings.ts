export const i18n = {
  defaultLocale: 'de',
  locales: ['en', 'de'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function getLocaleFromPath(path: string): Locale {
  const locale = path.split('/')[1];
  return i18n.locales.includes(locale as Locale) ? (locale as Locale) : i18n.defaultLocale;
}

export function getAlternateLinks(path: string) {
  const currentLocale = getLocaleFromPath(path);
  const pathWithoutLocale = path.replace(`/${currentLocale}`, '');

  return i18n.locales.map((locale) => ({
    locale,
    path: locale === i18n.defaultLocale ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`,
  }));
}
