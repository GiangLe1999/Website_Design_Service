'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import Image, { StaticImageData } from 'next/image';
import bg from '@/public/interior-page/section-2-bg.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import img1 from '@/public/interior-page/reason-1.png';

const swiperData = [
  {
    reason: 'reason_1',
    number: '2+',
  },
  {
    reason: 'reason_2',
    number: '100+',
  },
  {
    reason: 'reason_3',
    number: '15+',
  },
  {
    reason: 'reason_4',
    img: img1,
  },
  {
    reason: 'reason_5',
    img: img1,
  },
  {
    reason: 'reason_6',
    img: img1,
  },
  {
    reason: 'reason_7',
    img: img1,
  },
  {
    reason: 'reason_8',
    img: img1,
  },
  {
    reason: 'reason_9',
    img: img1,
  },
];

interface Props {}

const Section8: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_8');

  return (
    <section
      id={t('id')}
      className="md:pt-[100px] pt-[50px] relative bg-gradient-to-b from-[#FFF3DE] to-[#fff6e6]"
    >
      <Reveal customClassname="absolute top-[-200px] md:top-[-280px] left-0 right-0 w-full aspect-[1.9]">
        <Image src={bg} alt="section_bg" sizes="100vw" fill className="object-cover" />
      </Reveal>

      <ContentContainer customClassName="relative z-[10] max-w-[900px]">
        <Reveal>
          <CustomHeading2 t={t} type_4 customClassname="text-center" />
        </Reveal>

        <div className="text-center text-sm leading-7 md:text-base md:leading-8 xl:text-lg xl:leading-9">
          <Reveal>
            <p>{t('description')}</p>
          </Reveal>
        </div>
      </ContentContainer>

      <ContentContainer>
        <SectionSwiper />
      </ContentContainer>
    </section>
  );
};

const SectionSwiper = () => {
  const [_, setInit] = useState<boolean>();
  const t = useTranslations('interior_page.section_8');
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={30}
      slidesPerView={2}
      slidesPerGroup={1}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        660: {
          slidesPerView: 2,
        },
        830: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay]}
      onInit={() => setInit(true)}
      className="relative mt-10"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard img={slide?.img} title={t(slide.reason)} number={slide?.number} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface SwiperCardProps {
  img: StaticImageData | undefined;
  title: string;
  number: string | undefined;
}

const SwiperCard: FC<SwiperCardProps> = ({ img, title, number }) => {
  return (
    <Reveal customClassname="shadow-md h-[260px] p-[25px] @apply bg-[linear-gradient(to_top,rgba(255,250,236,0.4)_0,#fffbf3_100%)] text-center h-[calc(100%_-_50px)] mx-[5px] p-[25px] rounded-[32px]">
      <div className="min-h-[100px]">
        {img ? (
          <Image src={img} alt={title} className="mx-auto" />
        ) : (
          <p className="mx-auto text-[70px] leading-[normal] bg-clip-text text-transparent bg-[linear-gradient(to_right,#b98647_0,#875220_10%,#d4a75a_50%,#daaa62_0,#a16d34_100%)] font-bold">
            {number}
          </p>
        )}
      </div>

      <p className="text-[#666666] leading-7">{title}</p>
    </Reveal>
  );
};

export default Section8;
