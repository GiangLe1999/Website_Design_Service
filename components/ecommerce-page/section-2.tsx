import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import background from '@/public/ecommerce-page/thiet-ke-web-ban-hang.png';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';
import { Link } from '@/app/navigation';
import CustomHeading2 from '../custom-heading-2';

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('ecommerce_page.section_2');

  return (
    <section id={t('id')} className="pt-[80px]">
      <ContentContainer>
        <CustomHeading2 t={t} type_5 customClassname="text-center" />
        <ContentContainer maxWidth="max-w-[900px]">
          <Reveal>
            <p className="text-sm leading-7 md:text-lg md:leading-9 xl:text-xl xl:leading-10 relative text-center">
              {t.rich('paragraph_1', {
                bold: (chunks: any) => <strong>{chunks}</strong>,
                a: (chunks: any) => (
                  <Link
                    href={'/thiet-ke-website-ban-hang'}
                    className="hover:text-dark_blue hover:underline transition"
                  >
                    <strong>{chunks}</strong>
                  </Link>
                ),
              })}
            </p>
          </Reveal>

          <div className="text-sm leading-7 text-center space-y-3 !mt-5">
            <Reveal>
              <p>
                {t.rich('paragraph_2', {
                  bold: (chunks: any) => <strong>{chunks}</strong>,
                })}
              </p>
            </Reveal>

            <Reveal>
              <p>
                {t.rich('paragraph_3', {
                  bold: (chunks: any) => <strong>{chunks}</strong>,
                })}
              </p>
            </Reveal>

            <Reveal>
              <p>{t('paragraph_4')}</p>
            </Reveal>

            <Reveal>
              <p>
                {t.rich('paragraph_5', {
                  bold: (chunks: any) => <strong>{chunks}</strong>,
                  i: (chunks: any) => <i>{chunks}</i>,
                })}
              </p>
            </Reveal>

            <Reveal>
              <p>{t('paragraph_6')}</p>
            </Reveal>
          </div>
        </ContentContainer>
      </ContentContainer>

      <Reveal customClassname="w-full aspect-[3.14] relative mt-[60px]">
        <Image
          src={background}
          alt="thiet-ke-website-ban-hang"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      <ContentContainer>
        <Reveal customClassname="flex sm:flex-row flex-col items-center justify-center gap-[14px] mt-10">
          <ConsultButtton type_5 />
          <CallButton type_5 />
        </Reveal>
      </ContentContainer>
    </section>
  );
};

export default Section2;
