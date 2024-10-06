'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import SectionForm from '../customer-form/section-form';

interface Props {}

const Section12: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_12');

  return (
    <>
      <section id={t('id')} className="relative bg-white pb-[100px]">
        <ContentContainer
          maxWidth="xl:max-w-[1000px] max-w-[92%]"
          customClassName="xl:pt-[65px] pt-[50px] xl:pb-10 pb-5 xl:px-[100px] px-6 rounded-[25px] bg-white bg-[url('/interior-page/form-bg.jpeg')] bg-no-repeat bg-center bg-cover"
        >
          <div className="mb-10">
            <h2 className="section-heading-2 font-bold mb-5 text-white text-center">
              {t.rich('heading', {
                bold: (chunks: any) => (
                  <>
                    <strong>{chunks}</strong>
                    <br />
                  </>
                ),
              })}
            </h2>
            <Reveal>
              <p className="text-sm leading-7 md:text-lg md:leading-9 text-center text-white">
                {t('description')}
              </p>
            </Reveal>
          </div>

          <SectionForm type="type_3" />
        </ContentContainer>
      </section>
    </>
  );
};

export default Section12;
