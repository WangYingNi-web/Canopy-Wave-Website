"use client";

import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import BackgroundTransition from '@/components/BackgroundTransition';
import { Button } from "@/components/ui/button";

export default function PricingPage() {
    useScrollToHash();
    return (
        <main className="min-h-screen bg-[#F9F9F9] text-gray-600">
            <Head>
                <title>Canopy Wave - GPU Cloud Pricing</title>
                <link rel="preload" href="/about/banner.svg" as="image" type="image/svg+xml" />
            </Head>
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[490px] relative mt-[84px]">
                <Image
                    src="/about/banner.svg"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-center">
                                GPU Cloud Pricing
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8 text-center">
                                Get access to world-class cloud resources and the best GPUs on the market
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            <div className='bg-[#F9F9F9]'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="text-center">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl font-black mb-8">Compute</h1>
                            <p className="text-gray-600 mb-8">
                                Get models to market faster with the latest and greatest NVIDIA chips
                            </p>
                        </SlideUp>
                        <SlideUp>
                            <button
                                onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm"
                            >
                                Try Control Panel
                            </button>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Pricing Tables Container */}
            <div className="max-w-7xl mx-auto px-4 space-y-12 mb-16">
                {/* NVIDIA GB200 NVL72 */}
                <div id='GB200' className="mb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/pricing/NvidiaH200s.svg"
                                alt="H200"
                                width={24}
                                height={24}
                            />
                            <h3 className="text-sm font-semibold">NVIDIA GB200 NVL72</h3>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px] lg:w-full text-sm">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Instance Type</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">vCPUs</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">RAM</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">NVMe Storage</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Public IP</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">Price/Hour/GPU</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">NVIDIA GB200 NVL72</td>
                                        <td className="py-4 text-center">4</td>
                                        <td className="py-4 text-center">960 GB</td>
                                        <td className="py-4 text-center">30.72 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">
                                        $9.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* NVIDIA HGX B200 */}
                <div id='B200' className="mb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/pricing/NvidiaH200s.svg"
                                alt="H200"
                                width={24}
                                height={24}
                            />
                            <h3 className="text-sm font-semibold">NVIDIA HGX B200</h3>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px] lg:w-full text-sm">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Instance Type</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">vCPUs</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">RAM</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">NVMe Storage</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Public IP</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">Price/Hour/GPU</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">2x NVIDIA SXM5 B200</td>
                                        <td className="py-4 text-center">60</td>
                                        <td className="py-4 text-center">400 GB</td>
                                        <td className="py-4 text-center">2 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$4.50</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">4x NVIDIA SXM5 B200</td>
                                        <td className="py-4 text-center">120</td>
                                        <td className="py-4 text-center">800 GB</td>
                                        <td className="py-4 text-center">4 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$4.50</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">8x NVIDIA SXM5 B200</td>
                                        <td className="py-4 text-center">240</td>
                                        <td className="py-4 text-center">1.5 TB</td>
                                        <td className="py-4 text-center">8 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$4.50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* NVIDIA HGX H100 */}
                <div id='H100' className="mb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/pricing/NvidiaH100s.svg"
                                alt="H200"
                                width={24}
                                height={24}
                            />
                            <h3 className="text-sm font-semibold">NVIDIA HGX H100</h3>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px] lg:w-full text-sm">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Instance Type</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">vCPUs</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">RAM</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">NVMe Storage</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Public IP</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">Price/Hour/GPU</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">2x NVIDIA SXM5 H100</td>
                                        <td className="py-4 text-center">40</td>
                                        <td className="py-4 text-center">400 GB</td>
                                        <td className="py-4 text-center">2 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$2.25</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">4x NVIDIA SXM5 H100</td>
                                        <td className="py-4 text-center">80</td>
                                        <td className="py-4 text-center">800 GB</td>
                                        <td className="py-4 text-center">4 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$2.25</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">8x NVIDIA SXM5 H100</td>
                                        <td className="py-4 text-center">160</td>
                                        <td className="py-4 text-center">1.5 TB</td>
                                        <td className="py-4 text-center">6 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$2.25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* NVIDIA HGX H200 */}
                <div id='H200' className="mb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/pricing/NvidiaH100s.svg"
                                alt="H200"
                                width={24}
                                height={24}
                            />
                            <h3 className="text-sm font-semibold">NVIDIA HGX H200</h3>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px] lg:w-full text-sm">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Instance Type</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">vCPUs</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">RAM</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">NVMe Storage</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Public IP</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">Price/Hour/GPU</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">2x NVIDIA SXM5 H200</td>
                                        <td className="py-4 text-center">40</td>
                                        <td className="py-4 text-center">400 GB</td>
                                        <td className="py-4 text-center">2 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$3.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">4x NVIDIA SXM5 H200</td>
                                        <td className="py-4 text-center">80</td>
                                        <td className="py-4 text-center">800 GB</td>
                                        <td className="py-4 text-center">4 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$3.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 text-center">8x NVIDIA SXM5 H200</td>
                                        <td className="py-4 text-center">160</td>
                                        <td className="py-4 text-center">1.5 TB</td>
                                        <td className="py-4 text-center">8 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$3.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Other Charges Section */}
                <div id='other' className="text-center py-16 mb-16">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-black mb-4">Other charges</h2>
                        <p className="text-gray-600 mb-8 px-4">
                            Canopy Wave also provides high-performance storage and networking services
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <button
                            onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                            className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md mb-16 text-sm"
                        >
                            Try Control Panel
                        </button>
                    </SlideUp>
                    <div className="grid md:grid-cols-2 gap-8 px-4">
                        {/* Storage Section */}
                        <div className="border-t pt-8">
                            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                                <Image
                                    src="/pricing/storage.svg"
                                    alt="Storage"
                                    width={24}
                                    height={24}
                                    className='svg-gray'
                                />
                                <h3 className="text-sm font-semibold">Storage</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="min-w-[300px]">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-3 text-center">Product</th>
                                                <th className="py-3 text-center">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-4">Network Shared Storage</td>
                                                <td className="py-4 font-bold">$ 0.07 per GB per month</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-4">Object Storage</td>
                                                <td className="py-4 font-bold">$ 0.04 per GB per month</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Networking Section */}
                        <div className="border-t pt-8">
                            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                                <Image
                                    src="/pricing/networking.svg"
                                    alt="Networking"
                                    width={24}
                                    height={24}
                                    className='svg-gray'

                                />
                                <h3 className="text-sm font-semibold">Networking</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="min-w-[300px]">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-4">Product</th>
                                                <th className="py-4">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-4">Additional public IP address</td>
                                                <td className="py-4 font-bold">$ 4.00 per IP per month</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Contact Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32 overflow-hidden">
                {/* 背景图片 - 在小屏幕时隐藏 */}
                <div className="hidden md:block">
                    <BackgroundTransition
                        defaultImage="/contact-section1.webp"  // 暗色版本
                        activeImage="/contact-section2.webp"   // 亮色版本
                        className="w-full h-full"
                        fadeDuration={4000}  // 4秒的点亮过程
                        threshold={0.7}  // 当70%进入视口时触发
                    />
                </div>
                <div className="relative z-30 container mx-auto px-4">
                    <div className="relative max-w-7xl mx-auto">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black mb-6">Contact us for competitive</h2>
                        </SlideUp>
                        <SlideUp>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.location.href = '/contact'}>
                                    Contact Sales
                                </Button>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}