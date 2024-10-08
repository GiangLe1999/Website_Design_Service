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
import img_1 from '@/public/ecommerce-page/section-5-reason-1.jpeg';
import img_2 from '@/public/ecommerce-page/section-5-reason-2.jpeg';
import img_3 from '@/public/ecommerce-page/section-5-reason-3.jpeg';
import img_4 from '@/public/ecommerce-page/section-5-reason-4.jpeg';
import img_5 from '@/public/ecommerce-page/section-5-reason-5.jpeg';
import img_6 from '@/public/ecommerce-page/section-5-reason-6.jpeg';
import img_7 from '@/public/ecommerce-page/section-5-reason-7.jpeg';
import img_8 from '@/public/ecommerce-page/section-5-reason-8.jpeg';

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
      </ContentContainer>
    </section>
  );
};

export default Section5;
