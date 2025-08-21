import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface BackgroundTransitionProps {
  defaultImage: string;
  activeImage: string;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
  fadeDuration?: number;
  direction?: 'up' | 'down';
}

export default function BackgroundTransition({
  defaultImage,
  activeImage,
  threshold = 0.9,
  triggerOnce = true,
  className = '',
  fadeDuration = 3000,
  direction = 'up',
}: BackgroundTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeImageLoaded, setActiveImageLoaded] = useState(false);
  const [revealProgress, setRevealProgress] = useState(0);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: "0px 0px -5% 0px"
  });

  // 图片加载管理
  useEffect(() => {
    let isMounted = true;
    
    const defaultImg = new Image();
    defaultImg.src = defaultImage;
    
    const activeImg = new Image();
    activeImg.src = activeImage;
    
    activeImg.onload = () => {
      if (isMounted) {
        setIsLoaded(true);
        setActiveImageLoaded(true);
      }
    };
    
    activeImg.onerror = () => {
      if (isMounted) {
        setIsLoaded(true);
        setActiveImageLoaded(false);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [defaultImage, activeImage]);

  // 当进入视口且图片加载完成后开始动画
  useEffect(() => {
    if (isInView && isLoaded) {
      setIsActive(true);
      
      // 使用 requestAnimationFrame 实现平滑的进度动画
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / fadeDuration, 1);
        
        // 使用缓动函数让动画更自然
        const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setRevealProgress(easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, isLoaded, fadeDuration]);

  // 根据进度计算遮罩位置
  const getMaskImage = () => {
    if (!isActive) {
      return 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)';
    }
    
    const revealHeight = revealProgress * 100;
    
    if (direction === 'up') {
      return `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${revealHeight}%, rgba(0,0,0,0) ${revealHeight + 5}%, rgba(0,0,0,0) 100%)`;
    } else {
      const startPoint = 100 - revealHeight;
      return `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${revealHeight}%, rgba(0,0,0,0) ${revealHeight + 5}%, rgba(0,0,0,0) 100%)`;
    }
  };

  return (
    <div 
      ref={ref}
      className={`${className} absolute inset-0 overflow-hidden`}
    >
      {/* 1. 默认背景图片（浅色效果） */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${defaultImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 10
        }}
      />
      
      {/* 浅色覆盖层 - 使用白色半透明覆盖 */}
      <div 
        className="absolute inset-0 z-15"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // 浅色覆盖效果
          transition: `opacity ${fadeDuration}ms ease-in-out`,
          opacity: isActive ? 0 : 1, // 激活时淡出
        }}
      />
      
      {/* 2. 亮色背景图片 - 使用动态遮罩实现逐步显示 */}
      {activeImageLoaded && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${activeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 20,
            maskImage: getMaskImage(),
            WebkitMaskImage: getMaskImage(),
          }}
        />
      )}
      
      {/* 3. 光照效果 - 跟随遮罩边缘移动 */}
      {isActive && revealProgress > 0 && (
        <div 
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background: direction === 'up' 
              ? `linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${(revealProgress * 100) - 10}%, rgba(255,255,255,0.6) ${revealProgress * 100}%, rgba(255,255,255,0.3) ${(revealProgress * 100) + 5}%, rgba(255,255,255,0) ${(revealProgress * 100) + 15}%, rgba(255,255,255,0) 100%)`
              : `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${(revealProgress * 100) - 10}%, rgba(255,255,255,0.6) ${revealProgress * 100}%, rgba(255,255,255,0.3) ${(revealProgress * 100) + 5}%, rgba(255,255,255,0) ${(revealProgress * 100) + 15}%, rgba(255,255,255,0) 100%)`,
          }}
        />
      )}
      
      {/* 4. 额外的闪光效果 - 在动画完成时触发 */}
      {revealProgress >= 0.9 && (
        <div 
          className="absolute inset-0 z-40 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
            opacity: Math.sin((revealProgress - 0.9) * 10) * 0.5,
          }}
        />
      )}
    </div>
  );
}