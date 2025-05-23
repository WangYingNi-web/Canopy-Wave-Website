"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CanadaDataCenter() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[600px]">
                <Image
                    src="/canada-dc.jpg"
                    alt="Canada Data Center"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#80B224] flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-6">Canada Data Center</h1>
                        <p className="text-xl max-w-2xl mx-auto">
                            Strategic location with state-of-the-art facilities providing low-latency connectivity across North America
                        </p>
                    </div>
                </div>
            </div>

            {/* Key Features */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Data Center Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <Image
                                    src="/icons/power.svg"
                                    alt="Power"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-4">Power Infrastructure</h3>
                                <p className="text-gray-600">
                                    N+1 redundant power systems with 99.999% availability
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
                                <h3 className="text-xl font-semibold mb-4">Network Connectivity</h3>
                                <p className="text-gray-600">
                                    Multiple tier-1 carriers with redundant paths
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
                                <h3 className="text-xl font-semibold mb-4">Security</h3>
                                <p className="text-gray-600">
                                    24/7 on-site security with biometric access control
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
                                    <span>Located in Montreal&apos;s technology hub</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Access to renewable energy sources</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Excellent connectivity to major North American cities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Natural cooling advantages reducing operational costs</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/canada-map.jpg"
                                alt="Canada Data Center Location"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-6">Facility</h3>
                            <ul className="space-y-4">
                                <li>• Total Space: 100,000 sq ft</li>
                                <li>• Raised Floor: 80,000 sq ft</li>
                                <li>• Floor Loading: 1,500 lbs/sq ft</li>
                                <li>• Clear Height: 12 ft</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-6">Power</h3>
                            <ul className="space-y-4">
                                <li>• Total Power: 30MW</li>
                                <li>• N+1 UPS Configuration</li>
                                <li>• Dual Power Feeds</li>
                                <li>• 48-hour Fuel Storage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-[#8CC63F] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
                    <p className="text-white text-xl mb-8">
                        Contact our team to learn more about our Canada data center capabilities
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