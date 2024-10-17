import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import Image from 'next/image';
import CustomHeading2 from '../custom-heading-2';
import icon from '@/public/travel-page/process-timeline-icon.png';
import bg_top from '@/public/travel-page/section-3-bg-top.webp';
import { cn } from '@/lib/utils';

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_5');

  return (
    <>
      <div className="h-[100px] bg-gradient-to-b from-white to-[#EFEFF0]"></div>
      <section
        id={t('id')}
        className="bg-[url('/travel-page/section-5-bg.webp')] bg-no-repeat bg-center py-[15%] bg-cover relative"
      >
        <div className="absolute bottom-0 inset-x-0 aspect-[12]">
          <Image
            src={bg_top}
            alt="Section 5 background bottom"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-[10]">
          <ContentContainer>
            <CustomHeading2 t={t} type_6 customClassname="text-center" />

            <Reveal customClassname="flex items-center gap-10">
              <div className="w-[40%]">
                <p className="font-bold text-2xl mb-2">{t('reason_1.heading')}</p>
                <p className="text-sm leading-7">{t('reason_1.description')}</p>
              </div>

              <Image src={icon} alt="Icon 1" className="mt-6" />
            </Reveal>

            <Reveal customClassname="flex items-center gap-10">
              <div className="w-1/2">
                <Image src={icon} alt="Icon 1" className="mt-20 ml-auto rotate-x-[180deg]" />
              </div>

              <div className="flex-1">
                <p className="font-bold text-2xl mb-2">{t('reason_1.heading')}</p>
                <p className="text-sm leading-7">{t('reason_1.description')}</p>
              </div>
            </Reveal>
          </ContentContainer>
        </div>
      </section>
    </>
  );
};

export default Section5;
