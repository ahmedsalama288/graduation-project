import CommonQuestionsSection from "../ui/main-page/common-questions-section/common-questions-section";
import InstituteInfoContainer from "../ui/main-page/institute-info-section/institute-info-container";
import BriefAboutUs from "../ui/main-page/brief-about-us";
import SliderImages from "../ui/main-page/hero-images/slider-images";

export default function Home() {
  return (
    <section className="bg-mist">
      <article className="relative z-0 mx-auto w-full">
        <SliderImages />
      </article>
      <BriefAboutUs />
      <InstituteInfoContainer />
      <CommonQuestionsSection />
    </section>
  );
}
