'use client';

import { useTranslations } from 'next-intl';
import { act, Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import ContentContainer from '../content-container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import Reveal from '../reveal';
import Image from 'next/image';
import img1 from '@/public/company-introduction-page/section-3-feature-1.svg';
import img2 from '@/public/company-introduction-page/section-3-feature-2.gif';
import img3 from '@/public/company-introduction-page/section-3-feature-3.svg';
import img4 from '@/public/company-introduction-page/section-3-feature-4.svg';
import img5 from '@/public/company-introduction-page/section-3-feature-5.svg';
import img6 from '@/public/company-introduction-page/section-3-feature-6.svg';
import img7 from '@/public/company-introduction-page/section-3-feature-7.svg';
import CustomHeading2 from '../custom-heading-2';
import { cn } from '@/lib/utils';
import { DotIcon } from 'lucide-react';

const featuresData = [
  { heading: 'feature_1.heading', description: 'feature_1.description', img: img1 },
  { heading: 'feature_2.heading', description: 'feature_2.description', img: img2 },
  { heading: 'feature_3.heading', description: 'feature_3.description', img: img3 },
  { heading: 'feature_4.heading', description: 'feature_4.description', img: img4 },
  { heading: 'feature_5.heading', description: 'feature_5.description', img: img5 },
  { heading: 'feature_6.heading', description: 'feature_6.description', img: img6 },
  { heading: 'feature_7.heading', description: 'feature_7.description', img: img7 },
];

interface Props {}

const Section3: FC<Props> = (props): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImgIndex = activeIndex === 6 ? 0 : activeIndex + 1;

  const t = useTranslations('company_introduction_page.section_3');

  return (
    <section id={t('id')} className="relative pt-[100px]">
      <ContentContainer>
        <div className="max-w-[600px] mb-24">
          <CustomHeading2 type_7 t={t} />
          <p className="text-sm leading-7">{t('description')}</p>
        </div>

        <div className="flex lg:flex-row flex-col gap-16">
          <SectionSwiper t={t} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <div className="flex-1">
            <Image src={featuresData[activeImgIndex].img} alt={`Tính năng ${activeIndex + 1}`} />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

interface SwiperProps {
  t: any;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const SectionSwiper: FC<SwiperProps> = ({ t, activeIndex, setActiveIndex }) => {
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const calculateRelativeIndex = (index: number) => {
    return (index - activeIndex + 7) % 7;
  };

  const isMiddle = (index: number) => {
    return calculateRelativeIndex(index) === 1;
  };

  return (
    <Swiper
      direction="vertical"
      spaceBetween={10}
      slidesPerGroup={1}
      slidesPerView={3}
      speed={1000}
      loop={true}
      onSwiper={(swiper) => {
        swiper.on('slideChange', handleSlideChange);
      }}
      className="lg:h-[800px] md:h-[600px] h-[800px] lg:w-[40%] w-full"
    >
      {featuresData.map((slide, index) => (
        <SwiperSlide key={index} data-module-id={slide}>
          <SwiperCard
            isMiddle={isMiddle(index)}
            heading={t(slide.heading)}
            description={t(slide.description)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface SwiperCardProps {
  isMiddle: boolean;
  heading: string;
  description: string;
}

const SwiperCard: FC<SwiperCardProps> = ({ isMiddle, heading, description }) => {
  return (
    <Reveal>
      <div className="flex gap-10 cursor-pointer">
        <div className="flex flex-col items-center">
          <div
            className={cn(
              'w-9 aspect-square rounded-full grid place-items-center transition',
              isMiddle ? 'border border-[#0B5BD6] opacity-100' : 'opacity-50'
            )}
          >
            <DotIcon
              className={cn('w-8 h-8 transition', isMiddle ? 'text-[#0B5BD6]' : 'text-[#85abe4]')}
            />
          </div>
          <div className="w-[1px] h-[210px] bg-[#ccddf6] mt-3"></div>
        </div>

        <div>
          <h3
            className={cn(
              'sm:text-2xl text-xl font-bold mb-3 transition',
              isMiddle ? 'text-[#0B5BD6]' : 'text-[#ADADAD]'
            )}
          >
            {heading}
          </h3>
          <p
            className={cn(
              'text-sm leading-7 transition',
              isMiddle ? 'text-muted-foreground' : 'text-[#C1C1C5]'
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default Section3;
