'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import FaqSection from '../faq-section';
import Reveal from '../reveal';
import CustomHeading2 from '../custom-heading-2';

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
  const t = useTranslations('ecommerce_page.section_9');
  return (
    <FaqSection
      heading={<CustomHeading2 t={t} type_5 customClassname="text-center" />}
      t={t}
      accordionData={accordionData}
      type="type_4"
    />
  );
};

export default Section13;
