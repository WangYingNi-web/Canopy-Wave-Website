"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function PlatformPage() {
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
                        <h1 className="text-6xl font-bold text-[#8CC63F] mb-6">
                            Platform<br />
                        </h1>
                        <p className="text-gray-600 text-lg mb-12">
                            Get performant, secure, and reliable storage for AI.
                        </p>
                    </div>
                </div>
            </div>

            {/* Fleet Lifecycle Controller Section */}
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
                        <h2 className="text-4xl font-bold mb-6">FLEET LIFECYCLE CONTROLLER</h2>
                        <p className="text-gray-600 mb-4">
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </p>
                        <p className="text-gray-600">
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </p>
                    </div>
                </div>
            </div>

            {/* Node Lifecycle Controller Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#F5F9F4]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">NODE LIFECYCLE CONTROLLER</h2>
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

            {/* Mission Control CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-6">
                        DO MORE WITH MISSION<br />
                        CONTROL
                    </h2>
                    <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto">
                        Get enhanced GPU compute capability for GenAI.
                    </p>
                    <button className="bg-[#8CC63F] text-white px-8 py-3 rounded-lg hover:bg-[#80B224] transition-all duration-300">
                        Start today
                    </button>
                </div>
            </div>


            <Footer />
        </main>
    );
}