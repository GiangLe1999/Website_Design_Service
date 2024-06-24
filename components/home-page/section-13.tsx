import { useTranslations } from "next-intl";
import { FC } from "react";
import CustomHeading2 from "../custom-heading-2";
import ContentContainer from "../content-container";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import ConsultButtton from "../consult-button";

interface Props {}
const basicSuitableWith = [
  "basic_type.suitable_with_1",
  "basic_type.suitable_with_2",
  "common.features",
  "basic_type.effect",
  "common.framework",
];

const premiumSuitableWith = [
  "premium_type.suitable_with_1",
  "premium_type.suitable_with_2",
  "common.features",
  "premium_type.effect",
  "common.framework",
];

const included_items = [
  "included_1",
  "included_2",
  "included_3",
  "included_4",
  "included_5",
  "included_6",
  "included_7",
  "included_8",
  "included_9",
];

const Section13: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_13");
  const t_id = useTranslations("home_page.section_ids");

  return (
    <section
      id={t_id("website_pricing")}
      className="relative bg-gradient-to-b from-[#f0eff9] to-[#f7f2ed] pt-[150px] pb-[60px]"
    >
      <ContentContainer>
        <div className="flex items-center gap-16">
          <div className="w-[60%] grid grid-cols-2 gap-8">
            <PriceBlock
              t={t}
              iconLink="/home-page/gia-goi-basic.svg"
              iconWidth={34.5}
              iconHeight={24}
              iconAlt="Giá gói basic"
              typeTitle="BASIC TYPE"
              headingTitle={t("basic_type.heading")}
              priceFrom="2.000.000"
              suitableWithArr={basicSuitableWith}
            />

            <PriceBlock
              t={t}
              iconLink="/home-page/gia-goi-premium.svg"
              iconWidth={52.5}
              iconHeight={24}
              iconAlt="Giá gói premium"
              typeTitle="PREMIUM TYPE"
              headingTitle={t("premium_type.heading")}
              priceFrom="5.000.000"
              suitableWithArr={premiumSuitableWith}
            />
          </div>
          <div className="flex-1">
            <CustomHeading2 t={t} type_1 />
            <p className="text-sm leading-6">{t("description")}</p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

interface PriceBlockProps {
  t: any;
  iconLink: string;
  iconWidth: number;
  iconHeight: number;
  iconAlt: string;
  typeTitle: string;
  headingTitle: string;
  priceFrom: string;
  suitableWithArr: string[];
}

const PriceBlock: FC<PriceBlockProps> = ({
  t,
  iconLink,
  iconWidth,
  iconHeight,
  iconAlt,
  typeTitle,
  headingTitle,
  priceFrom,
  suitableWithArr,
}) => {
  return (
    <div className="rounded-[20px] shadow-[2px_2px_30px_rgba(0,28,24,0.13)] bg-white p-6 mb-6">
      {/* Type */}
      <p className="flex items-center gap-2 border-b pb-4">
        <Image
          src={iconLink}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
        <span className="font-bold text-primary text-xl line-clamp-1">
          {typeTitle}
        </span>
      </p>

      {/* Giá từ */}
      <h3 className="font-semibold mt-4 mb-2">{headingTitle}</h3>
      <span className="text-xs text-[#516f90]">{t("common.price_from")}:</span>
      <p className="text-4xl text-secondary font-bold border-b pb-4">
        {priceFrom}
        <span className="text-sm relative -top-5">₫</span>
      </p>

      {/* Phù hợp với */}
      <p className="text-xs text-[#516f90] mt-5 mb-3">
        {t("common.suitable_with")}:
      </p>
      <ul className="text-xs space-y-3 mt-1 border-b pb-5 leading-5">
        {suitableWithArr.map((item) => (
          <li className="flex items-start gap-2" key={item}>
            <CircleCheckBig className="w-3 h-3 text-emerald-600 shrink-0 mt-1" />
            <span>{t(item)}</span>
          </li>
        ))}
      </ul>

      {/* Tính năng */}
      <p className="text-xs text-[#516f90] mt-5 mb-3">
        {t("common.included")}:
      </p>
      <ul className="text-xs space-y-3 mt-1 border-b pb-5 leading-5">
        {included_items.map((item) => (
          <li className="flex items-start gap-2" key={item}>
            <CircleCheckBig className="w-3 h-3 text-emerald-600 shrink-0 mt-1" />
            <span>{t(`common.${item}`)}</span>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <ConsultButtton type_1 className="mt-6" />
      </div>
    </div>
  );
};

export default Section13;
