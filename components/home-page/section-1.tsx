import ContentContainer from '@/components/content-container';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import computer from '@/public/home-page/thiet-ke-website-tpbmt.png';
import background from '@/public/home-page/section-1-background.webp';
import icon1 from '@/public/home-page/thiet-ke-website-wordpress.png';
import icon2 from '@/public/home-page/thiet-ke-website-chuan-seo.png';
import icon3 from '@/public/home-page/thiet-ke-website-gia-re.png';
import icon4 from '@/public/home-page/thiet-ke-website-hieu-suat-cao.png';
import icon5 from '@/public/home-page/thiet-ke-website-than-thien-voi-nguoi-dung.png';

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_1');

  return (
    <div className="bg-[#f3ebe9]">
      <div className="bg-[#fef6e2] pt-[100px] sm:pt-[150px] pb-[110px]">
        <ContentContainer maxWidth="max-w-[1300px]">
          <div className="text-center z-[1] relative">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary leading-[1.2] mb-5">
              {t.rich('heading', {
                orange: (chunks) => <span className="text-secondary">{chunks}</span>,
              })}
            </h1>

            <ContentContainer
              maxWidth="max-w-[840px]"
              customClassName="space-y-6 text-sm leading-7 md:text-lg md:leading-9 xl:text-xl xl:leading-10 relative"
            >
              <p>
                {t.rich('paragraph_1', {
                  bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>

              <p>
                {t.rich('paragraph_2', {
                  italic: (chunks) => <i className="text-primary">{chunks}</i>,
                })}
              </p>

              <p>{t('paragraph_3')}</p>
            </ContentContainer>
          </div>
        </ContentContainer>
      </div>

      <ContentContainer customClassName="relative">
        <div className="z-0 w-screen overflow-hidden flex justify-center absolute left-1/2 -translate-x-1/2 bottom-[35px]">
          <Image src={background} alt="Section 1 background" />
        </div>

        <Image
          src={computer}
          alt={t('image_1')}
          priority
          quality={100}
          className="z-[1] relative"
        />

        <Image
          src={icon1}
          alt={t('image_1')}
          width={150}
          height={150}
          className="absolute top-0 left-[18%] z-[1] md:block hidden"
        />

        <Image
          src={icon2}
          alt={t('image_2')}
          width={150}
          height={150}
          className="absolute top-[35%] left-[2%] z-[1] md:block hidden"
        />

        <Image
          src={icon3}
          alt={t('image_3')}
          width={150}
          height={150}
          className="absolute bottom-[37%] right-[7.5%] z-[1] md:block hidden"
        />

        <Image
          src={icon4}
          alt={t('image_4')}
          width={150}
          height={150}
          className="absolute bottom-[11%] left-[13.5%] z-[1] md:block hidden"
        />

        <Image
          src={icon5}
          alt={t('image_5')}
          width={61}
          height={61}
          className="absolute top-[13%] right-[29.5%] z-[1] md:block hidden"
        />
      </ContentContainer>
    </div>
  );
};

export default Section1;
