import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';
import phones from '@/public/interior-page/thiet-ke-website-ban-noi-that.png';
import { Link } from '@/app/navigation';
import Section5Swiper from './section-5-swiper';

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_5');

  return (
    <section id={t('id')} className="pt-[60px]">
      <ContentContainer customClassName="pb-16 border-b">
        <div className="lg:flex gap-14">
          <div className="lg:w-[40%]">
            <Reveal>
              <CustomHeading2 t={t} type_4 customClassname="md:!text-4xl text-3xl" />
            </Reveal>

            <Reveal customClassname="relative lg:w-full md:w-[70%] md:mx-auto lg:mb-0 mb-10 aspect-[1.0909] mt-16">
              <Image
                src={phones}
                alt="Thiết kế website nội thất"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </Reveal>
          </div>

          <div className="flex-1">
            <div className="lg:ml-24 text-[#666666] leading-7 text-sm mb-10">
              <Reveal customClassname="mb-4">
                <p>{t('paragraph_1')}</p>
              </Reveal>
              <Reveal>
                <p>
                  {t.rich('paragraph_2', {
                    a: (chunks) => (
                      <Link href="/" className="font-bold">
                        {chunks}
                      </Link>
                    ),
                  })}
                </p>
              </Reveal>
            </div>

            <Section5Swiper />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section5;
