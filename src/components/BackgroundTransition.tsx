import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface BackgroundTransitionProps {
  defaultImage: string;
  activeImage: string;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
  fadeDuration?: number;
  scaleDuration?: number;
  initialScale?: number;
}

export default function BackgroundTransition({
  defaultImage,
  activeImage,
  threshold = 0.9,
  triggerOnce = true,
  className = '',
  fadeDuration = 2500,
  scaleDuration = 2000,
  initialScale = 0.95,
}: BackgroundTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeImageLoaded, setActiveImageLoaded] = useState(false);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: "0px 0px -5% 0px"
  });

  // 图片加载管理
  useEffect(() => {
    let isMounted = true;
    
    // 预加载默认图片
    const defaultImg = new Image();
    defaultImg.src = defaultImage;
    
    // 预加载激活图片
    const activeImg = new Image();
    activeImg.src = activeImage;
    
    // 当激活图片加载完成
    activeImg.onload = () => {
      if (isMounted) {
        setIsLoaded(true);
        setActiveImageLoaded(true);
      }
    };
    
    // 错误处理
    activeImg.onerror = () => {
      console.error(`Failed to load active image: ${activeImage}`);
      if (isMounted) {
        setIsLoaded(true);
        setActiveImageLoaded(false);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [defaultImage, activeImage]);

  // 当进入视口且图片加载完成后激活效果
  useEffect(() => {
    if (isInView && isLoaded) {
      setIsActive(true);
    }
  }, [isInView, isLoaded]);

  return (
    <div 
      ref={ref}
      className={`${className} absolute inset-0`}
    >
      {/* 1. 默认背景 - 始终显示 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${defaultImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isActive ? 0 : 1,
          transition: `opacity ${fadeDuration}ms ease-in-out`,
          zIndex: 10
        }}
      />
      
      {/* 2. 激活背景 - 仅在加载后显示 */}
      {activeImageLoaded && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${activeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'scale(1)' : `scale(${initialScale})`,
            filter: isActive ? 'saturate(1.3)' : 'saturate(0.6)',
            transition: `
              opacity ${fadeDuration}ms ease-in-out,
              transform ${scaleDuration}ms ease-in-out,
              filter ${fadeDuration}ms ease-in-out
            `,
            willChange: 'transform, opacity',
            zIndex: 20
          }}
        />
      )}
    </div>
  );
}