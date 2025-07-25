import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function EuropeMap() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    return (
        <div ref={ref} className="w-full h-[380px] relative">
            {/* 使用固定比例的容器包裹地图和发光点 */}
            <div className="relative w-full h-full" style={{ aspectRatio: '580/400' }}>
                {/* 背景世界地图 - 使用绝对定位 */}
                <div className="absolute inset-0">
                    <Image
                        src="/iceland-world.svg"
                        alt="iceland world Map"
                        fill
                        className='object-contain'
                        priority
                    />
                </div>

                {/* 发光点效果层 - 与地图相同尺寸 */}
                <div className="absolute inset-0">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 580 400"  // 与图片原始尺寸匹配
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* 冰岛1发光点 - 使用相对于viewBox的坐标 */}
                        <motion.circle
                            cx="225"
                            cy="128"
                            r="8"
                            initial={{ opacity: 0.6 }}
                            animate={{
                                opacity: isInView ? 0.8 : 0,
                                scale: isInView ? [1, 1.5, 1] : 1
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            fill="#8CC63F"
                            filter="url(#glow)"
                        />

                        {/* 冰岛2发光点 */}
                        <motion.circle
                            cx="345"
                            cy="125"
                            r="8"
                            initial={{ opacity: 0.6 }}
                            animate={{
                                opacity: isInView ? 0.8 : 0,
                                scale: isInView ? [1, 1.5, 1] : 1
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            fill="#8CC63F"
                            filter="url(#glow)"
                        />

                        {/* 发光效果滤镜 */}
                        <defs>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                <feComposite
                                    in="coloredBlur"
                                    in2="SourceGraphic"
                                    operator="over"
                                    result="compositedGlow"
                                />
                                <feMerge>
                                    <feMergeNode in="compositedGlow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}