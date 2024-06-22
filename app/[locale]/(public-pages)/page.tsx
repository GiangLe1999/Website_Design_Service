import Section1 from "@/components/home-page/section-1";
import Section2 from "@/components/home-page/section-2";
import Section3 from "@/components/home-page/section-3";
import Section4 from "@/components/home-page/section-4";
import Section5 from "@/components/home-page/section-5";
import { unstable_setRequestLocale } from "next-intl/server";
import multipleSectionBg from "@/public/home-page/through-multiple-sections-bg.jpg";
import section4Bg from "@/public/home-page/section-4-background.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Section6 from "@/components/home-page/section-6";
import Section7 from "@/components/home-page/section-7";

interface Props {
  params: {
    locale: string;
  };
}

const HomePage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("home_page.section_ids");
  return (
    <section id={t("design_service")}>
      <div className="relative w-screen">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        <div className="absolute bottom-0 w-full z-[-1] flex justify-center">
          <Image
            src={multipleSectionBg}
            alt="Through multiple section background"
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-0 w-full flex justify-center">
          <Image
            src={section4Bg}
            alt="Section 4 background"
            className="object-cover"
          />
        </div>
      </div>

      <Section5 />
      <Section6 />
      <Section7 />
    </section>
  );
};

export default HomePage;
