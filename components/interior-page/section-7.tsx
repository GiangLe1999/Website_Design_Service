'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import img1 from '@/public/interior-page/module-1.webp';
import img2 from '@/public/interior-page/module-2.webp';
import img3 from '@/public/interior-page/module-3.webp';
import img4 from '@/public/interior-page/module-4.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

const swiperData = [
  {
    title: 'module_1.title',
    description: 'module_1.description',
    img: img1,
  },
  {
    title: 'module_2.title',
    description: 'module_2.description',
    img: img2,
  },
  {
    title: 'module_3.title',
    description: 'module_3.description',
    img: img3,
  },
  {
    title: 'module_4.title',
    description: 'module_4.description',
    img: img4,
  },
  {
    title: 'module_5.title',
    description: 'module_5.description',
    img: img1,
  },
  {
    title: 'module_6.title',
    description: 'module_6.description',
    img: img2,
  },
  {
    title: 'module_7.title',
    description: 'module_7.description',
    img: img3,
  },
  {
    title: 'module_8.title',
    description: 'module_8.description',
    img: img4,
  },
  {
    title: 'module_9.title',
    description: 'module_9.description',
    img: img1,
  },
  {
    title: 'module_10.title',
    description: 'module_10.description',
    img: img2,
  },
  {
    title: 'module_11.title',
    description: 'module_11.description',
    img: img3,
  },
  {
    title: 'module_12.title',
    description: 'module_12.description',
    img: img4,
  },
];

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_7');

  return (
    <section id={t('id')} className="pt-[50px]">
      <ContentContainer customClassName="relative z-[10] max-w-[900px]">
        <Reveal>
          <CustomHeading2 t={t} type_4 customClassname="text-center" />
        </Reveal>

        <div className="text-center text-sm leading-7 md:text-base md:leading-8 xl:text-lg xl:leading-9">
          <Reveal>
            <p>{t('paragraph_1')}</p>
          </Reveal>

          <Reveal>
            <p>
              {t.rich('paragraph_2', {
                bold: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
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
  const t = useTranslations('interior_page.section_7');
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={50}
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
        768: {
          slidesPerView: 2,
        },
      }}
      modules={[Autoplay]}
      onInit={() => setInit(true)}
      className="relative mt-10"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard img={slide.img} title={t(slide.title)} description={t(slide.description)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface SwiperCardProps {
  img: StaticImageData;
  title: string;
  description: string;
}

const SwiperCard: FC<SwiperCardProps> = ({ img, title, description }) => {
  return (
    <Reveal>
      <div className="relative w-full aspect-[1.69]">
        <Image src={img} alt={title} fill sizes="100vw" className="object-cover" />
      </div>

      <h3 className="mt-6 mb-2 font-bold text-[#8D5520] text-center text-2xl">{title}</h3>
      <p className="text-sm leading-7 text-center">{description}</p>
    </Reveal>
  );
};

export default Section2;
