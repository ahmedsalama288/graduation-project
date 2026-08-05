"use client";
import useInView from "@/app/lib/hooks/use-in-view";
import { cn } from "@/app/lib/utils";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  threshold?: number;
  duration?: string;
  startPosition?: React.HTMLAttributes<HTMLDivElement>["className"];
  endPosition?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export default function AnimatedSection({
  children,
  threshold,
  startPosition = "translate-y-16 opacity-0",
  endPosition = "translate-y-0 opacity-100",
  duration,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: threshold || 0.01 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition ease-in-out duration-700",
        duration,
        !inView && startPosition,
        inView && endPosition
      )}
    >
      {children}
    </div>
  );
}
