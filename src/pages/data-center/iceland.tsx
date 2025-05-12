"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';

export default function IcelandDataCenter() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[720px] relative mt-[84px]">
                <Image
                    src="/compute/banner.svg"
                    alt="cpu-nodes"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                        <SlideUp>
                            <h1 className="text-6xl font-bold text-[#8CC63F] mt-16">
                                LOCATION
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-lg mt-8">
                                At canopywave, we’ve set down roots across the globe with these world-class office spaces
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Deploy Section */}
            <div className="bg-[#F5F9F4] py-32">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/gpu.svg"
                                alt="NVIDIA GPU"
                                layout="fill"
                                objectFit="cover"
                                className="filter brightness-90"
                            />
                        </div>
                        <div className="pl-4">
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                    DEPLOY CLOSE TO YOUR USERS — FROM THE DASHBOARD OR API
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-6 text-lg">
                                    Your app's performance depends on how close you can deploy to your end users. With canopywave, you can deploy in strategic locations within seconds, dramatically reducing latency and delivering the seamless experience your users demand.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => window.location.href = '/learn-more'}
                                        className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md"
                                    >
                                        Learn More
                                    </button>
                                    <button
                                        onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                                        className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md border border-gray-200"
                                    >
                                        Launch GPU Clusters
                                    </button>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blonduos Section */}
            <div id='iceland1' className="bg-[#F9F9F9] py-32">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">BLONDUOS</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-8 text-lg">
                                    The Blönduós Data Center, situated in northern Iceland, is a state-of-the-art facility designed for high-performance computing (HPC) and artificial intelligence (AI) workloads. Leveraging Iceland's cool climate and abundant renewable energy, the campus offers sustainable and efficient data center solutions.
                                </p>
                            </SlideUp>
                            <div className="relative h-[400px] w-full">
                                <Image
                                    src="/data-center/iceland1-map.svg"
                                    alt="Iceland Map"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="space-y-12">
                            {/* Sustainable Energy */}
                            <div className="pb-8 border-b border-gray-200">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0">
                                        <Image
                                            src="/data-center/sustainable.svg"
                                            alt="Sustainable Energy"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-xl font-bold mb-2">SUSTAINABLE ENERGY</h3>
                                            <p className="text-gray-600">
                                                Powered entirely by renewable energy sources, including geothermal and hydroelectric power, the campus ensures environmentally friendly operations.
                                            </p>
                                        </FadeIn>
                                    </div>
                                </div>
                            </div>

                            {/* Energy Efficiency */}
                            <div className="pb-8 border-b border-gray-200">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0">
                                        <Image
                                            src="/icon/efficiency.svg"
                                            alt="Energy Efficiency"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-xl font-bold mb-2">ENERGY EFFICIENCY</h3>
                                            <p className="text-gray-600">
                                                The facility boasts a Power Usage Effectiveness (PUE) as low as 1.03, significantly lower than the European average of 1.55, indicating high energy efficiency.
                                            </p>
                                        </FadeIn>
                                    </div>
                                </div>
                            </div>

                            {/* High Capacity */}
                            <div className="pb-8 border-b border-gray-200">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0">
                                        <Image
                                            src="/icon/high.svg"
                                            alt="High Capacity"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-xl font-bold mb-2">HIGH CAPACITY</h3>
                                            <p className="text-gray-600">
                                                With an expansion capability exceeding 100 MW and a fully built-out power capacity of 50 MW, the campus is equipped to handle substantial computational demands.
                                            </p>
                                        </FadeIn>
                                    </div>
                                </div>
                            </div>
                            {/* Advanced Infrastructure */}
                            <div className="pb-8 border-b border-gray-200">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0">
                                        <Image
                                            src="/data-center/infrastructure.svg"
                                            alt="Advanced Infrastructure"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-xl font-bold mb-2">ADVANCED INFRASTRUCTURE</h3>
                                            <p className="text-gray-600">
                                                Designed to Tier 3 standards, the data center includes dual power feeds, indirect air cooling systems, uninterruptible power supplies (UPS), and generators to ensure high availability and reliability.
                                            </p>
                                        </FadeIn>

                                    </div>
                                </div>
                            </div>
                            {/* Certifications */}
                            <div className="pb-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0">
                                        <Image
                                            src="/data-center/certifications.svg"
                                            alt="Certifications"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-xl font-bold mb-2">8 CERTIFICATIONS</h3>
                                            <p className="text-gray-600">
                                                Reflecting its commitment to information security and data protection.
                                            </p>
                                        </FadeIn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Akureyri Section */}
            <div id='iceland2' className="bg-[#F5F9F4] py-32">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Left Content */}
                        <div>
                            <SlideUp>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">AKUREYRI</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-8 text-lg">
                                    The Akureyri data center (ICE03) is a cutting-edge facility designed to meet the growing demands of high-performance computing (HPC) and artificial intelligence (AI) workloads. Strategically located in northern Iceland, ICE03 leverages the region's cool climate and abundant renewable energy resources to deliver sustainable and efficient data center services.
                                </p>
                            </SlideUp>
                        </div>

                        {/* Right Content - Map */}
                        <div className="relative h-[400px] w-full -mt-16">
                            <Image
                                src="/data-center/iceland2-map.svg"
                                alt="Iceland Map"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                        {/* 100% Renewable Energy */}
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src="/data-center/renewable.svg"
                                    alt="Renewable Energy"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3">100% RENEWABLE ENERGY</h3>
                            <p className="text-gray-600 text-sm">
                                ICE03 is powered entirely by Iceland's renewable hydro and geothermal energy sources, contributing to its low carbon footprint.
                            </p>
                        </div>

                        {/* Efficient Cooling Systems */}
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src="/data-center/cooling.svg"
                                    alt="Cooling Systems"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3">EFFICIENT COOLING SYSTEMS</h3>
                            <p className="text-gray-600 text-sm">
                                The facility utilizes both direct air cooling and liquid cooling technologies, achieving a Power Usage Effectiveness (PUE) as low as 1.2.
                            </p>
                        </div>

                        {/* Tier 3 Certification */}
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src="/data-center/tier3.svg"
                                    alt="Tier 3 Certification"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3">TIER 3 CERTIFICATION</h3>
                            <p className="text-gray-600 text-sm">
                                The facility meets Tier 3 standards, ensuring high availability and redundancy for mission-critical operations.
                            </p>
                        </div>

                        {/* Global Access */}
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src="/data-center/global.svg"
                                    alt="Global Access"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3">GLOBAL ACCESS</h3>
                            <p className="text-gray-600 text-sm">
                                Akureyri's position offers low-latency connectivity to major interconnection hubs, including London (17.2 ms), Amsterdam (17.3 ms), and New York (55 ms).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Where Will You Deploy Section */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div>
                        <SlideUp>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                WHERE WILL YOU DEPLOY?
                            </h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 mb-8 text-lg max-w-3xl">
                                Create your Canopy Wave cloud account to launch GPU clusters immediately or contact us to reserve a long term contract.
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
            </div>

            <Footer />
        </main>
    );
}