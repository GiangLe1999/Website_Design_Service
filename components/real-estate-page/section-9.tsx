'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import ContentContainer from '../content-container';
import CustomHeading2 from '../custom-heading-2';
import Reveal from '../reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

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
  const [accordionValue, setAccordionValue] = useState('item-0');

  return (
    <section id={t('id')} className="py-[100px]">
      <ContentContainer>
        <CustomHeading2 t={t} type_2 customClassname="text-center mb-2" />
        <Reveal customClassname="max-w-[800px] mx-auto">
          <p className="text-center text-sm leading-7 md:text-lg md:leading-9 xl:text-xl xl:leading-10">
            {t.rich('description', {
              bold: (chunks: any) => <strong>{chunks}</strong>,
            })}
          </p>
        </Reveal>

        <Accordion
          defaultValue="item-0"
          value={accordionValue}
          type="single"
          collapsible
          className="mt-10"
        >
          {accordionData.map((item, index) => (
            <Reveal key={index}>
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger
                  className={cn(
                    'bg-white rounded-xl hover:no-underline text-lg shadow-[0_0_40px_rgba(0,50,82,0.09)] mb-4 px-4 border-none',
                    accordionValue === `item-${index}` &&
                      'bg-gradient-to-r from-[#024C7C] to-[#007287] !text-white !no-underline'
                  )}
                  onClick={() =>
                    setAccordionValue((prev) => (prev === `item-${index}` ? '' : `item-${index}`))
                  }
                >
                  {t(item.question)}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 px-4">
                  {t(item.answer)}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </ContentContainer>
    </section>
  );
};

export default Section9;
