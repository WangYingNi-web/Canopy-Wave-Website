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
                <title>Canopy Wave - AI Model Training</title>
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
                                AI model training
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8 text-center">
                                Flexible and cost-effective
                                AI training solutions
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* AI Model training*/}
            <div className='bg-[#F9F9F9]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="text-center">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">GPU Clusters on Tap </h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l text-center max-w-4xl mx-auto mt-10">
                                Training AI models can take days or even weeks. Canopy Wave offers on-demand GPU clusters, purpose-built for AI workloads, with minute-based billing—so you only pay for what you use. This ensures you get maximum value with no wasted resources.
                                For predictable usage, we also offer a reservation model with significant discounts, allowing you to plan ahead and make the most of your budget
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* State-of-the-Art GPU Infrastructure */}
            <div className="bg-[#F5F7F4]">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                    State-of-the-art GPU infrastructure
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-l mb-4 sm:pr-10">
                                    Canopy Wave delivers high-performance GPU clusters powered by the latest NVIDIA GPUs, including the B200, H200, and H100
                                </p>
                                <p className="text-gray-600 text-l mb-4 sm:pr-10">
                                    Our infrastructure is built for 99.99% uptime, backed by 24/7 expert support and aligned with the highest security standards to ensure data protection and reliability
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
                                        <h3 className="font-bold text-[18px] group-hover:text-white">High-performance networking for AI workloads</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        Maximize the performance of your AI training with our AI-optimized RDMA networking, featuring both InfiniBand and RoCEv2 technologies. With up to 3200G of non-blocking topology, our network delivers millisecond-level latency and seamless GPU-to-GPU communication at scale—accelerating your training time and boosting throughput
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
                                        <h3 className="font-bold text-[18px] group-hover:text-white">AI-ready storage architecture</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        Our flexible storage infrastructure is designed to support diverse AI workloads. Choose from local storage, shared storage, or object storage, depending on your performance, scalability, and data access needs. Canopy Wave ensures your storage solution fits your workflow
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
                                        <h3 className="font-bold text-[18px] group-hover:text-white">Comprehensive cluster visibility</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px] text-l">
                                        With the Canopy Wave DCIM Platform, you gain full operational visibility into your AI cluster. Monitor resource utilization, system health, and uptime from a centralized dashboard—empowering you to manage and optimize your infrastructure with confidence
                                    </p>
                                </FadeIn>
                            </div>
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
