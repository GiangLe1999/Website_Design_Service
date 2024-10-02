'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import Image, { StaticImageData } from 'next/image';

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_8');

  return (
    <section id={t('id')} className="pt-[50px]">
      <ContentContainer customClassName="relative z-[10] max-w-[900px]">
        <Reveal>
          <CustomHeading2 t={t} type_4 customClassname="text-center" />
        </Reveal>

        <div className="text-center text-sm leading-7 md:text-base md:leading-8 xl:text-lg xl:leading-9">
          <Reveal>
            <p>{t('paragraph_1')}</p>
          </Reveal>

          <Reveal>
            <p>
              {t.rich('paragraph_2', {
                bold: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </Reveal>
        </div>
      </ContentContainer>

      <ContentContainer>testr</ContentContainer>
    </section>
  );
};

export default Section2;
