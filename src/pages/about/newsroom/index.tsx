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
    alttitle?: string;
}
interface NewsroomPost {
    id: number;
    title: string;
    description: string;
    date: string;
    image?: string;
    link?: string;
    alttitle?: string;
}

interface CaseStudyPost {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
    link?: string;
    alttitle?: string;
}

export default function Newsroom() {
    useScrollToHash();
    
    const router = useRouter();
    const handleBlogClick = (title: string) => {
        // 将标题转换为URL友好的格式，去除特殊字符（冒号、撇号等）并处理空格和连字符
        const blogTitle = title.toLowerCase()
            .replace(/[:'"]/g, '')  // 去除冒号、撇号、引号
            .replace(/[\s-]+/g, '-')  // 将空格和连字符转换为单个连字符
            .replace(/[\s.-]+/g, '-')
            .replace(/^-+|-+$/g, ''); // 去除开头和结尾的连字符
        router.push(`/blog/${blogTitle}`);
    };
    const handleWatchClick = (post: NewsroomPost) => {
        if (post.link) {
            router.push(post.link);
        }
    };

    const blogPosts: BlogPost[] = [
        // {
        //     id: 26,
        //     title: "Enterprise GPU Cluster Procurement Strategy",
        //     description: "GPUs, with their massive parallelism and floating-point throughput, have become the cornerstone of enterprise high-performance computing (HPC). Market analysts at TrendForce reported that global data-center GPU spending grew about 38% year-over-year in 2024.",
        //     date: "September 28, 2025",
        //     image: "/blog/enterprise-gpu-cluster.webp",
        //     alttitle: "Enterprise GPU Cluster"
        // },
        {
            id: 25,
            title: "LoRA vs. RAG: Key Comparisons and Use Cases",
            description: "This article provides a comparative analysis of LoRA fine-tuning and RAG, and explores the scenarios and audiences they are suitable for, helping readers choose the appropriate method based on their needs.",
            date: "September 27, 2025",
            image: "/blog/lora-vs-rag.webp",
            alttitle: "LoRA vs. RAG"
        },
        {
            id: 24,
            title: "How to Understand the Value of Computing Power",
            description: "Computing power is rapidly emerging as a key strategic resource in the new era, and its value is comparable to oil and steel in the industrial age.",
            date: "September 26, 2025",
            image: "/blog/computing-power.webp",
            alttitle: "computing power"
        },
        {
            id: 23,
            title: "RAG Equipping AI with Knowledge Plugins",
            description: "How can we overcome the limitations of knowledge to make AI smarter and more reliable?The answer lies in a key technology called Retrieval-Augmented Generation (RAG).",
            date: "September 25, 2025",
            image: "/blog/ai-rag.webp",
            alttitle: "RAG Technology"
        },
        {
            id: 22,
            title: "Large Model API Token Fees",
            description: "The choice of token-based pricing for large model APIs stems fundamentally from its strong correlation with computational costs. This model is more rational than traditional per-call pricing",
            date: "September 24, 2025",
            image: "/blog/api-token-fees.webp",
            alttitle: "API Token Fees"
        },
        {
            id: 21,
            title: "Canopy Wave Proprietary Monitoring System",
            description: "Backed by Canopy Wave's 24/7 operations team, we guarantee the stability and performance of your critical systems.",
            date: "September 23, 2025",
            image: "/blog/monitoring-system.webp",
            alttitle: "Canopy Wave Monitoring System"
        },
        {
            id: 20,
            title: "NVLink 5.0 is a Game-Changer for AI Agent Development",
            description: "The launch of NVIDIA's Blackwell architecture, spearheaded by the revolutionary B200 GPU, and its groundbreaking NVLink 5.0 technology isn't merely an incremental upgrade; it is the critical enabler that will unlock the true potential of AI Agents",
            date: "September 22, 2025",
            image: "/blog/ai-nvLink.webp",
            alttitle: "Blackwell's NVLink 5.0"
        },
        {
            id: 19,
            title: "How Businesses Can Prepare for Rising GPU Prices",
            description: "As the fourth quarter approaches key components—GPUs, DDR5 memory, CPUs, and enterprise-grade storage—have seen significant price increases",
            date: "September 20, 2025",
            image: "/blog/gpu-monitoring-system.webp",
            alttitle: "GPU Component Price"
        },
        {
            id: 18,
            title: "How Can Pay-Per-Token Inference Services Reduce AI Costs",
            description: "In an era where AI is reshaping all businesses, your team is facing these challenges:  Over-provisioning and Severe Resource；Waste",
            date: "September 19, 2025",
            image: "/blog/token-inference-service.webp",
            alttitle: "Token Inference Service"
        },
        {
            id: 17,
            title: "GPU Virtualization: Unlocking the Intelligent Future of Compute Sharing",
            description: "Enabling Efficient and Accessible High-Performance Computing through GPU Virtualization",
            date: "September 18, 2025",
            image: "/blog/ai-GPU-Virtualization.webp"
        },
        {
            id: 16,
            title: "Gpus In Edge Computing",
            description: "The Future of GPUs in Edge Computing: Lightweight and Energy Consumption Challenges",
            date: "September 17, 2025",
            image: "/blog/ai-gpu-edge.webp"
        },
        {
            id: 15,
            title: "AI Medical Imaging Analysis",
            description: "Beyond the Limits of the Human Eye: How AI Medical Imaging Analysis Becomes the 'Third Eye' for Doctors",
            date: "September 16, 2025",
            image: "/blog/ai-doctor.webp"
        },
        {
            id: 14,
            title: "Decoding AI Hallucinations",
            description: "OpenAI's Latest Research: Two Core Causes of AI Hallucinations and Their Solutions",
            date: "September 16, 2025",
            image: "/blog/ai-hallucinations.webp"
        },
        {
            id: 13,
            title: "AI Fine-tuning for Beginners",
            description: "Getting Started: The Simplest Way to Fine-tune Your First AI Model",
            date: "September 16, 2025",
            image: "/blog/ai-fine-tuning.webp"
        },
        {
            id: 12,
            title: "Humanity's Next Partner: The AI Agent",
            description: "A New Era of Human-Machine Symbiosis: The Characteristics, Challenges, and World-Transforming Potential of AI Agents",
            date: "September 12, 2025",
            image: "/blog/ai-agent.webp"
        },
        {
            id: 11,
            title: "Accelerated AI for Business",
            description: "Unlocking the Future of AI: How Accelerated Machine Learning Empowers Enterprises",
            date: "September 12, 2025",
            image: "/blog/ai-business.webp"
        },
        {
            id: 10,
            title: "Smarter Pet Care with AI",
            description: "AI is revolutionizing pet care with health monitoring, personalized nutrition, behavior analysis, and more.",
            date: "September 12, 2025",
            image: "/blog/ai-pet.webp"
        },
        {
            id: 9,
            title: "Cost Breakdown: 32-Unit GB200 GPU Cluster",
            description: "Cost Analysis for Building a GPU Cluster: A Case Study of 32 GB200 Units",
            date: "September 9, 2025",
            image: "/blog/gpu-cluster-cost.webp"
        },
        {
            id: 8,
            title: "AI's Role in Autonomous Driving",
            description: "The Key Role of AI in Autonomous Driving: From Environmental Perception to Intelligent Decision-Making",
            date: "September 8, 2025",
            image: "/blog/ai-car.webp"
        },
        {
            id: 7,
            title: "AI-Powered E-commerce",
            description: "Application of AI in E-commerce: Driving Efficiency and Revolutionizing Experience",
            date: "September 8, 2025",
            image: "/blog/ai-shopping.webp"
        },
        {
            id: 6,
            title: "GPU: The Core Engine of a New Era in Computing",
            description: "Powering the Next Wave of AI: Your Guide to GPU Selection",
            date: "September 5, 2025",
            image: "/blog/gpu-computing.webp"
        },
        {
            id: 5,
            title: "Why Enterprises Choose Dedicated LLM Endpoints",
            description: "Unlocking Performance, Security, and Control for Mission-Critical AI",
            date: "September 4, 2025",
            image: "/blog/dedicated-endpoints.webp"
        },
        {
            id: 4,
            title: "AI Generates Personalized Content",
            description: "Dynamic Content Generation: AI creates uniquely personalized content for each consumer",
            date: "September 1, 2025",
            image: "/blog/ai-content-generation.webp"
        },
        {
            id: 3,
            title: "AI: Revolutionizing Animal Health Monitoring",
            description: "A New Chapter in Revolutionizing Animal Health Monitoring ",
            date: "August 29, 2025",
            image: "/blog/workflows2.webp"
        },
        {
            id: 2,
            title: "Canopy Wave Launches Next-Gen GPU Cluster with NVIDIA GB200 NVL72",
            description: "Revolutionizing AI Infrastructure with Cutting-Edge Technology",
            date: "July 14, 2025",
            image: "/blog/blog2.webp"
        },
        {
            id: 1,
            title: "Joint Blog - Accelerate Enterprise AI",
            description: "by James Liao, CTO of Canopy Wave, and Severi Tikkala, CTO of ConfidentialMind",
            date: "April 16, 2025",
            image: "/blog1.webp"
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
        }
    ];

    const caseStudyPosts: CaseStudyPost[] = [
        {
            id: 1,
            title: "Supporting Academic Research with Advanced AI and GPU Cloud Computing",
            description: "Canopy Wave's partnership with the University of California San Diego research team is a story about how practical AI cloud GPU resources empower ambitious academic work, especially in unraveling complex government contracting challenges.",
            date: "October 15, 2024",
            image: "/case-studies/techcorp-case.webp",
            alttitle: "Cloud gpu for academic research",
            link:'/case-studies/supporting-academic-research-with-advanced-ai-and-gpu-cloud-computing'
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
            <div className="w-full h-[520px] relative mt-[84px]">
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
                                        alt={post.alttitle || post.title}
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
                                    className="px-3 py-1 bg-[#8CC63F] text-white text-sm hover:bg-[#7ab32f] transition-colors"
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
                                    alt={post.alttitle || post.title}
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

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-t border-gray-200" />
            </div>

            {/* Case Studies Section */}
            {/* <div id='case-studies' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-center mb-8">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-600">Case Studies</h2>
                    </SlideUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudyPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <div className="relative h-60 mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={post.image || "/confidentialmind-logo.png"}
                                    alt={post.alttitle || post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 truncate">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.description}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{post.date}</span>
                                <IwsLink
                                     href={post.link || '#'}
                                    className="text-[#8CC63F] hover:text-[#7AB82F] transition-colors duration-200 flex items-center"
                                >
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </IwsLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Divider */}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-t border-gray-200" />
            </div> */}
            

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