import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  sd1,
  sd2,
  sd3,
  sd4,
  sd5,
  sd6,
  sd7,
  sd8,
  sd9,
} from "@/public/images/sd/sdIndex";
import {
  smp1,
  smp2,
  smp3,
  smp4,
  smp5,
  smp6,
  smp7,
  smp8,
  smp9,
  smp10,
} from "@/public/images/smp/smpIndex";
import {
  sma1,
  sma2,
  sma3,
  sma4,
  sma5,
  sma6,
  sma7,
  sma8,
  sma9,
  sma10,
  sma11,
  sma12,
  sma13,
  sma14,
  sma15,
  sma16,
  sma17,
  sma18,
  sma19,
} from "@/public/images/sma/smaIndex";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

enum GalleryType {
  SD,
  SMP,
  SMA,
  Other,
}

const imagesData: { endpoint: GalleryType; images: StaticImageData[] }[] = [
  {
    endpoint: GalleryType.SD,
    images: [sd1, sd2, sd3, sd4, sd5, sd6, sd7, sd8, sd9],
  },
  {
    endpoint: GalleryType.SMP,
    images: [smp4, smp5, smp6, smp7, smp8, smp9, smp10, smp1, smp2, smp3],
  },
  {
    endpoint: GalleryType.SMA,
    images: [sma1, sma2, sma3, sma4, sma5, sma6, sma7, sma8, sma9, sma10, sma11, sma12, sma13, sma14, sma15, sma16, sma17, sma18, sma19],
  },
  {
    endpoint: GalleryType.Other,
    images: [],
  },
];

export const Gallery = () => {
  const [currentGalleryState, setCurrentGalleryState] = useState<GalleryType>(
    GalleryType.SD
  );
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const pageSize = isMobile ? 4 : 8; // Number of images per page

  const totalImages =
    imagesData.find((data) => data.endpoint === currentGalleryState)?.images
      .length || 0;
  const totalPages = Math.ceil(totalImages / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div
      className="min-h-screen text-center flex flex-col justify-start py-12 md:px-16"
      id="gallery"
    >
      <div>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Galeri
        </h2>
        <p className="text-sm text-muted-foreground">
          Kumpulan foto kegiatan kami
        </p>
      </div>
      <div className="md:space-x-8 md:mt-8 mt-4">
        <Button
          variant={currentGalleryState === GalleryType.SD ? "default" : "ghost"}
          onClick={() => setCurrentGalleryState(GalleryType.SD)}
        >
          SD
        </Button>
        <Button
          variant={
            currentGalleryState === GalleryType.SMP ? "default" : "ghost"
          }
          onClick={() => setCurrentGalleryState(GalleryType.SMP)}
        >
          SMP
        </Button>
        <Button
          variant={
            currentGalleryState === GalleryType.SMA ? "default" : "ghost"
          }
          onClick={() => setCurrentGalleryState(GalleryType.SMA)}
        >
          SMA
        </Button>
        <Button
          variant={
            currentGalleryState === GalleryType.Other ? "default" : "ghost"
          }
          onClick={() => setCurrentGalleryState(GalleryType.Other)}
        >
          Lainnya
        </Button>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      >
        {imagesData
          .find((data) => data.endpoint === currentGalleryState)
          ?.images.slice(startIndex, endIndex)
          .map((image, index) => (
            <Image
              key={`foto-gallery-${currentGalleryState}-${startIndex + index}`}
              src={image}
              alt={`foto-gallery-${currentGalleryState}-${startIndex + index}`}
              placeholder="blur"
              className="rounded-xl shadow-lg"
            />
          ))}
      </motion.div>
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={cn(
                  currentPage === 1
                    ? "cursor-not-allowed text-muted-foreground"
                    : "cursor-pointer"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage === 1) return;
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                className={cn(
                  currentPage === totalPages
                    ? "cursor-not-allowed text-muted-foreground"
                    : "cursor-pointer"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage === totalPages) return;
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};
