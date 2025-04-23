"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CloudClusterPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
                <Image
                    src="/cube.png"
                    alt="3D Cube"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            {/* Highly Performant Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/2">
                        <Image src="/gpu.png" alt="GPU" width={500} height={300} className="w-full" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">HIGHLY PERFORMANT GPUS FOR AI</h2>
                        <p className="text-gray-600 mb-6">
                            Access to latest portfolio of highly performant NVIDIA GPUs, all set up with cutting-edge tech, auto-optimized GPU clusters, supported by NVIDIA, fully certified for AI workloads and ready to use.
                        </p>
                        <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>

            {/* NVIDIA HGX H100 Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 text-center">
                <h2 className="text-4xl font-bold mb-4">NVIDIA HGX H100</h2>
                <p className="text-gray-600 mb-6">
                    Use an industry-leading platform for building and deploying the latest GenAI applications
                </p>
                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] mb-12">
                    Try Control Panel
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <Image src="/optimized.png" alt="Optimized Stack" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="font-bold mb-2">OPTIMIZED STACK</h3>
                        <p className="text-gray-600">Pre-qualified and optimized GPU and AI drivers</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <Image src="/optimized.png" alt="Dedicated Resource" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="font-bold mb-2">DEDICATED RESOURCE</h3>
                        <p className="text-gray-600">Fully secured resources with the flexibility to optimize your stacks and application</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <Image src="/optimized.png" alt="High Performance" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="font-bold mb-2">HIGH PERFORMANCE</h3>
                        <p className="text-gray-600">Optimized infrastructure to achieve highest performance of clusters of GPU</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <Image src="/optimized.png" alt="Pay Only Used" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="font-bold mb-2">PAY ONLY USED</h3>
                        <p className="text-gray-600">Only pay for the GPU you use at the wholesale price. No wasted spending to test and integrate different versions of drivers</p>
                    </div>
                </div>
            </div>

            {/* H200 Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#F5F9F4]">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2 pt-8">
                        <h2 className="text-4xl font-bold mb-6 text-black">NVIDIA H200 TENSOR CORE GPUS</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We were among the first to market with NVIDIA H200 Tensor Core GPUs. Be first to market with your AI applications.
                        </p>
                        <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white mb-8">
                            Try Control Panel
                        </Button>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="border-t border-gray-200 pt-6">
                                <h3 className="font-bold mb-2 text-black">EXCELLENT PERFORMANCE</h3>
                                <p className="text-gray-600">Get up to 1.9x higher performance than H100 Tensor Core GPUs</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Get to Market Fast Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">GET TO MARKET FAST</h2>
                <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                    Our platforms help ensure your teams have the cutting-edge compute power they need to drive the next AI breakthrough
                    Run jobs on the highly performant clusters. And get more done in less time.
                </p>
                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] mb-12">
                    Try Control Panel
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="p-6 bg-[#F5F9F4] rounded-lg text-left">
                        <Image src="/optimized.png" alt="Performance" width={64} height={64} className="mb-4" />
                        <h3 className="font-bold mb-2">CONSISTENT PERFORMANCE</h3>
                        <p className="text-gray-600">Scale means nothing without consistent performance. Customers on canopywave save 3.1MM GPU hours and experience 50% fewer interruptions per day.</p>
                    </div>
                    <div className="p-6 bg-[#F5F9F4] rounded-lg text-left">
                        <Image src="/optimized.png" alt="Infrastructure" width={64} height={64} className="mb-4" />
                        <h3 className="font-bold mb-2">HIGHLY EFFICIENT INFRASTRUCTURE</h3>
                        <p className="text-gray-600">canopywave offers up to 20% improvement in system MFU over comparative benchmarks, so customers need less infrastructure to achieve the same level of performance.</p>
                    </div>
                    <div className="p-6 bg-[#F5F9F4] rounded-lg text-left">
                        <Image src="/optimized.png" alt="Resilient" width={64} height={64} className="mb-4" />
                        <h3 className="font-bold mb-2">RESILIENT FROM THE START</h3>
                        <p className="text-gray-600">With automated health checks and node lifecycle management, canopywave monitors and upkeeps node and fleet performance throughout the entire lifecycle for improved resilience and recovery.</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">HAVE QUESTIONS? GET IN TOUCH!</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]">
                        Learn More
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                        Contact Sales
                    </Button>
                </div>
            </div>

            <Footer />
        </main>
    );
}