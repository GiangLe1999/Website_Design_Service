import { Pathnames } from 'next-intl/navigation';

export const defaultLocale = 'vi' as const;
export const locales = ['vi', 'en'] as const;

export const pathnames = {
  '/': {
    vi: '/thiet-ke-website',
    en: '/website-design',
  },
  '/thiet-ke-website-bat-dong-san': {
    vi: '/thiet-ke-website-bat-dong-san',
    en: '/property-website-design',
  },
  '/thiet-ke-website-noi-that': {
    vi: '/thiet-ke-website-noi-that',
    en: '/interior-website-design',
  },
  '/thiet-ke-website-ban-hang': {
    vi: '/thiet-ke-website-ban-hang',
    en: '/e-commerce-website-design',
  },
  '/thiet-ke-website-du-lich': {
    vi: '/thiet-ke-website-du-lich',
    en: '/travel-website-design',
  },
  '/thiet-ke-website-doanh-nghiep': {
    vi: '/thiet-ke-website-doanh-nghiep',
    en: '/business-website-design',
  },
  '/blog': {
    vi: '/blog',
    en: '/blog',
  },
  '/lien-he': {
    vi: '/lien-he',
    en: '/contact',
  },
  '/blog/[slug]': {
    vi: '/blog/[slug]',
    en: '/blog/[slug]',
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
