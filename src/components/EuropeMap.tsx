import { useState, useRef , useEffect } from 'react';
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
            { id: 'canada', name: 'Canada', x: 88.3, y: 27.1, description: 'Canada（Toronto）' },
            { id: 'us', name: 'U.S', x: 5.7, y: 44.1, description: 'U.S.（Santa Clara）' },
        ]
    },
    Europe: {
        src: '/map/EuropeMap.png',
        alt: 'Europe Map',
        locations: [
            // 示例位置点 - 你需要根据实际图片调整这些坐标
            { id: 'iceland1', name: 'Iceland', x: 9.1, y: 13.8, description: 'Iceland（Blonduos）' },
            { id: 'iceland2', name: 'Iceland', x: 12.5, y: 12.8, description: 'Iceland（Akureyri）' },
        ]
    }
};

export default function InteractiveMap() {
    const [currentMap, setCurrentMap] = useState<MapType>('NorthAmerica');
    const [hoveredLocation, setHoveredLocation] = useState<LocationPoint | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);
    const mapTypes: MapType[] = ['NorthAmerica', 'Europe'];
    const currentConfig = mapConfigs[currentMap];

    // 处理位置点悬浮
    const handleLocationHover = (location: LocationPoint, event: React.MouseEvent) => {
        setHoveredLocation(location);
        
        // 获取地图容器的位置和尺寸
        const mapContainer = ref.current;
        if (mapContainer) {
            const rect = mapContainer.getBoundingClientRect();
            // 计算光点在屏幕上的绝对位置
            const pointX = rect.left + (location.x / 100) * rect.width;
            const pointY = rect.top + (location.y / 100) * rect.height;
            setMousePosition({ x: pointX, y: pointY });
        }
    };

    const handleLocationLeave = () => {
        setHoveredLocation(null);
    };

    // 切换地图
    const handleMapSwitch = (mapType: MapType) => {
        console.log('Switching to map:', mapType);
        setCurrentMap(mapType);
    };

    return (
        <div ref={ref} className="w-full relative">
            {/* 切换按钮 */}
            <div className={`absolute -top-20 right-0 z-20 flex gap-2`}>
                {(Object.keys(mapConfigs) as MapType[]).map((mapType) => (
                    <button
                        key={mapType}
                        onClick={() => setCurrentMap(mapType)}
                        className={`px-6 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${currentMap === mapType
                                ? 'bg-[#80B224] text-white shadow-lg'
                                : 'bg-white/90 text-gray-700 hover:bg-green-50 border border-gray-200'
                            }`}
                    >
                        {mapType === 'NorthAmerica' ? 'North America' : mapType}
                    </button>
                ))}
            </div>

            {/* 地图容器 */}
            <div
                ref={ref}
                className="relative w-full mx-auto -mt-9"
                style={{
                    aspectRatio: '580/400',
                    maxWidth: '700px',
                    height: 'auto'
                }}
            >
                {/* 主地图 */}
                <div className="relative w-full h-full">
                    <Image
                        key={currentMap}
                        src={currentConfig.src}
                        alt={currentConfig.alt}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 580px"
                    />
                    
                    {/* 交互式位置点 */}
                    {currentConfig.locations.map((location) => (
                        <div
                            key={location.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                            style={{
                                left: `${location.x}%`,
                                top: `${location.y}%`,
                            }}
                        >
                            {/* 光点动画 */}
                            <div className="relative">
                                {/* 外层光晕 */}
                                <div className="absolute inset-0 w-4 h-4 sm:w-6 sm:h-6 bg-[#D1F0FA] rounded-full opacity-30 animate-ping"></div>
                                {/* 中层光晕 */}
                                <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-[#D1F0FA] rounded-full opacity-50 animate-pulse transform translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1"></div>
                                {/* 核心光点 */}
                                <div 
                                    className="relative w-3 h-3 sm:w-5 sm:h-5 bg-[#D1F0FA] border-2 border-[#33CFFF] rounded-full shadow-lg transform translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 group-hover:scale-125 transition-transform duration-200 cursor-pointer"
                                    onMouseEnter={(e) => handleLocationHover(location, e)}
                                    onMouseLeave={handleLocationLeave}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* 悬浮提示框 */}
            {hoveredLocation && (
                <div 
                    className="fixed z-50 pointer-events-none"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y - 70,
                        transform: `translateX(${
                            hoveredLocation.id === 'canada' ? '-50%' :
                            hoveredLocation.id === 'us' ? '-8%' :
                            hoveredLocation.id === 'iceland1' ? '-25%' :
                            hoveredLocation.id === 'iceland2' ? '-30%' :
                            '-50%'
                        })`
                    }}
                >
                    <img 
                        src={`/map/${
                            hoveredLocation.id === 'canada' ? '/powered_tab_canada.png' :
                            hoveredLocation.id === 'us' ? 'powered_tab_us.png' :
                            hoveredLocation.id === 'iceland1' ? 'powered_tab_ice left.png' :
                            hoveredLocation.id === 'iceland2' ? 'powered_tab_ice right.png' :
                            'powered_tab_canada.png'
                        }`}
                        alt={hoveredLocation.name}
                        className="max-w-none"
                        style={{
                            height: 'auto',
                            maxHeight: '50px'
                        }}
                    />
                </div>
            )}
        </div>
    );
}