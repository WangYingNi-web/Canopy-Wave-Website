"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { Button } from "@/components/ui/button";
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function PlatformPage() {
    useScrollToHash();
    return (
        <main className="min-h-screen text-gray-600 relative">
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[450px] relative mt-[84px] bg-[#EDF2E4]">
                <Image
                    src="/platform/banner.svg"
                    alt="banner"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36">
                        <SlideUp>
                            <h1 className="text-6xl sm:text-8xl font-extrabold text-[#8CC63F]">
                                Platform
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-lg mt-8">
                            Unlock higher performance and usage out of your clusters for faster time to market
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            <div className="bg-[#F5F9F4]">
                <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div id="dcim-platform" className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/2 p-6">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Canopy DCIM</h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    Empower world-class AI infrastructure with our DCIM (Data  <br /> Center Infrastructure Management) platform—unlocking peak performance and complete operational visibility
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white" onClick={() => window.location.href = '/compute-services#bare-metal'}>
                                    Get Full Visibility Of Your Cluster
                                </Button>
                            </SlideUp>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <div className="flex items-start gap-4 p-8 rounded-lg shadow-sm">
                                <Image src="/platform/cookbook.svg" alt="Cookbook" width={96} height={96} className="mt-1" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">Performance Cookbook</h3>
                                        <p className="text-gray-600">Image servers, configure BIOS, manage driver versions, and more—all streamlined through our platform. Use our Performance Cookbook to unlock peak performance without the need for manual tuning by engineers</p>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex items-start gap-4 p-8 rounded-lg shadow-sm">
                                <Image src="/platform/visualization.svg" alt="Visualization" width={92} height={92} className="mt-1" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">Visualization</h3>
                                        <p className="text-gray-600">Canopy Wave DCIM Platform provide you with full visibility of the cluster. Getting to know your utilization rate, health condition, and uptime in one single dashboard to get your cluster fully under control</p>
                                    </div>
                                </FadeIn>

                            </div>
                            <div className="flex items-start gap-4 p-8 rounded-lg shadow-sm">
                                <Image src="/platform/failures.svg" alt="Detecting Failures" width={92} height={92} className="mt-1" />
                                <FadeIn>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl">Detecting Failures</h3>
                                        <p className="text-gray-600">Our DCIM platform can help early detect possible failure and send out corresponding work orders to minimize interruption and keep industry leading performance and uptime</p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* GPU Cloud Platform Features */}
            <div className="bg-[#F9F9F9]">
                <div id='cloud-platform' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center mb-12">
                        <SlideUp>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Wave GPU Cloud Platform</h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-lg">Using Canopy Wave cloud platform to get access and manage your MULTI-GPU instances</p>
                            <Button className="w-full mt-6 sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                Launch GPU Clusters
                            </Button>
                        </SlideUp>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        <div className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center">
                            <Image src="/platform/manage.svg" alt="Manage Instances" width={36} height={36} className="mb-4 mx-auto" />
                            <h3 className="font-bold text-xl mb-3">Manage Instances</h3>
                            <p className="text-gray-600">Launch, delete or take snapshots of your GPU instances using our GPU cloud platform</p>
                        </div>

                        <div className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center">
                            <Image src="/platform/storage.svg" alt="Attached Storage" width={36} height={36} className="mb-4 mx-auto" />
                            <h3 className="font-bold text-xl mb-3">Attached Storage</h3>
                            <p className="text-gray-600">Attached or unmount Block Volumes storage, Shared File System storage and object storage all in the GPU cloud platform</p>
                        </div>

                        <div className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center">
                            <Image src="/platform/security.svg" alt="Security Group" width={36} height={36} className="mb-4 mx-auto" />
                            <h3 className="font-bold text-xl mb-3">Set security group</h3>
                            <p className="text-gray-600">Generate, add, delete or change your SSH or API keys. Set different security groups and how to work with your team</p>
                        </div>

                        <div className="border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center">
                            <Image src="/platform/billing.svg" alt="Access to Billings" width={36} height={36} className="mb-4 mx-auto" />
                            <h3 className="font-bold text-xl mb-3">Access to billings</h3>
                            <p className="text-gray-600">View and pay your bills all in the one place</p>
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
                            Unlock higher performance and usage out of your clusters for faster time to market
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md"
                            >
                                Try Control Panel
                            </button>
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md border border-gray-200"
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