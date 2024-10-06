'use client';

import { FC, ReactNode, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import ContentContainer from './content-container';
import Reveal from './reveal';

interface Props {
  t: any;
  accordionData: { question: string; answer: string }[];
  heading: ReactNode;
  type: 'type_1' | 'type_2' | 'type_3';
}

const FaqSection: FC<Props> = ({ t, accordionData, heading, type }): JSX.Element => {
  const [accordionValue, setAccordionValue] = useState('item-0');

  return (
    <section id={t('id')} className="py-[100px]">
      <ContentContainer>
        {heading}
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
                    'bg-white rounded-xl hover:no-underline md:text-lg md:leading-8 text-base leading-8 text-left shadow-[0_0_40px_rgba(0,50,82,0.09)] mb-4 px-4 border-none',
                    accordionValue === `item-${index}` &&
                      `bg-gradient-to-r ${
                        type === 'type_1'
                          ? 'from-[#024C7C] to-[#007287]'
                          : type === 'type_2'
                          ? 'from-[#A57038] to-[#DAAA60]'
                          : ''
                      }] !text-white !no-underline`
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

export default FaqSection;
