import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import imageSrc from "@public/dr-images/dr-muhammad-rabie-nasser.jpeg";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رئيس مجلس الإدارة",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="رئيس مجلس الإدارة" />
      <PageContentContainer>
        <MemberPhoto imageSrc={imageSrc} alt="رئيس مجلس الإدارة" />
        <MemberName memberName="كلمة السيد الدكتور محمد ربيع ناصر" />

        <ContentWrapper className=" mt-5">
          <ContentHeader text="أبنائي الطلاب" />
          <ContentContainer>
            <p>
              التميز و الريادة فى مجال تكنولوجيا المعلومات هى كلمات و ضعناها نصب
              اعيننا و نحن نناقش رؤية و رسالة معهد الدلتا العالى لنظم المعلومات
              الادارية والمحاسبية لنقدم نموذجا متميزاً و رائد للتعليم بمنظوره
              الحديث و لقد كانت قناعتنا بان خريج معهدنا و مؤسساتنا التعليمية يجب
              ان تتاح له كافة الفرص للتزود بالمعارف الحديثة و صقل مهاراته فى
              مجالات الحاسب و تكنولوجيا المعلومات مما يجعل من اهتمامنا بتقديم كل
              الدعم لانجاح مشاريع التخرج ايمانا بابنائنا بانها بوتقة يتم فيها
              ثقل و تكامل المهارات فى عدد من علوم الحاسب الالى و نظم الاعمال من
              خلال تطبيقات عملية فى عدد من المشاركات و المؤسسات الحكومية و
              المدنية لاعداد الخريج لسوق العمل و لقد هيات ادارة المعهد كل
              البرمجيات و المعامل و الاساليب التى تفتح افاقا جديدة تحقق طموحات
              ابناؤها الخريجين و ادعو طلابنا ان يستثمروا هذة الامكانيات المتاحة
              ليتم اعدادهم لسوق العمل اعدادا متميزا و اننى ادعو لكم بكل توفيق و
              انقل اليكم تمنياتى و تمنيات اسرة الدلتا من معاهد و كليات و اعضاء
              مجلس الادارة و هيئة التدريس و العاملين و طلاب ان يكلل الله جهودكم
              بكل نجاح و ان يحقق الله على ايديكم لوطننا ما ننشده من رخاء و
              ازدهار ينطلقان به الى افاق جديدة من النهضة و التقدم تحت قيادة
              السيد الرئيس عبد الفتاح السيسى وكل عام وأنتم بخير.
            </p>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
