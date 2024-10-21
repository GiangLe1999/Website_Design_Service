'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import Reveal from '../reveal';
import Image, { StaticImageData } from 'next/image';

import CustomHeading2 from '../custom-heading-2';
import { Autoplay } from 'swiper/modules';
import { Button } from '../ui/button';
import Link from 'next/link';
import wordpress_img from '@/public/company-introduction-page/section-5-wordpress.svg';
import icon_1 from '@/public/company-introduction-page/section-5-icon-1.svg';
import icon_2 from '@/public/company-introduction-page/section-5-icon-2.svg';
import icon_3 from '@/public/company-introduction-page/section-5-icon-3.svg';
import company_logo_1 from '@/public/company-introduction-page/section-5-company-logo-1.png';
import company_logo_2 from '@/public/company-introduction-page/section-5-company-logo-2.svg';
import company_logo_3 from '@/public/company-introduction-page/section-5-company-logo-3.svg';
import company_mobile from '@/public/company-introduction-page/section-5-mobile-1.png';

interface Props {}

const swiperData = [
  {
    name: 'company_1.name',
    person: 'company_1.person',
    description: 'company_1.description',
    logo: company_logo_1,
    img: company_mobile,
    link: '',
  },
  {
    name: 'company_2.name',
    person: 'company_2.person',
    description: 'company_2.description',
    logo: company_logo_2,
    img: company_mobile,
    link: '',
  },
  {
    name: 'company_3.name',
    person: 'company_3.person',
    description: 'company_3.description',
    logo: company_logo_3,
    img: company_mobile,
    link: '',
  },
];

