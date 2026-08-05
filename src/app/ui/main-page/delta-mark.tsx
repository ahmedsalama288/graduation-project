import { cn } from "@/app/lib/utils";

interface DeltaMarkProps {
  className?: string;
  animate?: boolean;
}

export default function DeltaMark({ className, animate = false }: DeltaMarkProps) {
  return (
    <svg
      viewBox="0 0 48 28"
      fill="none"
      aria-hidden="true"
      className={cn("block", className)}
    >
      <path
        d="M5 24 L24 5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
        className={cn(animate && "delta-stroke")}
      />
      <path
        d="M43 24 L24 5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
        className={cn(animate && "delta-stroke")}
      />
    </svg>
  );
}
