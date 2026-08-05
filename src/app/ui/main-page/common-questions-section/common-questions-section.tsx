import AnimatedSection from "../../shared-ui/pages-components/animated-section";
import HomeSectionHeader from "../home-section-header";
import QuestionsList from "./questions-list";

export default function CommonQuestionsSection() {
  return (
    <section>
      <AnimatedSection>
        <div className="container mx-auto px-4 py-16 text-foreground sm:py-20">
          <HomeSectionHeader title="الأسئلة الشائعة" />
          <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border bg-white p-4 shadow-sm sm:p-6 lg:mt-14">
            <QuestionsList />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
