import { useState, useEffect } from 'react';
import Image from 'next/image';

type MapType = 'NorthAmerica' | 'Europe';

// 位置点接口
interface LocationPoint {
    id: string;
    name: string;
    x: number; // 相对于图片的X坐标百分比 (0-100)
    y: number; // 相对于图片的Y坐标百分比 (0-100)
    description?: string;
}

interface MapConfig {
    src: string;
    alt: string;
    locations: LocationPoint[]; // 每个地图的位置点
}

// 地图配置，包含位置点数据
const mapConfigs: Record<MapType, MapConfig> = {
    NorthAmerica: {
        src: '/map/NorthAmerica_Map.png',
        alt: 'North America Map',
        locations: [
            // 示例位置点 - 你需要根据实际图片调整这些坐标
            { id: 'ny', name: 'Canada', x: 88.2, y: 26.8, description: 'Canada（Toronto）' },
            { id: 'la', name: 'U.S', x: 5.6, y: 44, description: 'U.S.（Santa Clara）' },
        ]
    },
    Europe: {
        src: '/map/EuropeMap.png',
        alt: 'Europe Map',
        locations: [
            // 示例位置点 - 你需要根据实际图片调整这些坐标
            { id: 'iceland1', name: 'Iceland', x: 36, y: 31, description: 'Iceland（Blonduos）' },
            { id: 'iceland2', name: 'Iceland', x: 56, y: 27.8, description: 'Iceland（Akureyri）' },
        ]
    }
};

export default function InteractiveMap() {
    const [currentMapIndex, setCurrentMapIndex] = useState<number>(0);
    const [hoveredLocation, setHoveredLocation] = useState<LocationPoint | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const mapTypes: MapType[] = ['NorthAmerica', 'Europe'];
    const currentMap = mapTypes[currentMapIndex];
    const currentConfig = mapConfigs[currentMap];

    // 自动轮播
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMapIndex((prevIndex) => (prevIndex + 1) % mapTypes.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [mapTypes.length]);

    // 处理位置点悬浮
    const handleLocationHover = (location: LocationPoint, event: React.MouseEvent) => {
        setHoveredLocation(location);
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleLocationLeave = () => {
        setHoveredLocation(null);
    };

    // 手动切换地图
    const handleIndicatorClick = (index: number) => {
        setCurrentMapIndex(index);
    };

    return (
        <div className="w-full relative">
            {/* 轮播图容器 */}
            <div
                className="relative w-full mx-auto -mt-10 overflow-hidden"
                style={{
                    aspectRatio: '580/400',
                    maxWidth: '580px',
                    height: 'auto'
                }}
            >
                {/* 地图轮播 */}
                <div 
                    className="flex transition-transform duration-500 ease-in-out w-full h-full"
                    style={{
                        transform: `translateX(-${currentMapIndex * 100}%)`
                    }}
                >
                    {mapTypes.map((mapType, index) => {
                        const config = mapConfigs[mapType];
                        return (
                            <div key={mapType} className="relative w-full h-full flex-shrink-0">
                                <Image
                                    src={config.src}
                                    alt={config.alt}
                                    fill
                                    className="object-contain"
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 580px"
                                />
                                
                                {/* 交互式位置点 */}
                                {index === currentMapIndex && config.locations.map((location) => (
                                    <div
                                        key={location.id}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                                        style={{
                                            left: `${location.x}%`,
                                            top: `${location.y}%`,
                                        }}
                                        onMouseEnter={(e) => handleLocationHover(location, e)}
                                        onMouseLeave={handleLocationLeave}
                                        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
                                    >
                                        {/* 光点动画 */}
                                        <div className="relative">
                                            {/* 外层光晕 */}
                                            <div className="absolute inset-0 w-6 h-6 bg-[#D1F0FA] rounded-full opacity-30 animate-ping"></div>
                                            {/* 中层光晕 */}
                                            <div className="absolute inset-0 w-4 h-4 bg-[#D1F0FA] rounded-full opacity-50 animate-pulse transform translate-x-1 translate-y-1"></div>
                                            {/* 核心光点 */}
                                            <div className="relative w-4 h-4 bg-[#D1F0FA] border-2 border-[#33CFFF] rounded-full shadow-lg transform translate-x-1.5 translate-y-1.5 group-hover:scale-125 transition-transform duration-200"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 指示器 */}
            <div className="flex justify-center mt-6 gap-3">
                {mapTypes.map((mapType, index) => (
                    <button
                        key={mapType}
                        onClick={() => handleIndicatorClick(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentMapIndex
                                ? 'bg-[#80B224] scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Switch to ${mapType === 'NorthAmerica' ? 'North America' : mapType} map`}
                    />
                ))}
            </div>
            
            {/* 悬浮提示框 */}
            {hoveredLocation && (
                <div 
                    className="fixed z-50 bg-[#D1F0FA] opacity-90 border border-gray-200 rounded-lg shadow-lg p-3 pointer-events-none"
                    style={{
                        left: mousePosition.x + 10,
                        top: mousePosition.y - 10,
                        transform: 'translateY(-100%)'
                    }}
                >
                    <div className="font-semibold text-[#215968]">{hoveredLocation.name}</div>
                    {hoveredLocation.description && (
                        <div className="text-sm text-gray-600 mt-1">{hoveredLocation.description}</div>
                    )}
                </div>
            )}
        </div>
    );
}