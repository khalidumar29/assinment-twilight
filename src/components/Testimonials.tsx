"use client";
import { useState } from "react";
import TestimonialCard from "./ui/TestimonialCard";
import { testimonials } from "@/db/data";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  return (

    
  );
}
