import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";
import ContentContainer from "../content-container";
import background from "@/public/home-page/section-5-background.png";
import whyNeedWebsite from "@/public/home-page/tai-sao-nen-thiet-ke-website.webp";

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t1 = useTranslations("home_page.section_ids");
  const t2 = useTranslations("home_page.section_5");
  return (
    <section id={t1("why_needed")} className="w-screen relative -mt-[380px]">
      <div className="absolute top-0 w-full z-[1] flex justify-center">
        <Image
          src={background}
          alt="Section 5 background"
          className="object-cover"
        />
      </div>
      <ContentContainer customClassName="flex items-center relative z-[10] gap-16">
        <div className="w-1/2">
          <h2 className="text-[50px] font-bold leading-[1.2] mb-5 text-primary mt-[50px]">
            {t2("heading")}
          </h2>

          <div className="text-sm leading-6 space-y-5">
            <p>
              {t2.rich("paragraph_1", {
                bold: (chunks) => (
                  <strong className="text-primary">{chunks}</strong>
                ),
              })}
            </p>

            <p>{t2("paragraph_2")}</p>

            <p>
              {t2.rich("paragraph_3", {
                bold: (chunks) => (
                  <strong className="text-primary">{chunks}</strong>
                ),
              })}
            </p>

            <p>{t2("paragraph_4")}</p>
          </div>
        </div>

        <div className="flex-1">
          <Image src={whyNeedWebsite} alt="Why need website" />
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section5;
