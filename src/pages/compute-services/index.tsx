"use client";

import Head from 'next/head';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function ComputeServicesPage() {
    useScrollToHash();
    return (
        <main className="min-h-screen text-gray-600">
            <Header />
            <Head>
               <title>Canopy Wave - GPUs for AI Models and Innovation</title>
            </Head>
            {/* Hero Section */}
            <div className="w-full h-[490px] relative mt-[84px] bg-[#F5F7F4]">
                <Image
                    src="/compute/banner.svg"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-shadow-lg">
                                Compute Services
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8">
                                Canopy Wave uses Virtualization technology to provide world leading <br /> performance GPU for AI training & inference
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Highly Performant Section */}
            <div className="bg-[#F5F7F4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <Image src="/compute/processing-power.svg" alt="Processing Power" width={500} height={400} className="w-[93%]" />
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-4 sm:mb-8">Massive Parallel Processing Power</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-2 text-l">
                                    AI workloads require performing millions (or billions) of mathematical operations simultaneously
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-4 text-l">
                                    GPUs have thousands of cores designed for parallel computation, ideal for training and running neural networks efficiently
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <div className="flex gap-4">
                                    <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.location.href = '/contact'}>
                                        Learn More
                                    </Button>
                                    <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                        Launch GPU Clusters
                                    </Button>
                                </div>
                            </SlideUp>

                        </div>
                    </div>
                </div>
            </div>

            {/* GPU Cluster Features Section */}
            <div id="gpu-cloud" className='bg-[#F9F9F9]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">Canopy Wave on-demand GPU Cluster</h2>
                        </SlideUp>
                        <SlideUp>
                            <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Launch GPU Clusters
                            </Button>
                        </SlideUp>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* NVIDIA GPUs Card */}
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <Image src="/compute/gpus.svg" alt="NVIDIA GPUs" width={36} height={36} className="mb-4 svg-gray" />
                            <h3 className="text-l font-bold mb-4">NVIDIA GPUs</h3>
                            <p className="text-gray-600 text-l">
                                Featuring access to NVIDIA HGX H100, HGX H200, with connection of NVLINKS and 400G RoCEV2 or InfiniBand networking
                            </p>
                        </div>

                        {/* Multi-GPU Instances Card */}
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <Image src="/compute/multi.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4 svg-gray" />
                            <h3 className="text-l font-bold mb-4">MULTI-GPU instances</h3>
                            <p className="text-gray-600 text-l">
                                Train and fine-tune AI models across instance types that best suits your need: 1x, 2x, 4x, 8x and up to 64 NVIDIA GPUs instances, real on-demand, billed by minute
                            </p>
                        </div>

                        {/* Private Cloud Card */}
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <Image src="/compute/cloud.svg" alt="Private Cloud" width={36} height={36} className="mb-4 svg-gray" />
                            <h3 className="text-l font-bold mb-4">Canopy Wave private cloud</h3>
                            <p className="text-gray-600 text-l">
                                Best GPU cluster performance in the industry. With 99.99% up time. Have all you GPUs under same datacenter, your workload and privacy is protected
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div className='bg-[#F5F7F4]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">Leadership in AI-Optimized <br /> H100 and H200</h2>
                            </SlideUp>
                            <SlideUp>
                                <ul className="space-y-4 text-l text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <p>The most high-end GPU platforms custom-built for AI and include large numbers of Tensor Cores, NVLink and Transformer Engine</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <p>Tailored for modern AI workloads, and are benchmark leaders in training <br /> and inference performance</p>
                                    </li>
                                </ul>
                            </SlideUp>

                        </div>
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <Image
                                    src="/compute/h200.svg"
                                    alt="NVIDIA H200 GPU"
                                    width={500}
                                    height={300}
                                    className="w-full rounded-lg"
                                />
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>

            {/* H200 Section */}
            <div id="hgx-h200" className="bg-[#F9F9F9] sm:py-20 py-12">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/2 p-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">NVIDIA HGX H200</h2>
                                <p className="text-gray-600 mb-8 text-l">
                                    Unmatched Memory Bandwidth & Capacity for Large AI Models
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                    Launch H200 GPU Clusters
                                </Button>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2 border-l border-gray-200">
                            <div className="flex items-start gap-4 p-6 border-b border-gray-200">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <Image src="/compute/memory.svg" alt="Memory" width={36} height={36} className="mt-1 svg-gray" />
                                        <FadeIn>
                                            <h3 className="text-l font-bold">141 GB of HBM3e memory</h3>
                                        </FadeIn>
                                    </div>
                                    <FadeIn>
                                        <ul className="text-gray-600 space-y-1 pl-[53px]">
                                            <li className="flex items-start">
                                                <span>Large language models (LLMs) and generative AI systems need to process huge datasets and massive parameter matrices. Speed and scale depend heavily on how fast and how much memory the GPU can access</span>
                                            </li>
                                        </ul>
                                    </FadeIn>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 border-b border-gray-200">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <Image src="/compute/fast.svg" alt="Bandwidth" width={36} height={36} className="mt-1 svg-gray" />
                                        <FadeIn>
                                            <h3 className="text-l font-bold">4.8 TB/s memory bandwidth</h3>
                                        </FadeIn>
                                    </div>
                                    <FadeIn>
                                        <ul className="text-gray-600 space-y-1 pl-[53px]">
                                            <li className="flex items-start">
                                                <span>the fastest of any NVIDIA GPU to date</span>
                                            </li>
                                        </ul>
                                    </FadeIn>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 border-b-[1px] border-b-gray-200">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <Image src="/compute/model.svg" alt="Workloads" width={34} height={34} className="mt-1 svg-gray" />
                                        <FadeIn>
                                            <h3 className="text-l font-bold">Optimized for memory-bound workloads, including:</h3>
                                        </FadeIn>
                                    </div>
                                    <FadeIn>
                                        <ul className="text-gray-600 space-y-1 pl-[53px]">
                                            <li>• Large transformer models</li>
                                            <li>• Retrieval-augmented generation (RAG)</li>
                                            <li>• Generative vision-language models</li>
                                            <li>• Inference on massive context windows (e.g. greater than 100k tokens)</li>
                                        </ul>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NVIDIA HGX H100 Section */}
            <div id="hgx-h100" className="bg-[#F5F7F4] sm:py-20 py-12">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/2 p-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">NVIDIA HGX H100</h2>
                                <p className="text-gray-600 mb-8 text-l">
                                    Transformer Engine: Purpose-Built for Training and Running Large AI Models
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                    Launch H100 GPU Clusters
                                </Button>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4 border-l border-gray-200">
                            <div className="flex items-start gap-4 p-6 border-b border-gray-200">
                                <Image src="/compute/accuracy.svg" alt="Higher Accuracy" width={36} height={36} className="-mt-1 svg-gray" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-4 text-l">Higher Accuracy</h3>
                                        <p className="text-gray-600 text-l">Transformer Engine uses FP8 precision (8-bit floating point) with dynamic range scaling</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-6 border-b border-gray-200">
                                <Image src="/compute/performance.svg" alt="Better Performance" width={36} height={36} className="-mt-1 svg-gray" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-4 text-l">Better Performance</h3>
                                        <p className="text-gray-600 text-l">Delivers up to 9x faster training and 30x faster inference vs old-generation GPUs like A100</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-6 border-b border-gray-200">
                                <Image src="/compute/light.svg" alt="Flexible Configurations" width={36} height={36} className="-mt-1 svg-gray" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-4 text-l">Flexible Configurations</h3>
                                        <p className="text-gray-600 text-l">Dynamically switches between FP8 and FP16/FP32 for optimal accuracy + speed</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-6 border-b border-gray-200">
                                <Image src="/compute/compute.svg" alt="Better Access" width={36} height={36} className="-mt-1 svg-gray" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-4 text-l">Better Access to compute</h3>
                                        <p className="text-gray-600 text-l">Includes 72 billion transistors, 80 GB of HBM3 memory, and supports NVLink and PCIe 5.0 for fast interconnects</p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why NVIDIA Section */}
            <div className='bg-[#F9F9F9] sm:py-20 py-12'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">Why NVIDIA</h2>
                        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-l">
                            CUDA is the de facto standard for AI/ML workloads, with deep integration into frameworks like TensorFlow and PyTorch. It’s not just hardware, but also the ecosystem that forms massive compatibility
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
            <div id="cpu-node" className='bg-[#F5F7F4] py-16 sm:py-20'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-16">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <Image
                                    src="/compute/cpu-servers.svg"
                                    alt="Cpu Servers"
                                    width={550}
                                    height={400}
                                    className="w-full"
                                />
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">CPU Nodes</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-l leading-relaxed">
                                    Our CPU instances are optimized for general-purpose, compute-heavy, and memory-bound applications, providing flexibility and performance at scale
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <div className="flex flex-col sm:flex-row gap-6 pt-2">
                                    <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] px-8 py-3" onClick={() => window.location.href = '/contact'}>
                                        Learn More
                                    </Button>
                                    <Button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                        Launch CPU Servers
                                    </Button>
                                </div>
                            </SlideUp>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <div className="p-8 text-left rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="rounded-lg">
                                    <Image src="/compute/model.svg" alt="CPU Icon" width={36} height={36} className='svg-gray' />
                                </div>
                                <h3 className="text-l font-bold">Processor</h3>
                            </div>
                            <p className="text-gray-600 text-l leading-relaxed">
                                Utilize the latest 6th-Gen Intel Xeon Scalable processors, offering up to 64 vCPUs per instance
                            </p>
                        </div>

                        <div className="p-8 text-left rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="rounded-lg">
                                    <Image src="/compute/memory.svg" alt="Memory Icon" width={36} height={36} className='svg-gray' />
                                </div>
                                <h3 className="text-l font-bold">Memory</h3>
                            </div>
                            <p className="text-gray-600 text-l leading-relaxed">
                                Each instance supports up to 256TB of DIMM, delivering high throughput for compute-intensive workloads
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intel Xeon Processors Section */}
            <div className='bg-[#F9F9F9]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6 text-center">Intel Xeon Scalable Processors</h2>
                        <h3 className="text-3xl font-black mb-6 text-center">(6th Gen)</h3>
                        <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                            The latest generation utilizes a disaggregated design with multiple compute and I/O chiplets interconnected via EMIB (Embedded Multi-Die Interconnect Bridge)
                        </p>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/compute/core.svg" alt="Core Count" width={36} height={36} className='svg-gray' />
                                <h3 className="text-l font-bold">Core count & frequency</h3>
                            </div>
                            <p className="text-gray-600 text-l">
                                Engineering samples (ES1) of Granite Rapids feature up to 56 cores (1.1-2.7 GHz base/turbo), with production models expected to reach 84-90 cores
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/compute/memory.svg" alt="Memory Support" width={36} height={36} className='svg-gray' />
                                <h3 className="text-l font-bold">Memory support</h3>
                            </div>
                            <p className="text-gray-600 text-l">
                                12-channel DDR5-6400 with MCR DIMMs, delivering up to 1.6x higher bandwidth than previous generations
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <Image src="/compute/cache.svg" alt="Cache" width={36} height={36} className='svg-gray' />
                                <h3 className="text-l font-bold">Cache & interconnect</h3>
                            </div>
                            <p className="text-gray-600 text-l">
                                Each compute tile includes 2MB L2 cache and 4MB L3 cache, while the platform supports PCIe Gen5 (136 lanes) and CXL 2.0 for GPU/FPGA acceleration
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced GPU Cluster Performance Section */}
            <div className="bg-[#F5F7F4]">
                <div id="hgx-h200" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/2 p-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">Enhanced GPU cluster performance</h2>
                                <p className="text-gray-600 mb-8 text-l">
                                    Canopy Wave uses powerful and efficient CPUs to enable higher utility and performance from GPU clusters.
                                    Let CPUs handle generalized computing needs, freeing GPUs to focus on high-intensity tasks
                                </p>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8 border-l border-gray-200">
                            <div className="flex items-start gap-4 p-6 shadow-sm border-b border-gray-200">
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-l">Parallel processing & AI acceleration</h3>
                                        <p className="text-gray-600 text-l">Modern CPU servers leverage AVX-512 and VNNI (Vector Neural Network Instructions) to boost AI inference throughput by 2-4x compared to older architectures</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-6 shadow-sm border-b border-gray-200">
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-l">Multi-threading</h3>
                                        <p className="text-gray-600 text-l">Hyper-Threading enables 112 threads on a 56-core CPU, optimizing multi-tasking efficiency for virtualization and HPC workloads</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-6 shadow-sm border-b border-gray-200">
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-l">Energy efficiency</h3>
                                        <p className="text-gray-600 text-l">Intel’s Dynamic Voltage and Frequency Scaling (DVFS) and RAPL (Runtime Average Power Limiting) reduce idle power consumption by 30%, while TCO improvements reach 68% through server consolidation (5-10:1 replacement ratio) </p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bare Metal GPU Section */}
            <div className='bg-[#F9F9F9]'>
                <div id="bare-metal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">Bare metal GPU cluster in private cloud</h2>
                                <p className="text-gray-600 mb-8 text-l">
                                    Private, secure GPU cluster for large AI deployments. Short or long term contracts for 256 to 2000 GPUs in InfiniBand or RoCEV2 networking
                                </p>
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.location.href = '/pricing'}>
                                    Get pricing
                                </Button>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <Image
                                    src="/compute/bare-metal.svg"
                                    alt="Bare Metal"
                                    width={580}
                                    height={400}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>

            {/* NVIDIA GPU Products Section */}
            <div className='bg-[#F5F7F4]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6 text-center">Get the latest and greatest NVIDIA GPUs</h2>
                        <p className="text-gray-600 text-l mb-16 text-center max-w-4xl mx-auto">
                            Canopy Wave provides the best performing GPUs clusters with 99.99% uptime, 24/7 support to maximize reliability. We use highest safety stander to ensure data security
                        </p>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* HGX B200 Card */}
                        <div className="rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                            <div>
                                <div className="relative h-64 mb-8 bg-black rounded-xl overflow-hidden">
                                    <Image
                                        src="/compute/b200.svg"
                                        alt="NVIDIA HGX B200"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <h3 className="text-l font-bold mb-4">NVIDIA HGX B200</h3>
                                <p className="text-gray-600 text-l leading-relaxed">
                                    The NVIDIA HGX B200, powered by eight NVIDIA Blackwell GPUs and fifth-generation NVLink™, delivers up to 3× faster training and 15× faster inference compared to previous generations, making it the ideal unified AI platform for businesses at any stage
                                </p>
                            </div>
                        </div>

                        {/* HGX H200 Card */}
                        <div className="rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                            <div>
                                <div className="relative h-64 mb-8 bg-black rounded-xl overflow-hidden">
                                    <Image
                                        src="/compute/h200-1.svg"
                                        alt="NVIDIA HGX H200"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <h3 className="text-l font-bold mb-4">NVIDIA HGX H200</h3>
                                <p className="text-gray-600 text-l leading-relaxed">
                                    The first GPU featuring HBM3e memory, the H200 sets new standards for generative AI and HPC workloads with unprecedented memory capacity and bandwidth, significantly accelerating LLM training and inference performance
                                </p>
                            </div>
                        </div>

                        {/* HGX H100 Card */}
                        <div className="rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                            <div>
                                <div className="relative h-64 mb-8 bg-black rounded-xl overflow-hidden">
                                    <Image
                                        src="/compute/h100.svg"
                                        alt="NVIDIA HGX H100"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <h3 className="text-l font-bold mb-4">NVIDIA HGX H100</h3>
                                <p className="text-gray-600 text-l leading-relaxed">
                                    Built on the NVIDIA Hopper™ architecture with dedicated Transformer Engine, the H100 accelerates LLMs by up to 30×, setting new benchmarks for conversational AI and efficiently powering trillion-parameter language models
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cluster Visibility Section */}
            <div className='bg-[#F9F9F9]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl text-gray-600 font-black mb-6">Get full visibility of your Cluster</h2>
                                <p className="text-gray-600 mb-8 text-l">
                                    Canopy Wave DCIM Platform provide you with full visibility of the cluster. Getting to know your utilization rate, health condition, and uptime in one <br /> single dashboard to get your cluster fully under control
                                </p>
                                <p className="text-gray-600 mb-8 text-l">
                                    Our DCIM platform can help early detect possible failure and send out corresponding work orders to minimize interruption and keep industry <br /> leading performance and uptime
                                </p>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/compute/cluster.svg"
                                alt="Cluster"
                                width={600}
                                height={400}
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <video
                className="w-[400px] h-[400px] mx-auto rounded-lg"
                autoPlay
                muted
                loop
            >
                <source src="/videos/aaaa.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            {/* Ready to Get Started Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32 overflow-hidden">
                <BackgroundTransition
                    defaultImage="/contact-section1.webp"
                    activeImage="/contact-section2.webp"
                    className="w-full h-full absolute inset-0"
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-600 mb-6">Ready to get started?</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-8 mx-auto text-l">
                            Create your Canopy Wave cloud account to launch GPU clusters immediately or contact us to reserve a long term contract
                        </p>
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

            <Footer />
        </main>
    );
}