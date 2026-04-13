'use client';
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScrollProps = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: ScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}