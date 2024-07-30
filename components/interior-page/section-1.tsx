import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import background from '@/public/interior-page/thiet-ke-web-noi-that.jpeg';
import demo from '@/public/interior-page/thiet-ke-website-kien-truc-noi-that.jpeg';
import ContentContainer from '../content-container';
import Reveal from '../reveal';

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_1');

  return (
    <section id={t('id')}>
      <div className="relative">
        <Image
          src={background}
          alt={t('section_1_bg')}
          className="w-full aspect-[1.46] 2xl:brightness-[1] brightness-[0.5]"
          priority
        />
        <div className="absolute 2xl:bottom-[3%] sm:bottom-1/2 bottom-[55%] translate-y-1/2 2xl:translate-y-0 left-0 right-0 z-[1]">
          <ContentContainer>
            <div className="flex items-center">
              <Reveal customClassname="text-white 2xl:w-1/2 w-full text-center xl:text-left md:max-w-[75%] md:mx-auto max-w-none">
                <p className="text-xl md:text-3xl xl:text-5xl xl:leading-[1.2] mb-5">
                  {t.rich('heading', {
                    bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
                  })}
                </p>

                <p className="text-xs leading-7 md:text-lg md:leading-8 xl:text-xl xl:leading-9">
                  {t.rich('description', {
                    bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
                  })}
                </p>
              </Reveal>

              <Reveal customClassname="w-1/2 2xl:block hidden">
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
