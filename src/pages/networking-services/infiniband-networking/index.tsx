"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { Button } from "@/components/ui/button";
import BackgroundTransition from '@/components/BackgroundTransition';

export default function NetworkingServices() {
    useScrollToHash();
    return (
        <main className="min-h-screen text-gray-600 relative">
            <Header />
            <Head>
                <title>Canopy Wave | InfiniBand Networking</title>
                {/* <link rel="preload" href="/solutions-banner.svg" as="image" type="image/svg+xml" /> */}
            </Head>
            <div className="w-full h-[360px] sm:h-[520px] lg:h-[520px] relative mt-[84px] bg-[#e7f8e2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 h-full">
                    <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
                        <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-shadow-lg mb-6">
                            InfiniBand Networking
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            The Backbone of Next-Generation AI Supercomputing
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
                    <div className="absolute right-0 top-0 w-1/2 h-full lg:block hidden z-10">
                    <SlideUp>
                            <div
                                className="w-full h-[520px] bg-cover bg-left bg-no-repeat"
                                style={{
                                    backgroundImage: "url('/networking/infiniband-networking/Data-Centers-Solution-02.png')",
                                    maskImage: "linear-gradient(to right, transparent 0%, rgba(0,128,0,0.6) 8%, rgba(0,128,0,1) 18%)",
                                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,128,0,0.6) 8%, rgba(0,128,0,1) 18%)"
                                }}
                            >
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <div className="bg-[#F5F7F4] py-4">
                <div id="private-cloud" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">InfiniBand Networking</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-l">
                            InfiniBand Networking is used to support next-generation performance and scalability.
                            We built our NVIDIA Quantum InfiniBand Cluster Networking with QM9700 and QM9790
                        </p>
                    </SlideUp>
                </div>
            </div>

            {/* 新增性能展示部分 */}
            <div className="bg-[#F9F9F9] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">
                            Designed for high performance work
                        </h2>
                    </SlideUp>

                    {/* 性能指标卡片 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
                        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <SlideUp>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#8BC34A] mb-2">2x</div>
                                    <div className="font-semibold text-gray-800 mb-4">Data Throughput</div>
                                    <div className="text-sm text-gray-600">400Gb/s</div>
                                </div>
                            </SlideUp>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <SlideUp>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#8BC34A] mb-2">4x</div>
                                    <div className="font-semibold text-gray-800 mb-4">MPI Performance</div>
                                    <div className="text-sm text-gray-600">New MPI All-to-All IN-Network Computing acceleration engine</div>
                                </div>
                            </SlideUp>
                        </div>
                        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <SlideUp>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#8BC34A] mb-2">3.2x</div>
                                    <div className="font-semibold text-gray-800 mb-4">Switch System Ability</div>
                                    <div className="text-sm text-gray-600">Aggregated bidirectional tHroughput of 51.2 Tbit/s with 64 400Gb/s ports</div>
                                </div>
                            </SlideUp>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <SlideUp>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#8BC34A] mb-2">6.5x</div>
                                    <div className="font-semibold text-gray-800 mb-4">Higher Scalability</div>
                                    <div className="text-sm text-gray-600">Connecting&gt;1M nodes with 3 hops</div>
                                </div>
                            </SlideUp>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <SlideUp>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#8BC34A] mb-2">32x</div>
                                    <div className="font-semibold text-gray-800 mb-4">More AI Acceleration</div>
                                    <div className="text-sm text-gray-600">NVIDIA SHARP In-Networking Computing technology</div>
                                </div>
                            </SlideUp>
                        </div>


                    </div>

                    {/* 特性说明卡片 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <SlideUp>
                            <div className="bg-[#F9F9F9] border border-gray-200 p-8 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                                <div className="flex items-center mb-4">
                                    <Image src="/about/curious.svg" alt="Multi-GPU Instances" width={36} height={36} className="mr-2 mb-4 svg-gray" />
                                    <h3 className="font-bold text-lg">Accelerated In-Network Processing</h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    InfiniBand leverages technologies like NVIDIA SHARP to offload collective communication tasks directly to the network switches. This reduces the volume of data moving across the network, shortens the duration of MPI operations, and boosts data center efficiency.
                                </p>
                            </div>


                        </SlideUp>
                        <div className="bg-[#F9F9F9] border border-gray-200 p-8 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <SlideUp>
                                <div className="flex items-center mb-4">
                                    <Image src="/rendering/performance.svg" alt="Multi-GPU Instances" width={36} height={36} className="mr-2 svg-gray" />
                                    <h3 className="font-bold text-lg">Enhanced Service Quality</h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    InfiniBand delivers superior quality of service through advanced congestion management and adaptive routing. These capabilities guarantee efficient, reliable data transmission and maintain optimal network performance, even under heavy workloads.
                                </p>
                            </SlideUp>
                        </div>

                        <div className="bg-[#F9F9F9] border border-gray-200 p-8 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <SlideUp>
                                <div className="flex items-center mb-4">
                                    <Image src="/compute/accuracy.svg" alt="Private Cloud" width={36} height={36} className="mr-2 svg-gray" />
                                    <h3 className="font-bold text-lg">Flexible Topology Support</h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    InfiniBand provides centralized management and supports a wide variety of network topologies. Its flexible routing algorithms allow organizations to optimize network performance for specific application communication patterns.
                                </p>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>

            {/* NVIDIA Quantum InfiniBand Platform */}
            <div className="bg-[#F9F9F9] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">
                            The NVIDIA Quantum InfiniBand Platform
                        </h2>
                    </SlideUp>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* InfiniBand Adapters */}
                        <SlideUp>
                            <div className="bg-[#F9F9F9] rounded-lg shadow-lg p-12 h-full">
                                <div className="flex items-start mb-6">
                                    <div className="mr-4">
                                        <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">InfiniBand Adapters</h3>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    The NVIDIA ConnectX-7 InfiniBand adapter supports PCIe Gen5,
                                    offers multiple form factors, and delivers single or dual network
                                    ports with speeds up to <span className="font-semibold">400Gb/s</span>
                                </p>

                                <div className="flex justify-center">
                                    <div className="rounded-lg">
                                        <Image
                                            src="/networking/infiniband-networking/adapter.jpg"
                                            alt="InfiniBand Adapter"
                                            width={500}  // 仅设置目标宽度
                                            height={0}   // 高度设为0（或任意值，由CSS覆盖）
                                            className="object-contain w-full h-auto" // 关键：高度自适应
                                        />
                                    </div>
                                </div>
                            </div>
                        </SlideUp>

                        {/* Optical Transceivers and Optic Cables */}
                        <SlideUp>
                            <div className="bg-[#F9F9F9] rounded-lg shadow-lg p-12 h-full">
                                <div className="flex items-start mb-6">
                                    <div className="mr-4">
                                        <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Optical Transceivers and Optic Cables</h3>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Use OSFP transceivers and OSFP cables deliver high bandwidth,
                                    low latency, and reliable connectivity between InfiniBand
                                    components
                                </p>

                                <div className="flex justify-center">
                                    <div className="rounded-lg">
                                        <Image
                                            src="/networking/infiniband-networking/800G OSFP.jpg"
                                            alt="Optical Transceiver"
                                            width={500}  // 仅设置目标宽度
                                            height={0}   // 高度设为0（或任意值，由CSS覆盖）
                                            className="object-contain w-full h-auto" // 关键：高度自适应
                                        />
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* NVIDIA QUANTUM INFINIBAND CLUSTER NETWORKING */}
            <div className="bg-[#F9F9F9] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <div className="rounded-lg shadow-lg">
                                    <Image
                                        src="/networking/infiniband-networking/9700S.jpg"
                                        alt="Optical Transceiver"
                                        width={550}
                                        height={450}
                                        className="object-contain w-full rounded-lg"
                                    />
                                </div>
                                <p className='text-center mt-6'>MQM9700-NS2F</p>
                            </SlideUp>
                        </div>

                        {/* 右侧特性部分 */}
                        <div className="lg:col-span-6 border-l border-gray-200">
                            <div className="border-b-[1px] border-b-gray-200 pb-8 p-4">
                                <div className="flex items-center gap-4 mb-2">
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
                                        <h3 className="font-bold text-l group-hover:text-white">High Scalability</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        Features 32 OSFP ports that flexibly break out into 64x400GbE configurations, supporting large-scale clusters of up to 2,000 nodes
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="border-b-[1px] border-b-gray-200 pb-8 p-4">
                                <div className="flex items-center gap-4 mb-2">
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
                                        <h3 className="font-bold text-l group-hover:text-white">Ultra-Low Latency</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        Achieves a massive 25.6 Tb/s total throughput, accelerated by RDMA and NVIDIA SHARP In-Network Computing for ultra-low latency and peak application performance
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="border-b-[1px] border-b-gray-200 pb-8 p-4">
                                <div className="flex items-center gap-4 mb-2">
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
                                        <h3 className="font-bold text-l group-hover:text-white">Energy Efficiency</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        Advanced power-saving features to minimize energy usage and lower operating expenses
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="border-b-[1px] border-b-gray-200 pb-8 p-4">
                                <div className="flex items-center gap-4 mb-2">
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
                                        <h3 className="font-bold text-l group-hover:text-white">Robust Hardware Reliability</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        Ensures maximum uptime with a compact 1U design, redundant hot-swappable power and fans, and a self-healing network for up to 5000x faster failure recovery
                                    </p>
                                </FadeIn>
                            </div>

                            <div className="border-b-[1px] border-b-gray-200 pb-8 p-4">
                                <div className="flex items-center gap-4 mb-2">
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
                                        <h3 className="font-bold text-l group-hover:text-white">Difference between 9700 and 9790
                                        </h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        9700 is managed: built-in NOS, subnet manager, management port.
                                        9790 is unmanaged: no CPU/NOS, configured via mlxconfig
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actual use scenarios 部分 */}
            <div className="bg-[#F5F7F4] py-4">
                <div id="private-cloud" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Actual use scenarios</h2>
                    </SlideUp>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <div className="flex justify-start mb-6">
                                <Image
                                    src="/compute/fast.svg"
                                    alt="High Performance"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 group-hover:text-white">High-Performance Computing</h3>
                            <p className="text-gray-600 text-l group-hover:text-white">
                                Climate simulation,and Protein structure analysis and so on
                            </p>
                            <div className="mt-4">
                                <Image
                                    src="/networking/infiniband-networking/hpc-climate.jpeg"
                                    alt="HPC Climate Simulation"
                                    width={300}
                                    height={200}
                                    className="rounded-lg object-cover w-full"
                                />
                            </div>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <div className="flex justify-start mb-6">
                                <Image
                                    src="/icon/high.svg"
                                    alt="Workloads"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 group-hover:text-white">AI Training and Interference</h3>
                            <p className="text-gray-600 text-l group-hover:text-white">
                                Support multi-node distributed training like GPT-4 and LLaMA
                            </p>
                            <div className="mt-4">
                                <Image
                                    src="/networking/infiniband-networking/AI traning.jpg"
                                    alt="HPC Climate Simulation"
                                    width={300}
                                    height={200}
                                    className="rounded-lg object-cover w-full"
                                />
                            </div>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <div className="flex justify-start mb-6">
                                <Image
                                    src="/networking/scalability.svg"
                                    alt="Scalability"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 group-hover:text-white">High-Frequency Trading</h3>
                            <p className="text-gray-600 text-l group-hover:text-white">
                                Low latency and DetNet meet financial high-frequency trading needs
                            </p>
                            <div className="mt-4">
                                <Image
                                    src="/networking/infiniband-networking/AI Finance.webp"
                                    alt="HPC Climate Simulation"
                                    width={300}
                                    height={200}
                                    className="rounded-lg object-cover w-full"
                                />
                            </div>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg text-left transition-all duration-300 cursor-pointer">
                            <div className="flex justify-start mb-6">
                                <Image
                                    src="/compute/model.svg"
                                    alt="Advanced Congestion Control"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 group-hover:text-white">Storage
                                Network</h3>
                            <p className="text-gray-600 text-l group-hover:text-white">
                                Replace traditional Fibre Channel to achieve high-speed storage access
                            </p>
                            <div className="mt-4">
                                <Image
                                    src="/networking/infiniband-networking/Storage.jpg"
                                    alt="HPC Climate Simulation"
                                    width={300}
                                    height={200}
                                    className="rounded-lg object-cover w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#F9F9F9]'>
                <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-4" style={{ lineHeight: '1.3' }}>
                            Why NVIDIA Quantum InfiniBand on
                            <br /> Canopy Wave Networking Service?
                        </h2>
                    </SlideUp>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {/* The Security of Private Cloud */}
                        <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/networking/security.svg" alt="NVIDIA GPUs" width={36} height={36} className="mb-4 svg-gray" />
                            <h3 className="text-l font-bold mb-4">Robust Supply Chain & Equipment Sourcing</h3>
                            <p className="text-gray-600 text-l">
                                The integrated supply-chain governance and strategic vendor alliances deliver scalable, expedited procurement of critical network hardware-adapters, switches, transceivers, and cables-eliminating delays and complexity
                            </p>
                        </div>

                        {/* ​​24/7 Support​ */}
                        <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/compute/cloud.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4 svg-gray" />
                            <h3 className="text-l font-bold mb-4">24/7 Support</h3>
                            <p className="text-gray-600 text-l">
                                Dedicated 24/7 expert coverage delivers instantly demand acknowledgement via real-time interactive channels, ensuring urgent issues are resolved within the same operational window without overnight delay
                            </p>
                        </div>

                        {/* Visibility Platform​ */}
                        <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/networking/qos.svg" alt="Private Cloud" width={36} height={36} className="mb-4 svg-gray" />
                            <h3 className="text-l font-bold mb-4">Cost-effective</h3>
                            <p className="text-gray-600 text-l">
                                Delivers high performance at a cost-effective price, helping businesses reduce operational costs while maintaining optimal efficiency. Optimize hardware and network architecture to ensure a faster return on investment
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-24 overflow-hidden">
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
                            <h2 className="text-3xl sm:text-4xl font-black mb-6">Incredibly Fast Networking <br /> Services For GenAI</h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 mb-8 mx-auto text-l">
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
            </div>

            <Footer />
        </main>
    );
}