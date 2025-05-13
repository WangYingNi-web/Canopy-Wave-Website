"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';

export default function Careers() {
    return (
        <main className="min-h-screen relative">
            <Header />

            {/* Hero Section */}
            <div className="w-full h-[720px] relative mt-[84px]">
                <Image
                    src="/careers.svg"
                    alt="cpu-nodes"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-7xl font-bold text-white mt-16 text-center">
                                Not everything we do lives in the cloud.
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-lg mt-8 text-center">
                                Connect with our team at a future event or conference and check out our upcoming and on-demand webinars.
                                We hope to see you there!
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9F9F9] py-4">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            {/* 左侧绿色背景部分 */}
                            <div className="w-full md:w-1/2 bg-[#8CC63F] p-8">
                                <div className="text-white">
                                    <span className="inline-block mb-4">Webinar</span>
                                    <h2 className="text-3xl font-bold mb-4">Strategies for Maximizing GPU Performance</h2>
                                    <p className="mb-4">How CanopyWave&apos;s stack stays AI-first from all angles</p>
                                </div>
                            </div>

                            {/* 右侧内容部分 */}
                            <div className="w-full md:w-1/2 p-8">
                                <div className="flex gap-2 mb-4">
                                    <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-sm">Webinar</span>
                                    <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-sm">On-Demand</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4">PURPOSE-BUILT CLOUD INFRASTRUCTURE FOR AI INFERENCE</h2>
                                <div className="mb-6">
                                    <p className="font-semibold mb-2">FEATURING</p>
                                    <p className="text-gray-600">CHEN GOLDBERG, SVP ENGINEERING | CanopyWave</p>
                                    <p className="text-gray-600">CHETAN KAPOOR, CHIEF PRODUCT OFFICER | CanopyWave</p>
                                </div>
                                <button className="bg-[#8CC63F] text-white px-6 py-2 rounded-md hover:bg-[#7ab32f]">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 卡片 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-[#8CC63F] p-6">
                                <span className="text-white text-sm mb-2 block">Webinar</span>
                                <h3 className="text-white text-xl font-bold mb-2">Strategies for Maximizing GPU Performance</h3>
                                <p className="text-white text-sm">How CanopyWave&apos;s stack stays AI-first from all angles</p>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-xs">Webinar</span>
                                    <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-xs">On-Demand</span>
                                </div>
                                <h4 className="text-lg font-bold mb-4">Why NVIDIA Blackwell on CanopyWave</h4>
                                <div className="mb-4">
                                    <p className="text-sm font-semibold mb-2">Featuring</p>
                                    <p className="text-sm text-gray-600">Jacob Yundt, Director of Compute Architecture | CanopyWave</p>
                                    <p className="text-sm text-gray-600">Harsh Singh Banwait, Director of Product | CanopyWave</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                        <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                                    </svg>
                                    March 4, 2025
                                </div>
                                <button className="bg-[#8CC63F] text-white px-6 py-2 rounded-md hover:bg-[#7ab32f] text-sm">
                                    Watch
                                </button>
                            </div>
                        </div>
                        {/* 卡片 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-[#8CC63F] p-6">
                                <span className="text-white text-sm mb-2 block">Webinar</span>
                                <h3 className="text-white text-xl font-bold mb-2">Strategies for Maximizing GPU Performance</h3>
                                <p className="text-white text-sm">How CanWeave&apos;s stack stays AI-first from all angles</p>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-xs">Webinar</span>
                                    <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-xs">On-Demand</span>
                                </div>
                                <h4 className="text-lg font-bold mb-4">Why NVIDIA Blackwell on CanopyWave</h4>
                                <div className="mb-4">
                                    <p className="text-sm font-semibold mb-2">Featuring</p>
                                    <p className="text-sm text-gray-600">Jacob Yundt, Director of Compute Architecture | CanopyWave</p>
                                    <p className="text-sm text-gray-600">Harsh Singh Banwait, Director of Product | CanopyWave</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                        <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                                    </svg>
                                    March 4, 2025
                                </div>
                                <button className="bg-[#8CC63F] text-white px-6 py-2 rounded-md hover:bg-[#7ab32f] text-sm">
                                    Watch
                                </button>
                            </div>
                        </div>
                        {/* 卡片 3 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-[#8CC63F] p-6">
                                <span className="text-white text-sm mb-2 block">Webinar</span>
                                <h3 className="text-white text-xl font-bold mb-2">Strategies for Maximizing GPU Performance</h3>
                                <p className="text-white text-sm">How CanopyWave&apos;s stack stays AI-first from all angles</p>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-xs">Webinar</span>
                                    <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-xs">On-Demand</span>
                                </div>
                                <h4 className="text-lg font-bold mb-4">Why NVIDIA Blackwell on CanopyWave</h4>
                                <div className="mb-4">
                                    <p className="text-sm font-semibold mb-2">Featuring</p>
                                    <p className="text-sm text-gray-600">Jacob Yundt, Director of Compute Architecture | CanopyWave</p>
                                    <p className="text-sm text-gray-600">Harsh Singh Banwait, Director of Product | CanopyWave</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                        <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                                    </svg>
                                    March 4, 2025
                                </div>
                                <button className="bg-[#8CC63F] text-white px-6 py-2 rounded-md hover:bg-[#7ab32f] text-sm">
                                    Watch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}