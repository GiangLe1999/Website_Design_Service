import Section1 from '@/components/real-estate-page/section-1';
import Section2 from '@/components/real-estate-page/section-2';
import Section3 from '@/components/real-estate-page/section-3';
import Section4 from '@/components/real-estate-page/section-4';
import Section5 from '@/components/real-estate-page/section-5';
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
    </main>
  );
};

export default Page;
