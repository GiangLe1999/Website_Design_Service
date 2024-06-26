import { useTranslations } from "next-intl";
import { FC } from "react";
import ContentContainer from "../content-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomHeading2 from "../custom-heading-2";

interface Props {}

const accordionData = [
  {
    question: "question_1.question",
    answer: "question_1.answer",
    link: "",
  },
  {
    question: "question_2.question",
    answer: "question_2.answer",
    link: "",
  },
  {
    question: "question_3.question",
    answer: "question_3.answer",
    link: "",
  },
  {
    question: "question_4.question",
    answer: "question_4.answer",
    link: "",
  },
  {
    question: "question_5.question",
    answer: "question_5.answer",
    link: "",
  },
  {
    question: "question_6.question",
    answer: "question_6.answer",
    link: "",
  },
  {
    question: "question_7.question",
    answer: "question_7.answer",
    link: "",
  },
  {
    question: "question_8.question",
    answer: "question_8.answer",
    link: "",
  },
  {
    question: "question_9.question",
    answer: "question_9.answer",
    link: "",
  },
  {
    question: "question_10.question",
    answer: "question_10.answer",
    link: "",
  },
  {
    question: "question_11.question",
    answer: "question_11.answer",
    link: "",
  },
  {
    question: "question_12.question",
    answer: "question_12.answer",
    link: "",
  },
  {
    question: "question_13.question",
    answer: "question_13.answer",
    link: "",
  },
];

const Section17: FC<Props> = (props): JSX.Element => {
  const t = useTranslations("home_page.section_17");
  const t_id = useTranslations("home_page.section_ids");
  return (
    <section id={t_id("faq")} className="relative bg-white pb-[100px]">
      <ContentContainer maxWidth="max-w-[740px]" customClassName="mb-[50px]">
        <CustomHeading2 customClassname="text-center" t={t} type_1 />
        <p className="text-center mb-2">{t("description")}</p>
      </ContentContainer>

      <ContentContainer maxWidth="max-w-[1000px]">
        <Accordion type="single" collapsible>
          {accordionData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <p className="text-primary">{t(item.question)}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {t.rich(item.answer, {
                    ul: (chunks) => (
                      <ul className="space-y-2 mt-2">{chunks}</ul>
                    ),
                    li: (chunks) => (
                      <li className="list-disc list-inside">{chunks}</li>
                    ),
                    link: (chunks) => (
                      <a
                        className="text-primary font-bold hover:text-secondary hover:underline transition"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {chunks}
                      </a>
                    ),
                    bold: (chunks) => (
                      <strong className="font-bold text-primary">
                        {chunks}
                      </strong>
                    ),
                  })}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ContentContainer>
    </section>
  );
};

export default Section17;
