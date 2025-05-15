"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import { Button } from "@/components/ui/button";
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function PlatformPage() {
    useScrollToHash();
    return (
        <main className="min-h-screen relative">
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[720px] relative mt-[84px]">
                <Image
                    src="/cube.svg"
                    alt="cube"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-7xl font-bold text-[#8CC63F] mt-16">
                                Platform
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-lg mt-8">
                                Get performant, secure, and reliable storage for AI.
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Fleet Lifecycle Controller Section */}
            <div className="bg-[#F5F9F4] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="/fleet-lifecycle.svg"
                                alt="Fleet Lifecycle Controller"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Fleet lifecycle controller</h2>
                            <p className="text-gray-600 mb-4">
                                Each and every node undergoes rigorous testing to ensure they meet GenAI's high-performance computing demands. FLCC ensures node health from initial deployment through the entire node lifecycle.
                            </p>
                            <p className="text-gray-600">
                                With experience in detecting subtle issues like GPUs solving 1+1=1.999999, Mission Control’s FLCC is designed for GenAI workloads where every digit counts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Node Lifecycle Controller Section */}
            <div className="bg-[#F9F9F9] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">NODE LIFECYCLE CONTROLLER</h2>
                            <p className="text-gray-600 mb-4">
                                Mission Control mitigates costly and time-consuming interruptions via continuous monitoring and proactive health checks—ensuring nodes work in lockstep with enhanced performance.
                            </p>
                            <p className="text-gray-600">
                                As soon as unhealthy nodes are detected, NLCC swaps out and replaces problematic nodes—making interruptions shorter, less frequent, and less expensive.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/fleet-lifecycle.svg"
                                alt="Node Lifecycle Controller"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Control CTA Section */}
            <div className="bg-[#F9F9F9] border border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Do More With Mission Control</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-8 mx-auto text-lg">
                        Get enhanced GPU compute capability for GenAI.
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Start today
                            </Button>
                        </div>
                    </SlideUp>
                </div>
            </div>


            <Footer />
        </main>
    );
}