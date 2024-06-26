import Section1 from "@/components/home-page/section-1";
import Section2 from "@/components/home-page/section-2";
import Section3 from "@/components/home-page/section-3";
import Section4 from "@/components/home-page/section-4";
import Section5 from "@/components/home-page/section-5";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Section6 from "@/components/home-page/section-6";
import Section7 from "@/components/home-page/section-7";
import Section8 from "@/components/home-page/section-8";
import Section9 from "@/components/home-page/section-9";
import Section10 from "@/components/home-page/section-10";
import Section11 from "@/components/home-page/section-11";
import Section12 from "@/components/home-page/section-12";
import Section13 from "@/components/home-page/section-13";
import Section14 from "@/components/home-page/section-14";
import Section15 from "@/components/home-page/section-15";
import Section16 from "@/components/home-page/section-16";
import Section17 from "@/components/home-page/section-17";

interface Props {
  params: {
    locale: string;
  };
}

const HomePage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("home_page.section_ids");
  return (
    <>
      <section id={t("design_service")}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </section>

      <section id={t("why_needed")}>
        <Section5 />
        <Section6 />
      </section>

      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />
    </>
  );
};

export default HomePage;
