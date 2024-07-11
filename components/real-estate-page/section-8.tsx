import { useTranslations } from 'next-intl';
import { FC } from 'react';
import ContentContainer from '../content-container';
import CustomHeading2 from '../custom-heading-2';

interface Props {}

const Section8: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_8');

  return (
    <section id={t('id')} className="py-[100px]">
      <ContentContainer>
        <CustomHeading2 t={t} type_2 customClassname="text-center mb-1" />
        <p className="text-sm leading-7 md:text-lg md:leading-9 text-center">{t('description')}</p>
      </ContentContainer>
    </section>
  );
};

export default Section8;
