"use client";

import Image from "next/image";
import landingImageOne from "@public/landing-images/landing-one.webp";
import landingImageTwo from "@public/landing-images/landing-two.webp";
import landingImageThree from "@public/landing-images/landing-three.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AnimatedSection from "../../shared-ui/pages-components/animated-section";
import { cn } from "@/app/lib/utils";

export default function LandingImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const landingImages = [landingImageOne, landingImageTwo, landingImageThree];

  const goToNextImageHandler = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === landingImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const goToPreviousImageHandler = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? landingImages.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  return (
    <AnimatedSection duration="duration-500">
      <figure
        className={`
        relative
        overflow-hidden w-full hero-img-hight
    `}
      >
        <div className=" absolute inset-0 bg-black/20 z-20" />
        <div>
          <Image
            className={cn(
              "w-full h-screen object-cover contrast-[90%] relative",
              "transition duration-[700ms] ease-in-out",
              isAnimating && "opacity-95 scale-[1.20]",
              !isAnimating && "opacity-100 scale-100"
            )}
            src={landingImages[currentImageIndex]}
            alt="landing page image"
            width={10000}
            height={600}
            quality={30}
            priority
          />
          <>
            <ChevronLeftIcon
              className={`
            h-[45px] w-[45px]  md:h-14 md:w-14 
            text-white
            absolute top-1/2 -translate-y-1/2 left-1 z-50
            cursor-pointer
          `}
              onClick={goToPreviousImageHandler}
            />
            <ChevronRightIcon
              className={`
            h-[45px] w-[45px]  md:h-14 md:w-14 
            text-white

            block
            absolute top-1/2 -translate-y-1/2 right-1 z-50
            cursor-pointer
          `}
              onClick={goToNextImageHandler}
            />
          </>
        </div>

        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <AnimatedSection>
            <figcaption
              className="
                  flex flex-col justify-center items-center
                  text-3xl md:text-5xl whitespace-nowrap !leading-[1.2]
                "
            >
              <span>معهد الدلتا العالي</span>
              <span>للنظم والمعلومات الإدارية</span>
            </figcaption>
          </AnimatedSection>
        </div>
      </figure>
    </AnimatedSection>
  );
}
