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
                    src="/cpu-nodes.png"
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
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Versatile CPU instances</h2>
                        <p className="text-gray-600 mb-6">
                            CoreWeave clusters utilize cutting edge CPUs, helping your teams get more out of GPU compute.
                            Superpower compute-intensive projects with powerful NVIDIA Grace CPUs and the latest AMD and Intel chips.
                        </p>
                        <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]">
                            Try Control Panel
                        </Button>
                    </div>
                </div>
            </div>

            {/* CPU Comparison Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
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

            {/* H200 Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#F5F9F4]">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2 pt-8">
                        <h2 className="text-4xl font-bold mb-6 text-black">Enhanced GPU cluster performance</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            CoreWeave uses powerful and efficient CPUs to enable higher utility and performance from GPU clusters.
                            Let CPUs handle generalized computing needs, freeing GPUs to focus on high-intensity tasks.
                        </p>
                        <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white mb-8">
                            Try Control Panel
                        </Button>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="border-t border-gray-200 pt-6">
                                <h3 className="font-bold mb-2 text-black">Get better performance需补充</h3>
                                <p className="text-gray-600">Get up to 1.9x higher performance than H100 Tensor Core GPUs需补充</p>
                            </div>
                        ))}
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