"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/accordion";

const questions = [
  {
    question: "ما الدرجة العلمية التي يمنحها المعهد؟",
    answers: [
      "يمنح المعهد بكالوريوس في نظم المعلومات الإدارية (شعبة نظم).",
      "يمنح بكالوريوس في المحاسبة والمراجعة (شعبة المحاسبة).",
      "معتمد من المجلس الأعلى للجامعات ووزارة التعليم العالي ومنها تقدر تسجل في نقابة التجاريين.",
    ],
  },
  {
    question: "شروط القبول بالمعهد؟",
    answers: [
      "قبول الطالب الحاصلين على الثانوية العامة بشعبتيها الأدبية والعلمية.",
      "قبول الطالب الحاصلين على الشهادات المعادلة لثانوية العامة عربي وأجنبي.",
      "قبول الطالب الحاصلين على الثانوية التجارية نظام 3و5 سنوات.",
      "قبول الطالب الحاصلين على الثانوية الفنية للإدارة والخدمات.",
    ],
  },
  {
    question: "ما هو الحد الأدنى للقبول في المعهد؟",
    answers: [
      "الشعبة العلمية: 52.68%",
      "الشعبة الأدبية: 54.26%",
      "ثانوي صناعي 3 سنوات: 83.85%",
      "ثانوي صناعي 5 سنوات: 60%",
      "ثانوي تجاري 3 سنوات: 72.93%",
      "ثانوي تجاري 5 سنوات: 72.20%",
    ],
  },
  {
    question: "ما هي الأوراق المطلوبة للتقديم في المعهد؟",
    answers: [
      "أصل المؤهل.",
      "بطاقة الترشيح.",
      "أصل شهادة الميلاد.",
      "صورة البطاقة الشخصية.",
      "بطاقة 2 جند (للذكور فقط).",
      "بطاقة 6 جند (للذكور فقط).",
      "عدد 6 صور شخصية (4 * 6).",
    ],
  },
];

export default function QuestionsList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map(({ question, answers }, index) => (
        <AccordionItem key={question} value={`item-${index}`}>
          <AccordionTrigger className="py-4 text-base font-semibold sm:text-lg">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-base">
            <ul className="flex list-disc flex-col gap-2 leading-8 pr-6">
              {answers.map((answer) => (
                <li key={answer}>{answer}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
