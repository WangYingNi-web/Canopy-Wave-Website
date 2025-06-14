"use client";

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

export default function Index() {
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
    { id: 10, width: 85, height: 70 },
    { id: 11, width: 90, height: 70 },
    { id: 12, width: 100, height: 80 },
    { id: 13, width: 90, height: 70 },
  ];
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true // 只触发一次
  });

  return (
    <main>
      <Head>
        <title>Canopy Wave - Instant GPU Cluster for Enterprise AI</title>
      </Head>
      <Header />
      <div className="w-full text-gray-600">
        {/* Hero Section */}
        <div className="w-full h-[490px] relative mt-[84px]">
          <Image
            src="/home_banner.svg"
            alt="Home_Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
              <SlideUp>
                <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-center text-shadow-lg">
                  Instant GPU <br /> Cluster for <br /> Enterprise AI
                </h1>
              </SlideUp>

            </div>
          </div>
        </div>

        {/* Features Section */}
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
                <p className="text-gray-600 group-hover:text-white text-l">Optimized infrastructure to achieve highest performance of clusters of GPU</p>
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
                NVIDIA H100 & H200 GPUs <br /> now available
              </h2>
            </SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <Image src="/icon/NvidiaH100.svg" alt="H100" width={34} height={34} className='svg-gray' />
                  <h3 className="text-l font-bold ml-6">NVIDIA H100</h3>
                </div>
                <p className="text-gray-600 text-l mb-6">H100 extends NVIDIA’s market-leading inference leadership with several advancements that accelerate inference by up to 30X and deliver the lowest latency</p>
                <IwsLink href="/compute-services#hgx-h100" className="text-[#8CC63F] hover:text-[#7ab32f] text-l font-medium">Learn More →</IwsLink>
              </div>
              <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 rounded-lg p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <Image src="/icon/NvidiaH100.svg" alt="H100" width={34} height={34} className='svg-gray' />
                  <h3 className="text-l font-bold ml-6">NVIDIA H200</h3>
                </div>
                <p className="text-gray-600 text-l mb-6">The NVIDIA H200 GPU supercharges generative AI and high-performance computing (HPC) workloads with game-changing performance and memory capabilities</p>
                <IwsLink href="/compute-services#hgx-h200" className="text-[#8CC63F] hover:text-[#7ab32f] text-l font-medium">Learn More →</IwsLink>
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Section */}
        <div className="bg-[#F9F9F9] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <SlideUp>
                  <h2 className="text-3xl sm:text-4xl font-black mb-8 sm:mb-10">Powered By Our Global Network</h2>
                </SlideUp>
                <SlideUp>
                  <p className="text-gray-600 mb-8 text-l leading-relaxed">
                    Our data centers are powered by Canopy Wave global, carrier-grade network — empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks
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
                {/* <SlideUp>
                  <Image
                    src="/World.svg"
                    alt="Global Network"
                    width={750}
                    height={480}
                    className="w-full"
                    priority
                  />
                </SlideUp> */}
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="bg-[#F9F9F9] py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-black mb-12 text-left">
                Latest CanopyWave Blog: Insights and Updates <br /> from Our Team
              </h2>
            </SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
              {/* News Card 1 */}
              <Link href="/blog/joint-blog-accelerate-enterprise-ai">
                <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/blog1.svg"
                      alt="Blog Image"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-l font-semibold mb-3">
                      Joint Blog - Accelerate Enterprise AI
                    </h4>
                    <p className="text-gray-600 text-sm mb-6">by James Liao, CTO of Canopy Wave, and Severi Tikkala, CTO of ConfidentialMind</p>
                    <br />
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-[#8CC63F] text-white text-sm rounded-full">Article</span>
                      <span className="text-gray-500 text-sm">April 16, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* News Card 2 */}
              <Link href="/blog/the-rise-of-enterprise-ai:-trends-in-inferencing-and-gpu-resource-planning">
                <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/blog2.png"
                      alt="Blog Image"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-l font-semibold mb-3">
                      The Rise of Enterprise AI: Trends in Inferencing and GPU Resource Planning
                    </h4>
                    <p className="text-gray-600 text-sm mb-6">AI Agent Summit Keynote by James Liao @Canopy Wave</p>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-[#8CC63F] text-white text-sm rounded-full">Article</span>
                      <span className="text-gray-500 text-sm">May 15, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32 overflow-hidden">
          <BackgroundTransition
            defaultImage="/contact-section1.webp"  // 灰色图片
            activeImage="/contact-section2.webp"   // 绿色图片
            className="w-full h-full absolute inset-0"
            fadeDuration={3000} // 3秒淡入淡出
            scaleDuration={2500} // 2.5秒缩放
            initialScale={0.92}  // 初始缩放更小
          />
          {/* 内容容器 - 确保在图片上方显示 */}
          <div className="relative z-10 container mx-auto px-4">
            {/* 您的内容在这里 */}
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black mb-10 sm:mb-12">Have Questions? Get in Touch!</h2>
            <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <SlideUp>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="bg-[#8CC63F] text-sm hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={() => window.location.href = '/pricing'}
                    className="bg-white text-sm hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md border border-gray-200"
                  >
                    Get Pricing
                  </button>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
