import { FC } from "react";
import ContentContainer from "../content-container";
import { useTranslations } from "next-intl";

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_2");
  return (
    <div className="pb-[70px]">
      <ContentContainer maxWidth="max-w-[1040px]">
        <h2 className="text-[50px] font-bold leading-[1.2] mb-5">
          <span className="text-primary">{t("heading_part_1")}</span>{" "}
          <span className="text-secondary">{t("heading_part_2")}</span>
        </h2>

        <p className="text-xl leading-10 mb-5">
          {t.rich("paragraph_1", {
            bold: (chunks) => (
              <strong className="text-primary">{chunks}</strong>
            ),
          })}
        </p>

        <div className="grid grid-cols-2 gap-5 text-sm leading-6">
          <p>
            {t.rich("paragraph_2", {
              bold: (chunks) => (
                <strong className="text-primary">{chunks}</strong>
              ),
            })}
          </p>

          <p>
            {t.rich("paragraph_3", {
              bold: (chunks) => (
                <strong className="text-primary">{chunks}</strong>
              ),
            })}
          </p>

          <p>{t("paragraph_4")}</p>
          <p>{t("paragraph_5")}</p>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Section2;