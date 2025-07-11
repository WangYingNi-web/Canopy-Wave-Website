import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import IwsLink from '@/components/IwsLink';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function GB200NVL72Page() {
  return (
    <main className="min-h-screen text-gray-600 relative">
      <Header />
      <Head>
        <title>Canopy Wave | On-Demand NVIDIA GB200 NVL72</title>
        <meta name="description" content="Experience the power of NVIDIA GB200 NVL72 with Canopy Wave's on-demand GPU clusters. Advanced AI acceleration for next-generation computing." />
      </Head>
      {/* Hero Section */}
      <div className="w-full h-[550px] mt-[84px] bg-[#F5F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              On-Demand<br />
              NVIDIA GB200<br />
              NVL72
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the future of AI training and inference with our cutting-edge NVIDIA GB200 NVL72 clusters. Designed for maximum performance and efficiency in demanding AI workloads.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#8CC63F] text-sm hover:bg-[#7ab32f] text-white px-8 py-3">
                Get Started
              </Button>
              <Button className="bg-[#8CC63F] text-sm hover:bg-[#7ab32f] text-white px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src="/gb200-nvl72/nvidia-gb200-nvl72.webp"
              alt="NVIDIA GB200 NVL72 Cluster"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Canopy Wave On-Demand Flexibility */}
      <div className='bg-[#F5F7F4]'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">Canopy Wave On-Demand Flexibility</h2>
          </SlideUp>
          <SlideUp>
            <p className="text-gray-600 text-center max-w-4xl mx-auto mb-6 text-l">
              Access high-performance computing resources anytime through, anywhere with GB200's on-demand service. Scale GPU resources instantly to meet your workload requirements—no long-term commitments or upfront costs required
            </p>
          </SlideUp>
          <SlideUp>
            <div className="flex justify-center pb-8">
              <button className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm" onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}>
                Launch GPU Clusters
              </button>
            </div>
          </SlideUp>
          <SlideUp>
            <div className="bg-black rounded-lg p-8 mb-16">
              <Image
                src="/gb200-nvl72/gb200-nvl72.png"
                alt="NVIDIA GB200 NVL72 Cluster"
                width={1300}
                height={400}
                className="object-contain"
              />
            </div>
          </SlideUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flexible Resource Customization */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/storage/file.svg" alt="NVIDIA GPUs" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">Flexible Resource Customization</h3>
              <p className="text-gray-600 text-l">
                Dynamically adjust GPU configurations and scale from single-GPU to multi-GPU clusters based on your business needs
              </p>
            </div>

            {/* ​​24/7 Support​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/storage/multi.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-l">
                Per-minute billing with no upfront fees or long-term contracts, optimizing your computing costs
              </p>
            </div>

            {/* Visibility Platform​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/storage/harmony-icon.svg" alt="Private Cloud" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">Visibility Platform</h3>
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
              <Image src="/storage/file.svg" alt="NVIDIA GPUs" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">The Security of Private Cloud</h3>
              <p className="text-gray-600 text-l">
                Generate, add, delete or change your SSH or API keys. Set different security groups and how to work with your team
              </p>
            </div>

            {/* ​​24/7 Support​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/storage/multi.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4 svg-gray" />
              <h3 className="text-l font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-l">
                24/7 hours of continuous online duty, with zero time lag in demand response; Real-time interactive support, problem resolution without overnight delay
              </p>
            </div>

            {/* Visibility Platform​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/storage/harmony-icon.svg" alt="Private Cloud" width={36} height={36} className="mb-4 svg-gray" />
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
                  It has demonstrated outstanding performance support in large language model (LLM) inference, retrieval-enhanced generation (RAG), and data processing tasks
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* The Security of Private Cloud */}
            <div className="border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="text-4xl font-black text-[#8CC63F] mb-2">30x</div>
                <p className="text-gray-600">Faster LLM inference
                  <br />  VS
                  <br />  HGX H100 Tensor Core GPU</p>
              </div>
            </div>

            {/* ​​24/7 Support​ */}
            <div className="border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-[#8CC63F] mb-2">4x</div>
              <p className="text-gray-600">Faster LLM learning
                <br /> VS
                <br /> HGX H100</p>
            </div>

            {/* Visibility Platform​ */}
            <div className="border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-[#8CC63F] mb-2">25x</div>
              <p className="text-gray-600">More energy efficient
                <br /> VS
                <br /> HGX H100</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
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
            <div className="space-y-12">
              
              <div className="flex items-start gap-4 p-6 border-b-[1px] border-b-gray-200">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <Image src="/compute/model.svg" alt="Workloads" width={34} height={34} className="mt-1 svg-gray" />
                    <FadeIn>
                      <h3 className="text-l font-bold">Next-Level LLM Inference and Training</h3>
                    </FadeIn>
                  </div>
                  <FadeIn>
                    <ul className="text-gray-600 space-y-1 pl-[66px]">
                      <li style={{textIndent: '-14px'}}>• GB200 NVL72 uses a second-generation Transformer Engine with FP4/FP8 precision and fifth-gen NVLink.</li>
                      <li style={{textIndent: '-14px'}}>• Powered by next-gen Tensor Cores with microscaling formats for higher accuracy and throughput.</li>
                      <li style={{textIndent: '-14px'}}>• Enables 4x faster LLM training at scale.</li>
                    </ul>
                  </FadeIn>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 border-b-[1px] border-b-gray-200">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <Image src="/compute/model.svg" alt="Workloads" width={34} height={34} className="mt-1 svg-gray" />
                    <FadeIn>
                      <h3 className="text-l font-bold">Revolutionary Energy Efficiency</h3>
                    </FadeIn>
                  </div>
                  <FadeIn>
                    <ul className="text-gray-600 space-y-1 pl-[53px]">
                      <li>• FP4 quantization reduces inference energy to 4% of H100.</li>
                      <li>• Liquid cooling increases compute density and cuts power use.</li>
                      <li>• Delivers 25× performance at the same power budget.</li>
                    </ul>
                  </FadeIn>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 border-b-[1px] border-b-gray-200">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <Image src="/compute/model.svg" alt="Workloads" width={34} height={34} className="mt-1 svg-gray" />
                    <FadeIn>
                      <h3 className="text-l font-bold">Accelerated Data Processing</h3>
                    </FadeIn>
                  </div>
                  <FadeIn>
                    <ul className="text-gray-600 space-y-1 pl-[66px]">
                      <li style={{textIndent: '-14px'}}>• Blackwell architecture combines HBM, NVLink-C2C, and decompression engines.</li>
                      <li style={{textIndent: '-14px'}}>• Speeds up enterprise database queries by 18× compared to CPU.</li>
                      <li style={{textIndent: '-14px'}}>• Achieves 5x better total cost of ownership.</li>
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


