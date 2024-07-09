import dynamic from 'next/dynamic';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
const NavigationDots = dynamic(() => import('@/components/navigation-dots'), { ssr: false });

import Section1 from '@/components/home-page/section-1';
const Section2 = dynamic(() => import('@/components/home-page/section-2'));
const Section3 = dynamic(() => import('@/components/home-page/section-3'));
const Section4 = dynamic(() => import('@/components/home-page/section-4'));
const Section5 = dynamic(() => import('@/components/home-page/section-5'));
const Section6 = dynamic(() => import('@/components/home-page/section-6'));
const Section7 = dynamic(() => import('@/components/home-page/section-7'));
const Section8 = dynamic(() => import('@/components/home-page/section-8'));
const Section9 = dynamic(() => import('@/components/home-page/section-9'));
const Section10 = dynamic(() => import('@/components/home-page/section-10'));
const Section11 = dynamic(() => import('@/components/home-page/section-11'));
const Section12 = dynamic(() => import('@/components/home-page/section-12'));
const Section13 = dynamic(() => import('@/components/home-page/section-13'));
const Section14 = dynamic(() => import('@/components/home-page/section-14'));
const Section15 = dynamic(() => import('@/components/home-page/section-15'));
const Section16 = dynamic(() => import('@/components/home-page/section-16'));
const Section17 = dynamic(() => import('@/components/home-page/section-17'));

interface Props {
  params: {
    locale: string;
  };
}

const HomePage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home_page.section_ids');
  return (
    <main>
      <section id={t('design_service')}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </section>

      <section id={t('why_needed')}>
        <Section5 />
        <Section6 />
      </section>

      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />

      <NavigationDots />
    </main>
  );
};

export default HomePage;
