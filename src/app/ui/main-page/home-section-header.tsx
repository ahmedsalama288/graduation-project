import { cn } from "@/app/lib/utils";
import DeltaMark from "./delta-mark";

interface Props {
  title: string;
  className?: string;
  titleClassName?: string;
}

export default function HomeSectionHeader({
  title,
  className,
  titleClassName,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 text-center",
        className
      )}
    >
      <span className="flex items-center gap-3 text-fertile" aria-hidden>
        <span className="h-px w-10 bg-current opacity-50" />
        <DeltaMark className="h-3.5 w-6" />
        <span className="h-px w-10 bg-current opacity-50" />
      </span>
      <h2
        className={cn(
          "text-2xl font-bold leading-snug text-black-gray sm:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
}
