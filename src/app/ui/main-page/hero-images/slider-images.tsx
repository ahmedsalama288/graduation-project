"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import imageOne from "@public/landing-images/landing-one.avif";
import imageTwo from "@public/landing-images/landing-two.avif";
import imageThree from "@public/landing-images/landing-three.avif";

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
    <div key={index} className="min-w-full z-50 relative h-screen">
      {index === 0 && (
        <Image
          className="w-full h-screen object-cover contrast-[90%] relative"
          alt="landing page image"
          src={imageSrc}
          placeholder="blur"
          quality={85}
          fill
          sizes="(max-width: 480px) 200vw, 100vw"
          style={{
            objectFit: "cover",
          }}
          priority={true}
        />
      )}
      {index !== 0 && (
        <Image
          className="min-w-full h-screen object-cover contrast-[90%] relative"
          alt="landing page image"
          src={imageSrc}
          placeholder="blur"
          priority={false}
          quality={85}
          fill
          sizes="(max-width: 480px) 200vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      )}
    </div>
  ));

  return (
    <figure className="relative overflow-hidden w-full hero-img-hight">
      <div className="absolute inset-0 bg-black/20 z-20" />
      <div className="overflow-hidden">
        <div
          className="flex flex-row-reverse transition-transform duration-500 ease-in-out transform"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {slides}
        </div>
        <>
          <button
            onClick={goToPreviousImageHandler}
            className="text-white absolute top-1/2 -translate-y-1/2 left-1 z-50 cursor-pointer"
            aria-label="view previous image"
          >
            <ChevronLeftIcon className="h-[45px] w-[45px]  md:h-14 md:w-14" />
          </button>

          <button
            className="text-white absolute top-1/2 -translate-y-1/2 right-1 z-50 cursor-pointer"
            onClick={goToNextImageHandler}
            aria-label="view next image"
          >
            <ChevronRightIcon className="h-[45px] w-[45px]  md:h-14 md:w-14" />
          </button>
        </>
      </div>

      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <figcaption
          className="
                  flex flex-col justify-center items-center
                  text-3xl md:text-5xl whitespace-nowrap !leading-[1.2]
                "
        >
          <span>معهد الدلتا العالي</span>
          <span>للنظم والمعلومات الإدارية</span>
        </figcaption>
      </div>
    </figure>
  );
}
