"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#F9F9F9]">
            <Header />

            {/* Hero Section */}
            <div className="text-center py-16 pt-40 px-4">
                <SlideUp>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Compute</h1>
                    <p className="text-gray-600 mb-8">
                        Get models to market faster with the latest and greatest NVIDIA chips
                    </p>
                </SlideUp>
                <SlideUp>
                    <button
                        onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                        className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md"
                    >
                        Try Control Panel
                    </button>
                </SlideUp>
            </div>

            {/* Pricing Tables Container */}
            <div className="max-w-7xl mx-auto px-4 space-y-12 mb-16">
                {/* NVIDIA HGX H100 */}
                <div className="mb-16 scroll-mt-24">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/pricing/NvidiaH100s.svg"
                                alt="H100"
                                width={24}
                                height={24}
                                className="mr-8"
                            />
                            <h3 className="text-xl font-semibold">NVIDIA SXM5 H100</h3>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px] lg:w-full">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 text-left whitespace-nowrap w-[18%]">Instance Type</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">vCPUs</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">RAM</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[18%]">NVMe Storage</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Public IP</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">Price/Hour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-4">2x NVIDIA SXM5 H100</td>
                                        <td className="py-4 text-center">40</td>
                                        <td className="py-4 text-center">400 GB</td>
                                        <td className="py-4 text-center">1.5 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$4.50</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4">4x NVIDIA SXM5 H100</td>
                                        <td className="py-4 text-center">80</td>
                                        <td className="py-4 text-center">800 GB</td>
                                        <td className="py-4 text-center">3 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$9.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4">8x NVIDIA SXM5 H100</td>
                                        <td className="py-4 text-center">160</td>
                                        <td className="py-4 text-center">1.5 TB</td>
                                        <td className="py-4 text-center">6 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$18.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* NVIDIA HGX H200 */}
                <div id='H200' className="mb-16 scroll-mt-24">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/pricing/NvidiaH200s.svg"
                                alt="H200"
                                width={24}
                                height={24}
                            />
                            <h3 className="text-xl font-semibold">NVIDIA SXM5 H200</h3>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px] lg:w-full">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 text-left whitespace-nowrap w-[18%]">Instance Type</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">vCPUs</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">RAM</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[18%]">NVMe Storage</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[12%]">Public IP</th>
                                        <th className="py-3 text-center whitespace-nowrap w-[15%]">Price/Hour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-4">2x NVIDIA SXM5 H200</td>
                                        <td className="py-4 text-center">40</td>
                                        <td className="py-4 text-center">400 GB</td>
                                        <td className="py-4 text-center">2 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$6.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4">4x NVIDIA SXM5 H200</td>
                                        <td className="py-4 text-center">80</td>
                                        <td className="py-4 text-center">800 GB</td>
                                        <td className="py-4 text-center">4 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$12.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4">8x NVIDIA SXM5 H200</td>
                                        <td className="py-4 text-center">160</td>
                                        <td className="py-4 text-center">1.5 TB</td>
                                        <td className="py-4 text-center">8 TB</td>
                                        <td className="py-4 text-center">1</td>
                                        <td className="py-4 text-center font-semibold">$24.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Other Charges Section */}
                <div id='other' className="text-center py-16 mb-16 scroll-mt-24">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Other charges</h2>
                        <p className="text-gray-600 mb-8 px-4">
                            Canopywave also provides high-performance storage and networking services
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <button
                            onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                            className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md mb-16"
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
                                />
                                <h3 className="text-xl font-semibold">Storage</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="min-w-[300px]">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-3 text-left">Product</th>
                                                <th className="py-3 text-right">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-4">Network Shared Storage</td>
                                                <td className="py-4 text-right">$ 0.07 per GB per month</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-4">Object Storage</td>
                                                <td className="py-4 text-right">$ 0.04 per GB per month</td>
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
                                />
                                <h3 className="text-xl font-semibold">Networking</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="min-w-[300px]">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-3 text-left">Product</th>
                                                <th className="py-3 text-right">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-4">Additional public IP address</td>
                                                <td className="py-4 text-right">$ 4.00 per IP per month</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <section className="bg-[#8CC63F] rounded-lg shadow-lg p-8 sm:p-20 text-center my-20 relative">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="text-center lg:text-left w-full lg:w-auto mb-8 lg:mb-0">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Call us for competitive pricing</h2>
                            <Button 
                                className="bg-white text-[#8CC63F] hover:bg-gray-100 text-lg px-8 py-3 mt-4"
                                onClick={() => window.location.href = '/contact'}
                            >
                                Contact Us
                            </Button>
                        </div>
                        <div className="hidden lg:block">
                            <Image
                                src="/boxes.svg"
                                alt="Boxes illustration"
                                width={300}
                                height={200}
                            />
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}