"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'
import IwsLink from '@/components/IwsLink'
import SlideUp from '@/components/slide';
import PartnerCarousel from '@/components/carousel';
import { useInView } from 'react-intersection-observer';
import EuropeMap from '@/components/EuropeMap'
import BackgroundTransition from '@/components/BackgroundTransition';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router'
import Spline from '@splinetool/react-spline';



export default function Index() {
  const router = useRouter()
  const currentUrl = `https://canopywave.com${router.asPath}`

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  // 修改新闻轮播的状态管理 - 从中间位置开始，确保左右都能滑动
  const [currentNewsIndex, setCurrentNewsIndex] = useState(40); // 设置为扩展数组的中间位置
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 新闻卡片数据
  const newsCards = [
    {
      id: 1,
      href: "/blog/how-to-choose-the-right-storage-for-your-ai-workflows",
      image: "/blog/workflows2.png",
      title: "How to Choose the Right Storage for Your AI Workflows",
      description: "Choosing the Right Storage Architecture for AI",
      date: "July 25, 2025"
    },
    {
      id: 2,
      href: "/blog/canopy-wave-launches-next-gen-gpu-cluster-with-nvidia-gb200-nvl72",
      image: "/blog/blog2.png",
      title: "Canopy Wave Launches Next-Gen GPU Cluster with NVIDIA GB200 NVL72",
      description: "Revolutionizing AI Infrastructure with Cutting-Edge Technology",
      date: "July 14, 2025"
    },
    {
      id: 3,
      href: "/events/ai-agent-summit-keynote",
      image: "/blog2.svg",
      title: "The Rise of Enterprise AI: Trends in Inferencing and GPU Resource Planning",
      description: "by James Liao @Canopy Wave",
      date: "May 15, 2025"
    },
    {
      id: 4,
      href: "/blog/joint-blog-accelerate-enterprise-ai",
      image: "/blog1.webp",
      title: "Joint Blog - Accelerate Enterprise AI",
      description: "by James Liao, CTO of Canopy Wave, and Severi Tikkala, CTO of ConfidentialMind",
      date: "April 16, 2025"
    },
    {
      id: 5,
      href: "/events/canopy-confidentialmind-partnership",
      image: "/confidentialmind-logo.png",
      title: "Canopy Wave and ConfidentialMind Join Forces to Accelerate Enterprise AI Adoption",
      description: "by James Liao @Canopy Wave",
      date: "April 1, 2025"
    },

  ];

  // 创建扩展的卡片数组以支持无缝循环
  const getExtendedCards = () => {
    // 创建足够多的重复卡片以支持无限滑动
    const repeats = 20; // 增加重复次数
    const extended = [];
    for (let i = 0; i < repeats; i++) {
      extended.push(...newsCards);
    }
    return extended;
  };


  // 获取当前显示的卡片起始索引
  const getDisplayStartIndex = () => {
    const totalCards = newsCards.length;
    const baseIndex = Math.floor(getExtendedCards().length / 2) - totalCards;
    return baseIndex + (currentNewsIndex % totalCards);
  };

  const handleNextNews = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentNewsIndex(prev => prev + 1);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevNews = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentNewsIndex(prev => prev - 1);
    setTimeout(() => setIsTransitioning(false), 300);
  };
  const slides = [
    {
      id: 1,
      background: '/home_banner.svg',
      // title: 'Instant GPU',
      // subtitle: 'Cluster for',
      // highlight: 'Enterprise AI',
      titleColor: 'text-[#80B224]',
      bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
    },
    {
      id: 2,
      background: '/banner2.jpg',
      title: 'On-Demand',
      subtitle: 'NVIDIA GB200 NVL72',
      highlight: 'Aiming to Next-Generation AI and Computing Technologies',
      titleColor: 'text-white',
      subtitleColor: 'text-[#80B224]',
      bgColor: 'bg-black'
    },
    {
      id: 3,
      background: '/hgx-b200/5.png',
      title: 'On-Demand',
      subtitle: 'NVIDIA HGX B200',
      highlight: 'The Foundation of Your AI Workloads and Computing Technologies',
      titleColor: 'text-white',
      subtitleColor: 'text-[#80B224]',
      bgColor: 'bg-black'
    },
    {
      id: 4,
      background: '/home_banner.svg',
      // title: 'Instant GPU',
      // subtitle: 'Cluster for',
      // highlight: 'Enterprise AI',
      titleColor: 'text-[#80B224]',
      bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
    },
    {
      id: 5,
      background: '/home_banner.svg',
      // title: 'Instant GPU',
      // subtitle: 'Cluster for',
      // highlight: 'Enterprise AI',
      titleColor: 'text-[#80B224]',
      bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
    },
    {
      id: 6,
      background: '/home_banner.svg',
      // title: 'Instant GPU',
      // subtitle: 'Cluster for',
      // highlight: 'Enterprise AI',
      titleColor: 'text-[#80B224]',
      bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
    },
  ];

  //  自动轮播
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
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true // 只触发一次
  });

  return (
    <main>
      <Head>
        <title>Canopy Wave - Instant GPU Cluster for Enterprise AI</title>
        <meta name="description" content="Leading provider of GPU computing, cloud infrastructure, and AI solutions with sustainable data centers in Iceland." />

        {/* 页面特定的Open Graph标签 */}
        <meta property="og:title" content="Canopy Wave - Instant GPU Cluster for Enterprise AI" />
        <meta property="og:description" content="Leading provider of GPU computing, cloud infrastructure, and AI solutions with sustainable data centers in Iceland." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://canopywave.com/home_banner.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Canopy Wave Homepage" />
        <link rel="preload" href="/home_banner.svg" as="image" type="image/svg+xml" />
        {/* <link rel="preload" href="https://prod.spline.design/mxRFE6t9RTNvLWI1/scene.splinecode" as="fetch" crossOrigin="anonymous"></link> */}
      </Head>
      <Header />
      <div className="w-full text-gray-600">

        {/* 轮播图Banner */}
        <div className="w-full h-[535px] relative mt-[84px] overflow-hidden">
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
              {slide.id === 4 && (
                <div className="absolute inset-0 z-0">
                  <Spline
                    scene="https://prod.spline.design/TjYOaAXtOEc7y-ph/scene.splinecode" 
                    style={{
                      width: '100% !important',
                      height: '120% !important',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0
                    }}
                  />
                </div>
              )}
              {slide.id === 5 && (
                <div className="absolute inset-0 z-0">
                  <Spline
                    scene="https://prod.spline.design/Lv2S5gwKZE6V7VUs/scene.splinecode"
                    style={{
                      width: '100% !important',
                      height: '120% !important',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0
                    }}
                  />
                </div>
              )}
              {slide.id === 1 && (
                <div className="absolute inset-0 z-0">
                  <Spline
                    scene="https://prod.spline.design/mxRFE6t9RTNvLWI1/scene.splinecode"
                    style={{
                      width: '100% !important',
                      height: '120% !important',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0
                    }}
                  />
                </div>
              )}
              {slide.id === 6 && (
                <div className="absolute inset-0 z-0">
                  <Spline
                    scene="https://prod.spline.design/Yd0WMoyJ-AyBgshO/scene.splinecode"
                    style={{
                      width: '100% !important',
                      height: '120% !important',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0
                    }}
                  />
                </div>
              )}
             
              {/* {slide.id === 1 ? (
                <div className="absolute inset-0 z-0">
                  <Spline
                    scene="https://prod.spline.design/mxRFE6t9RTNvLWI1/scene.splinecode"
                    style={{
                      width: '100% !important',
                      height: '120% !important',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0
                    }}
                  />
                </div>
              ) : slide.id === 3 ? (
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
              )} */}

              {/* 黑色遮罩层 - 仅对第二张图片 */}
              {/* {slide.id !== 1 && (
                <div className="absolute inset-0 bg-black bg-opacity-40 z-5" />
              )} */}


              <div className="absolute inset-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                  <SlideUp>
                    {slide.id === 1 ? (
                      <h1 className={`text-5xl sm:text-6xl font-black ${slide.titleColor} text-center text-shadow-lg`}>
                        {slide.title} <br /> {slide.subtitle} <br /> {slide.highlight}
                      </h1>
                    ) : (
                      <div className="text-center">
                        <h1 className={`text-4xl sm:text-5xl font-bold ${slide.titleColor} mb-4`}>
                          {slide.title}
                        </h1>
                        <h2 className={`text-3xl sm:text-4xl font-black ${slide.subtitleColor} mb-6`}>
                          {slide.subtitle}
                        </h2>
                        <p className={`text-lg sm:text-xl ${slide.titleColor} mb-8 max-w-3xl mx-auto`}>
                          {slide.highlight}
                        </p>
                        {/* <div className="flex gap-4 justify-center">
                          <Button className="bg-[#80B224] hover:bg-[#6a9a1e] text-white px-8 py-3"
                            onClick={() => window.location.href = slide.id === 2 ? '/gb200-nvl72' : '/hgx-b200'}>
                            Learn More
                          </Button>
                          <Button className="bg-[#80B224] hover:bg-[#6a9a1e] text-white px-8 py-3" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                            Launch Now
                          </Button>
                        </div> */}
                      </div>
                    )}
                  </SlideUp>
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
        {/* <div className="relative overflow-hidden h-[700px] bg-[#F5F9F4]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-5">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 drop-shadow-sm">
              Instant GPU Cluster for <br /> Enterprise AI
            </h1>
            <p className="hidden md:block text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
              可选的副标题或描述文字
            </p>
          </div>
          
          <Spline
            scene="https://prod.spline.design/Yd0WMoyJ-AyBgshO/scene.splinecode" 
          />
          <div className="absolute bottom-0 right-0 w-full h-[60px] bg-[#F5F9F4] z-20" />
        </div> */}

        {/* Features Section */}
        {/* <div className="bg-[#F9F9F9] py-12 sm:pb-16 pt-0"> */}
        <div className="bg-[#F9F9F9] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-black mb-12 sm:mb-16 text-center">
                Instantly allocated GPU cluster <br /> with ready-to-go AI stack
              </h2>
            </SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <Image src="/icon/optimized.svg" alt="Optimized Stack" width={34} height={34} className="mb-6 svg-gray" />
                <h3 className="text-l font-bold mb-4 group-hover:text-white">Optimized stack</h3>
                <p className="text-gray-600 group-hover:text-white text-l">Pre-qualified and optimized GPU and AI drivers</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <Image src="/icon/resource.svg" alt="Dedicated resource" width={34} height={34} className="mb-6 svg-gray" />
                <h3 className="text-l font-bold mb-4 group-hover:text-white">Dedicated resource</h3>
                <p className="text-gray-600 group-hover:text-white text-l">Fully secured resources with the flexibility to optimize your stacks and application</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <Image src="/icon/high.svg" alt="High performance" width={34} height={34} className="mb-6 svg-gray" />
                <h3 className="text-l font-bold mb-4 group-hover:text-white">High performance</h3>
                <p className="text-gray-600 group-hover:text-white text-l">Optimized infrastructure to achieve the highest performance of clusters of GPU</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <Image src="/icon/used.svg" alt="Pay only used" width={34} height={34} className="mb-6 svg-gray" />
                <h3 className="text-l font-bold mb-4 group-hover:text-white">Pay only used</h3>
                <p className="text-gray-600 group-hover:text-white text-l">Only pay for the GPU you use at the wholesale price. No wasted spending to test and integrate different versions of drivers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <PartnerCarousel logos={partnerLogos} />

        {/* Products Section */}
        <div className="bg-[#F9F9F9] py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-black mb-12 sm:mb-16 text-center">
                NVIDIA GB200 & B200, H100, H200 GPUs<br /> now available
              </h2>
            </SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8">
              <div className="group border border-gray-200 p-8 rounded-xl hover:shadow-2xl">
                <div className="flex items-center mb-6 relative z-10">
                  <Image src="/icon/NvidiaH100.svg" alt="H100" width={34} height={34} className='svg-gray' />
                  <h3 className="text-lg font-bold ml-6 group-hover:text-[#8CC63F] transition-colors duration-300">NVIDIA GB200 NVL72</h3>
                </div>
                <p className="text-gray-600 text-l mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">GB200 NVL72 connects 36 Grace CPUs and 72 Blackwell GPUs in a rack-scale, liquid-cooled design. It boasts a 72-GPU NVLink domain that acts as a single, massive GPU and delivers 30X faster real-time trillion-parameter large language model (LLM) inference</p>
                <IwsLink href="/gb200-nvl72" className="inline-flex items-center text-[#8CC63F] hover:text-[#7ab32f] text-l group-hover:text-lg font-medium group-hover:translate-x-2 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </IwsLink>
              </div>
              <div className="group border border-gray-200 p-8 rounded-xl hover:shadow-2xl">
                <div className="flex items-center mb-6 relative z-10">
                  <Image src="/icon/NvidiaH100.svg" alt="H100" width={34} height={34} className='svg-gray' />
                  <h3 className="text-lg font-bold ml-6 group-hover:text-[#8CC63F] transition-colors duration-300">NVIDIA HGX B200</h3>
                </div>
                <p className="text-gray-600 text-l mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">The NVIDIA HGX B200 GPU is based on the latest Blackwell architecture with 180GB of HBM3e memory at 8TB/s. As a premier accelerated scale-up x86 platform with up to 15X faster real-time inference performance, 12X lower cost, and 12X less energy use, HGX B200 is designed for the most demanding AI, data analytics, and high-performance computing (HPC) workloads</p>
                <IwsLink href="/hgx-b200" className="inline-flex items-center text-[#8CC63F] hover:text-[#7ab32f] text-l group-hover:text-lg font-medium group-hover:translate-x-2 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </IwsLink>
              </div>
              <div className="group border border-gray-200 p-8 rounded-xl hover:shadow-2xl">
                <div className="flex items-center mb-6 relative z-10">
                  <Image src="/icon/NvidiaH100.svg" alt="H100" width={34} height={34} className='svg-gray' />
                  <h3 className="text-lg font-bold ml-6 group-hover:text-[#8CC63F] transition-colors duration-300">NVIDIA H100</h3>
                </div>
                <p className="text-gray-600 text-l mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">H100 extends NVIDIA's market-leading inference leadership with several advancements that accelerate inference by up to 30X and deliver the lowest latency</p>
                <IwsLink href="/compute-services#hgx-h100" className="inline-flex items-center text-[#8CC63F] hover:text-[#7ab32f] text-l group-hover:text-lg font-medium group-hover:translate-x-2 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </IwsLink>
              </div>

              <div className="group border border-gray-200 p-8 rounded-xl hover:shadow-2xl">
                <div className="flex items-center mb-6 relative z-10">
                  <Image src="/icon/NvidiaH100.svg" alt="H100" width={34} height={34} className='svg-gray' />
                  <h3 className="text-lg font-bold ml-6 group-hover:text-[#8CC63F] transition-colors duration-300">NVIDIA H200</h3>
                </div>
                <p className="text-gray-600 text-l mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">The NVIDIA H200 GPU supercharges generative AI and high-performance computing (HPC) workloads with game-changing performance and memory capabilities</p>
                <IwsLink href="/compute-services#hgx-h200" className="inline-flex items-center text-[#8CC63F] hover:text-[#7ab32f] text-l group-hover:text-lg font-medium group-hover:translate-x-2 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </IwsLink>
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Section */}
        <div className="bg-[#F9F9F9] py-12 sm:pt-16 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <SlideUp>
                  <h2 className="text-3xl sm:text-4xl font-black mb-8 sm:mb-10">Powered By Our Global Network</h2>
                </SlideUp>
                <SlideUp>
                  <p className="text-gray-600 mb-8 text-l leading-relaxed">
                    Our data centers are powered by Canopy Wave global, carrier-grade network-empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks
                  </p>
                </SlideUp>

                <SlideUp>
                  <IwsLink href="/data-center/iceland" className="w-full sm:w-auto px-6 py-3 bg-[#8CC63F] text-white rounded-md hover:bg-[#7ab32f] transition-colors text-l">
                    Get started →
                  </IwsLink>
                </SlideUp>
              </div>
              <div className="w-full md:w-1/2">
                <SlideUp>
                  <EuropeMap />
                </SlideUp>
              </div>
            </div>
          </div>
        </div>


        {/* <div className='bg-[#F9F9F9]'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-20 py-16">
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">Powered By Our Global Network</h2>
            </SlideUp>
            <SlideUp>
              <div className="flex justify-center pb-8">
                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                Get started →
                </Button>
              </div>
            </SlideUp>
            <SlideUp>
              <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-l">
              Our data centers are powered by Canopy Wave global, carrier-grade network-empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks
              </p>
            </SlideUp>
            
            
            <SlideUp>
                  <EuropeMap />
                </SlideUp>
            
          </div>
        </div> */}

        {/* News Section */}
        <div className="bg-[#F9F9F9] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <SlideUp>
              <div className='flex items-center justify-between mb-12'>
                <h2 className="text-3xl sm:text-4xl font-black text-left">
                  Explore Canopy Wave: Fresh Blog Posts & Events
                </h2>
                {/* See All Link */}
                <IwsLink href="/about/newsroom" className="text-gray-600 hover:text-[#8CC63F] inline-flex items-center">
                  <span className="flex items-center">
                    See All
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </IwsLink>
              </div>
            </SlideUp>

            {/* News Cards Carousel */}
            <div className="relative sm:-mx-3">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentNewsIndex * (100 / 3)}%)`,
                    minWidth: '1250px'
                  }}
                >
                  {getExtendedCards().map((card, index) => (
                    <div key={`${card.id}-${Math.floor(index / newsCards.length)}-${index}`} className="w-1/3 flex-shrink-0 custom-500:px-3 md:px-3 sm:px-3 lg:px-3">
                      <Link href={card.href}>
                        <div className="h-[420px] group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col">
                          <div className="relative h-[220px] w-full overflow-hidden">
                            <Image
                              src={card.image}
                              alt={`${card.title} Image`}
                              fill
                              sizes="(max-width: 640px) 100vw, 33vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              unoptimized={card.image.includes('.webp')}
                            />
                          </div>
                          <div className="h-[200px] p-6 flex flex-col flex-grow">
                            <h4 className="text-l font-semibold mb-3 line-clamp-2">
                              {card.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-6 line-clamp-2">{card.description}</p>
                            <div className="flex flex-wrap items-center gap-4 mt-auto">
                              <span className="px-3 py-1 bg-[#8CC63F] text-white text-sm rounded-full">Read More</span>
                              <span className="text-gray-500 text-sm">{card.date}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* Navigation Buttons - Always visible */}
              <button
                onClick={handlePrevNews}
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNextNews}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32 overflow-hidden">
          {/* 背景图片容器 - 绝对定位覆盖整个区域 */}
          <BackgroundTransition
            defaultImage="/contact-section1.webp"  // 暗色版本
            activeImage="/contact-section2.webp"   // 亮色版本
            className="w-full h-full"
            fadeDuration={4000}  // 4秒的点亮过程
            threshold={0.7}  // 当70%进入视口时触发
          />

          {/* 内容容器 - 确保在图片上方显示 */}
          <div className="relative z-30 container mx-auto px-4">
            {/* 标题和内容 */}
            <div className="relative max-w-7xl mx-auto">
              <SlideUp>
                <h2 className="text-3xl sm:text-4xl font-black mb-10 sm:mb-12">Have Questions? Get in Touch!</h2>
              </SlideUp>
              <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <SlideUp>
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="bg-[#8CC63F] text-sm hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md"
                    >
                      Contact Us
                    </button>
                  </SlideUp>
                  <SlideUp>
                    <button
                      onClick={() => window.location.href = '/pricing'}
                      className="bg-white text-sm hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md border border-gray-200"
                    >
                      Get Pricing
                    </button>
                  </SlideUp>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
