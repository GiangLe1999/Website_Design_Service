import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('ecommerce_page.section_1');

  return (
    <section id={t('id')}>
      <div className="relative w-full bg-[url('/ecommerce-page/thiet-ke-website-ban-hang.jpeg')] bg-no-repeat sm:bg-center bg-[21%_50%] bg-cover lg:aspect-[2] md:aspect-[1.2] aspect-[0.7]">
        <ContentContainer>
          <div className="flex items-center">
            <Reveal customClassname="text-white xl:mt-[18%] lg:mt-[15%] md:mt-[25%] mt-[50%] md:max-w-[60%] md:text-left text-center md:mx-0 mx-auto">
              <p className="text-2xl md:text-3xl xl:text-5xl xl:leading-[1.2] md:mb-5 sm:mb-1 mb-4 font-bold">
                {t.rich('heading', {
                  bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
                })}
              </p>

              <p className="text-base leading-7 md:text-lg md:leading-8 xl:text-xl xl:leading-9 md:max-w-[80%] md:text-left text-center md:mx-0 mx-auto">
                {t('description')}
              </p>
            </Reveal>
          </div>

          <Reveal customClassname="sm:flex hidden items-center md:justify-start justify-center gap-[14px] mt-8">
            <ConsultButtton type_5 />
            <CallButton type_5 />
          </Reveal>
        </ContentContainer>
      </div>
    </section>
  );
};

export default Section1;
