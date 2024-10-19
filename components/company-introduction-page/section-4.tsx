'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import company_logo_1 from '@/public/company-introduction-page/section-4-company-1.svg';
import company_logo_2 from '@/public/company-introduction-page/section-4-company-2.png';
import company_logo_3 from '@/public/company-introduction-page/section-4-company-3.svg';
import company_logo_4 from '@/public/company-introduction-page/section-4-company-4.png';
import company_logo_5 from '@/public/company-introduction-page/section-4-company-5.png';
import company_logo_6 from '@/public/company-introduction-page/section-4-company-6.svg';
import company_logo_7 from '@/public/company-introduction-page/section-4-company-7.svg';
import company_logo_8 from '@/public/company-introduction-page/section-4-company-8.svg';
import company_logo_9 from '@/public/company-introduction-page/section-4-company-9.svg';
import company_logo_10 from '@/public/company-introduction-page/section-4-company-10.svg';
import company_logo_11 from '@/public/company-introduction-page/section-4-company-11.svg';
import company_logo_12 from '@/public/company-introduction-page/section-4-company-12.svg';

import company_website_1 from '@/public/company-introduction-page/section-4-website-1.webp';
import company_website_2 from '@/public/company-introduction-page/section-4-website-2.webp';
import company_website_3 from '@/public/company-introduction-page/section-4-website-3.webp';
import company_website_4 from '@/public/company-introduction-page/section-4-website-4.webp';
import company_website_5 from '@/public/company-introduction-page/section-4-website-5.webp';
import company_website_6 from '@/public/company-introduction-page/section-4-website-6.webp';
import company_website_7 from '@/public/company-introduction-page/section-4-website-7.webp';
import company_website_8 from '@/public/company-introduction-page/section-4-website-8.webp';
import company_website_9 from '@/public/company-introduction-page/section-4-website-9.webp';
import company_website_10 from '@/public/company-introduction-page/section-4-website-10.webp';
import company_website_11 from '@/public/company-introduction-page/section-4-website-11.webp';
import company_website_12 from '@/public/company-introduction-page/section-4-website-12.webp';

import Reveal from '../reveal';
import Image, { StaticImageData } from 'next/image';

import CustomHeading2 from '../custom-heading-2';
import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from '../ui/button';
import Link from 'next/link';

const swiperData = [
  {
    name: 'website_1.name',
    description: 'website_1.description',
    year: 2019,
    link: '',
    logo: company_logo_1,
    website: company_website_1,
    logoWidth: 100,
  },
  {
    name: 'website_2.name',
    description: 'website_2.description',
    year: 2022,
    link: '',
    logo: company_logo_2,
    website: company_website_2,
    logoWidth: 120,
  },
  {
    name: 'website_3.name',
    description: 'website_3.description',
    year: 2020,
    link: '',
    logo: company_logo_3,
    website: company_website_3,
    logoWidth: 80,
  },
  {
    name: 'website_4.name',
    description: 'website_4.description',
    year: 2021,
    link: '',
    logo: company_logo_4,
    website: company_website_4,
    logoWidth: 120,
  },
  {
    name: 'website_5.name',
    description: 'website_5.description',
    year: 2022,
    link: '',
    logo: company_logo_5,
    website: company_website_5,
    logoWidth: 150,
  },
  {
    name: 'website_6.name',
    description: 'website_6.description',
    year: 2023,
    link: '',
    logo: company_logo_6,
    website: company_website_6,
    logoWidth: 120,
  },
  {
    name: 'website_7.name',
    description: 'website_7.description',
    year: 2021,
    link: '',
    logo: company_logo_7,
    website: company_website_7,
    logoWidth: 150,
  },
  {
    name: 'website_8.name',
    description: 'website_8.description',
    year: 2022,
    link: '',
    logo: company_logo_8,
    website: company_website_8,
    logoWidth: 160,
  },
  {
    name: 'website_9.name',
    description: 'website_9.description',
    year: 2023,
    link: '',
    logo: company_logo_9,
    website: company_website_9,
    logoWidth: 170,
  },
  {
    name: 'website_10.name',
    description: 'website_10.description',
    year: 2023,
    link: '',
    logo: company_logo_10,
    website: company_website_10,
    logoWidth: 100,
  },
  {
    name: 'website_11.name',
    description: 'website_11.description',
    year: 2019,
    link: '',
    logo: company_logo_11,
    website: company_website_11,
    logoWidth: 150,
  },
  {
    name: 'website_12.name',
    description: 'website_12.description',
    year: 2021,
    link: '',
    logo: company_logo_12,
    website: company_website_12,
    logoWidth: 180,
  },
];

interface Props {}

const Section3: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('company_introduction_page.section_4');

  return (
    <section id={t('id')} className="relative py-[100px] bg-[#0053D4]">
      <ContentContainer>
        <div className="max-w-[700px] mb-14">
          <CustomHeading2 t={t} customClassname="text-white" />
          <Reveal>
            <p className="sm:text-lg sm:leading-9 text-sm leading-7 text-white">
              {t('description')}
            </p>
          </Reveal>
        </div>
      </ContentContainer>

      <SectionSwiper t={t} />
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
      spaceBetween={10}
      slidesPerGroup={1}
      slidesPerView={1.2}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="!pb-10 company_introduction_swiper"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard slideData={slide} t={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface SwiperCardProps {
  t: any;
  slideData: {
    name: string;
    description: string;
    year: number;
    link: string;
    logo: any;
    website: StaticImageData;
    logoWidth: number;
  };
}

const SwiperCard: FC<SwiperCardProps> = ({ slideData, t }) => {
  return (
    <Reveal customClassname="h-[700px] flex gap-16 bg-[rgba(255,255,255,0.15)] stroke-[1px] border backdrop-blur-[2px] box-border mx-[0.99rem] my-0 pt-[4.6875rem] pb-[3.125rem] px-[5.208rem] rounded-[1.042rem] border-solid border-[rgba(255,255,255,0.4)]">
      <div className="w-[28%] text-white">
        <Image
          src={slideData.logo}
          alt={slideData.name}
          className="h-auto"
          style={{ width: slideData.logoWidth }}
        />
        <ul>
          <li className="text-xs leading-6 py-4">{t(slideData.description)}</li>
          <li className="border-y border-[#ffffff40] py-4">
            <p className="text-xs mb-1">{t('company_name')}</p>
            <p className="font-bold">{t(slideData.name)}</p>
          </li>
          <li className="py-4 border-b border-[#ffffff40] mb-6">
            <p className="text-xs mb-1">{t('complete_year')}</p>
            <p className="font-bold">{slideData.year}</p>
          </li>
        </ul>

        <Button className="bg-white rounded-full text-[#0053D4] text-sm font-bold hover:bg-[#E6041D] hover:text-white transition">
          <Link href={slideData.link} target="_blank">
            {t('view_website')}
          </Link>
        </Button>
      </div>

      <div className="flex-1">
        <Image src={slideData.website} alt={slideData.name} />
      </div>
    </Reveal>
  );
};

export default Section3;
