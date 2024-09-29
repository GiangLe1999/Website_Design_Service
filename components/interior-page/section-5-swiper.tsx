'use client';

import { useTranslations } from 'next-intl';
import { Dispatch, FC, SetStateAction, memo, useMemo, useRef, useState } from 'react';
import Reveal from '../reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { cn } from '@/lib/utils';
import { Navigation } from 'swiper/modules';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const swiperData = [1, 2, 3, 4, 5];

const blocksData = [
  { title: 'slide_1.title', content: 'slide_1.content' },
  { title: 'slide_2.title', content: 'slide_2.content' },
  { title: 'slide_3.title', content: 'slide_3.content' },
  { title: 'slide_4.title', content: 'slide_4.content' },
  { title: 'slide_5.title', content: 'slide_5.content' },
];

interface Props {}

const Section5Swiper: FC<Props> = (props) => {
  const t = useTranslations('interior_page.section_5');
  const [activeId, setActiveId] = useState(1);

  const activeBlock = useMemo(() => blocksData[activeId - 1], [activeId]);

  return (
    <div className="flex gap-10">
      <div className="w-fit text-white">
        <SectionSwiper t={t} activeId={activeId} setActiveId={setActiveId} />
      </div>

      <Reveal customClassname="flex-1">
        <div>
          <h3 className="text-black font-bold text-xl mb-3">{t(activeBlock.title)}</h3>
          <div className="text-sm space-y-4 leading-7 text-[#666666]">
            {t.rich(activeBlock.content, {
              bold: (chunks) => <strong>{chunks}</strong>,
              p: (chunks) => <p>{chunks}</p>,
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

interface SwiperProps {
  t: any;
  activeId: number;
  setActiveId: Dispatch<SetStateAction<number>>;
}

const SectionSwiper: FC<SwiperProps> = ({ t, activeId, setActiveId }) => {
  const [_, setInit] = useState<boolean>();
  const swiperRef = useRef(null);
  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.activeIndex;
    const firstModuleOfGroup = swiper.slides[activeIndex].dataset.moduleId;
    setActiveId(Number(firstModuleOfGroup));
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      direction="vertical"
      ref={swiperRef}
      spaceBetween={10}
      slidesPerGroup={1}
      slidesPerView={3}
      speed={1000}
      loop={true}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      modules={[Navigation]}
      onInit={() => setInit(true)}
      className="relative mt-2 h-[300px] !px-2 !pt-10"
      onSwiper={(swiper) => {
        swiper.on('slideChange', handleSlideChange);
      }}
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index} data-module-id={slide}>
          <SwiperCard id={slide} isActive={activeId === slide} setActiveId={setActiveId} />
        </SwiperSlide>
      ))}
      <div className="absolute h-full top-0 left-1/2 -translate-x-1/2 w-[0.5px] bg-border"></div>

      <Reveal customClassname="absolute text-black top-[-7px] left-[33%] z-[50]">
        <button type="button" ref={prevRef} aria-label="Previous slide">
          <ChevronUpIcon className="w-5 h-5 text-[#8a8a8a]" />
        </button>
      </Reveal>

      <button
        type="button"
        ref={nextRef}
        aria-label="Next slide"
        className="absolute bottom-[-6px] left-[33%] z-[50]"
      >
        <ChevronDownIcon className="w-5 h-5 text-[#8a8a8a]" />
      </button>
    </Swiper>
  );
};

interface SwiperCardProps {
  id: number;
  isActive: boolean;
  setActiveId: Dispatch<SetStateAction<number>>;
}

const SwiperCard: FC<SwiperCardProps> = ({ id, isActive, setActiveId }) => {
  return (
    <button onClick={() => setActiveId(id)}>
      <Reveal
        customClassname={cn(
          isActive
            ? 'bg-gradient-to-r from-[#daaa60] to-[#8d5520] text-white'
            : 'bg-white text-black',
          'rounded-full w-[41px] aspect-square grid place-items-center text-center font-bold text-sm shadow-[2px_2px_10px_rgba(0,48,79,0.15)]'
        )}
      >
        0{id}
      </Reveal>
    </button>
  );
};

export default memo(Section5Swiper);
