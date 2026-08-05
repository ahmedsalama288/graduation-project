"use client";

import useInView from "@/app/lib/hooks/use-in-view";
import {  useEffect, useRef, useState } from "react";

interface Props {
  statusNumber: number;
}

export default function InteractiveInfoStatus({ statusNumber }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref,{ threshold: 1 });

  useEffect(() => {
    if (inView) {
      const counterInterval = setInterval(() => {
        setCount((prevCount) =>
          prevCount < statusNumber ? prevCount + 11 : statusNumber
        );
      }, 0.01);
      return () => clearInterval(counterInterval);
    }
  }, [inView, statusNumber]);

  return (
    <div
      ref={ref}
      className=" flex flex-col gap-2 justify-center items-center mb-2 sm:mb-4"
    >
      <p className=" text-base">اكثر من</p>
      <p className=" text-2xl sm:text-3xl">{count}</p>
    </div>
  );
}
