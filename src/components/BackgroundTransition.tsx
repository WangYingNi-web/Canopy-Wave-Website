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
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showActiveImage, setShowActiveImage] = useState(false);
  
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: "0px 0px -5% 0px"
  });

  // 预加载图片
  useEffect(() => {
    const defaultImg = new Image();
    defaultImg.src = defaultImage;
    
    const activeImg = new Image();
    activeImg.src = activeImage;
    activeImg.onload = () => {
      setIsLoaded(true);
    };
    activeImg.onerror = () => {
      console.error(`Failed to load active image: ${activeImage}`);
      setIsLoaded(true);
    };
  }, [defaultImage, activeImage]);

  // 当进入视口且图片加载完成后激活效果
  useEffect(() => {
    if (isInView && isLoaded) {
      setIsActive(true);
      // 延迟显示激活图片，确保过渡效果平滑
      setTimeout(() => {
        setShowActiveImage(true);
      }, 100);
    }
  }, [isInView, isLoaded]);

  return (
    <div
      ref={ref}
      className={`${className} relative overflow-hidden`}
      style={{
        opacity: isActive ? 1 : 0.7,
        transform: isActive ? 'scale(1)' : `scale(${initialScale})`,
        filter: isInView ? 'saturate(1.2)' : 'saturate(0.7)',
        transition: `
          opacity ${fadeDuration}ms ease-in-out,
          transform ${scaleDuration}ms ease-in-out,
          filter ${fadeDuration}ms ease-in-out
        `,
        willChange: 'transform, opacity',
      }}
    >
      {/* 默认背景图片 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${defaultImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* 激活状态的背景图片 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${activeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: showActiveImage ? 1 : 0,
          transition: `opacity ${fadeDuration}ms ease-in-out`,
        }}
      />
    </div>
  );
}