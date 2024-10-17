'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import bg_top from '@/public/travel-page/section-3-bg-top.webp';
import SectionForm from '../customer-form/section-form';

interface Props {}

const Section7: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_7');

  return (
    <section
      id={t('id')}
      className="relative bg-[url('/travel-page/section-7-bg.jpeg')] bg-no-repeat bg-center bg-cover pt-[200px] pb-[100px]"
    >
      <div className="absolute top-0 inset-x-0 aspect-[12]">
        <Image
          src={bg_top}
          alt="Section 5 background bottom"
          fill
          sizes="100vw"
          className="object-cover rotate-180"
        />
      </div>

      <ContentContainer maxWidth="xl:max-w-[1000px] max-w-[92%]">
        <div className="mb-10">
          <CustomHeading2 t={t} customClassname="text-center text-white" />

          <Reveal>
            <p className="text-center mb-2 md:text-lg text-sm text-white">{t('description')}</p>
          </Reveal>
        </div>

        <SectionForm type="type_5" />
      </ContentContainer>
    </section>
  );
};

export default Section7;
