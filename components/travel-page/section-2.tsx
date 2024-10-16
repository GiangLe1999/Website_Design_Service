import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import Image from 'next/image';
import img1 from '@/public/travel-page/section-2-img-1.png';
import img2 from '@/public/travel-page/section-2-img-2.png';
import CustomHeading2 from '../custom-heading-2';

interface Props {}

const Section1: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('travel_page.section_2');

  return (
    <section id={t('id')} className="mt-[100px]">
      <ContentContainer>
        <Reveal>
          <CustomHeading2 t={t} type_6 customClassname="text-center" />
        </Reveal>

        <div className="relative aspect-[2.03] mt-12">
          <Image
            src={img2}
            alt="Thiết kế website du lịch chuyên nghiệp"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section1;
