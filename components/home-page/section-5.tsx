import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";
import ContentContainer from "../content-container";
import background from "@/public/home-page/section-5-background.png";
import whyNeedWebsite from "@/public/home-page/tai-sao-can-thiet-ke-website.webp";

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t1 = useTranslations("home_page.section_ids");
  const t2 = useTranslations("home_page.section_5");
  return (
    <section id={t1("why_needed")} className="w-screen relative -mt-[380px]">
      <div className="absolute top-0 w-full z-[1]">
        <Image
          src={background}
          alt="Section 5 background"
          className="object-cover"
        />
      </div>

      <ContentContainer customClassName="flex items-center relative z-[10]">
        <div className="w-1/2">
          <h2>{t2("heading")}</h2>
        </div>

        <div className="flex-1">
          {/* <Image src={whyNeedWebsite} alt="Why need website" /> */}
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section5;
