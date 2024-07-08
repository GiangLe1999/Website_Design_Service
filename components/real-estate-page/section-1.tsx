import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import background from '@/public/real-estate-page/thiet-ke-website-bat-dong-san.webp';
import demo from '@/public/real-estate-page/thiet-ke-website-bds-chuyen-nghiep.webp';
import ContentContainer from '../content-container';
import Reveal from '../reveal';

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_1');

  return (
    <section
      id={t('id')}
      className='bg-[url("/real-estate-page/thiet-ke-website-bat-dong-san.webp")] bg-center bg-cover'
    >
      <div className="relative">
        <Image src={background} alt={t('section_1_bg')} className="w-full aspect-[1.46]" priority />
        <div className="absolute bottom-[5%] left-0 right-0 z-[1]">
          <ContentContainer>
            <div className="flex items-center">
              <Reveal customClassname="text-white w-1/2">
                <p className="section-heading-2 mb-5">
                  {t.rich('heading', {
                    bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
                  })}
                </p>

                <p className="text-sm leading-7 md:text-lg md:leading-8 xl:text-xl xl:leading-9">
                  {t.rich('description', {
                    bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
                  })}
                </p>
              </Reveal>

              <Reveal customClassname="w-1/2">
                <Image
                  src={demo}
                  alt={t('section_1_demo')}
                  className="lg:w-[1200px] w-full max-w-none"
                  priority
                  quality={100}
                />
              </Reveal>
            </div>
          </ContentContainer>
        </div>
      </div>
    </section>
  );
};

export default Section1;
