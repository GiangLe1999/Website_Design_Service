'use client';

import { useTranslations } from 'next-intl';
import { Dispatch, FC, SetStateAction, memo, useMemo, useRef, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import module_1 from '@/public/real-estate-page/module-trang-chu-website-bds.webp';
import module_2 from '@/public/real-estate-page/module-gioi-thieu-website-bds.webp';
import module_3 from '@/public/real-estate-page/module-trang-du-an-website-bds.webp';
import module_4 from '@/public/real-estate-page/module-chi-tiet-du-an-website-bds.webp';
import module_5 from '@/public/real-estate-page/module-dang-tin-website-bds.webp';
import module_6 from '@/public/real-estate-page/module-tin-tuc-website-bds.webp';
import module_7 from '@/public/real-estate-page/module-tim-kiem-website-bds.webp';
import module_8 from '@/public/real-estate-page/module-thanh-vien-website-bds.webp';
import module_9 from '@/public/real-estate-page/module-hoi-dap-website-bds.webp';
import module_10 from '@/public/real-estate-page/module-lien-he-website-bds.webp';
import module_11 from '@/public/real-estate-page/module-hinh-anh-website-bds.webp';
import module_12 from '@/public/real-estate-page/module-tien-ich-website-bds.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const swiperData = [
  { id: 1, title: 'module_1.heading' },
  { id: 2, title: 'module_2.heading' },
  { id: 3, title: 'module_3.heading' },
  { id: 4, title: 'module_4.heading' },
  { id: 5, title: 'module_5.heading' },
  { id: 6, title: 'module_6.heading' },
  { id: 7, title: 'module_7.heading' },
  { id: 8, title: 'module_8.heading' },
  { id: 9, title: 'module_9.heading' },
  { id: 10, title: 'module_10.heading' },
  { id: 11, title: 'module_11.heading' },
  { id: 12, title: 'module_12.heading' },
];

const modules = [
  module_1,
  module_2,
  module_3,
  module_4,
  module_5,
  module_6,
  module_7,
  module_8,
  module_9,
  module_10,
  module_11,
  module_12,
];

interface Props {}

const Section5: FC<Props> = (props) => {
  const t = useTranslations('real_estate_page.section_5');
  const [activeModule, setActiveModule] = useState(1);

  const activeImage = useMemo(() => modules[activeModule - 1], [activeModule]);

  return (
    <section
      id={t('id')}
      className="relative pt-[150px] bg-[url('/real-estate-page/section-5-bg.webp')] bg-[50%_4%] bg-cover before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.3)]"
    >
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#00445c00] to-[#025c81]"></div>

      <div className="relative z-[2] overflow-hidden pl-0 lg:pl-[calc(100vw_/_2_-_580px)]">
        <div className="flex lg:flex-row flex-col items-center gap-12 px-5 sm:px-9">
          <div className="lg:w-[45%] w-full text-white">
            <Reveal>
              <p className="bds-sub-heading !text-white lg:!text-left !text-center">
                {t('sub_heading')}
              </p>
            </Reveal>
            <CustomHeading2 t={t} type_3 customClassname="lg:text-left text-center" />
            <Reveal>
              <p className="text-sm leading-7 md:text-lg md:leading-9 lg:text-left text-center">
                {t.rich('description', {
                  bold: (chunks) => <strong className="font-extrabold">{chunks}</strong>,
                })}
              </p>
            </Reveal>

            <SectionSwiper t={t} activeModule={activeModule} setActiveModule={setActiveModule} />

            <Reveal customClassname="text-sm mt-8">
              {t.rich(`module_${activeModule}.list`, {
                ul: (chunks) => <ul className="space-y-2">{chunks}</ul>,
                li: (chunks) => <li className="list-disc list-inside">{chunks}</li>,
                bold: (chunks) => <strong className="font-bold">{chunks}</strong>,
                italic: (chunks) => <i>{chunks}</i>,
              })}
            </Reveal>
          </div>

          <Reveal customClassname="lg:w-[55%] w-full">
            <Image
              src={activeImage}
              alt={t(`module_${activeModule}.heading`)}
              className="md:w-[1030px] sm:w-[800px] w-[600px] max-w-none"
              width={1030}
              height={852}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

interface SwiperProps {
  t: any;
  activeModule: number;
  setActiveModule: Dispatch<SetStateAction<number>>;
}

const SectionSwiper: FC<SwiperProps> = ({ t, activeModule, setActiveModule }) => {
  const [_, setInit] = useState<boolean>();
  const swiperRef = useRef(null);
  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.activeIndex;
    const firstModuleOfGroup = swiper.slides[activeIndex].dataset.moduleId;
    setActiveModule(Number(firstModuleOfGroup));
  };

  return (
    <Swiper
      direction="horizontal"
      ref={swiperRef}
      spaceBetween={10}
      slidesPerGroup={1}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay]}
      onInit={() => setInit(true)}
      className="relative mt-6"
      onSwiper={(swiper) => {
        swiper.on('slideChange', handleSlideChange);
      }}
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index} data-module-id={slide.id}>
          <SwiperCard
            id={slide.id}
            title={t(slide.title)}
            isActive={activeModule === slide.id}
            setActiveModule={setActiveModule}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface SwiperCardProps {
  id: number;
  title: string;
  isActive: boolean;
  setActiveModule: Dispatch<SetStateAction<number>>;
}

const SwiperCard: FC<SwiperCardProps> = ({ id, title, isActive, setActiveModule }) => {
  return (
    <button onClick={() => setActiveModule(id)}>
      <Reveal
        customClassname={cn(
          isActive ? 'bg-[#0093b0]' : 'bg-[#006f8b]',
          'rounded-[23px] py-3 px-5 text-sm font-bold text-center leading-[1.8]'
        )}
      >
        {title}
      </Reveal>
    </button>
  );
};

export default memo(Section5);
