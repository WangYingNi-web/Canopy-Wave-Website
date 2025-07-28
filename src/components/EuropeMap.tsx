import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

// type MapType = 'NorthAmerica' | 'Europe' | 'Canada' | 'NorthAmericaWithCanada';
type MapType = 'NorthAmericaWithCanada' | 'Europe';


interface MapConfig {
    src: string;
    alt: string;
    glowPoints: Array<{
        cx: string;
        cy: string;
        label: string;
    }>;
    isComposite?: boolean;
    canadaPosition?: {
        top: string;
        right: string;
        width: string;
        height: string;
    };
}

const mapConfigs: Record<MapType, MapConfig> = {
    NorthAmericaWithCanada: {
        src: '/map/NorthAmerica_Map.svg',
        alt: 'North America with Canada Map',
        isComposite: true,
        canadaPosition: {
            top: '-50px',
            right: '12%',
            width: '30%',
            height: '35%'
        },
        glowPoints: [
            { cx: '70', cy: '220', label: '硅谷' }, // 硅谷位置
            { cx: '460', cy: '120', label: '多伦多' } // 调整后的多伦多位置（在Canada小地图上）
        ]
    },
    //   NorthAmerica: {
    //     src: '/map/NorthAmerica_Map.svg',
    //     alt: 'North America Map',
    //     glowPoints: [
    //       { cx: '45', cy: '200', label: '硅谷' } // 硅谷位置
    //     ]
    //   },
    Europe: {
        src: '/map/EuropeMap.svg',
        alt: 'Europe Map',
        glowPoints: [
            { cx: '135', cy: '120', label: 'Europe' }, // 冰岛位置1
            { cx: '150', cy: '123', label: 'Europe' }  // 冰岛位置2
        ]
    },
    //   Canada: {
    //     src: '/map/CanadaMap.svg',
    //     alt: 'Canada Map',
    //     glowPoints: [
    //       { cx: '400', cy: '338', label: '多伦多' } // 多伦多位置
    //     ]
    //   },

};

export default function EuropeMap() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });
    const [currentMap, setCurrentMap] = useState<MapType>('NorthAmericaWithCanada');

    const currentConfig = mapConfigs[currentMap];

    return (
        <div ref={ref} className="w-full h-[425px] relative">
            {/* 切换按钮 - 右上角 */}
            <div className="absolute top-0 right-4 z-10 flex gap-2 -mt-10">
                {(Object.keys(mapConfigs) as MapType[]).map((mapType) => (
                    <button
                        key={mapType}
                        onClick={() => setCurrentMap(mapType)}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${currentMap === mapType
                                ? 'bg-[#80B224] text-white shadow-lg'
                                : 'bg-white/90 text-gray-700 hover:bg-green-50 border border-gray-200'
                            }`}
                    >
                        {mapType === 'NorthAmericaWithCanada' ? 'North America' : mapType}
                    </button>
                ))}
            </div>

            {/* 地图容器 */}
            <div className="relative w-full h-full" style={{ aspectRatio: '580/400' }}>
                {/* 背景地图 - 使用绝对定位 */}
                <motion.div
                     className={`absolute inset-0 ${currentMap === 'Europe' ? 'mt-10' : 'mt-20'}`}
                    key={currentMap}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={currentConfig.src}
                        alt={currentConfig.alt}
                        fill
                        className='object-contain'
                        priority
                    />

                    {/* 如果是合并地图，在右上角显示Canada地图 */}
                    {currentConfig.isComposite && currentConfig.canadaPosition && (
                        <motion.div
                            className="absolute"
                            style={{
                                top: currentConfig.canadaPosition.top,
                                right: currentConfig.canadaPosition.right,
                                width: currentConfig.canadaPosition.width,
                                height: currentConfig.canadaPosition.height
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image
                                src="/map/CanadaMap.svg"
                                alt="Canada Map Overlay"
                                fill
                                className='object-contain'
                            />
                        </motion.div>
                    )}
                </motion.div>

                {/* 发光点效果层 - 与地图相同尺寸 */}
                <div className="absolute inset-0">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 580 400"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* 动态渲染发光点 */}
                        {currentConfig.glowPoints.map((point, index) => (
                            <motion.circle
                                key={`${currentMap}-${index}`}
                                cx={point.cx}
                                cy={point.cy}
                                r={point.label === 'Europe' ? "4" : "5"}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: isInView ? [0.6, 1, 0.6] : 0,
                                    scale: isInView ? [1, 1.5, 1] : 0
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: index * 0.2 // 多个点时错开动画
                                }}
                                fill="#8CC63F"
                                filter="url(#glow)"
                            />
                        ))}

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