import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";
import ContentContainer from "../content-container";
import whyNeedWebsite from "@/public/home-page/tai-sao-nen-thiet-ke-website.webp";

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_5");
  return (
    <div className="bg-gradient-to-b from-[#f3eae8] to-[#fcf9f8]">
      <ContentContainer customClassName="flex items-center gap-16">
        <div className="w-1/2">
          <h2 className="text-[50px] font-bold leading-[1.2] mb-5 text-primary">
            {t.rich("heading", {
              orange: (chunks) => (
                <span className="text-secondary">{chunks}</span>
              ),
            })}
          </h2>

          <div className="text-sm leading-6 space-y-5">
            <p>
              {t.rich("paragraph_1", {
                bold: (chunks) => (
                  <strong className="text-primary">{chunks}</strong>
                ),
              })}
            </p>

            <p>{t("paragraph_2")}</p>

            <p>
              {t.rich("paragraph_3", {
                bold: (chunks) => (
                  <strong className="text-primary">{chunks}</strong>
                ),
              })}
            </p>

            <p>{t("paragraph_4")}</p>
          </div>
        </div>

        <div className="flex-1">
          <Image src={whyNeedWebsite} alt="Why need website" />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Section5;
