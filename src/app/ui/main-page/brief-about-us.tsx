import AnimatedSection from "../shared-ui/pages-components/animated-section";
import HomeSectionHeader from "./home-section-header";
import DeltaMark from "./delta-mark";

const instituteGoals = [
  "المساهمة في إعداد وتنمية الكوادر الفنية المتخصصة في فروع الدراسة بالمعهد.",
  "تنمية القدرات والمهارات للقيادات المتخصصة في الممارسة العلمية والعملية.",
  "تنمية البحث العلمي والعمل على إتاحة الفرص وحل المشكلات.",
];

export default function BriefAboutUs() {
  return (
    <section id="about" className="scroll-mt-24">
      <AnimatedSection>
        <div className="container mx-auto px-4 py-16 text-foreground sm:py-20">
          <HomeSectionHeader title="معهد الدلتا العالي" />
          <div className="mt-10 grid items-start gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-14">
            <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              يهدف معهد الدلتا العالي إلى إتاحة الفرصة للطلاب للحصول على نوعية
              ممتازة وجادة ومتطورة من دراسات علوم الحاسبات وتكنولوجيا إدارة
              المعلومات على أيدي نخبة متميزة من أعضاء هيئة التدريس من الجامعات
              المصرية وعلى أحدث الأجهزة التعليمية المتطورة.
            </p>

            <ul className="flex flex-col gap-5">
              {instituteGoals.map((goal) => (
                <li
                  key={goal}
                  className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 shadow-sm"
                >
                  <DeltaMark className="mt-1 h-4 w-7 shrink-0 text-fertile" />
                  <p className="text-base leading-8 text-slate-700 sm:text-lg">
                    {goal}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
