import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { textFallback } from "@/lib/string";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

const reviews: {
  name: string;
  avatar: string;
  text: string;
  role: string;
}[] = [
  {
    name: "Rizky Fauzi Ilmi",
    avatar: "/images/testimoni/rizky.jpg",
    text: "Membantu memahami pelajaran matematika, terutama setelah saya lulus dan melanjutkan kuliah di jurusan Teknik Informatika. Dengan pondasi yang kuat yang saya dapatkan dari sini, saya merasa lebih siap menghadapi tantangan akademis di perguruan tinggi.",
    role: "Mahasiswa di Widyatama",
  },
  {
    name: "Hussein",
    avatar: "https://github.com/shadcn.png",
    text: "sangat menyenangkan",
    role: "Mahasiswa di Unpar",
  },
  {
    name: "Ali Musthofa",
    avatar: "/images/testimoni/ali.jpg",
    text: "seru sih pembelajarannya dan penjelasannya juga mudah dimengerti, bundanya juga baik pisan euy, ilmunya bermanfaat pisan sampai saya kuliah sekarang 🫡.",
    role: "Mahasiswa di Politeknik Manufaktur Bandung",
  },
  {
    name: "Hamada Faiz",
    avatar: "/images/testimoni/faiz.jpg",
    text: "Seru, les dapet petuah dan ilmu agama juga.",
    role: "Mahasiswa di Itenas",
  },
  {
    name: "Mahesa Jihaddul Akbar Haryadi",
    avatar: "https://github.com/shadcn.png",
    text: "Kesan belajar di les bunda asyik, terus dapat nambah teman. kekeluargaan nya sangat terasa sehingga membuat materi yang dipelajari mudah untuk dipahami.",
    role: "Mahasiswa di Universitas Pendidikan Indonesia",
  },
  {
    name: "Michael Yonathan Purba",
    avatar: "/images/testimoni/michael.jpg",
    text: "Les bunda sangat bagus sekali, dengan ada nya les bunda saya bisa belajar sambil push rank.",
    role: "Mahasiswa di Institut Teknologi Bandung",
  },
  {
    name: "Muhammad Nauffal Ramdhani",
    avatar: "/images/testimoni/nauffalr.png",
    text: "Lesnya sangat membantu saya dalam mempelajari pelajaran-pelajaran khususnya dulu saat UN.",
    role: "Mahasiswa di Telkom University",
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      className="md:px-16 relative justify-center flex flex-col gap-4 md:gap-0 md:min-h-screen"
      id="testimonials"
    >
      <div className="bg-gradient-to-r from-background via-transparent to-background inset-0 z-40 absolute hidden md:block pointer-events-none"></div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
        Apa kata mereka?
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex items-center md:h-96">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="p-0">
                    <div
                      className={cn(
                        current === index ? "md:h-56" : "md:h-48",
                        "flex flex-col justify-between p-4 transition-all duration-300 space-y-6 md:space-y-0"
                      )}
                    >
                      <div className="text-sm font-semibold flex-1">
                        {review.text}
                      </div>
                      <div className="flex justify-between gap-2 items-center">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src={review.avatar}
                              className="object-cover object-center"
                            />
                            <AvatarFallback className="">
                              {textFallback(review.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col gap-2">
                            <small className="text-sm font-bold leading-none">
                              {review.name}
                            </small>
                            <small className="text-xs leading-none">
                              {review.role}
                            </small>
                          </div>
                        </div>
                        <div className="bg-muted p-2 rounded-full flex gap-1 border-primary">
                          <Star
                            className="w-4 h-4 text-transparent"
                            fill="gold"
                          />
                          <Star
                            className="w-4 h-4 text-transparent"
                            fill="gold"
                          />
                          <Star
                            className="w-4 h-4 text-transparent"
                            fill="gold"
                          />
                          <Star
                            className="w-4 h-4 text-transparent"
                            fill="gold"
                          />
                          <Star
                            className="w-4 h-4 text-transparent"
                            fill="gold"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => api?.scrollPrev(false)}
          variant="outline"
          size="icon"
          className="rounded-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => api?.scrollNext(false)}
          variant="outline"
          size="icon"
          className="rounded-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
