import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import step_1_img from '@/public/interior-page/step-1.png';
import step_2_img from '@/public/interior-page/step-2.png';
import step_3_img from '@/public/interior-page/step-3.png';
import step_4_img from '@/public/interior-page/step-4.png';
import step_5_img from '@/public/interior-page/step-5.png';
import step_6_img from '@/public/interior-page/step-6.png';
import steps_line from '@/public/interior-page/steps.png';
import CustomHeading2 from '../custom-heading-2';
import Reveal from '../reveal';

interface Props {}

const Section10: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_10');

  return (
    <section id={t('id')} className="relative bg-white py-[100px]">
      <ContentContainer customClassName="max-w-[900px]">
        <CustomHeading2 t={t} type_4 customClassname="text-center md:mb-12 mb-8" />
      </ContentContainer>

      <ContentContainer>
        <div className="relative grid-cols-2 gap-52 md:grid hidden">
          {/* Left */}
          <div>
            <Reveal customClassname="mt-[200px] text-right">
              <p className="text-[#666666] text-xl uppercase mb-2">{t('step')} 2</p>
              <p className="font-bold text-[#A57038] uppercase text-2xl mb-3">
                {t('step_2.heading')}
              </p>
              <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_2.description')}</p>
              <Image src={step_2_img} alt={t('step_2.heading')} className="ml-auto" />
            </Reveal>

            <Reveal customClassname="mt-[50px] text-right">
              <p className="text-[#666666] text-xl uppercase mb-2">{t('step')} 4</p>
              <p className="font-bold text-[#A57038] uppercase text-2xl mb-3">
                {t('step_4.heading')}
              </p>
              <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_4.description')}</p>
              <Image src={step_4_img} alt={t('step_4.heading')} className="ml-auto" />
            </Reveal>

            <Reveal customClassname="mt-[50px] text-right">
              <p className="text-[#666666] text-xl uppercase mb-2">{t('step')} 6</p>
              <p className="font-bold text-[#A57038] uppercase text-2xl mb-3">
                {t('step_6.heading')}
              </p>
              <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_6.description')}</p>
              <Image src={step_6_img} alt={t('step_6.heading')} className="ml-auto" />
            </Reveal>
          </div>

          {/* Right */}
          <div>
            <Reveal>
              <p className="text-[#666666] text-xl uppercase mb-2">{t('step')} 1</p>
              <p className="font-bold text-[#A57038] uppercase text-2xl mb-3">
                {t('step_1.heading')}
              </p>
              <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_1.description')}</p>
              <Image src={step_1_img} alt={t('step_1.heading')} />
            </Reveal>

            <Reveal customClassname="mt-[50px]">
              <p className="text-[#666666] text-xl uppercase mb-2">{t('step')} 3</p>
              <p className="font-bold text-[#A57038] uppercase text-2xl mb-3">
                {t('step_3.heading')}
              </p>
              <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_3.description')}</p>
              <Image src={step_3_img} alt={t('step_3.heading')} />
            </Reveal>

            <Reveal customClassname="mt-[50px]">
              <p className="text-[#666666] text-xl uppercase mb-2">{t('step')} 5</p>
              <p className="font-bold text-[#A57038] uppercase text-2xl mb-3">
                {t('step_5.heading')}
              </p>
              <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_5.description')}</p>
              <Image src={step_5_img} alt={t('step_5.heading')} />
            </Reveal>
          </div>

          <Image
            src={steps_line}
            alt="Steps line"
            className="absolute left-1/2 -translate-x-1/2 top-8 md:block hidden"
          />
        </div>

        <div className="md:hidden block space-y-[50px]">
          <Reveal>
            <p className="text-[#666666] md:text-xl text-lg uppercase mb-2">{t('step')} 1</p>
            <p className="font-bold text-[#A57038] uppercase md:text-2xl text-xl mb-3">
              {t('step_1.heading')}
            </p>
            <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_1.description')}</p>
            <Image src={step_1_img} alt={t('step_1.heading')} />
          </Reveal>

          <Reveal>
            <p className="text-[#666666] md:text-xl text-lg uppercase mb-2">{t('step')} 2</p>
            <p className="font-bold text-[#A57038] uppercase md:text-2xl text-xl mb-3">
              {t('step_2.heading')}
            </p>
            <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_2.description')}</p>
            <Image src={step_2_img} alt={t('step_2.heading')} />
          </Reveal>

          <Reveal>
            <p className="text-[#666666] md:text-xl text-lg uppercase mb-2">{t('step')} 3</p>
            <p className="font-bold text-[#A57038] uppercase md:text-2xl text-xl mb-3">
              {t('step_3.heading')}
            </p>
            <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_3.description')}</p>
            <Image src={step_3_img} alt={t('step_3.heading')} />
          </Reveal>

          <Reveal>
            <p className="text-[#666666] md:text-xl text-lg uppercase mb-2">{t('step')} 4</p>
            <p className="font-bold text-[#A57038] uppercase md:text-2xl text-xl mb-3">
              {t('step_4.heading')}
            </p>
            <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_4.description')}</p>
            <Image src={step_4_img} alt={t('step_4.heading')} />
          </Reveal>

          <Reveal>
            <p className="text-[#666666] md:text-xl text-lg uppercase mb-2">{t('step')} 5</p>
            <p className="font-bold text-[#A57038] uppercase md:text-2xl text-xl mb-3">
              {t('step_5.heading')}
            </p>
            <p className="text-[#666666] text-sm leading-7 mb-4">{t('step_5.description')}</p>
            <Image src={step_5_img} alt={t('step_5.heading')} />
          </Reveal>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section10;
