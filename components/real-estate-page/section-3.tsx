'use client';

import { FC } from 'react';
import top_wave from '@/public/real-estate-page/section-3-top.webp';
import bottom_wave from '@/public/real-estate-page/section-3-bottom.webp';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import CustomHeading2 from '../custom-heading-2';
import ContentContainer from '../content-container';
import benefit1 from '@/public/real-estate-page/benefit-1.png';
import benefit2 from '@/public/real-estate-page/benefit-2.png';
import benefit3 from '@/public/real-estate-page/benefit-3.png';
import benefit4 from '@/public/real-estate-page/benefit-4.png';
import benefit5 from '@/public/real-estate-page/benefit-5.png';
import benefit6 from '@/public/real-estate-page/benefit-6.png';
import benefit7 from '@/public/real-estate-page/benefit-7.png';
import benefit8 from '@/public/real-estate-page/benefit-8.png';
import benefit9 from '@/public/real-estate-page/benefit-9.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import Reveal from '../reveal';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';
import CallToActions from './call-to-actions';

interface Props {}

const swiperData = [
  {
    icon: benefit1,
    heading: 'block_1.heading',
    description: 'block_1.description',
  },
  {
    icon: benefit2,
    heading: 'block_2.heading',
    description: 'block_2.description',
  },
  {
    icon: benefit3,
    heading: 'block_3.heading',
    description: 'block_3.description',
  },
  {
    icon: benefit4,
    heading: 'block_4.heading',
    description: 'block_4.description',
  },
  {
    icon: benefit5,
    heading: 'block_5.heading',
    description: 'block_5.description',
  },
  {
    icon: benefit6,
    heading: 'block_6.heading',
    description: 'block_6.description',
  },
  {
    icon: benefit7,
    heading: 'block_7.heading',
    description: 'block_7.description',
  },
  {
    icon: benefit8,
    heading: 'block_8.heading',
    description: 'block_8.description',
  },
  {
    icon: benefit9,
    heading: 'block_9.heading',
    description: 'block_9.description',
  },
];

const Section3: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_3');

  return (
    <section
      id={t('id')}
      className='text-white text-center bg-[url("/real-estate-page/section-3-bg.webp")] bg-center bg-cover pt-[325px] pb-[477px] relative'
    >
      <Image src={top_wave} alt="Section 3 top wave" className="absolute right-0 left-0 top-0" />
      <Image
        src={bottom_wave}
        alt="Section 3 bottom wave"
        className="absolute bottom-0 left-0 right-0"
        quality={100}
      />

      <ContentContainer>
        <Reveal>
          <p className="text-center uppercase text-xl mb-5 font-semibold">{t('sub_heading')}</p>
        </Reveal>
        <CustomHeading2 t={t} type_3 />
        <Reveal>
          <p className="text-sm leading-7 md:text-lg md:leading-9 xl:text-xl xl:leading-10">
            {t.rich('description', {
              bold: (chunks: any) => <strong>{chunks}</strong>,
            })}
          </p>
        </Reveal>

        <SectionSwiper t={t} />

        <CallToActions />
      </ContentContainer>
    </section>
  );
};

interface SwiperProps {
  t: any;
}

const SectionSwiper: FC<SwiperProps> = ({ t }) => {
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={0}
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
    <Reveal>
      <div className="relative h-[90px] mb-10 border-b">
        <Image src={icon} alt={heading} className="sm:mx-0 mx-auto" />
        <span className="w-[9px] h-[9px] bg-white rounded-full absolute sm:left-0 left-1/2 sm:translate-x-0 -translate-x-1/2 -bottom-[5px]"></span>
      </div>

      <div className="sm:pr-[50px] pr-0">
        <p className="font-bold mb-5 text-lg leading-[1.3] sm:text-left text-center">{heading}</p>

        <p className="text-sm leading-7 text-[#e6e6e6] sm:text-left text-center">{description}</p>
      </div>
    </Reveal>
  );
};

export default Section3;
