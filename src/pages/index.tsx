"use client";

import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Index() {
  const router = useRouter();
  const partnerLogos = [
    { id: 1, width: 100, height: 50 },
    { id: 2, width: 100, height: 45 },
    { id: 3, width: 100, height: 40 },
    { id: 4, width: 60, height: 45 },
    { id: 5, width: 60, height: 40 },
    { id: 6, width: 60, height: 45 },
    { id: 7, width: 60, height: 50 },
    { id: 8, width: 100, height: 40 },
    { id: 9, width: 100, height: 45 },
    { id: 10, width: 100, height: 45 },
    { id: 11, width: 100, height: 40 },
    { id: 12, width: 100, height: 45 },
    { id: 13, width: 100, height: 45 },
  ];
  return (
    <main className="dark:bg-slate-800">
      <Header />
      <div className="w-full">
        {/* Hero Section */}
        <div
          className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full bg-[#80B224]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center leading-tight">
              INSTANT GPU<br />
              CLUSTER FOR<br />
              ENTERPRISE AI
            </h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-around space-y-4 sm:space-y-0 sm:space-x-8 mt-8 px-4">
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl text-center sm:text-left">
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
        </div>



        {/* Features Section */}
        <div className="bg-white py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center sm:text-left">
              Instantly allocated GPU cluster with ready-to-go AI stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="p-6">
                <Image src="/optimized.png" alt="Optimized Stack" width={64} height={64} className="mb-4" />
                <h3 className="font-bold mb-2">OPTIMIZED STACK</h3>
                <p className="text-gray-600">Pre-qualified and optimized GPU and AI drivers</p>
              </div>
              <div className="p-6">
                <Image src="/optimized.png" alt="Optimized Stack" width={64} height={64} className="mb-4" />
                <h3 className="font-bold mb-2">DEDICATED RESOURCE</h3>
                <p className="text-gray-600">Fully secured resources with the flexibility to optimize your stacks and application</p>
              </div>
              <div className="p-6">
                <Image src="/optimized.png" alt="Optimized Stack" width={64} height={64} className="mb-4" />
                <h3 className="font-bold mb-2">HIGH PERFORMANCE</h3>
                <p className="text-gray-600">Optimized infrastructure to achieve highest performance of clusters of GPU</p>
              </div>
              <div className="p-6">
                <Image src="/optimized.png" alt="Optimized Stack" width={64} height={64} className="mb-4" />
                <h3 className="font-bold mb-2">PAY ONLY USED</h3>
                <p className="text-gray-600">Only pay for the GPU you use at the wholesale price. No wasted spending to test and integrate different versions of drivers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-gray-50 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {partnerLogos.map((logo) => (
                  <CarouselItem key={logo.id} className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/6">
                    <Image
                      src={`/brand/${logo.id}.svg`}
                      alt={`Partner ${logo.id}`}
                      width={logo.width}
                      height={logo.height}
                      className="mx-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center sm:text-left">
              NVIDIA H100 &H200S ARE NOW AVAILABLE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="border rounded-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <Image src="/optimized.png" alt="H100" width={48} height={48} />
                  <h3 className="font-bold ml-4">NVIDIA H100</h3>
                </div>
                <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <Link href="/h100" className="text-[#8CC63F] hover:text-[#7ab32f]">Learn More →</Link>
              </div>
              <div className="border rounded-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <Image src="/optimized.png" alt="H200" width={48} height={48} />
                  <h3 className="font-bold ml-4">NVIDIA H200S</h3>
                </div>
                <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <Link href="/h200" className="text-[#8CC63F] hover:text-[#7ab32f]">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Section */}
        <div className="bg-gray-50 py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">POWERED BY OUR GLOBAL NETWORK</h2>
                <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                  Our data centers are powered by canopywave global, carrier-grade network — empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks.
                </p>
                <Button
                  asChild
                  className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white"
                >
                  <Link href="/network">Get started →</Link>
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/World.svg"
                  alt="Global Network"
                  width={600}
                  height={300}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="bg-white py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-center sm:text-left">
              LATEST CANOPYWAVE NEWS/EVENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="border rounded-lg p-4">
                <Image src="/news1.png" alt="News 1" width={300} height={200} className="w-full mb-4" />
                <h3 className="font-bold mb-2">Instant GPU Cluster</h3>
                <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <div className="flex justify-between items-center">
                  <Link href="/news1" className="text-[#8CC63F]">Read →</Link>
                  <span className="text-gray-400">Dec 20, 2023</span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <Image src="/news1.png" alt="News 2" width={300} height={200} className="w-full mb-4" />
                <h3 className="font-bold mb-2">xxxxxx</h3>
                <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <div className="flex justify-between items-center">
                  <Link href="/news1" className="text-[#8CC63F]">Read →</Link>
                  <span className="text-gray-400">Dec 20, 2023</span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <Image src="/news1.png" alt="News 3" width={300} height={200} className="w-full mb-4" />
                <h3 className="font-bold mb-2">xxxxxx</h3>
                <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <div className="flex justify-between items-center">
                  <Link href="/news1" className="text-[#8CC63F]">Read →</Link>
                  <span className="text-gray-400">Dec 20, 2023</span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <Image src="/news1.png" alt="News 4" width={300} height={200} className="w-full mb-4" />
                <h3 className="font-bold mb-2">xxxxxx</h3>
                <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
                <div className="flex justify-between items-center">
                  <Link href="/news1" className="text-[#8CC63F]">Read →</Link>
                  <span className="text-gray-400">Dec 20, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">HAVE QUESTIONS? GET IN TOUCH!</h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-[#8CC63F] text-white rounded-md hover:bg-[#7ab32f] transition-colors"
              >
                Contact Sales
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Get Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
