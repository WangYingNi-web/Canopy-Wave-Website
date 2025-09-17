"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from './../../components/header'
import Footer from './../../components/footer'
import Image from 'next/image'
import IwsLink from '@/components/IwsLink'
import SlideUp from '@/components/slide';
import PartnerCarousel from '@/components/carousel';
import { useInView } from 'react-intersection-observer';
import EuropeMap from '@/components/EuropeMap'
import BackgroundTransition from '@/components/BackgroundTransition';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router'

export default function TestIndex() {
    const router = useRouter()
    const currentUrl = `https://canopywave.com${router.asPath}`
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isExpanded5, setIsExpanded5] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showCardContent, setShowCardContent] = useState<string | null>('card1');
    const [enterTimer, setEnterTimer] = useState<NodeJS.Timeout | null>(null);
    const [hoveredCard, setHoveredCard] = useState('card1');
    const [activeTab, setActiveTab] = useState(1); // 从上至下开始，初始为Step-by-Step Collaboration
    const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isProductAutoPlaying, setIsProductAutoPlaying] = useState(true);
    const [productAutoPlayTimer, setProductAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
    const [currentMapIndex, setCurrentMapIndex] = useState(0);
    const [isMapAutoPlaying, setIsMapAutoPlaying] = useState(true);
    const [mapAutoPlayTimer, setMapAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
    const { ref: chatRef, inView: chatInView } = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    // 移动端检测
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    const partnerLogos = [
        { id: 1, width: 130, height: 100 },
        { id: 2, width: 80, height: 80 },
        { id: 3, width: 80, height: 70 },
        { id: 4, width: 100, height: 80 },
        { id: 5, width: 120, height: 80 },
        { id: 6, width: 120, height: 80 },
        { id: 7, width: 120, height: 80 },
        { id: 8, width: 90, height: 70 },
        { id: 9, width: 120, height: 80 },
        // { id: 10, width: 85, height: 70 },
        { id: 11, width: 90, height: 70 },
        { id: 12, width: 100, height: 80 },
        { id: 13, width: 90, height: 70 },
        { id: 14, width: 80, height: 70 },
        { id: 15, width: 80, height: 70 },
        { id: 16, width: 80, height: 70 },
    ];
    const [autoPlay, setAutoPlay] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const slides = [
        {
            id: 1,
            background: '/test/01.webp',
            titleColor: 'text-[#80B224]',
            bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
        },
        // {
        //     id: 5,
        //     background: '/test/05.webp',
        //     titleColor: 'text-[#80B224]',
        //     bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
        // },
        {
            id: 2,
            background: '/test/02.webp',
            //   title: 'Instant GPU Cluster',
            //   subtitle: 'for Enterprise AI',
            // highlight: 'Enterprise AI',
            titleColor: 'text-[#80B224]',
            bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
        },
        {
            id: 3,
            background: '/test/03.webp',
            //   title: 'On-Demand',
            //   subtitle: 'NVIDIA GB200 NVL72',
            //   highlight: 'Aiming to Next-Generation AI and Computing Technologies',
            titleColor: 'text-white',
            subtitleColor: 'text-[#80B224]',
            bgColor: 'bg-black'
        },
        {
            id: 4,
            background: '/test/04.webp',
            //   title: 'On-Demand',
            //   subtitle: 'NVIDIA HGX B200',
            //   highlight: 'The Foundation of Your AI Workloads and Computing Technologies',
            titleColor: 'text-white',
            subtitleColor: 'text-[#80B224]',
            bgColor: 'bg-black'
        }
    ];
    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // 6秒切换一次

        return () => clearInterval(timer);
    }, [slides.length, autoPlay]);

    // 手动切换处理函数
    const handleManualSlideChange = (index: number) => {
        if (isTransitioning || index === currentSlide) return; // 防止重复点击和过渡期间点击

        setIsTransitioning(true);
        setCurrentSlide(index);
        setAutoPlay(false); // 暂停自动播放

        // 等待过渡完成后重置状态
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1000); // 与CSS transition时间一致

        // 3秒后恢复自动播放
        setTimeout(() => {
            setAutoPlay(true);
        }, 2000);
    };
    // 处理悬停进入的函数
    const handleCardHover = (cardId: string) => {
        setHoveredCard(cardId);

        // 如果进入的是不同的卡片，立即隐藏之前的内容
        if (showCardContent && showCardContent !== cardId) {
            setShowCardContent(null);
        }

        // 清除之前的进入定时器
        if (enterTimer) {
            clearTimeout(enterTimer);
        }

        // 设置新的进入定时器，延迟500ms显示内容
        const timer = setTimeout(() => {
            setShowCardContent(cardId);
            //   setLastHoveredCard(cardId);
        }, 490);

        setEnterTimer(timer);
    };

    // 处理悬停离开的函数
    const handleCardLeave = (cardId: string) => {

        // 离开时只清除进入定时器，不隐藏内容
        // if (enterTimer) {
        //   clearTimeout(enterTimer);
        //   setEnterTimer(null);
        // }

        // 不设置任何隐藏定时器，内容保持显示
    };

    // 地图轮播事件处理函数
    const handleMapMouseEnter = () => {
        setIsMapAutoPlaying(false);
        if (mapAutoPlayTimer) {
            clearTimeout(mapAutoPlayTimer);
        }
    };

    const handleMapMouseLeave = () => {
        setIsMapAutoPlaying(true);
    };

    const handleMapIndicatorClick = (index: number) => {
        setCurrentMapIndex(index);
        setIsMapAutoPlaying(false);
        if (mapAutoPlayTimer) {
            clearTimeout(mapAutoPlayTimer);
        }
        // 点击后3秒恢复自动播放
        setTimeout(() => setIsMapAutoPlaying(true), 3000);
    };

    // Chat自动播放逻辑 - 根据动图时长动态切换
    useEffect(() => {
        if (!chatInView || isHovering) return;

        // 每个动图的播放时长（毫秒）
        const chatDurations: { [key: number]: number } = {
            1: 5000, // chat3.webp 播放6秒
            2: 5000, // chat2.webp 播放5秒
            3: 5000  // chat1.webp 播放7秒
        };

        const currentDuration = chatDurations[activeTab] || 6000;

        const timer = setTimeout(() => {
            setActiveTab((prev) => {
                // 从上至下循环：1 -> 2 -> 3 -> 1
                if (prev === 1) return 2;
                if (prev === 2) return 3;
                return 1;
            });
        }, currentDuration);

        setAutoPlayTimer(timer);
        return () => {
            clearTimeout(timer);
        };
    }, [chatInView, activeTab, isHovering]);

    // 产品自动播放逻辑
    useEffect(() => {
        if (!isProductAutoPlaying) return;

        const timer = setTimeout(() => {
            setCurrentImageIndex((prev) => {
                // 从上至下循环：0 -> 1 -> 2 -> 3 -> 0
                return (prev + 1) % 4;
            });
        }, 5000); // 每5秒切换一次

        setProductAutoPlayTimer(timer);
        return () => {
            clearTimeout(timer);
        };
    }, [isProductAutoPlaying, currentImageIndex]);

    // 地图自动播放逻辑
    useEffect(() => {
        if (!isMapAutoPlaying) return;

        const timer = setTimeout(() => {
            setCurrentMapIndex((prev) => {
                // 两张地图循环：0 -> 1 -> 0
                return (prev + 1) % 2;
            });
        }, 3000); // 每5秒切换一次

        setMapAutoPlayTimer(timer);
        return () => {
            clearTimeout(timer);
        };
    }, [isMapAutoPlaying, currentMapIndex]);

    // 清理定时器的useEffect
    useEffect(() => {
        return () => {
            if (enterTimer) {
                clearTimeout(enterTimer);
            }
            if (autoPlayTimer) {
                clearTimeout(autoPlayTimer);
            }
            if (productAutoPlayTimer) {
                clearTimeout(productAutoPlayTimer);
            }
            if (mapAutoPlayTimer) {
                clearTimeout(mapAutoPlayTimer);
            }
        };
    }, [enterTimer, autoPlayTimer, productAutoPlayTimer, mapAutoPlayTimer]);

    return (
        <main>
            <Head>
                <title>Leading GPU Cloud Provider AI Infrastructure Company for Enterprise AI Solutions & Machine Learning | Canopy Wave</title>
                <meta name="description" content="As a trusted GPU Cloud Provider and AI infrastructure company.we offer high-performance cost-effective solutions tailored to your machine learning, data science, and AI needs." />
                <meta property="og:title" content="Leading GPU Cloud Provider AI Infrastructure Company for Enterprise AI Solutions & Machine Learning | Canopy Wave" />
                <meta property="og:description" content="As a trusted GPU Cloud Provider and AI infrastructure company.we offer high-performance cost-effective solutions tailored to your machine learning, data science, and AI needs." />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content="https://canopywave.com/home_banner.svg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Canopy Wave Homepage" />
            </Head>

            <Header />

            <div className="w-full bg-white">
                {/* 轮播图Banner */}
                <div className="w-full h-[70vh] relative mt-[84px] overflow-hidden will-change-transform">
                    {slides.map((slide, index) => {
                        return (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                                    }`}
                            >
                                {/* 黑色背景层 - 仅对第二张图片，填充可能的空白 */}
                                {slide.id !== 1 && (
                                    <div className="absolute inset-0 bg-black z-0" />
                                )}
                                {slide.id === 4 ? (
                                    <div className="absolute inset-0 flex items-center justify-center h-[72vh]">
                                        <Image
                                            src={slide.background}
                                            alt={`Banner ${slide.id}`}
                                            width={860}
                                            height={560}
                                            className="object-cover"
                                            style={{
                                                width: 'auto'
                                            }}
                                            priority={index === currentSlide}
                                            loading={index === currentSlide ? 'eager' : 'lazy'}
                                        />
                                    </div>
                                ) : (
                                    <Image
                                        src={slide.background}
                                        alt={`Banner ${slide.id}`}
                                        fill
                                        className="object-cover"
                                        style={slide.id === 3 ? {
                                            transform: 'scale(1.1) translateX(5%)',
                                            transformOrigin: 'center center'
                                        } : {}}
                                        priority={index === currentSlide}
                                        loading={index === currentSlide ? 'eager' : 'lazy'}
                                    />
                                )}

                                {/* 第一张图片的标题和按钮 */}
                                {slide.id === 1 && (
                                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-16">
                                        <div className="max-w-3xl sm:pl-16">
                                            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#8AAF40] to-[#456A36] bg-clip-text text-transparent mb-4 leading-tight">
                                                The Platform that
                                            </h1>
                                            <div className="bg-[#80B224] inline-block px-6 py-3 rounded-lg mb-8">
                                                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                                                    Enables AI
                                                </h2>
                                            </div>
                                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                                Where Compute Meets Expertise
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* 第二张图片的标题和按钮 */}
                                {slide.id === 2 && (
                                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-16">
                                        <div className="max-w-3xl sm:pl-16">
                                            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#8AAF40] to-[#456A36] bg-clip-text text-transparent mb-4 leading-tight">
                                                A Comprehensive
                                            </h1>
                                            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#8AAF40] to-[#456A36] bg-clip-text text-transparent mb-4 leading-tight">
                                                AI Conversation Platform
                                            </h2>
                                            <div className="bg-[#80B224] inline-block px-6 py-3 rounded-lg mb-8">
                                                <h3 className="text-3xl font-bold text-white">
                                                    Canopy Wave Chat
                                                </h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <button className="border-2 border-gray-600 text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-all duration-300" onClick={() => window.open('https://chat.canopywave.io/c/new', '_blank')}>
                                                    Free to use
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* 第三张图片的标题和按钮 */}
                                {slide.id === 3 && (
                                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-16">
                                        <div className="max-w-3xl sm:pl-16">
                                            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#D5D7D1] to-[#8DB244] bg-clip-text text-transparent mb-4 leading-tight">
                                                Accelerating AI Deployment
                                            </h1>
                                            <div className="bg-[#80B224] inline-block px-6 py-3 rounded-lg mb-8">
                                                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                                    API: The Key to Productivity
                                                </h2>
                                            </div>
                                            <div className="space-y-3 mb-8">
                                                <div className="flex items-center text-white text-lg">
                                                    <div className="w-2 h-2 bg-[#80B224] rounded-full mr-4"></div>
                                                    <span>Rapid deployment</span>
                                                </div>
                                                <div className="flex items-center text-white text-lg">
                                                    <div className="w-2 h-2 bg-[#80B224] rounded-full mr-4"></div>
                                                    <span>personalized model adjustment</span>
                                                </div>
                                                <div className="flex items-center text-white text-lg">
                                                    <div className="w-2 h-2 bg-[#80B224] rounded-full mr-4"></div>
                                                    <span>ensuring information security</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() => window.location.href = '/reserve-ai-service'}
                                                    className="bg-[#80B224] hover:bg-[#6a9620] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                                                >
                                                    Reserve Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* 第四张图片的标题和按钮 */}
                                {slide.id === 4 && (
                                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-16">
                                        <div className="max-w-3xl sm:pl-16">
                                            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#D5D7D1] to-[#8DB244] bg-clip-text text-transparent mb-4 leading-tight">
                                                On-Demand
                                            </h1>
                                            <div className="bg-[#80B224] inline-block px-6 py-3 rounded-lg mb-8">
                                                <h2 className="text-3xl sm:text-5xl font-bold text-white">
                                                    NVIDIA GB200 NVL72
                                                </h2>
                                            </div>
                                            <div className="flex gap-4 mb-8">
                                                <button onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')} className="bg-[#80B224] hover:bg-[#6a9620] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                                                    Launch Now
                                                </button>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-16 right-16">
                                            <p className="text-white text-lg text-right leading-relaxed">
                                                Aiming to Next-Generation AI and<br />
                                                Computing Technologies
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* 第五张图片的标题和按钮 */}
                                {slide.id === 5 && (
                                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-16">
                                        <div className="max-w-3xl sm:pl-16">
                                            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#8AAF40] to-[#456A36] bg-clip-text text-transparent mb-4 leading-tight">
                                                Enterprise-Grade
                                            </h1>
                                            <div className="bg-[#80B224] inline-block px-6 py-3 rounded-lg mb-8">
                                                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                                    GPU Infrastructure
                                                </h2>
                                            </div>
                                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                                Scalable, Secure, and Ready for AI Workloads
                                            </p>
                                            <div className="flex gap-4">
                                                <button 
                                                    onClick={() => window.location.href = '/pricing'} 
                                                    className="bg-[#80B224] hover:bg-[#6a9620] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                                                >
                                                    View Pricing
                                                </button>
                                                <button 
                                                    onClick={() => window.location.href = '/contact'} 
                                                    className="border-2 border-[#80B224] text-[#80B224] hover:bg-[#80B224] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                                                >
                                                    Contact Sales
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* 左侧切换按钮 */}
                    <button
                        onClick={() => {
                            const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
                            handleManualSlideChange(prevIndex);
                        }}
                        disabled={isTransitioning}
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                            }`}
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* 右侧切换按钮 */}
                    <button
                        onClick={() => {
                            const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
                            handleManualSlideChange(nextIndex);
                        }}
                        disabled={isTransitioning}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                            }`}
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* 轮播指示器 */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleManualSlideChange(index)}
                                    disabled={isTransitioning}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 transform will-change-transform ${index === currentSlide
                                            ? 'bg-[#80B224] scale-125'
                                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                        } ${isTransitioning ? 'opacity-70' : 'cursor-pointer'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Partners Section */}
                <PartnerCarousel logos={partnerLogos} />

                {/* Chat Section - 灰色背景聊天区域 */}
                <div className="py-2 pb-16" ref={chatRef}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-left mb-8">
                            Canopy Wave Chat
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* 左侧动图区域 - 2/3宽度 */}
                            <div className="lg:w-2/3 max-h-[490px] overflow-hidden" >
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <div className="space-y-4">
                                        <div className="mb-4">
                                            <Image
                                                src={`/test/chat${activeTab}.webp`}
                                                alt={`Chat ${activeTab} Demo`}
                                                width={500}
                                                height={300}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 右侧标题区域 - 1/3宽度 */}
                            <div className="lg:w-1/3 relative">
                                <div className="space-y-4">
                                    {/* Step-by-Step Collaboration (1) */}
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-r-4 ${activeTab === 1
                                                ? 'bg-[#F5F9F4] text-gray-700 border-r-[#80B224] shadow-lg'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-r-gray-300'
                                            }`}
                                        onMouseEnter={() => {
                                            setActiveTab(1);
                                            setIsHovering(true);
                                        }}
                                        onMouseLeave={() => setIsHovering(false)}
                                    >
                                        <h3 className={`text-lg font-semibold ${activeTab === 1 ? 'text-[#80B224]' : 'text-gray-700'
                                            }`}>Step-by-Step Collaboration</h3>
                                        <div className={`overflow-hidden transition-all duration-500 ${activeTab === 1 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                            }`}>
                                            <p className="text-sm text-gray-600">
                                                Each model builds on the last to deliver sharper logic and greater precision.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Parallel Intelligence (2) */}
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-r-4 ${activeTab === 2
                                                ? 'bg-[#F5F9F4] text-gray-700 border-r-[#80B224] shadow-lg'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-r-gray-300'
                                            }`}
                                        onMouseEnter={() => {
                                            setActiveTab(2);
                                            setIsHovering(true);
                                        }}
                                        onMouseLeave={() => setIsHovering(false)}
                                    >
                                        <h3 className={`text-lg font-semibold ${activeTab === 2 ? 'text-[#80B224]' : 'text-gray-700'
                                            }`}>Parallel Intelligence</h3>
                                        <div className={`overflow-hidden transition-all duration-500 ${activeTab === 2 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                            }`}>
                                            <p className="text-sm text-gray-600">
                                                Unlock simultaneous responses from different AI models-gain fresh perspectives, compare solutions, and choose the best answer.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Chat Controls (3) */}
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-r-4 ${activeTab === 3
                                                ? 'bg-[#F5F9F4] text-gray-700 border-r-[#80B224] shadow-lg'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-r-gray-300'
                                            }`}
                                        onMouseEnter={() => {
                                            setActiveTab(3);
                                            setIsHovering(true);
                                        }}
                                        onMouseLeave={() => setIsHovering(false)}
                                    >
                                        <h3 className={`text-lg font-semibold ${activeTab === 3 ? 'text-[#80B224]' : 'text-gray-700'
                                            }`}>Chat Controls</h3>
                                        <div className={`overflow-hidden transition-all duration-500 ${activeTab === 3 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                            }`}>
                                            <p className="text-sm text-gray-600">
                                                Create customized models through control buttons. Such as Agent Builder, Prompts, Memories, Attach Files, Bookmarks and so on.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Free to use 按钮 - 使用绝对定位固定在右侧区域底部 */}
                                <div className="absolute bottom-0 left-0 w-full">
                                    <button className="bg-[#76B900] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6BA000] transition-colors duration-300 shadow-lg" onClick={() => window.open('https://chat.canopywave.io/c/new', '_blank')}>
                                        Free to use
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section - 特性介绍 */}
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-left mb-12">
                            Instantly allocated GPU resource and<br />
                            ready-to-go AI resource
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* End-to-End Secure Operations */}
                            <div className="bg-[#F5F9F4] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center">
                                    <Image src="/test/ai-resource-1.svg" alt="Secure" width={48} height={48} />
                                </div>
                                <h3 className="text-lg font-bold mb-4">End-to-End Secure Operations</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    By leveraging on-premises deployment to eliminate cloud leakage risks, our unified platform delivers real-time, comprehensive oversight and control of your entire cluster's operations.
                                </p>
                            </div>

                            {/* Customized Needs, Personalized Service */}
                            <div className="bg-[#F5F9F4] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center">
                                    <Image src="/test/ai-resource-2.svg" alt="Secure" width={48} height={48} />
                                </div>
                                <h3 className="text-lg font-bold mb-4">Customized Needs, Personalized Service</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Providing customized GPU clusters and AI model services to empower you to shape the future.
                                </p>
                            </div>

                            {/* High Performance */}
                            <div className="bg-[#F5F9F4] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center">
                                    <Image src="/test/ai-resource-3.svg" alt="Secure" width={48} height={48} />
                                </div>
                                <h3 className="text-lg font-bold mb-4">High Performance</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Unlimited Computing Power, Unleashed AI Performance - Powering Top-Tier AI with the Strongest Resources.
                                </p>
                            </div>

                            {/* Pay for What You Use */}
                            <div className="bg-[#F6F9F4] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center">
                                    <Image src="/test/ai-resource-4.svg" alt="Secure" width={48} height={48} />
                                </div>
                                <h3 className="text-lg font-bold mb-4">Pay for What You Use</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Only pay wholesale prices for the AI-related resources you actually consume. No hidden fees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GPU Products Section - NVIDIA GB200 NVL72 */}
                <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-left">
                            NVIDIA GB200 & B200, H100, H200<br />
                            GPUs now available
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-center">
                            {/* 左侧产品介绍 */}
                            <div className="lg:col-span-2 lg:-mt-16 min-w-[500px]">
                                {(() => {
                                    const productInfo = [
                                        {
                                            name: "NVIDIA GB200 NVL72",
                                            price: "$9/GPU/hr",
                                            features: [
                                                "• 18x compute trays in a rack",
                                                "• 36x Grace CPUs, 72x Blackwell GPUs",
                                                "• Up to 13.4 TB HBM3e | 576 TB/s",
                                                "• 2,592 Arm® Neoverse V2 cores",
                                                "• Up to 17 TB LPDDR5X | Up to 18.4 TB/s"
                                            ]
                                        },
                                        {
                                            name: "NVIDIA HGX B200",
                                            price: "$4.5/GPU/hr",
                                            features: [
                                                "• 8x NVIDIA Blackwell SXM",
                                                "• 1.8 TB/s NVSwitch GPU-to-GPU Bandwidth",
                                                "• NVLink 5 Switch",
                                                "• 14.4 TB/s Total NVLink Bandwidth",
                                                "• 1.4 TB Total Memory"
                                            ]
                                        },
                                        {
                                            name: "NVIDIA H200",
                                            price: "$3/GPU/hr",
                                            features: [
                                                "• 141 GB of HBM3e memory",
                                                "• 4.8 TB/s memory bandwidth",
                                                "• Up to 7 MIGs @16.5GB each",
                                                "• 72 billion transistors",
                                                "• 64 vCPUs per instance"
                                            ]
                                        },
                                        {
                                            name: "NVIDIA H100",
                                            price: "$2.25/GPU/hr",
                                            features: [
                                                "• GPU Memory 94 GB",
                                                "• GPU Memory Bandwidth 3.9 TB/s",
                                                "• 7 NVDEC, 7 JPEG",
                                                "• Up to 7 MIGs @ 12 GB each",
                                                "• Max TDP 350-400W (configurable)"
                                            ]
                                        }
                                    ];

                                    const currentProduct = productInfo[currentImageIndex];

                                    return (
                                        <>
                                            <div className="flex items-center space-x-4 mb-6">
                                                <h3 className="text-2xl font-bold">{currentProduct.name}</h3>
                                            </div>

                                            <ul className="text-gray-600 leading-relaxed text-l mb-12">
                                                {currentProduct.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>

                                            <span
                                                className="bg-[#76B900] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6BA000] transition-colors duration-300 shadow-lg"
                                                onClick={() => window.location.href = '/pricing'}
                                            >
                                                {currentProduct.price}
                                            </span>
                                        </>
                                    );
                                })()}
                            </div>

                            {/* 右侧图片展示和切换按钮 */}
                            <div
                                className="lg:col-span-6 relative"
                                onMouseEnter={() => setIsProductAutoPlaying(false)}
                                onMouseLeave={() => setIsProductAutoPlaying(true)}
                            >
                                <div className="p-6 flex items-center justify-center h-[450px]">
                                    <Image
                                        src={`/test/products-${currentImageIndex + 1}.webp`}
                                        alt="NVIDIA GPUs"
                                        width={610}
                                        height={410}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Learn More 按钮 */}
                                <div className="absolute right-0 top-0 transform -translate-y-1/2">
                                    <Button className="bg-[#76B900] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6BA000] transition-colors duration-300 shadow-lg" onClick={() => window.location.href = '/pricing'}>
                                        Learn More
                                    </Button>
                                </div>

                                {/* 图片切换按钮 */}
                                <div className="absolute right-[-90px] top-[165px] transform -translate-y-1/2 flex flex-col space-y-3 mt-16">
                                    {[1, 2, 3, 4].map((index) => {
                                        const productNames = ["NVIDIA GB200 NVL72", "NVIDIA HGX B200", "NVIDIA H200", "NVIDIA H100"];
                                        return (
                                            <div key={index} className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => {
                                                        setCurrentImageIndex(index - 1);
                                                        setIsProductAutoPlaying(false);
                                                        // 点击后3秒恢复自动播放
                                                        setTimeout(() => setIsProductAutoPlaying(true), 3000);
                                                    }}
                                                    onMouseEnter={() => {
                                                        setCurrentImageIndex(index - 1);
                                                        setIsProductAutoPlaying(false);
                                                    }}
                                                    onMouseLeave={() => setIsProductAutoPlaying(true)}
                                                    className={`w-20 h-20 rounded-3xl transition-all duration-200 relative overflow-hidden ${
                                                        currentImageIndex === index - 1
                                                            ? 'border-[#76B900] shadow-lg border-2'
                                                            : 'border-gray-300 hover:border-gray-400'
                                                        }`}
                                                >
                                                    <Image
                                                        src={`/test/button-${index}.png`}
                                                        alt={`View ${index}`}
                                                        width={48}
                                                        height={48}
                                                        className="w-full h-full object-contain rounded-lg"
                                                    />
                                                    {currentImageIndex !== index - 1 && (
                                                        <div className="absolute inset-0 bg-gray-100 bg-opacity-50 rounded-lg"></div>
                                                    )}
                                                </button>
                                                <span className={`text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                                                    currentImageIndex === index - 1
                                                        ? 'text-[#76B900] font-bold'
                                                        : 'text-gray-600'
                                                    }`}>
                                                    {productNames[index - 1]}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Providing secure and efficient solutions for different use cases */}
                <div className="py-12 sm:pt-10 pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SlideUp>
                            <div className="text-left mb-12">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Providing secure and efficient solutions for <br /> different use cases</h2>
                            </div>
                        </SlideUp>

                        <div className="flex gap-4 flex-col md:flex-row w-full">
                            {/* Card 1 - Pursue Efficiency */}
                            <div
                                className="transform w-full md:w-auto"
                                style={{
                                    width: isMobile ? '100%' : (hoveredCard === 'card1' ? '40%' : '18%'),
                                    transition: 'width 0.6s ease-in-out'
                                }}
                                onMouseEnter={() => handleCardHover('card1')}
                                onMouseLeave={() => handleCardLeave('card1')}

                            >
                                <SlideUp>
                                    <div className="relative h-[410px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-[1.02]"
                                    >
                                        <Image
                                            src="/test/ai-model-training.webp"
                                            alt="AI Model Training"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">
                                            {hoveredCard !== 'card1' && (
                                                <>
                                                    <h3 className="text-xl font-bold mb-3 leading-tight">
                                                        AI Model Training
                                                    </h3>
                                                </>
                                            )}
                                            {/* 只有当showCardContent === 'card1'时才显示内容 */}
                                            {showCardContent === 'card1' && (
                                                <>
                                                    <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                        AI Model Training
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                            Accelerate AI training with powerful computing power and low-latency networks. Applied in NLP, computer vision, recommendations, and autonomous driving.
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                            {/* Learn More按钮 - 绝对定位到左下角 */}
                                            {showCardContent === 'card1' && (
                                                <div className="absolute bottom-6 left-6">
                                                    <p className="text-sm cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded" onClick={() => window.location.href = '/model-training'}>
                                                        Learn More&gt;
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>

                            {/* Card 2 - Earn Respect */}
                            <div
                                className="transform w-full md:w-auto"
                                style={{
                                    width: isMobile ? '100%' : (hoveredCard === 'card2' ? '40%' : '18%'),
                                    transition: 'width 0.6s ease-in-out'
                                }}
                                onMouseEnter={() => handleCardHover('card2')}
                                onMouseLeave={() => handleCardLeave('card2')}

                            >
                                <SlideUp>
                                    <div className="relative h-[410px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-[1.02]"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsExpanded2(!isExpanded2);
                                        }}
                                    >
                                        <Image
                                            src="/test/inference.webp"
                                            alt="Inference"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">
                                            {hoveredCard !== 'card2' && (
                                                <>
                                                    <h3 className="text-xl font-bold mb-3 leading-tight">
                                                        Inference
                                                    </h3>
                                                </>
                                            )}


                                            {showCardContent === 'card2' && (
                                                <>
                                                    <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                        Inference
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                            Scalable and secure AI inference powered by high-performance virtual machines
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                            {/* Learn More按钮 - 绝对定位到左下角 */}
                                            {showCardContent === 'card2' && (
                                                <div className="absolute bottom-6 left-6">
                                                    <p className="text-sm opacity-90 cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded" onClick={() => window.location.href = '/inference'}>
                                                        Learn More&gt;
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>

                            {/* Card 3 - Demonstrate Contribution */}
                            <div
                                className="transform w-full md:w-auto"
                                style={{
                                    width: isMobile ? '100%' : (hoveredCard === 'card3' ? '40%' : '18%'),
                                    transition: 'width 0.6s ease-in-out'
                                }}
                                onMouseEnter={() => handleCardHover('card3')}
                                onMouseLeave={() => handleCardLeave('card3')}
                            >
                                <SlideUp>
                                    <div className="relative h-[410px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-[1.02]"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsExpanded3(!isExpanded3);
                                        }}
                                    >
                                        <Image
                                            src="/test/rendering.webp"
                                            alt="Rendering"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">

                                            {hoveredCard !== 'card3' && (
                                                <>
                                                    <h3 className="text-xl font-bold mb-3 leading-tight">
                                                        Rendering
                                                    </h3>
                                                </>
                                            )}
                                            {showCardContent === 'card3' && (
                                                <>
                                                    <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                        Rendering
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                            High-frame throughput and ultra-low latency with GPU and CPU-based rendering engines.
                                                            Applied in gaming, simulation, virtual production, and design visualization.
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                            {/* Learn More按钮 - 绝对定位到左下角 */}
                                            {showCardContent === 'card3' && (
                                                <div className="absolute bottom-6 left-6">
                                                    <p className="text-sm opacity-90 cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded" onClick={() => window.location.href = '/rendering'}>
                                                        Learn More&gt;
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>

                            {/* Card 4 - Innovation Excellence */}
                            <div
                                className="transform w-full md:w-auto"
                                style={{
                                    width: isMobile ? '100%' : (hoveredCard === 'card4' ? '40%' : '18%'),
                                    transition: 'width 0.6s ease-in-out'
                                }}
                                onMouseEnter={() => handleCardHover('card4')}
                                onMouseLeave={() => handleCardLeave('card4')}
                            >
                                <SlideUp>
                                    <div className="relative h-[410px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-[1.02]"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsExpanded4(!isExpanded4);
                                        }}
                                    >
                                        <Image
                                            src="/test/private-cloud-and-gpus-deployment.webp"
                                            alt="Private Cloud and GPUs Deployment"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">
                                            {hoveredCard !== 'card4' && (
                                                <>
                                                    <h3 className="text-xl font-bold mb-3 leading-tight">
                                                        Private Cloud and GPUs Deployment
                                                    </h3>
                                                </>
                                            )}
                                            {showCardContent === 'card4' && (
                                                <>
                                                    <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                        Private Cloud and GPUs Deployment
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                            Extensive deployment experience with fast delivery and full-stack software support.
                                                            Applied in AI training, inference, rendering, and high-performance computing.
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                            {/* Learn More按钮 - 绝对定位到左下角 */}
                                            {showCardContent === 'card4' && (
                                                <div className="absolute bottom-6 left-6">
                                                    <p className="text-sm opacity-90 cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded" onClick={() => window.location.href = '/private-cloud'}>
                                                        Learn More&gt;
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>

                            {/* Card 5 - Customer Focus */}
                            <div
                                className="transform w-full md:w-auto"
                                style={{
                                    width: isMobile ? '100%' : (hoveredCard === 'card5' ? '40%' : '18%'),
                                    transition: 'width 0.6s ease-in-out'
                                }}
                                onMouseEnter={() => handleCardHover('card5')}
                                onMouseLeave={() => handleCardLeave('card5')}
                            >
                                <SlideUp>
                                    <div className="relative h-[410px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-[1.02]"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsExpanded5(!isExpanded5);
                                        }}
                                    >
                                        <Image
                                            src="/test/networking-hardware-solution.webp"
                                            alt="Customer Focus"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">
                                            {hoveredCard !== 'card5' && (
                                                <>
                                                    <h3 className="text-xl font-bold mb-3 leading-tight">
                                                        Networking Hardware Solution
                                                    </h3>
                                                </>
                                            )}
                                            {showCardContent === 'card5' && (
                                                <>
                                                    <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                        Networking Hardware Solution
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2">
                                                            Provide comprehensive network hardware solutions, including Switches, NICs, Transceivers, etc.
                                                            <br />
                                                            Serving enterprise, data center, and edge computing with reliable, scalable infrastructure.
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                            {/* Learn More按钮 - 绝对定位到左下角 */}
                                            {showCardContent === 'card5' && (
                                                <div className="absolute bottom-6 left-6">
                                                    <p className="text-sm opacity-90 cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded" onClick={() => window.location.href = '/networking-hardware'}>
                                                        Learn More&gt;
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global Network Section */}
                <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold mb-6">
                                Powered By Our Global Network
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed max-w-4xl">
                                Our data centers are powered by Canopy Wave global, carrier-grade network-empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks
                            </p>
                            <Button className="bg-[#76B900] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6BA000] transition-colors duration-300 shadow-lg" onClick={() => window.location.href = '/data-center/iceland'}>
                                Explore Our Network
                            </Button>
                        </div>
                        <div className="w-full max-w-7xl relative"
                            onMouseEnter={handleMapMouseEnter}
                            onMouseLeave={handleMapMouseLeave}>
                            {/* 地图轮播容器 */}
                            <div className="relative overflow-hidden rounded-lg">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentMapIndex * 100}%)` }}
                                >
                                    {/* 第一张地图 - Iceland */}
                                    <div className="w-full flex-shrink-0">
                                        <Image
                                            src="/test/iceland.webp"
                                            alt="Iceland Network Map"
                                            width={800}
                                            height={600}
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </div>
                                    {/* 第二张地图 - North America */}
                                    <div className="w-full flex-shrink-0">
                                        <Image
                                            src="/test/North-America.webp"
                                            alt="North America Network Map"
                                            width={800}
                                            height={600}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 轮播指示器 */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {[0, 1].map((index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleMapIndicatorClick(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentMapIndex === index
                                            ? 'bg-[#8CC63F] scale-110'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Explore Canopy Wave Section */}
                <section className="py-16 pb-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-left mb-10">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Canopy Wave</h2>
                        </div>

                        {/* First Row - 2/3 and 1/3 layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 min-h-[320px]">
                            {/* Events Card - 2/3 width */}
                            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden" style={{ backgroundImage: 'url(/test/Events.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="mb-4">
                                    <span className="inline-block font-bold bg-[#C6E893] text-[#333333] text-xs px-2 py-1 rounded-full">Events</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">The Rise of Enterprise AI: Trends in Inferencing and GPU Resource Planning</h3>
                                <p className="text-sm text-gray-600 mb-12">AI Agent Summit Keynote by James Liao @Canopy Wave</p>
                                <button
                                    onClick={() => window.location.href = '/events/ai-agent-summit-keynote'}
                                    className="absolute bottom-6 left-6 bg-[#5C970F] opacity-80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
                                >
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Blog Card - 1/3 width */}
                            <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden" style={{ backgroundImage: 'url(/test/Blog.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="mb-4">
                                    <span className="inline-block font-bold bg-[#C6E893] text-[#333333] text-xs px-2 py-1 rounded-full">Blog</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Joint Blog - Accelerate Enterprise AI</h3>
                                <p className="text-sm text-gray-600 mb-12">by James Liao, CTO of Canopy Wave, and Severi Tikkas, CTO of ConfidentialMind</p>
                                <button
                                    onClick={() => window.location.href = '/blog/joint-blog-accelerate-enterprise-ai'}
                                    className="absolute bottom-6 left-6 bg-[#5C970F] opacity-80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
                                >
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Second Row - Three equal cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[320px]">
                            {/* Case Studies Card */}
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden" style={{ backgroundImage: 'url(/test/case-studies.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="mb-4">
                                    <span className="inline-block font-bold bg-[#C6E893] text-[#333333] text-xs px-2 py-1 rounded-full">Case Studies</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Accelerating Protein Engineering with Canopy Wave's GPUaaS</h3>
                                <p className="text-sm text-gray-600 mb-12">Foundry BioSciences Case Study</p>
                                <button
                                    onClick={() => window.location.href = '/resources/case-study'}
                                    className="absolute bottom-6 left-6 bg-[#5C970F] opacity-80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
                                >
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Tutorials Card */}
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden" style={{ backgroundImage: 'url(/test/Tutorials.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="mb-4">
                                    <span className="inline-block font-bold bg-[#C6E893] text-[#333333] text-xs px-2 py-1 rounded-full">Tutorials</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">How to Run the GPT-OSS Locally on a Canopy Wave VM</h3>
                                <p className="text-sm text-gray-600 mb-12">Step-by-step guide for local deployment</p>
                                <button
                                    onClick={() => window.location.href = '/resources/tutorials/how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm'}
                                    className="absolute bottom-6 left-6 bg-[#5C970F] opacity-80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
                                >
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Docs Card */}
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden" style={{ backgroundImage: 'url(/test/Docs.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="mb-4">
                                    <span className="inline-block font-bold bg-[#C6E893] text-[#333333] text-xs px-2 py-1 rounded-full">Docs</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Canopy Wave GPU Cluster Hardware Product Portfolio</h3>
                                <p className="text-sm text-gray-600 mb-12">This portfolio outlines modular hardware components and recommended configurations</p>
                                <button
                                    onClick={() => window.location.href = '/resources/docs/products/canopy-wave-gpu'}
                                    className="absolute bottom-6 left-6 bg-[#5C970F] opacity-80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
                                >
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="py-32 relative overflow-hidden" style={{ backgroundImage: 'url(/test/accelerate.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0"></div>
                    <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-10">
                            Accelerate Your AI Journey today
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#76B900] text-white hover:bg-[#6ba000] px-8 py-3" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Launch Now
                            </Button>
                            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3" onClick={() => window.open('https://chat.canopywave.io/c/new', '_blank')}>
                                Chat Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}