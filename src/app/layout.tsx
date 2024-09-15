import type { Metadata, Viewport } from "next";
import { cairo } from "./ui/fonts";
import Navbar from "./ui/root-layout/navbar";
import "./ui/globals.css";
import FooterSection from "./ui/root-layout/footer-section/footer-section";

export const metadata: Metadata = {
  title: {
    default: "معهد الدلتا العالي",
    template: "معهد الدلتا العالي | %s",
  },
  description:
    "يهدف معهد الدلتا العالي إلى إتاحة الفرصة للطلاب للحصول على نوعية ممتازة وجادة ومتطورة من دراسات علوم الحاسبات وتكنولوجيا إدارة المعلومات على أيدي نخبة متميزة من أعضاء هيئة التدريس من الجامعات المصرية وعلى أحدث الأجهزة التعليمية المتطورة",
  applicationName: "معهد الدلتا العالي",
  manifest: "/manifest.json",
  keywords: [
    "معهد الدلتا العالي",
    "معهد الدلتا العالي للنظم والمعلومات الإدارية والمحاسبية ",
    "معهد الدلتا العالي للنظم والمعلومات الإدارية",
    "نظم ومعلومات اداريه",
    "معهد الدلتا",
  ],
  robots: "index",
  other: {
    'google-site-verification': "VDuukQq_dvLy1lWB6xqwW4Ct7DN_KqWF48Y3kQYhQnk",
  },
};
export const viewport: Viewport = {
  themeColor: "#f6f6f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className} flex flex-col min-h-screen antialiased bg-slate-100`}
      >
        <header className=" max-h-[69px] flex lg:sticky top-0 justify-center items-center w-full z-[100000] bg-light-blue drop-shadow-lg ">
          <Navbar />
        </header>
        <main className=" overflow-y-hidden flex-1">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
