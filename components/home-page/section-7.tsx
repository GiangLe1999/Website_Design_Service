"use client";

import { FC, useMemo, useState } from "react";
import ContentContainer from "../content-container";
import { useTranslations } from "next-intl";
import background from "@/public/home-page/section-7-background.png";
import Image from "next/image";
import IconTab1 from "@/public/home-page/tab-icon-1.png";
import IconTab2 from "@/public/home-page/tab-icon-2.png";
import IconTab3 from "@/public/home-page/tab-icon-3.png";
import IconTab4 from "@/public/home-page/tab-icon-4.png";
import IconTab5 from "@/public/home-page/tab-icon-5.png";
import IconTab6 from "@/public/home-page/tab-icon-6.png";
import IconTab7 from "@/public/home-page/tab-icon-7.png";
import IconTab8 from "@/public/home-page/tab-icon-8.png";
import { cn } from "@/lib/utils";
import ConsultButtton from "../consult-button";
import CallButton from "../call-button";

interface TabContent {
  id: string;
  number: string;
  heading: string;
  description: string;
}

const tabsIconData = [
  { id: "tab_1", icon: IconTab1, left: "-3%", bottom: "13%" },
  { id: "tab_2", icon: IconTab2, left: "0", bottom: "42%" },
  { id: "tab_3", icon: IconTab3, left: "9%", bottom: "68%" },
  { id: "tab_4", icon: IconTab4, left: "24%", bottom: "86%" },
  { id: "tab_5", icon: IconTab5, left: "45%", bottom: "93%" },
  { id: "tab_6", icon: IconTab6, right: "25%", bottom: "85.8%" },
  { id: "tab_7", icon: IconTab7, right: "8.2%", bottom: "65%" },
  { id: "tab_8", icon: IconTab8, right: "-1%", bottom: "38%" },
];

const tabsContentData: TabContent[] = [
  {
    id: "tab_1",
    number: "01",
    heading: "criteria_1.heading",
    description: "criteria_1.description",
  },
  {
    id: "tab_2",
    number: "02",
    heading: "criteria_2.heading",
    description: "criteria_2.description",
  },
  {
    id: "tab_3",
    number: "03",
    heading: "criteria_3.heading",
    description: "criteria_3.description",
  },
  {
    id: "tab_4",
    number: "04",
    heading: "criteria_4.heading",
    description: "criteria_4.description",
  },
  {
    id: "tab_5",
    number: "05",
    heading: "criteria_5.heading",
    description: "criteria_5.description",
  },
  {
    id: "tab_6",
    number: "06",
    heading: "criteria_6.heading",
    description: "criteria_6.description",
  },
  {
    id: "tab_7",
    number: "07",
    heading: "criteria_7.heading",
    description: "criteria_7.description",
  },
  {
    id: "tab_8",
    number: "08",
    heading: "criteria_8.heading",
    description: "criteria_8.description",
  },
];

interface Props {}

const Section7: FC<Props> = (): JSX.Element => {
  const t = useTranslations("home_page.section_7");
  const t_id = useTranslations("home_page.section_ids");
  const [currentTab, setCurrentTab] = useState("tab_1");

  const activeTab = useMemo(
    () => tabsContentData.find((tab) => tab.id === currentTab),
    [currentTab]
  );

  const handleTabClick = (id: string) => {
    if (currentTab !== id) {
      setCurrentTab(id);
    }
  };

  return (
    <section
      id={t_id("website_criteria")}
      className="relative bg-gradient-to-b from-[#fff9f8] to-[#f3eae8] after:content-[url('/home-page/section-7-bottom-background.png')] after:left-0 after:bottom-[-7px] after:absolute after:z-[2] pb-[88px]"
    >
      <ContentContainer maxWidth="max-w-[900px] mb-[110px]">
        <h2 className="text-[50px] font-bold leading-[1.2] mb-5 text-primary text-center">
          {t.rich("heading", {
            orange: (chunks) => (
              <span className="text-secondary">{chunks}</span>
            ),
          })}
        </h2>
        <div className="leading-8 text-center text-lg">
          <p>{t("paragraph_1")}</p>
          <p>
            {t.rich("paragraph_2", {
              bold: (chunks) => (
                <strong className="text-primary">{chunks}</strong>
              ),
            })}
          </p>
        </div>
      </ContentContainer>

      <ContentContainer maxWidth="max-w-[1140px] relative">
        <Image src={background} alt="Section 7 ellipses background" />

        <ul>
          {tabsIconData.map(({ id, icon, left, bottom, right }) => (
            <li
              key={id}
              onClick={() => handleTabClick(id)}
              className={cn(
                "transition cursor-pointer absolute grid place-items-center w-[95px] aspect-square shadow-[2px_2px_79px_rgba(0,1,52,0.13)] z-[9] rounded-[50%]",
                currentTab === id ? "bg-secondary scale-110" : "bg-[#fff9f9]"
              )}
              style={{ left, bottom, right }}
            >
              <Image
                src={icon}
                alt={`Tab icon ${id}`}
                className={
                  id === currentTab ? "brightness-0 invert-[1]" : "transition"
                }
              />
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-center absolute w-[600px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]">
          <p className="font-bold text-[60px] leading-none">
            <span className="text-primary">{activeTab?.number}</span>
            <span className="text-secondary">.</span>
          </p>
          <h3 className="text-[35px] text-primary">{t(activeTab?.heading)}</h3>
          <p className="text-sm leading-6">
            {t.rich(activeTab?.description, {
              bold: (chunks) => (
                <strong className="text-primary">{chunks}</strong>
              ),
            })}
          </p>

          <div className="flex items-center justify-center gap-[14px] !mt-10">
            <ConsultButtton type_1 />
            <CallButton type_1 />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section7;
