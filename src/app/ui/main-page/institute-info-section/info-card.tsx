import dynamic from "next/dynamic";

import { reemKufi } from "../../fonts";
import DeltaMark from "../delta-mark";

const InteractiveInfoStatus = dynamic(
  () => import("./interactive-info-status"),
  {
    loading: () => <span className="tabular-nums">0</span>,
  }
);

interface Props {
  statusName: string;
  statusNumber: number;
}

export default function InfoCard({ statusName, statusNumber }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <DeltaMark className="h-4 w-7 text-fertile" />
      <p className="text-sm font-medium text-white/70 sm:text-base">
        {statusName}
      </p>
      <p
        className={`${reemKufi.className} text-4xl font-bold text-white sm:text-5xl`}
      >
        <InteractiveInfoStatus statusNumber={statusNumber} />
      </p>
    </div>
  );
}
