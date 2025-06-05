"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import { useRouter } from 'next/router';
import React from 'react';
import IwsLink from '@/components/IwsLink'
import { useScrollToHash } from '@/hooks/useScrollToHash';

interface BlogPost {
    id: number;
    title: string;
    description: string;
    date: string;
}
export default function Newsroom() {
    useScrollToHash();
    const router = useRouter();
    const handleBlogClick = () => {
        const id = '1';
        router.push(`/blog/${id}`);
    };
    const handleWatchClick = () => {
        const id = '1';
        router.push(`newsroom/${id}`);
    };
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Joint Blog - Accelerate Enterprise AI",
            description: "by James Liao, CTO of Canopy Wave, and Severi Tikkala, CTO of ConfidentialMind",
            date: "May 20, 2025"
        },
        // {
        //   id: 2,
        //   title: "INSTANT GPU CLUSTER FOR ENTERPRISE AI",
        //   description: "Instant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AIInstant GPU Cluster for Enterprise AI",
        //   date: "April 2, 2023"
        // },
    ];

    return (
        <main className="min-h-screen relative text-gray-600 bg-[#F9F9F9]">
            <Header />
            {/* Hero Section */}
            <div className="w-full h-[490px] relative mt-[84px]">
                <Image
                    src="/about/banner.svg"
                    alt="banner"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px]">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl font-black text-[#80B224] text-center leading-tight">
                                Newsroom
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8 text-center max-w-3xl mx-auto leading-relaxed">
                                Stay informed about the latest developments, important announcements, and industry insights of <br /> Canopy Wave
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div id='blog' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-center mb-8">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-600">Blog</h2>
                    </SlideUp>

                    {/* <Link href="/blog" className="text-gray-600 hover:text-gray-600 inline-flex items-center">
                        <span className="flex items-center">
                            See All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </Link> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer" onClick={handleBlogClick}>
                            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src="/blog.svg"
                                    alt={post.title}
                                    layout="fill"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">{post.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <IwsLink
                                    href="/blog/1"
                                    className="px-3 py-1 bg-[#8CC63F] text-white text-sm rounded-full hover:bg-[#7ab32f] transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Article
                                </IwsLink>
                                <span>{post.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-t border-gray-200" />
            </div>


            {/* Events Section */}
            <div id='events' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-center mb-8">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-600">Events</h2>
                    </SlideUp>
                    {/* <Link href="/events" className="text-gray-600 hover:text-gray-600 inline-flex items-center">
                        <span className="flex items-center">
                            See All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </Link> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group cursor-pointer" onClick={handleWatchClick}>
                        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                            <Image
                                src="/confidentialmind-logo.svg"
                                alt="ConfidentialMind Logo"
                                layout="fill"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-600 mb-2 truncate">Canopy Wave and ConfidentialMind Joint Event</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <IwsLink
                                href="/about/newsroom/1"
                                className="px-3 py-1 bg-[#8CC63F] text-white text-sm rounded-full hover:bg-[#7ab32f] transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Article
                            </IwsLink>
                            <span>May 20,2025</span>
                        </div>
                    </div>
                </div>
            </div>





            <Footer />
        </main>
    );
}