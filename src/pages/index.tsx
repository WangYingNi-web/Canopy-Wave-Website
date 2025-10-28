"use client";

import React, { useState, useEffect, useRef } from 'react';
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

export default function TestIndex() {
  const router = useRouter()
  const [imageLoaded, setImageLoaded] = useState(false);
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
  const [activeTab, setActiveTab] = useState(1); // 从上至下开始，初始为Multi-model collaboration: Beyond single-model capabilities
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const childScrollRef = useRef<HTMLDivElement | null>(null);
  // 鼠标滚轮惯性滚动（模拟触控板顺滑效果）
  const wheelInertiaRef = useRef<{ v: number; raf: number | null } | null>(null);
  const scrollWindowWithInertia = (deltaY: number) => {
    // 归一化初速度并限制上限。
    const MAX_INITIAL_V = 24;
    const SCALE = 0.5;
    const v0 = Math.max(-MAX_INITIAL_V, Math.min(MAX_INITIAL_V, deltaY * SCALE));

    let state = wheelInertiaRef.current;
    if (!state) {
      state = { v: 0, raf: null };
    }
    // 新的滚轮事件到来时，取消上一次的动画，避免速度叠加
    if (state.raf) {
      cancelAnimationFrame(state.raf);
      state.raf = null;
    }
    state.v = v0;
    wheelInertiaRef.current = state;

    const decay = 0.88; // 更强的阻尼以缩短惯性距离
    let steps = 0;
    const MAX_STEPS = 20; // 限制最大动画步数，避免过度滚动

    const step = () => {
      const s = wheelInertiaRef.current;
      if (!s) return;
      window.scrollBy({ top: s.v, left: 0, behavior: 'auto' });
      s.v *= decay;
      steps += 1;
      if (Math.abs(s.v) > 0.6 && steps < MAX_STEPS) {
        s.raf = requestAnimationFrame(step);
      } else {
        s.raf = null;
      }
    };
    state.raf = requestAnimationFrame(step);
  };
  useEffect(() => {
    return () => {
      const s = wheelInertiaRef.current;
      if (s?.raf) cancelAnimationFrame(s.raf);
      wheelInertiaRef.current = null;
    };
  }, []);

  // 子滚动容器 wheel 监听（passive:false，允许 preventDefault）
  useEffect(() => {
    const el = childScrollRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      const delta = e.deltaY * (e.deltaMode === 1 ? 16 : 1);
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop <= 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      const willUpBeyondTop = atTop && delta < 0;
      const willDownBeyondBottom = atBottom && delta > 0;
      if (willUpBeyondTop || willDownBeyondBottom) {
        e.preventDefault();
        e.stopPropagation();
        scrollWindowWithInertia(delta);
      }
      // 未到边界：保持原生滚动，不阻止默认，以提升顺滑度
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => {
      el.removeEventListener('wheel', handler as EventListener);
    };
  }, []);
  const allModels: ModelItem[] = [
    // Featured (existing)
    { id: "llama-8b", name: "LLAMA 3.3 8B INSTRUCT", family: "CHAT", params: "8B", context: "128K context", featured: true, logo: "/ai-model/allmodels_ic_llama.png", tags: ["Chat"] },
    { id: "llama-70b", name: "LLAMA 3.3 70B INSTRUCT", family: "CHAT", params: "70B", context: "128K context", featured: true, logo: "/ai-model/allmodels_ic_llama.png", tags: ["Chat"] },
    { id: "gemma-27b", name: "GEMMA 3 27B", family: "CHAT", params: "27B", context: "32K context", featured: true, logo: "/ai-model/allmodels_ic_gemma.png", tags: ["Chat"] },
    { id: "gpt-oss-120b", name: "GPT-OSS 120B", family: "CHAT", params: "120B", context: "128K context", featured: true, logo: "/ai-model/allmodels_ic_gpt.png", tags: ["Chat"] },

    // From screenshot
    { id: "deepseek-v32-exp", name: "DEEPSEEK V3.2 EXP", family: "CHAT", params: "685B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Chat"] },
    { id: "qwen-25-7b-instruct", name: "QWEN 2.5 7B INSTRUCT", family: "CHAT", params: "7B", context: "128K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Chat"] },
    { id: "mixtral-8x22b-instruct", name: "MIXTRAL 8X22B INSTRUCT", family: "CHAT", params: "141B", context: "64K context", logo: "/ai-model/allmodels_ic_mixtral.png", tags: ["Chat"] },
    { id: "gpt-oss-20b", name: "GPT-OSS 20B", family: "CHAT", params: "20B", context: "128K context", logo: "/ai-model/allmodels_ic_gpt.png", tags: ["Chat"] },
    { id: "glm-46", name: "GLM 4.6", family: "CHAT", params: "355B", context: "128K context", logo: "/ai-model/allmodels_ic_glm.png", tags: ["Chat"] },
    { id: "phi3-medium-instruct", name: "PHI-3 MEDIUM INSTRUCT", family: "CHAT", params: "14B", context: "128K context", logo: "/ai-model/allmodels_ic_phi.png", tags: ["Chat"] },
    { id: "qwen3-235b-a22b-instruct", name: "QWEN3-235B-A22B-INSTRUCT", family: "CHAT", params: "235B", context: "256K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Chat"] },
    { id: "deepseek-v3-0324", name: "DEEPSEEK V3 0324", family: "CHAT", params: "671B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Chat"] },
    { id: "deepseek-r1-0528", name: "DEEPSEEK R1 0528", family: "CHAT", params: "685B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Chat"] },
    { id: "glm-45", name: "GLM 4.5", family: "CHAT", params: "355B", context: "128K context", logo: "/ai-model/allmodels_ic_glm.png", tags: ["Chat"] },
    { id: "qwen3-14b-instruct", name: "QWEN3 14B INSTRUCT", family: "CHAT", params: "14B", context: "128K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Chat"] },

    // New additions from latest screenshot
    { id: "pixtral-12b-instruct", name: "PIXTRAL 12B INSTRUCT", family: "CHAT", params: "12B", context: "128K context", logo: "/ai-model/allmodels_ic_mixtral.png", tags: ["Chat"] },
    { id: "mistral-nemo-12b-instruct", name: "MISTRAL NEMO 12B INSTRUCT", family: "CHAT", params: "12B", context: "128K context", logo: "/ai-model/allmodels_ic_mixtral.png", tags: ["Chat"] },
    { id: "llama-4-scout-instruct", name: "LLAMA 4 SCOUT INSTRUCT", family: "CHAT", params: "109B", context: "128K context", logo: "/ai-model/allmodels_ic_llama.png", tags: ["Chat"] },
    { id: "kimi-k2-instruct-0905", name: "KIMI K2 INSTRUCT-0905", family: "CHAT", params: "1T", context: "256K context", logo: "/ai-model/allmodels_ic_kimi.png", tags: ["Chat"] },
    { id: "qwen3-coder-480b-a35", name: "QWEN3 CODER 480B A35B INSTRUCT", family: "CHAT", params: "480B", context: "256K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Chat"] },
    { id: "deepseek-v31", name: "DEEPSEEK V3.1", family: "CODE", params: "671B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Code"] },
    { id: "qwen25-32b-coder", name: "QWEN2.5-32B-CODER", family: "CODE", params: "32B", context: "128K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Code"] },
    { id: "starcoder2-15b", name: "STARCODER2 15B", family: "CODE", params: "15B", context: "16K context", logo: "/ai-model/allmodels_ic_starcoder2.png", tags: ["Code"] },
    { id: "codegemma-7b", name: "CODEGEMMA 7B", family: "CODE", params: "7B", context: "8K context", logo: "/ai-model/allmodels_ic_gemma.png", tags: ["Code"] },

    // New additions (CODE / VISION / VIDEO / IMAGE) from latest screenshot #2
    { id: "phind-codellama-34b", name: "PHIND-CODELLAMA 34B", family: "CODE", params: "34B", context: "4K context", logo: "/ai-model/allmodels_ic_phind.png", tags: ["Code"] },
    { id: "deepseek-coder-v2-16b", name: "DEEPSEEK-CODER V2 16B", family: "CODE", params: "16B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Code"] },
    { id: "qwen25-vl-72b", name: "QWEN2.5-VL-72B", family: "VISION", params: "72B", context: "128K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Vision"] },
    { id: "glm45v", name: "GLM4.5V", family: "VISION", params: "106B", context: "128K context", logo: "/ai-model/allmodels_ic_glm.png", tags: ["Vision"] },
    { id: "intern-vl-2-0", name: "INTERN VL 2.0", family: "VISION", params: "26B", context: "4K context", logo: "/ai-model/allmodels_ic_intern.png", tags: ["Vision"] },
    { id: "wan-2-2-t2v", name: "WAN 2.2 T2V", family: "VIDEO", params: "27B", context:"", logo: "/ai-model/allmodels_ic_wan.png", tags: ["Video"] },
    { id: "mochi-1", name: "MOCHI 1", family: "VIDEO", params: "10B", context: "", logo: "/ai-model/allmodels_ic_mochi.png", tags: ["Video"] },
    { id: "hunyuanvideo-i2v", name: "HUNYUANVIDEO-I2V", family: "VIDEO", params: "13B", context: "", logo: "/ai-model/allmodels_ic_hunyuanvideo.png", tags: ["Video"] },
    { id: "sd3-medium", name: "STABLE DIFFUSION 3 MEDIUM", family: "IMAGE", params: "2B", context: "", logo: "/ai-model/allmodels_ic_stable.png", tags: ["Image"] },
    { id: "flux1-dev", name: "FLUX.1 DEV", family: "IMAGE", params: "12B", context: "", logo: "/ai-model/allmodels_ic_flux.png", tags: ["Image"] },
    { id: "flux1-kontext-max", name: "FLUX.1 KONTEXT MAX", family: "IMAGE", params: "12B", context: "", logo: "/ai-model/allmodels_ic_flux.png", tags: ["Image"] },
  ];

  type ModelItem = {
    id: string;
    name: string;
    family: string; // e.g. Chat / Image / Vision
    params?: string; // e.g. 70B
    context?: string; // e.g. 128K context
    featured?: boolean;
    logo?: string; // public path
    tags: string[]; // for category filter
  };
  // 移动端检测
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // 预加载产品图片
  useEffect(() => {
    const preloadProductImages = () => {
      // 预加载所有产品图片
      for (let i = 1; i <= 4; i++) {
        if (typeof window !== 'undefined') {
          const img = document.createElement('img');
          img.src = `/test/products-${i}.webp`;
        }
      }
    };

    preloadProductImages();
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
      background: '/test/01.mp4',
      titleColor: 'text-[#80B224]',
      bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
    },
    {
      id: 2,
      background: '/test/02.webp',
      titleColor: 'text-[#80B224]',
      bgColor: 'bg-gradient-to-r from-green-50 to-green-100'
    },
    {
      id: 3,
      background: '/test/03.webp',
      titleColor: 'text-white',
      subtitleColor: 'text-[#80B224]',
      bgColor: 'bg-black'
    },
    {
      id: 4,
      background: '/test/04.webp',
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
      1: 10060, // chat1.mp4 播放8秒
      2: 8050, // chat2.mp4 播放10秒
      3: 6050  // chat3.mp4 播放12秒
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
    <main className="overflow-x-hidden">
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

      <div className="w-full bg-white overflow-x-hidden">
        {/* 轮播图Banner */}
        <div className="w-full h-[71vh] relative mt-[84px] overflow-hidden will-change-transform">
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

                {slide.id === 1 ? (
                  <video
                    src={slide.background}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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
                )
                }

                {/* 第一张图片的标题和按钮 */}
                {slide.id === 1 && (
                  <div className="absolute inset-0 z-10 flex flex-col justify-center items-start">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="max-w-3xl">
                        <div className="mb-[32px] text-left">
                          <h1 className="text-[64px] leading-[77px] font-bold tracking-[2px] text-[#80B224]">
                            The Platform that Enables Al
                          </h1>
                        </div>
                        <div className="text-left">
                          <p className="text-[36px] leading-[44px] font-normal text-[#4C7D01]">
                            Where Compute Meets Expertise
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 第二张图片的标题和按钮 */}
                {slide.id === 2 && (
                  <div className="absolute inset-0 z-10 flex flex-col justify-center items-start">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="max-w-3xl">
                        <div className="mb-4 sm:mb-6 lg:mb-8">
                          <Image
                            src="/test/banner_dabiaoti02.png"
                            alt="Canopy Wave Chat"
                            width={620}
                            height={200}
                            className="w-full h-auto max-w-[350px] sm:max-w-[400px] lg:max-w-[620px] object-contain"
                            priority
                          />
                        </div>
                        <div className="flex gap-2 sm:gap-4">
                          <button className="border-2 border-[#80B224] font-bold text-[#80B224] hover:bg-[#80B224] hover:text-white hover:scale-105 hover:shadow-lg px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300" onClick={() => window.open('https://chat.canopywave.io/c/new', '_blank')}>
                            Free to Use
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 第三张图片的标题和按钮 */}
                {slide.id === 3 && (
                  <div className="absolute inset-0 z-10 flex flex-col justify-center items-start">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="max-w-4xl">
                        <div className="mb-4 sm:mb-6 lg:mb-8">
                          <Image
                            src="/test/banner_img_biaoti03.png"
                            alt="Accelerating AI Deployment API"
                            width={800}
                            height={200}
                            className="w-full h-auto max-w-[350px] sm:max-w-[500px] lg:max-w-[800px] object-contain"
                            priority
                          />
                        </div>
                        <div className="flex gap-2 sm:gap-4 sm:pl-3">
                          <button
                            onClick={() => window.location.href = '/reserve-ai-service'}
                            className="bg-[#80B224] hover:bg-[#6a9620] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300"
                          >
                            Reserve Now
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

                {/* 第四张图片的标题和按钮 */}
                {slide.id === 4 && (
                  <div className="absolute inset-0 z-10 flex flex-col justify-center items-start">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="max-w-3xl">
                        <div className="mb-4 sm:mb-6 lg:mb-8">
                          <Image
                            src="/test/banner_img_biaoti04.png"
                            alt="On-Demand NVIDIA HGX B200"
                            width={600}
                            height={200}
                            className="w-full h-auto max-w-[400px] lg:max-w-[600px] object-contain"
                            priority
                          />
                        </div>
                        <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8 sm:pl-3">
                          <button onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')} className="bg-[#80B224] hover:bg-[#6a9620] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300">
                            Launch Now
                          </button>
                        </div>
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
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-300 ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:opacity-80'
              }`}
            aria-label="Previous slide"
          >
            <Image
              src="/test/left.png"
              alt="Previous"
              width={48}
              height={48}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </button>

          {/* 右侧切换按钮 */}
          <button
            onClick={() => {
              const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
              handleManualSlideChange(nextIndex);
            }}
            disabled={isTransitioning}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-300 ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:opacity-80'
              }`}
            aria-label="Next slide"
          >
            <Image
              src="/test/right.png"
              alt="Next"
              width={48}
              height={48}
              className="w-12 h-12 md:w-16 md:h-16"
            />
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
        <div className="pb-[24px]">
          <PartnerCarousel logos={partnerLogos} />
        </div>

        {/* Model Library Section */}
        <div className="pb-16">
          <SlideUp>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-4xl font-bold text-left text-[#333333] mb-[40px]">Model Library</h2>
              <p className="text-[14px] sm:text-[16px] text-[#666666]">We have built an open-source model library covering all types and fields. Users can call it directly via API without</p>
              <p className="text-[14px] sm:text-[16px] text-[#666666] mb-[40px]">additional development or adaptation.</p>
              {/* Tabs + Try Now */}
              <div className="flex items-center justify-between gap-4 mb-[40px]">
                <div className="flex flex-wrap items-center gap-2 bg-white p-2 border rounded-3xl">
                  {["All",
                    "Transcribe",
                    "Chat",
                    "Image",
                    "Vision",
                    "Audio",
                    "Moderation",
                    "Code",
                    "Embeddings",
                    "Rerank",].map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedCategory(c)}
                        className={`text-[14px] px-4 py-2 rounded-full ${c === selectedCategory ? 'bg-[#E8F1DB] text-[#80B224] shadow' : 'text-[#333333]'}`}
                      >
                        {c}
                      </button>
                    ))}
                </div>
                <a href="https://cloud.canopywave.io/" target="_blank" rel="noopener noreferrer" className="hidden md:block" aria-label="Open Canopy Wave Cloud">
                  <div className="bg-[#80B224] hover:bg-[#6a9620] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300">Try Now</div>
                </a>
              </div>
              {/* Grid */}
              <div className="mb-[40px] rounded-2xl border border-[#E6E6E6] bg-[#F9F9F9] shadow-[0_6px_24px_rgba(0,0,0,0.12)] p-6 md:py-8 px-12 relative" onWheel={(e) => { let node: HTMLElement | null = e.target as HTMLElement; while (node) { if (node === childScrollRef.current) { return; } node = node.parentElement; } e.preventDefault(); e.stopPropagation(); const normalizedDelta = e.deltaY * (e.deltaMode === 1 ? 16 : 1); scrollWindowWithInertia(normalizedDelta); }}>
                <div ref={childScrollRef} className="h-[590px] overflow-y-auto pr-2 md:pr-6 scrollbar-custom">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {(selectedCategory === 'All' ? allModels : allModels.filter(m => m.tags.includes(selectedCategory))).map((m) => (
                      // <Link href="/ai-model" key={m.id}>
                        <div className="rounded-2xl">
                          <div className="p-6 flex flex-col min-h-[290px]" style={{
                            backgroundImage: 'url(/ai-model/allmodels_img_bg.png)',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }}>
                            <div className="text-[16px] text-[#666666] mb-3 ml-4 font-regular">{m.family}</div>
                            <div className="flex items-center mb-3 mx-auto">
                              <div className="w-16 h-16">
                                <Image src={m.logo ?? '/ai-model/allmodels_ic_gpt.png'} alt={`${m.name} logo`} width={54} height={54} className="w-16 h-16 object-contain" />
                              </div>
                            </div>
                            <div className="font-bold text-[#333333] line-clamp-1 ml-4 mb-[12px] text-[18px]">{m.name}</div>
                            <div className="flex items-center gap-6 text-[#666666] mb-[12px] ml-4 text-[14px]">
                              {m.params && (
                                <div className="flex items-center gap-2">
                                  <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                  <span>{m.params}</span>
                                </div>
                              )}
                              {m.context && (
                                <div className="flex items-center gap-2">
                                  <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                  <span>{m.context}</span>
                                </div>
                              )}
                            </div>
                            <div
                              className="flex items-center gap-2 text-[#666666] ml-4 cursor-default select-none"
                              role="button"
                              aria-disabled="true"
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            >
                              <span className="text-[16px]">Try Now</span>
                              <svg className="w-5 h-5 text-[#666666]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </div>
                          </div>
                        </div>
                      // </Link>
                    ))}
                  </div>
                </div>

              </div>
              <div className="flex justify-center">
                <Link href="/ai-model">
                  <div className="bg-[#80B224] hover:bg-[#6a9620] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300">Explore All Models</div>
                </Link>
              </div>
            </div>
          </SlideUp>
        </div>

        {/* Chat Section - 灰色背景聊天区域 */}
        <div className="py-16" ref={chatRef}>
          <SlideUp>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-left mb-[80px] text-[#333333]">
                Canopy Wave Chat
              </h2>
              <div className="flex flex-col lg:flex-row gap-12 min-h-[480px]">
                {/* 左侧动图区域 - 2/3宽度 */}
                <div className="lg:w-2/3 sm:min-h-[500px] overflow-hidden">
                  <div className="bg-white rounded-lg shadow-lg p-2">
                    <div className="space-y-4">
                      <div className="mb-4">
                        <video
                          src={`/test/chat${activeTab}.mp4`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto rounded-lg"
                          style={{ maxHeight: '580px', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右侧标题区域 - 1/3宽度 */}
                <div className="lg:w-1/3 relative">
                  <div className="space-y-4 h-[430px]">
                    {/* Multi-model collaboration: Beyond single-model capabilities (1) */}
                    <div
                      className={`p-4 cursor-pointer transition-all duration-300 relative ${activeTab === 1
                        ? 'bg-[#F5F9F4] text-gray-700 shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      onMouseEnter={() => {
                        setIsHovering(true);
                        setActiveTab(1);
                      }}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div
                        className="absolute right-0 top-1/4 h-1/2 w-1.5 rounded-full transition-all duration-300"
                        style={{ backgroundColor: activeTab === 1 ? '#80B224' : '#D1F0FA' }}
                      ></div>
                      <h3 className={`text-lg font-semibold ${activeTab === 1 ? 'text-[#80B224]' : 'text-gray-700'
                        }`}>Multi-model collaboration: Beyond single-model capabilities</h3>
                      <div className={`overflow-hidden transition-all duration-500 ${activeTab === 1 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}>
                        <p className="text-sm text-gray-600">
                          Multi-model sequential reasoning leverages "division of labor and collaboration," allowing each model to focus on its area of expertise and achieve a "1+1{'>'}2" effect
                        </p>
                      </div>
                    </div>
                    {/* Compare answers across multiple models for a broader perspective (2) */}
                    <div
                      className={`p-4 cursor-pointer transition-all duration-300 relative ${activeTab === 2
                        ? 'bg-[#F5F9F4] text-gray-700 shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      onMouseEnter={() => {
                        setIsHovering(true);
                        setActiveTab(2);
                      }}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div
                        className="absolute right-0 top-1/4 h-1/2 w-1.5 rounded-full transition-all duration-300"
                        style={{ backgroundColor: activeTab === 2 ? '#80B224' : '#D1F0FA' }}
                      ></div>
                      <h3 className={`text-lg font-semibold ${activeTab === 2 ? 'text-[#80B224]' : 'text-gray-700'
                        }`}>Compare answers across multiple models for a broader perspective</h3>
                      <div className={`overflow-hidden transition-all duration-500 ${activeTab === 2 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}>
                        <p className="text-sm text-gray-600">
                          Different models are built on distinct training data, algorithms, and architectures. Their simultaneous responses consolidate diverse perspectives, delivering more comprehensive and rich information.
                        </p>
                      </div>
                    </div>

                    {/* Flexible parameter adjustment for improved model efficiency (3) */}
                    <div
                      className={`p-4 cursor-pointer transition-all duration-300 relative ${activeTab === 3
                        ? 'bg-[#F5F9F4] text-gray-700 shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      onMouseEnter={() => {
                        setIsHovering(true);
                        setActiveTab(3);
                      }}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div
                        className="absolute right-0 top-1/4 h-1/2 w-1.5 rounded-full transition-all duration-300"
                        style={{ backgroundColor: activeTab === 3 ? '#80B224' : '#D1F0FA' }}
                      ></div>
                      <h3 className={`text-lg font-semibold ${activeTab === 3 ? 'text-[#80B224]' : 'text-gray-700'
                        }`}>Flexible parameter adjustment for improved model efficiency</h3>
                      <div className={`overflow-hidden transition-all duration-500 ${activeTab === 3 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}>
                        <p className="text-sm text-gray-600">
                          Flexibly adjust parameters to match needs, optimizing model convergence speed and boosting efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Free to Use 按钮 - 绝对定位固定在右侧区域底部 */}
                  <div className="">
                    <button className="bg-[#76B900] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6BA000] transition-colors duration-300 shadow-lg" onClick={() => window.open('https://chat.canopywave.io/c/new', '_blank')}>
                      Free to Use
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Value of Custom Chat for Businesses Section */}
          <SlideUp>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="min-h-[480px] relative px-8 pt-20" style={{ backgroundImage: 'url(/test/chat_value_bg.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <h2 className="text-[28px] font-bold text-center text-[#333333] mb-20">
                  Tailored Al Chat for Enterprise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Fast Deployment */}
                  <div className="rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 mb-2 rounded-lg">
                      <Image src="/test/value-1.svg" alt="Secure" width={48} height={48} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-[#333333]">Fast Deployment</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Get your dedicated Chat up and running in no time, enabling rapid adoption without complex development.
                    </p>
                  </div>

                  {/* Full Data Privacy */}
                  <div className="rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 mb-2 rounded-lg">
                      <Image src="/test/value-2.svg" alt="Secure" width={48} height={48} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-[#333333]">Full Data Privacy</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Integrates with your enterprise login system, ensuring that all data remains private, secure, and compliant.
                    </p>
                  </div>

                  {/* Seamless Integration */}
                  <div className="rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 mb-2 rounded-lg">
                      <Image src="/test/value-3.svg" alt="Secure" width={48} height={48} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-[#333333]">Seamless Integration</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Easily integrates with your existing PaaS or IT systems for smooth connectivity and workflow alignment.
                    </p>
                  </div>

                  {/* Knowledge-Enhanced RAG */}
                  <div className="rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 mb-2 rounded-lg">
                      <Image src="/test/value-4.svg" alt="Secure" width={48} height={48} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-[#333333]">Knowledge-Enhanced RAG</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Upload your own knowledge base with RAG technology for more accurate, enterprise-grade Q&A and automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>

        </div>

        {/* Features Section - 特性介绍 */}
        <div className="py-16">
          <SlideUp>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SlideUp>
                <h2 className="text-4xl font-bold text-left text-[#333333] mb-[80px]">
                  Instantly allocated GPU resource and<br />
                  ready-to-go AI resource
                </h2>
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* End-to-End Secure Operations */}
                <SlideUp>
                  <div className="bg-[#F5F9F4] rounded-lg p-8 text-center hover:shadow-lg transition-shadow min-h-[285px]">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center">
                      <Image src="/test/ai-resource-1.svg" alt="Secure" width={48} height={48} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-[#333333]">End-to-End Secure Operations</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our proprietary GPU management platform offers real-time monitoring, health alerts, and resource optimization. Backed by 24/7 support, we ensure peak cluster performance and stability.
                    </p>
                  </div>
                </SlideUp>


                {/* Customized Needs, Personalized Service */}
                <SlideUp>
                  <div className="bg-[#F5F9F4] rounded-lg p-8 text-center hover:shadow-lg transition-shadow min-h-[285px]">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center">
                      <Image src="/test/ai-resource-2.svg" alt="Secure" width={48} height={48} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-[#333333]">Customized Service</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We provide dedicated AI infrastructure and offer full-lifecycle AI services—such as model fine-tuning and agent customization tailored to your needs—to drive enterprises toward faster, smarter, and more cost-effective growth.
                    </p>
                  </div>
                </SlideUp>


                {/* High Performance */}
                <SlideUp>
                  <div className="bg-[#F5F9F4] rounded-lg p-8 text-center hover:shadow-lg transition-shadow min-h-[285px]">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center">
                      <Image src="/test/ai-resource-3.svg" alt="Secure" width={48} height={48} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-[#333333]">Canopy Wave Private Cloud</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Best GPU cluster performance in the industry. With 99.99% up-time. Have all your GPUs under the same datacenter, your workload and privacy are protected.
                    </p>
                  </div>
                </SlideUp>


                {/* Pay for What You Use */}
                <SlideUp>
                  <div className="bg-[#F6F9F4] rounded-lg p-8 text-center hover:shadow-lg transition-shadow min-h-[285px]">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center">
                      <Image src="/test/ai-resource-4.svg" alt="Secure" width={48} height={48} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-[#333333]">Pay for What You Use</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Only pay wholesale prices for the AI-related resources you actually consume. No hidden fees.
                    </p>
                  </div>
                </SlideUp>

              </div>
            </div>
          </SlideUp>

        </div>

        {/* GPU Products Section - NVIDIA GB200 NVL72 */}
        <div className="bg-white py-16">
          <SlideUp>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SlideUp>
                <h2 className="text-4xl font-bold text-left text-[#333333] mb-[36px]">
                  NVIDIA GB200 & B200, H100, H200 GPUs<br />
                  now available
                </h2>
              </SlideUp>


              <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-center">
                {/* 左侧产品介绍 */}
                <div className="lg:col-span-2 lg:-mt-2 min-w-[500px]">
                  {(() => {
                    const productInfo = [
                      {
                        name: "NVIDIA GB200 NVL72",
                        price: "$9/GPU/hr",
                        router: '/gb200-nvl72',
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
                        router: '/hgx-b200',
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
                        router: '/compute-services#hgx-h200',
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
                        router: '/compute-services#hgx-h100',
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
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl font-bold text-[#333333]">{currentProduct.name}</h3>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                          <h4 className="bg-[#DFEDF7] text-[#4C606D] px-3 py-1 rounded-full text-sm font-medium">{currentProduct.price}</h4>
                        </div>
                        <ul className="text-gray-600 leading-relaxed text-l mb-12">
                          {currentProduct.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>

                        <Button
                          className="bg-[#80B224] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6BA000] transition-colors duration-300 shadow-lg"
                          onClick={() => window.location.href = currentProduct.router}
                        >
                          Learn More
                        </Button>
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
                  <div className="p-6 sm:-ml-[110px] flex items-center justify-center h-[420px]">
                    <Image
                      src={`/test/products-${currentImageIndex + 1}.webp`}
                      onLoad={() => setImageLoaded(true)}
                      alt="NVIDIA GPUs"
                      width={560}
                      height={360}
                      className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                  </div>

                  {/* Learn More 按钮 */}
                  <div className="absolute right-0 -top-[60px] transform -translate-y-1/2">
                    <button className="border-2 border-[#80B224] text-[#80B224] hover:bg-[#80B224] hover:text-white hover:scale-105 hover:shadow-lg px-6 py-1.5 rounded-full text-sm font-medium" onClick={() => window.location.href = '/pricing'}>
                      Getting Price
                    </button>
                  </div>

                  {/* 图片切换按钮 */}
                  <div className="absolute lg:right-0 lg:top-[142px] lg:transform lg:-translate-y-1/2 lg:flex-col lg:space-y-3 lg:mt-16 
                                               bottom-[-60px] left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:bottom-auto lg:left-auto 
                                               flex lg:flex-col flex-row space-x-3 lg:space-x-0 lg:space-y-3">
                    {[1, 2, 3, 4].map((index) => {
                      const productNames = ["NVIDIA GB200 NVL72", "NVIDIA HGX B200", "NVIDIA H200", "NVIDIA H100"];
                      return (
                        <div key={index} className="flex lg:flex-row flex-col items-center lg:space-x-3 space-x-0">
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
                            className={`w-[69px] h-[69px] lg:w-[69px] lg:h-[69px] w-[50px] h-[50px] rounded-3xl transition-all duration-200 relative overflow-hidden ${currentImageIndex === index - 1
                              ? 'border-[#76B900] shadow-lg border-2'
                              : 'border-gray-300 hover:border-gray-400'
                              }`}
                          >
                            <Image
                              src={`/test/button-${index}.png`}
                              alt={`View ${index}`}
                              width={30}
                              height={30}
                              className="w-full h-full object-contain rounded-lg"
                            />
                            {currentImageIndex !== index - 1 && (
                              <div className="absolute inset-0 bg-gray-100 bg-opacity-50 rounded-lg"></div>
                            )}
                          </button>
                          <span className={`text-xs font-medium transition-all duration-200 whitespace-nowrap lg:block hidden ${currentImageIndex === index - 1
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
          </SlideUp>

        </div>

        {/* Providing secure and efficient solutions for different use cases */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-[80px]">
              <SlideUp>
                <h2 className="text-4xl font-bold text-[#333333] mb-4">Providing secure and efficient solutions for <br /> different use cases</h2>
              </SlideUp>
            </div>

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
                            <ul className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 space-y-1">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Accelerate AI training with powerful computing power and low-latency networks.</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Applied in NLP, computer vision, recommendations, and autonomous driving.</span>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                      {/* Learn More按钮 - 绝对定位到左下角 */}
                      {showCardContent === 'card1' && (
                        <div className="absolute bottom-6 left-6">
                          <p className="text-sm cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded-full-full" onClick={() => window.location.href = '/model-training'}>
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
                            <ul className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 space-y-1">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Scalable and secure AI inference powered by high-performance virtual machines.</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Applied in real-time search, recommendations, speech, and vision applications.</span>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                      {/* Learn More按钮 - 绝对定位到左下角 */}
                      {showCardContent === 'card2' && (
                        <div className="absolute bottom-6 left-6">
                          <p className="text-sm cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded-full" onClick={() => window.location.href = '/inferences'}>
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
                            <ul className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 space-y-1">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>High-frame throughput and ultra-low latency with GPU and CPU-based rendering engines.</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Applied in gaming, simulation, virtual production, and design visualization.</span>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                      {/* Learn More按钮 - 绝对定位到左下角 */}
                      {showCardContent === 'card3' && (
                        <div className="absolute bottom-6 left-6">
                          <p className="text-sm cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded-full" onClick={() => window.location.href = '/rendering'}>
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
                            <ul className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 space-y-1">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Extensive deployment experience with fast delivery and full-stack software support.</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Applied in AI training, inference, rendering, and high-performance computing.</span>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                      {/* Learn More按钮 - 绝对定位到左下角 */}
                      {showCardContent === 'card4' && (
                        <div className="absolute bottom-6 left-6">
                          <p className="text-sm cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded-full" onClick={() => window.location.href = '/private-cloud'}>
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
                            <ul className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-top-2 space-y-1">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Provide comprehensive network hardware solutions, including Switches, NICs, Transceivers, etc.</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#ACE93B] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span>Serving enterprise, data center, and edge computing with reliable, scalable infrastructure.</span>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                      {/* Learn More按钮 - 绝对定位到左下角 */}
                      {showCardContent === 'card5' && (
                        <div className="absolute bottom-6 left-6">
                          <p className="text-sm cursor-pointer hover:text-[#80B224] transition-colors duration-300 bg-black bg-opacity-50 px-3 py-2 rounded-full" onClick={() => window.location.href = '/networking-hardware'}>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-8 min-h-[400px]">
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-[80px] text-[#333333] sm:w-[500px] lg:w-[600px]">Powered By Our Global Network</h2>
            </SlideUp>
            <SlideUp>
              <IwsLink href="/data-center/iceland" className="sm:hidden rounded-full w-full sm:w-auto px-6 py-3 bg-[#8CC63F] text-white hover:bg-[#7ab32f] transition-colors text-l">
                Explore Our Network
              </IwsLink>
            </SlideUp>
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
              <div className="w-full custom-1130:w-1/3 mt-10 sm:mt-0">
                <SlideUp>
                  <p className="text-gray-600 mb-20 text-l leading-relaxed max-w-[450px]">
                    Our data centers are powered by canopywave global, carrier-grade network — empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks.
                  </p>
                </SlideUp>
                <SlideUp>
                  <IwsLink href="/data-center/iceland" className="hidden sm:inline-flex rounded-full w-full sm:w-auto px-6 py-3 bg-[#8CC63F] text-white hover:bg-[#7ab32f] transition-colors text-l">
                    Explore Our Network
                  </IwsLink>
                </SlideUp>
              </div>
              <div className="w-full custom-1130:w-2/3">
                <SlideUp>
                  <EuropeMap />
                </SlideUp>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Canopy Wave Section */}
        <section className="sm:py-16">
          <SlideUp>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SlideUp>
                <div className="text-left mb-10">
                  <h2 className="text-4xl font-bold mb-[80px] text-[#333333]">Explore Canopy Wave</h2>
                </div>
              </SlideUp>


              {/* First Row - 2/3 and 1/3 layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 min-h-[320px]">
                {/* Events Card - 2/3 width */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden" style={{ backgroundImage: 'url(/test/Events.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="mb-4">
                    <span className="inline-block font-bold bg-[#C6E893] text-[#333333] text-xs px-2 py-1 rounded-full">Events</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#666666]">The Rise of Enterprise AI: Trends in Inferencing and GPU Resource Planning</h3>
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
                  <h3 className="text-lg font-bold mb-2 text-[#666666]">Joint Blog - Accelerate Enterprise AI</h3>
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
                  <h3 className="text-lg font-bold mb-2 text-[#666666]">Accelerating Protein Engineering with Canopy Wave's GPUaaS</h3>
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
                  <h3 className="text-lg font-bold mb-2 text-[#666666]">How to Run the GPT-OSS Locally on a Canopy Wave VM</h3>
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
                  <h3 className="text-lg font-bold mb-2 text-[#666666]">Canopy Wave GPU Cluster Hardware Product Portfolio</h3>
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
          </SlideUp>

        </section>

        {/* CTA Section */}
        <div className="py-36 sm:mt-16 relative overflow-hidden" style={{ backgroundImage: 'url(/test/accelerate.png)', backgroundSize: 'cover', backgroundPosition: 'contain', backgroundRepeat: 'no-repeat' }}>
          <div className="absolute inset-0"></div>
          <SlideUp>
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl font-bold text-[#333333] mb-10">
                Accelerate Your AI Journey today
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="font-bold text-lg rounded-full bg-[#76B900] text-white hover:bg-[#6ba000] px-6 py-3" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                  Launch Now
                </Button>
                {/* <Button className="rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3" onClick={() => window.open('https://chat.canopywave.io/c/new', '_blank')}>
                                Chat Now
                            </Button> */}
                <Button variant="outline" className="rounded-full font-bold text-[#333333] text-lg border-[#333333] bg-transparent hover:bg-transparent" onClick={() => window.open('https://chat.canopywave.io/c/new', '_blank')}>Chat Now</Button>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>

      <Footer />
    </main>
  )
}