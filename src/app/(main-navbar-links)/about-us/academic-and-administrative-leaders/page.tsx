import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import deanOfTheInstituteImage from "@public/dr-images/dr-ahmed-abu-al-futouh.jpg";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import { academicLeadersInfo } from "@/app/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "القيادات الأكاديمية والإدارية",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="القيادات الأكاديمية والإدارية" />
      <PageContentContainer>
        <div
          className=" 
                grid
                grid-cols-1 grid-rows-7
                md:grid-rows-4 md:grid-cols-2
                lg:grid-rows-3 lg:grid-cols-3
                justify-items-center gap-6
              "
        >
          <ContentWrapper className="w-full md:col-span-2 lg:col-span-3 drop-shadow-md">
            <div className=" flex flex-col justify-center items-center gap-4 pt-4">
              <MemberPhoto
                imageSrc={deanOfTheInstituteImage}
                alt="عميد المعهد"
              />
              <ContentHeader
                className=" w-[350px] max-w-full text-center"
                text="أ.د / أحمد أبو الفتوح صالح"
              />
              <ContentContainer>
                <div className=" w-[350px] max-w-full text-base text-center md:py-[2px]">
                  <p>عميد المعهد</p>
                </div>
              </ContentContainer>
            </div>
          </ContentWrapper>
          {academicLeadersInfo.map(
            ({ memberImageSrc, memberImageAlt, memberName, memberRole }) => (
              <ContentWrapper
                className=" w-full drop-shadow-md "
                key={memberImageAlt}
              >
                <div className=" flex flex-col justify-center items-center gap-4 pt-4">
                  <MemberPhoto imageSrc={memberImageSrc} alt={memberImageAlt} />
                  <ContentHeader
                    className="w-[350px] max-w-full text-center"
                    text={memberName}
                  />
                  <ContentContainer>
                    <div className=" w-[350px] max-w-full text-base text-center">
                      <p>{memberRole}</p>
                    </div>
                  </ContentContainer>
                </div>
              </ContentWrapper>
            )
          )}
        </div>
      </PageContentContainer>
    </section>
  );
}
