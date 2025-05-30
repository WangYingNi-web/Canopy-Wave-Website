"use client";

import Image from "next/image";
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
    return (
        <main className="min-h-screen relative text-gray-600">
            <Header />

            <div className="w-full h-[490px] relative mt-[84px]">
                <Image
                    src="/solutions-banner.svg"
                    alt="Solutions"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-white text-center">
                                Rendering
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-sm mt-8 text-center">
                                Performance of bare metal, with the flexibility and simplicity of the cloud
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Bare-Metal Performance in a Virtual Environment */}
            <div className='bg-[#F5F7F4]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="text-center mb-16">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">Bare-Metal Performance in a Virtual Environment</h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-sm text-center max-w-4xl mx-auto mb-16">
                                Our virtual machines are engineered to match the performance of physical hardware. We use GPU-accelerated instances and optimize our virtualization stack to ensure your rendering jobs run as fast and efficiently as possible—without the overhead that typically comes with virtualization
                            </p>
                        </SlideUp>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* High Frame Throughput */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/networking/qos.svg"
                                    alt="QoS"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">High frame throughput</h3>
                            <p className="text-gray-600 text-center text-sm">
                            Achieves thousands of frames per second via distributed parallel processing, ideal for 4K/8K real-time animation and industrial-scale droplet production
                            </p>
                        </div>

                        {/* Ultra-Low Latency */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/icon/high.svg"
                                    alt="High"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">Ultra-low latency</h3>
                            <p className="text-gray-600 text-center text-sm">
                            Reduces latency to 0.1ms using lightweight compression (SDVoE) and 6G ULLC technologies, critical for surgical robotics and cloud gaming
                            </p>
                        </div>

                        {/* GPU and CPU-Based Rendering */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/compute/memory.svg"
                                    alt="GPU and CPU-Based Rendering"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">Supports GPU and CPU-based rendering engines</h3>
                            <p className="text-gray-600 text-center text-sm">
                            Optimizes hybrid workflows through dynamic task scheduling and CUDA/OpenCL acceleration, enhancing real-time rendering efficiency in gaming and simulations
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* On-Demand Flexibility and Minute-Based Billing */}
            <div className="bg-[#F9F9F9] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                    On-Demand Flexibility and Minute-Based Billing
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-sm mb-4 sm:pr-10 text-justify">
                                    No more waiting in queues or paying for idle time. With Canopy Wave, you can spin up powerful rendering nodes instantly and only pay for what you use, down to the minute
                                </p>
                            </SlideUp>
                        </div>

                        {/* 右侧特性部分 */}
                        <div className="lg:col-span-6 border-l border-gray-200">
                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/networking/low-latency.svg"
                                            alt="Low Latency"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-l group-hover:text-white">Freelancers with irregular workloads</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/networking/computing.svg"
                                            alt="Computing"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-l group-hover:text-white">Studios needing to scale during crunch time</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/networking/qos.svg"
                                            alt="QoS"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-l group-hover:text-white">Teams looking to avoid large capital investments <br /> in hardware</h3>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bare-Metal Performance in a Virtual Environment */}
            <div className='bg-[#F5F7F4]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="text-center mb-16">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">Flexible Storage for All Rendering Workflows</h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-sm text-center max-w-4xl mx-auto mb-16">
                                Rendering workflows involve a mix of large assets, intermediate files, and final outputs. Our platform offers local, shared, and object storage options, optimized for performance and collaboration
                            </p>
                        </SlideUp>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Local Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/rendering/performance.svg"
                                    alt="Local Storage"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">Local Storage</h3>
                            <p className="text-gray-600 text-center text-sm">
                                Fast I/O for scratch files
                            </p>
                        </div>

                        {/* Shared Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/rendering/low-latency.svg"
                                    alt="Shared Storage"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">Shared Storage</h3>
                            <p className="text-gray-600 text-center text-sm">
                                We offer top-tier life insurance as well as short-term and long-term disability insurance to our employees
                            </p>
                        </div>

                        {/* Object Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/rendering/gpus.svg"
                                    alt="Object Storage"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">Object Storage</h3>
                            <p className="text-gray-600 text-center text-sm">
                                Come together and mangia. We provide cateredlunches in office and at our data centers fromvariouslocalvendors
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secure, Private Cloud Architecture */}
            <div className="bg-[#F9F9F9] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                    Secure, Private Cloud Architecture
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-sm mb-4 sm:pr-10">
                                    Your creative assets are your intellectual property—and we treat them that way. Our infrastructure is built on a private cloud with end-to-end encryption, strict access control, and enterprise-grade data protection
                                </p>
                            </SlideUp>
                        </div>

                        {/* 右侧特性部分 */}
                        <div className="lg:col-span-6 border-l border-gray-200">
                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/rendering/project.svg"
                                            alt="Project"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-l group-hover:text-white">Confidential project handling</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/rendering/enterprise.svg"
                                            alt="Enterprise"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-l group-hover:text-white">Enterprise-compliance ready</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/rendering/lifecycle.svg"
                                            alt="Lifecycle"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-l group-hover:text-white">Full user control over data lifecycle</h3>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ready to Get Started Section */}
            <div
                className="bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32"
                style={{ backgroundImage: "url('/contact-section.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6">Scalable Infrastructure for <br /> Projects of Any Size</h2>
                        <p className="text-gray-600 mb-8 mx-auto text-sm">
                            Whether you're rendering a single 4K animation or a complex feature-length film, our VM-based infrastructure scales horizontally and vertically, supporting as many rendering nodes as your project requires—without the headache of managing hardware
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Try Control Panel
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>
                                Contact Us
                            </Button>
                        </div>
                    </SlideUp>
                </div>
            </div>



            <Footer />
        </main>
    );
}
