import { FC } from "react";
import { useTranslations } from "next-intl";
import bfContent from "@/public/home-page/bf_content.png";
import afterContent from "@/public/home-page/after_content.png";
import Image from "next/image";
import ContentContainer from "../content-container";

interface Props {}

const Section4: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_4");
  return (
    <div className="w-screen relative bg-[#f1f1f1] pt-[110px]">
      <ContentContainer maxWidth="max-w-[1040px] z-[1] relative pb-[110px]">
        <p className="relative text-xl leading-10 mb-10">
          {t.rich("paragraph_1", {
            bold: (chunks) => (
              <strong className="text-primary">{chunks}</strong>
            ),
          })}

          <Image
            src={bfContent}
            className="absolute -top-4 left-0 translate-x-[calc(-100%_-_25px)]"
            width={86}
            height={60}
            alt="Before content character"
          />

          <Image
            src={afterContent}
            className="absolute -bottom-2 right-0 translate-x-[calc(100%_+_10px)]"
            width={86}
            height={61}
            alt="After content character"
          />
        </p>

        <div className="space-y-[18.5px]">
          <p className="text-sm leading-6">
            {t.rich("paragraph_2", {
              bold: (chunks) => (
                <strong className="text-primary">{chunks}</strong>
              ),
            })}
          </p>

          <p className="text-sm leading-6">
            {t.rich("paragraph_3", {
              bold: (chunks) => (
                <strong className="text-primary">{chunks}</strong>
              ),
            })}
          </p>

          <p className="text-sm leading-6">
            {t.rich("paragraph_4", {
              bold: (chunks) => (
                <strong className="text-primary">{chunks}</strong>
              ),
            })}
          </p>
        </div>
      </ContentContainer>

      <div className="bg-[url('/home-page/section-4-background.webp')] h-[464px] bg-cover bg-left-bottom"></div>
    </div>
  );
};

export default Section4;
