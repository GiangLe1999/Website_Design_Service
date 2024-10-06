'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import FaqSection from '../faq-section';
import Reveal from '../reveal';

interface Props {}

const accordionData = [
  {
    question: 'question_1.question',
    answer: 'question_1.answer',
  },
  {
    question: 'question_2.question',
    answer: 'question_2.answer',
  },
  {
    question: 'question_3.question',
    answer: 'question_3.answer',
  },
  {
    question: 'question_4.question',
    answer: 'question_4.answer',
  },
];

const Section13: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('interior_page.section_13');
  return (
    <FaqSection
      heading={
        <Reveal>
          <h2 className="section-heading-2 font-bold mb-5 text-[#666666] text-center">
            {t.rich('heading', {
              bold: (chunks: any) => <span className="text-[#8D5520]">{chunks}</span>,
            })}
          </h2>
        </Reveal>
      }
      t={t}
      accordionData={accordionData}
      color={{ from: '#A57038', to: '#DAAA60' }}
    />
  );
};

export default Section13;
