"use client";

import Image from "next/image";
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { Button } from "@/components/ui/button";

export default function NetworkingHardwarePage() {
    return (
        <main className="min-h-screen relative text-gray-600">
            <Header />

            <div className="w-full h-[500px] relative mt-[84px]">
                <Image
                    src="/solutions-banner.svg"
                    alt="Solutions"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-6xl sm:text-7xl font-black text-white text-center">
                                Networking Hardware Solution
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-lg mt-8 text-center">
                                High-Performance, Proven Equipment for Scalable AI Infrastructure
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Canopy Wave Networking Hardware Solutions */}
            <div className='bg-[#F5F7F4]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="text-center mb-16">
                        <SlideUp>
                            <h2 className="text-4xl sm:text-5xl font-black text-center mb-4">Canopy Wave Networking Hardware Solutions</h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-xl text-center max-w-4xl mx-auto mb-16">
                                At Canopy Wave, we know that networking is the backbone—and often the bottleneck—of modern AI infrastructure. That’s why we’ve built a comprehensive, field-tested hardware solution designed to eliminate performance constraints and deliver seamless scalability.
                                We don’t just sell components—we engineer, qualify, and deploy them in our own high-performance environments, ensuring you get equipment that’s trusted, reliable, and built to perform under real-world AI workloads
                            </p>
                        </SlideUp>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Local Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex mb-6">
                                <Image
                                    src="/about/global.svg"
                                    alt="Local Storage"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-black text-xl mb-4">Networking Without Bottlenecks</h3>
                            <p className="text-gray-600">
                                AI workloads generate massive amounts of data. If your networking stack can’t keep up, performance suffers
                            </p>
                        </div>

                        {/* Shared Storage */}
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="flex mb-6">
                                <Image
                                    src="/about/achieve.svg"
                                    alt="Shared Storage"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="font-bold text-xl mb-4">Canopy Wave has invested </h3>
                            <p className="text-gray-600">
                                Deeply in selecting and validating the world’s best OEM partners, ensuring our customers receive hardware that meets the highest standards for bandwidth, latency, and reliability
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tested in Production, Proven at Scale */}
            <div className="bg-[#F9F9F9] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-black mb-6">
                                    Tested in Production, Proven at Scale
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-xl mb-4 sm:pr-10 text-justify">
                                    Everything we offer is tested and used in our own AI clusters, including multi-thousand GPU environments
                                </p>
                            </SlideUp>
                        </div>

                        {/* 右侧特性部分 */}
                        <div className="lg:col-span-6 border-l border-gray-200">
                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/networking/low-latency.svg"
                                            alt="Low Latency"
                                            width={36}
                                            height={36}
                                            className="svg-gray"
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Zero surprises during deployment</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
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
                                        <h3 className="font-bold text-xl group-hover:text-white">Optimized compatibility</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
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
                                        <h3 className="font-bold text-xl group-hover:text-white">Scalable, enterprise-ready components</h3>
                                    </FadeIn>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bare-Metal Performance in a Virtual Environment*/}
            <div className='bg-[#F5F7F4]'>
                <div id="hgx-h100" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 text-center">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-black mb-8">Bare-Metal Performance in a Virtual Environment</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 text-xl mb-8">
                            Our virtual machines are engineered to match the performance of physical hardware. We use GPU-accelerated instances and optimize our virtualization stack to ensure your rendering jobs run as fast and efficiently as possible—without the overhead that typically comes with virtualization
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] mb-12" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                            Launch H100 GPU Clusters
                        </Button>
                    </SlideUp>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Fiber Optic Cables</h3>
                            <p className="text-gray-600 group-hover:text-white">Low-loss, high-speed connectivity</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Transceivers</h3>
                            <p className="text-gray-600 group-hover:text-white">Fully tested for reliability and interoperability</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">NICs</h3>
                            <p className="text-gray-600 group-hover:text-white">High-bandwidth, RDMA-capable options</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Switches</h3>
                            <p className="text-gray-600 group-hover:text-white">InfiniBand, RoCEv2, and Ethernet-based switching at scale</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-6">
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">DAC/AOC Cables</h3>
                            <p className="text-gray-600 group-hover:text-white">Optimized for low latency and high data rates</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Data Center Racks</h3>
                            <p className="text-gray-600 group-hover:text-white">Modular and airflow-optimized designs</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">PDUs</h3>
                            <p className="text-gray-600 group-hover:text-white">Intelligent power control and monitoring</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2 group-hover:text-white text-xl">Other Accessories</h3>
                            <p className="text-gray-600 group-hover:text-white">All the essentials for fast, clean cluster deployment</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Best Pricing. No Compromise on Quality */}
            <div className="bg-[#F9F9F9] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-black mb-6">
                                    Best Pricing. No Compromise on Quality
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-xl mb-4 sm:pr-10 text-justify">
                                    Thanks to our deep relationships with OEMs and supply chain partners
                                </p>
                            </SlideUp>
                        </div>

                        {/* 右侧特性部分 */}
                        <div className="lg:col-span-6 border-l border-gray-200">
                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/icon/pricing.svg"
                                            alt="Pricing"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Highly competitive pricing</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
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
                                        <h3 className="font-bold text-xl group-hover:text-white">Fast lead times</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
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
                                        <h3 className="font-bold text-xl group-hover:text-white">Guaranteed quality on every order</h3>
                                    </FadeIn>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* From Equipment to Deployment */}
            <div className="bg-[#F5F7F4] py-4">
                <div id="infiniband-networking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* 左侧标题部分 */}
                        <div className="lg:col-span-6">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-black mb-6">
                                    From Equipment to Deployment
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 text-xl mb-4 sm:pr-10 text-justify">
                                    Beyond supplying equipment, our team can also help you
                                </p>
                            </SlideUp>
                        </div>

                        {/* 右侧特性部分 */}
                        <div className="lg:col-span-6 border-l border-gray-200">
                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/icon/topologies.svg"
                                            alt="Topologies"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Design optimal topologies</h3>
                                    </FadeIn>
                                </div>

                            </div>

                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/icon/cables.svg"
                                            alt="Match cables"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Match cables, optics, and NICs to your performance targets</h3>
                                    </FadeIn>
                                </div>

                            </div>
                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/icon/configurations.svg"
                                            alt="Configurations"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Build out racks and power configurations</h3>
                                    </FadeIn>
                                </div>

                            </div>
                            <div className="border-b-[1px] border-b-gray-200 py-10 p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2">
                                        <Image
                                            src="/icon/infrastructure.svg"
                                            alt="Infrastructure"
                                            width={36}
                                            height={36}
                                            className='svg-gray'
                                        />
                                    </div>
                                    <FadeIn>
                                        <h3 className="font-bold text-xl group-hover:text-white">Integrate with existing infrastructure</h3>
                                    </FadeIn>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ready to Get Started Section */}
            <div
                className="bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32"
                style={{ backgroundImage: "url('/contact-section.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-black mb-6">Ready to get started?</h2>
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
