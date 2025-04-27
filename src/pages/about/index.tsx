"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import PartnerCarousel from '@/components/carousel';

export default function AboutPage() {
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
    <main className="min-h-screen relative">
      <Header />
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-[#80B224]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold text-white mb-6">About CanopyWave</h1>
          <p className="text-white text-lg max-w-3xl mx-auto px-4">
            The AI Hyperscaler™ empowering the future.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#8CC63F] text-base font-semibold uppercase mb-6 block">About Us</span>
            <h2 className="text-5xl font-bold text-[#1A202C] mb-8">We are Canopy Wave</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Canopy Wave is dedicated to helping Enterprise optimize their AI workload budget, whether for development, fine-tuning, or inferencing. We own and operate thousands of H100/H200 GPUs, running with renewable energy with the cutting-edge management infrastructure to provide users high performance and reliable GPU resources.
            </p>
            <button className="bg-[#8CC63F] text-white px-10 py-4 text-lg rounded-lg hover:bg-[#80B224] transition-all duration-300">
              Contact us
            </button>
          </div>

          <div className="relative">
            <Image
              src="/dashboard.png"
              alt="Canopy Wave Dashboard"
              width={800}
              height={533}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-4xl font-bold text-center mb-6">WHAT WE DO</h2>
        <p className="text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          CanopyWave is a cloud purpose-built for scaling, supporting, and accelerating GenAI. We&apos;re a comprehensive platform and strategic partner designed to tackle today—and tomorrow&apos;s—challenges of deploying AI at scale.We manage the complexities of AI growth to make supercomputing accessible and push the limits of what&apos; possible. Our teams create modern solutions to support modern technology. Get the premier choice for working with GenAI workloads.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="w-16 h-16 mb-6 mx-auto">
              <Image
                src="/optimized.png"
                alt="What we do icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 group-hover:text-white">WHAT WE DO</h3>
            <p className="text-gray-600 text-center group-hover:text-white">
              CanopyWave is a cloud purpose-built for scaling, supporting, and accelerating GenAI. We&apos;re a comprehensive platform and strategic partner designed to tackle toda
            </p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="w-16 h-16 mb-6 mx-auto">
              <Image
                src="/optimized.png"
                alt="What we do icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 group-hover:text-white">WHAT WE DO</h3>
            <p className="text-gray-600 text-center group-hover:text-white">
              CanopyWave is a cloud purpose-built for scaling, supporting, and accelerating GenAI. We&apos;re a comprehensive platform and strategic partner designed to tackle toda
            </p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="w-16 h-16 mb-6 mx-auto">
              <Image
                src="/optimized.png"
                alt="What we do icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 group-hover:text-white">WHAT WE DO</h3>
            <p className="text-gray-600 text-center group-hover:text-white">
              CanopyWave is a cloud purpose-built for scaling, supporting, and accelerating GenAI. We&apos;re a comprehensive platform and strategic partner designed to tackle toda
            </p>
          </div>
        </div>
      </div>

      <PartnerCarousel logos={partnerLogos} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">OUR VALUES</h2>
            <p className="text-gray-600 mb-8">
              We believe in the power of people. As fast-movers and forward-thinkers, our values are the mantras behind why we do what we do.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-b border-gray-200">
              <button className="w-full py-4 flex items-center justify-between gap-6 hover:text-[#80B224] transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image src="/optimized.png" alt="Value icon" width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-semibold">Be curious at your core</h3>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="border-b border-gray-200">
              <button className="w-full py-4 flex items-center justify-between gap-6 hover:text-[#80B224] transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image src="/optimized.png" alt="Value icon" width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-semibold">Empower employees</h3>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="border-b border-gray-200">
              <button className="w-full py-4 flex items-center justify-between gap-6 hover:text-[#80B224] transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image src="/optimized.png" alt="Value icon" width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-semibold">Act Like An Owner</h3>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="border-b border-gray-200">
              <button className="w-full py-4 flex items-center justify-between gap-6 hover:text-[#80B224] transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image src="/optimized.png" alt="Value icon" width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-semibold">Deliver Best-in-Class Experiences</h3>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="border-b border-gray-200">
              <button className="w-full py-4 flex items-center justify-between gap-6 hover:text-[#80B224] transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image src="/optimized.png" alt="Value icon" width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-semibold">Achieve More Together</h3>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#F5F9F4] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold mb-10 sm:mb-12">Work With Us</h2>
          <p className="text-gray-600 mb-8">
            Ready to shape the future? Join CanopyWave and help drive the future of technology with a team redefining what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[#8CC63F] text-white px-8 py-3 rounded-lg hover:bg-[#80B224] transition-all duration-300">
              Get started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}