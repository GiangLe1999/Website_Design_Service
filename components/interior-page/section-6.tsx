'use client';

import { FC, useMemo, useState } from 'react';
import ContentContainer from '../content-container';
import { useTranslations } from 'next-intl';
import background from '@/public/home-page/section-7-background.png';
import Image from 'next/image';
import IconTab1 from '@/public/interior-page/icon1-5.png';
import IconTab2 from '@/public/interior-page/icon2-5.png';
import IconTab3 from '@/public/interior-page/icon3-2-1.png';
import IconTab4 from '@/public/interior-page/icon4-4.png';
import IconTab5 from '@/public/interior-page/icon5-2.png';

import { cn } from '@/lib/utils';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';
import CustomHeading2 from '../custom-heading-2';
import Reveal from '../reveal';

interface TabContent {
  id: string;
  number: string;
  heading: string;
  description: string;
}

const tabsIconData = [
  { id: 'tab_1', icon: IconTab1, left: '1.6%', bottom: '40%' },
  { id: 'tab_2', icon: IconTab2, left: '16.3%', bottom: '76%' },
  { id: 'tab_3', icon: IconTab3, left: '45.5%', bottom: '93.5%' },
  { id: 'tab_4', icon: IconTab4, left: '75.3%', bottom: '76%' },
  { id: 'tab_5', icon: IconTab5, left: '90%', bottom: '40%' },
];

const tabsContentData: TabContent[] = [
  {
    id: 'tab_1',
    number: '01',
    heading: 'criteria_1.heading',
    description: 'criteria_1.description',
  },
  {
    id: 'tab_2',
    number: '02',
    heading: 'criteria_2.heading',
    description: 'criteria_2.description',
  },
  {
    id: 'tab_3',
    number: '03',
    heading: 'criteria_3.heading',
    description: 'criteria_3.description',
  },
  {
    id: 'tab_4',
    number: '04',
    heading: 'criteria_4.heading',
    description: 'criteria_4.description',
  },
  {
    id: 'tab_5',
    number: '05',
    heading: 'criteria_5.heading',
    description: 'criteria_5.description',
  },
];

interface Props {}

const Section6: FC<Props> = (): JSX.Element => {
  const t = useTranslations('interior_page.section_6');
  const [currentTab, setCurrentTab] = useState('tab_1');

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
    <section id={t('id')} className="relative py-[90px]">
      <ContentContainer>
        <CustomHeading2 t={t} type_4 customClassname="text-center" />
      </ContentContainer>
      <ContentContainer maxWidth="max-w-[900px] xl:mb-[110px] mb-10">
        <Reveal customClassname="text-[#666666]">
          <div className="text-center text-sm leading-7 md:text-base md:leading-8 xl:text-lg xl:leading-9">
            <p className="mb-5">
              {t.rich('paragraph_1', {
                bold: (chunks) => <strong className="text-black">{chunks}</strong>,
              })}
            </p>
            <p className="mb-5">
              {t.rich('paragraph_2', {
                bold: (chunks) => <strong className="text-black">{chunks}</strong>,
              })}
            </p>
            <p>
              {t.rich('paragraph_3', {
                bold: (chunks) => <strong className="text-black">{chunks}</strong>,
              })}
            </p>
          </div>
        </Reveal>
      </ContentContainer>

      <ContentContainer maxWidth="max-w-[1140px] relative">
        <Image src={background} alt="Section 7 ellipses background" className="xl:block hidden" />

        <ul className="xl:block hidden">
          {tabsIconData.map(({ id, icon, left, bottom }) => (
            <li
              key={id}
              onClick={() => handleTabClick(id)}
              className={cn(
                'transition cursor-pointer absolute grid place-items-center w-[95px] aspect-square shadow-[0_17px_54px_rgba(0,7,52,0.1)] z-[9] rounded-[50%]',
                currentTab === id
                  ? 'bg-gradient-to-r from-[#daaa60] to-[#8d5520] scale-110'
                  : 'bg-[#fff9f9]'
              )}
              style={{ left, bottom }}
            >
              <Reveal>
                <Image
                  src={icon}
                  alt={`Tab icon ${id}`}
                  className={id === currentTab ? 'brightness-0 invert-[1]' : 'transition'}
                />
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className="xl:hidden flex items-center justify-center gap-3 flex-wrap mb-10">
          {tabsIconData.map(({ id, icon }) => (
            <li
              key={id}
              onClick={() => handleTabClick(id)}
              className={cn(
                'transition cursor-pointer grid place-items-center w-[70px] aspect-square shadow-[2px_2px_79px_rgba(0,1,52,0.13)] z-[9] rounded-[50%]',
                currentTab === id ? 'bg-gradient-to-r from-[#daaa60] to-[#8d5520]' : 'bg-[#fff9f9]'
              )}
            >
              <Reveal customClassname="w-1/2">
                <Image
                  src={icon}
                  alt={`Tab icon ${id}`}
                  className={id === currentTab ? 'brightness-0 invert-[1]' : 'transition'}
                />
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-center xl:absolute w-[90%] md:w-[600px] mx-auto xl:left-1/2 xl:-translate-x-1/2 xl:top-[55%] xl:-translate-y-1/2 z-[9]">
          <Reveal>
            <p className="font-bold xl:text-[60px] text-5xl leading-none">
              <span className="text-[#B78343]">{activeTab?.number}</span>
              <span className="text-[#666666]">.</span>
            </p>
          </Reveal>

          <Reveal>
            <h3 className="lg:text-3xl text-2xl text-[#666666] font-bold">
              {t(activeTab?.heading)}
            </h3>
          </Reveal>

          <Reveal customClassname="text-[#666666] space-y-3 leading-8">
            {t.rich(activeTab?.description, {
              p: (chunks) => <p>{chunks}</p>,
              bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
            })}
          </Reveal>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section6;
