import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';
import { Link } from '@/app/navigation';
import CustomHeading2 from '../custom-heading-2';
import img_1 from '@/public/ecommerce-page/reason-1.jpeg';
import img_2 from '@/public/ecommerce-page/reason-2.jpeg';
import img_3 from '@/public/ecommerce-page/reason-3.jpeg';
import img_4 from '@/public/ecommerce-page/reason-4.jpeg';
import img_5 from '@/public/ecommerce-page/reason-5.png';
import img_6 from '@/public/ecommerce-page/reason-6.png';
import img_7 from '@/public/ecommerce-page/reason-7.png';
import img_8 from '@/public/ecommerce-page/reason-8.png';

interface Props {}

const stepsData = [
  {
    heading: 'reason_1.heading',
    description: 'reason_1.description',
    image: img_1,
  },
  {
    heading: 'reason_2.heading',
    description: 'reason_2.description',
    image: img_2,
  },
  {
    heading: 'reason_3.heading',
    description: 'reason_3.description',
    image: img_3,
  },
  {
    heading: 'reason_4.heading',
    description: 'reason_4.description',
    image: img_4,
  },
  {
    heading: 'reason_5.heading',
    description: 'reason_5.description',
    image: img_5,
  },
  {
    heading: 'reason_6.heading',
    description: 'reason_6.description',
    image: img_6,
  },
  {
    heading: 'reason_7.heading',
    description: 'reason_7.description',
    image: img_7,
  },
  {
    heading: 'reason_8.heading',
    description: 'reason_8.description',
    image: img_8,
  },
];

const Section3: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('ecommerce_page.section_3');

  return (
    <section id={t('id')} className="pt-[80px]">
      <ContentContainer maxWidth="max-w-[1000px]">
        <CustomHeading2 t={t} type_5 customClassname="text-center" />
      </ContentContainer>
    </section>
  );
};

export default Section3;
