import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function EuropeMap() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    return (
        <div ref={ref} className="w-full h-[400px] relative">
            {/* 背景世界地图 */}
            <Image
                src="/iceland-world.svg"
                alt="iceland world Map"
                width={580}
                height={400}
                className="object-contain transform translate-x-10 -translate-y-8" // 添加transform和translate类来移动图片
                style={{ width: 'auto', height: 'auto' }}
                priority
            />

            {/* 发光点效果层 */}
            <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
                    {/* 冰岛1发光点 */}
                    <motion.circle
                        cx="440"
                        cy="120"
                        r="12"
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
                        fill="#8CC63F"  // 实心绿色
                        filter="url(#glow)"
                    />

                    {/* 冰岛2发光点 */}
                    <motion.circle
                        cx="640"
                        cy="120"
                        r="12"
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
                        fill="#8CC63F"  // 实心绿色
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
    );
}