"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import { useRouter } from 'next/router';
import React from 'react';

export default function Careers() {
    const router = useRouter();
    const handleWatchClick = () => {
        const id = '1';
        router.push(`newsroom/${id}`);
    };

    return (
        <main className="min-h-screen relative text-gray-600">
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
                            <h1 className="text-5xl sm:text-7xl font-bold text-white mt-16 text-center leading-tight">
                                Newsroom
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-xl mt-8 text-center max-w-3xl mx-auto leading-relaxed">
                            Stay informed about the latest developments, important announcements, and industry insights of Canopy Wave
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#F9F9F9] to-white py-4">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col md:flex-row">
                            {/* 左侧部分 */}
                            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#8CC63F] to-[#7ab32f] p-12">
                                <div className="text-white h-full flex flex-col justify-center">
                                    <h2 className="text-4xl font-bold mb-6 leading-tight">Canopy Wave and ConfidentialMind Join Forces to Accelerate Enterprise AI Adoption</h2>
                                    <p className="text-lg opacity-90">Santa Clara, United States and Espoo, Finland, April 1, 2025 – Canopy Wave is excited to announce a strategic partnership with ConfidentialMind to revolutionize AI adoption within enterprises and nation states</p>
                                </div>
                            </div>

                            {/* 右侧内容部分 */}
                            <div className="w-full md:w-1/2 p-12 bg-white">
                                <div className="flex gap-3 mb-6">
                                    {/* <span className="bg-[#8CC63F] text-white px-4 py-2 rounded-full text-sm font-medium">Webinar</span>
                                    <span className="bg-[#8CC63F] text-white px-4 py-2 rounded-full text-sm font-medium">On-Demand</span> */}
                                </div>
                                <div className="mb-8">
                                    <p className="text-gray-800 text-lg leading-relaxed">This collaboration brings together Canopy Wave's cutting-edge instant GPU clusters and ConfidentialMind's deep AI expertise to provide businesses with a seamless, turn-key solution for deploying AI applications</p>
                                </div>
                                <button
                                    onClick={handleWatchClick}
                                    className="bg-[#8CC63F] text-white px-8 py-3 rounded-full hover:bg-[#7ab32f] transition-all duration-300 text-lg font-medium flex items-center gap-2 group"
                                >
                                    Watch
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
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