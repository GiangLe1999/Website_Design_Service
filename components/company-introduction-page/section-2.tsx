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

import img from '@/public/company-introduction-page/section-2-img.png';
import circles from '@/public/company-introduction-page/section-2-round.svg';

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
    width: 64,
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
    <section id={t('id')} className="relative bg-[#0053d4] pt-[120px] overflow-hidden">
      <ContentContainer>
        <div className="sm:max-w-[600px] mb-14">
          <CustomHeading2 t={t} customClassname="text-white" />
          <p className="text-white text-sm leading-7">{t('description')}</p>
        </div>

        <Reveal>
          <SectionSwiper />
        </Reveal>

        <Reveal customClassname="pt-[160px] sm:max-w-[500px] text-white">
          <h3 className="font-bold text-3xl leading-snug mb-4">{t('sub_heading')}</h3>
          <p className="text-sm leading-7">{t('description')}</p>
        </Reveal>

        <div className="flex lg:flex-row flex-col items-center gap-20 px-5 sm:px-9 relative">
          <Reveal customClassname="lg:grid hidden absolute grid place-items-center top-[15%] left-[-5%] after:bg-[linear-gradient(180deg,#009bff_0%,rgba(97,193,255,0)_100%)] after:opacity-[0.15] after:content-[''] after:absolute after:animate-pulse after:top-[-1.3rem] after:left-[-1.3rem] after:right-[-1.3rem] after:bottom-[-1.3rem] after:z-[1] after:rounded-full">
            <Image src={bottom_icon_1} alt="Icon 1" />
          </Reveal>

          <Reveal customClassname="lg:grid hidden absolute grid place-items-center bottom-[30%] left-[25%] after:bg-[linear-gradient(180deg,#009bff_0%,rgba(97,193,255,0)_100%)] after:opacity-[0.15] after:content-[''] after:absolute after:animate-pulse after:top-[-1.3rem] after:left-[-1.3rem] after:right-[-1.3rem] after:bottom-[-1.3rem] after:z-[1] after:rounded-full">
            <Image src={bottom_icon_2} alt="Icon 2" />
          </Reveal>

          <div className="lg:w-[50%] w-full"></div>

          <Reveal customClassname="lg:w-[50%] w-full relative">
            <Image
              src={circles}
              alt="Circles"
              className="absolute top-[-5%] left-[30%] z-[0] sm:w-[650px] w-[500px] max-w-none"
            />
            <Image
              src={img}
              alt="Dịch vụ thiết kế website doanh nghiệp chuyên nghiệp"
              className="md:w-[846px] sm:w-[750px] w-[500px] max-w-none relative z-[1]"
              width={846}
              height={518}
            />

            <Reveal customClassname="lg:grid hidden absolute grid place-items-center top-[15%] left-[24%] after:bg-[linear-gradient(180deg,#009bff_0%,rgba(97,193,255,0)_100%)] after:opacity-[0.15] after:content-[''] after:absolute after:animate-pulse after:top-[-1.3rem] after:left-[-1.3rem] after:right-[-1.3rem] after:bottom-[-1.3rem] after:z-[1] after:rounded-full">
              <Image src={bottom_icon_3} alt="Icon 3" />
            </Reveal>

            <Reveal customClassname="lg:grid hidden absolute grid place-items-center top-[-7%] right-[-27%] after:bg-[linear-gradient(180deg,#009bff_0%,rgba(97,193,255,0)_100%)] after:opacity-[0.15] after:content-[''] after:absolute after:animate-pulse after:top-[-1.3rem] after:left-[-1.3rem] after:right-[-1.3rem] after:bottom-[-1.3rem] after:z-[1] after:rounded-full">
              <Image src={bottom_icon_4} alt="Icon 4" />
            </Reveal>
          </Reveal>
        </div>
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
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
              width={slide.width}
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
  width?: number;
}

const SwiperCard: FC<SwiperCardProps> = ({ heading, description, icon, width = 48 }) => {
  return (
    <div className="cursor-pointer text-white border bg-[rgba(255,255,255,0.15)] h-[400px] backdrop-blur-[2px] box-border my-0 p-8 rounded-[1.042rem] border-solid border-[rgba(255,255,255,0.4)]">
      <div className="h-16" style={{ width }}>
        <Image src={icon} alt={heading} className="h-auto w-full" />
      </div>
      <h3 className="text-xl font-bold mb-4">{heading}</h3>
      <p className="text-sm leading-7">{description}</p>
    </div>
  );
};

export default Section2;
