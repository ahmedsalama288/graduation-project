import SectionHeader from "../../shared-ui/page-section-title";
import ContentContainer from "../../shared-ui/pages-components/content-container";
import ContentHeader from "../../shared-ui/pages-components/content-header";
import ContentWrapper from "../../shared-ui/pages-components/content-wrapper";
import PageContentContainer from "../../shared-ui/pages-components/page-content-container";
import QuestionsList from "./questions-list";

export default function CommonQuestionsSection() {
  return (
    <section className="p-2 md:p-0">
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="الأسئلة الشائعة" />
        </ContentWrapper>
        <QuestionsList />
      </PageContentContainer>
    </section>
  );
}
