"use client";

import { motion } from "framer-motion";

interface FadeProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeLeft({
  children,
  delay = 0,
}: FadeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}