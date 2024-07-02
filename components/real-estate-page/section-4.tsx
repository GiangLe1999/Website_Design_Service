'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import main_img from '@/public/real-estate-page/thiet-ke-web-bds-gia-re.webp';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';

const activeDotClassname =
  'bg-dark_blue relative after:absolute after:w-[50px] after:h-[50px] after:top-[-13px] after:left-[-13px] after:rounded-full after:content-[""] after:bg-[#024e7e40] transition';

interface Props {}

const Section4: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_4');
  const [activeType, setActiveType] = useState('type_1');

  return (
    <section id={t('id')} className="pb-[200px]">
      <ContentContainer>
        <Reveal>
          <p className="text-center uppercase text-xl text-[#777777] mb-5 font-semibold">
            {t('sub_heading')}
          </p>
        </Reveal>

        <CustomHeading2 t={t} type_2 customClassname="text-center" />
        <Reveal>
          <p className="text-sm leading-7 md:text-lg md:leading-9 text-center">
            {t.rich('description', {
              bold: (chunks: any) => <strong>{chunks}</strong>,
            })}
          </p>
        </Reveal>

        <div className="relative">
          <Reveal>
            <Image
              alt={t('main_img')}
              src={main_img}
              width={935}
              height={859}
              quality={100}
              className="mx-auto my-8"
            />
          </Reveal>

          {/* Type 1 */}
          <Reveal customClassname="absolute left-[12.4%] top-[40%]">
            <button
              onClick={() => setActiveType('type_1')}
              type="button"
              className={cn(
                activeType === 'type_1' ? activeDotClassname : 'bg-white',
                'border border-[#87a5b0] w-[25px] h-[25px] rounded-full'
              )}
            ></button>
          </Reveal>
          <Reveal customClassname="absolute left-[-4%] top-[36.5%] w-[160px]">
            <h3 className="text-lg text-dark_blue font-semibold">{t('type_1.legend')}</h3>
          </Reveal>

          {/* Type 2 */}
          <Reveal customClassname="absolute left-[14.7%] bottom-[30%]">
            <button
              onClick={() => setActiveType('type_2')}
              type="button"
              className={cn(
                activeType === 'type_2' ? activeDotClassname : 'bg-white',
                'border border-[#87a5b0] w-[25px] h-[25px] rounded-full'
              )}
            ></button>
          </Reveal>
          <Reveal customClassname="absolute left-[-4%] bottom-[29%] w-[175px]">
            <h3 className="text-lg text-dark_blue font-semibold">{t('type_2.legend')}</h3>
          </Reveal>

          {/* Type 3 */}
          <Reveal customClassname="absolute right-[15%] top-[30%]">
            <button
              onClick={() => setActiveType('type_3')}
              type="button"
              className={cn(
                activeType === 'type_3' ? activeDotClassname : 'bg-white',
                'border border-[#87a5b0] w-[25px] h-[25px] rounded-full'
              )}
            ></button>
          </Reveal>
          <Reveal customClassname="absolute right-[-7%] top-[26.5%] w-[200px]">
            <h3 className="text-lg text-dark_blue font-semibold">{t('type_3.legend')}</h3>
          </Reveal>

          {/* Type 4 */}
          <Reveal customClassname="absolute right-[13.2%] bottom-[38%]">
            <button
              onClick={() => setActiveType('type_4')}
              type="button"
              className={cn(
                activeType === 'type_4' ? activeDotClassname : 'bg-white',
                'border border-[#87a5b0] w-[25px] h-[25px] rounded-full'
              )}
            ></button>
          </Reveal>
          <Reveal customClassname="absolute right-[-7%] bottom-[35.5%] w-[200px]">
            <h3 className="text-lg text-dark_blue font-semibold">{t('type_4.legend')}</h3>
          </Reveal>

          <div className="bg-white max-w-[615px] absolute bottom-[-18%] left-1/2 -translate-x-1/2 text-center z-[1]">
            <Reveal>
              <h4 className="font-extrabold text-xl mb-4">{t(`${activeType}.heading`)}</h4>
            </Reveal>
            <Reveal>
              <p className="text-sm leading-7">
                {t.rich(`${activeType}.description`, {
                  bold: (chunks: any) => <strong>{chunks}</strong>,
                  italic: (chunks: any) => <i>{chunks}</i>,
                })}
              </p>
            </Reveal>

            <Reveal customClassname="flex sm:flex-row flex-col items-center justify-center gap-[14px] mt-10">
              <ConsultButtton type_2 />
              <CallButton type_2 />
            </Reveal>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section4;
