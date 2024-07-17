import { FC } from 'react';
import ContentContainer from '../content-container';
import Reveal from '../reveal';
import { useTranslations } from 'next-intl';
import CustomHeading2 from '../custom-heading-2';
import ConsultButtton from '../consult-button';
import CallButton from '../call-button';
import CallToActions from './call-to-actions';

interface Props {}

const row_1_data = [
  {
    number: '2+',
    text: 'reason_1',
  },
  {
    number: '100+',
    text: 'reason_2',
  },
  {
    number: '15+',
    text: 'reason_3',
  },
];

const row_2_data = [
  { heading: 'reason_4.heading', description: 'reason_4.description' },
  { heading: 'reason_5.heading', description: 'reason_5.description' },
  { heading: 'reason_6.heading', description: 'reason_6.description' },
  { heading: 'reason_7.heading', description: 'reason_7.description' },
];

const Section7: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_7');
  return (
    <section id={t('id')} className="pt-[100px]">
      <ContentContainer>
        <Reveal>
          <p className="bds-sub-heading">{t('sub_heading')}</p>
        </Reveal>
        <CustomHeading2 t={t} type_2 customClassname="text-center" />

        <Reveal>
          <ContentContainer maxWidth="max-w-[855px] mt-12 !px-0">
            <ul className="grid sm:grid-cols-3 grid-cols-2 gap-[30px]">
              {row_1_data.map(({ number, text }) => (
                <li
                  key={text}
                  className="p-[30px] rounded-[25px] bg-white shadow-[0_0_40px_rgba(0,50,82,0.1)]"
                >
                  <p className="bg-[linear-gradient(to_right,#024b7c_0,#00acb2_30%)] text-transparent text-5xl mb-3 font-semibold bg-clip-text">
                    {number}
                  </p>
                  <p className="text-[#777777] text-sm leading-7 md:text-base md:leading-8">
                    {t(text)}
                  </p>
                </li>
              ))}
            </ul>
          </ContentContainer>
        </Reveal>

        <Reveal customClassname="mt-12">
          <ul className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {row_2_data.map(({ heading, description }) => (
              <li
                key={heading}
                className="p-[30px] rounded-[25px] bg-white shadow-[0_0_40px_rgba(0,50,82,0.1)]"
              >
                <h3 className="text-dark_blue font-bold md:text-2xl text-xl mb-4">{t(heading)}</h3>
                <p className="text-[#777777] text-sm leading-7 md:text-base md:leading-8">
                  {t.rich(description, {
                    bold: (chunks: any) => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <CallToActions />
      </ContentContainer>
    </section>
  );
};

export default Section7;
