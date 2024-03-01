import MainPageHeader from "../ui/main-page-header";
import InstituteInfoContainer from "../ui/main-page/institute-info-container";
import LandingImage from "../ui/main-page/landing-image";

export default function Home() {
  return (
    <section className=" bg-slate-100 pb-20 ">
      <MainPageHeader text="الصفحة الرئيسية" />
      <article className="w-full mx-auto relative z-0 ">
        <LandingImage />
      </article>
      <section className=" p-2 md:p-0">
        <InstituteInfoContainer />
      </section>
    </section>
  );
}
