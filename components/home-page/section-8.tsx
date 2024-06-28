'use client';

import { useTranslations } from 'next-intl';
import { FC, useRef, useState } from 'react';
import ContentContainer from '../content-container';
import Image, { StaticImageData } from 'next/image';
import MockImg from '@/public/home-page/nen-tang-thiet-ke-website-worpress-nextjs.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import reason1 from '@/public/home-page/reason-1.png';
import reason2 from '@/public/home-page/reason-2.png';
import reason3 from '@/public/home-page/reason-3.png';
import reason4 from '@/public/home-page/reason-4.png';
import reason5 from '@/public/home-page/reason-5.png';
import reason6 from '@/public/home-page/reason-6.png';
import reason7 from '@/public/home-page/reason-7.png';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import CustomHeading2 from '../custom-heading-2';

const swiperData = [
  {
    icon: reason1,
    heading: 'answer_1.heading',
    description: 'answer_1.description',
  },
  {
    icon: reason2,
    heading: 'answer_2.heading',
    description: 'answer_2.description',
  },
  {
    icon: reason3,
    heading: 'answer_3.heading',
    description: 'answer_3.description',
  },
  {
    icon: reason4,
    heading: 'answer_4.heading',
    description: 'answer_4.description',
  },
  {
    icon: reason5,
    heading: 'answer_5.heading',
    description: 'answer_5.description',
  },
  {
    icon: reason6,
    heading: 'answer_6.heading',
    description: 'answer_6.description',
  },
  {
    icon: reason7,
    heading: 'answer_7.heading',
    description: 'answer_7.description',
  },
];

interface Props {}

const Section8: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_8');
  const t_id = useTranslations('home_page.section_ids');
  return (
    <section
      id={t_id('website_framework')}
      className="bg-gradient-to-b from-[#fcf5e4] to-[#f4f1f1] xl:pt-0 pt-[100px] pb-[120px]"
    >
      <ContentContainer maxWidth="lg:max-w-[1200px] max-w-[900px]">
        <div className="flex lg:flex-row flex-col gap-y-16 items-center lg:mb-[70px] mb-10">
          <div className="lg:w-1/2 w-full lg:order-1 order-2">
            <CustomHeading2 t={t} type_1 customClassname="lg:text-left text-center" />
            <div className="text-sm leading-7 mb-5 lg:text-left text-center">
              <p className="lg:mb-0 mb-5">
                {t.rich('paragraph_1', {
                  bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
              <p>{t('paragraph_2')}</p>
            </div>

            <p className="text-sm leading-7 xl:text-xl xl:leading-9 lg:text-left text-center">
              {t.rich('question', {
                bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
          </div>

          <div className="lg:w-1/2 w-full lg:order-2 order-1">
            <Image src={MockImg} alt={t('image_1')} className="lg:w-[1300px] w-full max-w-none" />
          </div>
        </div>

        <SectionSwiper />
      </ContentContainer>
    </section>
  );
};

const SectionSwiper = () => {
  const [_, setInit] = useState<boolean>();
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const t = useTranslations('home_page.section_8');
  return (
    <Swiper
      direction="horizontal"
      ref={swiperRef}
      spaceBetween={0}
      slidesPerView={3}
      slidesPerGroup={1}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay, Navigation]}
      onInit={() => setInit(true)}
      className="relative !pt-[80px]"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard
            icon={slide.icon}
            heading={t(slide.heading)}
            description={t(slide.description)}
          />
        </SwiperSlide>
      ))}

      <button
        type="button"
        ref={prevRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute lg:left-0 left-1/2 lg:translate-x-0 -translate-x-[130%] top-[0px] z-[10]"
      >
        <MoveLeftIcon className="w-4 h-4" />
      </button>

      <button
        type="button"
        ref={nextRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute lg:left-[45px] left-[calc(50%-45px)] lg:translate-x-0 translate-x-[130%] top-[0px] z-[10]"
      >
        <MoveRightIcon className="w-4 h-4" />
      </button>
    </Swiper>
  );
};

interface SwiperCardProps {
  icon: StaticImageData;
  heading: string;
  description: string;
}

const SwiperCard: FC<SwiperCardProps> = ({ icon, heading, description }) => {
  return (
    <div>
      <div className="relative h-[90px] mb-10 border-b">
        <Image src={icon} alt={heading} className="sm:mx-0 mx-auto" />
        <span className="w-[9px] h-[9px] bg-secondary rounded-full absolute sm:left-0 left-1/2 sm:translate-x-0 -translate-x-1/2 -bottom-[5px]"></span>
      </div>

      <div className="sm:pr-[50px] pr-0">
        <p className="text-primary font-bold mb-5 text-lg leading-[1.3] sm:text-left text-center">
          {heading}
        </p>

        <p className="text-sm leading-7 text-[#45455e] sm:text-left text-center">{description}</p>
      </div>
    </div>
  );
};

export default Section8;
