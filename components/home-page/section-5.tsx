import Image from 'next/image';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import ContentContainer from '../content-container';
import whyNeedWebsite from '@/public/home-page/tai-sao-nen-thiet-ke-website.webp';
import CustomHeading2 from '../custom-heading-2';
import Reveal from '../reveal';

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_5');
  return (
    <div className="bg-gradient-to-b from-[#f3eae8] to-[#fcf9f8]">
      <ContentContainer customClassName="md:flex items-center gap-16 sm:pt-10 lg:pt-0">
        <div className="md:w-1/2 w-full">
          <CustomHeading2 t={t} type_1 />

          <Reveal>
            <div className="text-sm leading-6 space-y-5">
              <p>
                {t.rich('paragraph_1', {
                  bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>

              <p>{t('paragraph_2')}</p>

              <p>
                {t.rich('paragraph_3', {
                  bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>

              <p>{t('paragraph_4')}</p>
            </div>
          </Reveal>
        </div>

        <div className="flex-1">
          <Reveal>
            <Image src={whyNeedWebsite} alt="Why need website" />
          </Reveal>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Section5;
