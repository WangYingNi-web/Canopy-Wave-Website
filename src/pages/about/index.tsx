"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import PartnerCarousel from '@/components/carousel';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function AboutPage() {
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
    <main className="min-h-screen relative text-gray-600">
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[490px] relative mt-[84px]">
        <Image
          src="/about/banner.svg"
          alt="banner"
          layout='fill'
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
            <SlideUp>
              <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-center">
                About Us
              </h1>
            </SlideUp>
            <SlideUp>
              <p className="text-gray-600 text-l mt-8 text-center">
                The AI Hyperscaler™ empowering the future
              </p>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#8CC63F] text-base font-semibold uppercase mb-6 block">About Us</span>
            <h2 className="text-5xl font-bold text-[#1A202C] mb-8">We are Canopy Wave</h2>
            <p className="text-gray-600 mb-10 text-l leading-relaxed">
              Canopy Wave is dedicated to helping Enterprise optimize their AI workload budget, whether for development, fine-tuning, or inferencing. We own and operate thousands of H100/H200 GPUs, running with renewable energy with the cutting-edge management infrastructure to provide users high performance and reliable GPU resources.
            </p>
            <button className="bg-[#8CC63F] text-white px-8 py-3 text-base rounded-lg hover:bg-[#80B224] transition-all duration-300">
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
      </div> */}
      <div className="bg-[#F5F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl text-gray-600 font-black text-center mb-6">What we do</h2>
          </SlideUp>
          <SlideUp>
            <p className="text-gray-600 text-center mb-16 max-w-4xl mx-auto">
              Canopy Wave is a cloud purpose-built for scaling, supporting, and accelerating GenAI.
              We&apos;re a comprehensive platform and strategic partner designed to tackle Today – and tomorrow's - challenges of deploying AI at scale.We manage the complexities of AI growth to make supercomputing accessible and push the limits of what&apos; possible. Our teams create modern solutions to support modern technology. Get the premier choice for working with GenAI workloads
            </p>
          </SlideUp>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex justify-center items-center">
                <Image
                  src="/about/straightforward.svg"
                  alt="What we do icon"
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="text-l font-semibold text-center mb-4 group-hover:text-white">Straightforward</h3>
              <p className="text-gray-600 text-center group-hover:text-white">
                We handle the complexity so customers can spend less time managing their infrastructure
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex justify-center items-center">
                <Image
                  src="/about/adaptable.svg"
                  alt="What we do icon"
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="text-l font-semibold text-center mb-4 group-hover:text-white">Adaptable</h3>
              <p className="text-gray-600 text-center group-hover:text-white">
                Products that are powerful and opinionated by default, but flexible under the hood
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
              <div className="w-16 h-16 mx-auto flex justify-center items-center">
                <Image
                  src="/about/global.svg"
                  alt="What we do icon"
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="text-l font-semibold text-center mb-4 group-hover:text-white">Global</h3>
              <p className="text-gray-600 text-center group-hover:text-white">
                Servers are located all over the world, as close to users as possible
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className='bg-[#F9F9F9]'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className='pt-4'>
              <SlideUp>
                <h2 className="text-3xl sm:text-4xl font-black mb-6">Our Values</h2>
              </SlideUp>
              <SlideUp>
                <p className="text-gray-600 mb-8">
                  We believe in the power of people. As fast-movers and forward-thinkers, our values are the mantras behind why we do what we do
                </p>
              </SlideUp>
            </div>
            <div className="space-y-4">
              <div className="border-b-2 border-gray-200">
                <button className="w-full py-6 flex items-center justify-between gap-8 hover:text-[#80B224] transition-colors">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <Image src="/about/curious.svg" alt="Value icon" width={36} height={36} className='svg-gray' />
                    </div>
                    <FadeIn>
                      <h3 className="text-l font-semibold">Be curious at your core</h3>
                    </FadeIn>

                  </div>
                </button>
              </div>

              <div className="border-b-2 border-gray-200">
                <button className="w-full py-6 flex items-center justify-between gap-8 hover:text-[#80B224] transition-colors">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <Image src="/about/employees.svg" alt="Value icon" width={36} height={36} className='svg-gray' />
                    </div>
                    <FadeIn>
                      <h3 className="text-l font-semibold">Empower employees</h3>
                    </FadeIn>

                  </div>
                </button>
              </div>

              <div className="border-b-2 border-gray-200">
                <button className="w-full py-6 flex items-center justify-between gap-8 hover:text-[#80B224] transition-colors">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <Image src="/about/key.svg" alt="Value icon" width={36} height={36} className='svg-gray' />
                    </div>
                    <FadeIn>
                      <h3 className="text-l font-semibold">Act like an owner</h3>
                    </FadeIn>

                  </div>
                </button>
              </div>

              <div className="border-b-2 border-gray-200">
                <button className="w-full py-6 flex items-center justify-between gap-8 hover:text-[#80B224] transition-colors">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <Image src="/about/experiences.svg" alt="Value icon" width={36} height={36} className='svg-gray' />
                    </div>
                    <FadeIn>
                      <h3 className="text-l font-semibold text-left">Deliver best-in-class experiences</h3>
                    </FadeIn>
                  </div>
                </button>
              </div>

              <div className="border-b-2 border-gray-200">
                <button className="w-full py-6 flex items-center justify-between gap-8 hover:text-[#80B224] transition-colors">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <Image src="/about/achieve.svg" alt="Value icon" width={36} height={36} className='svg-gray' />
                    </div>
                    <FadeIn>
                      <h3 className="text-l font-semibold">Achieve more together</h3>
                    </FadeIn>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <PartnerCarousel logos={partnerLogos} />
      </div>

      {/* Contact Section */}
      <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32 overflow-hidden">
        <BackgroundTransition
          defaultImage="/contact-section1.webp"
          activeImage="/contact-section2.webp"
          className="w-full h-full absolute inset-0"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl font-black mb-10 sm:mb-8">Work with us</h2>
          </SlideUp>
          <SlideUp>
            <p className="text-gray-600 mb-8">
              Ready to shape the future? Join Canopy Wave and help drive the future of technology with a team redefining what's possible
            </p>
          </SlideUp>
          <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[#8CC63F] text-white px-6 py-2 rounded-lg hover:bg-[#80B224] transition-all duration-300" onClick={() => window.location.href = '/about/careers'}>
              Careers
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}