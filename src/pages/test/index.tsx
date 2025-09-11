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
                {/* Hero Section */}
                <div className="w-full h-[520px] relative mt-[84px] bg-[#F5F7F4]">
                    <Image
                        src="/compute/banner.svg"
                        alt="banner"
                        fill
                        className="object-cover"
                        priority

                    />
                    <div className="absolute inset-0 z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
                            <SlideUp>
                                <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-shadow-lg">
                                    Compute Services
                                </h1>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-l mt-8 block sm:hidden">
                                    Canopy Wave uses Virtualization technology to provide world-leading performance GPU for AI training & inference
                                </p>
                                <p className="text-gray-600 text-l mt-8 hidden sm:block">
                                    Canopy Wave uses Virtualization technology to provide world-leading <br /> performance GPU for AI training & inference
                                </p>
                            </SlideUp>

                        </div>
                    </div>
                </div>

                {/* Partners Section */}
                <PartnerCarousel logos={partnerLogos} />
                {/* Chat Section - 灰色背景聊天区域 */}
                <div className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* 左侧聊天界面 */}
                            <div className="lg:w-1/2">
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <div className="border-b pb-4 mb-4">
                                        <h3 className="text-lg font-semibold">Chat</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-2">Professional services with industry-leading SLAs</p>
                                            <p className="text-sm">We'll help you get started with our professional services team and industry-leading SLAs to ensure your success.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button className="bg-[#76B900] text-white hover:bg-[#6ba000] text-sm px-4 py-2">
                                                Chat Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 右侧内容 */}
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold mb-6">
                                    Instantly allocated GPU resource and<br />
                                    ready-to-go AI resource
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#76B900] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Image src="/icon/optimized.svg" alt="Optimized" width={32} height={32} className="filter brightness-0 invert" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Optimized stack</h3>
                                        <p className="text-sm text-gray-600">Pre-qualified and optimized GPU and AI drivers</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#76B900] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Image src="/icon/resource.svg" alt="Resource" width={32} height={32} className="filter brightness-0 invert" />
                                        </div>
                                        <h3 className="font-semibold mb-2">Pay only used</h3>
                                        <p className="text-sm text-gray-600">Only pay for the GPU you use at the wholesale price</p>
                                    </div>
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
                        <h2 className="text-3xl font-bold text-center mb-12">
                            On-demand High-Performance GPUs<br />
                            now available
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                            {/* 左侧产品介绍 */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="flex items-center space-x-4">
                                    <h3 className="text-2xl font-bold">NVIDIA GB200 NVL72</h3>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        $9/GPU/hr
                                    </span>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-l">
                                    The GB200 NVL72 is a rack-scale, liquid-cooled system integrating 36 Grace CPUs and 72 Blackwell GPUs. Its unified 72-GPU NVLink domain delivers 30x faster trillion-parameter LLM inference.
                                </p>

                                <Link href="/gb200-nvl72">
                                    <Button className="bg-[#8CC63F] text-white px-6 py-2 rounded hover:bg-[#7AB530] transition-colors">
                                        Learn More
                                    </Button>
                                </Link>
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

                {/* Solutions Section - 解决方案卡片 */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Providing secure and efficient solutions<br />
                            for different use cases
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">
                                <h3 className="font-bold mb-2">Machine Learning</h3>
                                <p className="text-sm opacity-90">Advanced ML algorithms and model training</p>
                            </div>
                            <div className="bg-gradient-to-br from-teal-400 to-teal-600 text-white p-6 rounded-lg">
                                <h3 className="font-bold mb-2">Data Analytics</h3>
                                <p className="text-sm opacity-90">Real-time data processing and analysis</p>
                            </div>
                            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 text-white p-6 rounded-lg">
                                <h3 className="font-bold mb-2">AI Training</h3>
                                <p className="text-sm opacity-90">Large-scale AI model training infrastructure</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                                <h3 className="font-bold mb-2">Deep Learning</h3>
                                <p className="text-sm opacity-90">Neural network training and inference</p>
                            </div>
                            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-6 rounded-lg">
                                <h3 className="font-bold mb-2">HPC</h3>
                                <p className="text-sm opacity-90">High-performance computing solutions</p>
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
                                <Button className="bg-[#76B900] text-white hover:bg-[#6ba000] px-6 py-3">
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Canopy Wave</h2>
                        </div>

                        {/* First Row - 2/3 and 1/3 layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                            {/* Events Card - 2/3 width */}
                            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4">
                                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Events</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Rise of Enterprise AI: Trends in Inferencing and GPU Resource Planning</h3>
                                <p className="text-sm text-gray-600 mb-6">AI Agent Summit Keynote by James Liao @Canopy Wave</p>
                                <button className="flex items-center text-green-600 hover:text-green-700 transition-colors group">
                                    Learn More
                                    <span className="text-sm font-medium mr-2"></span>
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </div>

                            {/* Blog Card - 1/3 width */}
                            <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">Blog</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Joint Blog - Accelerate Enterprise AI</h3>
                                <p className="text-sm text-gray-600 mb-6">by James Liao, CTO of Canopy Wave, and Severi Tikkas, CTO of ConfidentialMind</p>
                                <button className="flex items-center text-green-600 hover:text-green-700 transition-colors group">
                                    Learn More
                                    <span className="text-sm font-medium mr-2"></span>
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Second Row - Three equal cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Case Studies Card */}
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4">
                                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">Case Studies</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accelerating Protein Engineering with Canopy Wave's GPUaaS</h3>
                                <p className="text-sm text-gray-600 mb-6">Foundry BioSciences Case Study</p>
                                <button className="flex items-center text-green-600 hover:text-green-700 transition-colors group">
                                    Learn More
                                    <span className="text-sm font-medium mr-2"></span>
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </div>

                            {/* Tutorials Card */}
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4">
                                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">Tutorials</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Run the GPT-OSS Locally on a Canopy Wave VM</h3>
                                <p className="text-sm text-gray-600 mb-6">Step-by-step guide for local deployment</p>
                                <button className="flex items-center text-green-600 hover:text-green-700 transition-colors group">
                                    Learn More
                                    <span className="text-sm font-medium mr-2"></span>
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </div>

                            {/* Docs Card */}
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4">
                                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">Docs</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Canopy Wave GPU Cluster Hardware Product Portfolio</h3>
                                <p className="text-sm text-gray-600 mb-6">This portfolio outlines modular hardware components and recommended configurations</p>
                                <button className="flex items-center text-green-600 hover:text-green-700 transition-colors group">
                                    Learn More
                                    <span className="text-sm font-medium mr-2"></span>
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Providing secure and efficient solutions for different use cases */}
                <div className="bg-[#F9F9F9] py-12 sm:pt-10 pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black text-left mb-12 text-gray-600">
                                Providing secure and efficient solutions for <br /> different use cases
                            </h2>
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
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsExpanded(!isExpanded);
                                        }}
                                    >
                                        <Image
                                            src="/about/values1.png"
                                            alt="Pursue Efficiency Through Open and Clear Communication"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
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
                                                    <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                         AI Model Training
                                                     </h3>
                                                     <div className="flex items-center justify-between">
                                                         <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                             Accelerate AI training with powerful computing power and low-latency networks
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setIsExpanded(!isExpanded);
                                                                }}
                                                                style={{ verticalAlign: 'middle' }}
                                                                className="ml-3 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
                                                            >
                                                                <svg
                                                                    className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <div className={`text-xs opacity-75 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-40 opacity-75' : 'max-h-0 opacity-0'}`}>
                                                         <p className="mb-2">
                                                             Applied in NLP, computer vision, recommendations, and autonomous driving.
                                                         </p>
                                                         <p>
                                                             Learn More&gt;
                                                         </p>
                                                     </div>
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
                                            src="/about/values2.png"
                                            alt="Earn Respect with an Ownership Mindset"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                            {hoveredCard !== 'card2' && (
                                                <>
                                                    <h3 className="text-xl font-bold mb-3 leading-tight">
                                                        Inference
                                                    </h3>
                                                </>
                                            )}


                                            {showCardContent === 'card2' && (
                                                <>
                                                    <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                        Inference
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                            Scalable and secure AI inference powered by high-performance virtual machines
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setIsExpanded2(!isExpanded2);
                                                                }}
                                                                style={{ verticalAlign: 'middle' }}
                                                                className="ml-3 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
                                                            >
                                                                <svg
                                                                    className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded2 ? 'rotate-180' : 'rotate-0'}`}
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <div className={`text-xs opacity-75 transition-all duration-300 overflow-hidden ${isExpanded2 ? 'max-h-40 opacity-75' : 'max-h-0 opacity-0'}`}>
                                                        <p className="mb-2">
                                                            Applied in real-time search, recommendations, speech, and vision applications.
                                                        </p>
                                                        <p>
                                                            Learn More&gt;
                                                        </p>
                                                    </div>
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
                                            src="/about/values3.png"
                                            alt="Demonstrate Contribution with Measurable Results"
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">

                                            {hoveredCard !== 'card3' && (
                                                <>
                                                    <h3 className="text-xl font-bold mb-3 leading-tight">
                                                        Rendering
                                                    </h3>
                                                </>
                                            )}
                                            {showCardContent === 'card3' && (
                                                <>
                                                    <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                        Rendering
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                            High-frame throughput and ultra-low latency with GPU and CPU-based rendering engines
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setIsExpanded3(!isExpanded3);
                                                                }}
                                                                style={{ verticalAlign: 'middle' }}
                                                                className="ml-3 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
                                                            >
                                                                <svg
                                                                    className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded3 ? 'rotate-180' : 'rotate-0'}`}
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <div className={`text-xs opacity-75 transition-all duration-300 overflow-hidden ${isExpanded3 ? 'max-h-[200px] opacity-75' : 'max-h-0 opacity-0'
                                                        }`}>
                                                        <p className="mb-2">
                                                            Applied in gaming, simulation, virtual production, and design visualization.
                                                        </p>
                                                        <p>
                                                            Learn More&gt;
                                                        </p>
                                                    </div>
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
                                             src="/about/values1.png"
                                             alt="Innovation Excellence"
                                             fill
                                             className="object-cover transition-transform duration-300 group-hover:scale-105"
                                         />
                                         <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                         <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                             {hoveredCard !== 'card4' && (
                                                 <>
                                                     <h3 className="text-xl font-bold mb-3 leading-tight">
                                                         Private Cloud and GPUs Deployment
                                                     </h3>
                                                 </>
                                             )}
                                             {showCardContent === 'card4' && (
                                                 <>
                                                     <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                         Private Cloud and GPUs Deployment
                                                     </h3>
                                                     <div className="flex items-center justify-between">
                                                         <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                             Extensive deployment experience with fast delivery and full-stack software support
                                                             <button
                                                                 onClick={(e) => {
                                                                     e.stopPropagation();
                                                                     setIsExpanded4(!isExpanded4);
                                                                 }}
                                                                 style={{ verticalAlign: 'middle' }}
                                                                 className="ml-3 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
                                                             >
                                                                 <svg
                                                                     className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded4 ? 'rotate-180' : 'rotate-0'}`}
                                                                     fill="none"
                                                                     stroke="currentColor"
                                                                     viewBox="0 0 24 24"
                                                                 >
                                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                 </svg>
                                                             </button>
                                                         </p>
                                                     </div>
                                                     <div className={`text-xs opacity-75 transition-all duration-300 overflow-hidden ${isExpanded4 ? 'max-h-40 opacity-75' : 'max-h-0 opacity-0'}`}>
                                                         <p className="mb-2">
                                                             Applied in AI training, inference, rendering, and high-performance computing.
                                                         </p>
                                                         <p>
                                                             Learn More&gt;
                                                         </p>
                                                     </div>
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
                                             src="/about/values2.png"
                                             alt="Customer Focus"
                                             fill
                                             className="object-cover transition-transform duration-300 group-hover:scale-105"
                                         />
                                         <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                         <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                             {hoveredCard !== 'card5' && (
                                                 <>
                                                     <h3 className="text-xl font-bold mb-3 leading-tight">
                                                         Networking Hardware Solution
                                                     </h3>
                                                 </>
                                             )}
                                             {showCardContent === 'card5' && (
                                                 <>
                                                     <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                         Networking Hardware Solution
                                                     </h3>
                                                     <div className="flex items-center justify-between">
                                                         <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                                                             Provide comprehensive network hardware solutions, including Switches, NICs, Transceivers, etc
                                                             <button
                                                                 onClick={(e) => {
                                                                     e.stopPropagation();
                                                                     setIsExpanded5(!isExpanded5);
                                                                 }}
                                                                 style={{ verticalAlign: 'middle' }}
                                                                 className="ml-3 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
                                                             >
                                                                 <svg
                                                                     className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded5 ? 'rotate-180' : 'rotate-0'}`}
                                                                     fill="none"
                                                                     stroke="currentColor"
                                                                     viewBox="0 0 24 24"
                                                                 >
                                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                 </svg>
                                                             </button>
                                                         </p>
                                                     </div>
                                                     <div className={`text-xs opacity-75 transition-all duration-300 overflow-hidden ${isExpanded5 ? 'max-h-40 opacity-75' : 'max-h-0 opacity-0'}`}>
                                                         <p className="mb-2">
                                                             Serving enterprise, data center, and edge computing with reliable, scalable infrastructure.
                                                         </p>
                                                         <p>
                                                             Learn More&gt;
                                                         </p>
                                                     </div>
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
                            <Button className="bg-[#76B900] text-white hover:bg-[#6ba000] px-8 py-3">
                                Contact Us
                            </Button>
                            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3">
                                Get Pricing
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}