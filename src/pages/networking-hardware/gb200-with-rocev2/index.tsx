"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { Button } from "@/components/ui/button";
import React from 'react';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function GB200WithRoCEv2() {
    useScrollToHash();
    // 添加tab状态管理
    const [activeTab, setActiveTab] = React.useState('rocev2');
    const [activeTab2, setActiveTab2] = React.useState('platform');

    return (
        <main className="min-h-screen text-gray-600 relative">
            <Header />
            <Head>
                <title>Canopy Wave - GB200 with RoCEv2</title>
                <link rel="preload" href="/solutions/networking-hardware/gb200-with-rocev2/banner.png" as="image" type="image/svg+xml" />
            </Head>
            {/* Hero Section */}
            <div className="w-full h-[520px] relative mt-[84px] bg-[#EDF2E4]">
                <Image
                    src="/solutions/networking-hardware/gb200-with-rocev2/banner.png"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-shadow-lg">
                                GB200 Cluster with RoCEv2
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8">
                                High-performance Network Solution
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Challenges Section */}
            <div className="bg-[#F9F9F9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">
                            Challenges
                        </h2>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Prolonged R&D Cycles */}
                        <SlideUp>
                            <div className="text-left p-6 bg-white min-h-[260px]">
                                <div className="w-12 h-12 mb-4">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/prolonged-rd-cycles.svg"
                                        alt="Prolonged R&D Cycles"
                                        width={42}
                                        height={42}
                                        style={{ width: '42px', height: '42px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 mb-4">
                                    Prolonged R&D Cycles
                                </h3>
                                <p className="text-l text-gray-600 leading-relaxed">
                                    Training trillion-parameter models takes months. This severely slows algorithm iteration and delays time-to-market.
                                </p>
                            </div>
                        </SlideUp>

                        {/* Performance Bottlenecks */}
                        <SlideUp>
                            <div className="text-left p-6 bg-white min-h-[260px]">
                                <div className="w-12 h-12 mb-4">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/performance-bottlenecks.svg"
                                        alt="Performance Bottlenecks"
                                        width={42}
                                        height={42}
                                        style={{ width: '42px', height: '42px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 mb-4">
                                    Performance Bottlenecks
                                </h3>
                                <p className="text-l text-gray-600 leading-relaxed">
                                    Network latency between GPUs is the key bottleneck. This leads to idle GPUs and low MFU (Model FLOPs Utilization).
                                </p>
                            </div>
                        </SlideUp>

                        {/* Operational Complexity */}
                        <SlideUp>
                            <div className="text-left p-6 bg-white min-h-[260px]">
                                <div className="w-12 h-12 mb-4">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/operational-complexity.svg"
                                        alt="Operational Complexity"
                                        width={42}
                                        height={42}
                                        style={{ width: '42px', height: '42px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 mb-4">
                                    Operational Complexity
                                </h3>
                                <p className="text-l text-gray-600 leading-relaxed">
                                    Deploying and managing large AI clusters is time-consuming and labor-intensive. This slows business responsiveness and makes troubleshooting difficult.
                                </p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* GB200 Cluster with RoCEv2 Section */}
            <div className='bg-[#F5F7F4]'>
                <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">GB200 Cluster with RoCEv2 High- <br /> performance Network Solution</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-8 text-l">
                            A turnkey GB200 supercluster engineered for 24/7 production, featuring self-managing and self-monitoring capabilities
                        </p>
                    </SlideUp>

                    <SlideUp>
                        <div className="mb-16 group">
                            <Image
                                src="/solutions/networking-hardware/gb200-with-rocev2/gb200-table.png"
                                alt="NVIDIA GB200 NVL72 Cluster"
                                width={1300}
                                height={400}
                                className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </SlideUp>
                </div>
            </div>

            {/* On-Demand High-Performance GPU Section */}
            <div className='bg-[#F5F7F4]'>
                <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">On-Demand High-Performance GPU <br /> Clusters to Shorten R&D Cycles</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-6 text-l">
                            Introducing NVIDIA's next-gen GB200, built on a "1 Grace CPU + 2 Blackwell GPU" heterogeneous architecture.
                            With 384GB of memory (4.8x more than the H100) and 3.3x the memory bandwidth of the H200, it's a massive leap forward.
                            The GB200 achieves 5 PFLOPS in FP16 dense compute and 10 POPS in INT8, enabling real-time inference for models with trillions of parameters.
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex justify-center pb-8">
                            <button className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-l" onClick={() => window.location.href = '/gb200-nvl72'}>
                                Learn more
                            </button>
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <div className="mb-16 group">
                            <Image
                                src="/solutions/networking-hardware/gb200-with-rocev2/gb200.png"
                                alt="NVIDIA GB200 NVL72 Cluster"
                                width={1300}
                                height={400}
                                className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </SlideUp>
                </div>
            </div>


            {/* RoCEv2 + NVLink Performance Section */}
            <div className="bg-[#F9F9F9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-black mb-4">
                                RoCEv2 + NVLink breaks through<br />performance bottlenecks
                            </h2>
                        </div>
                    </SlideUp>

                    <SlideUp>
                        <div className="mb-8">
                            {/* Tab Navigation */}
                            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8">
                                <button
                                    onClick={() => setActiveTab('rocev2')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'rocev2'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Ultra-Low Latency RoCEv2 Fabric
                                </button>
                                <button
                                    onClick={() => setActiveTab('nvlink')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'nvlink'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Unified High-Bandwidth GPU Domain
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div className="space-y-4">
                                    {activeTab === 'rocev2' && (
                                        <div className="space-y-2 pl-8">
                                            <h3 className="font-semibold text-gray-700">
                                                Ultra-Low Latency RoCEv2 Fabric
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Utilizes RDMA for direct, kernel-bypass data transfer, minimizing latency and CPU load.
                                            </p>
                                            <div>
                                                <p className="font-semibold text-gray-700">Result:</p>
                                                <p className="text-gray-600">
                                                    Ensures efficient, non-blocking communication between any two GPUs across the cluster.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'nvlink' && (
                                        <div className="space-y-2 pl-8">
                                            <h3 className="font-semibold text-gray-700">
                                                Unified High-Bandwidth GPU Domain
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Each NVL72 rack operates as a single, massive GPU with 1.8 TB/s of all-to-all NVLink bandwidth.
                                            </p>
                                            <div>
                                                <p className="font-semibold text-gray-700">Result:</p>
                                                <p className="text-gray-600">
                                                    Eliminates all communication bottlenecks within the rack.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center">
                                    <div className="relative w-full max-w-6xl">
                                        <Image
                                            src="/solutions/networking-hardware/gb200-with-rocev2/performance-architecture.png"
                                            alt="RoCEv2 + NVLink Performance Architecture"
                                            width={1600}
                                            height={600}
                                            className="object-cover w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>

            {/* Intelligent platform + 24/7 expert team simplifies operation Section */}
            <div className="bg-[#F9F9F9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-black mb-4">
                                Intelligent platform + 24/7 expert team <br />simplifies operation
                            </h2>
                        </div>
                    </SlideUp>

                    <SlideUp>
                        <div className="mb-8">
                            {/* Tab Navigation */}
                            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8">
                                <button
                                    onClick={() => setActiveTab2('platform')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'platform'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Intelligent, End-to-End Monitoring
                                </button>
                                <button
                                    onClick={() => setActiveTab2('team')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'team'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Unified High-Bandwidth GPU Domain
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div className="space-y-4">
                                    {activeTab2 === 'platform' && (
                                        <div className="space-y-2 pl-8">
                                            <h3 className="font-semibold text-gray-700">
                                                How:
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                A unified platform integrates deep telemetry from all components (GPU, NVLink, Network).
                                            </p>
                                            <div>
                                                <p className="font-semibold text-gray-700">Benefit:</p>
                                                <p className="text-gray-600">
                                                    AI-driven analytics proactively detect anomalies and bottlenecks before they impact training jobs.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab2 === 'team' && (
                                        <div className="space-y-2 pl-8">
                                            <h3 className="font-semibold text-gray-700">
                                                How:
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Engineers with deep experience with NVIDIA GPUs and software provide constant, around-the-clock
                                                system monitoring.
                                            </p>
                                            <div>
                                                <p className="font-semibold text-gray-700">Benefit:</p>
                                                <p className="text-gray-600">
                                                    Immediate remote intervention ensures maximum uptime and uninterrupted training.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center">
                                    <div className="relative w-full max-w-6xl">
                                        <Image
                                            src="/solutions/networking-hardware/gb200-with-rocev2/iaas.png"
                                            alt="RoCEv2 + NVLink Performance Architecture"
                                            width={1600}
                                            height={600}
                                            className="object-cover w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>

            {/* Deployment Process Section */}
            <div className="bg-white py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
                                Deployment Process
                            </h2>
                        </div>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {/* Step 01 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center h-[300px]'>
                                <div className="text-left max-w-[200px]">
                                    <div className="mb-2">
                                        <div className="text-4xl font-black text-gray-300 mb-2">01</div>
                                        <h3 className="text-lg font-semibold text-gray-900">Planning & Design</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Create comprehensive documentation based on the client's data center topology, including detailed cabling plans and an IP addressing scheme.
                                    </p>
                                </div>
                                <div className="hidden lg:flex items-start justify-end h-full pt-8 pr-4">
                                    <img src="/solutions/networking-hardware/gb200-with-rocev2/arrow.svg" alt="arrow" className="w-8 h-8" />
                                </div>
                            </div>

                        </SlideUp>

                        {/* Step 02 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center h-[300px]'>
                                <div className="text-left max-w-[200px]">
                                    <div className="mb-2">
                                        <div className="text-4xl font-black text-gray-300 mb-2">02</div>
                                        <h3 className="text-lg font-semibold text-gray-900">Deployment</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Rack switches, connect all physical cabling, and install GB200 NICs.
                                    </p>
                                </div>
                                <div className="hidden lg:flex items-start justify-end h-full pt-8 pr-4">
                                    <img src="/solutions/networking-hardware/gb200-with-rocev2/arrow.svg" alt="arrow" className="w-8 h-8" />
                                </div>
                            </div>
                        </SlideUp>

                        {/* Step 03 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center h-[300px]'>
                                <div className="text-left max-w-[200px]">
                                    <div className="mb-2">
                                        <div className="text-4xl font-black text-gray-300 mb-2">03</div>
                                        <h3 className="text-lg font-semibold text-gray-900">Configuration & Validation</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Set up software, configure network and conduct performance stress tests, followed by a final test report.
                                    </p>
                                </div>
                                <div className="hidden lg:flex items-start justify-end h-full pt-8 pr-4">
                                    <img src="/solutions/networking-hardware/gb200-with-rocev2/arrow.svg" alt="arrow" className="w-8 h-8" />
                                </div>
                            </div>
                        </SlideUp>

                        {/* Step 04 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center h-[300px]'>
                                <div className="text-left max-w-[200px]">
                                    <div className="mb-2">
                                        <div className="text-4xl font-black text-gray-300 mb-2">04</div>
                                        <h3 className="text-lg font-semibold text-gray-900">Acceptance & Handover</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Provide complete acceptance criteria and deliver upon meeting the standards.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Ready to Get Started Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-28 overflow-hidden">
                <BackgroundTransition
                    defaultImage="/contact-section1.webp"
                    activeImage="/contact-section2.webp"
                    className="w-full h-full"
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
    );
}