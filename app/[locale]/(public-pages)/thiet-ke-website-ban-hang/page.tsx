import Section1 from '@/components/ecommerce-page/section-1';
import { NextPage } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
const Section2 = dynamic(() => import('@/components/ecommerce-page/section-2'));
const Section3 = dynamic(() => import('@/components/ecommerce-page/section-3'));
const Section4 = dynamic(() => import('@/components/ecommerce-page/section-4'));
const Section5 = dynamic(() => import('@/components/ecommerce-page/section-5'));
const Section6 = dynamic(() => import('@/components/ecommerce-page/section-6'));
const Section7 = dynamic(() => import('@/components/ecommerce-page/section-7'));
const Section8 = dynamic(() => import('@/components/ecommerce-page/section-8'));
const Section9 = dynamic(() => import('@/components/ecommerce-page/section-9'));

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
      <div className="bg-gradient-to-b from-white to-[#EBF3FE]">
        <Section7 />
        <Section8 />
      </div>
      <Section9 />
    </main>
  );
};

export default Page;
