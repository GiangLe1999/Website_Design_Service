'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import img_1 from '@/public/ecommerce-page/reason-1.jpeg';
import img_2 from '@/public/ecommerce-page/reason-2.jpeg';
import img_3 from '@/public/ecommerce-page/reason-3.jpeg';
import img_4 from '@/public/ecommerce-page/reason-4.jpeg';
import img_5 from '@/public/ecommerce-page/reason-5.png';
import img_6 from '@/public/ecommerce-page/reason-6.png';
import img_7 from '@/public/ecommerce-page/reason-7.png';
import img_8 from '@/public/ecommerce-page/reason-8.png';
import { cn } from '@/lib/utils';
import arrow from '@/public/ecommerce-page/img_steps.png';

interface Props {}

const reasonsData = [
  {
    heading: 'reason_1.heading',
    description: 'reason_1.description',
    image: img_1,
    pb: '250px',
    bt: '20px',
  },
  {
    heading: 'reason_2.heading',
    description: 'reason_2.description',
    image: img_2,
    pb: '280px',
    bt: '10px',
  },
  {
    heading: 'reason_3.heading',
    description: 'reason_3.description',
    image: img_3,
    pb: '220px',
    bt: '-32px',
  },
  {
    heading: 'reason_4.heading',
    description: 'reason_4.description',
    image: img_4,
    pb: '180px',
    bt: '-44px',
  },
  {
    heading: 'reason_5.heading',
    description: 'reason_5.description',
    image: img_5,
    pb: '160px',
    bt: '-32px',
  },
  {
    heading: 'reason_6.heading',
    description: 'reason_6.description',
    image: img_6,
    pb: '130px',
    bt: '-65px',
  },
  {
    heading: 'reason_7.heading',
    description: 'reason_7.description',
    image: img_7,
    pb: '160px',
    bt: '-16px',
  },
  {
    heading: 'reason_8.heading',
    description: 'reason_8.description',
    image: img_8,
    bt: '-32px',
  },
];

const Section3: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('ecommerce_page.section_3');
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth <= 1280);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id={t('id')} className="pt-[100px]">
      <ContentContainer maxWidth="max-w-[1000px]">
        <CustomHeading2 t={t} type_5 customClassname="text-center" />
      </ContentContainer>

      <ContentContainer>
        <div>
          {reasonsData.map((reason, index) => (
            <div
              className="relative xl:flex items-center justify-between gap-16"
              style={isLarge ? { paddingBottom: '40px' } : { paddingBottom: reason.pb }}
              key={index}
            >
              <Reveal
                customClassname={cn(
                  'flex-1',
                  index % 2 === 0 ? 'order-1' : 'order-2',
                  'xl:w-1/2 xl:mb-0 mb-12'
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#E3172F] font-bold sm:text-[75px] text-[50px]">
                    0{index + 1}.
                  </span>
                  <h3 className="font-bold sm:text-2xl text-lg">{t(reason.heading)}</h3>
                </div>
                <p className="sm:leading-7 leading-7 sm:text-base text-sm text-muted-foreground">
                  {t.rich(reason.description, {
                    bold: (chunks: any) => <strong>{chunks}</strong>,
                  })}
                </p>
              </Reveal>

              <Reveal customClassname={cn('flex-1', index % 2 === 0 ? 'order-2' : 'order-1')}>
                <Image
                  src={reason.image}
                  alt={t(reason.heading)}
                  className={index % 2 === 0 ? 'xl:ml-auto' : ''}
                />
              </Reveal>

              {index !== 7 && (
                <Reveal
                  customClassname="xl:block hidden absolute left-1/3 w-[347px] aspect-[1.49]"
                  style={{ bottom: reason.bt }}
                >
                  <Image
                    src={arrow}
                    alt="arrow"
                    sizes="100vw"
                    fill
                    className={cn('object-cover', index % 2 !== 0 && '[transform:rotateY(180deg)]')}
                  />
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section3;
