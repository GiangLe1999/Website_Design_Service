import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import background from '@/public/ecommerce-page/thiet-ke-website-ban-hang-chuyen-nghiep.webp';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';
import CustomHeading2 from '../custom-heading-2';
import img_1 from '@/public/ecommerce-page/section-5-reason-1.jpeg';
import img_2 from '@/public/ecommerce-page/section-5-reason-2.jpeg';
import img_3 from '@/public/ecommerce-page/section-5-reason-3.jpeg';
import img_4 from '@/public/ecommerce-page/section-5-reason-4.jpeg';
import img_5 from '@/public/ecommerce-page/section-5-reason-5.jpeg';
import img_6 from '@/public/ecommerce-page/section-5-reason-6.jpeg';
import img_7 from '@/public/ecommerce-page/section-5-reason-7.jpeg';
import img_8 from '@/public/ecommerce-page/section-5-reason-8.jpeg';
import { CircleCheckBigIcon } from 'lucide-react';

const reasonsData = [
  {
    heading: 'reason_1.heading',
    description: 'reason_1.description',
    image: img_1,
  },
  {
    heading: 'reason_2.heading',
    description: 'reason_2.description',
    image: img_2,
  },
  {
    heading: 'reason_3.heading',
    description: 'reason_3.description',
    image: img_3,
  },
  {
    heading: 'reason_4.heading',
    description: 'reason_4.description',
    image: img_4,
  },
  {
    heading: 'reason_5.heading',
    description: 'reason_5.description',
    image: img_5,
  },
  {
    heading: 'reason_6.heading',
    description: 'reason_6.description',
    image: img_6,
  },
  {
    heading: 'reason_7.heading',
    description: 'reason_7.description',
    image: img_7,
  },
  {
    heading: 'reason_8.heading',
    description: 'reason_8.description',
    image: img_8,
  },
];

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('ecommerce_page.section_5');

  return (
    <section id={t('id')} className="pt-[100px]">
      <ContentContainer>
        <CustomHeading2 t={t} type_5 customClassname="text-center" />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-8">
          {reasonsData.map((item, index) => (
            <Reveal
              customClassname="text-center relative p-6 border rounded-md shadow-md"
              key={index}
            >
              <div className="h-[200px] w-full flex items-end mb-8">
                <Image src={item.image} alt={t(item.heading)} className="mx-auto" />
              </div>
              <p className="text-xl font-bold mb-3 text-[#666666]">{t(item.heading)}</p>
              <p className="text-muted-foreground text-sm leading-7">
                {t.rich(item.description, {
                  bold: (chunks: any) => <strong>{chunks}</strong>,
                })}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="lg:flex items-center gap-10 mt-10">
          <Reveal customClassname="text-muted-foreground lg:w-[48%] w-full lg:mb-0 mb-14">
            <ul className="space-y-5 md:leading-7 leading-7 md:text-base text-sm">
              <li className="flex items-start gap-2">
                <CircleCheckBigIcon className="mt-[6px] w-4 h-4 text-emerald-500 shrink-0" />
                <p>
                  {t.rich('reason_9', {
                    bold: (chunks: any) => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>

              <li className="flex items-start gap-2">
                <CircleCheckBigIcon className="mt-[6px] w-4 h-4 text-emerald-500 shrink-0" />
                <p>
                  {t.rich('reason_10', {
                    bold: (chunks: any) => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>

              <li className="flex items-start gap-2">
                <CircleCheckBigIcon className="mt-[6px] w-4 h-4 text-emerald-500 shrink-0" />
                <p>
                  {t.rich('reason_11', {
                    bold: (chunks: any) => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>

              <li className="flex items-start gap-2">
                <CircleCheckBigIcon className="mt-[6px] w-4 h-4 text-emerald-500 shrink-0" />
                <p>
                  {t.rich('reason_12', {
                    bold: (chunks: any) => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>

              <li className="flex items-start gap-2">
                <CircleCheckBigIcon className="mt-[6px] w-4 h-4 text-emerald-500 shrink-0" />
                <p>
                  {t.rich('reason_13', {
                    bold: (chunks: any) => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>

              <li className="flex items-start gap-2">
                <CircleCheckBigIcon className="mt-[6px] w-4 h-4 text-emerald-500 shrink-0" />
                <p>
                  {t.rich('reason_14', {
                    bold: (chunks: any) => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>
            </ul>

            <Reveal customClassname="flex sm:flex-row flex-col items-center gap-[14px] mt-8">
              <ConsultButtton type_5 />
              <CallButton type_5 />
            </Reveal>
          </Reveal>

          <div className="flex flex-1 items-center gap-6 relative z-[1]">
            <div className="w-1/2 shrink-0">
              <Reveal customClassname="flex flex-col items-center justify-center p-8 shadow-md border rounded-md mb-6">
                <span className="font-bold text-[#E3172F] md:text-[70px] text-[45px]">2+</span>
                <p className="font-semibold md:text-base text-sm text-muted-foreground leading-7 text-center">
                  {t('reason_15')}
                </p>
              </Reveal>

              <Reveal customClassname="flex flex-col items-center justify-center p-8 shadow-md border rounded-md">
                <span className="font-bold text-[#E3172F] md:text-[70px] text-[45px]">100+</span>
                <p className="font-semibold md:text-base text-sm text-muted-foreground leading-7 text-center">
                  {t('reason_16')}
                </p>
              </Reveal>
            </div>

            <div className="flex flex-1 shrink-0 flex-col items-center justify-center shadow-md border p-8 rounded-md">
              <span className="font-bold text-[#E3172F] md:text-[70px] text-[45px]">10+</span>
              <p className="font-semibold md:text-base text-sm text-muted-foreground leading-7 text-center">
                {t('reason_17')}
              </p>
            </div>
          </div>
        </div>
      </ContentContainer>

      <Reveal customClassname="w-full aspect-[3.39] relative mt-[120px] z-[1]">
        <Image
          src={background}
          alt="thiet-ke-website-ban-hang"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>
    </section>
  );
};

export default Section5;
