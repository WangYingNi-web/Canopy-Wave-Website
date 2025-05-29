"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { Button } from "@/components/ui/button";

export default function NetworkingServices() {
    useScrollToHash();
    return (
        <main className="min-h-screen text-gray-600 relative">
            <Header />
            <div className="w-full h-[550px] relative mt-[84px] bg-[#EDF2E4]">
                <Image
                    src="/networking/banner.svg"
                    alt="banner"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
                        <SlideUp>
                            <h1 className="text-6xl sm:text-8xl font-black text-[#8CC63F] text-shadow-lg">
                                Networking<br />
                                Services
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-lg mt-8">
                                Get the best RDMA Networking purposely build for AI
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* NVIDIA QUANTUM INFINIBAND CLUSTER NETWORKING */}
            <div className="bg-[#F5F9F4] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-black mb-6">
                                    InfiniBand  Networking
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-4 sm:pr-10 text-lg">
                                    Quantum InfiniBand is a high-performance interconnect solution
                                    primarily developed by NVIDIA for AI workloads.
                                    InfiniBand networking is used to support next-generation
                                    performance and scalability.
                                    We built our NVIDIA Quantum InfiniBand Cluster Networking
                                    with QM9700 and QM9790
                                </p>
                            </SlideUp>
                        </div>

                        {/* 右侧特性部分 */}
                        <div className="lg:col-span-6 border-l border-gray-200">
                            <div className="border-b-[1px] border-b-gray-200 pb-12 p-4">
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
                                        <h3 className="font-bold text-xl group-hover:text-white">Ultra-High Bandwidth and Low Latency</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white">
                                        We use 400G none-blocking InfiniBand Networking to connect across all compute network, the latency is  in the microsecond range
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="border-b-[1px] border-b-gray-200 pb-12 p-4">
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
                                        <h3 className="font-bold text-xl group-hover:text-white">In-Network Computing</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white">
                                        SHARP (Scalable Hierarchical Aggregation and Reduction Protocol): Offloads collective operations like reductions into the network fabric, greatly speeding up performance for distributed AI training
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="border-b-[1px] border-b-gray-200 pb-12 p-4">
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
                                        <h3 className="font-bold text-xl group-hover:text-white">Congestion Control and QoS</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white">
                                        We use Adaptive Routing and Explicit Congestion Notification ensure traffic flows smoothly even under heavy load
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="border-b-[1px] border-b-gray-200 pb-12 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/networking/tolerance.svg"
                                            alt="Tolerance"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Reliability and Fault Tolerance</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white">
                                        We design our Infiniband networking with Enhanced error detection and correction with support for failover and redundancy
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="border-b-[1px] border-b-gray-200 pb-12 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className=" border-gray-300 p-2">
                                        <Image
                                            src="/networking/scalability.svg"
                                            alt="Scalability"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Scalability</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white">
                                        With up to 15% higher effective throughput than alternatives, run your GPU clusters at their maximum potential and accelerate time to market
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RoceV2 Networking 部分 */}
            <div className="bg-[#F9F9F9] py-4">
                <div id="private-cloud" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4">RoceV2 Networking</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-lg">
                            Create virtual, accelerated networks to manage your cloud resources on CanopyWave—powered by NVIDIA BlueField-3 DPUs. Securely and efficiently connect compute, storage, and everything else for GenAI
                        </p>
                    </SlideUp>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg text-center transition-all duration-300 cursor-pointer">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/compute/fast.svg"
                                    alt="High Performance"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-xl mb-4 group-hover:text-white">High Performance</h3>
                            <p className="text-gray-600 group-hover:text-white">
                                RDMA bypasses the CPU for data transfers, reducing latency and CPU overhead
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg text-center transition-all duration-300 cursor-pointer">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/icon/high.svg"
                                    alt="Workloads"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-xl mb-4 group-hover:text-white">Excellent for AI Workloads</h3>
                            <p className="text-gray-600 group-hover:text-white">
                                Used in distributed AI training systems where fast GPU-to-GPU communication across nodes is needed
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg text-center transition-all duration-300 cursor-pointer">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/networking/scalability.svg"
                                    alt="Scalability"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-xl mb-4 group-hover:text-white">Scalability</h3>
                            <p className="text-gray-600 group-hover:text-white">
                                Supports multi-tenant cloud environments
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg text-center transition-all duration-300 cursor-pointer">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/compute/model.svg"
                                    alt="Advanced Congestion Control"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-xl mb-4 group-hover:text-white">Advanced Congestion Control</h3>
                            <p className="text-gray-600 group-hover:text-white">
                                We build our RoceV2 Networking resilience to congestion and packet loss
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32"
                // style={{ backgroundImage: "url('/contact-section.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-black mb-6">Incredibly Fast Networking <br /> Services For GenAI</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-8 mx-auto text-lg">
                            Don’t let a shoddy network slow you down. Get the absolute most out of your GPUs
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.location.href = '/contact'}>
                                Get started
                            </Button>
                        </div>
                    </SlideUp>
                </div>
            </div>

            <Footer />
        </main>
    );
}