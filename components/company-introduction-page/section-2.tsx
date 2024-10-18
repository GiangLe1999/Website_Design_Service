'use client';

import { useTranslations } from 'next-intl';
import { FC, useEffect, useRef, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import top_icon_1 from '@/public/company-introduction-page/section-2-top-icon-1.svg';
import top_icon_2 from '@/public/company-introduction-page/section-2-top-icon-2.svg';
import top_icon_3 from '@/public/company-introduction-page/section-2-top-icon-3.svg';
import top_icon_4 from '@/public/company-introduction-page/section-2-top-icon-4.svg';
import top_icon_5 from '@/public/company-introduction-page/section-2-top-icon-5.svg';

import bottom_icon_1 from '@/public/company-introduction-page/section-2-icon-1.svg';
import bottom_icon_2 from '@/public/company-introduction-page/section-2-icon-2.svg';
import bottom_icon_3 from '@/public/company-introduction-page/section-2-icon-3.svg';
import bottom_icon_4 from '@/public/company-introduction-page/section-2-icon-4.svg';
import CustomHeading2 from '../custom-heading-2';

const swiperData = [
  {
    heading: 'reason_1.heading',
    description: 'reason_1.description',
    icon: top_icon_1,
  },
  {
    heading: 'reason_2.heading',
    description: 'reason_2.description',
    icon: top_icon_2,
  },
  {
    heading: 'reason_3.heading',
    description: 'reason_3.description',
    icon: top_icon_3,
  },
  {
    heading: 'reason_4.heading',
    description: 'reason_4.description',
    icon: top_icon_4,
  },
  {
    heading: 'reason_5.heading',
    description: 'reason_5.description',
    icon: top_icon_5,
  },
];

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('company_introduction_page.section_2');

  return (
    <section id={t('id')} className="relative bg-[#0053d4] py-[120px]">
      <ContentContainer>
        <div className="max-w-[600px] mb-14">
          <CustomHeading2 t={t} customClassname="text-white" />
          <p className="text-white text-sm leading-7">{t('description')}</p>
        </div>

        <Reveal>
          <SectionSwiper />
        </Reveal>
      </ContentContainer>
    </section>
  );
};

const SectionSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeBarLength, setActiveBarLength] = useState(0);
  const swiperRef = useRef(null);

  const t = useTranslations('company_introduction_page.section_2');

  useEffect(() => {
    const bar = document.querySelector('.custom-progressbar-fill');
    if (bar) {
      setActiveBarLength(bar?.clientWidth);
    }
  }, []);

  return (
    <div className="relative">
      <Swiper
        direction="horizontal"
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={1}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
          clickable: true,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {swiperData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SwiperCard
              heading={t(slide.heading)}
              description={t(slide.description)}
              icon={slide.icon}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-progressbar-container">
        <div
          className="custom-progressbar-fill"
          style={{ width: '20%', left: activeIndex * activeBarLength }}
        ></div>
      </div>
    </div>
  );
};

interface SwiperCardProps {
  heading: string;
  description: string;
  icon: any;
}

const SwiperCard: FC<SwiperCardProps> = ({ heading, description, icon }) => {
  return (
    <div className="cursor-pointer text-white border bg-[rgba(255,255,255,0.15)] h-[400px] backdrop-blur-[2px] box-border my-0 p-8 rounded-[1.042rem] border-solid border-[rgba(255,255,255,0.4)]">
      <div className="w-12 h-16">
        <Image src={icon} alt={heading} className="w-full h-auto" />
      </div>
      <h3 className="text-xl font-bold mb-4">{heading}</h3>
      <p className="text-sm leading-7">{description}</p>
    </div>
  );
};

export default Section2;
