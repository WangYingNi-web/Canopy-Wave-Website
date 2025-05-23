"use client";

import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'
import IwsLink from '@/components/IwsLink'
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"
import SlideUp from '@/components/slide';
import PartnerCarousel from '@/components/carousel';

export default function Index() {
  const router = useRouter();
  const partnerLogos = [
    { id: 1, width: 110, height: 80 },
    { id: 2, width: 90, height: 80 },
    { id: 3, width: 100, height: 80 },
    { id: 4, width: 100, height: 80 },
    { id: 5, width: 120, height: 80 },
    { id: 6, width: 120, height: 80 },
    { id: 7, width: 120, height: 80 },
    { id: 8, width: 90, height: 80 },
    { id: 9, width: 120, height: 80 },
    { id: 10, width: 90, height: 80 },
    { id: 11, width: 100, height: 80 },
    { id: 12, width: 100, height: 80 },
    { id: 13, width: 100, height: 80 },
  ];
  return (
    <main>
      <Header />
      <div className="w-full text-gray-600">
        {/* Hero Section */}
        <div className="w-full h-[450px] relative mt-[84px]">
          <Image
            src="/home_banner.svg"
            alt="Home_Banner"
            layout='fill'
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
              <SlideUp>
                <h1 className="text-6xl sm:text-7xl font-extrabold text-[#80B224] text-center text-shadow-lg">
                  Instant GPU <br /> Cluster for <br /> Enterprise AI
                </h1>
              </SlideUp>

            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-[#F9F9F9] py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <SlideUp>
              <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-center">
                Instantly allocated GPU cluster <br /> with ready-to-go AI stack
              </h2>
            </SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <Image src="/icon/optimized.svg" alt="Optimized Stack" width={34} height={34} className="mb-6 svg-gray" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">OPTIMIZED STACK</h3>
                <p className="text-gray-600 group-hover:text-white text-lg">Pre-qualified and optimized GPU and AI drivers</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <Image src="/icon/resource.svg" alt="Optimized Stack" width={34} height={34} className="mb-6 svg-gray" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">DEDICATED RESOURCE</h3>
                <p className="text-gray-600 group-hover:text-white text-lg">Fully secured resources with the flexibility to optimize your stacks and application</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <Image src="/icon/high.svg" alt="Optimized Stack" width={34} height={34} className="mb-6 svg-gray" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">HIGH PERFORMANCE</h3>
                <p className="text-gray-600 group-hover:text-white text-lg">Optimized infrastructure to achieve highest performance of clusters of GPU</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                <Image src="/icon/used.svg" alt="Optimized Stack" width={34} height={34} className="mb-6 svg-gray" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">PAY ONLY USED</h3>
                <p className="text-gray-600 group-hover:text-white text-lg">Only pay for the GPU you use at the wholesale price. No wasted spending to test and integrate different versions of drivers</p>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-center">
                NVIDIA H100 &H200S <br /> Are Now Available
              </h2>
            </SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <Image src="/icon/NvidiaH100.svg" alt="H100" width={34} height={34} className='svg-gray'/>
                  <h3 className="text-2xl font-bold ml-6">NVIDIA H100</h3>
                </div>
                <p className="text-gray-600 text-lg mb-6">H100 extends NVIDIA’s market-leading inference leadership with several advancements that accelerate inference by up to 30X and deliver the lowest latency</p>
                <IwsLink href="/compute-services#hgx-h100" className="text-[#8CC63F] hover:text-[#7ab32f] text-lg font-medium">Learn More →</IwsLink>
              </div>
              <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 rounded-lg p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <Image src="/icon/NvidiaH100.svg" alt="H100" width={34} height={34} className='svg-gray' />
                  <h3 className="text-2xl font-bold ml-6">NVIDIA H200S</h3>
                </div>
                <p className="text-gray-600 text-lg mb-6">The NVIDIA H200 GPU supercharges generative AI and high-performance computing (HPC) workloads with game-changing performance and memory capabilities</p>
                <IwsLink href="/compute-services#hgx-h200" className="text-[#8CC63F] hover:text-[#7ab32f] text-lg font-medium">Learn More →</IwsLink>
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Section */}
        <div className="bg-[#F9F9F9] py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <SlideUp>
                  <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 sm:mb-10">Powered By Our Global Network</h2>
                </SlideUp>
                <SlideUp>
                  <p className="text-gray-600 mb-8 text-lg sm:text-xl leading-relaxed">
                    Our data centers are powered by canopywave global, carrier-grade network — empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks
                  </p>
                </SlideUp>

                <SlideUp>
                  <IwsLink href="/data-center/iceland" className="w-full sm:w-auto px-6 py-3 bg-[#8CC63F] text-white rounded-md hover:bg-[#7ab32f] transition-colors text-l">
                    Get started →
                  </IwsLink>
                </SlideUp>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/World.svg"
                  alt="Global Network"
                  width={750}
                  height={480}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="bg-[#F9F9F9] py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <SlideUp>
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-12 text-left">
                Latest CanopyWave Blog: Insights and Updates <br /> from Our Team
              </h2>
            </SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* News Card 1 */}
              <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/blog.svg"
                    alt="Blog Image"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Joint Blog - Accelerate Enterprise AI</h4>
                  <p className="text-gray-600 text-sm mb-6">by James Liao, CTO of Canopy Wave, and Severi Tikkala, CTO of ConfidentialMind</p>
                  <div className="flex items-center gap-4">
                    <IwsLink href="/blog" className="px-3 py-1 bg-[#8CC63F] text-white text-sm rounded-full hover:bg-[#7ab32f] transition-colors">Article</IwsLink>
                    <span className="text-gray-500 text-sm">May 20, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F9F9F9] border border-gray-200 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-10 sm:mb-12">Have Questions? Get in Touch!</h2>
            <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <SlideUp>
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start w-full">
                  <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] px-6 py-6 text-base" onClick={() => router.push('/contact')}>Contact Us</Button>
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-base" onClick={() => router.push('/pricing')}>Get Pricing</Button>
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
