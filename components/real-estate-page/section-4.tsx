'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import main_img from '@/public/real-estate-page/thiet-ke-web-bds-gia-re.webp';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CallToActions from './call-to-actions';

const activeDotClassname =
  'bg-dark_blue relative after:absolute after:w-[50px] after:h-[50px] after:top-[-13px] after:left-[-13px] after:rounded-full after:content-[""] after:bg-[#024e7e40] transition';

interface Props {}

const Section4: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_4');
  const [activeType, setActiveType] = useState('type_1');

  return (
    <section id={t('id')} className="md:pt-0 pt-[50px] xl:pb-[400px] pb-[150px]">
      <ContentContainer>
        <Reveal>
          <p className="bds-sub-heading">{t('sub_heading')}</p>
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
          <div className="grid md:grid-cols-4 grid-cols-2 sm:gap-8 gap-4">
            <div className="flex flex-col items-center gap-3 xl:border-none border xl:shadow-none shadow-md xl:p-0 p-3 pt-6 xl:rounded-none rounded-md">
              <Reveal customClassname="xl:absolute left-[12.4%] top-[40%]">
                <button
                  onClick={() => setActiveType('type_1')}
                  type="button"
                  className={cn(
                    activeType === 'type_1' ? activeDotClassname : 'bg-white',
                    'border border-[#87a5b0] w-[25px] h-[25px] rounded-full'
                  )}
                ></button>
              </Reveal>
              <Reveal customClassname="xl:absolute left-[-4%] top-[36.5%] xl:w-[160px]">
                <h3 className="xl:text-lg md:text-base text-sm xl:text-left text-center text-dark_blue font-semibold">
                  {t('type_1.legend')}
                </h3>
              </Reveal>
            </div>

            {/* Type 2 */}
            <div className="flex flex-col items-center gap-3 xl:border-none border xl:shadow-none shadow-md xl:p-0 p-3 pt-6 xl:rounded-none rounded-md">
              <Reveal customClassname="xl:absolute left-[14.7%] bottom-[30%]">
                <button
                  onClick={() => setActiveType('type_2')}
                  type="button"
                  className={cn(
                    activeType === 'type_2' ? activeDotClassname : 'bg-white',
                    'border border-[#87a5b0] w-[25px] h-[25px] rounded-full'
                  )}
                ></button>
              </Reveal>
              <Reveal customClassname="xl:absolute left-[-4%] bottom-[29%] xl:w-[175px]">
                <h3 className="xl:text-lg md:text-base text-sm xl:text-left text-center text-dark_blue font-semibold">
                  {t('type_2.legend')}
                </h3>
              </Reveal>
            </div>

            {/* Type 3 */}
            <div className="flex flex-col items-center gap-3 xl:border-none border xl:shadow-none shadow-md xl:p-0 p-3 pt-6 xl:rounded-none rounded-md">
              <Reveal customClassname="xl:absolute right-[15%] top-[30%]">
                <button
                  onClick={() => setActiveType('type_3')}
                  type="button"
                  className={cn(
                    activeType === 'type_3' ? activeDotClassname : 'bg-white',
                    'border border-[#87a5b0] w-[25px] h-[25px] rounded-full'
                  )}
                ></button>
              </Reveal>
              <Reveal customClassname="xl:absolute right-[-7%] top-[26.5%] xl:w-[200px]">
                <h3 className="xl:text-lg md:text-base text-sm xl:text-left text-center text-dark_blue font-semibold">
                  {t('type_3.legend')}
                </h3>
              </Reveal>
            </div>

            {/* Type 4 */}
            <div className="flex flex-col items-center gap-3 xl:border-none border xl:shadow-none shadow-md xl:p-0 p-3 pt-6 xl:rounded-none rounded-md">
              <Reveal customClassname="xl:absolute right-[13.2%] bottom-[38%]">
                <button
                  onClick={() => setActiveType('type_4')}
                  type="button"
                  className={cn(
                    activeType === 'type_4' ? activeDotClassname : 'bg-white',
                    'border border-[#87a5b0] w-[25px] h-[25px] rounded-full'
                  )}
                ></button>
              </Reveal>
              <Reveal customClassname="xl:absolute right-[-7%] bottom-[35.5%] xl:w-[200px]">
                <h3 className="xl:text-lg md:text-base text-sm xl:text-left text-center text-dark_blue font-semibold">
                  {t('type_4.legend')}
                </h3>
              </Reveal>
            </div>
          </div>

          <div className="backdrop-blur-[10px] max-w-[600px] xl:mx-0 mx-auto xl:absolute bottom-[-21%] left-1/2 xl:-translate-x-1/2 text-center z-[1] xl:mt-0 mt-8">
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

            <CallToActions />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section4;
