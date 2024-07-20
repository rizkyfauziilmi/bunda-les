"use client";

import { useRef } from "react";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { useInView } from "framer-motion";
import { AboutUs } from "./_components/about-us";
import { Programs } from "./_components/programs";
import { Testimonials } from "./_components/testimonials";
import { Gallery } from "./_components/gallery";
import { Teacher } from "./_components/teacher";
import { Faq } from "./_components/faq";
import { ScrollButton } from "./_components/scroll-button";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  return (
    <>
      <Navbar />
      <div className="px-6 space-y-8 md:space-y-0 md:px-0">
        <div ref={ref}>
          <Hero />
        </div>
        <AboutUs />
        <Programs />
        <Testimonials />
        <Gallery />
        <Teacher />
        <Faq />
        <ScrollButton isHidden={isInView} />
      </div>
    </>
  );
}
