import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.75 // 更快的动画时间
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}  // 添加缩放效果
      whileInView={{ opacity: 1, scale: 1 }}  // 缩放回正常
      viewport={{ once: true }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut"  // 使用更平滑的过渡
      }}
    >
      {children}
    </motion.div>
  );
}
