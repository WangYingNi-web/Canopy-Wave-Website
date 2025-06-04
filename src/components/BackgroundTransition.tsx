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
  threshold = 0.9,
  triggerOnce = true,
  className = '',
}: BackgroundTransitionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold ,once: triggerOnce});

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${className}`}
      style={{
        backgroundImage: `url(${isInView ? activeImage : defaultImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}