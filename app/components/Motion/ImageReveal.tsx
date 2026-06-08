"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ImageReveal({
  children,
  delay = 0,
}: ImageRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}