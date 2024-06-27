"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import CustomHeading2 from "../custom-heading-2";
import ContentContainer from "../content-container";
import { ContactInfo } from "./section-11";
import Section16Form from "../customer-form/section-16-form";

interface Props {}

const Section16: FC<Props> = (props): JSX.Element => {
  const t_id = useTranslations("home_page.section_ids");
  const t = useTranslations("home_page.section_16");

  return (
    <>
      <section id={t_id("quote")} className="relative bg-white pb-[150px]">
        <ContentContainer
          maxWidth="xl:max-w-[1000px] max-w-[90%]"
          customClassName="pt-[95px] pb-10 px-[100px] rounded-[25px] bg-white shadow-[0_0_40px_rgba(0,50,82,0.09)]"
        >
          <div className="mb-10">
            <CustomHeading2 customClassname="text-center" t={t} type_1 />
            <p className="text-center mb-2">{t("sub_heading_1")}</p>
            <p className="text-center mb-2">{t("sub_heading_2")}</p>

            <ContactInfo isSection16 />
          </div>

          <Section16Form />
        </ContentContainer>
      </section>
    </>
  );
};

export default Section16;
