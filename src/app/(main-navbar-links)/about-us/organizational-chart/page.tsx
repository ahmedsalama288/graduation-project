import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import organizationalChartImage from "@public/about-us/organizational-chart/organizational-chart.jpeg";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الهيكل التنظيمي",
};


export default function Page() {
  return (
    <section>
      <MainPageHeader text="الهيكل التنظيمي" />
      <PageContentContainer className=" flex justify-center items-center">
        <ContentWrapper className=" w-full max-w-[900px]">
          <div className="w-full">
            <Image
              className=" rounded object-cover"
              src={organizationalChartImage}
              alt="organizational chart image"
              priority
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              placeholder="blur"
            />
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
