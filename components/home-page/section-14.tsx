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
import customer_3 from '@/public/home-page/customer-3.webp';
import customer_4 from '@/public/home-page/customer-4.webp';
import customer_5 from '@/public/home-page/customer-5.webp';
import customer_6 from '@/public/home-page/customer-6.webp';
import customer_logo_1 from '@/public/home-page/customer-logo-1.webp';
import customer_logo_2 from '@/public/home-page/customer-logo-2.webp';
import customer_logo_3 from '@/public/home-page/customer-logo-3.webp';
import customer_logo_4 from '@/public/home-page/customer-logo-4.webp';
import customer_logo_5 from '@/public/home-page/customer-logo-5.webp';
import customer_logo_6 from '@/public/home-page/customer-logo-6.webp';
import customer_logo_7 from '@/public/home-page/customer-logo-7.webp';
import customer_logo_8 from '@/public/home-page/customer-logo-8.webp';
import customer_logo_9 from '@/public/home-page/customer-logo-9.webp';
import footer_bg from '@/public/home-page/section-14-bottom-background.webp';

interface Props {}

const swiperData = [
  {
    logo: customer_1,
    content: 'feedback_1.content',
    name: 'feedback_1.name',
    type: 'feedback_1.type',
  },
  {
    logo: customer_2,
    content: 'feedback_2.content',
    name: 'feedback_2.name',
    type: 'feedback_2.type',
  },
  {
    logo: customer_3,
    content: 'feedback_3.content',
    name: 'feedback_3.name',
    type: 'feedback_3.type',
  },
  {
    logo: customer_4,
    content: 'feedback_4.content',
    name: 'feedback_4.name',
    type: 'feedback_4.type',
  },
  {
    logo: customer_5,
    content: 'feedback_5.content',
    name: 'feedback_5.name',
    type: 'feedback_5.type',
  },
  {
    logo: customer_6,
    content: 'feedback_6.content',
    name: 'feedback_6.name',
    type: 'feedback_6.type',
  },
];

const Section14: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_14');
  const t_id = useTranslations('home_page.section_ids');

  return (
    <section
      id={t_id('testimonials')}
      className="relative bg-gradient-to-b from-[#f7f2ed] to-[#faf6e4] pt-[100px] md:pb-[300px] pb-1"
    >
      <div className="absolute hidden xl:block left-0 right-0 bottom-0 z-[1]">
        <Image src={footer_bg} alt="Section 14 bottom background" />
      </div>
      <ContentContainer maxWidth="max-w-[700px]">
        <CustomHeading2 t={t} type_1 customClassname="text-center" />
        <p className="text-center">
          {t.rich('description', {
            bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
          })}
        </p>
      </ContentContainer>

      <ContentContainer customClassName="relative">
        <ContentContainer maxWidth="max-w-[900px]">
          <SectionSwiper />
        </ContentContainer>

        <Image
          src={customer_logo_1}
          alt="Customer logo 1"
          className="absolute left-0 -translate-x-full -translate-y-1/2 top-0 md:block hidden"
          width={170}
          height={170}
        />

        <Image
          src={customer_logo_2}
          alt="Customer logo 2"
          className="absolute left-0 -translate-x-1/3 top-20 md:block hidden"
          width={160}
          height={160}
        />

        <Image
          src={customer_logo_3}
          alt="Customer logo 3"
          className="absolute left-0 -bottom-24 -translate-x-1/2 z-[3] md:block hidden"
          width={170}
          height={170}
        />

        <Image
          src={customer_logo_4}
          alt="Customer logo 4"
          className="absolute left-[15%] -bottom-52 -translate-x-1/2 z-[3] md:block hidden"
          width={170}
          height={170}
        />

        <Image
          src={customer_logo_5}
          alt="Customer logo 5"
          className="absolute left-1/2 -translate-x-full -bottom-48 z-[3] md:block hidden"
          width={170}
          height={170}
        />

        <Image
          src={customer_logo_6}
          alt="Customer logo 6"
          className="absolute right-[5%] -bottom-44 z-[3] md:block hidden"
          width={170}
          height={170}
        />

        <Image
          src={customer_logo_7}
          alt="Customer logo 7"
          className="absolute -right-[5%] -bottom-16 z-[3] md:block hidden"
          width={170}
          height={170}
        />

        <Image
          src={customer_logo_8}
          alt="Customer logo 8"
          className="absolute -right-[15%] -bottom-44 z-[3] md:block hidden"
          width={170}
          height={170}
        />

        <Image
          src={customer_logo_9}
          alt="Customer logo 9"
          className="absolute -right-[10%] top-0 z-[3] md:block hidden"
          width={170}
          height={170}
        />
      </ContentContainer>
    </section>
  );
};

const SectionSwiper = () => {
  const [_, setInit] = useState<boolean>();
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const t = useTranslations('home_page.section_14');
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
            type={t(slide.type)}
            logo={slide.logo}
          />
        </SwiperSlide>
      ))}

      <button
        type="button"
        ref={prevRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute sm:left-0 left-1/2 -translate-x-[120%] sm:top-[48%] top-auto -bottom-0 sm:bottom-auto z-[10]"
      >
        <MoveLeftIcon className="w-4 h-4" />
      </button>

      <button
        type="button"
        ref={nextRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute sm:right-0 right-1/2 translate-x-[120%] sm:top-[48%] top-auto -bottom-0 sm:bottom-auto z-[10]"
      >
        <MoveRightIcon className="w-4 h-4" />
      </button>
    </Swiper>
  );
};

interface SwiperCardProps {
  content: string;
  name: string;
  type: string;
  logo: StaticImageData;
}

const SwiperCard: FC<SwiperCardProps> = ({ content, name, type, logo }) => {
  return (
    <div className="sm:mx-12 mx-4 relative bg-[#ffffff82] rounded-[30px] shadow-[0_1px_14px_rgba(0,0,0,0.1)] hover:bg-white group transition duration-500">
      <div className="bg-[#fff] group-hover:bg-white transition duration-500 shadow-[0_1px_14px_rgba(0,0,0,0.1)] absolute left-1/2 -translate-x-1/2 mt-[-60px] rounded-full w-[112px] aspect-square grid place-items-center">
        <Image src={logo} alt={name} className="rounded-full" />
      </div>

      <div className="max-w-[85%] pt-[80px] pb-[50px] mx-auto">
        <p className="text-sm leading-6 text-center mb-4">{content}</p>
        <p className="text-lg font-bold text-primary mb-1 text-center">{name}</p>
        <p className="text-center text-sm font-semibold">{type}</p>
      </div>
    </div>
  );
};

export default Section14;
