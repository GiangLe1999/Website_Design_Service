import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import demo from '@/public/interior-page/thiet-ke-website-kien-truc-noi-that.webp';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import bg from '@/public/interior-page/section-2-bg.webp';
import CustomHeading2 from '../custom-heading-2';
import { Link } from '@/app/navigation';
import phone from '@/public/interior-page/thiet-ke-website-noi-that-chuyen-nghiep.png';
import icon1 from '@/public/interior-page/icon1-4.png';
import icon2 from '@/public/interior-page/icon2-4.png';
import icon3 from '@/public/interior-page/icon3-3-1.png';
import icon4 from '@/public/interior-page/icon4-3.png';
import icon5 from '@/public/interior-page/icon5-1.png';
import icon6 from '@/public/interior-page/icon6.png';

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_2');

  return (
    <section id={t('id')} className="relative">
      <div className="absolute top-[-100px] md:top-[-300px] left-0 right-0 w-full aspect-[1.9]">
        <Image src={bg} alt="section_bg" sizes="100vw" fill className="object-cover" />
      </div>

      <div className="md:pt-[180px] pt-[100px] bg-gradient-to-b from-[#FFF6E5] to-[#FFF6E5]">
        <ContentContainer customClassName="relative z-[10]">
          <Reveal>
            <CustomHeading2 t={t} type_4 customClassname="text-center" />
          </Reveal>

          <Reveal>
            <p className="text-sm leading-7 xl:text-xl xl:leading-10 mb-5 text-[#666666]">
              {t.rich('paragraph_1', {
                bold: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </Reveal>

          <div className="space-y-3 text-[#666666] xl:text-base text-sm leading-7">
            <Reveal>
              <p>
                {t.rich('paragraph_2', {
                  bold: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </Reveal>

            <Reveal>
              <p>
                {t.rich('paragraph_3', {
                  a: (chunks) => (
                    <Link href="/thiet-ke-website-noi-that" className="font-bold">
                      {chunks}
                    </Link>
                  ),
                  bold: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </Reveal>

            <Reveal>
              <p>
                {t.rich('paragraph_4', {
                  bold: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </Reveal>
          </div>
        </ContentContainer>
      </div>

      <div className="bg-gradient-to-b from-[#FFF6E5] to-[#FFFFFF] md:pt-[80px] pt-10">
        <ContentContainer>
          <div className="relative mx-auto max-w-[846px]">
            <div className="w-full relative aspect-[1.108]">
              <Image
                src={phone}
                alt="thiet-ke-website-noi-that-chuyen-nghiep"
                sizes="100vw"
                fill
                className="mx-auto object-cover"
              />

              <Reveal customClassname="absolute top-[-3%] left-[10%] z-[1] md:block hidden">
                <Image src={icon1} alt="icon-1" width={213} height={210} />
              </Reveal>

              <Reveal customClassname="absolute top-[-10%] right-[30%] z-[1] md:block hidden">
                <Image src={icon2} alt="icon-2" width={176} height={173} />
              </Reveal>

              <Reveal customClassname="absolute top-[9.5%] right-[25%] z-[1] md:block hidden">
                <Image src={icon3} alt="icon-3" width={167} height={166} />
              </Reveal>

              <Reveal customClassname="absolute top-[11%] right-[5%] z-[1] md:block hidden">
                <Image src={icon4} alt="icon-4" width={176} height={173} />
              </Reveal>

              <Reveal customClassname="absolute top-[32%] right-[13%] z-[1] md:block hidden">
                <Image src={icon5} alt="icon-5" width={189} height={189} />
              </Reveal>

              <Reveal customClassname="absolute bottom-[27%] right-[3%] z-[1] md:block hidden">
                <Image src={icon6} alt="icon-6" width={168} height={166} />
              </Reveal>
            </div>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
};

export default Section2;
