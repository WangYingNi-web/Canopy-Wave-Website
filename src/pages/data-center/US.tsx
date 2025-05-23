"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function USDataCenter() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[600px]">
                <Image
                    src="/us-dc.jpg"
                    alt="US Data Center"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#80B224] flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-6">US Data Center</h1>
                        <p className="text-xl max-w-2xl mx-auto">
                            High-Performance Computing Infrastructure in Silicon Valley
                        </p>
                    </div>
                </div>
            </div>

            {/* Key Features */}
            <section className="py-20 bg-[#F5F9F4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Infrastructure Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <Image
                                    src="/icons/performance.svg"
                                    alt="Performance"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-4">High Performance</h3>
                                <p className="text-gray-600">
                                    Latest NVIDIA H100/H200 GPU clusters
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <Image
                                    src="/icons/network.svg"
                                    alt="Network"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-4">Low Latency</h3>
                                <p className="text-gray-600">
                                    Direct connection to major internet exchanges
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <Image
                                    src="/icons/security.svg"
                                    alt="Security"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
                                <p className="text-gray-600">
                                    SOC 2 Type II certified facility
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Benefits */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Strategic Location</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Located in Silicon Valley tech hub</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Direct access to major cloud providers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Multiple tier-1 network providers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>24/7 on-site technical support</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/us-map.jpg"
                                alt="US Data Center Location"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-20 bg-[#F5F9F4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Facility Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-6">Computing Power</h3>
                            <ul className="space-y-4">
                                <li>• 1000+ NVIDIA H100/H200 GPUs</li>
                                <li>• High-performance CPU clusters</li>
                                <li>• NVMe SSD storage systems</li>
                                <li>• RDMA networking infrastructure</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-6">Network</h3>
                            <ul className="space-y-4">
                                <li>• 100Gbps backbone</li>
                                <li>• Multi-carrier connectivity</li>
                                <li>• &lt;1ms latency to major exchanges</li>
                                <li>• DDoS protection included</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Certifications & Compliance</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 bg-white rounded-lg shadow">
                            <Image
                                src="/icons/soc2.svg"
                                alt="SOC 2"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                            />
                            <p>SOC 2 Type II</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <Image
                                src="/icons/iso.svg"
                                alt="ISO"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                            />
                            <p>ISO 27001</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <Image
                                src="/icons/hipaa.svg"
                                alt="HIPAA"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                            />
                            <p>HIPAA</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <Image
                                src="/icons/pci.svg"
                                alt="PCI DSS"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                            />
                            <p>PCI DSS</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#8CC63F] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
                    <p className="text-white text-xl mb-8">
                        Contact our team to learn more about our US data center capabilities
                    </p>
                    <button className="bg-white text-[#8CC63F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                        Contact Us
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}