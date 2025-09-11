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
    const [activeService, setActiveService] = useState('compute');
    const [isMobile, setIsMobile] = useState(false);
    const [showCardContent, setShowCardContent] = useState<string | null>('card1');
    const [enterTimer, setEnterTimer] = useState<NodeJS.Timeout | null>(null);
    const [hoveredCard, setHoveredCard] = useState('card1');
    const [activeTab, setActiveTab] = useState(1);
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
        // { id: 14, width: 80, height: 70 },
        // { id: 15, width: 80, height: 70 },
        // { id: 16, width: 80, height: 70 },
    ];
    const [autoPlay, setAutoPlay] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            id: 1,
            background: '/test/02.png',
            //   title: 'Instant GPU Cluster',
            //   subtitle: 'for Enterprise AI',
            // highlight: 'Enterprise AI',
            titleColor: 'text-[#80B224]',
            bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
        },
        {
            id: 2,
            background: '/test/03.png',
            //   title: 'On-Demand',
            //   subtitle: 'NVIDIA GB200 NVL72',
            //   highlight: 'Aiming to Next-Generation AI and Computing Technologies',
            titleColor: 'text-white',
            subtitleColor: 'text-[#80B224]',
            bgColor: 'bg-black'
        },
        {
            id: 3,
            background: '/test/04.png',
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
        setCurrentSlide(index);
        setAutoPlay(false); // 暂停自动播放

        // 3秒后恢复自动播放
        setTimeout(() => {
            setAutoPlay(true);
        }, 1000);
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

    // 清理定时器的useEffect
    useEffect(() => {
        return () => {
            if (enterTimer) {
                clearTimeout(enterTimer);
            }
        };
    }, [enterTimer]);

    return (
        <main>
            <Head>
                <title>Canopy Wave - On-Demand NVIDIA GB200 NVL72</title>
                <meta name="description" content="On-Demand NVIDIA GB200 NVL72 - Instantly allocated GPU resource and ready-to-go AI resource" />
                <meta property="og:title" content="Canopy Wave - On-Demand NVIDIA GB200 NVL72" />
                <meta property="og:description" content="On-Demand NVIDIA GB200 NVL72 - Instantly allocated GPU resource and ready-to-go AI resource" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content="https://canopywave.com/home_banner.svg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Canopy Wave Homepage" />
            </Head>

            <Header />

            <div className="w-full bg-[#FFFFFF]">
                {/* 轮播图Banner */}
                <div className="w-full h-[545px] relative mt-[84px] overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                                }`}
                        >
                            {/* 黑色背景层 - 仅对第二张图片，填充可能的空白 */}


                            {/* 第一张轮播图使用Spline组件 */}
                            {slide.id !== 1 && (
                                <div className="absolute inset-0 bg-black z-0" />
                            )}
                            {slide.id === 3 ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src={slide.background}
                                        alt={`Banner ${slide.id}`}
                                        width={850}
                                        height={550}
                                        className="object-cover"
                                        style={{
                                            width: 'auto'
                                        }}
                                        priority={index === 0}
                                    />
                                </div>
                            ) : (
                                <Image
                                    src={slide.background}
                                    alt={`Banner ${slide.id}`}
                                    fill
                                    className="object-cover"
                                    style={slide.id === 2 ? {
                                        transform: 'scale(1.1) translateX(5%)',
                                        transformOrigin: 'center center'
                                    } : {}}
                                    priority={index === 0}
                                />
                            )
                            }
                            {/* 黑色遮罩层 - 仅对第二张图片 */}
                            {/* {slide.id !== 1 && (
                                <div className="absolute inset-0 bg-black bg-opacity-40 z-5" />
                            )} */}

                            <div className="absolute inset-0 z-10">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">

                                </div>
                            </div>
                        </div>
                    ))}

                    {/* 轮播指示器 */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleManualSlideChange(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-[#80B224] scale-125'
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Partners Section */}
                <PartnerCarousel logos={partnerLogos} />

                {/* Chat Section - 灰色背景聊天区域 */}
                <div className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-left mb-8">
                            Canopy Wave Chat
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* 左侧动图区域 - 2/3宽度 */}
                            <div className="lg:w-2/3">
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
                            <div className="lg:w-1/3">
                                <div className="space-y-4">
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-r-4 ${activeTab === 1
                                            ? 'bg-gray-50 text-gray-700 border-r-[#80B224] shadow-lg'
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-r-gray-300'
                                            }`}
                                        onClick={() => setActiveTab(1)}
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

                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-r-4 ${activeTab === 2
                                            ? 'bg-gray-50 text-gray-700 border-r-[#80B224] shadow-lg'
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-r-gray-300'
                                            }`}
                                        onClick={() => setActiveTab(2)}
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

                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-r-4 ${activeTab === 3
                                            ? 'bg-gray-50 text-gray-700 border-r-[#80B224] shadow-lg'
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-r-gray-300'
                                            }`}
                                        onClick={() => setActiveTab(3)}
                                    >
                                        <h3 className={`text-lg font-semibold ${activeTab === 3 ? 'text-[#80B224]' : 'text-gray-700'
                                            }`}>Chat Controls</h3>
                                        <div className={`overflow-hidden transition-all duration-500 ${activeTab === 3 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                            }`}>
                                            <p className="text-sm text-gray-600">
                                                Adjust the output result through the chat controls.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                {/* Free to use 按钮 */}
                                <div className="mt-10">
                                    <button className="bg-[#76B900] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6BA000] transition-colors duration-300 shadow-lg">
                                        Free to use
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section - 特性介绍 */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-left mb-16">
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
                        <h2 className="text-4xl font-bold text-left mb-8">
                            On-demand High-Performance GPUs<br />
                            now available
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                            {/* 左侧产品介绍 */}
                            <div className="lg:col-span-2 lg:-mt-16">
                                <div className="flex items-center space-x-4 mb-6">
                                    <h3 className="text-2xl font-bold">NVIDIA GB200 NVL72</h3>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        $9/GPU/hr
                                    </span>
                                </div>

                                <ul className="text-gray-600 leading-relaxed text-l mb-12">
                                    <li>• 18x compute trays in a rack</li>
                                    <li>• 36x Grace CPUs, 72x Blackwell GPUs</li>
                                    <li>• Up to 13.4 TB HBM3e | 576 TB/s</li>
                                    <li>• 2,592 Arm® Neoverse V2 cores</li>
                                    <li>• Up to 17 TB LPDDR5X | Up to 18.4 TB/s</li>
                                </ul>

                                <Button className="bg-[#8CC63F] text-white px-4 py-2 rounded hover:bg-[#7AB530] transition-colors" onClick={() => window.location.href = '/gb200-nvl72'}>
                                    Learn More
                                </Button>

                            </div>

                            {/* 右侧图片展示和切换按钮 */}
                            <div className="lg:col-span-3 relative">
                                <div className="rounded-lg p-8 flex items-center justify-center">
                                    <Image
                                        src={`/test/products-${currentImageIndex + 1}.png`}
                                        alt="NVIDIA GB200 NVL72"
                                        width={580}
                                        height={400}
                                        className="object-contain"
                                    />
                                </div>

                                {/* 图片切换按钮 */}
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                                    {[1, 2, 3, 4].map((index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index - 1)}
                                            className={`w-12 h-12 rounded-lg transition-all duration-200 relative overflow-hidden ${currentImageIndex === index - 1
                                                ? 'border-[#76B900] shadow-lg border-2'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            <Image
                                                src={`/test/button-${index}.png`}
                                                alt={`View ${index}`}
                                                width={32}
                                                height={32}
                                                className="w-full h-full object-contain rounded"
                                            />
                                            {currentImageIndex !== index - 1 && (
                                                <div className="absolute inset-0 bg-gray-100 bg-opacity-50 rounded"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Global Network Section */}
                <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold mb-6">
                                    Powered By Our Global Network
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Our data centers are powered by Canopy Wave global, carrier-grade network-empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks
                                </p>
                                <Button className="bg-[#F5F9F4] text-white hover:bg-[#6ba000] px-6 py-3">
                                    Get started →
                                </Button>
                            </div>
                            <div className="lg:w-1/2">
                                <EuropeMap />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Explore Canopy Wave Section */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-left mb-12">
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
                                    className="absolute bottom-6 left-6 bg-[#333333] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#313131] transition-colors cursor-pointer flex items-center gap-2"
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
                                    className="absolute bottom-6 left-6 bg-[#333333] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
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
                                    className="absolute bottom-6 left-6 bg-[#333333] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
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
                                    className="absolute bottom-6 left-6 bg-[#333333] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
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
                                    className="absolute bottom-6 left-6 bg-[#333333] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B9A1F] transition-colors cursor-pointer flex items-center gap-2"
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

                {/* Providing secure and efficient solutions for different use cases */}
                <div className="bg-[#F9F9F9] py-12 sm:pt-10 pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SlideUp>
                            <div className="text-left mb-12">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Providing secure and efficient solutions for <br /> different use cases</h2>
                            </div>
                        </SlideUp>

                        <div className="flex gap-4 flex-col md:flex-row">
                            {/* Card 1 - Pursue Efficiency */}
                            <div
                                className="transform"
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
                                                    <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 cursor-pointer hover:text-[#white] transition-colors duration-300" onClick={() => window.location.href = '/model-training'}>
                                                        Learn More&gt;
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>

                            {/* Card 2 - Earn Respect */}
                            <div
                                className="transform"
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
                                                    <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 cursor-pointer hover:text-[#white] transition-colors duration-300" onClick={() => window.location.href = '/inference'}>
                                                        Learn More&gt;
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>

                            {/* Card 3 - Demonstrate Contribution */}
                            <div
                                className="transform"
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
                                                    <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 cursor-pointer hover:text-[#white] transition-colors duration-300" onClick={() => window.location.href = '/rendering'}>
                                                        Learn More&gt;
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>

                            {/* Card 4 - Innovation Excellence */}
                            <div
                                className="transform"
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
                                                    <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 cursor-pointer hover:text-[#white] transition-colors duration-300" onClick={() => window.location.href = '/private-cloud'}>
                                                        Learn More&gt;
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>

                            {/* Card 5 - Customer Focus */}
                            <div
                                className="transform"
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
                                                    <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 cursor-pointer hover:text-[#white] transition-colors duration-300" onClick={() => window.location.href = '/networking-hardware'}>
                                                        Learn More&gt;
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-800 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Accelerate Your AI Journey today
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#76B900] text-white hover:bg-[#6ba000] px-8 py-3" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Launch Now
                            </Button>
                            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3" onClick={() => window.location.href = '/contact'}>
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}