import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import Image from 'next/image';
import img from '@/public/travel-page/section-1-img.webp';
import { ChevronDownIcon } from 'lucide-react';

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_1');

  return (
    <section id={t('id')}>
      <div className="relative w-full bg-[url('/travel-page/section-1-bg.webp')] bg-no-repeat bg-center bg-cover pt-[10%]">
        <ContentContainer>
          <Reveal customClassname="text-white text-center mx-auto">
            <h1 className="text-3xl md:text-4xl xl:text-[50px] sm:!leading-[1.2] font-bold">
              {t.rich('heading', {
                bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
                br: () => <br />,
              })}
            </h1>
          </Reveal>

          <Reveal customClassname="mt-10 w-fit mx-auto">
            <ChevronDownIcon className="w-10 h-10 text-white" />
          </Reveal>
        </ContentContainer>

        <div className="relative aspect-[2.25] mt-12">
          <Image
            src={img}
            alt="Thiết kế website du lịch"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <ContentContainer>
        <div className="text-sm leading-7 md:text-lg md:leading-9 text-center">
          <p className="mb-4">
            {t.rich('paragraph_1', {
              bold: (chunks: any) => <strong>{chunks}</strong>,
            })}
          </p>

          <p>{t('paragraph_2')}</p>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section1;
