"use client";
import fotoBunda from "@/public/images/bunda.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export const Teacher = () => {
  return (
    <motion.div
      className="md:px-16 flex flex-col-reverse md:flex-row justify-between items-center md:gap-32 gap-4 md:min-h-screen"
      id="teacher"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 },
      }}
    >
      <div className="space-y-3 h-full md:w-1/2">
        <p className="text-sm text-muted-foreground">
          Pengajar Matematika, Fisika, dan Kimia
        </p>
        <h4 className="text-xl font-semibold">Dewi Nopiani</h4>
        <p className="text-sm font-medium text-justify">
          Pengajar kami adalah lulusan Institut Pertanian Bogor (IPB) yang
          memiliki pengalaman mengajar. Dengan bertahun-tahun pengalaman dalam
          mengajar les privat, khususnya dalam bidang matematika, fisika, dan
          kimia, pengajar kami telah berhasil mendidik banyak siswa mencapai
          hasil yang sangat baik dalam ujian sekolah maupun ujian masuk
          perguruan tinggi. Mengutamakan pemahaman konsep dasar, mengembangkan
          keterampilan pemecahan masalah, dan memberikan bimbingan yang
          disesuaikan dengan kebutuhan setiap siswa, pengajar kami berkomitmen
          untuk memberikan pendidikan terbaik bagi setiap murid.
        </p>
      </div>
      <div className="md:w-1/2">
        <Image
          src={fotoBunda}
          alt="foto-bunda"
          placeholder="blur"
          className="rounded-lg object-cover object-left"
        />
      </div>
    </motion.div>
  );
};
