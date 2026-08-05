import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import memberImage from "@public/dr-images/dr-ahmed-abu-al-futouh.jpg";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import DutiesOfDepartmentHead from "@/app/ui/academic-life/duties-of-department-head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قسم نظم معلومات الأعمال",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="قسم نظم معلومات الأعمال" />
      <PageContentContainer>
        <MemberPhoto
          imageSrc={memberImage}
          alt="رئيس قسم نظم معلومات الأعمال"
        />
        <MemberName memberName="أ.د / أحمد أبو الفتوح صالح" />
        <ContentWrapper className="mt-5">
          <ContentHeader text="مهام رئيس قسم نظم معلومات الأعمال" />
          <ContentContainer>
            <DutiesOfDepartmentHead />
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
