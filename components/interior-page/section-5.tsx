import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';

interface Props {}

const Section5: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_5');

  return (
    <section id={t('id')} className="pt-[60px]">
      <ContentContainer>
        <div className="flex gap-10">
          <div className="w-[40%]">
            <Reveal>
              <CustomHeading2 t={t} type_4 customClassname="!text-4xl" />
            </Reveal>

            {/* <Reveal customClassname='relative w-full'>
              
            </Reveal> */}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Section5;