const Section5: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('company_introduction_page.section_5');

  return (
    <>
      <section
        id={t('id')}
        className="relative py-[100px] bg-[url('/company-introduction-page/section-5-bg.svg')] bg-no-repeat bg-[top_center] bg-[55rem_auto] z-[1]"
      >
        <ContentContainer>
          <div className="max-w-[700px] mb-24">
            <CustomHeading2 type_7 t={t} />
            <Reveal>
              <p className="sm:text-lg sm:leading-9 text-sm leading-7">{t('description')}</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-4 gap-12">
            <Reveal customClassname="relative">
              <p className="text-[#0053D4] text-4xl font-extrabold mb-2">02+</p>
              <p className="bg-[#fff] shadow-[0px_4px_1.5625rem_0px_rgba(201,209,234,0.3)] text-[#2351d6] font-bold leading-[2.448rem] inline-flex mb-[0.78125rem] px-[1.198rem] py-0 w-fit rounded-full">
                {t('reason_1.heading')}
              </p>
              <p className="text-[13px] leading-6">{t('reason_1.description')}</p>

              <div className="w-[0.46875rem] h-[0.46875rem] bg-[#2351d6] absolute rounded-[50%] -left-8 top-16">
                <span className="bg-[linear-gradient(134deg,#2351d6_0%,rgba(85,177,236,0.00)_100%)] w-[2px] h-[12.854rem] absolute left-1/2 -translate-x-1/2"></span>
              </div>
            </Reveal>

            <Reveal customClassname="relative mt-40">
              <p className="text-[#55B1EC] text-4xl font-extrabold mb-2">100+</p>
              <p className="bg-[#fff] shadow-[0px_4px_1.5625rem_0px_rgba(201,209,234,0.3)] text-[#55B1EC] font-bold leading-[2.448rem] inline-flex mb-[0.78125rem] px-[1.198rem] py-0 w-fit rounded-full">
                {t('reason_2.heading')}
              </p>
              <p className="text-[13px] leading-6">{t('reason_2.description')}</p>

              <div className="w-[0.46875rem] h-[0.46875rem] bg-[#55B1EC] absolute rounded-[50%] -left-8 top-16">
                <span className="bg-[linear-gradient(134deg,#55B1EC_0%,rgba(85,177,236,0.00)_100%)] w-[2px] h-[12.854rem] absolute left-1/2 -translate-x-1/2"></span>
              </div>
            </Reveal>

            <Reveal customClassname="relative">
              <p className="text-[#0053D4] text-4xl font-extrabold mb-2">10+</p>
              <p className="bg-[#fff] shadow-[0px_4px_1.5625rem_0px_rgba(201,209,234,0.3)] text-[#2351d6] font-bold leading-[2.448rem] inline-flex mb-[0.78125rem] px-[1.198rem] py-0 w-fit rounded-full">
                {t('reason_3.heading')}
              </p>
              <p className="text-[13px] leading-6">{t('reason_3.description')}</p>

              <div className="w-[0.46875rem] h-[0.46875rem] bg-[#2351d6] absolute rounded-[50%] -left-8 top-16">
                <span className="bg-[linear-gradient(134deg,#2351d6_0%,rgba(85,177,236,0.00)_100%)] w-[2px] h-[12.854rem] absolute left-1/2 -translate-x-1/2"></span>
              </div>
            </Reveal>

            <Reveal customClassname="relative mt-40">
              <Image src={wordpress_img} alt="Wordpress" className="h-10 w-auto mb-2" />
              <p className="bg-[#fff] shadow-[0px_4px_1.5625rem_0px_rgba(201,209,234,0.3)] text-[#55B1EC] font-bold leading-[2.448rem] inline-flex mb-[0.78125rem] px-[1.198rem] py-0 w-fit rounded-full">
                {t('reason_4.heading')}
              </p>
              <p className="text-[13px] leading-6">{t('reason_4.description')}</p>

              <div className="w-[0.46875rem] h-[0.46875rem] bg-[#55B1EC] absolute rounded-[50%] -left-8 top-16">
                <span className="bg-[linear-gradient(134deg,#55B1EC_0%,rgba(85,177,236,0.00)_100%)] w-[2px] h-[12.854rem] absolute left-1/2 -translate-x-1/2"></span>
              </div>
            </Reveal>
          </div>
        </ContentContainer>
      </section>

      <div className="relative flex items-end w-full h-[600px] bg-[url('/company-introduction-page/section-5-img.webp')] bg-no-repeat bg-[center_center] mt-[-200px] bg-cover z-[0] before:bg-[linear-gradient(180deg,#fefeff_0%,rgba(253,254,255,0.61)_60.28%,rgba(247,250,255,0)_100%)] before:w-full before:h-[70%] before:content-[''] before:absolute before:left-0 before:top-0 after:bg-[linear-gradient(0deg,#ffffff_0%,rgba(247,250,255,0.61)_60.28%,rgba(247,250,255,0)_100%)] after:h-[10rem] after:w-full content-[''] after:absolute after:left-0 after:bottom-0"></div>

      <section>
        <ContentContainer maxWidth="max-w-[1000px]">
          <div className="grid grid-cols-3 gap-16 relative z-[1]">
            <Reveal>
              <div className="w-[60px] aspect-square rounded-full bg-[#0053D4] grid place-items-center mb-2 mx-8">
                <Image src={icon_1} alt="Icon 1" />
              </div>
              <p className="text-[#0053D4] font-bold px-8 border-l-2 border-[#0053D4] mb-2">
                {t('reason_5.heading')}
              </p>
              <p className="text-[13px] leading-6 px-8">{t('reason_5.description')}</p>
            </Reveal>

            <Reveal>
              <div className="w-[60px] aspect-square rounded-full bg-[#55B1EC] grid place-items-center mb-2 mx-8">
                <Image src={icon_2} alt="Icon 2" />
              </div>
              <p className="text-[#55B1EC] font-bold px-8 border-l-2 border-[#55B1EC] mb-2">
                {t('reason_6.heading')}
              </p>
              <p className="text-[13px] leading-6 px-8">{t('reason_6.description')}</p>
            </Reveal>

            <Reveal>
              <div className="w-[60px] aspect-square rounded-full bg-[#0053D4] grid place-items-center mb-2 mx-8">
                <Image src={icon_3} alt="Icon 3" />
              </div>
              <p className="text-[#0053D4] font-bold px-8 border-l-2 border-[#0053D4] mb-2">
                {t('reason_7.heading')}
              </p>
              <p className="text-[13px] leading-6 px-8">{t('reason_7.description')}</p>
            </Reveal>
          </div>
        </ContentContainer>
      </section>

      <section className="pt-[130px]">
        <ContentContainer>
          <SectionSwiper t={t} />
        </ContentContainer>
      </section>
    </>
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
      slidesPerView={1}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      className="!py-16 company_introduction_swiper"
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
    person: string;
    img: any;
    logo: any;
    description: string;
    link: string;
  };
}

const SwiperCard: FC<SwiperCardProps> = ({ slideData, t }) => {
  return (
    <Reveal customClassname="relative rounded-xl bg-[#0053D4] p-[92px]">
      <div className="absolute -top-12 left-[92px] bg-white rounded-full w-[97px] aspect-square grid place-items-center custom_filter">
        <Image src={slideData.logo} alt={t(slideData.name)} className="h-[50px] w-auto" />
      </div>

      <div className="flex items-center gap-10">
        <div className="w-1/2">
          <p className="text-white leading-7 mb-[53px]">{t(slideData.description)}</p>
          <div className="flex justify-between gap-2">
            <div className="border-l-2 border-white text-white pl-4">
              <p className="font-bold mb-1">{t(slideData.person)}</p>
              <p className="text-xs">{t(slideData.name)}</p>
            </div>

            <Button className="bg-white rounded-full text-[#0053D4] text-sm font-bold hover:bg-[#E6041D] hover:text-white transition">
              <Link href={slideData.link} target="_blank">
                {t('view_website')}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute right-[13%] -top-14 w-[260px] aspect-[0.527]">
        <Image
          src={slideData.img}
          alt={t(slideData.name)}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </Reveal>
  );
};

export default Section5;
