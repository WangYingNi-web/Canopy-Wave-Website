import React from "react";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const GlassmorphismBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // 创建图层动画变量
  const layer1X = useTransform(mouseX, [0, 1], [-15 * 0.1, 15 * 0.1]);
  const layer1Y = useTransform(mouseY, [0, 1], [-10 * 0.1, 10 * 0.1]);
  
  const layer2X = useTransform(mouseX, [0, 1], [-15 * 0.2, 15 * 0.2]);
  const layer2Y = useTransform(mouseY, [0, 1], [-10 * 0.2, 10 * 0.2]);
  
  const layer3X = useTransform(mouseX, [0, 1], [-15 * 0.3, 15 * 0.3]);
  const layer3Y = useTransform(mouseY, [0, 1], [-10 * 0.3, 10 * 0.3]);

  // 添加鼠标移动监听
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 生成绿色色值的函数 - 增加对比度
  const generateGreenColor = (opacity: number, variation: number = 0, isLight: boolean = true) => {
    // 浅绿色到深绿色的范围
    const r = Math.floor(140 + (isLight ? 20 : -20) + variation * 15);
    const g = Math.floor(200 + (isLight ? 20 : -20) + variation * 15);
    const b = Math.floor(140 + (isLight ? 20 : -20) + variation * 15);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-[490px] relative mt-[84px] overflow-hidden"
    >
      {/* 径向渐变背景 - 由内而外从浅绿到深绿 */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(180, 230, 180, 1) 0%, 
            rgba(160, 220, 160, 0.9) 30%, 
            rgba(140, 200, 140, 0.8) 60%, 
            rgba(100, 170, 100, 0.7) 100%)`,
          zIndex: 0
        }}
        animate={{
          background: [
            `radial-gradient(circle at center, 
              rgba(180, 230, 180, 1) 0%, 
              rgba(160, 220, 160, 0.9) 30%, 
              rgba(140, 200, 140, 0.8) 60%, 
              rgba(100, 170, 100, 0.7) 100%)`,
            `radial-gradient(circle at center, 
              rgba(170, 220, 170, 1) 0%, 
              rgba(150, 210, 150, 0.9) 30%, 
              rgba(130, 190, 130, 0.8) 60%, 
              rgba(90, 160, 90, 0.7) 100%)`,
            `radial-gradient(circle at center, 
              rgba(180, 230, 180, 1) 0%, 
              rgba(160, 220, 160, 0.9) 30%, 
              rgba(140, 200, 140, 0.8) 60%, 
              rgba(100, 170, 100, 0.7) 100%)`
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* 动态光线效果 - 从中心向外扩散 */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div 
          className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-[#90EE90] rounded-full"
          style={{
            transform: "translate(-50%, -50%)",
            opacity: 0.1,
            filter: "blur(100px)"
          }}
          animate={{
            width: ["50%", "150%", "50%"],
            height: ["50%", "150%", "50%"],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 竖条背景 - 调整颜色以适应新背景 */}
      <div className="absolute inset-0 w-full h-full">
        {Array.from({ length: 30 }).map((_, i) => {
          // 根据位置决定颜色深浅 - 中心浅绿，边缘深绿
          const isCenter = Math.abs(i - 15) < 5;
          const variation = (Math.random() - 0.5) * 2;
          const baseColor = generateGreenColor(0.7 + Math.random() * 0.3, variation, isCenter);
          const highlightColor = generateGreenColor(0.9, variation + 0.5, isCenter);
          
          const widthPercent = 2.5 + (Math.random() * 1.5);
          
          return (
            <motion.div
              key={`stripe-${i}`}
              className="absolute top-0 bottom-0"
              style={{
                left: `${i * (100 / 30)}%`,
                width: `${widthPercent}%`,
                height: '100%',
                background: `linear-gradient(to bottom, ${baseColor}, ${highlightColor}, ${baseColor})`,
                backdropFilter: "blur(8px)",
                borderLeft: i % 2 === 0 ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
                borderRight: i % 2 === 1 ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
                boxShadow: i % 3 === 0 ? "0 0 15px rgba(128, 178, 36, 0.2)" : "none",
                zIndex: 1
              }}
              animate={{
                height: [
                  '100%', 
                  `${100 + (Math.random() * 10)}%`,
                  '100%'
                ],
                y: [
                  0,
                  Math.random() * 20 - 10,
                  0
                ],
                opacity: [0.7, 1, 0.7],
                scaleX: [1, 1 + Math.random() * 0.1, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 1.5
              }}
            />
          );
        })}
      </div>

      {/* 动态玻璃层 - 添加视差效果 */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backdropFilter: "blur(5px)",
          background: "linear-gradient(270deg, rgba(180, 230, 180, 0.02) 0%, rgba(160, 220, 160, 0.02) 50%, rgba(180, 230, 180, 0.02) 100%)",
          x: layer1X,
          y: layer1Y,
          zIndex: 2,
          willChange: "transform"
        }}
      />
      
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backdropFilter: "blur(5px)",
          background: "linear-gradient(270deg, rgba(180, 230, 180, 0.03) 0%, rgba(160, 220, 160, 0.03) 50%, rgba(180, 230, 180, 0.03) 100%)",
          x: layer2X,
          y: layer2Y,
          zIndex: 3,
          willChange: "transform"
        }}
      />
      
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backdropFilter: "blur(5px)",
          background: "linear-gradient(270deg, rgba(180, 230, 180, 0.04) 0%, rgba(160, 220, 160, 0.04) 50%, rgba(180, 230, 180, 0.04) 100%)",
          x: layer3X,
          y: layer3Y,
          zIndex: 4,
          willChange: "transform"
        }}
      />

      {/* 浮动粒子 - 调整为绿色系 */}
      <div className="absolute inset-0 z-5">
        {Array.from({ length: 30 }).map((_, i) => {
          const leftPos = `${Math.random() * 100}%`;
          const topPos = `${Math.random() * 100}%`;
          const width = `${Math.random() * 6 + 3}px`;
          const height = width;
          const randomVar = Math.random();
          
          // 中心粒子浅绿，边缘粒子深绿
          const isCenter = Math.sqrt(
            Math.pow(parseFloat(leftPos) - 50, 2) + 
            Math.pow(parseFloat(topPos) - 50, 2)
          ) < 30;
          
          const bgColor = generateGreenColor(0.7, randomVar, isCenter);
          const shadowColor = generateGreenColor(0.5);
          const shadowSize = `${Math.random() * 10 + 5}px`;
          const animY = Math.random() * -30;
          const animX = Math.random() * 20 - 10;
          const duration = 3 + Math.random() * 2;
          const delay = Math.random() * 1.5;
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                left: leftPos,
                top: topPos,
                width: width,
                height: height,
                background: bgColor,
                boxShadow: `0 0 ${shadowSize} ${shadowColor}`,
                zIndex: 5
              }}
              animate={{
                y: [0, animY, 0],
                x: [0, animX, 0],
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay
              }}
            />
          );
        })}
      </div>

      {/* 顶部/底部渐变遮罩 - 调整为绿色系 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#d0f0d0] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#a0d8a0] to-transparent z-10" />

      {/* 内容区域 - 添加轻微动画 */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-5xl sm:text-6xl font-black text-[#ffffff] text-center text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                "0 0 10px rgba(180, 230, 180, 0)",
                "0 0 20px rgba(180, 230, 180, 0.5)",
                "0 0 30px rgba(160, 220, 160, 0.3)",
                "0 0 10px rgba(180, 230, 180, 0)"
              ]
            }}
            transition={{ 
              y: { duration: 0.8 },
              textShadow: {
                duration: 4,
                repeat: Infinity
              }
            }}
          >
            Frontier-grade <br /> AI Infrastructure
          </motion.h1>
          
          {/* 添加一个中心光点 */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full"
            style={{
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(180,230,180,0) 70%)",
              filter: "blur(30px)",
              zIndex: -1
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismBanner;