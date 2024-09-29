import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import topQuote from '@/public/interior-page/bg_top_content.png';
import bottomQuote from '@/public/interior-page/after_top_content.png';

interface Props {}

const Section3: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_3');

  return (
    <section id={t('id')} className="pt-[150px]">
      <ContentContainer>
        <Reveal customClassname="relative">
          <CustomHeading2 t={t} type_4 />
          <p className="text-sm leading-7 xl:text-xl xl:leading-10 mb-5 text-[#666666]">
            {t('paragraph_1')}
          </p>
          <Image
            src={topQuote}
            alt="top_quote"
            className="absolute top-[7%] left-[-12%] lg:block hidden"
          />
          <Image
            src={bottomQuote}
            alt="top_quote"
            className="absolute bottom-[-5%] right-[-12%] lg:block hidden"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm leading-7 text-[#666666]">
          <Reveal>
            <p>{t('paragraph_2')}</p>
          </Reveal>

          <Reveal>
            <p>{t('paragraph_3')}</p>
          </Reveal>

          <Reveal>
            <p>
              {t.rich('paragraph_4', {
                bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
          </Reveal>

          <Reveal>
            <p>
              {t.rich('paragraph_5', {
                bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
          </Reveal>

          <Reveal>
            <p>
              {t.rich('paragraph_6', {
                bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
          </Reveal>

          <Reveal>
            <p>
              {t.rich('paragraph_7', {
                bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
          </Reveal>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section3;
