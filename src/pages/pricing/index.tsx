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
            <div className="text-center py-16 pt-32">
                <h1 className="text-4xl font-bold mb-4">GPU CLOUD PRICING</h1>
                <p className="text-gray-600 mb-8">
                    Get access to world-class cloud resources and the best GPUs on the market
                </p>
            </div>

            {/* Pricing Tables Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-16">
                {/* GPU Compute Section */}
                <section className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 bg-[#F5F9F4]">
                        <h2 className="text-2xl font-bold mb-4">GPU Compute</h2>
                    </div>

                    {/* NVIDIA HGX H100 */}
                    <div className="p-6 border-b">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-semibold">NVIDIA HGX H100</h3>
                                <p className="text-gray-600 mt-1">Enterprise-grade GPU computing solution</p>
                            </div>
                            <div className="flex space-x-2">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">80GB HBM3</span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">NVLink</span>
                            </div>
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-3 text-left">Configuration</th>
                                    <th className="py-3 text-center">vCPUs</th>
                                    <th className="py-3 text-center">RAM</th>
                                    <th className="py-3 text-center">Storage</th>
                                    <th className="py-3 text-center">Price/Hour</th>
                                    <th className="py-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-4">1x H100</td>
                                    <td className="py-4 text-center">32</td>
                                    <td className="py-4 text-center">256 GB</td>
                                    <td className="py-4 text-center">2 TB NVMe</td>
                                    <td className="py-4 text-center font-semibold">$3.50</td>
                                    <td className="py-4 text-center">
                                        <Button className="bg-[#8CC63F] text-white text-sm">Deploy</Button>
                                    </td>
                                </tr>
                                {/* 添加更多配置选项 */}
                            </tbody>
                        </table>
                    </div>

                    {/* NVIDIA HGX H200 */}
                    <div className="p-6 border-b">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-semibold">NVIDIA HGX H200</h3>
                                <p className="text-gray-600 mt-1">Next-generation GPU computing</p>
                            </div>
                            <div className="flex space-x-2">
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">141GB HBM3e</span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">NVLink</span>
                            </div>
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-3 text-left">Configuration</th>
                                    <th className="py-3 text-center">vCPUs</th>
                                    <th className="py-3 text-center">RAM</th>
                                    <th className="py-3 text-center">Storage</th>
                                    <th className="py-3 text-center">Price/Hour</th>
                                    <th className="py-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-4">1x H100</td>
                                    <td className="py-4 text-center">32</td>
                                    <td className="py-4 text-center">256 GB</td>
                                    <td className="py-4 text-center">2 TB NVMe</td>
                                    <td className="py-4 text-center font-semibold">$3.50</td>
                                    <td className="py-4 text-center">
                                        <Button className="bg-[#8CC63F] text-white text-sm">Deploy</Button>
                                    </td>
                                </tr>
                                {/* 添加更多配置选项 */}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CPU Section */}
                <section className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 bg-[#F5F9F4]">
                        <h2 className="text-2xl font-bold mb-4">CPU Compute</h2>
                    </div>
                    <div className="p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-3 text-left">Type</th>
                                    <th className="py-3 text-center">vCPUs</th>
                                    <th className="py-3 text-center">RAM</th>
                                    <th className="py-3 text-center">Storage</th>
                                    <th className="py-3 text-center">Price/Hour</th>
                                    <th className="py-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-4">xxxx</td>
                                    <td className="py-4 text-center">xxxx</td>
                                    <td className="py-4 text-center">xxxx</td>
                                    <td className="py-4 text-center">xxxx</td>
                                    <td className="py-4 text-center font-semibold">xxxx</td>
                                    <td className="py-4 text-center">
                                        <Button className="bg-[#8CC63F] text-white text-sm">Deploy</Button>
                                    </td>
                                </tr>
                                {/* 添加更多配置选项 */}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Storage Section */}
                <section className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 bg-[#F5F9F4]">
                        <h2 className="text-2xl font-bold mb-4">Storage Solutions</h2>
                    </div>

                    {/* Cloud Storage */}
                    <div className="p-6 border-b">
                        <h3 className="text-xl font-semibold mb-4">Cloud Storage</h3>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-3 text-left">Type</th>
                                    <th className="py-3 text-center">Capacity</th>
                                    <th className="py-3 text-center">Performance</th>
                                    <th className="py-3 text-center">Price/GB/Month</th>
                                    <th className="py-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-4">xxxx</td>
                                    <td className="py-4 text-center">xxxx</td>
                                    <td className="py-4 text-center">xxxx</td>
                                    <td className="py-4 text-center">xxxx</td>
                                    <td className="py-4 text-center font-semibold">xxxx</td>
                                    <td className="py-4 text-center">
                                        <Button className="bg-[#8CC63F] text-white text-sm">Deploy</Button>
                                    </td>
                                </tr>
                                {/* 添加更多配置选项 */}
                            </tbody>
                        </table>
                    </div>

                    {/* RDMA Storage */}
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">RDMA Storage</h3>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-3 text-left">Type</th>
                                    <th className="py-3 text-center">Capacity</th>
                                    <th className="py-3 text-center">IOPS</th>
                                    <th className="py-3 text-center">Throughput</th>
                                    <th className="py-3 text-center">Price/GB/Month</th>
                                    <th className="py-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-4">xxxx</td>
                                    <td className="py-4 text-center">xxxx</td>
                                    <td className="py-4 text-center">xxxx GB</td>
                                    <td className="py-4 text-center">xxxx</td>
                                    <td className="py-4 text-center font-semibold">xxxx</td>
                                    <td className="py-4 text-center">
                                        <Button className="bg-[#8CC63F] text-white text-sm">Deploy</Button>
                                    </td>
                                </tr>
                                {/* 添加更多配置选项 */}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-[#8CC63F] rounded-lg shadow-lg p-20 text-center my-20 relative">
                    <div className="flex justify-between items-center">
                        <div className="text-left">
                            <h2 className="text-4xl font-bold text-white mb-4">CALL US FOR COMPETITIVE PRICING</h2>
                            <Button className="bg-white text-[#8CC63F] hover:bg-gray-100 text-lg px-8 py-3 mt-4">
                                Contact Us
                            </Button>
                        </div>
                        <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
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