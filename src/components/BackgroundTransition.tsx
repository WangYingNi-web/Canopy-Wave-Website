import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const isInView = useInView(ref, { amount: threshold, once: triggerOnce });

  // 预加载图片
  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      };

      try {
        await Promise.all([
          loadImage(defaultImage),
          loadImage(activeImage)
        ]);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        setImagesLoaded(true); // 即使失败也继续显示
      }
    };

    preloadImages();
  }, [defaultImage, activeImage]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 默认背景图片 */}
      <div
        ref={ref}
        className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
        style={{
          backgroundImage: `url(${defaultImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: imagesLoaded && isInView ? 0 : 1,
        }}
      />
      
      {/* 激活状态背景图片 */}
      <div
        className="absolute inset-0 transition-all duration-[1800ms] ease-in-out"
        style={{
          backgroundImage: `url(${activeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: imagesLoaded && isInView ? 1 : 0,
          transform: imagesLoaded && isInView ? 'scale(1)' : 'scale(0.95)',
        }}
      />
    </div>
  );
}