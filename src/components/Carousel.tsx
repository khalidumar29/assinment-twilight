"use client";
import { images } from "@/db/data";
import SectionContainer from "@/utils/SectionContainer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const Carousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <SectionContainer>
      <div className="relative w-full mx-auto h-[55vh] lg:h-[88vh] pt-5">
        <div className="rounded-xl overflow-hidden h-full relative">
          <div
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="min-w-full relative h-full" key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="absolute pb-10 lg:p-16 p-4 sm:p-8 w-full lg:w-2/4 -bottom-1 left-6 text-white">
                  <h2 className="lg:text-5xl text-white md:text-3xl uppercase text-2xl font-bold">
                    {image.title}
                  </h2>
                  <div className="w-full">
                    <Link
                      href="/"
                      className="hover-underline after:bg-white mt-3 rounded-[3px] font-semibold flex items-center group gap-x-2 text-white"
                    >
                      <span className="flex items-center gap-x-1 text-[16px]">
                        SHOP NOW
                        <span className="transform group-hover:rotate-0 duration-300 rotate-[-45deg]">
                          <ArrowRight size={18} strokeWidth={3} />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 drop-shadow-lg bg-[#302e2ecc] rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 md:hidden lg:hidden"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 drop-shadow-lg bg-[#302e2ecc] rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 md:hidden lg:hidden"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
          <div className="absolute flex justify-between items-center right-6 bottom-9 text-white gap-5">
            <button
              onClick={prevSlide}
              className="hidden md:block lg:block top-1/2 -translate-y-1/2 left-4 z-10 p-2 drop-shadow-lg bg-[#302e2ecc] rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            >
              <ArrowLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:block lg:block top-1/2 -translate-y-1/2 left-4 z-10 p-2 drop-shadow-lg bg-[#302e2ecc] rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            >
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-[#C29D04]" : "bg-white/50"
                } hover:bg-[#C29D04] focus:bg-[#C29D04] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Carousel;
