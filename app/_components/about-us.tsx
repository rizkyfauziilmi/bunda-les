"use client";

import {
  BookOpenText,
  BriefcaseBusiness,
  Clock2,
  MessagesSquare,
  Smile,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardData: { icon: JSX.Element; title: string; description: string }[] = [
  {
    icon: <Users className="md:w-12 md:h-12 w-6 h-6" />,
    title: "Mengembangkan Karakter Positif",
    description:
      "Membimbing siswa mengembangkan karakter positif seperti kejujuran, tanggung jawab, dan kedisiplinan untuk kesuksesan di masa depan.",
  },
  {
    icon: <BookOpenText className="md:w-12 md:h-12 w-6 h-6" />,
    title: "Pembelajaran Fleksibel",
    description:
      "Pembelajaran yang fleksibel dan selaras dengan materi yang sedang dipelajari di sekolah, sehingga siswa dapat lebih mudah memahami materi pelajaran.",
  },
  {
    icon: <Clock2 className="md:w-12 md:h-12 w-6 h-6" />,
    title: "Waktu Belajar yang Disesuaikan",
    description:
      "Memungkinkan siswa untuk mengatur waktu belajar yang optimal sesuai dengan kesibukan mereka.",
  },
  {
    icon: <Smile className="md:w-12 md:h-12 w-6 h-6" />,
    title: "Pendekatan Mengajar Yang Ramah",
    description:
      "Pengajar berperan sebagai teman belajar yang membantu siswa memahami materi dengan cara yang santai dan menyenangkan.",
  },
  {
    icon: <BriefcaseBusiness className="md:w-12 md:h-12 w-6 h-6" />,
    title: "Penguatan Keterampilan Interpersonal",
    description:
      "Memberikan pelatihan untuk mengembangkan keterampilan sosial dan interpersonal siswa, mempersiapkan mereka untuk kehidupan pribadi dan profesional.",
  },
  {
    icon: <MessagesSquare className="md:w-12 md:h-12 w-6 h-6" />,
    title: "Evaluasi dan Feedback Berkala",
    description:
      "Melakukan evaluasi dan memberikan feedback berkala kepada siswa dan orang tua untuk memantau perkembangan belajar.",
  },
];

export const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col py-8 md:px-16" id="about-us">
      <div className="md:text-center text-balance mb-2">
        <h2 className="text-center scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
          Tentang Kami
        </h2>
        <blockquote className="text-center md:pl-6 italic md:text-lg text-sm">
          "Menjadi bimbingan belajar terdepan yang tidak hanya fokus pada
          prestasi akademis, tetapi juga pada pembentukan karakter dan akhlak
          mulia, membantu siswa melangkah kecil menuju masa depan besar yang
          gemilang."
        </blockquote>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cardData.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: index * 0.1 },
            }}
          >
            <Card className="h-full w-full shadow-lg">
              <CardContent className="flex flex-col justify-center py-4 items-center h-full text-center">
                {card.icon}
                <div className="md:text-lg text-sm font-semibold mt-2">
                  {card.title}
                </div>
                <p className="md:text-sm text-xs text-justify md:text-balance text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
