"use client";

import { useTranslations } from "next-intl";
import { FC, useRef, useState } from "react";
import ContentContainer from "../content-container";
import Image, { StaticImageData } from "next/image";
import MockImg from "@/public/home-page/nen-tang-thiet-ke-website-worpress-nextjs.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import reason1 from "@/public/home-page/reason-1.png";
import reason2 from "@/public/home-page/reason-2.png";
import reason3 from "@/public/home-page/reason-3.png";
import reason4 from "@/public/home-page/reason-4.png";
import reason5 from "@/public/home-page/reason-5.png";
import reason6 from "@/public/home-page/reason-6.png";
import reason7 from "@/public/home-page/reason-7.png";

const swiperData = [
  {
    icon: reason1,
    heading: "answer_1.heading",
    description: "answer_1.description",
  },
  {
    icon: reason2,
    heading: "answer_2.heading",
    description: "answer_2.description",
  },
  {
    icon: reason3,
    heading: "answer_3.heading",
    description: "answer_3.description",
  },
  {
    icon: reason4,
    heading: "answer_4.heading",
    description: "answer_4.description",
  },
  {
    icon: reason5,
    heading: "answer_5.heading",
    description: "answer_5.description",
  },
  {
    icon: reason6,
    heading: "answer_6.heading",
    description: "answer_6.description",
  },
  {
    icon: reason7,
    heading: "answer_7.heading",
    description: "answer_7.description",
  },
];

interface Props {}

const Section8: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_8");
  const t_id = useTranslations("home_page.section_ids");
  return (
    <section
      id={t_id("website_framework")}
      className="bg-gradient-to-b from-[#fcf5e4] to-[#f3eae8]"
    >
      <ContentContainer>
        <div className="flex items-center mb-[70px]">
          <div className="w-1/2">
            <h2 className="text-[50px] font-bold leading-[1.3] mb-5 text-primary">
              {t.rich("heading", {
                orange: (chunks) => (
                  <span className="text-secondary">{chunks}</span>
                ),
              })}
            </h2>
            <div className="text-sm leading-6 mb-5">
              <p>
                {t.rich("paragraph_1", {
                  bold: (chunks) => (
                    <strong className="text-primary">{chunks}</strong>
                  ),
                })}
              </p>
              <p>{t("paragraph_2")}</p>
            </div>

            <p className="text-xl leading-9">
              {t.rich("question", {
                bold: (chunks) => (
                  <strong className="text-primary">{chunks}</strong>
                ),
              })}
            </p>
          </div>

          <div className="w-1/2">
            <Image
              src={MockImg}
              alt={t("image_1")}
              className="w-[1300px] max-w-none"
            />
          </div>
        </div>

        <SectionSwiper />
      </ContentContainer>
    </section>
  );
};

const SectionSwiper = () => {
  const [_, setInit] = useState<boolean>();
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const t = useTranslations("home_page.section_8");
  return (
    <Swiper
      direction="horizontal"
      ref={swiperRef}
      spaceBetween={0}
      slidesPerView={3}
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
      // breakpoints={{
      //   0: {
      //     slidesPerView: 1.5,
      //   },
      //   660: {
      //     slidesPerView: 2.5,
      //   },
      // }}
      modules={[Autoplay, Navigation]}
      onInit={() => setInit(true)}
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
    <div>
      <div className="relative h-[90px] mb-10 border-b">
        <Image src={icon} alt={heading} />
        <span className="w-[9px] h-[9px] bg-secondary rounded-full absolute left-0 -bottom-[5px]"></span>
      </div>

      <div className="pr-[50px]">
        <p className="text-primary font-bold mb-5 text-lg leading-[1.3]">
          {heading}
        </p>

        <p className="text-sm leading-6 text-[#45455e]">{description}</p>
      </div>
    </div>
  );
};

export default Section8;