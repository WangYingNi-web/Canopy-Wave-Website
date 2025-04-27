"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function IcelandDataCenter() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[600px]">
                <Image
                    src="/iceland-dc.jpg"
                    alt="Iceland Data Center"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-6">Iceland Data Center</h1>
                        <p className="text-xl max-w-2xl mx-auto">
                            100% Renewable Energy Powered Data Center with Natural Cooling Advantage
                        </p>
                    </div>
                </div>
            </div>

            {/* Sustainability Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Sustainable by Design</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <Image
                                    src="/icons/renewable.svg"
                                    alt="Renewable Energy"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-4">100% Green Energy</h3>
                                <p className="text-gray-600">
                                    Powered by geothermal and hydroelectric energy
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <Image
                                    src="/icons/cooling.svg"
                                    alt="Natural Cooling"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-4">Natural Cooling</h3>
                                <p className="text-gray-600">
                                    Year-round cool climate reduces cooling costs
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <Image
                                    src="/icons/carbon.svg"
                                    alt="Carbon Neutral"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-4">Carbon Neutral</h3>
                                <p className="text-gray-600">
                                    Zero carbon footprint operation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Advantages */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Strategic Advantages</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Strategic location between North America and Europe</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Stable political environment and strong infrastructure</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Low-latency connectivity to major financial centers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8CC63F] mr-2">✓</span>
                                    <span>Abundant renewable energy resources</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/iceland-map.jpg"
                                alt="Iceland Data Center Location"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Connectivity */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Global Connectivity</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-6">Network Infrastructure</h3>
                            <ul className="space-y-4">
                                <li>• Multiple submarine cable systems</li>
                                <li>• Direct routes to Europe and North America</li>
                                <li>• Redundant fiber paths</li>
                                <li>• Low-latency connections to major markets</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-6">Performance</h3>
                            <ul className="space-y-4">
                                <li>• ~19ms latency to London</li>
                                <li>• ~42ms latency to New York</li>
                                <li>• 99.999% network availability</li>
                                <li>• 24/7 NOC support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Environmental Impact */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Environmental Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-[#8CC63F] mb-4">100%</div>
                            <p className="text-gray-600">Renewable Energy</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#8CC63F] mb-4">0</div>
                            <p className="text-gray-600">Carbon Emissions</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#8CC63F] mb-4">-40%</div>
                            <p className="text-gray-600">Power Usage vs. Traditional DCs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-[#8CC63F] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Experience Sustainable Computing</h2>
                    <p className="text-white text-xl mb-8">
                        Join us in building a greener future for data centers
                    </p>
                    <button className="bg-white text-[#8CC63F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                        Contact Sales
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}