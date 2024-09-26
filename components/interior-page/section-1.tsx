import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import demo from '@/public/interior-page/thiet-ke-website-kien-truc-noi-that.webp';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import footer_bg from '@/public/interior-page/section-1-footer-bg.webp';

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_1');

  return (
    <section
      id={t('id')}
      className="md:pt-[150px] pt-[100px] bg-[url('/interior-page/thiet-ke-web-noi-that.jpeg')] bg-cover w-full aspect-[1.85]"
    >
      {/* <Image
        src={background}
        alt={t('section_1_bg')}
        className="w-full aspect-[1.46] 2xl:brightness-[1] brightness-[0.5]"
        priority
      /> */}

      <ContentContainer customClassName="relative z-[10]">
        <Reveal>
          <h1 className="text-[#ce9e57] text-3xl xl:text-5xl xl:leading-[1.2] mb-5 text-center mt-10">
            {t.rich('heading', {
              bold: (chunks: any) => (
                <>
                  <strong className="font-extrabold">{chunks}</strong>
                  <br></br>
                </>
              ),
            })}
          </h1>
        </Reveal>

        <Reveal customClassname="relative aspect-[2.05] bottom-[-50px]">
          <Image
            src={demo}
            alt={t('section_1_demo')}
            priority
            quality={100}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="z-[50]"
          />
        </Reveal>
      </ContentContainer>
    </section>
  );
};

export default Section1;
