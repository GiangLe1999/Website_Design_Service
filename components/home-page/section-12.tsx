import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import demo_1 from '@/public/home-page/mau-website-1.webp';
import demo_2 from '@/public/home-page/mau-website-2.webp';
import demo_3 from '@/public/home-page/mau-website-3.webp';
import demo_4 from '@/public/home-page/mau-website-4.webp';
import CustomHeading2 from '../custom-heading-2';
import ContentContainer from '../content-container';
import { cn } from '@/lib/utils';
import Reveal from '../reveal';

interface Props {}

const squareImgWrapperClasses =
  "relative aspect-square cursor-pointer after:content-[''] after:absolute after:inset-0 after:bg-primary after:opacity-0 hover:after:opacity-30 after:transition after:duration-500";

const Section12: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_12');
  const t_id = useTranslations('home_page.section_ids');

  return (
    <section
      id={t_id('website_demo')}
      className="relative bg-gradient-to-b from-[#f4eae8] to-[#f0eff9] pt-10"
    >
      <ContentContainer customClassName="mb-10">
        <CustomHeading2 t={t} type_1 customClassname="text-center" />
      </ContentContainer>

      <Reveal>
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div>
            <div className="grid grid-cols-2">
              <div className={squareImgWrapperClasses}>
                <Image src={demo_1} alt="Mẫu website 1" className="object-cover" />
              </div>
              <div className={squareImgWrapperClasses}>
                <Image src={demo_2} alt="Mẫu website 2" className="object-cover" />
              </div>
            </div>
            <div className={cn(squareImgWrapperClasses, '!aspect-[2]')}>
              <Image src={demo_3} alt="Mẫu website 3" className="object-cover h-full" />
            </div>
          </div>

          <div className={squareImgWrapperClasses}>
            <Image src={demo_4} alt="Mẫu website 4" className="object-cover" />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Section12;
