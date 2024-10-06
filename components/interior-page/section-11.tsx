'use client';

import { useTranslations } from 'next-intl';
import { FC, useRef, useState } from 'react';
import ContentContainer from '../content-container';
import CustomHeading2 from '../custom-heading-2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import customer_1 from '@/public/home-page/customer-1.webp';
import customer_2 from '@/public/home-page/customer-2.webp';
import customer_3 from '@/public/home-page/customer-6.webp';
import customer_4 from '@/public/home-page/customer-4.webp';
import customer_5 from '@/public/home-page/customer-5.webp';
import customer_6 from '@/public/home-page/customer-3.webp';

import customer_logo_1 from '@/public/interior-page/customer-logo-1.png';
import customer_logo_2 from '@/public/interior-page/customer-logo-2.png';
import customer_logo_3 from '@/public/interior-page/customer-logo-3.png';
import customer_logo_4 from '@/public/interior-page/customer-logo-4.png';
import customer_logo_5 from '@/public/interior-page/customer-logo-5.png';
import customer_logo_6 from '@/public/interior-page/customer-logo-6.png';
import customer_logo_7 from '@/public/interior-page/customer-logo-7.png';
import customer_logo_8 from '@/public/interior-page/customer-logo-8.png';
import customer_logo_9 from '@/public/interior-page/customer-logo-9.webp';
import Reveal from '../reveal';

interface Props {}

const swiperData = [
  {
    logo: customer_1,
    content: 'feedback_1.content',
    name: 'feedback_1.name',
    website: 'feedback_1.website',
  },
  {
    logo: customer_2,
    content: 'feedback_2.content',
    name: 'feedback_2.name',
    website: 'feedback_2.website',
  },
  {
    logo: customer_3,
    content: 'feedback_3.content',
    name: 'feedback_3.name',
    website: 'feedback_3.website',
  },
  {
    logo: customer_4,
    content: 'feedback_4.content',
    name: 'feedback_4.name',
    website: 'feedback_4.website',
  },
  {
    logo: customer_5,
    content: 'feedback_5.content',
    name: 'feedback_5.name',
    website: 'feedback_5.website',
  },
  {
    logo: customer_6,
    content: 'feedback_6.content',
    name: 'feedback_6.name',
    website: 'feedback_6.website',
  },
];

const Section11: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_11');

  return (
    <section id={t('id')} className="relative pt-[80px] border-t md:pb-[300px] pb-[100px]">
      <ContentContainer maxWidth="max-w-[900px]">
        <Reveal>
          <p className="bds-sub-heading">{t('sub_heading')}</p>
        </Reveal>
        <Reveal>
          <h2 className="section-heading-2 font-bold mb-5 text-[#A57038] text-center">
            {t('heading')}
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-center">
            {t.rich('description', {
              bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
            })}
          </p>
        </Reveal>
      </ContentContainer>

      <ContentContainer customClassName="relative">
        <ContentContainer maxWidth="max-w-[900px]">
          <SectionSwiper />
        </ContentContainer>

        <Reveal customClassname="absolute -left-[10%] -translate-x-full -top-[20%] md:block hidden">
          <Image src={customer_logo_1} alt="Customer logo 1" width={170} height={170} />
        </Reveal>

        <Reveal customClassname="absolute left-0 -translate-x-1/3 top-20 md:block hidden">
          <Image src={customer_logo_2} alt="Customer logo 2" width={160} height={160} />
        </Reveal>

        <Reveal customClassname="absolute left-0 -bottom-24 -translate-x-1/2 z-[3] md:block hidden">
          <Image src={customer_logo_3} alt="Customer logo 3" width={170} height={170} />
        </Reveal>

        <Reveal customClassname="absolute left-[15%] -bottom-52 -translate-x-1/2 z-[3] md:block hidden">
          <Image src={customer_logo_4} alt="Customer logo 4" width={170} height={170} />
        </Reveal>

        <Reveal customClassname="absolute left-1/2 -translate-x-full -bottom-48 z-[3] md:block hidden">
          <Image src={customer_logo_5} alt="Customer logo 5" width={170} height={170} />
        </Reveal>

        <Reveal customClassname="absolute right-[5%] -bottom-44 z-[3] md:block hidden">
          <Image src={customer_logo_6} alt="Customer logo 6" width={170} height={170} />
        </Reveal>

        <Reveal customClassname="absolute -right-[5%] -bottom-16 z-[3] md:block hidden">
          <Image src={customer_logo_7} alt="Customer logo 7" width={170} height={170} />
        </Reveal>

        <Reveal customClassname="absolute -right-[15%] -bottom-44 z-[3] md:block hidden">
          <Image src={customer_logo_8} alt="Customer logo 8" width={170} height={170} />
        </Reveal>

        <Reveal customClassname="absolute -right-[10%] top-0 z-[3] md:block hidden">
          <Image src={customer_logo_9} alt="Customer logo 9" width={170} height={170} />
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
  const t = useTranslations('interior_page.section_11');
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
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      onInit={() => setInit(true)}
      className="relative my-10 !pt-16 sm:!pb-5 !pb-12"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard
            content={t(slide.content)}
            name={t(slide.name)}
            website={t(slide.website)}
            logo={slide.logo}
          />
        </SwiperSlide>
      ))}

      <button
        type="button"
        ref={prevRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute left-1/2 -translate-x-[120%] top-auto -bottom-0 z-[10] sm:hidden"
        aria-label="Previous slide"
      >
        <MoveLeftIcon className="w-4 h-4" />
      </button>

      <button
        type="button"
        ref={nextRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute right-1/2 translate-x-[120%] top-auto -bottom-0 z-[10] sm:hidden"
        aria-label="Next slide"
      >
        <MoveRightIcon className="w-4 h-4" />
      </button>
    </Swiper>
  );
};

interface SwiperCardProps {
  content: string;
  name: string;
  website: string;
  logo: StaticImageData;
}

const SwiperCard: FC<SwiperCardProps> = ({ content, name, website, logo }) => {
  return (
    <div className="sm:mx-12 mx-4 relative bg-[#ffffff82] rounded-[30px] shadow-[0_1px_14px_rgba(0,0,0,0.1)] hover:bg-white group transition duration-500">
      <div className="bg-[#fff] group-hover:bg-white transition duration-500 shadow-[0_1px_14px_rgba(0,0,0,0.1)] absolute left-1/2 -translate-x-1/2 mt-[-60px] rounded-full w-[112px] aspect-square grid place-items-center">
        <Image src={logo} alt={name} className="rounded-full" />
      </div>

      <Reveal>
        <div className="max-w-[85%] pt-[80px] pb-[50px] mx-auto">
          <p className="text-sm leading-6 text-center mb-4">{content}</p>
          <p className="text-lg font-bold text-[#A57038] mb-1 text-center">{name}</p>
          <p className="text-center text-sm font-semibold">{website}</p>
        </div>
      </Reveal>
    </div>
  );
};

export default Section11;
