'use client';

import { useTranslations } from 'next-intl';
import { FC, useState, useCallback, useMemo, memo, useEffect } from 'react';
import dash from '@/public/real-estate-page/dash-shape.png';
import Reveal from '../reveal';
import Image, { StaticImageData } from 'next/image';
import ContentContainer from '../content-container';
import CustomHeading2 from '../custom-heading-2';
import type_1_1 from '@/public/real-estate-page/website-gioi-thieu-du-an-bds-shantira.webp';
import type_1_2 from '@/public/real-estate-page/website-gioi-thieu-du-an-bds-mariscity.webp';
import type_1_3 from '@/public/real-estate-page/website-gioi-thieu-du-an-bds-emerald.webp';
import type_1_4 from '@/public/real-estate-page/website-gioi-thieu-du-an-bds-one-river.webp';
import type_1_5 from '@/public/real-estate-page/website-gioi-thieu-du-an-bds-daqua.webp';
import type_2_1 from '@/public/real-estate-page/website-chu-dau-tu-bds-dat-xanh-da-nang.webp';
import type_2_2 from '@/public/real-estate-page/website-chu-dau-tu-bds-tap-doan-van-xuan.webp';
import type_2_3 from '@/public/real-estate-page/website-chu-dau-tu-bds-tap-doan-khoi-vy.webp';
import type_2_4 from '@/public/real-estate-page/website-chu-dau-tu-bds-phu-cuong-kien-giang.webp';
import type_2_5 from '@/public/real-estate-page/website-chu-dau-tu-bds-danh-khoi.webp';
import type_2_6 from '@/public/real-estate-page/website-chu-dau-tu-bds-kien-a.webp';
import type_3_1 from '@/public/real-estate-page/website-dang-tin-bds-nam-long.webp';
import type_3_2 from '@/public/real-estate-page/website-dang-tin-bds-duy-realty.webp';
import type_3_3 from '@/public/real-estate-page/website-dang-tin-bds-bg-sai-gon.webp';
import type_3_4 from '@/public/real-estate-page/website-dang-tin-bds-thanh-dat.webp';
import type_3_5 from '@/public/real-estate-page/website-dang-tin-bds-nextlevel.webp';
import type_3_6 from '@/public/real-estate-page/website-dang-tin-bds-savills.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import classnames from 'classnames';

const swiper_1 = [
  {
    image: type_1_1,
    name: 'type_1.block_1',
  },
  {
    image: type_1_2,
    name: 'type_1.block_2',
  },
  {
    image: type_1_3,
    name: 'type_1.block_3',
  },
  {
    image: type_1_4,
    name: 'type_1.block_4',
  },
  {
    image: type_1_5,
    name: 'type_1.block_5',
  },
  {
    image: type_1_3,
    name: 'type_1.block_3',
  },
];

const swiper_2 = [
  {
    image: type_2_1,
    name: 'type_2.block_1',
  },
  {
    image: type_2_2,
    name: 'type_2.block_2',
  },
  {
    image: type_2_3,
    name: 'type_2.block_3',
  },
  {
    image: type_2_4,
    name: 'type_2.block_4',
  },
  {
    image: type_2_5,
    name: 'type_2.block_5',
  },
  {
    image: type_2_6,
    name: 'type_2.block_6',
  },
];

const swiper_3 = [
  {
    image: type_3_1,
    name: 'type_3.block_1',
  },
  {
    image: type_3_2,
    name: 'type_3.block_2',
  },
  {
    image: type_3_3,
    name: 'type_3.block_3',
  },
  {
    image: type_3_4,
    name: 'type_3.block_4',
  },
  {
    image: type_3_5,
    name: 'type_3.block_5',
  },
  {
    image: type_3_6,
    name: 'type_3.block_6',
  },
];

interface Props {}

