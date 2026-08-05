"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import imageOne from "@public/landing-images/landing-one.avif";
import imageTwo from "@public/landing-images/landing-two.avif";
import imageThree from "@public/landing-images/landing-three.avif";

import { reemKufi } from "../../fonts";
import DeltaMark from "../delta-mark";
import { Button } from "../../components/button";

const landingImages = [imageOne, imageTwo, imageThree];

export default function SliderImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImageHandler = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === landingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImageHandler = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? landingImages.length - 1 : prevIndex - 1
    );
  };

  const slides = landingImages.map((imageSrc, index) => (
    <div key={index} className="min-w-full relative h-full">
      <Image
        className="w-full h-full object-cover relative"
        alt="صورة حرم المعهد"
        src={imageSrc}
        placeholder="blur"
        priority={index === 0}
        quality={85}
        fill
        sizes="(max-width: 480px) 200vw, 100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  ));

  return (
    <figure className="relative overflow-hidden w-full hero-img-hight min-h-[460px]">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/75 via-deep-navy/45 to-deep-navy/85 z-20" />

      <div className="overflow-hidden h-full">
        <div
          className="flex flex-row-reverse transition-transform duration-500 ease-in-out transform h-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {slides}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full px-4">
        <figcaption className="flex flex-col items-center justify-center gap-5 text-white text-center">
          <DeltaMark
            animate
            className="h-10 w-16 text-fertile"
          />

          <h1
            className={`${reemKufi.className} hero-reveal text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15]`}
            style={{ animationDelay: "120ms" }}
          >
            معهد الدلتا العالي
          </h1>

          <p
            className="hero-reveal text-lg sm:text-2xl lg:text-3xl text-white/90 font-semibold"
            style={{ animationDelay: "260ms" }}
          >
            للنظم والمعلومات الإدارية والمحاسبية
          </p>

          <div
            className="hero-reveal flex items-center gap-3 text-fertile"
            style={{ animationDelay: "380ms" }}
          >
            <span className="h-px w-12 sm:w-20 bg-white/40" />
            <DeltaMark className="h-4 w-7" />
            <span className="h-px w-12 sm:w-20 bg-white/40" />
          </div>

          <div
            className="hero-reveal flex flex-wrap items-center justify-center gap-3 pt-1"
            style={{ animationDelay: "500ms" }}
          >
            <Button
              asChild
              className="h-11 px-6 text-base bg-main-blue text-white hover:bg-main-blue/85"
            >
              <Link href="#about">تعرف على المعهد</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 px-6 text-base border-white/50 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/contact-us">تواصل معنا</Link>
            </Button>
          </div>
        </figcaption>
      </div>

      <button
        onClick={goToPreviousImageHandler}
        className="text-white absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 z-40 cursor-pointer rounded-full bg-white/10 p-2 backdrop-blur transition-colors hover:bg-white/25 focus-ring"
        aria-label="عرض الصورة السابقة"
      >
        <ChevronLeftIcon className="h-7 w-7 sm:h-9 sm:w-9" />
      </button>

      <button
        className="text-white absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 z-40 cursor-pointer rounded-full bg-white/10 p-2 backdrop-blur transition-colors hover:bg-white/25 focus-ring"
        onClick={goToNextImageHandler}
        aria-label="عرض الصورة التالية"
      >
        <ChevronRightIcon className="h-7 w-7 sm:h-9 sm:w-9" />
      </button>
    </figure>
  );
}
