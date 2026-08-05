import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import memberImage from "@public/dr-images/dr-isalm.jpeg";
import DutiesOfDepartmentHead from "@/app/ui/academic-life/duties-of-department-head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قسم المحاسبه",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="قسم المحاسبه" />
      <PageContentContainer>
        <MemberPhoto imageSrc={memberImage} alt="رئيس قسم المحاسبة" />
        <MemberName memberName="أ.م.د / محمد الشربيني إسلام" />
        <ContentWrapper className="mt-5">
          <ContentHeader text="مهام رئيس القسم العلوم المحاسبية" />
          <ContentContainer>
            <DutiesOfDepartmentHead />
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
