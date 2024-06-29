import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Image from 'next/image';
import arrow_top from '@/public/home-page/arrow_top.png';
import arrow_step from '@/public/home-page/arrows_step.png';
import { cn } from '@/lib/utils';
import step_1_img from '@/public/home-page/quy-trinh-thiet-ke-web-gap-go-khach-hang.webp';
import step_2_img from '@/public/home-page/quy-trinh-thiet-ke-web-vach-ra-huong-di.webp';
import step_3_img from '@/public/home-page/quy-trinh-thiet-ke-web-tien-hanh-thiet-ke-lap-trinh.webp';
import step_4_img from '@/public/home-page/quy-trinh-thiet-ke-web-toi-uu-website.webp';
import step_5_img from '@/public/home-page/quy-trinh-thiet-ke-web-trao-quyen-website.webp';
import step_6_img from '@/public/home-page/quy-trinh-thiet-ke-web-bao-tri-website.webp';
import CustomHeading2 from '../custom-heading-2';
import footer_bg from '@/public/home-page/section-7-bottom-background.png';
import Reveal from '../reveal';

interface Props {}

const stepsData = [
  {
    heading: 'step_1.heading',
    description: 'step_1.description',
    image: step_1_img,
  },
  {
    heading: 'step_2.heading',
    description: 'step_2.description',
    image: step_2_img,
  },
  {
    heading: 'step_3.heading',
    description: 'step_3.description',
    image: step_3_img,
  },
  {
    heading: 'step_4.heading',
    description: 'step_4.description',
    image: step_4_img,
  },
  {
    heading: 'step_5.heading',
    description: 'step_5.description',
    image: step_5_img,
  },
  {
    heading: 'step_6.heading',
    description: 'step_6.description',
    image: step_6_img,
  },
];

const Section10: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_10');
  const t_common = useTranslations('common');
  const t_id = useTranslations('home_page.section_ids');

  return (
    <section id={t_id('design_process')} className="relative bg-white xl:pb-[200px] pb-[20px]">
      <div className="absolute hidden xl:block left-0 right-0 bottom-0 z-[1]">
        <Image className="" src={footer_bg} alt="Section 7 bottom background" />
      </div>
      <ContentContainer>
        <Reveal>
          <p className="text-center md:mb-4 mb-2 font-semibold text-primary sm:text-lg text-base">
            {t('sub_heading')}
          </p>
        </Reveal>
        <CustomHeading2 t={t} type_1 customClassname="text-center xl:mb-5 md:mb-16 mb-12" />

        <div className="relative">
          <div className="left-1/2 -translate-x-[100%] top-0 absolute xl:block hidden">
            <Reveal>
              <Image src={arrow_top} alt="Top Arrow" />
            </Reveal>
          </div>

          {stepsData.map((step, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col md:items-center gap-y-8 relative lg:mb-[170px] mb-20"
            >
              <div
                className={cn(
                  index % 2 === 0 ? 'order-1' : 'order-2',
                  'md:w-1/2 w-full xl:pl-[100px] xl:pr-[80px] md:pl-[50px] md:pr-[30px]'
                )}
              >
                <Reveal>
                  <p className="text-3xl md:text-4xl xl:text-[50px] font-bold xl:mb-6 mb-4 text-primary">
                    {t_common('step') + ' ' + (index + 1)}
                    <span className="text-secondary">.</span>
                  </p>

                  <p className="text-[20px] md:text-[25px] leading-[1.3] font-bold text-primary mb-[10px]">
                    {t(step.heading)}
                  </p>

                  <p className="text-sm leading-7">{t(step.description)}</p>
                </Reveal>
              </div>

              <div
                className={cn(
                  index % 2 === 0 ? 'md:order-2 order-1' : 'md:order-1 order-2',
                  'xl:pr-[100px] xl:pl-[80px] md:pr-[50px] md:pl-[30px] flex-1'
                )}
              >
                <Reveal>
                  <Image
                    src={step.image}
                    alt={step.heading}
                    width={401}
                    height={347}
                    className={cn(
                      index % 2 === 0 ? 'order-2' : 'order-1',
                      'object-cover rounded-[30px] shadow-[2px_2px_79px_rgba(0,2,72,0.13)]'
                    )}
                  />
                </Reveal>
              </div>

              {index < stepsData.length - 1 && (
                <div className="xl:block hidden absolute bottom-0 left-1/2">
                  <Reveal>
                    <Image
                      src={arrow_step}
                      alt="Step Arrow"
                      style={{
                        transform:
                          index % 2 !== 0
                            ? 'rotateY(180deg) translateX(50%) translateY(calc(100% - 25px))'
                            : 'translateX(-60%) translateY(calc(100% - 25px))',
                      }}
                    />
                  </Reveal>
                </div>
              )}
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section10;
