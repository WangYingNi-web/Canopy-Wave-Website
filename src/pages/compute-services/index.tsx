"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';

export default function ComputeServicesPage() {
    useScrollToHash();
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[720px] relative mt-[84px]">
                <Image
                    src="/compute/banner.svg"
                    alt="cpu-nodes"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                        <SlideUp>
                            <h1 className="text-6xl font-bold text-[#8CC63F] mt-16">
                                GPU COMPUTE
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-lg mt-8">
                                NVIDIA GPU for AI training & inference
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Highly Performant Section */}
            <div className="bg-[#F5F9F4] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="w-full md:w-1/2">
                            <Image src="/gpu.svg" alt="GPU" width={500} height={400} className="w-full" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-8">Massive Parallel Processing Power</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-8 text-lg">
                                    •AI workloads require performing millions (or billions) of mathematical operations simultaneously.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-8 text-lg">
                                    •GPUs have thousands of cores designed for parallel computation, ideal for training and running neural networks efficiently.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <div className="flex gap-4">
                                    <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.location.href = '/contact'}>
                                        Learn More
                                    </Button>
                                    <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.location.href = 'https://cloud.canopywave.io/'}>
                                        Launch GPU Clusters
                                    </Button>
                                </div>
                            </SlideUp>

                        </div>
                    </div>
                </div>
            </div>

            {/* GPU Cluster Features Section */}
            <div id="gpu-cloud" className='bg-[#F9F9F9] py-4'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="text-center mb-16">
                        <SlideUp>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">CANOPY WAVE ON-DEMAND GPU CLUSTER</h2>
                        </SlideUp>
                        <SlideUp>
                            <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Launch GPU Clusters
                            </Button>
                        </SlideUp>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* NVIDIA GPUs Card */}
                        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/compute/gpus.svg" alt="NVIDIA GPUs" width={36} height={36} className="mb-4" />
                            <h3 className="text-xl font-bold mb-4">NVIDIA GPUS</h3>
                            <p className="text-gray-600">
                                Featuring access to NVIDIA HGX H100, HGX H200, with connection of NVLINKS and 400G RoCEV2 or InfiniBand networking.
                            </p>
                        </div>

                        {/* Multi-GPU Instances Card */}
                        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/compute/multi.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4" />
                            <h3 className="text-xl font-bold mb-4">MULTI-GPU instances</h3>
                            <p className="text-gray-600">
                                Train and fine-tune AI models across instance types that best suits your need: 1x, 2x, 4x, 8x and up to 64 NVIDIA GPUs instances, real on-demand, billed by minute.
                            </p>
                        </div>

                        {/* Private Cloud Card */}
                        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Image src="/compute/cloud.svg" alt="Private Cloud" width={36} height={36} className="mb-4" />
                            <h3 className="text-xl font-bold mb-4">Canopy Wave Private Cloud</h3>
                            <p className="text-gray-600">
                                Best GPU cluster performance in the industry. With 99.99% up time. Have all you GPUs under same datacenter, your workload and privacy is protected.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Leadership Section */}
            <div className='bg-[#F5F9F4] py-4'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">LEADERSHIP IN AI-OPTIMIZED H100 AND H200</h2>
                            </SlideUp>
                            <SlideUp>
                                <ul className="space-y-4 text-lg text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#8CC63F] mt-1">▶</span>
                                        <p>The most high-end GPU platforms custom-built for AI and include large numbers of Tensor Cores, NVLink and Transformer Engine.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#8CC63F] mt-1">▶</span>
                                        <p>Tailored for modern AI workloads, and are benchmark leaders in training and inference performance.</p>
                                    </li>
                                </ul>
                            </SlideUp>

                        </div>
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/compute/h200.svg"
                                alt="NVIDIA H200 GPU"
                                width={500}
                                height={300}
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* H200 Section */}
            <div className="bg-[#F9F9F9] py-4">
                <div id="hgx-h200" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/2 p-6">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">NVIDIA HGX H200</h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    Unmatched Memory Bandwidth & Capacity for Large AI Models
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                    Launch H200 GPU Clusters
                                </Button>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <div className="flex items-start gap-4 p-6 rounded-lg shadow-sm">
                                <Image src="/compute/memory.svg" alt="Memory" width={96} height={96} className="mt-1" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">141 GB of HBM3e memory</h3>
                                        <p className="text-gray-600">Large language models (LLMs) and generative AI systems need to process huge datasets and massive parameter matrices. Speed and scale depend heavily on how fast and how much memory the GPU can access.</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-lg shadow-sm">
                                <Image src="/compute/fast.svg" alt="Bandwidth" width={36} height={36} className="mt-1" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">4.8 TB/s memory bandwidth</h3>
                                        <p className="text-gray-600">the fastest of any NVIDIA GPU to date</p>
                                    </div>
                                </FadeIn>

                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-lg shadow-sm">
                                <Image src="/compute/model.svg" alt="Workloads" width={36} height={36} className="mt-1" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">Optimized for memory-bound workloads, including:</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li>• Large transformer models</li>
                                            <li>• Retrieval-augmented generation (RAG)</li>
                                            <li>• Generative vision-language models</li>
                                            <li>• Inference on massive context windows (e.g. greater than 100k tokens)</li>
                                        </ul>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NVIDIA HGX H100 Section */}
            <div className='bg-[#F5F9F4] py-4'>
                <div id="hgx-h100" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 text-center">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">NVIDIA HGX H100</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-6">
                            Transformer Engine: Purpose-Built for Training and Running Large AI Models
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] mb-12" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                            Launch H100 GPU Clusters
                        </Button>
                    </SlideUp>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="p-6 border border-gray-200 rounded-lg transition-colors duration-300 hover:bg-[#8CC63F] hover:text-white group">
                            <Image src="/compute/accuracy.svg" alt="Higher Accuracy" width={36} height={36} className="mx-auto mb-4" />
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Higher Accuracy</h3>
                            <p className="text-gray-600 group-hover:text-white">Transformer Engine uses FP8 precision (8-bit floating point) with dynamic range scaling</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg transition-colors duration-300 hover:bg-[#8CC63F] hover:text-white group">
                            <Image src="/compute/performance.svg" alt="Better Performance" width={36} height={36} className="mx-auto mb-4" />
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Better Performance</h3>
                            <p className="text-gray-600 group-hover:text-white">Delivers up to 9x faster training and 30x faster inference vs old-generation GPUs like A100</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg transition-colors duration-300 hover:bg-[#8CC63F] hover:text-white group">
                            <Image src="/compute/light.svg" alt="Flexible Configurations" width={36} height={36} className="mx-auto mb-4" />
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Flexible Configurations</h3>
                            <p className="text-gray-600 group-hover:text-white">Dynamically switches between FP8 and FP16/FP32 for optimal accuracy + speed</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg transition-colors duration-300 hover:bg-[#8CC63F] hover:text-white group">
                            <Image src="/compute/compute.svg" alt="Better Access" width={36} height={36} className="mx-auto mb-4" />
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Better Access to compute</h3>
                            <p className="text-gray-600 group-hover:text-white">Includes 72 billion transistors, 80 GB of HBM3 memory, and supports NVLink and PCIe 5.0 for fast interconnects</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why NVIDIA Section */}
            <div className='bg-[#F9F9F9] py-4'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">WHY NVIDIA</h2>
                        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
                            CUDA is the de facto standard for AI/ML workloads, with deep integration into frameworks like TensorFlow and PyTorch. It’s not just hardware, but also the ecosystem that forms massive compatibility.
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex justify-center gap-4">
                            <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Launch GPU Clusters
                            </Button>
                            <Button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border border-gray-200" onClick={() => window.location.href = '/contact'}>
                                Learn More
                            </Button>
                        </div>
                    </SlideUp>
                </div>
            </div>

            {/* CPU Servers Section */}
            <div className='bg-[#F5F9F4] py-4'>
                <div id="cpu-node" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">CPU SERVERS</h2>
                        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
                            Our CPU instances are optimized for general-purpose, compute-heavy, and memory-bound applications, providing flexibility and performance at scale.
                        </p>
                        <div className="flex justify-center gap-4 mb-8">
                            <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Launch CPU Servers
                            </Button>
                            <Button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border border-gray-200" onClick={() => window.location.href = '/contact'}>
                                Learn More
                            </Button>
                        </div>
                    </SlideUp>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="p-6 bg-[#F5F9F4] rounded-lg text-left">
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/compute/model.svg" alt="CPU Icon" width={36} height={36} />
                                <h3 className="text-2xl font-bold">Processor</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Utilize the latest 6th-Gen Intel Xeon Scalable processors, offering up to 64 vCPUs per instance.
                            </p>
                        </div>

                        <div className="p-6 bg-[#F5F9F4] rounded-lg text-left">
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/compute/memory.svg" alt="Memory Icon" width={36} height={36} />
                                <h3 className="text-2xl font-bold">Memory</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Each instance supports up to 256TB of DIMM, delivering high throughput for compute-intensive workloads.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intel Xeon Processors Section */}
            <div className='bg-[#F9F9F9] py-4'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">INTEL XEON SCALABLE PROCESSORS</h2>
                        <h3 className="text-3xl font-bold mb-6 text-center">(6TH GEN)</h3>
                        <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                            The latest generation utilizes a disaggregated design with multiple compute and I/O chiplets interconnected via EMIB (Embedded Multi-Die Interconnect Bridge).
                        </p>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/compute/core.svg" alt="Core Count" width={36} height={36} />
                                <h3 className="text-xl font-bold">CORE COUNT & FREQUENCY</h3>
                            </div>
                            <p className="text-gray-600">
                                Engineering samples (ES1) of Granite Rapids feature up to 56 cores (1.1-2.7 GHz base/turbo), with production models expected to reach 84-90 cores.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/compute/memory.svg" alt="Memory Support" width={36} height={36} />
                                <h3 className="text-xl font-bold">MEMORY SUPPORT</h3>
                            </div>
                            <p className="text-gray-600">
                                12-channel DDR5-6400 with MCR DIMMs, delivering up to 1.6x higher bandwidth than previous generations.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/compute/cache.svg" alt="Cache" width={36} height={36} />
                                <h3 className="text-xl font-bold">CACHE & INTERCONNECT</h3>
                            </div>
                            <p className="text-gray-600">
                                Each compute tile includes 2MB L2 cache and 4MB L3 cache, while the platform supports PCIe Gen5 (136 lanes) and CXL 2.0 for GPU/FPGA acceleration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced GPU Cluster Performance Section */}
            <div className="bg-[#F5F9F4] py-4">
                <div id="hgx-h200" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/2 p-6">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Enhanced GPU cluster performance</h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    canopywave uses powerful and efficient CPUs to enable higher utility and performance from GPU clusters.
                                    Let CPUs handle generalized computing needs, freeing GPUs to focus on high-intensity tasks.
                                </p>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <div className="flex items-start gap-4 p-6 rounded-lg shadow-sm">
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">Parallel Processing & AI Acceleration</h3>
                                        <p className="text-gray-600">Modern CPU servers leverage AVX-512 and VNNI (Vector Neural Network Instructions) to boost AI inference throughput by 2-4x compared to older architectures.</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-lg shadow-sm">
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">Multi-Threading</h3>
                                        <p className="text-gray-600">Hyper-Threading enables 112 threads on a 56-core CPU, optimizing multi-tasking efficiency for virtualization and HPC workloads.</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-lg shadow-sm">
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">Energy Efficiency</h3>
                                        <p className="text-gray-600">Intel’s Dynamic Voltage and Frequency Scaling (DVFS) and RAPL (Runtime Average Power Limiting) reduce idle power consumption by 30%, while TCO improvements reach 68% through server consolidation (5-10:1 replacement ratio). </p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bare Metal GPU Section */}
            <div className='bg-[#F9F9F9] py-4'>
                <div id="bare-metal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">BARE METAL GPU CLUSTER IN PRIVATE CLOUD</h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    Private, secure GPU cluster for large AI deployments. Short or long term contracts for 256 to 2000 GPUs in InfiniBand or RoCEV2 networking.
                                </p>
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.location.href = '/pricing'}>
                                    Get pricing
                                </Button>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/gpu.svg"
                                alt="NVIDIA GPU Board"
                                width={600}
                                height={400}
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* NVIDIA GPU Products Section */}
            <div className='bg-[#F5F9F4] py-4'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">GET THE LATEST AND GREATEST NVIDIA GPUS</h2>
                        <h3 className="text-3xl font-bold mb-6 text-center">MANAGED AND TUNED BY WORLD LEADING INFRASTRUCTURE TEAM</h3>
                        <p className="text-gray-600 mb-16 text-center max-w-4xl mx-auto">
                            Canopy Wave provides the best performing GPUs clusters with 99.99% uptime, 24/7 support to maximize reliability. We use highest safety stander to ensure data security.
                        </p>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* HGX B200 Card */}
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-4 text-center">NVIDIA HGX B200</h3>
                                <Image
                                    src="/compute/b200.svg"
                                    alt="NVIDIA HGX B200"
                                    width={400}
                                    height={300}
                                    className="w-full rounded-lg mb-4"
                                />
                                <p className="text-gray-600">
                                    The NVIDIA HGX B200 is a unified AI platform designed to support end-to-end AI development and deployment for businesses of all sizes and at any stage of their AI journey. Powered by eight NVIDIA Blackwell GPUs and fifth-generation NVIDIA® NVLink® interconnect technology, the HGX B200 delivers up to 3× faster training and 15× faster inference performance compared to previous-generation systems. Built on the NVIDIA Blackwell architecture, it efficiently handles a wide range of AI workloads—from large language models and recommender systems to real-time chatbots—making it the ideal solution for accelerating enterprise AI initiatives.
                                </p>
                            </div>
                        </div>

                        {/* HGX H200 Card */}
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-4 text-center">NVIDIA HGX H200</h3>
                                <Image
                                    src="/compute/h200-1.svg"
                                    alt="NVIDIA HGX H200"
                                    width={400}
                                    height={300}
                                    className="w-full rounded-lg mb-4"
                                />
                                <p className="text-gray-600">
                                    The NVIDIA H200 Tensor Core GPU delivers breakthrough performance and memory capabilities, setting a new standard for generative AI and high-performance computing (HPC) workloads. As the first GPU to feature HBM3e memory, the H200 offers greater capacity and bandwidth, enabling faster training and inference for large language models (LLMs) and significantly accelerating scientific computing tasks across HPC applications.
                                </p>
                            </div>
                        </div>

                        {/* HGX H100 Card */}
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-4 text-center">NVIDIA HGX H100</h3>
                                <Image
                                    src="/compute/h100.svg"
                                    alt="NVIDIA HGX H100"
                                    width={400}
                                    height={300}
                                    className="w-full rounded-lg mb-4"
                                />
                                <p className="text-gray-600">
                                    The NVIDIA H100 Tensor Core GPU offers outstanding performance, scalability, and security across a wide range of workloads. Built on the advanced NVIDIA Hopper™ architecture, the H100 accelerates large language models (LLMs) by up to 30×, setting a new benchmark for conversational AI. It also features a dedicated Transformer Engine designed to efficiently power trillion-parameter language models.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cluster Visibility Section */}
            <div className='bg-[#F9F9F9] py-4'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">GET FULL VISIBILITY OF YOUR CLUSTER</h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    Canopy Wave DCIM Platform provide you with full visibility of the cluster. Getting to know your utilization rate, health condition, and uptime in one single dashboard to get your cluster fully under control.
                                </p>
                                <p className="text-gray-600 mb-8 text-lg">
                                    Our DCIM platform can help early detect possible failure and send out corresponding work orders to minimize interruption and keep industry leading performance and uptim
                                </p>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/compute/nvidia-board.jpg"
                                alt="NVIDIA GPU Board"
                                width={600}
                                height={400}
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ready to Get Started Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <SlideUp>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to get started?</h2>

                </SlideUp>
                <SlideUp>
                    <p className="text-gray-600 mb-8 mx-auto text-lg">
                        Create your Canopy Wave cloud account to launch GPU clusters immediately or contact us to reserve a long term contract.
                    </p>
                </SlideUp>
                <SlideUp>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                            Launch GPU instances
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>
                            Contact sales
                        </Button>
                    </div>
                </SlideUp>
            </div>
            <Footer />
        </main>
    );
}