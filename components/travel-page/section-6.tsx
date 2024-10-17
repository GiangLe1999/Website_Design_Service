import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import img_1 from '@/public/travel-page/website-1.jpg';
import img_2 from '@/public/travel-page/website-2.jpg';
import img_3 from '@/public/travel-page/website-3.jpg';
import img_4 from '@/public/travel-page/website-4.jpg';
import img_5 from '@/public/travel-page/website-5.jpg';
import img_6 from '@/public/travel-page/website-6.jpg';
import img_7 from '@/public/travel-page/website-7.jpg';
import img_8 from '@/public/travel-page/website-8.webp';
import bg_top from '@/public/travel-page/section-3-bg-top.webp';

const websitesData = [
  { name: 'website_1', image: img_1 },
  { name: 'website_2', image: img_2 },
  { name: 'website_3', image: img_3 },
  { name: 'website_4', image: img_4 },
  { name: 'website_5', image: img_5 },
  { name: 'website_6', image: img_6 },
  { name: 'website_7', image: img_7 },
  { name: 'website_8', image: img_8 },
];

interface Props {}

const Section6: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_6');

  return (
    <section id={t('id')} className="py-10 relative">
      <ContentContainer>
        <CustomHeading2 t={t} type_6 customClassname="text-center" />

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-10 mt-10">
          {websitesData.map((item, index) => (
            <Reveal key={index} customClassname="group flex flex-col items-center justify-center">
              <div className="w-full h-[400px] overflow-hidden rounded-md border shadow-md relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto group-hover:-translate-y-[calc(100%-400px)] transition-all duration-2000 ease-in-out"
                />
                <div className="absolute transition-opacity duration-2000 opacity-100 group-hover:opacity-0 left-0 right-0 bottom-0 h-[160px] bg-[linear-gradient(to_top,#010f37_0,rgba(1,15,57,0)_100%)] rounded-b-md"></div>
              </div>
              <p className="font-extrabold mt-2 text-center">{t(item.name)}</p>
            </Reveal>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section6;
