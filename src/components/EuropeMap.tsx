import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

type MapType = 'NorthAmericaWithCanada' | 'Europe';

interface GlowPoint {
    x: number;
    y: number;
    r?: number;
    label: string;
}

interface ResponsiveGlowPoint {
    default: GlowPoint;
    xss?: Partial<GlowPoint>;
    xs?: Partial<GlowPoint>;
    sm?: Partial<GlowPoint>;
    md?: Partial<GlowPoint>;
    lg?: Partial<GlowPoint>;
}

interface MapConfig {
    src: string;
    alt: string;
    glowPoints: ResponsiveGlowPoint[];
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
            {
                default: { x: 7, y: 43, r: 8, label: '硅谷' }
            },
            {
                default: { x: 80, y: 16, r: 8, label: '多伦多' },
                xs: { x: 80, y: 8 }, // 小屏幕时的坐标
                xss: { x: 80, y: 14 }, // 小屏幕时的坐标
                sm: { x: 80, y: 13 }, // 小屏幕时的坐标
                md: { x: 80, y: 16 }, // 中等屏幕时的坐标
                lg: { x: 80, y: 16 }  // 大屏幕时的坐标
            }
        ]
    },
    Europe: {
        src: '/map/EuropeMap.svg',
        alt: 'Europe Map',
        glowPoints: [
            { default: { x: 20, y: 23, r: 6, label: 'Europe' } },
            { default: { x: 23, y: 24, r: 6, label: 'Europe' } }
        ]
    },
};

// 获取当前屏幕尺寸
const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState<'xss' | 'xs' | 'sm' | 'md' | 'lg'>('lg');

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenSize('sm');
            } else if (width >= 768 && width <= 860) {
                setScreenSize('xs');
            } else if (width >= 860 && width <= 1100) {
                setScreenSize('xss');
            }
            else if (width < 1100) {
                setScreenSize('md');
            } else {
                setScreenSize('lg');
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return screenSize;
};

// 获取响应式光点坐标
const getResponsiveGlowPoint = (point: ResponsiveGlowPoint, screenSize: 'xss' | 'xs' | 'sm' | 'md' | 'lg'): GlowPoint => {
    const responsive = point[screenSize] || {};
    return {
        ...point.default,
        ...responsive
    };
};

export default function InteractiveMap() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.5 });
    const [currentMap, setCurrentMap] = useState<MapType>('NorthAmericaWithCanada');
    const screenSize = useScreenSize();
    const currentConfig = mapConfigs[currentMap];

    return (
        <div ref={ref} className="w-full relative">
            {/* 切换按钮 */}
            <div className={`absolute top-0 right-4 z-20 flex gap-2 ${currentMap === 'Europe' ? '-mt-[70px]' : '-mt-[110px]'}`}>
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
            <div
                className={`relative w-full mx-auto ${currentMap === 'Europe' ? 'mt-10' : 'mt-20'
                    }`}
                style={{
                    aspectRatio: '580/400',
                    maxWidth: '580px',
                    height: 'auto'
                }}
            >
                {/* 主地图 */}
                <div className="relative w-full h-full">
                    <Image
                        src={currentConfig.src}
                        alt={currentConfig.alt}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 580px"
                    />

                    {/* 加拿大小地图叠加层 */}
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
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Image
                                src="/map/CanadaMap.svg"
                                alt="Canada Map Overlay"
                                fill
                                className="object-contain"
                                sizes="200px"
                            />
                        </motion.div>
                    )}
                </div>

                {/* 光点层 - 使用响应式坐标 */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    {currentConfig.glowPoints.map((responsivePoint, index) => {
                        const point = getResponsiveGlowPoint(responsivePoint, screenSize);
                        return (
                            <div
                                key={`${currentMap}-${index}`}
                                className="absolute"
                                style={{
                                    left: `${point.x}%`,
                                    top: `${point.y}%`,
                                    width: '0px',
                                    height: '0px'
                                }}
                            >
                                {/* 外层光晕 */}
                                <motion.div
                                    className="absolute rounded-full bg-[#8CC63F]/30"
                                    style={{
                                        width: `${(point.r || 10) * 3}px`,
                                        height: `${(point.r || 10) * 3}px`,
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: isInView ? [0.3, 0.6, 0.3] : 0
                                    }}
                                    transition={{
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 0.3
                                    }}
                                />

                                {/* 中层光晕 */}
                                <motion.div
                                    className="absolute rounded-full bg-[#8CC63F]/50"
                                    style={{
                                        width: `${(point.r || 10) * 2}px`,
                                        height: `${(point.r || 10) * 2}px`,
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: isInView ? [0.5, 0.8, 0.5] : 0
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 0.3 + 0.1
                                    }}
                                />

                                {/* 核心光点 */}
                                <motion.div
                                    className="absolute rounded-full bg-[#8CC63F]"
                                    style={{
                                        width: `${point.r || 10}px`,
                                        height: `${point.r || 10}px`,
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        boxShadow: '0 0 15px 3px rgba(140, 198, 63, 0.8)'
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: isInView ? [0.8, 1, 0.8] : 0
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 0.3 + 0.2
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}