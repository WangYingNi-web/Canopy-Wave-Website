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
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}