import Section1 from '@/components/interior-page/section-1';
import { NextPage } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
const Section2 = dynamic(() => import('@/components/interior-page/section-2'));
const Section3 = dynamic(() => import('@/components/interior-page/section-3'));
const Section4 = dynamic(() => import('@/components/interior-page/section-4'));
const Section5 = dynamic(() => import('@/components/interior-page/section-5'));
const Section6 = dynamic(() => import('@/components/interior-page/section-6'));
const Section7 = dynamic(() => import('@/components/interior-page/section-7'));
const Section8 = dynamic(() => import('@/components/interior-page/section-8'));
const Section9 = dynamic(() => import('@/components/interior-page/section-9'));
const Section10 = dynamic(() => import('@/components/interior-page/section-10'));
const Section11 = dynamic(() => import('@/components/interior-page/section-11'));
const Section12 = dynamic(() => import('@/components/interior-page/section-12'));
const Section13 = dynamic(() => import('@/components/interior-page/section-13'));

interface Props {
  params: {
    locale: string;
  };
}

interface Props {}

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
      <Section11 />
      <Section12 />
      <Section13 />
    </main>
  );
};

export default Page;
