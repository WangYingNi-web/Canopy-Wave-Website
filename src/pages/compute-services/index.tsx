"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function ComputeServicesPage() {
    useScrollToHash();
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[600px] relative mt-20">
                <Image
                    src="/cpu-nodes.svg"
                    alt="cpu-nodes"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                        <h1 className="text-5xl font-bold text-[#8CC63F] mb-6">
                            Compute<br />
                            SERVICES
                        </h1>
                        <p className="text-gray-600 text-lg mb-12">
                            Get up and running fast with early access to leading AI-optimized NVIDIA GPUs
                        </p>
                    </div>
                </div>
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
            <div id="hgx-h100" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 text-center">
                <h2 className="text-4xl font-bold mb-4">NVIDIA HGX H100</h2>
                <p className="text-gray-600 mb-6">
                    Use an industry-leading platform for building and deploying the latest GenAI applications
                </p>
                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] mb-12">
                    Try Control Panel
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div className="p-6 bg-[#F5F9F4] rounded-lg">
                        <Image src="/optimized.png" alt="Optimized Stack" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="font-bold mb-2">OPTIMIZED STACK</h3>
                        <p className="text-gray-600">Pre-qualified and optimized GPU and AI drivers</p>
                    </div>
                    <div className="p-6 bg-[#F5F9F4] rounded-lg">
                        <Image src="/optimized.png" alt="Dedicated Resource" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="font-bold mb-2">DEDICATED RESOURCE</h3>
                        <p className="text-gray-600">Fully secured resources with the flexibility to optimize your stacks and application</p>
                    </div>
                    <div className="p-6 bg-[#F5F9F4] rounded-lg">
                        <Image src="/optimized.png" alt="High Performance" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="font-bold mb-2">HIGH PERFORMANCE</h3>
                        <p className="text-gray-600">Optimized infrastructure to achieve highest performance of clusters of GPU</p>
                    </div>
                    <div className="p-6 bg-[#F5F9F4] rounded-lg">
                        <Image src="/optimized.png" alt="Pay Only Used" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="font-bold mb-2">PAY ONLY USED</h3>
                        <p className="text-gray-600">Only pay for the GPU you use at the wholesale price. No wasted spending to test and integrate different versions of drivers</p>
                    </div>
                </div>
            </div>

            {/* H200 Section */}
            <div id="hgx-h200" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#F5F9F4]">
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

            {/* CPU Comparison Section */}
            <div id="cpu-node" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                <h2 className="text-4xl font-bold mb-6">THE LATEST AMD EPYC AND INTEL XEON GENERATIONS</h2>
                <p className="text-gray-600 mb-12">
                    Use performant CPUs to support GPU-accelerated workloads
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* AMD EPYC Section */}
                    <div className="p-6 bg-[#F5F9F4] rounded-lg text-left">
                        <div className="flex items-center gap-4 mb-6">
                            <Image src="/optimized.png" alt="CPU Icon" width={48} height={48} />
                            <h3 className="text-2xl font-bold">AMD EPYC GENOA</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Available in high-performance, high-core, and general-purpose configurations</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Up to 26% better gen-to-gen performance compared to general-purpose Milan servers</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Supporting up to 1.5TB of memory per system</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Equipped with NVIDIA Bluefield DPUs</p>
                            </li>
                        </ul>
                    </div>

                    {/* Intel Section */}
                    <div className="p-6 bg-[#F5F9F4] rounded-lg text-left">
                        <div className="flex items-center gap-4 mb-6">
                            <Image src="/optimized.png" alt="CPU Icon" width={48} height={48} />
                            <h3 className="text-2xl font-bold">INTEL EMERALD RAPIDS</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Up to 28% better performance than CW Ice Lake servers</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Up to 26% better gen-to-gen performance compared to general-purpose Milan servers</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Supporting up to 1.5TB of memory per system</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Equipped with NVIDIA Bluefield DPUs</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* GPU Cloud Reserve Cluster Section */}
            <div id="gpu-reserve" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">GPU CLOUD RESERVE CLUSTER</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Reserve GPU clusters for extended periods at discounted rates. Perfect for long-term AI training and development projects.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Up to 30% cost savings compared to on-demand pricing</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Guaranteed resource availability</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Flexible reservation periods from 1 month to 3 years</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8CC63F] mt-1">▶</span>
                                <p>Priority support and dedicated account management</p>
                            </li>
                        </ul>
                        <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white mt-8">
                            Contact Sales
                        </Button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image src="/gpu-cluster.png" alt="GPU Cluster" width={500} height={400} className="w-full rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Bare Metal Services Section */}
            <div id="bare-metal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#F5F9F4]">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-6">BARE METAL SERVICES</h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Direct access to high-performance hardware without virtualization overhead. Maximum performance for your demanding workloads.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <Image src="/optimized.png" alt="Performance" width={48} height={48} className="mb-4" />
                        <h3 className="text-xl font-bold mb-4">BARE METAL PERFORMANCE</h3>
                        <p className="text-gray-600">Full access to hardware resources without virtualization layers, ensuring maximum performance for your applications.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <Image src="/optimized.png" alt="Control" width={48} height={48} className="mb-4" />
                        <h3 className="text-xl font-bold mb-4">COMPLETE CONTROL</h3>
                        <p className="text-gray-600">Custom OS, kernel-level access, and full control over hardware configurations to meet your specific needs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <Image src="/optimized.png" alt="Security" width={48} height={48} className="mb-4" />
                        <h3 className="text-xl font-bold mb-4">ENHANCED SECURITY</h3>
                        <p className="text-gray-600">Single-tenant environment with physical isolation, providing maximum security for sensitive workloads.</p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white">
                        Learn More
                    </Button>
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