"use client";

import Image from "next/image";
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NetworkingHardwarePage() {
    return (
        <main className="min-h-screen bg-white pt-16">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-[#80B224] from-gray-900 to-gray-800 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            High-Performance Network Hardware Solutions
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Providing enterprise-grade networking equipment and solutions with high bandwidth and low latency data transmission capabilities to deliver reliable network infrastructure for your business.
                        </p>
                        <button className="bg-[#80B224] hover:bg-[#6c9a1e] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Core Advantages */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Core Advantages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="w-12 h-12 bg-[#80B224] rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">High Performance</h3>
                            <p className="text-gray-600">Supporting up to 400Gbps network transmission rates to meet the bandwidth requirements of large-scale data centers.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="w-12 h-12 bg-[#80B224] rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                            <p className="text-gray-600">Employing redundant design and advanced fault detection mechanisms to ensure network stability and availability.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="w-12 h-12 bg-[#80B224] rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Scalability</h3>
                            <p className="text-gray-600">Modular design supports flexible expansion to easily accommodate network demands from business growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Solutions */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Product Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src="/network-switch.jpg"
                                    alt="High-Performance Switch"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">High-Performance Switches</h3>
                                <ul className="space-y-2 text-gray-600 mb-4">
                                    <li>• 100/200/400G ports support</li>
                                    <li>• Ultra-low latency design</li>
                                    <li>• Intelligent routing algorithms</li>
                                    <li>• Comprehensive monitoring</li>
                                </ul>
                                <button className="text-[#80B224] font-medium hover:underline">Learn More →</button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src="/network-card.jpg"
                                    alt="Network Adapter"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">High-Performance Network Adapters</h3>
                                <ul className="space-y-2 text-gray-600 mb-4">
                                    <li>• RDMA technology support</li>
                                    <li>• Hardware offload capabilities</li>
                                    <li>• Multi-queue support</li>
                                    <li>• Advanced virtualization features</li>
                                </ul>
                                <button className="text-[#80B224] font-medium hover:underline">Learn More →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Data Centers</h3>
                            <p className="text-gray-600">Providing high-performance network infrastructure for large-scale data centers to support massive data transmission and processing requirements.</p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">AI Computing</h3>
                            <p className="text-gray-600">Delivering low-latency, high-bandwidth network connectivity for AI training and inference clusters to enhance computational efficiency.</p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Financial Trading</h3>
                            <p className="text-gray-600">Offering ultra-low latency network solutions for financial institutions to meet the strict requirements of high-frequency trading.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our professional team is ready to provide detailed product information and technical support
                        </p>
                        <button className="bg-[#80B224] hover:bg-[#6c9a1e] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}