"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="text-center py-16">
                <h1 className="text-4xl font-bold mb-4">GPU CLOUD PRICING</h1>
                <p className="text-gray-600 mb-8">
                    Get access to world-class cloud resources and the best GPUs on the market
                </p>
                <div className="flex justify-center space-x-4">
                    <Button className="bg-gray-200 text-black">Hourly</Button>
                    <Button className="bg-[#8CC63F] text-white">Monthly</Button>
                    <Button className="bg-gray-200 text-black">Yearly</Button>
                </div>
            </div>

            {/* Pricing Table */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                    <div className="flex items-center mb-4">
                        <Image src="/optimized.png" alt="GPU Icon" width={32} height={32} className="mr-2" />
                        <h2 className="text-xl font-bold">On-demand GPU Instances</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Quickly spin up burst capacity on-demand—with the flexibility of great on-demand pricing
                    </p>
                    <div className="mt-8">
                        <div className="flex items-center space-x-2 mb-4">
                            <h3 className="text-lg font-bold mr-4">NVIDIA HGX H100</h3>
                            <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">DDR4 RAM</span>
                            <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">SSD</span>
                            <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">Up to 10 Gbps network</span>
                        </div>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 text-center">GPU Count</th>
                                    <th className="py-2 text-center">VRAM (GB)</th>
                                    <th className="py-2 text-center">vCPUs</th>
                                    <th className="py-2 text-center">System RAM (GB)</th>
                                    <th className="py-2 text-center">Local Storage(TB)</th>
                                    <th className="py-2 text-center">Instance Price(Per Hour)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array(4).fill(0).map((_, i) => (
                                    <tr key={i} className="border-b">
                                        <td className="py-2 text-center">1</td>
                                        <td className="py-2 text-center">80</td>
                                        <td className="py-2 text-center">32</td>
                                        <td className="py-2 text-center">128</td>
                                        <td className="py-2 text-center">500</td>
                                        <td className="py-2 text-center">$3.50</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-12">
                        <div className="flex items-center space-x-2 mb-4">
                            <h3 className="text-lg font-bold mr-4">NVIDIA HGX H200</h3>
                            <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">DDR4 RAM</span>
                            <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">SSD</span>
                            <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">Up to 10 Gbps network</span>
                        </div>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 text-center">GPU Count</th>
                                    <th className="py-2 text-center">VRAM (GB)</th>
                                    <th className="py-2 text-center">vCPUs</th>
                                    <th className="py-2 text-center">System RAM (GB)</th>
                                    <th className="py-2 text-center">Local Storage(TB)</th>
                                    <th className="py-2 text-center">Instance Price(Per Hour)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array(4).fill(0).map((_, i) => (
                                    <tr key={i} className="border-b">
                                        <td className="py-2 text-center">1</td>
                                        <td className="py-2 text-center">80</td>
                                        <td className="py-2 text-center">32</td>
                                        <td className="py-2 text-center">128</td>
                                        <td className="py-2 text-center">500</td>
                                        <td className="py-2 text-center">$3.50</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                  

                </div>


            </div>

            {/* Pricing Table */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                    <div className="flex items-center mb-4">
                        <Image src="/optimized.png" alt="GPU Icon" width={32} height={32} className="mr-2" />
                        <h2 className="text-xl font-bold">On-demand CPU Instances</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Quickly spin up burst capacity on-demand—with the flexibility of great on-demand pricing
                    </p>
                    <div className="flex items-center space-x-2 mb-4">
                        <h3 className="text-lg font-bold mr-4">NVIDIA HGX H100</h3>
                        <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">DDR4 RAM</span>
                        <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">SSD</span>
                        <span className="bg-gray-200 text-sm text-black px-2 py-1 rounded">Up to 10 Gbps network</span>
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 text-center">CPU Count</th>
                                <th className="py-2 text-center">VRAM (GB)</th>
                                <th className="py-2 text-center">vCPUs</th>
                                <th className="py-2 text-center">System RAM (GB)</th>
                                <th className="py-2 text-center">Local Storage(TB)</th>
                                <th className="py-2 text-center">Instance Price(Per Hour)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(4).fill(0).map((_, i) => (
                                <tr key={i} className="border-b">
                                    <td className="py-2 text-center">1</td>
                                    <td className="py-2 text-center">80</td>
                                    <td className="py-2 text-center">32</td>
                                    <td className="py-2 text-center">128</td>
                                    <td className="py-2 text-center">500</td>
                                    <td className="py-2 text-center">$3.50</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Call to Action */}
                <div className="bg-[#8CC63F] p-24 rounded-lg shadow-md text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-white">CALL US FOR COMPETITIVE PRICING.</h2>
                    <Button className="bg-white text-[#8CC63F] hover:bg-gray-100">Contact Us</Button>
                </div>
            </div>

            <Footer />
        </main>
    );
}