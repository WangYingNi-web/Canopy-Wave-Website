import React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const DynamicGlassBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // 创建图层动画变量
  const createLayerTransform = (speed:any) => ({
    x: useTransform(mouseX, [0, 1], [-30 * speed, 30 * speed]),
    y: useTransform(mouseY, [0, 1], [-20 * speed, 20 * speed])
  });

  // 玻璃层配置 - 绿色光影效果
  const glassLayers = [
    {
      id: 1,
      gradient: "linear-gradient(270deg, rgba(128, 178, 36, 0.12) 0%, rgba(19, 37, 24, 0.15) 32.19%, rgba(128, 178, 36, 0.12) 100%)",
      speed: 0.3
    },
    {
      id: 2,
      gradient: "linear-gradient(270deg, rgba(140, 198, 63, 0.10) 0%, rgba(17, 32, 21, 0.13) 32.19%, rgba(140, 198, 63, 0.10) 100%)",
      speed: 0.2
    },
    {
      id: 3,
      gradient: "linear-gradient(270deg, rgba(152, 218, 90, 0.08) 0%, rgba(12, 23, 15, 0.10) 32.19%, rgba(152, 218, 90, 0.08) 100%)",
      speed: 0.1
    },
    {
      id: 4,
      gradient: "linear-gradient(270deg, rgba(164, 238, 117, 0.06) 0%, rgba(5, 10, 7, 0.06) 32.19%, rgba(164, 238, 117, 0.06) 100%)",
      speed: 0.05
    }
  ];

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

  return (
    <div 
      ref={containerRef}
      className="w-full h-[490px] relative mt-[84px] overflow-hidden"
    >
      {/* 基础背景图 */}
      <Image
        src="/home_banner.svg"
        alt="Home_Banner"
        fill
        className="object-cover"
        priority
      />

      {/* 动态玻璃层 */}
      {glassLayers.map((layer) => {
        const transform = createLayerTransform(layer.speed);
        
        return (
          <motion.div
            key={layer.id}
            className="absolute inset-0 w-full h-full"
            style={{
              backdropFilter: "blur(20px)",
              background: layer.gradient,
              border: "0.5px solid rgba(128, 178, 36, 0.05)",
              x: transform.x,
              y: transform.y,
              zIndex: layer.id,
              willChange: "transform"
            }}
            animate={{
              background: [
                layer.gradient,
                "linear-gradient(270deg, rgba(128,178,36,0.15) 0%, rgba(19,37,24,0.20) 32.19%, rgba(128,178,36,0.15) 100%)",
                layer.gradient
              ]
            }}
            transition={{ 
              background: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              },
              ease: "easeInOut"
            }}
          />
        );
      })}

      {/* 微妙的浮动粒子 - 绿色光点 */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#80B224] opacity-[0.08]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 4px rgba(128, 178, 36, 0.3)"
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* 顶部/底部渐变遮罩 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#060607] to-transparent z-15" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#060607] to-transparent z-15" />

      {/* 内容区域 - 添加轻微动画 */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-5xl sm:text-6xl font-black text-[#80B224] text-center text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                "0 0 10px rgba(128, 178, 36, 0)",
                "0 0 20px rgba(128, 178, 36, 0.6)",
                "0 0 30px rgba(128, 178, 36, 0.4)",
                "0 0 10px rgba(128, 178, 36, 0)"
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
            Instant GPU <br /> Cluster for <br /> Enterprise AI
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default DynamicGlassBanner;