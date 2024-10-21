import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import { Button } from '../ui/button';
import { Link } from '@/app/navigation';
import bg from '@/public/company-introduction-page/section-6-bg.png';
import logo_1 from '@/public/company-introduction-page/section-6-logo-1.svg';
import logo_2 from '@/public/company-introduction-page/section-6-logo-2.svg';
import logo_3 from '@/public/company-introduction-page/section-6-logo-3.svg';
import logo_4 from '@/public/company-introduction-page/section-6-logo-4.svg';
import logo_5 from '@/public/company-introduction-page/section-6-logo-5.svg';
import Image from 'next/image';

interface Props {}

const Section6: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('company_introduction_page.section_6');

  return (
    <section className="py-[100px]" id={t('id')}>
      <ContentContainer>
        <div className="max-w-[700px] lg:mb-10 mb-14">
          <CustomHeading2 type_7 t={t} />
          <Reveal>
            <p className="sm:text-lg sm:leading-9 text-sm leading-7">{t('description')}</p>
          </Reveal>
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-x-16 sm:gap-y-10 gap-y-0">
          <Reveal customClassname="lg:w-[40%] w-full lg:order-1 order-2 pl-10 border-l relative shrink-0">
            <div className="absolute h-[55%] bottom-14 left-[-1px] bg-[#0053D4] w-[3px]"></div>

            <Reveal>
              <p className="font-bold text-2xl text-[#0053D4] mb-3">{t('news.heading')}</p>
            </Reveal>

            <Reveal>
              <p className="text-sm leading-7 mb-5">{t('news.description')}</p>
            </Reveal>

            <Reveal>
              <Button className="bg-[#0053D4] rounded-full text-white text-sm font-bold hover:bg-[#E6041D] transition">
                <Link href="/" target="_blank">
                  {t('see_detail')}
                </Link>
              </Button>
            </Reveal>
          </Reveal>

          <Reveal customClassname="relative lg:order-2 order-1 w-full aspect-square">
            <Image src={bg} alt={t('heading')} fill className="object-cover" sizes="100vw" />

            <div className="sm:block hidden absolute rounded-full custom_filter top-4 left-16">
              <Image src={logo_1} alt="Logo 1" />
            </div>

            <div className="sm:block hidden absolute rounded-full custom_filter bottom-36 -left-4">
              <Image src={logo_2} alt="Logo 2" />
            </div>

            <div className="sm:block hidden absolute rounded-full custom_filter top-24 right-20">
              <Image src={logo_3} alt="Logo 3" />
            </div>

            <div className="sm:block hidden absolute rounded-full custom_filter bottom-40 right-10">
              <Image src={logo_4} alt="Logo 4" />
            </div>

            <div className="sm:block hidden absolute rounded-full custom_filter bottom-8 left-48">
              <Image src={logo_5} alt="Logo 5" />
            </div>
          </Reveal>
        </div>
      </ContentContainer>

      <div className="pl-[10%] bg-[#0053D4] text-white rounded-l-full"></div>
    </section>
  );
};

export default Section6;
