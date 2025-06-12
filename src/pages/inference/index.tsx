"use client";

import Head from "next/head";
import Image from "next/image";
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { Button } from "@/components/ui/button";
import BackgroundTransition from '@/components/BackgroundTransition';

export default function SolutionsPage() {
    return (
        <main className="min-h-screen relative text-gray-600">
            <Head>
                <title>Canopy Wave - Secure AI Inference</title>
            </Head>
            <Header />

            <div className="w-full h-[490px] relative mt-[84px]">
                <Image
                    src="/solutions-banner.svg"
                    alt="Solutions"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-center">
                            Inference
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8 text-center">
                            Unlock Fast, Flexible, and Secure AI Inference with Canopy Wave
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <div className="bg-[#F5F7F4] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                Enterprise-Grade AI Acceleration
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-l mb-4 sm:pr-10">
                                    As AI continues to reshape industries, businesses need an inference solution that delivers speed, efficiency, and security—without overcomplicating infrastructure or budgets. At Canopy Wave, we’ve engineered our AI Inference platform to meet these needs head-on, offering a powerful, enterprise-ready solution that’s as flexible as it is reliable
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
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-black text-l group-hover:text-white">Flexible, Cost-Efficient Usage</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        Traditional infrastructure models can tie up resources and budgets—even when usage is low. Canopy Wave offers a minute-based billing model, allowing you to scale on-demand and only pay for what you use. Whether you're running short bursts of inference tasks or need continuous uptime, our pricing adapts to your workload—not the other way around
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
                                        <h3 className="font-bold text-l group-hover:text-white">Virtual Machines with Bare-Metal Performance</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        One common trade-off with cloud-based AI services is the performance drop when using virtual machines. Not at Canopy Wave. Our platform is optimized to deliver VM-based infrastructure that performs on par with bare metal, giving you the speed and low latency required for high-throughput AI inference—without the operational complexity of managing physical servers
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
                                        <h3 className="font-bold text-l group-hover:text-white">Built on Private Cloud for Maximum Security</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        We understand that data privacy and compliance are top priorities. That's why our solution is hosted in a private cloud environment, ensuring full data isolation, enhanced control, and enterprise-grade security. You maintain ownership and visibility of your data throughout its lifecycle
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI-Optimized Storage Solutions*/}
            <div className='bg-[#F9F9F9]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">AI-optimized storage solutions</h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l text-center max-w-4xl mx-auto mb-16">
                                Every AI inference pipeline depends on fast and reliable access to data. Canopy Wave supports a flexible, multi-tiered storage architecture
                            </p>
                        </SlideUp>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Local Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/rendering/performance.svg"
                                    alt="Local Storage"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">Local Storage</h3>
                            <p className="text-gray-600 text-center text-l">
                            For ultra-low-latency access
                            </p>
                        </div>

                        {/* Shared Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/rendering/low-latency.svg"
                                    alt="Shared Storage"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">Shared Storage</h3>
                            <p className="text-gray-600 text-center text-l">
                            For collaborative workloads
                            </p>
                        </div>

                        {/* Object Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/rendering/gpus.svg"
                                    alt="Object Storage"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-l mb-4 text-center">Object Storage</h3>
                            <p className="text-gray-600 text-center text-l">
                            for scalable and cost-efficient data management
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Ready to Get Started Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32 overflow-hidden">
                <BackgroundTransition
                    defaultImage="/contact-section1.webp"
                    activeImage="/contact-section2.webp"
                    className="w-full h-full absolute inset-0"
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6">Ready to get started?</h2>
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
