import { useTranslations } from "next-intl";
import { FC } from "react";
import CustomHeading2 from "../custom-heading-2";

interface Props {}

const Section11: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_11");
  const t_id = useTranslations("home_page.section_ids");

  return (
    <section
      id={t_id("why_choose_us")}
      className="relative bg-gradient-to-b from-[#fdf6e3] to-[#f4f1f1] pb-[100px]"
    >
      <CustomHeading2 t={t} type_1 />
    </section>
  );
};

export default Section11;
