"use client";

import { useTranslations } from "next-intl";
import { FC, useRef, useState } from "react";
import ContentContainer from "../content-container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import type_1 from "@/public/home-page/dich-vu-thiet-ke-landing-page.webp";
import type_2 from "@/public/home-page/dich-vu-thiet-ke-website-ban-hang.webp";
import type_3 from "@/public/home-page/dich-vu-thiet-ke-website-bat-dong-san.webp";
import type_4 from "@/public/home-page/dich-vu-thiet-ke-website-doanh-nghiep.webp";
import type_5 from "@/public/home-page/dich-vu-thiet-ke-website-noi-that.webp";
import Image, { StaticImageData } from "next/image";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import ConsultButtton from "../consult-button";

const swiperData = [
  {
    image: type_1,
    heading: "type_1.heading",
    description: "type_1.description",
    link: "",
  },
  {
    image: type_2,
    heading: "type_2.heading",
    description: "type_2.description",
    link: "",
  },
  {
    image: type_3,
    heading: "type_3.heading",
    description: "type_3.description",
    link: "",
  },

  {
    image: type_4,
    heading: "type_4.heading",
    description: "type_4.description",
    link: "",
  },
  {
    image: type_5,
    heading: "type_4.heading",
    description: "type_4.description",
    link: "",
  },
  {
    image: type_1,
    heading: "type_6.heading",
    description: "type_6.description",
    link: "",
  },
  {
    image: type_2,
    heading: "type_7.heading",
    description: "type_7.description",
    link: "",
  },
  {
    image: type_3,
    heading: "type_8.heading",
    description: "type_8.description",
    link: "",
  },
  {
    image: type_4,
    heading: "type_9.heading",
    description: "type_9.description",
    link: "",
  },
  {
    image: type_5,
    heading: "type_10.heading",
    description: "type_10.description",
    link: "",
  },
  {
    image: type_1,
    heading: "type_11.heading",
    description: "type_11.description",
    link: "",
  },
  {
    image: type_2,
    heading: "type_12.heading",
    description: "type_12.description",
    link: "",
  },
  {
    image: type_3,
    heading: "type_13.heading",
    description: "type_13.description",
    link: "",
  },
  {
    image: type_4,
    heading: "type_14.heading",
    description: "type_14.description",
    link: "",
  },
];

interface Props {}

const Section9: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_9");
  const t_id = useTranslations("home_page.section_ids");

  return (
    <section
      id={t_id("categorize_website")}
      className="bg-gradient-to-b from-[#f4f1f1] to-[#eeeefb] pb-[100px]"
    >
      <ContentContainer>
        <h2 className="text-center text-[50px] font-bold leading-[1.3] mb-5 text-primary">
          {t.rich("heading", {
            orange: (chunks) => (
              <span className="text-secondary">{chunks}</span>
            ),
          })}
        </h2>

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
  const t = useTranslations("home_page.section_9");
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
      className="relative"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SwiperCard
            image={slide.image}
            heading={t(slide.heading)}
            description={t(slide.description)}
            link={slide.link}
          />
        </SwiperSlide>
      ))}

      <button
        type="button"
        ref={prevRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute left-0 top-2/3 z-[10]"
      >
        <MoveLeftIcon className="w-4 h-4" />
      </button>

      <button
        type="button"
        ref={nextRef}
        className="bg-[#05141F1A] w-9 h-9 grid place-items-center rounded-full absolute right-0 top-2/3 z-[10]"
      >
        <MoveRightIcon className="w-4 h-4" />
      </button>
    </Swiper>
  );
};

interface SwiperCardProps {
  image: StaticImageData;
  heading: string;
  description: string;
  link: string;
}

const SwiperCard: FC<SwiperCardProps> = ({
  image,
  heading,
  description,
  link,
}) => {
  return (
    <div>
      <ContentContainer
        maxWidth="max-w-[900px]"
        customClassName="text-center mb-20"
      >
        <h3 className="text-[25px] font-bold text-primary mb-5">{heading}</h3>
        <p className="text-sm leading-6 mb-10">{description}</p>

        <ConsultButtton type_1 />
      </ContentContainer>

      <Image src={image} alt={heading} />
    </div>
  );
};

export default Section9;
