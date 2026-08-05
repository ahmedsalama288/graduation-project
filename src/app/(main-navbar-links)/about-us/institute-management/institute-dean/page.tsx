import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import imageSrc from "@public/dr-images/dr-ahmed-abu-al-futouh.jpg";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "عميد المعهد",
};


export default function Page() {
  return (
    <section>
      <MainPageHeader text="عميد المعهد" />
      <PageContentContainer>
        <MemberPhoto imageSrc={imageSrc} alt="عميد المعهد" />
        <MemberName memberName="كلمة السيد الدكتور أحمد أبو الفتوح" />
        <ContentWrapper className=" mt-5">
          <ContentHeader text="أبنائي الطلاب" />
          <ContentContainer>
            <p>
              أبنائى وبناتى أمل المستقبل المشرق طلاب معهد الدلتا العالى لنظم
              المعلومات الإدارية والمحاسبية ، السلام عليكم ورحمة الله وبركاته مع
              بداية وإطلالة عام دراسى جديد يشرق على معهدنا ذو الكيان والتاريخ
              العريق يطيب لى أن أرحب بكم على موقع مؤسستكم التعليمية وأود أن أوجه
              خالص التحيه لإدارة المعهد ممثلة فى السيد الدكتور / محمد ربيع ناصر
              رئيس مجلس إدارة المعهد ورئيس الأكاديمية ورئيس مجلس أمناء جامعة
              الدلتا للعلوم والتكنولوجيا والسيد الأستاذ / إيهاب ناصر خليفه أمين
              المعهد ولكل من ينتسبون الى المعهد من أعضاء هيئة التدريس والعاملين
              ولأبنائى وبناتنى سواء من الخريجين أو من طلاب المعهد ، فتحية لكم من
              أعماقى ونحن نسعى سويا الى بناء حاضر ومستقبل واعد ومشرق من اجل
              مصرنا الحبيبة وسعيا نحو تحقيق ذلك يسعى المعهد دائما الى مواكبة كل
              ما هو جديد باستخدام التقنيات الحديثة فى مجال الحاسب ونظم المعلومات
              بالدمج مع بعض العلوم الأساسية كالمحاسبة والاقتصاد وإدارة الأعمال
              لسد إحتياجات سوق العمل من خريجى هذا المعهد . ومن أجل ذلك يحرص
              المعهد دائما بالدخول فى العديد من المشاركات وبروتوكولات التعاون مع
              الجامعات المصرية وبعض الشركات المتخصصة من أجل النهوض والإرتقاء
              بمستوى الخريج ، كما يتواصل المعهد مع مؤسسات المجتمع المدنى لدراسة
              إحتياجات سوق العمل للوفاء بها ، هذا بالاضافة الى إتاحة الفرصة
              لطلاب المعهد للمشاركة فى العديد من الأنشطة الثقافية والرياضية
              والفنية التى تنظمها وزارة التعليم العالى ومنح الطلاب حوافز فى شكل
              منح لتحفيزهم على تحقيق المزيد من التفوق . كما يحرص المعهد على عقد
              بعض ملتقيات التوظيف لإتاحة فرص عمل بالعديد من الشركات لأبنائنا
              الخريجين . وأخيرا أتمنى لجميع طلاب المعهد التوفيق والسداد وأن
              يوفقنا الله جميعا الى ما يحبه ويرضاه وكل عام وأنتم بخير.
            </p>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
