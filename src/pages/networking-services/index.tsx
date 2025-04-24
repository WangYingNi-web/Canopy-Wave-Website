"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function NetworkingServices() {
    useScrollToHash();
    return (
        <main className="min-h-screen relative">
            <Header />
            <div className="w-full h-[600px] relative mt-20">
                <Image
                    src="/cube.svg"
                    alt="cube"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                        <h1 className="text-5xl font-bold text-[#8CC63F] mb-6">
                            NETWORKING<br />
                            SERVICES
                        </h1>
                        <p className="text-gray-600 text-lg mb-12">
                            Get performant, secure, and reliable storage for AI.
                        </p>
                    </div>
                </div>
            </div>

            {/* NVIDIA QUANTUM INFINIBAND CLUSTER NETWORKING */}
            <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 -mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* 左侧标题部分 */}
                    <div className="lg:col-span-6">
                        <h2 className="text-4xl font-bold mb-6">
                            NVIDIA<br />
                            QUANTUM INFINIBAND CLUSTER NETWORKING
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Get highly performant multi-node interconnect—at supercomputing scale.
                        </p>
                        <p className="text-gray-600">
                            We&apos;ve collaborated with NVIDIA to deploy NVIDIA Quantum InfiniBand-based cluster networks to provide industry-leading performance for GenAI.
                        </p>
                    </div>

                    {/* 右侧特性部分 */}
                    <div className="lg:col-span-6">
                        <div className="border-b border-gray-400 pb-12 hover:bg-[#80B224] group transition-all duration-300 cursor-pointer p-4 rounded-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2">
                                    <Image
                                        src="/optimized.png"
                                        alt="Leading Performance"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="font-bold text-xl group-hover:text-white">LEADING PERFORMANCE</h3>
                            </div>
                            <p className="text-gray-600 group-hover:text-white">Our SHARP-enabled NVIDIA Quantum InfiniBand network provides hyper-effective bandwidth—giving your teams the scale and speed of communication between NVIDIA GPUs they need to make the next GenAI breakthrough model</p>
                        </div>

                        <div className="border-b border-gray-400 pb-12 hover:bg-[#80B224] group transition-all duration-300 cursor-pointer p-4 rounded-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2">
                                    <Image
                                        src="/optimized.png"
                                        alt="Massive Scale"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="font-bold text-xl group-hover:text-white">MASSIVE SCALE</h3>
                            </div>
                            <p className="text-gray-600 group-hover:text-white">Create 300k+ GPU megaclusters via interconnected 100,000-strong GPU superclusters to unlock a new scale of compute</p>
                        </div>

                        <div className="border-b border-gray-400 pb-12 hover:bg-[#80B224] group transition-all duration-300 cursor-pointer p-4 rounded-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2">
                                    <Image
                                        src="/optimized.png"
                                        alt="Ultra-fast Connection"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="font-bold text-xl group-hover:text-white">ULTRA-FAST CONNECTION</h3>
                            </div>
                            <p className="text-gray-600 group-hover:text-white">One-to-one non-blocking channels get GPUs communicating with sub-microsecond latency</p>
                        </div>

                        <div className="border-b border-gray-400 pb-12 hover:bg-[#80B224] group transition-all duration-300 cursor-pointer p-4 rounded-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2">
                                    <Image
                                        src="/optimized.png"
                                        alt="Superior Throughput"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="font-bold text-xl group-hover:text-white">SUPERIOR THROUGHPUT</h3>
                            </div>
                            <p className="text-gray-600 group-hover:text-white">Experience bidirectional throughput between NVIDIA HGX H100 8GPU Nodes—topping 3.2Tbps per Node for an incredibly fast connection</p>
                        </div>

                        <div className="border-b border-gray-400 pb-12 hover:bg-[#80B224] group transition-all duration-300 cursor-pointer p-4 rounded-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="border border-dashed border-gray-300 p-2">
                                    <Image
                                        src="/optimized.png"
                                        alt="Faster Time to Market"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="font-bold text-xl group-hover:text-white">FASTER TIME TO MARKET</h3>
                            </div>
                            <p className="text-gray-600 group-hover:text-white">With up to 15% higher effective throughput than alternatives, run your GPU clusters at their maximum potential and accelerate time to market</p>
                        </div>
                    </div>



                </div>
            </div>

            {/* Virtual Private Cloud 部分 */}
            <div id="private-cloud" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20">
                <h2 className="text-4xl font-bold text-center mb-4">VIRTUAL PRIVATE CLOUD</h2>
                <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16">
                    Create virtual, accelerated networks to manage your cloud resources on CoreWeave—powered by NVIDIA BlueField-3 DPUs. Securely and efficiently connect compute, storage, and everything else for GenAI.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="border border-gray-200 p-8 rounded-lg text-center hover:bg-[#80B224] group transition-all duration-300 cursor-pointer">
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/optimized.png"
                                alt="Enhanced Security"
                                width={40}
                                height={40}
                            />
                        </div>
                        <h3 className="font-bold text-xl mb-4 group-hover:text-white">ENHANCED SECURITY</h3>
                        <p className="text-gray-600 group-hover:text-white">Deploy VPC networking to ensure customer network traffic stays private.</p>
                    </div>

                    <div className="border border-gray-200 p-8 rounded-lg text-center hover:bg-[#80B224] group transition-all duration-300 cursor-pointer">
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/optimized.png"
                                alt="Optimized GPU Compute"
                                width={40}
                                height={40}
                            />
                        </div>
                        <h3 className="font-bold text-xl mb-4 group-hover:text-white">OPTIMIZED GPU COMPUTE</h3>
                        <p className="text-gray-600 group-hover:text-white">Offload, accelerate, and isolate networking from GPU nodes so all your compute capacity can focus on AI workloads.</p>
                    </div>

                    <div className="border border-gray-200 p-8 rounded-lg text-center hover:bg-[#80B224] group transition-all duration-300 cursor-pointer">
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/optimized.png"
                                alt="Consistent Performance"
                                width={40}
                                height={40}
                            />
                        </div>
                        <h3 className="font-bold text-xl mb-4 group-hover:text-white">CONSISTENT PERFORMANCE</h3>
                        <p className="text-gray-600 group-hover:text-white">Get consistent and predictable bandwidth between GPU nodes and storage clusters.</p>
                    </div>

                    <div className="border border-gray-200 p-8 rounded-lg text-center hover:bg-[#80B224] group transition-all duration-300 cursor-pointer">
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/optimized.png"
                                alt="Hybrid or Multi-cloud Strategies"
                                width={40}
                                height={40}
                            />
                        </div>
                        <h3 className="font-bold text-xl mb-4 group-hover:text-white">HYBRID OR MULTI-CLOUD STRATEGIES</h3>
                        <p className="text-gray-600 group-hover:text-white">Connect your VPCs to on-prem networks or resources on traditional hyperscalers with Direct Connect</p>
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <h2 className="text-5xl font-bold mb-6">
                        INCREDIBLY FAST NETWORKING<br />
                        SERVICES FOR GENAI
                    </h2>
                    <p className="text-gray-600 text-xl mb-12">
                        Don&apos;t let a shoddy network slow you down. Get the absolute most out of your GPUs.
                    </p>
                    <button className="bg-[#8CC63F] text-white px-8 py-3 rounded-lg hover:bg-[#80B224] transition-all duration-300">
                        Get started
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}