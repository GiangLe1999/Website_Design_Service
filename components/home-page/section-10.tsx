import { useTranslations } from "next-intl";
import { FC } from "react";
import ContentContainer from "../content-container";
import Image from "next/image";
import arrow_top from "@/public/home-page/arrow_top.png";
import arrow_step from "@/public/home-page/arrows_step.png";
import { cn } from "@/lib/utils";
import step_1_img from "@/public/home-page/quy-trinh-thiet-ke-web-gap-go-khach-hang.webp";
import step_2_img from "@/public/home-page/quy-trinh-thiet-ke-web-vach-ra-huong-di.webp";
import step_3_img from "@/public/home-page/quy-trinh-thiet-ke-web-tien-hanh-thiet-ke-lap-trinh.webp";
import step_4_img from "@/public/home-page/quy-trinh-thiet-ke-web-toi-uu-website.webp";
import step_5_img from "@/public/home-page/quy-trinh-thiet-ke-web-trao-quyen-website.webp";
import step_6_img from "@/public/home-page/quy-trinh-thiet-ke-web-bao-tri-website.webp";
import CustomHeading2 from "../custom-heading-2";

interface Props {}

const stepsData = [
  {
    heading: "step_1.heading",
    description: "step_1.description",
    image: step_1_img,
  },
  {
    heading: "step_2.heading",
    description: "step_2.description",
    image: step_2_img,
  },
  {
    heading: "step_3.heading",
    description: "step_3.description",
    image: step_3_img,
  },
  {
    heading: "step_4.heading",
    description: "step_4.description",
    image: step_4_img,
  },
  {
    heading: "step_5.heading",
    description: "step_5.description",
    image: step_5_img,
  },
  {
    heading: "step_6.heading",
    description: "step_6.description",
    image: step_6_img,
  },
];

const Section10: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_10");
  const t_common = useTranslations("common");
  const t_id = useTranslations("home_page.section_ids");

  return (
    <section
      id={t_id("design_process")}
      className="relative bg-white pb-[200px] after:content-[url('/home-page/section-7-bottom-background.png')] after:left-0 after:bottom-[-7px] after:absolute after:z-[2]"
    >
      <ContentContainer>
        <p className="text-center mb-4 font-semibold text-primary text-lg">
          {t("sub_heading")}
        </p>
        <CustomHeading2 t={t} type_1 customClassname="text-center" />

        <div className="relative">
          <Image
            src={arrow_top}
            alt="Top Arrow"
            className="left-1/2 -translate-x-[100%] top-0 absolute"
          />

          {stepsData.map((step, index) => (
            <div key={index} className="flex items-center relative mb-[170px]">
              <div
                className={cn(
                  index % 2 === 0 ? "order-1" : "order-2",
                  "w-1/2 pl-[100px] pr-[80px]"
                )}
              >
                <p className="text-[50px] font-bold mb-[10px] text-primary">
                  {t_common("step") + " " + (index + 1)}
                  <span className="text-secondary">.</span>
                </p>

                <p className="text-[25px] leading-[1.2] font-bold text-primary mb-[10px]">
                  {t(step.heading)}
                </p>

                <p className="text-sm leading-6">{t(step.description)}</p>
              </div>

              <div
                className={cn(
                  index % 2 === 0 ? "order-2" : "order-1",
                  "pr-[100px] pl-[80px] flex-1"
                )}
              >
                <Image
                  src={step.image}
                  alt={step.heading}
                  width={401}
                  height={347}
                  className={cn(
                    index % 2 === 0 ? "order-2" : "order-1",
                    "object-cover rounded-[30px] shadow-[2px_2px_79px_rgba(0,2,72,0.13)] flex-1"
                  )}
                />
              </div>

              {index < stepsData.length - 1 && (
                <Image
                  src={arrow_step}
                  alt="Step Arrow"
                  className={cn("absolute bottom-0 left-1/2")}
                  style={{
                    transform:
                      index % 2 !== 0
                        ? "rotateY(180deg) translateX(50%) translateY(calc(100% - 25px))"
                        : "translateX(-60%) translateY(calc(100% - 25px))",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section10;