const Section6: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_6');
  const [activeSwiperIndex, setActiveSwiperIndex] = useState(0);

  const activeSwiper = useMemo(() => {
    switch (activeSwiperIndex) {
      case 0:
        return swiper_1;
      case 1:
        return swiper_2;
      case 2:
        return swiper_3;
      default:
        return swiper_1;
    }
  }, [activeSwiperIndex]);

  return (
    <section
      id={t('id')}
      className="text-white text-center pb-[150px] bg-gradient-to-b from-[#025c81] to-[#025c81]"
    >
      <Reveal customClassname="mb-12">
        <Image
          src={dash}
          alt="Section 6 dash"
          className="mx-auto relative brightness-0 invert-[1]"
        />
      </Reveal>

      <ContentContainer customClassName="mb-10">
        <Reveal>
          <p className="bds-sub-heading !text-white">{t('sub_heading')}</p>
        </Reveal>
        <CustomHeading2 t={t} type_3 />
        <Reveal>
          <p className="text-sm leading-7 md:text-lg md:leading-9 xl:text-xl xl:leading-10">
            {t.rich('description', {
              bold: (chunks: any) => <strong>{chunks}</strong>,
            })}
          </p>
        </Reveal>

        <Reveal customClassname="grid grid-cols-3 md:gap-x-6 gap-x-3 lg:text-lg md:text-base sm:text-sm text-xs mt-8">
          {Array.from(Array(3).keys()).map((i) => (
            <button
              key={i}
              onClick={() => setActiveSwiperIndex(i)}
              className={classnames(
                activeSwiperIndex === i
                  ? 'bg-[#12a5c2c8]'
                  : 'bg-[#006f8bc9] hover:bg-[#e5e5e52d] hover:scale-105',
                'uppercase py-3 px-4 rounded-[25px] font-semibold transition duration-500'
              )}
            >
              {t(`type_${i + 1}.heading`)}
            </button>
          ))}
        </Reveal>
      </ContentContainer>

      <SectionSwiper activeSwiper={activeSwiper} t={t} />
    </section>
  );
};

interface SwiperProps {
  activeSwiper: { image: StaticImageData; name: string }[];
  t: any;
}

const SectionSwiper: FC<SwiperProps> = ({ activeSwiper, t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAbove1000px, setIsAbove1000px] = useState(false);

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
    if (isAbove1000px) {
      return calculateRelativeIndex(index, activeIndex, activeSwiper.length) === 2;
    } else {
      return calculateRelativeIndex(index, activeIndex, activeSwiper.length) === 1;
    }
  };

  const isLeftOrRightMost = (index: number) => {
    const relativeIndex = calculateRelativeIndex(index, activeIndex, activeSwiper.length);
    if (isAbove1000px) {
      return relativeIndex === 0 || relativeIndex === 4;
    } else {
      return relativeIndex === 0 || relativeIndex === 2;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsAbove1000px(window.innerWidth >= 1000);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      onSlideChange={handleSlideChange}
      direction="horizontal"
      spaceBetween={12}
      slidesPerView={3}
      slidesPerGroup={1}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 5,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="relative !pt-[80px]"
    >
      {activeSwiper.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard
            name={t(slide.name)}
            image={slide.image}
            isMiddle={isMiddle(index)}
            isLeftOrRightMost={isLeftOrRightMost(index)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface SwiperCardProps {
  name: string;
  image: StaticImageData;
  isMiddle: boolean;
  isLeftOrRightMost: boolean;
}

const SwiperCard: FC<SwiperCardProps> = memo(function SwiperCard({
  name,
  image,
  isMiddle,
  isLeftOrRightMost,
}) {
  return (
    <Reveal>
      <Image
        src={image}
        alt={name}
        className={classnames(
          'sm:mx-0 mx-auto w-full h-auto rounded-[20px] shadow-[0px_10px_63px_rgb(0_0_0_/_0%)] relative',
          isMiddle ? 'scale-[120%] transition-all duration-500 z-[1]' : 'z-[-1]',
          isLeftOrRightMost ? 'opacity-40 transition duration-500' : 'opacity-100'
        )}
      />
      {isMiddle && (
        <p className="text-white lg:text-2xl md:text-lg text-base lg:leading-10 md:leading-8 leading-7 font-extrabold md:mt-24 mt-16">
          {name}
        </p>
      )}
    </Reveal>
  );
});

export default Section6;
