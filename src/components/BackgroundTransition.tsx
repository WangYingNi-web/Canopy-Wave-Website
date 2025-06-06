import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface BackgroundTransitionProps {
  defaultImage: string;
  activeImage: string;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function BackgroundTransition({
  defaultImage,
  activeImage,
  threshold = 0.9, // 降低触发阈值，使动画更早开始
  triggerOnce = true,
  className = '',
}: BackgroundTransitionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: triggerOnce });

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1500ms] ${className}`}
      style={{
        backgroundImage: `url(${isInView ? activeImage : defaultImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'all 1.8s ease-in-out', // 增加过渡时间并应用到所有属性
        opacity: isInView ? 1 : 0.7, // 添加透明度过渡
        transform: isInView ? 'scale(1)' : 'scale(0.90)', // 添加缩放效果
      }}
    />
  );
}