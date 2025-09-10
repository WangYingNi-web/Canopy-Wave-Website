"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import PartnerCarousel from '@/components/carousel';
import BackgroundTransition from '@/components/BackgroundTransition';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import IwsLink from '@/components/IwsLink'

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [activeService, setActiveService] = useState('compute');
  const [isMobile, setIsMobile] = useState(false);
  const [showCardContent, setShowCardContent] = useState<string | null>('card1');
  const [enterTimer, setEnterTimer] = useState<NodeJS.Timeout | null>(null);
  const [lastHoveredCard, setLastHoveredCard] = useState<string>('card1');

  // 新闻卡片数据
  const newsCards = [
    {
      id: 1,
      href: "/blog/how-to-choose-the-right-storage-for-your-ai-workflows",
      image: "/blog/workflows2.webp",
      title: "How to Choose the Right Storage for Your AI Workflows",
      description: "Choosing the Right Storage Architecture for AI",
      tag: 'Article',
      date: "July 25, 2025"
    },
    {
      id: 2,
      href: "/blog/canopy-wave-launches-next-gen-gpu-cluster-with-nvidia-gb200-nvl72",
      image: "/blog/blog2.webp",
      title: "Canopy Wave Launches Next-Gen GPU Cluster with NVIDIA GB200 NVL72",
      description: "Revolutionizing AI Infrastructure with Cutting-Edge Technology",
      tag: 'Article',
      date: "July 14, 2025"
    },
    {
      id: 3,
      href: "/events/canopy-confidentialmind-partnership",
      image: "/confidentialmind-logo.png",
      title: "Canopy Wave and ConfidentialMind Join Forces to Accelerate Enterprise AI Adoption",
      description: "by James Liao @Canopy Wave",
      tag: 'Events',
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
      setLastHoveredCard(cardId);
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


  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
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
    { id: 14, width: 80, height: 70 },
    { id: 15, width: 80, height: 70 },
    { id: 16, width: 80, height: 70 },
  ];
  const [currentNewsIndex, setCurrentNewsIndex] = useState(30); // 设置为扩展数组的中间位置
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    { id: 'compute', image: '/about/Link-1.png', title: 'Compute Services', description: 'Canopy Wave uses Virtualization technology to provide world-leading performance GPU for AI training & inference', link: '/compute-services' },
    { id: 'storage', image: '/about/Link-2.png', title: 'Storage Services', description: 'High-performance storage solutions designed for demanding workloads and data-intensive applications', link: '/storage-services' },
    { id: 'networking', image: '/about/Link-3.png', title: 'Networking Services', description: 'Advanced networking infrastructure to connect and optimize your distributed computing resources', link: '/networking-services' },
    { id: 'platform', image: '/about/Link-4.png', title: 'Cloud Platform', description: 'Comprehensive platform solutions for managing and orchestrating your entire infrastructure', link: '/platform' }
  ];
  // 修改自动轮播的useEffect（约第175-201行）
  useEffect(() => {
    if (!isCarouselVisible) return; // 如果轮播图不可见，不启动自动轮播

    const services = [
      { id: 'compute', image: '/about/Link-1.png', title: 'Compute Services', description: 'Canopy Wave uses Virtualization technology to provide world-leading performance GPU for AI training & inference', link: '/compute-services' },
      { id: 'storage', image: '/about/Link-2.png', title: 'Storage Services', description: 'Flexible storage architecture for any AI or enterprise workload', link: '/storage-services' },
      { id: 'networking', image: '/about/Link-3.png', title: 'Networking Services', description: 'Get the best RDMA Networking purposely built for AI', link: '/networking-services' },
      { id: 'platform', image: '/about/Link-4.png', title: 'Platform', description: 'Unlock higher performance and usage out of your clusters for faster time to market', link: '/platform' }
    ];

    const interval = setInterval(() => {
      setActiveService(prevService => {
        const currentIndex = services.findIndex(s => s.id === prevService);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].id;
      });
    }, 5000); // 5秒间隔

    return () => clearInterval(interval);
  }, [isCarouselVisible, activeService]); // 添加activeService作为依赖项

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  

  // 新增：监听Services Carousel是否进入视口
  useEffect(() => {
    const carouselElement = document.getElementById('services-carousel');
    if (!carouselElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsCarouselVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // 当30%的元素进入视口时触发
        rootMargin: '0px 0px -100px 0px' // 提前100px触发
      }
    );

    observer.observe(carouselElement);

    return () => {
      observer.unobserve(carouselElement);
    };
  }, []);

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
  return (
    <main className="min-h-screen relative text-gray-600">
      <Head>
        <title>Canopy Wave - About Us</title>
        <link rel="preload" href="/about/banner.svg" as="image" type="image/svg+xml" />
      </Head>
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[570px] relative mt-[84px] bg-[#F9F9F9]">
        <Image
          src="/about/banner.svg"
          alt="banner"
          fill
          className="object-cover -mt-12"
          priority
        />
        <div className="absolute inset-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
            <SlideUp>
              <h1 className="text-4xl text-center sm:text-[54px] font-black text-[#80B224] text-shadow-lg">
                Powering the Next Wave of AI
              </h1>
            </SlideUp>
            <SlideUp>
              <p className="text-gray-600 text-center text-l mt-8 block sm:hidden">
                Instant On-demand GPU Cluster for Enterprise AI
              </p>
              <p className="text-gray-600 text-center text-l mt-8 hidden sm:block">
                Instant On-demand GPU Cluster for Enterprise AI
              </p>
            </SlideUp>

          </div>
        </div>
      </div>

      {/* who we are Section */}
      <div className="bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl text-gray-600 font-black text-center mb-6">Who We Are</h2>
          </SlideUp>
          <SlideUp>
            <p className="text-gray-600 text-center mb-10 max-w-4xl mx-auto">
              Canopy Wave Inc., founded in 2024, headquartered in Santa Clara, California, is a technology company specializing in building, managing, and operating high-performance Nvidia GPU clusters.

              <br /> We provide a stable, efficient, and scalable computing infrastructure essential for the AI era
            </p>
          </SlideUp>
          <SlideUp>
            <div className="mb-16 group">
              <Image
                src="/about/who.png"
                alt="NVIDIA GB200 NVL72 Cluster"
                width={1300}
                height={400}
                className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </SlideUp>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="bg-[#F9F9F9] py-12 sm:pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 text-gray-600">
              Our Core Values
            </h2>
          </SlideUp>

          <div className="flex gap-6 flex-col md:flex-row">
            {/* Card 1 - Pursue Efficiency */}
            <div
              className="transform"
              style={{
                width: isMobile ? '100%' : (hoveredCard === 'card1' ? '54%' : '25%'),
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
                          Pursue Efficiency Through Open and Clear Communication
                        </h3>
                      </>
                    )}
                    {/* 只有当showCardContent === 'card1'时才显示内容 */}
                    {showCardContent === 'card1' && (
                      <>
                        <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                          Pursue Efficiency Through Open and Clear Communication
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                            We encourage candid expression, quick alignment, and transparent collaboration to ensure every conversation drives progress
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
                            We value all qualities that enhance efficiency, with open and clear communication being the most important. For example, we want those who can not only propose ideas but also articulate them clearly and drive them to implementation.
                          </p>
                          <p>
                            Focus, excellence, experimentation, and rapid execution all rely on effective communication.
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
                width: isMobile ? '100%' : (hoveredCard === 'card2' ? '54%' : '25%'),
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
                          Earn Respect with an Ownership Mindset
                        </h3>
                      </>
                    )}


                    {showCardContent === 'card2' && (
                      <>
                        <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                          Earn Respect with an Ownership Mindset
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                            We value respect, and we expect every employee to earn it through proactive action
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
                            Here, respect is not granted by title—it's earned through action. We have the highest regard for those who roll up their sleeves, dare to experiment, and are willing to be accountable.
                          </p>
                          <p>
                            Taking on a task also means guiding the team to assess risks, make decisions, and solve problems. Even failure is more respectable than inaction.
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
                width: isMobile ? '100%' : (hoveredCard === 'card3' ? '54%' : '25%'),
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
                          Earn Respect with an Ownership Mindset
                        </h3>
                      </>
                    )}
                    {showCardContent === 'card3' && (
                      <>
                        <h3 className="text-xl text-white font-bold mb-3 leading-tight transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                          Demonstrate Contribution with Measurable Results
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm opacity-90 mb-2 flex-1 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
                            We value employees' contributions—their actual output and impact on the company
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
                            While we understand the importance of "inputs" like learning, thinking, meetings, and brainstorming, these processes only generate real value when they are translated into "outputs"—concrete actions like documents, proposals, and execution plans.
                          </p>
                          <p>
                            We want all hard work to be channeled into recognizable achievements. Taking accountability, whether for a success or a failure, is in itself a measurable result and a valued contribution.
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

      {/* What we do */}
      <div className="bg-[#F9F9F9] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="w-full md:w-1/2">
              <div>
                <SlideUp>
                  <Image
                    src="/platform/cloud-platform.png"
                    alt="DCIM Dashboard"
                    width={600}
                    height={300}
                    className="w-full h-auto"
                  />
                </SlideUp>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <SlideUp>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 text-gray-600">
                  What We Do
                </h2>
              </SlideUp>
              <SlideUp>
                <p className="text-l text-gray-600 mb-6 leading-relaxed">
                  At Canopy Wave Inc., we engineer high-performance Nvidia GPU clusters to power the most demanding applications—from AI model training and inference to high-fidelity rendering and private cloud deployments
                </p>
              </SlideUp>
              <SlideUp>
                <p className="text-l text-gray-600 leading-relaxed">
                  We understand that success in the AI era depends on accessible, scalable compute power. That's why we've developed a premier suite of GPU solutions designed to help organizations rapidly deploy, flexibly manage, and unlock the full potential of their computing resources
                </p>
              </SlideUp>

            </div>
          </div>
        </div>
      </div>

      <div>
        <PartnerCarousel logos={partnerLogos} />
      </div>

      {/* Services Carousel */}
      <div id="services-carousel" className="bg-[#F9F9F9] py-12 sm:py-16">
        <div className="max-w-8xl mx-auto">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 text-gray-600">
              Products
            </h2>
          </SlideUp>

          <div className="relative">
            {/* Service Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                {[
                  { id: 'compute', label: 'Compute Services' },
                  { id: 'storage', label: 'Storage Services' },
                  { id: 'networking', label: 'Networking Services' },
                  { id: 'platform', label: 'Cloud Platform' }
                ].map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeService === service.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative bg-white  w-full max-w-[1500px] mx-auto h-[400px] md:h-[500px] overflow-hidden">
              {/* 轮播图容器 */}
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{
                  transform: isMobile
                    ? `translateX(calc(-${services.findIndex(s => s.id === activeService) + 1} * 100vw - 2vw))`
                    : `translateX(calc(-${services.findIndex(s => s.id === activeService) + 1} * 920px + 275px))`,
                }}
              >
                {/* 渲染所有图片，包括前后的重复图片以实现无缝循环 */}
                {[
                  // 前置最后一张图片
                  services[services.length - 1],
                  // 所有原始图片
                  ...services,
                  // 后置第一张图片
                  services[0]
                ].map((service, index) => {
                  const currentIndex = services.findIndex(s => s.id === activeService);
                  const isCurrentSlide = index === currentIndex + 1; // +1 因为前面有一张前置图片

                  return (
                    <div
                      key={`${service.id}-${index}`}
                      className="flex-shrink-0 h-full relative cursor-pointer group"
                      style={{
                        width: isMobile ? '100vw' : '920px'
                      }}
                      onClick={() => setActiveService(service.id)}
                    >
                      {/* 卡片容器 - 添加左右间距 */}
                      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl bg-white mx-1 md:mx-4"
                        style={{
                          width: isMobile ? 'calc(100vw - 15px)' : 'calc(920px - 15px)',
                          // marginLeft: '10px',
                          // marginRight: '10px'
                        }}
                      >
                        {/* 背景图片 */}
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
                          style={{
                            backgroundImage: `url(${service.image})`,
                            // marginLeft:'10px',
                          }}
                        >
                          {/* 渐变遮罩 - 只在当前激活的图片上显示 */}
                          {isCurrentSlide && (
                            // <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                            <div className="absolute inset-0"></div>
                          )}
                          {/* 非激活图片的半透明遮罩 */}
                          {!isCurrentSlide && (
                            <div className="absolute inset-0 bg-black/30"></div>
                          )}
                        </div>

                        {/* 内容区域 - 只在当前激活的图片上显示 */}
                        {isCurrentSlide && (
                          <div className="relative z-10 h-full flex flex-col justify-center p-4 md:p-8">
                            <div className="text-white max-w-lg">
                              {/* 标题 */}
                              <div className="mb-4 md:mb-6">
                                <h3 className="text-xl md:text-3xl font-bold mb-2">{service.title}</h3>
                              </div>

                              {/* 描述 */}
                              <div className="mb-8 md:mb-12">
                                <p className="text-xs md:text-sm leading-relaxed opacity-95">
                                  {service.description}
                                </p>
                              </div>

                              {/* 按钮 */}
                              <div>
                                <Link href={service.link}>
                                  <button className="text-xs md:text-sm inline-flex items-center px-4 py-2 md:px-6 md:py-3 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                                    <span>Learn more</span>
                                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 左右切换按钮 */}
              <button
                onClick={() => {
                  const services = ['compute', 'storage', 'networking', 'platform'];
                  const currentIndex = services.indexOf(activeService);
                  const prevIndex = (currentIndex - 1 + services.length) % services.length;
                  setActiveService(services[prevIndex]);
                }}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 z-20 group"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-800 group-hover:text-[#80B224]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const services = ['compute', 'storage', 'networking', 'platform'];
                  const currentIndex = services.indexOf(activeService);
                  const nextIndex = (currentIndex + 1) % services.length;
                  setActiveService(services[nextIndex]);
                }}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 z-20 group"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-800 group-hover:text-[#80B224]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* 底部指示器 */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
                {[
                  { id: 'compute', image: '/about/Link-1.png', title: 'Compute Services', description: 'Canopy Wave uses Virtualization technology to provide world-leading performance GPU for AI training & inferenc' },
                  { id: 'storage', image: '/about/Link-2.png', title: 'Storage Services', description: 'Flexible storage architecture for any AI or enterprise workload' },
                  { id: 'networking', image: '/about/Link-3.png', title: 'Networking Services', description: 'Get the best RDMA Networking purposely built for AI' },
                  { id: 'platform', image: '/about/Link-4.png', title: 'Clou d', description: 'Unlock higher performance and usage out of your clusters for faster time to market' }
                ].map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${activeService === service.id
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Strengths Section */}
      <div className="bg-[#F9F9F9] py-12 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl font-black text-center text-gray-600 mb-16">
              Our Core Strengths
            </h2>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Professional Team */}
            <FadeIn>
              <div className="text-center bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 h-[370px]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                  <Image
                    src="/about/team.svg"
                    alt="Professional Team"
                    width={54}
                    height={54}

                  />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Professional Team
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Composed of experts in Nvidia GPU, RoCE/IB network, system architecture, and AI engineering, the team has rich experience in large-scale cluster deployment and operation and maintenance
                </p>
              </div>
            </FadeIn>

            {/* Advanced Architecture */}
            <FadeIn>
              <div className="text-center bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 h-[370px]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                  <Image
                    src="/about/architecture.svg"
                    alt="Advanced Architecture"
                    width={54}
                    height={54}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Advanced Architecture
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Adopting the industry's most cutting-edge cluster architecture concepts, it supports a variety of mainstream AI frameworks and can easily cope with the highly concurrent demands of model training and inference
                </p>
              </div>
            </FadeIn>

            {/* Intelligent System */}
            <FadeIn>
              <div className="text-center bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 h-[370px]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                  <Image
                    src="/about/system.svg"
                    alt="Intelligent System"
                    width={54}
                    height={54}
                    className="text-yellow-600"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Intelligent System
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The self-developed GPU cluster management platform provides real-time monitoring, hardware health warning, resource optimization and other functions to ensure that the cluster always maintains the best performance and stability
                </p>
              </div>
            </FadeIn>

            {/* Technical Support */}
            <FadeIn>
              <div className="text-center bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 h-[370px]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                  <Image
                    src="/about/support.svg"
                    alt="Technical Support"
                    width={54}
                    height={54}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Technical Support
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  7*24*365 technical support and operational response to ensure stable cluster operation
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>


      {/* News Section */}
      <div className="bg-[#F9F9F9] py-12 sm:pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SlideUp>
            <div className='flex items-center justify-between mb-12'>
              <h2 className="text-3xl sm:text-4xl font-black text-left">
                News
              </h2>
              {/* See All Link */}
              <IwsLink href="/about/newsroom" className="text-gray-600 hover:text-[#8CC63F] inline-flex items-center">
                <span className="flex items-center">
                  All our news
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
                      <div className="h-[350px] group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col">
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
                        <div className="h-[130px] p-6 flex flex-col flex-grow">
                          <h4 className="text-sm font-semibold mb-3 line-clamp-2">
                            {card.title}
                          </h4>
                          {/* <p className="text-gray-600 text-sm mb-6 line-clamp-2">{card.description}</p> */}
                          <div className="flex flex-wrap items-center gap-4 mt-auto">
                            <span className="px-3 py-1 bg-[#8CC63F] text-white text-sm rounded-full">{card.tag}</span>
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
      <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-28 overflow-hidden">
        {/* <BackgroundTransition
          defaultImage="/contact-section1.webp"
          activeImage="/contact-section2.webp"
          className="w-full h-full"
        /> */}
        <div className="relative z-30 container mx-auto px-4">
          <div className="relative max-w-7xl mx-auto">
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-black mb-10 sm:mb-8">Work with us</h2>
            </SlideUp>
            <SlideUp>
              <div className="text-gray-600 mb-8 mx-auto text-l flex flex-col">
                <span className="block sm:hidden">Ready to shape the future? Join Canopy Wave and help drive the future of technology with a team redefining what's possible</span>
                <span className="hidden sm:block">Ready to shape the future? Join Canopy Wave and help drive the future of technology <br /> with a team redefining what's possible</span>
              </div>
            </SlideUp>
            <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <IwsLink
                href="/about/careers"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-[#8CC63F] hover:bg-[#80B224] text-white hover:text-white px-6 h-10 py-2"
              >
                Careers
              </IwsLink>

              <IwsLink
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 max-1207:text-xs"
              >
                Contact Us
              </IwsLink>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}