import SectionContainer from "@/components/section-container";
import { useLocale, useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { FC } from "react";
import computer from "@/public/home-page/thiet-ke-website-tpbmt.png";

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  const t = useTranslations("home_page.section_1");

  return (
    <section id={t("id")}>
      <div className="bg-[#fef6e2] pt-[200px] pb-[110px]">
        <div className="container">
          <div className="text-center">
            <h1 className="text-6xl font-bold leading-[1.2] mb-5">
              <span className="text-primary">{t("heading_1_part_1")}</span>
              <br />
              <span className="text-secondary">
                {t("heading_1_part_2")}
              </span> -{" "}
              <span className="text-primary">{t("heading_1_part_3")}</span>
            </h1>

            <SectionContainer
              maxWidth="max-w-[840px]"
              customClassName="space-y-6 text-xl leading-10"
            >
              <p>
                {t.rich("paragraph_1", {
                  bold: (chunks) => (
                    <strong className="text-primary">{chunks}</strong>
                  ),
                })}
              </p>

              <p>
                {t.rich("paragraph_2", {
                  italic: (chunks) => <i className="text-primary">{chunks}</i>,
                })}
              </p>

              <p>{t("paragraph_3")}</p>
            </SectionContainer>
          </div>
        </div>
      </div>

      <div className="bg-[url('/home-page/section-1-background.webp')] bg-cover bg-no-repeat bg-[center_center]">
        <div className="container">
          <Image
            src={computer}
            alt="Thiết kế website TP.Buôn Ma Thuột"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
