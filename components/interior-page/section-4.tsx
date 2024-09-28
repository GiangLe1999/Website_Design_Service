'use client';

import { FC, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslations } from 'next-intl';
import { Autoplay, Navigation } from 'swiper/modules';
import Reveal from '../reveal';
import Image, { StaticImageData } from 'next/image';
import img1 from '@/public/interior-page/website-noi-that-1.webp';
import img2 from '@/public/interior-page/website-noi-that-2.webp';
import img3 from '@/public/interior-page/website-noi-that-3.webp';
import img4 from '@/public/interior-page/website-noi-that-4.webp';
import img5 from '@/public/interior-page/website-noi-that-5.webp';
import img6 from '@/public/interior-page/website-noi-that-6.webp';

interface Props {}

const Section4: FC<Props> = (): JSX.Element => {
  const t = useTranslations('interior_page.section_3');
  const swiperData = useMemo(
    () => [
      {
        img_1: { img: img1, title: t('img_title') + ' 1' },
        img_2: { img: img2, title: t('img_title') + ' 2' },
        img_3: { img: img3, title: t('img_title') + ' 3' },
      },
      {
        img_1: { img: img5, title: t('img_title') + ' 4' },
        img_2: { img: img6, title: t('img_title') + ' 5' },
        img_3: { img: img4, title: t('img_title') + ' 6' },
      },
    ],
    [t]
  );

  return (
    <div className="mt-[50px]">
      <Swiper
        direction="horizontal"
        className=""
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        {swiperData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SwiperCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface SwiperCardProps {
  img_1: { img: StaticImageData; title: string };
  img_2: { img: StaticImageData; title: string };
  img_3: { img: StaticImageData; title: string };
}

const SwiperCard: FC<SwiperCardProps> = ({ img_1, img_2, img_3 }) => {
  return (
    <Reveal customClassname="flex w-full gap-[2px]">
      <div className="w-[70%] aspect-[1.5] relative h-full">
        <Image
          src={img_1.img}
          alt="section-6-1"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#daaa60] to-[#8d5520] z-[10] opacity-0 hover:opacity-90 transition duration-500 cursor-pointer">
          <p className="absolute top-10 left-1/2 -translate-x-1/2 font-bold text-white text-2xl">
            {img_1.title}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-[2px]">
        <div className="w-full aspect-[1.5] relative">
          <Image
            src={img_2.img}
            alt="section-6-1"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#daaa60] to-[#8d5520] z-[10] opacity-0 hover:opacity-90 transition duration-500 cursor-pointer">
            <p className="absolute top-4 left-1/2 -translate-x-1/2 font-bold text-white text-xl text-center w-full">
              {img_2.title}
            </p>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            src={img_3.img}
            alt="section-6-1"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#daaa60] to-[#8d5520] z-[10] opacity-0 hover:opacity-90 transition duration-500 cursor-pointer">
            <p className="absolute top-4 left-1/2 -translate-x-1/2 font-bold text-white text-xl text-center w-full">
              {img_3.title}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Section4;
