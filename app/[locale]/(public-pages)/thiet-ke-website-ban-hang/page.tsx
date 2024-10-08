import Section1 from '@/components/ecommerce-page/section-1';
import { NextPage } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
const Section2 = dynamic(() => import('@/components/ecommerce-page/section-2'));
const Section3 = dynamic(() => import('@/components/ecommerce-page/section-3'));
const Section4 = dynamic(() => import('@/components/ecommerce-page/section-4'));

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
    </main>
  );
};

export default Page;
