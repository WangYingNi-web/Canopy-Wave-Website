"use client";

import Image from "next/image";
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
    return (
        <main className="min-h-screen relative text-gray-600">
            <Header />

            <div className="w-full h-[450px] relative mt-[84px]">
                <Image
                    src="/solutions-banner.svg"
                    alt="Solutions"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[100px]">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-8xl font-extrabold text-white text-center">
                            Private Cloud and GPUs deployment
                            </h1>
                        </SlideUp>
                        {/* <SlideUp>
                            <p className="text-white text-lg mt-8 text-center">
                                Get your AI model training done with Canopy Wave!
                            </p>
                        </SlideUp> */}
                    </div>
                </div>
            </div>

            {/* Purpose-Built AI Infrastructure—Delivered Fast, Powered by Excellence*/}
            <div className='bg-[#F9F9F9]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="text-center mb-16">
                        <SlideUp>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">Purpose-Built AI Infrastructure—Delivered Fast, Powered by Excellence</h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16">
                            When speed, scale, and reliability matter most, Canopy Wave delivers. Our private cloud solution is designed to help enterprises deploy high-performance AI infrastructure quickly and securely—with everything from hardware sourcing to full-stack software ready from day one
                            </p>
                        </SlideUp>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Local Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/cloud/experts.svg"
                                    alt="Experts"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h3 className="font-extrabold text-xl mb-4 text-center">The World’s Best Infrastructure Experts</h3>
                            <p className="text-gray-600 text-center">
                            At Canopy Wave, you’re not just getting a service—you’re partnering with a team of elite infrastructure professionals who have built and scaled some of the largest AI data centers in the world. We bring deep experience, precision, and efficiency to every deployment
                            </p>
                        </div>

                        {/* Shared Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/icon/high.svg"
                                    alt="High"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h3 className="font-extrabold text-xl mb-4 text-center">Unmatched Deployment Speed</h3>
                            <p className="text-gray-600 text-center">
                            Need to scale fast? We specialize in turning white space into a production-ready AI cluster in as little as two weeks. Our team has the proven ability to deploy clusters with over 2,000 GPUs in record time—so your AI workloads don't wait
                            </p>
                        </div>

                        {/* Object Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src="/cloud/software.svg"
                                    alt="Software"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h3 className="font-extrabold text-xl mb-4 text-center">End-to-End Software Stack Ready to Run</h3>
                            <p className="text-gray-600 text-center">
                            We provide a fully integrated software stack optimized for AI training and inference. When we hand over the cluster, it's not just powered on—it's production-ready. No configuration delays. No extra setup. Just log in and start scaling your AI workloads
                            </p>
                        </div>
                    </div>
                </div>
            </div>
{/* Robust Supply Chain & Equipment Sourcing */}
            <div className="bg-[#F5F9F4] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                Robust Supply Chain & Equipment Sourcing
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-4 sm:pr-10 text-justify">
                                Canopy Wave’s supply chain control and vendor relationships mean less waiting and more doing. Whether you're sourcing GPUs, networking gear, or storage systems, we take the hassle out of procurement and help you access the hardware you need—faster and at scale
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
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">99.9% Uptime & 24/7 Support</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px]">
                                    Your AI workloads need to run around the clock, and so do we. With 99.9% uptime, enterprise-grade reliability, and 24/7 support, you can trust your infrastructure to stay online—and your team to stay productive
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
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Full-Stack DCIM & Operational Visibility</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px]">
                                    Get complete transparency with our Data Center Infrastructure Management (DCIM) tools. From power and cooling to GPU utilization and system health, our intuitive dashboards give you real-time insights and control over every layer of your infrastructure
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
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Start Building at Scale—Today</h3>
                                    </FadeIn>
                                </div>
                                <FadeIn>
                                    <p className="text-gray-600 group-hover:text-white space-y-1 pl-[68px]">
                                    Canopy Wave’s private cloud solution gives you the power of hyperscale infrastructure, the speed of startup execution, and the peace of mind of enterprise support—all delivered with precision and purpose
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ready to Get Started Section */}
            <div className="bg-[#F9F9F9] border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Ready to get started?</h2>
                        <p className="text-gray-600 mb-8 mx-auto text-lg">
                            Create your Canopy Wave cloud account to launch GPU clusters immediately or contact us to reserve a long term contract
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
            </div>

            <Footer />
        </main>
    );
}
