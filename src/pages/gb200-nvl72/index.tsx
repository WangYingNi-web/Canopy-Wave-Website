import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import { SlideFromLeft } from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function GB200NVL72Page() {
  // 数字动画函数
  const animateNumber = (elementId: string, targetNumber: number) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    let currentNumber = 0;
    const increment = targetNumber / 60; // 60帧动画
    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(timer);
      }
      element.textContent = `${Math.floor(currentNumber)}x`;
    }, 25);
  };

  useEffect(() => {
    // IntersectionObserver：进入视口再触发数字动画
    const targetSection = document.getElementById('performance-stats');

    if (targetSection) {
      const observer = new IntersectionObserver(
        (entries, observerSelf) => {
          if (entries[0].isIntersecting) {
            animateNumber("inference-count", 30);
            animateNumber("training-count", 4);
            animateNumber("efficiency-count", 25);
            observerSelf.disconnect(); // 只触发一次
          }
        },
        { threshold: 0.8 } // 区域 80% 出现在视口时触发
      );
      observer.observe(targetSection);

      // 清理函数
      return () => observer.disconnect();
    }
  }, []);

  return (
    <main className="min-h-screen text-gray-600 relative">
      <Header />
      <Head>
        <title>Canopy Wave | On-Demand NVIDIA GB200 NVL72</title>
        {/* <link rel="preload" href="/gb200-nvl72/nvidia-gb200-nvl72.webp" as="image" type="image/svg+xml" /> */}
        <meta name="description" content="Experience the power of NVIDIA GB200 NVL72 with Canopy Wave's on-demand GPU clusters. Advanced AI acceleration for next-generation computing." />
      </Head>
      {/* Hero Section */}
      <div className="w-full h-[790px] lg:h-[700px] mt-[84px] bg-gradient-to-r from-[#e7f8e2] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          <SlideFromLeft>
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-gray-600 mb-4 lg:mb-8">
                On-Demand<br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">NVIDIA GB200</span><br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">NVL72</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              No matter the task — AI training, data crunching, or heavy graphics — GB200 brings unmatched
              performance to your workflow
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button className="bg-[#8CC63F] text-xs sm:text-sm hover:bg-[#7ab32f] text-white px-4 py-2 sm:px-6 sm:py-3" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                  Launch Now
                </Button>
                <Button className="bg-[#8CC63F] text-xs sm:text-sm hover:bg-[#7ab32f] text-white px-4 py-2 sm:px-6 sm:py-3" onClick={() => window.location.href = '/contact'}>
                  Contact Us
                </Button>
              </div>
            </div>
          </SlideFromLeft>
          <div className="flex-1 flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
            <SlideUp>
              <div className="relative w-full max-w-md lg:max-w-none">
                <Image
                  src="/gb200-nvl72/nvidia-gb200-nvl72.webp"
                  alt="NVIDIA GB200 NVL72 Cluster"
                  width={500}
                  height={300}
                  style={{ width: '630px', height: 'auto' }}
                  className="object-contain w-full h-auto"
                />
              </div>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Canopy Wave On-Demand Flexibility */}
      <div className='bg-[#F5F7F4]'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-20 py-16">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">Canopy Wave On-Demand Flexibility</h2>
          </SlideUp>
          <SlideUp>
            <div className="flex justify-center pb-8">
              <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                Launch GPU Clusters
              </Button>
            </div>
          </SlideUp>
          <SlideUp>
            <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12 text-l">
              Access high-performance computing resources anytime through, anywhere with GB200's on-demand service. Scale GPU resources instantly to meet your workload requirements—no long-term commitments or upfront costs required
            </p>
          </SlideUp>
          <SlideUp>
            <div className="mb-16 group">
              <Image
                src="/gb200-nvl72/gb200-nvl72.png"
                alt="NVIDIA GB200 NVL72 Cluster"
                width={1300}
                height={400}
                className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </SlideUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flexible Resource Customization */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/about/curious.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">Flexible Resource Customization</h3>
              <p className="text-gray-600 text-l">
                Dynamically adjust GPU configurations and scale from single-GPU to multi-GPU clusters based on your business needs
              </p>
            </div>

            {/* Pay Only for at You Use​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/rendering/performance.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">Pay Only for at You Use</h3>
              <p className="text-gray-600 text-l">
                Per-minute billing with no upfront fees or long-term contracts, optimizing your computing costs
              </p>
            </div>

            {/* Rapid Deployment and Instant Launch​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/compute/accuracy.svg" alt="Private Cloud" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">Rapid Deployment and Instant Launch</h3>
              <p className="text-gray-600 text-l">
                Deploy environments quickly and launch instances within minutes, accelerating your AI training and inference workflows
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#F9F9F9]'>
        <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4" style={{ lineHeight: '1.3' }}>
              Why NVIDIA GB200 NVL72 on <br /> Canopy Wave GPU Clusters?
            </h2>
          </SlideUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* The Security of Private Cloud */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/networking/security.svg" alt="NVIDIA GPUs" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">The Security of Private Cloud</h3>
              <p className="text-gray-600 text-l">
                Generate, add, delete or change your SSH or API keys. Set different security groups and how to work with your team
              </p>
            </div>

            {/* ​​24/7 Support​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/compute/cloud.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-l">
                24/7 hours of continuous online duty, with zero time lag in demand response; Real-time interactive support, problem resolution without overnight delay
              </p>
            </div>

            {/* Visibility Platform​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/networking/qos.svg" alt="Private Cloud" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">Visibility Platform</h3>
              <p className="text-gray-600 text-l">
                The Canopy Wave DCIM Platform gives full visibility into your AI cluster—monitor resource use, system health, and uptime in real time via a central dashboard.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Aiming to Promote Next-Generation AI Acceleration */}
      <div className="bg-[#F5F7F4] sm:py-24 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SlideUp>
                <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ lineHeight: '1.3' }}>
                  Aiming to Promote <br /> Next-Generation <br /> AI Acceleration
                </h2>
              </SlideUp>
              <SlideUp>
                <p className="text-gray-600 mb-6 text-l">
                  It has demonstrated <Link href="https://www.nvidia.com/en-gb/data-center/gb200-nvl72/" className="text-[#80B224] hover:text-[#6b9a1f] underline">outstanding performance</Link> support in large language model (LLM) inference, retrieval-enhanced generation (RAG), and data processing tasks
                </p>
              </SlideUp>
            </div>
            <SlideUp>
              <div className="relative h-[430px] rounded-lg overflow-hidden">
                <Image
                  src="/gb200-nvl72/gb200-compute-tray.png"
                  alt="gb200-compute-tray"
                  fill
                  className="object-cover filter brightness-90"
                />
              </div>
            </SlideUp>
          </div>

          {/* Statistics Section */}
          <div id="performance-stats" className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* The Security of Private Cloud */}
            <div className="border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div id="inference-count" className="text-4xl font-black text-[#8CC63F] mb-2">0x</div>
                <p className="text-gray-600">Faster LLM inference
                  <br />  VS
                  <br />  HGX H100 Tensor Core GPU</p>
              </div>
            </div>

            {/* ​​24/7 Support​ */}
            <div className="border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div id="training-count" className="text-4xl font-black text-[#8CC63F] mb-2">0x</div>
              <p className="text-gray-600">Faster LLM learning
                <br /> VS
                <br /> HGX H100</p>
            </div>

            {/* Visibility Platform​ */}
            <div className="border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div id="efficiency-count" className="text-4xl font-black text-[#8CC63F] mb-2">0x</div>
              <p className="text-gray-600">More energy efficient
                <br /> VS
                <br /> HGX H100</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className='mt-6'>
              <SlideUp>
                <h2 className="text-3xl sm:text-4xl font-black mb-6">Powering the New Era of Computing</h2>
              </SlideUp>
              <SlideUp>
                <Button className="w-full sm:w-auto mb-12 bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                  Launch Now
                </Button>
              </SlideUp>
              <SlideUp>
                <div className="relative h-[360px] w-full">
                  <Image
                    src="/gb200-nvl72/grace-cpu-superchip.jpg"
                    alt="gb200-nvl72"
                    fill
                    className="w-full rounded-lg shadow-md"
                    priority
                  />
                </div>
              </SlideUp>
            </div>
            <div>
              <div className="flex items-start gap-4 p-6 border-b-[1px] border-b-gray-200">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <Image src="/compute/memory.svg" alt="Workloads" width={34} height={34} className="mt-1 svg-gray" />
                    <FadeIn>
                      <h3 className="font-bold text-[18px]">Next-Level LLM Inference and Training</h3>
                    </FadeIn>
                  </div>
                  <FadeIn>
                    <ul className="text-gray-600 space-y-1 pl-[66px]">
                      <li style={{ textIndent: '-14px' }}>• GB200 NVL72 uses a second-generation Transformer Engine with FP4/FP8 precision and fifth-gen NVLink</li>
                      <li style={{ textIndent: '-14px' }}>• Powered by next-gen Tensor Cores with microscaling formats for higher accuracy and throughput</li>
                      <li style={{ textIndent: '-14px' }}>• Enables 4x faster LLM training at scale</li>
                    </ul>
                  </FadeIn>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 border-b-[1px] border-b-gray-200">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <Image src="/compute/fast.svg" alt="Workloads" width={34} height={34} className="mt-1 svg-gray" />
                    <FadeIn>
                      <h3 className="font-bold text-[18px]">Revolutionary Energy Efficiency</h3>
                    </FadeIn>
                  </div>
                  <FadeIn>
                    <ul className="text-gray-600 space-y-1 pl-[53px]">
                      <li>• FP4 quantization reduces inference energy to 4% of H100</li>
                      <li>• Liquid cooling increases compute density and cuts power use</li>
                      <li>• Delivers 25× performance at the same power budget</li>
                    </ul>
                  </FadeIn>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 border-b-[1px] border-b-gray-200">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <Image src="/compute/model.svg" alt="Workloads" width={34} height={34} className="mt-1 svg-gray" />
                    <FadeIn>
                      <h3 className="font-bold text-[18px]">Accelerated Data Processing</h3>
                    </FadeIn>
                  </div>
                  <FadeIn>
                    <ul className="text-gray-600 space-y-1 pl-[66px]">
                      <li style={{ textIndent: '-14px' }}>• Blackwell architecture combines HBM, NVLink-C2C, and decompression engines</li>
                      <li style={{ textIndent: '-14px' }}>• Speeds up enterprise database queries by 18× compared to CPU</li>
                      <li style={{ textIndent: '-14px' }}>• Achieves 5x better total cost of ownership</li>
                    </ul>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Get Started Section */}
      <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-28 overflow-hidden">
        <BackgroundTransition
          defaultImage="/contact-section1.webp"  // 暗色版本
          activeImage="/contact-section2.webp"   // 亮色版本
          className="w-full h-full"
          fadeDuration={4000}  // 4秒的点亮过程
          threshold={0.7}  // 当70%进入视口时触发
        />
        <div className="relative z-30 container mx-auto px-4">
          <div className="relative max-w-7xl mx-auto">
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-600 mb-6">Ready to get started?</h2>
            </SlideUp>
            <SlideUp>
              <div className="text-gray-600 mb-8 mx-auto text-l flex flex-col">
                <span className="block sm:hidden">Create your Canopy Wave cloud account to launch GPU clusters immediately or contact us to reserve a long term contract</span>
                <span className="hidden sm:block">Create your Canopy Wave cloud account to launch GPU clusters immediately <br /> or contact us to reserve a long term contract</span>
              </div>
            </SlideUp>
            <SlideUp>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                  Launch GPU instances
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>
                  Contact Us
                </Button>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


