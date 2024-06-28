import { FC } from 'react';
import ContentContainer from '../content-container';
import { useTranslations } from 'next-intl';
import CustomHeading2 from '../custom-heading-2';

interface Props {}

const Section2: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('home_page.section_2');
  return (
    <div className="sm:pb-[70px] pb-10 bg-gradient-to-b from-[#f3ebe9] to-[#ebf1ef]">
      <ContentContainer maxWidth="max-w-[1040px]" customClassName="sm:pt-0 pt-10">
        <CustomHeading2 t={t} type_1 />

        <p className="text-sm leading-7 xl:text-xl xl:leading-10 mb-5">
          {t.rich('paragraph_1', {
            bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
          })}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm leading-6">
          <p>
            {t.rich('paragraph_2', {
              bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
            })}
          </p>

          <p>
            {t.rich('paragraph_3', {
              bold: (chunks) => <strong className="text-primary">{chunks}</strong>,
            })}
          </p>

          <p>{t('paragraph_4')}</p>
          <p>{t('paragraph_5')}</p>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Section2;
