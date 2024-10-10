import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import img_1 from '@/public/ecommerce-page/website-1.jpg';
import img_2 from '@/public/ecommerce-page/website-2.jpg';
import img_3 from '@/public/ecommerce-page/website-3.jpg';
import img_4 from '@/public/ecommerce-page/website-4.jpg';
import img_5 from '@/public/ecommerce-page/website-5.jpg';
import img_6 from '@/public/ecommerce-page/website-6.jpg';
import img_7 from '@/public/ecommerce-page/website-7.jpg';
import img_8 from '@/public/ecommerce-page/website-8.jpg';
import img_9 from '@/public/ecommerce-page/website-9.jpg';
import img_10 from '@/public/ecommerce-page/website-10.jpeg';
import img_11 from '@/public/ecommerce-page/website-11.jpg';
import img_12 from '@/public/ecommerce-page/website-12.jpg';
import img_13 from '@/public/ecommerce-page/website-13.jpg';
import img_14 from '@/public/ecommerce-page/website-14.jpg';
import img_15 from '@/public/ecommerce-page/website-15.jpg';
import img_16 from '@/public/ecommerce-page/website-16.jpg';
import img_17 from '@/public/ecommerce-page/website-17.jpg';
import img_18 from '@/public/ecommerce-page/website-18.jpg';
import img_19 from '@/public/ecommerce-page/website-19.jpg';
import img_20 from '@/public/ecommerce-page/website-20.jpg';
import img_21 from '@/public/ecommerce-page/website-21.jpg';
import img_22 from '@/public/ecommerce-page/website-22.jpg';
import img_23 from '@/public/ecommerce-page/website-23.jpg';
import img_24 from '@/public/ecommerce-page/website-24.jpeg';

const websitesData = [
  { cate: 'website_1.cate', name: 'website_1.name', image: img_1 },
  { cate: 'website_2.cate', name: 'website_2.name', image: img_2 },
  { cate: 'website_3.cate', name: 'website_3.name', image: img_3 },
  { cate: 'website_4.cate', name: 'website_4.name', image: img_4 },
  { cate: 'website_5.cate', name: 'website_5.name', image: img_5 },
  { cate: 'website_6.cate', name: 'website_6.name', image: img_6 },
  { cate: 'website_7.cate', name: 'website_7.name', image: img_7 },
  { cate: 'website_8.cate', name: 'website_8.name', image: img_8 },
  { cate: 'website_9.cate', name: 'website_9.name', image: img_9 },
  { cate: 'website_10.cate', name: 'website_10.name', image: img_10 },
  { cate: 'website_11.cate', name: 'website_11.name', image: img_11 },
  { cate: 'website_12.cate', name: 'website_12.name', image: img_12 },
  { cate: 'website_13.cate', name: 'website_13.name', image: img_13 },
  { cate: 'website_14.cate', name: 'website_14.name', image: img_14 },
  { cate: 'website_15.cate', name: 'website_15.name', image: img_15 },
  { cate: 'website_16.cate', name: 'website_16.name', image: img_16 },
  { cate: 'website_17.cate', name: 'website_17.name', image: img_17 },
  { cate: 'website_18.cate', name: 'website_18.name', image: img_18 },
  { cate: 'website_19.cate', name: 'website_19.name', image: img_19 },
  { cate: 'website_20.cate', name: 'website_20.name', image: img_20 },
  { cate: 'website_21.cate', name: 'website_21.name', image: img_21 },
  { cate: 'website_22.cate', name: 'website_22.name', image: img_22 },
  { cate: 'website_23.cate', name: 'website_23.name', image: img_23 },
  { cate: 'website_24.cate', name: 'website_24.name', image: img_24 },
];

interface Props {}

const Section3: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('ecommerce_page.section_6');

  return (
    <section id={t('id')} className="sm:mt-[-150px] md:mt-[-250px] mt-[-600px] relative z-0">
      <div className="relative w-full bg-[url('/ecommerce-page/section-6-bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="sm:pt-[350px] md:pt-[400px] pt-[700px] sm:pb-[350px] pb-[400px]">
          <ContentContainer maxWidth="max-w-[1000px]">
            <CustomHeading2 t={t} type_5 customClassname="text-center text-white" />
          </ContentContainer>

          <ContentContainer customClassName="mt-10">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-10">
              {websitesData.map((item, index) => (
                <Reveal
                  key={index}
                  customClassname="group flex flex-col items-center justify-center text-white"
                >
                  <div className="w-full h-[400px] overflow-hidden rounded-md relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto group-hover:-translate-y-[calc(100%-400px)] transition-all duration-2000 ease-in-out"
                    />
                    <div className="absolute transition-opacity duration-2000 opacity-100 group-hover:opacity-0 left-0 right-0 bottom-0 h-[160px] bg-[linear-gradient(to_top,#010f37_0,rgba(1,15,57,0)_100%)] rounded-b-md"></div>
                  </div>
                  <p className="text-center mt-4">{t(item.cate)}</p>
                  <p className="font-extrabold mt-2 text-2xl text-center">{t(item.name)}</p>
                </Reveal>
              ))}
            </div>
          </ContentContainer>
        </div>
      </div>
    </section>
  );
};

export default Section3;
