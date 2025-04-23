"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/router';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function HomePage() {
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
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-[600px] w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/background.png")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white text-center leading-tight">
            INSTANT GPU<br />
            CLUSTER FOR<br />
            ENTERPRISE AI
          </h1>
        </div>
      </div>


      <div className="flex items-center justify-around space-x-8 mt-8">
        <p className="text-xl text-gray-600 max-w-2xl">
          Develop and scale your AI training and inferencing with private GPU cloud
        </p>
        <div className="flex space-x-4">
          <Button
            onClick={() => router.push('/control-panel')}
            className="px-6 py-3 bg-[#8CC63F] hover:bg-[#7ab32f]"
          >
            Try Control Panel
          </Button>
          <Button
            onClick={() => router.push('/contact-sales')}
            variant="outline"
            className="px-6 py-3 border-2 border-white text-black hover:bg-white/10"
          >
            Contact Sales
          </Button>
        </div>
      </div>


      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-12">Instantly allocated GPU cluster with ready-to-go AI stack</h2>
          <div className="grid grid-cols-4 gap-8">
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
      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-8">
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
                <CarouselItem key={logo.id} className="pl-1 md:basis-1/6">
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
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-12">NVIDIA H100 &H200S ARE NOW AVAILABLE</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Image src="/optimized.png" alt="H100" width={48} height={48} />
                <h3 className="font-bold ml-4">NVIDIA H100</h3>
              </div>
              <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
              <Link href="/h100" className="text-[#8CC63F] hover:text-[#7ab32f]">Learn More →</Link>
            </div>
            <div className="border rounded-lg p-6">
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
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-12">
            <div className="w-1/2">
              <h2 className="text-4xl font-bold mb-6">POWERED BY OUR GLOBAL NETWORK</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our data centers are powered by canopywave global, carrier-grade network — empowering you to reach millions of users around the globe faster than ever before, with the security and reliability only found in proprietary networks.
              </p>
              <Button
                asChild
                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white"
              >
                <Link href="/network">Get started →</Link>
              </Button>
            </div>
            <div className="w-1/2">
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
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6">LATEST CANOPYWAVE NEWS/EVENTS</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="border rounded-lg p-4">
              <Image src="/news1.png" alt="News 1" width={300} height={200} className="mb-4" />
              <h3 className="font-bold mb-2">Instant GPU Cluster</h3>
              <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
              <div className="flex justify-between items-center">
                <Link href="/news1" className="text-[#8CC63F]">Read →</Link>
                <span className="text-gray-400">Dec 20, 2023</span>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <Image src="/news1.png" alt="News 2" width={300} height={200} className="mb-4" />
              <h3 className="font-bold mb-2">xxxxxx</h3>
              <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
              <div className="flex justify-between items-center">
                <Link href="/news1" className="text-[#8CC63F]">Read →</Link>
                <span className="text-gray-400">Dec 20, 2023</span>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <Image src="/news1.png" alt="News 3" width={300} height={200} className="mb-4" />
              <h3 className="font-bold mb-2">xxxxxx</h3>
              <p className="text-gray-600 mb-4">内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充</p>
              <div className="flex justify-between items-center">
                <Link href="/news1" className="text-[#8CC63F]">Read →</Link>
                <span className="text-gray-400">Dec 20, 2023</span>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <Image src="/news1.png" alt="News 4" width={300} height={200} className="mb-4" />
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
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">HAVE QUESTIONS? GET IN TOUCH!</h2>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#8CC63F] text-white rounded-md hover:bg-[#7ab32f] transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Get Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
