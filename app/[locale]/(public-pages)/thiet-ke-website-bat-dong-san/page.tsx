import Section1 from '@/components/real-estate-page/section-1';
import Section2 from '@/components/real-estate-page/section-2';
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
    </main>
  );
};

export default Page;
