'use client';

import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import icon_1 from '@/public/ecommerce-page/section-4-icon-1.webp';
import icon_2 from '@/public/ecommerce-page/section-4-icon-2.webp';
import icon_3 from '@/public/ecommerce-page/section-4-icon-3.webp';
import icon_4 from '@/public/ecommerce-page/section-4-icon-4.webp';
import icon_5 from '@/public/ecommerce-page/section-4-icon-5.webp';
import icon_6 from '@/public/ecommerce-page/section-4-icon-6.webp';
import laptop from '@/public/ecommerce-page/section-4-laptop.webp';
import CustomHeading2 from '../custom-heading-2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

interface Props {}

const notesData = [
  {
    heading: 'note_1.heading',
    description: 'note_1.description',
    icon: icon_1,
  },
  {
    heading: 'note_2.heading',
    description: 'note_2.description',
    icon: icon_2,
  },
  {
    heading: 'note_3.heading',
    description: 'note_3.description',
    icon: icon_3,
  },
  {
    heading: 'note_4.heading',
    description: 'note_4.description',
    icon: icon_4,
  },
  {
    heading: 'note_5.heading',
    description: 'note_5.description',
    icon: icon_5,
  },
  {
    heading: 'note_6.heading',
    description: 'note_6.description',
    icon: icon_6,
  },
];

const Section4: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('ecommerce_page.section_4');

  return (
    <section id={t('id')} className="mt-[100px]">
      <div className="relative w-full bg-[url('/ecommerce-page/section-4-bg.jpeg')] bg-no-repeat bg-center bg-cover">
        <div className="pt-[300px] pb-[200px]">
          <div className="relative z-[2] overflow-hidden pl-0 lg:pl-[calc(100vw_/_2_-_600px)]">
            <div className="flex lg:flex-row flex-col items-center gap-20 px-5 sm:px-9">
              <div className="lg:w-[50%] w-full text-white">
                <CustomHeading2 t={t} customClassname="text-white" />

                <Reveal>
                  <p className="text-sm text-white leading-7 mb-4">
                    {t.rich('paragraph_1', {
                      bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
                    })}
                  </p>
                </Reveal>

                <Reveal>
                  <p className="text-sm text-white leading-7">
                    {t.rich('paragraph_2', {
                      bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
                    })}
                  </p>
                </Reveal>
              </div>

              <Reveal customClassname="lg:w-[50%] w-full">
                <Image
                  src={laptop}
                  alt="Laptop with ecommerce app"
                  className="md:w-[846px] sm:w-[750px] w-[640px] max-w-none"
                  width={846}
                  height={518}
                />
              </Reveal>
            </div>
          </div>

          <ContentContainer>
            <SectionSwiper t={t} />
          </ContentContainer>
        </div>
      </div>
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
      {notesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard
            icon={slide.icon}
            heading={t(slide.heading)}
            description={t.rich(slide.description, {
              bold: (chunks: any) => <strong>{chunks}</strong>,
            })}
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
        <p className="font-bold mb-5 text-xl leading-[1.3] sm:text-left text-center text-white min-h-[52px]">
          {heading}
        </p>

        <p className="text-sm leading-7 text-[#e6e6e6] sm:text-left text-center">{description}</p>
      </div>
    </Reveal>
  );
};

export default Section4;
