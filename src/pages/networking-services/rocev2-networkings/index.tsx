import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import { SlideFromLeft } from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function RoCEv2NetworkingPage() {
    // 数字动画函数
    const animateNumber = (elementId: string, targetNumber: number) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        let currentNumber = 0;
        const increment = targetNumber / 60; // 60帧动画
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }
            element.textContent = `${Math.floor(currentNumber)}x`;
        }, 25);
    };

    useEffect(() => {
        // IntersectionObserver：进入视口再触发数字动画
        const targetSection = document.getElementById('performance-stats');

        if (targetSection) {
            const observer = new IntersectionObserver(
                (entries, observerSelf) => {
                    if (entries[0].isIntersecting) {
                        animateNumber("inference-count", 30);
                        animateNumber("training-count", 4);
                        animateNumber("efficiency-count", 25);
                        observerSelf.disconnect(); // 只触发一次
                    }
                },
                { threshold: 0.8 } // 区域 80% 出现在视口时触发
            );
            observer.observe(targetSection);

            // 清理函数
            return () => observer.disconnect();
        }
    }, []);

    return (
        <main className="min-h-screen text-gray-600 relative">
            <Header />
            <Head>
                <title>Canopy Wave | RoCE v2 Networking</title>
                {/* <link rel="preload" href="/gb200-nvl72/nvidia-gb200-nvl72.webp" as="image" type="image/svg+xml" /> */}
                <meta name="description" content="Experience the power of NVIDIA GB200 NVL72 with Canopy Wave's on-demand GPU clusters. Advanced AI acceleration for next-generation computing." />
            </Head>
            {/* Hero Section */}
            <div className="w-full h-[550px] lg:h-[490px] mt-[84px] bg-gradient-to-r from-[#e7f8e2] to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 min-h-[400px] lg:min-h-[500px]">
                    <SlideUp>
                        <div className="flex-1 max-w-2xl text-center lg:text-left">
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-shadow-lg mb-6">
                                RoCE v2 Networking
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Get the best RDMA Networking purposely built for AI
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
                    </SlideUp>
                    <div className="flex-1 flex justify-center lg:justify-end w-full lg:mt-0">
                        <SlideUp>
                            <div className="relative w-full max-w-md lg:max-w-none">
                                <Image
                                    src="/networking/rocev2-networkings/nvidia-bluefield-dpu-3.png"
                                    alt="NVIDIA GB200 NVL72 Cluster"
                                    width={0}    // 忽略属性值
                                    height={0}   // 忽略属性值
                                    className="object-contain w-[500px] h-auto" // 完全用CSS控制
                                    priority={true}
                                />
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9F9F9] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                    RoCE v2 Networking
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-4 sm:pr-10 text-l">
                                    Create virtual, accelerated networks to manage your cloud resources on CanopyWave—powered by NVIDIA BlueField-3 DPUs. Securely and efficiently connect compute, storage, and everything else for GenAI
                                </p>
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
                                        <h3 className="font-bold text-l group-hover:text-white">High Performance</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        RDMA bypasses the CPU for data transfers, reducing latency and CPU overhead
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
                                        <h3 className="font-bold text-l group-hover:text-white">Excellent for AI Workloads</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        Used in distributed AI training systems where fast GPU-to-GPU communication across nodes is needed
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
                                        <h3 className="font-bold text-l group-hover:text-white">Hardware Acceleration</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        RoCE v2 further improves data transmission efficiency with the help of hardware acceleration technology
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
                                        <h3 className="font-bold text-l group-hover:text-white">Advanced Congestion Control</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        We build our RoCE v2 Networking to improves network stability and performance. It can better adapt to high-load, low-latency application scenarios
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
                                        <h3 className="font-bold text-l group-hover:text-white">Scalability</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white text-l pl-[70px]">
                                        RoCE v2 is hardware-independent and can better adapt to different hardware environments
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#F5F7F4]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">RoCE v2 Network Cards</h2>
                            </SlideUp>
                            <SlideUp>
                                <p>
                                    The ConnectX-7 SmartNIC (HCA) delivers ultra-low latency, 400Gb/s throughput, and the innovative NVIDIA Network Compute Acceleration Engine to further accelerate applications. ConnectX-7 provides the scalability and feature-rich technology required for supercomputers, artificial intelligence, and hyperscale cloud data centers
                                </p>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <Image
                                    src="/networking/rocev2-networkings/bluefield-connectx-7-2c50-d-2x.png"
                                    alt="NVIDIA H200 GPU"
                                    width={400}
                                    height={200}
                                    style={{ width: '460px', height: 'auto' }}
                                    className="w-full rounded-lg lg:ml-12"
                                />
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9F9F9] py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-8 text-center">
                            Advanced Congestion Control
                        </h2>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12 text-l">
                            In RDMA communication, data is transferred directly from the memory of the sender to the memory of the receiver without the involvement of an operating system or CPU. This feature makes RDMA more demanding on network latency and reliability, and is especially sensitive to network packet loss and latency
                        </p>
                    </SlideUp>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <Image src="/icon/optimized.svg" alt="Congestion Detection" width={34} height={34} className="mb-6 svg-gray" />
                            <h3 className="text-l font-bold mb-4 group-hover:text-white">Congestion Detection</h3>
                            <p className="text-gray-600 group-hover:text-white text-l">Real-time monitoring and detection of network congestion to ensure stable data transmission</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <Image src="/icon/resource.svg" alt="Packet Loss Recovery" width={34} height={34} className="mb-6 svg-gray" />
                            <h3 className="text-l font-bold mb-4 group-hover:text-white">Packet Loss Recovery</h3>
                            <p className="text-gray-600 group-hover:text-white text-l">Automatic mechanisms to recover from packet loss, improving reliability for critical workloads</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <Image src="/icon/high.svg" alt="Adaptive Rate Control" width={34} height={34} className="mb-6 svg-gray" />
                            <h3 className="text-l font-bold mb-4 group-hover:text-white">Adaptive Rate Control</h3>
                            <p className="text-gray-600 group-hover:text-white text-l">Dynamically adjusts data transfer rates to match network conditions and avoid congestion</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <Image src="/icon/used.svg" alt="End-to-End QoS" width={34} height={34} className="mb-6 svg-gray" />
                            <h3 className="text-l font-bold mb-4 group-hover:text-white">End-to-End QoS</h3>
                            <p className="text-gray-600 group-hover:text-white text-l">Guarantees quality of service for latency-sensitive applications.
                                Ensures performance for critical workloads</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#F5F7F4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2 sm:pr-10">
                            <SlideUp>
                                <Image src="/networking/rocev2-networkings/how.png" alt="Processing Power" width={500} height={400} style={{ width: '560px', height: 'auto' }} />
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-4 sm:mb-8">Remote Direct Memory Access</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-2 text-l">
                                    RDMA (Remote Direct Memory Access) means that external devices can bypass the CPU and access the user-mode system main memory on another remote host
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Ultra-low latency for faster data transfer</li>
                                    <li>• Reduces CPU usage and frees up compute resources</li>
                                    <li>• High throughput, ideal for large-scale data exchange</li>
                                    <li>• Supports distributed and high-performance computing scenarios</li>
                                    <li>• Optimizes network resource utilization</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#F9F9F9]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">RoCE v2 vs InfiniBand</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12 text-l">
                            Both RoCE v2 and InfiniBand are high-performance networking technologies. RoCE v2 is based on Ethernet, making deployment simpler, cost lower, and compatibility stronger—ideal for AI, big data, and cloud computing scenarios. InfiniBand offers excellent performance but requires dedicated equipment,is focused on delivering perfect performance, and has limited scalability. RoCE v2 is the preferred choice for enterprises and cloud environments
                        </p>
                    </SlideUp>
                    <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left side - Comparison Table */}
                        <div className="bg-white rounded-lg shadow-lg p-6 h-[529px]">
                            <h3 className="text-xl font-bold text-center mb-6 text-[#80B224]">RoCE v2 vs InfiniBand</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-2 font-semibold text-gray-700">Feature</th>
                                            <th className="text-left py-3 px-2 font-semibold">RoCE v2</th>
                                            <th className="text-left py-3 px-2 font-semibold">InfiniBand</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-3 px-2 font-medium text-gray-700">Deployment Difficulty</td>
                                            <td className="py-3 px-2 text-gray-600">Need to configure the network card</td>
                                            <td className="py-3 px-2 text-[#80B224] font-medium">No extra configuration required</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-2 font-medium text-gray-700">Cost</td>
                                            <td className="py-3 px-2 text-[#80B224] font-medium">Low, Less equipment required</td>
                                            <td className="py-3 px-2 text-gray-600">High, requires full set of equipment</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-2 font-medium text-gray-700">Compatibility</td>
                                            <td className="py-3 px-2 text-[#80B224] font-medium">Supports mainstream Ethernet</td>
                                            <td className="py-3 px-2 text-gray-600">Only supports dedicated networks</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-2 font-medium text-gray-700">Performance</td>
                                            <td className="py-3 px-2 text-gray-600">low latency, high throughput</td>
                                            <td className="py-3 px-2 text-[#80B224] font-medium">Ultra-low latency, high throughput</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-2 font-medium text-gray-700">Scalability</td>
                                            <td className="py-3 px-2 text-[#80B224] font-medium">Excellent, easy for large-scale deployment</td>
                                            <td className="py-3 px-2 text-gray-600">Limited by dedicated hardware</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Right side - Interactive Performance Chart */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-center mb-8">Performance Comparison</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* 延迟对比卡片 */}
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-center mb-4 text-blue-800">Network Latency</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                            <span className="font-medium text-gray-700">RoCE v2</span>
                                            <span className="text-2xl font-bold text-[#80B224]">2-6 μs</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                            <span className="font-medium text-gray-700">InfiniBand</span>
                                            <span className="text-2xl font-bold text-blue-600">~1.6 μs</span>
                                        </div>
                                        <div className="text-center text-sm text-gray-600 mt-4">
                                            <span className="inline-block px-3 py-1 bg-blue-200 rounded-full">
                                                Optimized for ultra-low latency
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* 带宽对比卡片 */}
                                <div className="bg-gradient-to-br from-[#80B224]/10 to-[#80B224]/20 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-center mb-4 text-[#80B224]">Network Bandwidth</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                            <span className="font-medium text-gray-700">RoCE v2</span>
                                            <span className="text-2xl font-bold text-[#80B224]">400G</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                            <span className="font-medium text-gray-700">InfiniBand</span>
                                            <span className="text-2xl font-bold text-[#80B224]">400G</span>
                                        </div>
                                        <div className="text-center text-sm text-gray-600 mt-4">
                                            <span className="inline-block px-3 py-1 bg-[#80B224]/20 rounded-full">
                                                Equal high-speed performance
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 总结 */}
                            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                                <p className="text-center text-gray-700">
                                    {/* <strong>Key Insight:</strong>  */}
                                    InfiniBand excels in ultra-low latency scenarios (~1.6 μs),
                                    while RoCE v2 offers competitive latency (2-4 μs with optimization) and equal bandwidth (400G)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cost Savings Section */}
            <div className='bg-[#F5F7F4]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-20 py-16">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">How Much Can RoCE v2 Save?</h2>
                    </SlideUp>

                    <SlideUp>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12 text-lg">
                            RoCE v2 offers significant cost savings compared to InfiniBand, especially for large-scale
                            deployments. Below are the average market prices for each solution (per port, 400Gbps):
                        </p>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* RoCE v2 Cost Card */}
                        <SlideUp>
                            <div className="bg-[#F5F7F4] rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-center mb-6 text-[#80B224]">RoCE v2 (400Gbps)</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium">Network Card:</span>
                                        <span className="text-gray-900 font-semibold">$1,350–$1,800</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium">Switch Port (64 Port):</span>
                                        <span className="text-gray-900 font-semibold">$300–$400</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium">Cabling (Transceiver + Fiber):</span>
                                        <span className="text-gray-900 font-semibold">$800–$1,200</span>
                                    </div>
                                    <div className="border-t pt-4 mt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-gray-800">Total (per port):</span>
                                            <span className="text-xl font-bold text-[#80B224]">$2,450 - $3,400</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>

                        {/* InfiniBand Cost Card */}
                        <SlideUp>
                            <div className="bg-[#F5F7F4] rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-center mb-6 text-gray-700">InfiniBand (400Gbps)</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium">Network Card:</span>
                                        <span className="text-gray-900 font-semibold">$1,350–$1,800</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium">Switch Port (32 Port):</span>
                                        <span className="text-gray-900 font-semibold">$700–$800</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium">Cabling (Transceiver + Fiber):</span>
                                        <span className="text-gray-900 font-semibold">$1,000–$1,700</span>
                                    </div>
                                    <div className="border-t pt-4 mt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-gray-800">Total (per port):</span>
                                            <span className="text-xl font-bold text-gray-700">$3,050- $4,300</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    {/* Savings Highlight */}
                    <SlideUp>
                        <div className="text-center">
                            <div className="inline-block bg-[#80B224] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg">
                                RoCE v2 saves up to 30% on networking costs compared to InfiniBand
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>

            <div className="bg-[#F9F9F9]">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                    Robust Supply Chain & Equipment Sourcing
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-l mb-4 sm:pr-10">
                                    Canopy Wave’s supply chain control and vendor relationships mean less waiting and more doing. Whether you're sourcing GPUs, networking gear, or storage systems, we take the hassle out of procurement and help you access the hardware you need—faster and at scale
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
                                            className="svg-gray"
                                            style={{
                                                width: 36,
                                                height: 36,
                                                minWidth: 36,  // 防止压缩
                                                minHeight: 36
                                            }}
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-[18px] group-hover:text-white">99.9% Uptime & 24/7 Support</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        Your AI workloads need to run around the clock, and so do we. With 99.9% uptime, enterprise-grade reliability, and 24/7 support, you can trust your infrastructure to stay online—and your team to stay productive
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
                                        <h3 className="font-bold text-[18px] group-hover:text-white">Full-Stack DCIM & Operational Visibility</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        Get complete transparency with our Data Center Infrastructure Management (DCIM) tools. From power and cooling to GPU utilization and system health, our intuitive dashboards give you real-time insights and control over every layer of your infrastructure
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
                                        <h3 className="font-bold text-[18px] group-hover:text-white">Start Building at Scale—Today</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        Canopy Wave’s private cloud solution gives you the power of hyperscale infrastructure, the speed of startup execution, and the peace of mind of enterprise support—all delivered with precision and purpose
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ready to Get Started Section */}
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
    )
}


