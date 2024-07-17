import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import { Link } from '@/app/navigation';
import Reveal from '../reveal';
import Image from 'next/image';
import quote from '@/public/real-estate-page/quote-characters.png';
import dash from '@/public/real-estate-page/dash-shape.png';
import main_img from '@/public/real-estate-page/thiet-ke-web-bat-dong-san.webp';
import left_corner from '@/public/real-estate-page/section-2-left-img.png';
import right_corner from '@/public/real-estate-page/section-2-right-img.png';

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_2');
  return (
    <section id={t('id')} className="pt-[60px] mb-[100px] relative">
      <Reveal customClassname="absolute left-[-20%] bottom-[30%] 2xl:block hidden">
        <Image src={left_corner} alt="Left corner" />
      </Reveal>
      <Reveal customClassname="absolute right-[-20%] top-[15%] 2xl:block hidden">
        <Image src={right_corner} alt="Right corner" />
      </Reveal>

      <ContentContainer maxWidth="max-w-[1060px]">
        <Reveal customClassname="relative mb-16">
          <p className="text-dark_blue text-3xl md:text-4xl xl:text-[50px] sm:!leading-[1.2] font-bold lg:mb-4 mb-2 text-center">
            {t('sapo_heading')}
          </p>
          <p className="text-sm leading-7 md:text-lg md:leading-9 xl:text-xl xl:leading-10 relative text-center">
            {t.rich('sapo', {
              bold: (chunks: any) => <strong>{chunks}</strong>,
              link: (chunks: any) => (
                <Link
                  href={'/thiet-ke-website-bat-dong-san'}
                  className="hover:text-dark_blue hover:underline transition"
                >
                  <strong>{chunks}</strong>
                </Link>
              ),
            })}
          </p>

          <Reveal customClassname="absolute lg:block hidden xl:left-[-9%] left-[-3%] top-[-5%]">
            <Image src={quote} alt="Before quote" />
          </Reveal>

          <Reveal customClassname="absolute lg:block hidden xl:right-[-9%] right-[-3%] bottom-[-20%]">
            <Image src={quote} alt="After quote" className="rotate-180" />
          </Reveal>
        </Reveal>

        <Reveal customClassname="mb-12">
          <Image src={dash} alt="Dash" className="mx-auto" />
        </Reveal>

        <div>
          <Reveal>
            <p className="bds-sub-heading">{t('sub_heading')}</p>
          </Reveal>
          <Reveal>
            <h1 className="text-center section-heading-2 text-dark_blue mb-6">
              {t.rich('heading', {
                bold: (chunks: any) => <strong className="font-extrabold">{chunks}</strong>,
              })}
            </h1>
          </Reveal>
          <Reveal customClassname="text-center text-sm leading-7 space-y-3">
            <p>{t('paragraph_1')}</p>
            <p>
              {t.rich('paragraph_2', {
                bold: (chunks: any) => <strong>{chunks}</strong>,
              })}
            </p>
          </Reveal>

          <Reveal>
            <Image alt={t('main_img')} src={main_img} width={1024} height={711} quality={100} />
          </Reveal>

          <div className="text-sm leading-7 space-y-3">
            <Reveal>
              {t.rich('paragraph_3', {
                bold: (chunks: any) => <strong>{chunks}</strong>,
              })}
            </Reveal>
            <Reveal>{t('paragraph_4')}</Reveal>
            <Reveal>{t('paragraph_5')}</Reveal>
            <Reveal>{t('paragraph_6')}</Reveal>
            <Reveal>
              {t.rich('paragraph_7', {
                link: (chunks: any) => (
                  <Link href={'/'} className="hover:text-dark_blue hover:underline transition">
                    <strong>{chunks}</strong>
                  </Link>
                ),
              })}
            </Reveal>
            <Reveal>
              {t.rich('paragraph_8', {
                bold: (chunks: any) => <strong>{chunks}</strong>,
              })}
            </Reveal>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section2;
