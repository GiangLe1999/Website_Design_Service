'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import SectionForm from '../customer-form/section-form';
import Image from 'next/image';
import img from '@/public/ecommerce-page/dich-vu-lam-web-ban-hang-form.png';
import bg from '@/public/ecommerce-page/section_8_footer.png';
import CustomHeading2 from '../custom-heading-2';

interface Props {}

const Section8: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('ecommerce_page.section_8');

  return (
    <section id={t('id')} className="relative pb-[100px]">
      <ContentContainer>
        <div className="lg:flex items-center gap-20">
          <Reveal customClassname="lg:w-1/2 md:w-[80%] w-full mx-auto relative aspect-[1.13] lg:mb-0 mb-10">
            <Image
              src={img}
              alt="Báo giá Thiết kế website bán hàng"
              className="object-cover"
              fill
              sizes="100vw"
            />
          </Reveal>
          <div className="flex-1 shrink-0">
            <div className="mb-4">
              <CustomHeading2 t={t} type_5 customClassname="mb-1 lg:text-left text-center" />
              <Reveal>
                <p className="leading-7 text-muted-foreground lg:text-left text-center lg:mb-0 mb-8">
                  {t('description')}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10">
              <SectionForm type="type_4" />
            </div>
          </div>
        </div>
      </ContentContainer>

      <Image src={bg} alt="bg" className="w-full absolute bottom-0" />
    </section>
  );
};

export default Section8;
