import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import Image from 'next/image';
import CustomHeading2 from '../custom-heading-2';
import icon from '@/public/travel-page/process-timeline-icon.png';
import icon_2 from '@/public/travel-page/process-timeline-icon-2.png';
import bg_top from '@/public/travel-page/section-3-bg-top.webp';
import { cn } from '@/lib/utils';
import SpecialConsultButtton from '../special-consult-button';
import SpecialCallButton from '../special-call-button';

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_5');

  return (
    <section
      id={t('id')}
      className="bg-[url('/travel-page/section-5-bg.webp')] bg-no-repeat bg-center pt-[15%] sm:pb-[15%] pb-[25%] bg-cover relative"
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

      <div className="absolute top-0 inset-x-0 aspect-[12]">
        <Image
          src={bg_top}
          alt="Section 3 background top"
          fill
          sizes="100vw"
          className="object-cover rotate-180"
        />
      </div>

      <div className="relative z-[10]">
        <ContentContainer>
          <CustomHeading2 t={t} type_6 customClassname="text-center" />

          <Reveal customClassname="lg:flex gap-10 mt-14">
            <div className="lg:w-[40%] w-full lg:text-right text-center">
              <p className="font-bold text-2xl mb-2">{t('reason_1.heading')}</p>
              <p className="text-sm leading-7">{t('reason_1.description')}</p>
            </div>

            <div className="flex-1 shrink-0 lg:block hidden">
              <Image src={icon} alt="Icon 1" />
            </div>
          </Reveal>

          <Reveal customClassname="flex gap-10 lg:mt-6 mt-10">
            <div className="w-[55%] lg:block hidden">
              <Image
                src={icon}
                alt="Icon 2"
                className="ml-auto [transform:rotateY(180deg)] shrink-0"
              />
            </div>

            <div className="flex-1 lg:text-left text-center">
              <p className="font-bold text-2xl mb-2">{t('reason_2.heading')}</p>
              <p className="text-sm leading-7">{t('reason_2.description')}</p>
            </div>
          </Reveal>

          <Reveal customClassname="flex gap-10 lg:mt-6 mt-10">
            <div className="lg:w-[40%] w-full lg:text-right text-center">
              <p className="font-bold text-2xl mb-2">{t('reason_3.heading')}</p>
              <p className="text-sm leading-7">{t('reason_3.description')}</p>
            </div>

            <div className="flex-1 shrink-0">
              <Image src={icon_2} alt="Icon 3" />
            </div>
          </Reveal>

          <Reveal customClassname="flex sm:flex-row flex-col items-center justify-center gap-6 mt-16">
            <SpecialConsultButtton />
            <SpecialCallButton />
          </Reveal>
        </ContentContainer>
      </div>
    </section>
  );
};

export default Section5;
