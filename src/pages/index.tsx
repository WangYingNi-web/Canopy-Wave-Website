"use client";

import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'
import IwsLink from '@/components/IwsLink'
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"
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
    <main className="dark:bg-slate-800">
      <Header />
      <div className="w-full">
        {/* Hero Section */}
        <div
          className="relative h-[400px] sm:h-[500px] md:h-[800px] w-full bg-[#80B224]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center leading-tight">
              INSTANT GPU<br />
              CLUSTER FOR<br />
              ENTERPRISE AI
            </h1>
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row items-center justify-around space-y-4 sm:space-y-0 sm:space-x-8 mt-8 px-4">
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl text-center sm:text-left pl-4">
            Develop and scale your AI training and inferencing with private GPU cloud
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Button
              onClick={() => router.push('/control-panel')}
              className="w-full sm:w-auto px-6 py-3 bg-[#8CC63F] hover:bg-[#7ab32f] text-base sm:text-lg"
            >
              Try Control Panel
            </Button>
            <Button
              onClick={() => router.push('/contact-sales')}
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 border-2 border-white text-black hover:bg-white/10 text-base sm:text-lg"
            >
              Contact Sales
            </Button>
          </div>
        </div> */}



        {/* Features Section */}
        <div className="bg-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-12 sm:mb-16 text-center sm:text-left">
              Instantly allocated GPU cluster <br /> with ready-to-go AI stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <div className="p-8 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-[#8CC63F] group">
                <Image src="/optimized.png" alt="Optimized Stack" width={80} height={80} className="mb-6" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">OPTIMIZED STACK</h3>
                <p className="text-gray-600 group-hover:text-white text-lg">Pre-qualified and optimized GPU and AI drivers</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-[#8CC63F] group">
                <Image src="/optimized.png" alt="Optimized Stack" width={80} height={80} className="mb-6" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">DEDICATED RESOURCE</h3>
                <p className="text-gray-600 group-hover:text-white text-lg">Fully secured resources with the flexibility to optimize your stacks and application</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-[#8CC63F] group">
                <Image src="/optimized.png" alt="Optimized Stack" width={80} height={80} className="mb-6" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">HIGH PERFORMANCE</h3>
                <p className="text-gray-600 group-hover:text-white text-lg">Optimized infrastructure to achieve highest performance of clusters of GPU</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-[#8CC63F] group">
                <Image src="/optimized.png" alt="Optimized Stack" width={80} height={80} className="mb-6" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">PAY ONLY USED</h3>
                <p className="text-gray-600 group-hover:text-white text-lg">Only pay for the GPU you use at the wholesale price. No wasted spending to test and integrate different versions of drivers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <PartnerCarousel logos={partnerLogos} />

        {/* Products Section */}
        <div className="bg-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center sm:text-left">
              NVIDIA H100 &H200S ARE NOW AVAILABLE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="border-2 rounded-lg p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <Image src="/optimized.png" alt="H100" width={80} height={80} />
                  <h3 className="text-2xl font-bold ml-6">NVIDIA H100</h3>
                </div>
                <p className="text-gray-600 text-lg mb-6">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <IwsLink href="/h100" className="text-[#8CC63F] hover:text-[#7ab32f] text-lg font-medium">Learn More →</IwsLink>
              </div>
              <div className="border-2 rounded-lg p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <Image src="/optimized.png" alt="H200" width={80} height={80} />
                  <h3 className="text-2xl font-bold ml-6">NVIDIA H200S</h3>
                </div>
                <p className="text-gray-600 text-lg mb-6">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <IwsLink href="/h200" className="text-[#8CC63F] hover:text-[#7ab32f] text-lg font-medium">Learn More →</IwsLink>
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Section */}
        <div className="bg-[#F5F9F4] py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-10">POWERED BY OUR GLOBAL NETWORK</h2>
                <p className="text-gray-600 mb-8 text-lg sm:text-xl leading-relaxed">
                  Our data centers are powered by canopywave global, carrier-grade network — empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks.
                </p>
                <Button
                  asChild
                  className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white text-lg sm:text-xl"
                >
                  <IwsLink href="/network">Get started →</IwsLink>
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/World.svg"
                  alt="Global Network"
                  width={700}
                  height={350}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="bg-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center sm:text-left">
              LATEST CANOPYWAVE NEWS/EVENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <div className="border-2 rounded-lg p-6 sm:p-8">
                <Image src="/news1.png" alt="News 1" width={350} height={250} className="w-full mb-6" />
                <h3 className="text-xl font-bold mb-4">Instant GPU Cluster</h3>
                <p className="text-gray-600 text-lg mb-6">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <div className="flex justify-between items-center">
                  <IwsLink href="/news1" className="text-[#8CC63F] text-lg">Read →</IwsLink>
                  <span className="text-gray-400 text-lg">Dec 20, 2023</span>
                </div>
              </div>
              <div className="border-2 rounded-lg p-6 sm:p-8">
                <Image src="/news1.png" alt="News 2" width={350} height={250} className="w-full mb-6" />
                <h3 className="text-xl font-bold mb-4">xxxxxx</h3>
                <p className="text-gray-600 text-lg mb-6">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <div className="flex justify-between items-center">
                  <IwsLink href="/news1" className="text-[#8CC63F] text-lg">Read →</IwsLink>
                  <span className="text-gray-400 text-lg">Dec 20, 2023</span>
                </div>
              </div>
              <div className="border-2 rounded-lg p-6 sm:p-8">
                <Image src="/news1.png" alt="News 3" width={350} height={250} className="w-full mb-6" />
                <h3 className="text-xl font-bold mb-4">xxxxxx</h3>
                <p className="text-gray-600 text-lg mb-6">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <div className="flex justify-between items-center">
                  <IwsLink href="/news1" className="text-[#8CC63F] text-lg">Read →</IwsLink>
                  <span className="text-gray-400 text-lg">Dec 20, 2023</span>
                </div>
              </div>
              <div className="border-2 rounded-lg p-6 sm:p-8">
                <Image src="/news1.png" alt="News 4" width={350} height={250} className="w-full mb-6" />
                <h3 className="text-xl font-bold mb-4">xxxxxx</h3>
                <p className="text-gray-600 text-lg mb-6">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <div className="flex justify-between items-center">
                  <IwsLink href="/news1" className="text-[#8CC63F] text-lg">Read →</IwsLink>
                  <span className="text-gray-400 text-lg">Dec 20, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F5F9F4] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-5xl font-bold mb-10 sm:mb-12">HAVE QUESTIONS? GET IN TOUCH!</h2>
            <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <IwsLink
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-[#8CC63F] text-white rounded-md hover:bg-[#7ab32f] transition-colors text-lg"
              >
                Contact Sales
              </IwsLink>
              <IwsLink
                href="/pricing"
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 text-lg"
              >
                Get Pricing
              </IwsLink>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
