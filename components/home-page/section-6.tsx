"use client";

import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useTranslations } from "next-intl";
import { Autoplay, Navigation } from "swiper/modules";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

interface Props {}

const Section6: FC<Props> = (): JSX.Element => {
  const [_, setInit] = useState<boolean>();

  const t = useTranslations("home_page.section_6");
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperData = [
    {
      number: "01",
      content: t("slide_1"),
    },
    {
      number: "02",
      content: t("slide_2"),
    },
    {
      number: "03",
      content: t("slide_3"),
    },
    {
      number: "04",
      content: t("slide_4"),
    },
    {
      number: "05",
      content: t("slide_5"),
    },
    {
      number: "06",
      content: t("slide_6"),
    },
    {
      number: "07",
      content: t("slide_7"),
    },
    {
      number: "08",
      content: t("slide_8"),
    },
    {
      number: "09",
      content: t("slide_9"),
    },
  ];

  return (
    <div className="w-screen flex gap-16 items-center relative z-[1]">
      <Swiper
        direction="horizontal"
        ref={swiperRef}
        className="home-swiper"
        spaceBetween={20}
        slidesPerView={2.3}
        slidesPerGroup={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          660: {
            slidesPerView: 2.5,
          },
        }}
        modules={[Autoplay, Navigation]}
        onInit={() => setInit(true)}
      >
        {swiperData.map((slide) => (
          <SwiperSlide key={slide.number}>
            <SwiperCard number={slide.number} content={slide.content} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home-swiper-heading text-primary font-semibold">
        <h3>
          {t.rich("heading", {
            bold: (chunks) => (
              <strong className="text-secondary">{chunks}</strong>
            ),
          })}
        </h3>
        <div className="flex items-center gap-2 mt-4">
          <button
            type="button"
            ref={prevRef}
            className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full"
          >
            <MoveLeftIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            ref={nextRef}
            className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full"
          >
            <MoveRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface SwiperCardProps {
  number: string;
  content: string;
}

const SwiperCard: FC<SwiperCardProps> = ({ number, content }) => {
  return (
    <div className="p-[50px] bg-[#eff8f6] shadow-[0_1px_14px_rgba(0,0,0,0.1)] h-full cursor-pointer transition duration-500 rounded-[20px] hover:bg-white">
      <p className="font-bold text-[60px]">
        <span className="text-primary">{number}</span>
        <span className="text-secondary">.</span>
      </p>
      <p className="leading-8">{content}</p>
    </div>
  );
};

export default Section6;
