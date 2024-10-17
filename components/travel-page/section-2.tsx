'use client';

import { useTranslations } from 'next-intl';
import React, { FC, ReactNode, useRef, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import Image, { StaticImageData } from 'next/image';
import img1 from '@/public/travel-page/section-2-img-1.png';
import img2 from '@/public/travel-page/section-2-img-2.png';
import bg_after from '@/public/travel-page/section-2-bg-after.png';
import CustomHeading2 from '../custom-heading-2';
import { Link } from '@/app/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules';
import icon1 from '@/public/travel-page/section-2-icon-1.png';
import icon2 from '@/public/travel-page/section-2-icon-2.png';
import icon3 from '@/public/travel-page/section-2-icon-3.png';
import icon4 from '@/public/travel-page/section-2-icon-4.png';
import icon5 from '@/public/travel-page/section-2-icon-5.png';
import icon6 from '@/public/travel-page/section-2-icon-6.png';
import icon7 from '@/public/travel-page/section-2-icon-7.png';
import icon8 from '@/public/travel-page/section-2-icon-8.png';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import SpecialConsultButtton from '../special-consult-button';
import SpecialCallButton from '../special-call-button';

const swiperData = [
  {
    icon: icon1,
    heading: 'block_1.heading',
    description: 'block_1.description',
  },
  {
    icon: icon2,
    heading: 'block_2.heading',
    description: 'block_2.description',
  },
  {
    icon: icon3,
    heading: 'block_3.heading',
    description: 'block_3.description',
  },
  {
    icon: icon4,
    heading: 'block_4.heading',
    description: 'block_4.description',
  },
  {
    icon: icon5,
    heading: 'block_5.heading',
    description: 'block_5.description',
  },
  {
    icon: icon6,
    heading: 'block_6.heading',
    description: 'block_6.description',
  },
  {
    icon: icon7,
    heading: 'block_7.heading',
    description: 'block_7.description',
  },
  {
    icon: icon8,
    heading: 'block_8.heading',
    description: 'block_8.description',
  },
];

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_2');

  return (
    <section id={t('id')} className="sm:mt-[100px] mt-[70px]">
      <ContentContainer>
        <Reveal>
          <CustomHeading2 t={t} type_6 customClassname="text-center" />
          <p className="text-sm leading-7 md:text-lg md:leading-9 text-center mb-10">
            {t.rich('description', {
              bold: (chunks: any) => <strong>{chunks}</strong>,
              a: (chunks: any) => (
                <Link href="/" className="font-bold">
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </Reveal>

        <div className="lg:flex items-center gap-10">
          <div className="lg:hidden block relative aspect-[1.78] mb-16">
            <Image
              src={img1}
              alt="Web du lịch mobile"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="lg:w-[30%] w-full">
            <SectionSwiper />
          </div>

          <div className="lg:block hidden relative flex-1 aspect-[1.78]">
            <Image
              src={img1}
              alt="Web du lịch desktop"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </ContentContainer>

      <div className="mt-12 bg-[url('/travel-page/section-2-bg.jpeg')] bg-no-repeat bg-center bg-cover relative">
        <ContentContainer>
          <Reveal customClassname="relative aspect-[2.03] z-[1]">
            <Image
              src={img2}
              alt="Thiết kế website du lịch chuyên nghiệp"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>
        </ContentContainer>

        <div className="absolute bottom-0 inset-x-0 aspect-[12] z-0">
          <Image
            src={bg_after}
            alt="Section 2 background after"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <ContentContainer customClassName="sm:mt-16 mt-12">
        <Reveal customClassname="flex sm:flex-row flex-col items-center justify-center gap-[14px]">
          <SpecialConsultButtton />
          <SpecialCallButton />
        </Reveal>
      </ContentContainer>
    </section>
  );
};

const SectionSwiper = () => {
  const [_, setInit] = useState<boolean>();
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const t = useTranslations('travel_page.section_2');
  return (
    <Swiper
      direction="horizontal"
      ref={swiperRef}
      spaceBetween={0}
      slidesPerView={1}
      slidesPerGroup={1}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      speed={1000}
      loop={true}
      modules={[Navigation, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      onInit={() => setInit(true)}
      className="relative !pt-[80px]"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard
            icon={slide.icon}
            heading={t(slide.heading)}
            description={t.rich(slide.description, {
              bold: (chunks: any) => <strong>{chunks}</strong>,
              a1: (chunks: any) => (
                <Link href="/" className="font-bold">
                  {chunks}
                </Link>
              ),
              a2: (chunks: any) => (
                <Link href="/" className="font-bold">
                  {chunks}
                </Link>
              ),
            })}
          />
        </SwiperSlide>
      ))}

      <button
        type="button"
        ref={prevRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute lg:left-0 left-1/2 lg:translate-x-0 -translate-x-[130%] top-[0px] z-[10]"
        aria-label="Previous slide"
      >
        <Reveal>
          <MoveLeftIcon className="w-4 h-4" />
        </Reveal>
      </button>

      <button
        type="button"
        ref={nextRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute lg:left-[45px] left-[calc(50%-45px)] lg:translate-x-0 translate-x-[130%] top-[0px] z-[10]"
        aria-label="Next slide"
      >
        <Reveal>
          <MoveRightIcon className="w-4 h-4" />
        </Reveal>
      </button>
    </Swiper>
  );
};

interface SwiperCardProps {
  icon: StaticImageData;
  heading: string;
  description: ReactNode;
}

const SwiperCard: FC<SwiperCardProps> = ({ icon, heading, description }) => {
  return (
    <div>
      <div className="relative w-[107px] h-[93px] mb-10 bg-[url('/travel-page/bg-style.png')] bg-no-repeat bg-center grid place-items-center sm:mx-0 mx-auto">
        <Image src={icon} alt={heading} />
      </div>

      <p className="font-bold mb-4 text-2xl leading-[1.3] sm:text-left text-center">{heading}</p>
      <p className="text-sm leading-7 text-[#45455e] sm:text-left text-center">{description}</p>
    </div>
  );
};

export default Section2;
