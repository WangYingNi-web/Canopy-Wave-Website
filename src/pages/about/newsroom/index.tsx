"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import { useRouter } from 'next/router';
import React from 'react';
import IwsLink from '@/components/IwsLink'
import Link from 'next/navigation';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { Button } from "@/components/ui/button";
import BackgroundTransition from '@/components/BackgroundTransition';

interface BlogPost {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
}
interface NewsroomPost {
    id: number;
    title: string;
    description: string;
    date: string;
    image?: string;
    link?: string;
}
export default function Newsroom() {
    useScrollToHash();
    const router = useRouter();
    const handleBlogClick = (title: string) => {
        // 将标题转换为URL友好的格式，处理空格和连字符
        const blogTitle = title.toLowerCase().replace(/[\s-]+/g, '-');
        router.push(`/blog/${blogTitle}`);
    };
    const handleWatchClick = (post: NewsroomPost) => {
        if (post.link) {
            router.push(post.link);
        }
    };
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Joint Blog - Accelerate Enterprise AI",
            description: "by James Liao, CTO of Canopy Wave, and Severi Tikkala, CTO of ConfidentialMind",
            date: "April 16, 2025",
            image: "/blog1.webp"
        },
        {
            id: 2,
            title: "Canopy Wave Launches Next-Gen GPU Cluster with NVIDIA GB200 NVL72",
            description: "Revolutionizing AI Infrastructure with Cutting-Edge Technology",
            date: "July 14, 2025",
            image: "/blog/blog2.png"
        },
        {
            id: 3,
            title: "How to Choose the Right Storage for Your AI Workflows",
            description: "Choosing the Right Storage Architecture for AI",
            date: "July 25, 2025",
            image: "/blog/workflows2.png"
        },
    ];
    const newsroomPosts: NewsroomPost[] = [
        {
            id: 1,
            title: "Canopy Wave and ConfidentialMind Joint Event",
            description: "Canopy Wave is excited to announce a strategic partnership with ConfidentialMind to revolutionize AI adoption within enterprises and nation states",
            date: "April 1, 2025",
            image: "/confidentialmind-logo.png",
            link: "/events/canopy-confidentialmind-partnership" // 更新为events链接
        },
        {
            id: 2,
            title: "AI Agent Summit Keynote by James Liao",
            description: "AI Agent Summit Keynote by James Liao @Canopy Wave",
            date: "May 15, 2025",
            image: "/blog2.svg",
            link: "/events/ai-agent-summit-keynote" // 更新为events链接
        },
    ];

    return (
        <main className="min-h-screen relative text-gray-600 bg-[#F9F9F9]">
            <Head>
                <title>Canopy Wave - News and Press Releases</title>
                <link rel="preload" href="/about/banner.svg" as="image" type="image/svg+xml" />
                <meta name="description" content="Newsroom - Canopy Wave" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            {/* Hero Section */}
            <div className="w-full h-[490px] relative mt-[84px]">
                <Image
                    src="/about/banner.svg"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px]">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-center leading-tight">
                                Newsroom
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8 text-center max-w-3xl mx-auto leading-relaxed">
                                Stay informed about the latest developments, important announcements, <br /> and industry insights of Canopy Wave
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

                    {/* <IwsLink href="/blog" className="text-gray-600 hover:text-gray-600 inline-flex items-center">
                        <span className="flex items-center">
                            See All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </IwsLink> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer flex flex-col" onClick={() => handleBlogClick(post.title)}>
                            <div className="relative mb-4 overflow-hidden rounded-lg shadow-xl">
                                <div className="relative aspect-[16/9] w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-all duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 flex-grow">{post.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-auto">
                                <IwsLink
                                    href={`/blog/${post.title.toLowerCase().replace(/[\s-]+/g, '-')}`}
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
                    {newsroomPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer" onClick={() => handleWatchClick(post)}>
                            <div className="relative h-60 mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={post.image || "/confidentialmind-logo.png"}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 truncate">{post.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <IwsLink
                                    href={post.link || '#'}
                                    className="text-[#8CC63F] hover:text-[#7AB82F] transition-colors duration-200 flex items-center"
                                >
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </IwsLink>
                                {/* <span>{post.date}</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ready to Get Started Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-28 overflow-hidden">
                <BackgroundTransition
                    defaultImage="/contact-section1.webp"  // 暗色版本
                    activeImage="/contact-section2.webp"   // 亮色版本
                    className="w-full h-full"
                    fadeDuration={4000}  // 4秒的点亮过程
                    threshold={0.7}  // 当70%进入视口时触发
                />
                <div className="relative z-30 container mx-auto px-4">
                    <div className="relative max-w-7xl mx-auto">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-600 mb-6">Ready to get started?</h2>
                        </SlideUp>
                        <SlideUp>
                            <div className="text-gray-600 mb-8 mx-auto text-l flex flex-col">
                                <span className="block sm:hidden">Create your Canopy Wave cloud account to launch GPU clusters immediately or contact us to reserve a long term contract</span>
                                <span className="hidden sm:block">Create your Canopy Wave cloud account to launch GPU clusters immediately <br /> or contact us to reserve a long term contract</span>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                                    Launch GPU instances
                                </Button>
                                <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>
                                    Contact Us
                                </Button>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}