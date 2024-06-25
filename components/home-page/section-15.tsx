import { useTranslations } from "next-intl";
import { FC } from "react";
import CustomHeading2 from "../custom-heading-2";
import ContentContainer from "../content-container";

interface Props {}

const Section15: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_15");
  const t_id = useTranslations("home_page.section_ids");
  return (
    <section id={t_id("knowledge")} className="relative bg-white pb-[150px]">
      <ContentContainer>
        <CustomHeading2 customClassname="text-center" t={t} type_1 />
        <p className="text-center">{t("sub_heading")}</p>
      </ContentContainer>
    </section>
  );
};

export default Section15;
