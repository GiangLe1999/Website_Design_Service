'use client';

import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import Image from 'next/image';
import CustomHeading2 from '../custom-heading-2';
import img1 from '@/public/travel-page/section-3-img-2.webp';
import img2 from '@/public/travel-page/section-3-img-3.webp';
import img3 from '@/public/travel-page/module-dat-tour.png';
import bg_top from '@/public/travel-page/section-3-bg-top.webp';
import { cn } from '@/lib/utils';

const typeData = [
  {
    heading: 'module_1.heading',
    description: 'module_1.description',
    img: img1,
  },
  {
    heading: 'module_2.heading',
    description: 'module_2.description',
    img: img2,
  },
  {
    heading: 'module_3.heading',
    description: 'module_3.description',
    img: img3,
  },
];

interface Props {}

const Section4: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_4');
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section
      id={t('id')}
      className="mt-[70px] bg-[url('/travel-page/section-3-bg.webp')] bg-no-repeat bg-center py-[15%] bg-cover relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#244282] to-[#029789] opacity-90"></div>

      <div className="absolute top-[-1%] inset-x-0 aspect-[12]">
        <Image
          src={bg_top}
          alt="Section 3 background top"
          fill
          sizes="100vw"
          className="object-cover rotate-180"
        />
      </div>

      <div className="absolute bottom-0 inset-x-0 aspect-[12]">
        <Image
          src={bg_top}
          alt="Section 3 background bottom"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-[10]">
        <ContentContainer>
          <CustomHeading2 t={t} customClassname="text-center text-white" />
        </ContentContainer>

        <ContentContainer>
          <p className="text-sm text-white leading-7 md:text-lg md:leading-9 text-center">
            {t('description')}
          </p>
        </ContentContainer>

        <ContentContainer customClassName="max-w-[900px] mt-7">
          <Reveal customClassname="sm:flex items-center gap-6">
            <button
              className={cn(
                'uppercase py-3 px-4 text-sm font-bold rounded-[10px] transition sm:mb-0 mb-6 sm:w-fit w-full',
                activeModule === 0 ? 'bg-[#E40E26] text-white' : 'bg-[#CDDBE6]'
              )}
              onClick={() => setActiveModule(0)}
            >
              {t('module_1.heading')}
            </button>
            <button
              className={cn(
                'uppercase py-3 px-4 text-sm font-bold rounded-[10px] transition sm:mb-0 mb-6 sm:w-fit w-full',
                activeModule === 1 ? 'bg-[#E40E26] text-white' : 'bg-[#CDDBE6]'
              )}
              onClick={() => setActiveModule(1)}
            >
              {t('module_2.heading')}
            </button>
            <button
              className={cn(
                'uppercase py-3 px-4 text-sm font-bold rounded-[10px] transition sm:w-fit w-full',
                activeModule === 2 ? 'bg-[#E40E26] text-white' : 'bg-[#CDDBE6]'
              )}
              onClick={() => setActiveModule(2)}
            >
              {t('module_3.heading')}
            </button>
          </Reveal>
        </ContentContainer>

        <ContentContainer customClassName="lg:mt-20 mt-8 text-white text-sm leading-7">
          <div className="lg:flex gap-16">
            <Reveal customClassname="lg:w-[40%] w-full lg:mb-0 mb-8">
              {t.rich(typeData[activeModule].description, {
                ul: (chunks: any) => <ul>{chunks}</ul>,
                li: (chunks: any) => <li className="list-disc list-inside">{chunks}</li>,
              })}
            </Reveal>

            <Reveal customClassname="flex-1">
              <Image src={typeData[activeModule].img} alt={typeData[activeModule].heading} />
            </Reveal>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
};

export default Section4;
