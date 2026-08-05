import AnimatedSection from "../../shared-ui/pages-components/animated-section";
import HomeSectionHeader from "../home-section-header";
import InfoCard from "./info-card";

const statusList = [
  { statusName: "طالب بالمعهد", statusNumber: 5769 },
  { statusName: "خريج من المعهد", statusNumber: 10609 },
  { statusName: "أقسام أكاديمية", statusNumber: 3 },
  { statusName: "درجة علمية", statusNumber: 2 },
];

export default function InstituteInfoContainer() {
  return (
    <article className="bg-deep-navy text-white">
      <AnimatedSection>
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <HomeSectionHeader
            title="معهد الدلتا بالأرقام"
            titleClassName="text-white"
          />
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12 lg:mt-14 lg:grid-cols-4">
            {statusList.map(({ statusName, statusNumber }) => (
              <InfoCard
                key={statusName}
                statusName={statusName}
                statusNumber={statusNumber}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </article>
  );
}
