import dynamic from 'next/dynamic';
import Section1 from '@/components/real-estate-page/section-1';
const Section2 = dynamic(() => import('@/components/real-estate-page/section-2'));
const Section3 = dynamic(() => import('@/components/real-estate-page/section-3'));
const Section4 = dynamic(() => import('@/components/real-estate-page/section-4'));
const Section5 = dynamic(() => import('@/components/real-estate-page/section-5'));
const Section6 = dynamic(() => import('@/components/real-estate-page/section-6'));
const Section7 = dynamic(() => import('@/components/real-estate-page/section-7'));
const Section8 = dynamic(() => import('@/components/real-estate-page/section-8'));
const Section9 = dynamic(() => import('@/components/real-estate-page/section-9'));
const Section10 = dynamic(() => import('@/components/real-estate-page/section-10'));
import { NextPage } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: {
    locale: string;
  };
}

const Page: NextPage<Props> = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </main>
  );
};

export default Page;
