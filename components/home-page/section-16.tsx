'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import CustomHeading2 from '../custom-heading-2';
import ContentContainer from '../content-container';
import { ContactInfo } from './section-11';
import Section16Form from '../customer-form/section-16-form';
import Reveal from '../reveal';

interface Props {}

const Section16: FC<Props> = (props): JSX.Element => {
  const t_id = useTranslations('home_page.section_ids');
  const t = useTranslations('home_page.section_16');

  return (
    <>
      <section id={t_id('quote')} className="relative bg-white pb-[150px]">
        <ContentContainer
          maxWidth="xl:max-w-[1000px] max-w-[92%]"
          customClassName="xl:pt-[95px] pt-[50px] xl:pb-10 pb-5 xl:px-[100px] px-6 rounded-[25px] bg-white shadow-[0_0_40px_rgba(0,50,82,0.09)]"
        >
          <div className="mb-10">
            <CustomHeading2 customClassname="text-center" t={t} type_1 />
            <Reveal>
              <p className="text-center mb-2 md:text-base text-sm">{t('sub_heading_1')}</p>
              <p className="text-center mb-2 md:text-base text-sm">{t('sub_heading_2')}</p>
            </Reveal>

            <ContactInfo />
          </div>

          <Section16Form />
        </ContentContainer>
      </section>
    </>
  );
};

export default Section16;
