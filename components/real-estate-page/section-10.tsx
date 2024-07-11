'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import CustomHeading2 from '../custom-heading-2';
import Reveal from '../reveal';
import SectionForm from '../customer-form/section-form';

interface Props {}

const Section10: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_10');

  return (
    <>
      <section id={t('id')} className="relative bg-white pb-[150px]">
        <ContentContainer
          maxWidth="xl:max-w-[1000px] max-w-[92%]"
          customClassName="xl:pt-[95px] pt-[50px] xl:pb-10 pb-5 xl:px-[100px] px-6 rounded-[25px] bg-white shadow-[0_0_40px_rgba(0,50,82,0.09)]"
        >
          <div className="mb-10">
            <CustomHeading2 customClassname="text-center mb-2" t={t} type_2 />
            <Reveal>
              <p className="text-sm leading-7 md:text-lg md:leading-9 text-center">
                {t('description')}
              </p>
            </Reveal>
          </div>

          <SectionForm type="type_2" />
        </ContentContainer>
      </section>
    </>
  );
};

export default Section10;
