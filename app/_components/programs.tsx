import { DraftingCompass, FlaskConical, Pi } from "lucide-react";
import { motion } from "framer-motion";

const programs: { title: string; description: string; icon: JSX.Element }[] = [
  {
    title: "Matematika",
    description:
      "Pelajaran matematika membantu siswa memahami konsep dasar hingga lanjut untuk mengembangkan kemampuan pemecahan masalah dan berpikir logis.",
    icon: <Pi className="w-12 h-12" />,
  },
  {
    title: "Fisika",
    description:
      "Pelajaran fisika mengajarkan prinsip-prinsip dasar alam semesta untuk memahami fenomena fisik.",
    icon: <DraftingCompass className="w-12 h-12" />,
  },
  {
    title: "Kimia",
    description:
      "Pelajaran kimia mengajarkan tentang materi dan perubahannya serta reaksi kimia yang terjadi di sekitar kita.",
    icon: <FlaskConical className="w-12 h-12" />,
  },
];

export const Programs = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-16 md:px-16"
      id="programs"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <motion.h2
          className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex-1"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          Ada pelajaran apa saja yang bisa dipelajari?
        </motion.h2>
        <div className="flex-1 space-y-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
            >
              <div className="p-4 rounded-full border-[1px]">
                {program.icon}
              </div>
              <div className="space-y-2">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
        <motion.h2
          className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex-1"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          Untuk siapa program ini?
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground flex-1"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          Siswa{" "}
          <span className="font-bold text-primary">SD, SMP, hingga SMA</span>{" "}
          yang ingin belajar lebih dalam tentang matematika, fisika, dan kimia.
        </motion.p>
      </div>
    </div>
  );
};
