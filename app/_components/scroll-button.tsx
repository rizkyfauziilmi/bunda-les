import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpToLine } from "lucide-react";
import { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ScrollButtonProps {
  isHidden: boolean;
}

export const ScrollButton = ({ isHidden }: ScrollButtonProps) => {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPercentage(Math.round(latest * 100));
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.2 }}
      className="fixed right-10 bottom-10 z-50 bg-background md:w-12 w-8 rounded-full cursor-pointer"
      onClick={scrollToTop}
    >
      <CircularProgressbarWithChildren value={scrollPercentage}>
        <ArrowUpToLine className="md:w-4 md:h-4 w-3 h-3" />
      </CircularProgressbarWithChildren>
    </motion.div>
  );
};
