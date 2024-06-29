import { FC } from 'react';
import { useTranslations } from 'next-intl';
import bfContent from '@/public/home-page/bf_content.png';
import afterContent from '@/public/home-page/after_content.png';
import Image from 'next/image';
import ContentContainer from '../content-container';
import background from '@/public/home-page/section-4-background-thing.webp';
import Reveal from '../reveal';

interface Props {}

const Section4: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_4');
  return (
    <div className="w-screen relative bg-gradient-to-b from-[#ebf1ef] to-[#f3eae8] sm:pt-20 pt-10">
      <ContentContainer maxWidth="max-w-[1040px] z-[1] relative md:pb-10 lg:pb-[110px] pb-0">
        <Reveal>
          <p className="relative text-sm leading-7 xl:text-xl xl:leading-10 xl:mb-10 mb-5">
            {t.rich('paragraph_1', {
              bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
            })}

            <Image
              src={bfContent}
              className="absolute -top-4 left-0 translate-x-[calc(-100%_-_25px)] xl:block hidden"
              width={86}
              height={60}
              alt="Before content character"
            />

            <Image
              src={afterContent}
              className="absolute -bottom-2 right-0 translate-x-[calc(100%_+_10px)] xl:block hidden"
              width={86}
              height={61}
              alt="After content character"
            />
          </p>
        </Reveal>

        <Reveal>
          <div className="space-y-[18.5px]">
            <p className="text-sm leading-6">
              {t.rich('paragraph_2', {
                bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>

            <p className="text-sm leading-6">
              {t.rich('paragraph_3', {
                bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>

            <p className="text-sm leading-6">
              {t.rich('paragraph_4', {
                bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
          </div>
        </Reveal>
      </ContentContainer>

      <Reveal>
        <div className="flex items-center justify-center h-[464px]">
          <Image src={background} alt="Section 4 background" />
        </div>
      </Reveal>
    </div>
  );
};

export default Section4;
