// import { useInView } from 'framer-motion'; 
// import { useEffect, useRef, useState } from 'react'; 

// interface BackgroundTransitionProps { 
//   defaultImage: string; 
//   activeImage: string; 
//   threshold?: number; 
//   className?: string; 
//   triggerOnce?: boolean; 
// } 

// export default function BackgroundTransition({ 
//   defaultImage, 
//   activeImage, 
//   threshold = 0.6, // 降低阈值，让动画更早触发
//   triggerOnce = true, 
//   className = '', 
// }: BackgroundTransitionProps) { 
//   const ref = useRef(null); 
//   const [isLoaded, setIsLoaded] = useState(false); 
//   const isInView = useInView(ref, { 
//     amount: threshold, 
//     once: triggerOnce, 
//     margin: "0px 0px -20% 0px" // 增加margin，让动画更早触发
//   }); 

//   // 优化图片加载逻辑：仅预加载activeImage 
//   useEffect(() => { 
//     // 确保默认图片总是立即显示 
//     const defaultImg = new Image(); 
//     defaultImg.src = defaultImage; 
    
//     // 预加载激活图片 
//     const activeImg = new Image(); 
//     activeImg.src = activeImage; 
//     activeImg.onload = () => { 
//       setIsLoaded(true); 
//     }; 
    
//     // 错误处理 
//     activeImg.onerror = () => { 
//       console.error(`Failed to load active image: ${activeImage}`); 
//       setIsLoaded(true); // 即使加载失败也继续 
//     }; 
//     return () => { 
//       // 组件卸载时清理 
//       setIsLoaded(false); 
//     }; 
//   }, [defaultImage, activeImage]); 

//   // 计算当前应该显示的图片 
//   const currentImage = isInView && isLoaded ? activeImage : defaultImage; 

//   return (
//     <div 
//       ref={ref} 
//       className={`${className} transition-all duration-[3000ms] ease-out`} // 增加到4秒，使用ease-out
//       style={{ 
//         backgroundImage: `url(${currentImage})`, 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center', 
//         backgroundRepeat: 'no-repeat', 
//         opacity: isInView ? 1 : 0.6, // 增加对比度
//         transform: isInView ? 'scale(1.02)' : 'scale(0.92)', // 增加缩放幅度
//         filter: isInView ? 'saturate(1.2)' : 'saturate(0.7)',
//         // filter: isInView ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.8) saturate(0.7)',
//         transition: 'all 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//       }} 
//     /> 
//   ); 
// }

import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface BackgroundTransitionProps {
  defaultImage: string;
  activeImage: string;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
  fadeDuration?: number; // 新增淡入淡出时长控制
  scaleDuration?: number; // 新增缩放时长控制
  initialScale?: number; // 初始缩放比例
}

export default function BackgroundTransition({
  defaultImage,
  activeImage,
  threshold = 0.9,
  triggerOnce = true,
  className = '',
  fadeDuration = 2500, // 默认2.5秒淡入淡出
  scaleDuration = 2000, // 默认2秒缩放
  initialScale = 0.95, // 初始缩放比例
}: BackgroundTransitionProps) {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: "0px 0px -5% 0px" // 调整触发边界
  });

  // 图片加载和激活状态管理
  useEffect(() => {
    // 确保默认图片总是立即显示
    const defaultImg = new Image();
    defaultImg.src = defaultImage;
    
    // 预加载激活图片
    const activeImg = new Image();
    activeImg.src = activeImage;
    activeImg.onload = () => setIsLoaded(true);
  }, [defaultImage, activeImage]);

  // 当进入视口且图片加载完成后激活效果
  useEffect(() => {
    if (isInView && isLoaded) {
      setIsActive(true);
    }
  }, [isInView, isLoaded]);

  // 计算当前应该显示的图片
  const currentImage = isActive ? activeImage : defaultImage;

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: isActive ? 1 : 0.7,
        transform: isActive ? 'scale(1)' : `scale(${initialScale})`,
        transition: `
          background-image ${fadeDuration}ms ease-in-out,
          opacity ${fadeDuration}ms ease-in-out,
          transform ${scaleDuration}ms ease-in-out
        `,
        willChange: 'transform, opacity',
      }}
    />
  );
}