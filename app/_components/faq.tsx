"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const Faq = () => {
  return (
    <motion.div
      className="md:px-16 flex flex-col gap-4 items-center justify-center md:min-h-screen"
      id="faq"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2 },
      }}
    >
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="md:w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Bagaimana cara mendaftar untuk bimbel ini?
          </AccordionTrigger>
          <AccordionContent>
            Anda bisa mendaftar langsung melalui website kami atau menghubungi
            kami.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Berapa biaya yang harus dibayar untuk mengikuti bimbel ini?
          </AccordionTrigger>
          <AccordionContent>
            Untuk biaya bervariasi tergantung kelas berapa murid tersebut.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Apa yang membedakan bimbel les ini dari bimbel lain?
          </AccordionTrigger>
          <AccordionContent>
            Kami menawarkan pendekatan pengajaran yang personal dan interaktif,
            didukung oleh tutor yang berpengalaman dan materi yang disesuaikan
            dengan kebutuhan siswa, serta tutor bukan hanya mengajar materi
            tetapi juga mengembangkan karakter siswa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            Bagaimana format kelas bimbel les ini?
          </AccordionTrigger>
          <AccordionContent>
            Kelas kami tersedia dalam format offline, dengan jadwal fleksibel
            yang dapat disesuaikan dengan kebutuhan siswa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            Bagaimana jadwal kelas diatur?
          </AccordionTrigger>
          <AccordionContent>
            Jadwal kelas diatur berdasarkan kesepakatan antara siswa dan tutor.
            Kami berusaha untuk memberikan jadwal yang fleksibel untuk
            memudahkan siswa.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};
