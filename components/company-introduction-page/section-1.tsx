import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import ConsultButtton from '../consult-button';
import img from '@/public/company-introduction-page/thiet-ke-website-gioi-thieu-doanh-nghiep.webp';
import company_1 from '@/public/company-introduction-page/company-1.png';
import company_2 from '@/public/company-introduction-page/company-2.svg';
import company_3 from '@/public/company-introduction-page/company-3.webp';
import company_4 from '@/public/company-introduction-page/company-4.webp';
import Image from 'next/image';

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('company_introduction_page.section_1');

  return (
    <section id={t('id')} className="relative bg-[#0053d4] pt-[160px]">
      <video
        className="absolute w-full aspect-video mix-blend-soft-light object-[top_-5.208rem_right_0px] pointer-events-none top-0"
        src="/company-introduction-page/website-gioi-thieu-doanh-nghiep.mp4"
        playsInline
        autoPlay
        loop
        muted
      ></video>

      <ContentContainer>
        <Reveal>
          <h1 className="text-white">
            {t.rich('heading', {
              big: (chunks: any) => (
                <span className="text-5xl font-extrabold leading-tight">{chunks}</span>
              ),
              small: (chunks: any) => <span className="text-xl font-semibold">{chunks}</span>,
              br: () => <br />,
            })}
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-sm leading-7 text-white mt-4 max-w-[500px]">{t('description')}</p>
        </Reveal>

        <Reveal>
          <ConsultButtton type_2 className="mt-6" />
        </Reveal>
      </ContentContainer>

      <Reveal customClassname="relative aspect-[1.385] after:bg-[linear-gradient(180deg,rgba(0,83,212,0)_0%,#0053d4_100%)] after:content-[''] after:absolute after:w-full after:h-[300px] after:top-0 after:z-0">
        <Image
          src={img}
          alt="Thiết kế website giới thiệu doanh nghiệp"
          fill
          className="object-cover z-[1]"
          sizes="100vw"
        />

        <Reveal customClassname="w-[87px] aspect-square rounded-full grid place-items-center absolute top-[20%] left-[10%] bg-white z-[1] animate-bounce">
          <Image src={company_1} alt="Công ty 1" width={70} height={25} />
        </Reveal>

        <Reveal customClassname="w-[87px] aspect-square rounded-full grid place-items-center absolute top-[29%] left-[25%] bg-white z-[1] animate-bounce">
          <Image src={company_2} alt="Công ty 2" width={55} height={25} />
        </Reveal>

        <Reveal customClassname="w-[87px] aspect-square rounded-full grid place-items-center absolute top-[5%] right-[15%] bg-white z-[1] animate-bounce">
          <Image src={company_3} alt="Công ty 3" width={60} height={25} />
        </Reveal>

        <Reveal customClassname="w-[87px] aspect-square rounded-full grid place-items-center absolute bottom-[30%] right-[15%] bg-white z-[1] animate-bounce">
          <Image src={company_4} alt="Công ty 4" width={67} height={25} />
        </Reveal>
      </Reveal>
    </section>
  );
};

export default Section1;
