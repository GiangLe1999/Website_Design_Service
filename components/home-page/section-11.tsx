"use client";

import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import CustomHeading2 from "../custom-heading-2";
import ContentContainer from "../content-container";
import Link from "next/link";
import { siteMetadata } from "@/data/site-metadata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import icon_1 from "@/public/home-page/cham-soc-khach-hang-nhiet-thanh.png";
import icon_2 from "@/public/home-page/ung-dung-cong-nghe-moi-vao-website.png";
import icon_3 from "@/public/home-page/doi-ngu-tre-nhiet-huyet.png";
import icon_4 from "@/public/home-page/thuc-hien-du-an-website-dung-han.png";
import icon_5 from "@/public/home-page/ton-trong-thong-tin-bao-mat.png";
import ConsultButtton from "../consult-button";
import CallButton from "../call-button";

const swiperData = [
  {
    heading: "reason_1.heading",
    description: "reason_1.description",
    icon: icon_1,
  },
  {
    heading: "reason_2.heading",
    description: "reason_2.description",
    icon: icon_2,
  },
  {
    heading: "reason_3.heading",
    description: "reason_3.description",
    icon: icon_3,
  },
  {
    heading: "reason_4.heading",
    description: "reason_4.description",
    icon: icon_4,
  },
  {
    heading: "reason_5.heading",
    description: "reason_5.description",
    icon: icon_5,
  },
];

interface Props {}

const Section11: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_11");
  const t_id = useTranslations("home_page.section_ids");
  const t_common = useTranslations("common");

  return (
    <section
      id={t_id("why_choose_us")}
      className="relative bg-gradient-to-b from-[#fdf6e3] to-[#f4eae8] pb-[100px]"
    >
      <ContentContainer>
        <CustomHeading2 t={t} type_1 customClassname="text-center" />

        <p className="text-lg leading-8 text-center mb-4">
          {t.rich("description", {
            bold: (chunks) => (
              <strong className="font-bold text-primary">{chunks}</strong>
            ),
            link: (chunks) => (
              <Link
                href="/"
                className="font-bold text-primary underline hover:text-secondary transition"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>

        <SectionSwiper />

        <p className="text-xl font-semibold text-primary leading-8 text-center mb-2">
          {t("agency_name")}
        </p>
        <ul className="space-y-2 text-center">
          <li>
            <b>{t_common("tel")}</b>:{" "}
            <a href={`tel:${siteMetadata.tel}`}>{siteMetadata.tel}</a>
          </li>
          <li>
            <b>Email</b>:{" "}
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
          </li>
          <li className="flex items-center justify-center">
            <b>{t_common("address")}</b>:
            <address className="not-italic ml-1">{t("address")}</address>
          </li>
          <li>
            <b>Website</b>: <Link href="/">{siteMetadata.siteUrl}</Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4 mt-10">
          <ConsultButtton type_1 />
          <CallButton type_1 />
        </div>
      </ContentContainer>
    </section>
  );
};

const SectionSwiper = () => {
  const [_, setInit] = useState<boolean>();
  const t = useTranslations("home_page.section_11");
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={30}
      slidesPerView={3}
      slidesPerGroup={1}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 5000,
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
      modules={[Autoplay]}
      onInit={() => setInit(true)}
      className="relative my-10 !pt-16 !pb-5"
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
    <div className="relative bg-[#ffffff82] rounded-[30px] shadow-md hover:bg-white group transition duration-500">
      <div className="bg-[#fff] group-hover:bg-white transition duration-500 shadow-md absolute left-1/2 -translate-x-1/2 mt-[-60px] rounded-full w-[112px] aspect-square grid place-items-center">
        <Image src={icon} alt={heading} width={50} />
      </div>

      <div className="max-w-[85%] pt-[70px] pb-[50px] mx-auto">
        <p className="text-lg font-bold text-primary mb-4 text-center">
          {heading}
        </p>
        <p className="text-sm leading-6 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Section11;
