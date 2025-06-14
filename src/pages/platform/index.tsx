"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import { Button } from "@/components/ui/button";
import { useScrollToHash } from '@/hooks/useScrollToHash';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function PlatformPage() {
    useScrollToHash();
    return (
        <main className="min-h-screen text-gray-600 relative">
            <Header />
            <Head>
                <title>Empower AI with Our Platform for Peak Performance</title>
            </Head>
            {/* Hero Section */}
            <div className="w-full h-[490px] relative mt-[84px] bg-[#EDF2E4]">
                <Image
                    src="/platform/banner.svg"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-shadow-lg">
                                Platform
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8">
                                Unlock higher performance and usage out of your clusters for faster time to market
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            <div className="bg-[#F5F7F4]">
                <div id='dcim-platform' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    {/* 上半部分：左侧标题和右侧图片 */}
                    <div className="flex flex-col md:flex-row items-start gap-16 mb-6">
                        {/* 左侧标题部分 */}
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">Canopy DCIM</h2>
                                <p className="text-gray-600 mb-8 text-l leading-relaxed">
                                    Empower world-class AI infrastructure with our DCIM (Data Center Infrastructure Management) platform—unlocking peak performance and complete operational visibility
                                </p>
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white font-medium px-8 py-3" onClick={() => window.location.href = '/compute-services#bare-metal'}>
                                    GET FULL VISIBILITY OF YOUR CLUSTER
                                </Button>
                            </SlideUp>
                        </div>
                        {/* 右侧图片部分 */}
                        <div className="w-full md:w-1/2 -mt-10">
                            <div>
                                <SlideUp>
                                    <Image
                                        src="/platform/dcim.svg"
                                        alt="DCIM Dashboard"
                                        width={600}
                                        height={400}
                                        className="w-full"
                                    />
                                </SlideUp>
                            </div>
                        </div>
                    </div>

                    {/* 下半部分：三个卡片 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center">
                            <Image src="/platform/cookbook.svg" alt="Performance Cookbook" width={36} height={36} className="mb-4 svg-gray" />
                            <h3 className="font-bold text-l mb-3">Performance Cookbook</h3>
                            <p className="text-gray-600 text-l">Image servers, configure BIOS, manage driver versions, and more—all streamlined through our platform. Use our Performance Cookbook to unlock peak performance without the need for manual tuning by engineers</p>
                        </div>

                        <div className="border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center">
                            <Image src="/platform/visualization.svg" alt="Visualization" width={36} height={36} className="mb-4 svg-gray" />
                            <h3 className="font-bold text-l mb-3">Visualization</h3>
                            <p className="text-gray-600 text-l">Canopy Wave DCIM Platform provide you with full visibility of the cluster. Getting to know your utilization rate, health condition, and uptime in one single dashboard to get your cluster fully under control</p>
                        </div>

                        <div className="border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center">
                            <Image src="/platform/failures.svg" alt="Detecting Failures" width={36} height={40} className="mb-4 svg-gray" />
                            <h3 className="font-bold text-l mb-3">Detecting Failures</h3>
                            <p className="text-gray-600 text-l">Our DCIM platform can help early detect possible failure and send out corresponding work orders to minimize interruption and keep industry leading performance and uptime</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* GPU Cloud Platform Features */}
            <div className="bg-[#F9F9F9]">
                <div id='cloud-platform' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="flex flex-col md:flex-row items-start gap-16">
                        <div className="w-full md:w-1/2">
                            <div>
                                <SlideUp>
                                    <Image
                                        src="/platform/cloud-platform.png"
                                        alt="DCIM Dashboard"
                                        width={600}
                                        height={300}
                                        className="w-full h-auto"
                                    />
                                </SlideUp>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">Wave GPU Cloud Platform</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-l">Using Canopy Wave cloud platform to get access and manage your MULTI-GPU instances</p>
                                <Button className="w-full mt-6 sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                    Launch GPU Clusters
                                </Button>
                            </SlideUp>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                        <div className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center">
                            <Image src="/platform/manage.svg" alt="Manage Instances" width={36} height={36} className="mb-4 mx-auto svg-gray" />
                            <h3 className="font-bold text-l mb-3">Manage Instances</h3>
                            <p className="text-gray-600 text-l">Launch, delete or take snapshots of your GPU instances using our GPU cloud platform</p>
                        </div>

                        <div className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center">
                            <Image src="/platform/storage.svg" alt="Attached Storage" width={36} height={36} className="mb-4 mx-auto svg-gray" />
                            <h3 className="font-bold text-l mb-3">Attached Storage</h3>
                            <p className="text-gray-600 text-l">Attached or unmount Block Volumes storage, Shared File System storage and object storage all in the GPU cloud platform</p>
                        </div>

                        <div className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center">
                            <Image src="/platform/security.svg" alt="Security Group" width={36} height={36} className="mb-4 mx-auto svg-gray" />
                            <h3 className="font-bold text-l mb-3">Set security group</h3>
                            <p className="text-gray-600 text-l">Generate, add, delete or change your SSH or API keys. Set different security groups and how to work with your team</p>
                        </div>

                        <div className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center">
                            <Image src="/platform/billing.svg" alt="Access to Billings" width={36} height={36} className="mb-4 mx-auto svg-gray" />
                            <h3 className="font-bold text-l mb-3">Access to billings</h3>
                            <p className="text-gray-600 text-l">View and pay your bills all in the one place</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learn more about platform now Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32 overflow-hidden">
                <BackgroundTransition
                    defaultImage="/contact-section1.webp"
                    activeImage="/contact-section2.webp"
                    className="w-full h-full absolute inset-0"
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6">Learn more about platform now</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-8 mx-auto text-l">
                            Unlock higher performance and usage out of your clusters for faster time to market
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm"
                            >
                                Try Control Panel
                            </button>
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md border border-gray-200 text-sm"
                            >
                                Contact Us
                            </button>
                        </div>
                    </SlideUp>
                </div>
            </div>


            <Footer />
        </main>
    );
}