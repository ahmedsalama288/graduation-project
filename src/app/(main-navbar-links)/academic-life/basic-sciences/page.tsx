import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import memberImage from "@public/dr-images/dr-mansour.jpeg";
import DutiesOfDepartmentHead from "@/app/ui/academic-life/duties-of-department-head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قسم العلوم الأساسيه",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="قسم العلوم الأساسيه" />
      <PageContentContainer>
        <MemberPhoto imageSrc={memberImage} alt="رئيس قسم العلوم الأساسيه" />
        <MemberName memberName="أ.م.د / منصور شطا" />
        <ContentWrapper className=" mt-5">
          <ContentHeader text="مهام رئيس قسم العلوم الأساسيه" />
          <ContentContainer>
            <DutiesOfDepartmentHead />
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
