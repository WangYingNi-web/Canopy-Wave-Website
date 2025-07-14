'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
}

export default function SlideUp({ children, delay = 0 }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// 新增：从左向右滑出的组件
interface SlideFromLeftProps {
  children: ReactNode;
  delay?: number;
  distance?: number;
}

export function SlideFromLeft({ children, delay = 0, distance = 100 }: SlideFromLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}