'use client';

import { FC, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslations } from 'next-intl';
import { Autoplay, Navigation } from 'swiper/modules';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import CustomHeading2 from '../custom-heading-2';

interface Props {}

const Section6: FC<Props> = (): JSX.Element => {
  const [_, setInit] = useState<boolean>();

  const t = useTranslations('home_page.section_6');
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperData = useMemo(
    () => [
      t('slide_1'),
      t('slide_2'),
      t('slide_3'),
      t('slide_4'),
      t('slide_5'),
      t('slide_6'),
      t('slide_7'),
      t('slide_8'),
      t('slide_9'),
    ],
    [t]
  );

  return (
    <div className="bg-gradient-to-b from-[#fcf9f8] to-[#fff9f8] flex xl:flex-row flex-col gap-x-16 gap-y-10 items-center relative z-[1] xl:pt-0 pt-0 md:pt-[100px] pb-[150px]">
      <Swiper
        direction="horizontal"
        ref={swiperRef}
        className="home-swiper xl:order-1 order-2"
        spaceBetween={20}
        slidesPerView={2.3}
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
            slidesPerView: 1.5,
          },
          641: {
            slidesPerView: 2.5,
          },
          900: {
            slidesPerView: 3,
          },
          1050: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 2.3,
          },
        }}
        modules={[Autoplay, Navigation]}
        onInit={() => setInit(true)}
      >
        {swiperData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SwiperCard number={'0' + (index + 1)} content={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home-swiper-heading text-primary font-semibold xl:order-2 order-1">
        <CustomHeading2 t={t} type_1 customClassname="xl:text-left text-center xl:text-3xl" />
        <div className="flex items-center xl:justify-start justify-center gap-2 mt-4">
          <button
            type="button"
            ref={prevRef}
            className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full"
            aria-label="Previous slide"
          >
            <MoveLeftIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            ref={nextRef}
            className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full"
            aria-label="Next slide"
          >
            <MoveRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface SwiperCardProps {
  number: string;
  content: string;
}

const SwiperCard: FC<SwiperCardProps> = ({ number, content }) => {
  return (
    <div className="xl:p-[50px] p-10 bg-[#ffffff] shadow-[0_1px_14px_rgba(0,0,0,0.1)] h-full cursor-pointer transition duration-500 rounded-[20px] hover:bg-[#fff9f8]">
      <p className="font-bold text-[60px] leading-none mb-4">
        <span className="text-primary">{number}</span>
        <span className="text-secondary">.</span>
      </p>
      <p className="leading-8">{content}</p>
    </div>
  );
};

export default Section6;
