"use client";

import { UserRoundPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StarReview } from "./star-review";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { hero1, hero2, hero3, hero4, hero5 } from "@/public/images/heroIndex";

const photos: StaticImageData[] = [hero1, hero2, hero3, hero4, hero5];

export const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center gap-4 py-4 md:pl-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        className="flex-1 flex flex-col gap-6"
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Langkah Kecil Menuju Masa Depan Besar
        </h1>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Bergabunglah dengan{" "}
            <span className="font-bold text-primary">BUNDA LES</span> untuk
            memulai perjalanan belajar yang menyenangkan dan bermakna. Kami siap
            membantu Anda meraih prestasi akademis serta membentuk karakter yang
            unggul.
          </p>
          <StarReview />
        </div>
        <Button className="w-full md:w-fit" asChild>
          <Link href="/registration">
            <UserRoundPen className="w-4 h-4 mr-2" />
            Daftar Sekarang
          </Link>
        </Button>
      </motion.div>
      <div className="flex-1 flex justify-end">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="md:-mr-2">
            {photos.map((photo, index) => {
              return (
                <CarouselItem key={`foto-hero-${index}`}>
                  <Image
                    src={photo}
                    alt={`foto-hero-${index}`}
                    placeholder="blur"
                    priority
                    className="rounded-xl w-full h-full object-cover"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
