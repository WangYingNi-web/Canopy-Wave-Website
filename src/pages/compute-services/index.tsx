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
                        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
                            Our CPU instances are optimized for general-purpose, compute-heavy, and memory-bound applications, providing flexibility and performance at scale.
                        </p>
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