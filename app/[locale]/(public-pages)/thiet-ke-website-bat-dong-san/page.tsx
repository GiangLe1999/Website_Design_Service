import Section1 from '@/components/real-estate-page/section-1';
import Section2 from '@/components/real-estate-page/section-2';
import Section3 from '@/components/real-estate-page/section-3';
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
};

export default Page;
