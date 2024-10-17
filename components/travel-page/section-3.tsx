'use client';

import { useTranslations } from 'next-intl';
import React, { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import Image from 'next/image';
import CustomHeading2 from '../custom-heading-2';
import img1 from '@/public/travel-page/section-3-img.webp';

const typeData = [
  {
    heading: 'type_1.heading',
    description: 'type_1.description',
  },
  {
    heading: 'type_2.heading',
    description: 'type_2.description',
  },
  {
    heading: 'type_3.heading',
    description: 'type_3.description',
  },
];

interface Props {}

const Section3: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_3');

  return (
    <section id={t('id')} className="sm:mt-[100px] mt-[70px]">
      <ContentContainer maxWidth="max-w-[900px]">
        <CustomHeading2 t={t} type_6 customClassname="text-center" />
        <p className="text-sm leading-7 md:text-lg md:leading-9 text-center">{t('description')}</p>
      </ContentContainer>

      <ContentContainer>
        <Reveal customClassname="relative aspect-[1.34]">
          <Image
            src={img1}
            alt="Phân loại website du lịch"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {typeData.map((item, index) => (
            <Reveal
              key={index}
              customClassname="relative border shadow-md rounded-md px-6 py-4 text-center"
            >
              <div className="relative w-[107px] h-[93px] mb-6 bg-[url('/travel-page/bg-style.png')] bg-no-repeat bg-center grid place-items-center mx-auto">
                <span className="font-bold mx-auto text-3xl text-white">0{index + 1}</span>
              </div>

              <p className="text-xl leading-9 font-bold mb-2">{t(item.heading)}</p>
              <p className="text-sm leading-7">
                {t.rich('description', {
                  bold: (chunks: any) => <strong>{chunks}</strong>,
                })}
              </p>
            </Reveal>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section3;
