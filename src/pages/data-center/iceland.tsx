"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function IcelandDataCenter() {
    useScrollToHash();
    return (
        <main className="min-h-screen text-gray-600">
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[490px] relative mt-[84px]">
                <Image
                    src="/about/banner.svg"
                    alt="banner"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-white text-center">
                                Data Center
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-l mt-8 text-center">
                                At Canopy Wave, we’ve set down roots across the globe with these world-class office spaces
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Deploy Section */}
            {/* <div className="bg-[#F5F7F4] sm:py-24 py-16">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/data-center/deploy.svg"
                                alt="NVIDIA GPU"
                                layout="fill"
                                objectFit="cover"
                                className="filter brightness-90"
                            />
                        </div>
                        <div className="pl-4">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                    Deploy close to your users — from the dashboard or API
                                </h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-6 text-l">
                                    Your app's performance depends on how close you can deploy to your end users. With canopywave, you can deploy in strategic locations within seconds, dramatically reducing latency and delivering the seamless experience your users demand
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => window.location.href = '/contact'}
                                        className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-l"
                                    >
                                        Learn More
                                    </button>
                                    <button
                                        onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                                        className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md border border-gray-200 text-l"
                                    >
                                        Launch GPU Clusters
                                    </button>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Blönduós Section */}
            <div id='iceland1' className="bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">Blönduós</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-8 text-l">
                                    The Blönduós Data Center, situated in northern Iceland, is a state-of-the-art facility designed for high-performance computing (HPC) and artificial intelligence (AI) workloads. Leveraging Iceland's cool climate and abundant renewable energy, the campus offers sustainable and efficient data center solutions
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
                                            className='svg-gray'
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-l font-bold mb-2">Sustainable energy</h3>
                                            <p className="text-gray-600 text-l">
                                                Powered entirely by renewable energy sources, including geothermal and hydroelectric power, the campus ensures environmentally friendly operations
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
                                            className='svg-gray'
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-l font-bold mb-2">Energy efficiency</h3>
                                            <p className="text-gray-600 text-l">
                                                The facility boasts a Power Usage Effectiveness (PUE) as low as 1.03, significantly lower than the European average of 1.55, indicating high energy efficiency
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
                                            className='svg-gray'
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-l font-bold mb-2">High capacity</h3>
                                            <p className="text-gray-600 text-l">
                                                With an expansion capability exceeding 100 MW and a fully built-out power capacity of 50 MW, the campus is equipped to handle substantial computational demands
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
                                            className='svg-gray'
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-l font-bold mb-2">Advanced infrastructure</h3>
                                            <p className="text-gray-600 text-l">
                                                Designed to Tier 3 standards, the data center includes dual power feeds, indirect air cooling systems, uninterruptible power supplies (UPS), and generators to ensure high availability and reliability
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
                                            className='svg-gray'
                                        />
                                    </div>
                                    <div>
                                        <FadeIn>
                                            <h3 className="text-l font-bold mb-2">8 Certifications</h3>
                                            <p className="text-gray-600 text-l">
                                                Reflecting its commitment to information security and data protection
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
            <div id='iceland2' className="bg-[#F5F7F4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Left Content */}
                        <div>
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">Akureyri</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-8 text-l">
                                    The Akureyri data center (ICE03) is a cutting-edge facility designed to meet the growing demands of high-performance computing (HPC) and artificial intelligence (AI) workloads. Strategically located in northern Iceland, ICE03 leverages the region's cool climate and abundant renewable energy resources to deliver sustainable and efficient data center services
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
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src="/data-center/renewable.svg"
                                    alt="Renewable Energy"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="text-l font-bold mb-3">100% Renewable energy</h3>
                            <p className="text-gray-600 text-l">
                                ICE03 is powered entirely by Iceland's renewable hydro and geothermal energy sources, contributing to its low carbon footprint
                            </p>
                        </div>

                        {/* Efficient Cooling Systems */}
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src="/data-center/cooling.svg"
                                    alt="Cooling Systems"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="text-l font-bold mb-3">Efficient cooling systems</h3>
                            <p className="text-gray-600 text-l">
                                The facility utilizes both direct air cooling and liquid cooling technologies, achieving a Power Usage Effectiveness (PUE) as low as 1.2
                            </p>
                        </div>

                        {/* Tier 3 Certification */}
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src="/data-center/tier3.svg"
                                    alt="Tier 3 Certification"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="text-l font-bold mb-3">Tier 3 certification</h3>
                            <p className="text-gray-600 text-l">
                                The facility meets Tier 3 standards, ensuring high availability and redundancy for mission-critical operations
                            </p>
                        </div>

                        {/* Global Access */}
                        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 mb-4">
                                <Image
                                    src="/data-center/global.svg"
                                    alt="Global Access"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                />
                            </div>
                            <h3 className="text-l font-bold mb-3">Global access</h3>
                            <p className="text-gray-600 text-l">
                                Akureyri's position offers low-latency connectivity to major interconnection hubs, including London (17.2 ms), Amsterdam (17.3 ms), and New York (55 ms)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Future Locations Section */}
            <div id='future-locations' className="bg-[#F9F9F9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] w-full">
                            <Image
                                src="/about/future-locations.svg"
                                alt="Future Locations"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <SlideUp>
                                <h2 className="text-3xl sm:text-4xl font-black mb-6">Future Locations in Planning</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-gray-600 mb-8 text-l">
                                    As part of our ongoing growth strategy, we are actively planning additional deployments to support increasing demand and ensure long term scalability
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => window.location.href = '/contact'}
                                        className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm"
                                    >
                                        Learn More
                                    </button>
                                    <button
                                        onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                                        className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md border border-gray-200 text-sm"
                                    >
                                        Launch GPU Clusters
                                    </button>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
            {/* Where Will You Deploy Section */}
            <div
                className="bg-[#F9F9F9] border border-gray-200 py-16 sm:py-28"
                style={{ backgroundImage: "url('/contact-section.png')", backgroundSize: "cover", width: "100%" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                Where will you deploy?
                            </h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 mb-8 text-l max-w-3xl">
                                Create your Canopy Wave cloud account to launch GPU clusters immediately or contact us <br /> to reserve a long term contract
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
            </div>

            <Footer />
        </main>
    );
}