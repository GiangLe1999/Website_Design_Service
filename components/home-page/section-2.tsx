import { FC } from "react";
import ContentContainer from "../content-container";
import { useTranslations } from "next-intl";
import CustomHeading2 from "../custom-heading-2";

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_2");
  return (
    <div className="pb-[70px] bg-gradient-to-b from-[#f3ebe9] to-[#ebf1ef]">
      <ContentContainer maxWidth="max-w-[1040px]">
        <CustomHeading2 t={t} type_1 />

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
