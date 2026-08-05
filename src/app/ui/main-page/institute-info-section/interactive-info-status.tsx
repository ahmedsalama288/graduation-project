"use client";

import { useEffect, useRef, useState } from "react";
import useInView from "@/app/lib/hooks/use-in-view";

interface Props {
  statusNumber: number;
}

export default function InteractiveInfoStatus({ statusNumber }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * statusNumber));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, statusNumber]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("en-US")}
    </span>
  );
}
