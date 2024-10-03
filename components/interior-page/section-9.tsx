'use client';

import { useTranslations } from 'next-intl';
import { FC, useState, useCallback, useMemo, memo, useEffect } from 'react';
import Reveal from '../reveal';
import Image, { StaticImageData } from 'next/image';
import ContentContainer from '../content-container';
import CustomHeading2 from '../custom-heading-2';
import img1 from '@/public/interior-page/mau-website-noi-that-1.webp';
import img2 from '@/public/interior-page/mau-website-noi-that-2.webp';
import img3 from '@/public/interior-page/mau-website-noi-that-3.webp';
import img4 from '@/public/interior-page/mau-website-noi-that-4.webp';
import img5 from '@/public/interior-page/mau-website-noi-that-5.webp';
import img6 from '@/public/interior-page/mau-website-noi-that-6.webp';
import img7 from '@/public/interior-page/mau-website-noi-that-7.webp';
import img8 from '@/public/interior-page/mau-website-noi-that-8.webp';
import img9 from '@/public/interior-page/mau-website-noi-that-9.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import classnames from 'classnames';

const swiperData = [
  {
    image: img1,
    name: 'slide_1',
  },
  {
    image: img2,
    name: 'slide_2',
  },
  {
    image: img3,
    name: 'slide_3',
  },
  {
    image: img4,
    name: 'slide_4',
  },
  {
    image: img5,
    name: 'slide_5',
  },
  {
    image: img6,
    name: 'slide_6',
  },
  {
    image: img7,
    name: 'slide_7',
  },
  {
    image: img8,
    name: 'slide_8',
  },
  {
    image: img9,
    name: 'slide_9',
  },
];

interface Props {}

const Section9: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_9');

  return (
    <section
      id={t('id')}
      className="text-white text-center pt-[150px] bg-gradient-to-b from-[#FFF6E6] to-[#ffffff]"
    >
      <ContentContainer customClassName="mb-10 max-w-[900px]">
        <Reveal>
          <h2 className="section-heading-2 font-bold mb-5 text-[#666666]">
            {t.rich('heading', {
              bold: (chunks: any) => <span className="text-[#8D5520]">{chunks}</span>,
            })}
          </h2>
        </Reveal>
      </ContentContainer>

      <SectionSwiper t={t} />
    </section>
  );
};

interface SwiperProps {
  t: any;
}

const SectionSwiper: FC<SwiperProps> = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback(
    (swiper: any) => {
      if (swiper.realIndex !== activeIndex) {
        setActiveIndex(swiper.realIndex);
      }
    },
    [activeIndex]
  );

  const calculateRelativeIndex = (index: number, activeIndex: number, length: number) => {
    return (index - activeIndex + length) % length;
  };

  const isMiddle = (index: number) => {
    return calculateRelativeIndex(index, activeIndex, 9) === 1;
  };

  return (
    <Swiper
      onSlideChange={handleSlideChange}
      direction="horizontal"
      spaceBetween={12}
      slidesPerView={3}
      slidesPerGroup={1}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className="relative md:!pt-[80px] pt-0"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index} className={isMiddle(index) ? 'z-[10]' : 'z-[0]'}>
          <SwiperCard name={t(slide.name)} image={slide.image} isMiddle={isMiddle(index)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface SwiperCardProps {
  name: string;
  image: StaticImageData;
  isMiddle: boolean;
}

const SwiperCard: FC<SwiperCardProps> = memo(function SwiperCard({ name, image, isMiddle }) {
  return (
    <Reveal>
      <Image
        src={image}
        alt={name}
        className={classnames(
          'sm:mx-0 mx-auto w-full h-auto shadow-[0px_10px_63px_rgb(0_0_0_/_0%)] relative',
          isMiddle ? 'md:scale-[130%] md:mt-[-30px] mt-0 transition-all duration-500' : ''
        )}
      />
      {isMiddle && (
        <p className="text-[#8D5520] lg:text-2xl md:text-lg text-base lg:leading-10 md:leading-8 leading-7 font-extrabold mt-20">
          {name}
        </p>
      )}
    </Reveal>
  );
});

export default Section9;
