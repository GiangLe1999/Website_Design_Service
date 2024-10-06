'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import CustomHeading2 from '../custom-heading-2';

import FaqSection from '../faq-section';

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

const Section9: FC<Props> = (props): JSX.Element => {
  const t = useTranslations('real_estate_page.section_9');

  return (
    <FaqSection
      heading={<CustomHeading2 t={t} type_2 customClassname="text-center mb-2" />}
      t={t}
      accordionData={accordionData}
      type="type_1"
    />
  );
};

export default Section9;
