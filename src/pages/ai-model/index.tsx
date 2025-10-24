"use client";

import React, { useMemo, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SlideUp from "@/components/slide";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import BackgroundTransition from "@/components/BackgroundTransition";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

type ModelItem = {
    id: string;
    name: string;
    family: string; // e.g. Chat / Image / Vision
    params?: string; // e.g. 70B
    context?: string; // e.g. 128K context
    featured?: boolean;
    logo?: string; // public path
    tags: string[]; // for category filter
};

const allModels: ModelItem[] = [
    // Featured (existing)
    { id: "llama-8b", name: "LLAMA 3.3 8B INSTRUCT", family: "CHAT", params: "8B", context: "128K context", featured: true, logo: "/ai-model/allmodels_ic_llama.png", tags: ["Chat"] },
    { id: "llama-70b", name: "LLAMA 3.3 70B INSTRUCT", family: "CHAT", params: "70B", context: "128K context", featured: true, logo: "/ai-model/allmodels_ic_llama.png", tags: ["Chat"] },
    { id: "gemma-27b", name: "GEMMA 3 27B", family: "CHAT", params: "27B", context: "32K context", featured: true, logo: "/ai-model/allmodels_ic_gemma.png", tags: ["Chat"] },
    { id: "gpt-oss-120b", name: "GPT-OSS 120B", family: "CHAT", params: "120B", context: "128K context", featured: true, logo: "/ai-model/allmodels_ic_gpt.png", tags: ["Chat"] },

    // From screenshot
    { id: "deepseek-v32-exp", name: "DEEPSEEK V3.2 EXP", family: "CHAT", params: "685B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Chat"] },
    { id: "qwen-25-7b-instruct", name: "QWEN 2.5 7B INSTRUCT", family: "CHAT", params: "7B", context: "128K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Chat"] },
    { id: "mixtral-8x22b-instruct", name: "MIXTRAL 8X22B INSTRUCT", family: "CHAT", params: "141B", context: "64K context", logo: "/ai-model/allmodels_ic_mixtral.png", tags: ["Chat"] },
    { id: "gpt-oss-20b", name: "GPT-OSS 20B", family: "CHAT", params: "20B", context: "128K context", logo: "/ai-model/allmodels_ic_gpt.png", tags: ["Chat"] },
    { id: "glm-46", name: "GLM 4.6", family: "CHAT", params: "355B", context: "128K context", logo: "/ai-model/allmodels_ic_glm.png", tags: ["Chat"] },
    { id: "phi3-medium-instruct", name: "PHI-3 MEDIUM INSTRUCT", family: "CHAT", params: "14B", context: "128K context", logo: "/ai-model/allmodels_ic_phi.png", tags: ["Chat"] },
    { id: "qwen3-235b-a22b-instruct", name: "QWEN3-235B-A22B-INSTRUCT", family: "CHAT", params: "235B", context: "256K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Chat"] },
    { id: "deepseek-v3-0324", name: "DEEPSEEK V3 0324", family: "CHAT", params: "671B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Chat"] },
    { id: "deepseek-r1-0528", name: "DEEPSEEK R1 0528", family: "CHAT", params: "685B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Chat"] },
    { id: "glm-45", name: "GLM 4.5", family: "CHAT", params: "355B", context: "128K context", logo: "/ai-model/allmodels_ic_glm.png", tags: ["Chat"] },
    { id: "qwen3-14b-instruct", name: "QWEN3 14B INSTRUCT", family: "CHAT", params: "14B", context: "128K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Chat"] },

    // New additions from latest screenshot
    { id: "pixtral-12b-instruct", name: "PIXTRAL 12B INSTRUCT", family: "CHAT", params: "12B", context: "128K context", logo: "/ai-model/allmodels_ic_mixtral.png", tags: ["Chat"] },
    { id: "mistral-nemo-12b-instruct", name: "MISTRAL NEMO 12B INSTRUCT", family: "CHAT", params: "12B", context: "128K context", logo: "/ai-model/allmodels_ic_mixtral.png", tags: ["Chat"] },
    { id: "llama-4-scout-instruct", name: "LLAMA 4 SCOUT INSTRUCT", family: "CHAT", params: "109B", context: "128K context", logo: "/ai-model/allmodels_ic_llama.png", tags: ["Chat"] },
    { id: "kimi-k2-instruct-0905", name: "KIMI K2 INSTRUCT-0905", family: "CHAT", params: "1T", context: "256K context", logo: "/ai-model/allmodels_ic_kimi.png", tags: ["Chat"] },
    { id: "qwen3-coder-480b-a35", name: "QWEN3 CODER 480B A35B INSTRUCT", family: "CHAT", params: "480B", context: "256K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Chat"] },
    { id: "deepseek-v31", name: "DEEPSEEK V3.1", family: "CODE", params: "671B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Code"] },
    { id: "qwen25-32b-coder", name: "QWEN2.5-32B-CODER", family: "CODE", params: "32B", context: "128K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Code"] },
    { id: "starcoder2-15b", name: "STARCODER2 15B", family: "CODE", params: "15B", context: "16K context", logo: "/ai-model/allmodels_ic_starcoder2.png", tags: ["Code"] },
    { id: "codegemma-7b", name: "CODEGEMMA 7B", family: "CODE", params: "7B", context: "8K context", logo: "/ai-model/allmodels_ic_gemma.png", tags: ["Code"] },

    // New additions (CODE / VISION / VIDEO / IMAGE) from latest screenshot #2
    { id: "phind-codellama-34b", name: "PHIND-CODELLAMA 34B", family: "CODE", params: "34B", context: "4K context", logo: "/ai-model/allmodels_ic_phind.png", tags: ["Code"] },
    { id: "deepseek-coder-v2-16b", name: "DEEPSEEK-CODER V2 16B", family: "CODE", params: "16B", context: "128K context", logo: "/ai-model/allmodels_ic_deepseek.png", tags: ["Code"] },
    { id: "qwen25-vl-72b", name: "QWEN2.5-VL-72B", family: "VISION", params: "72B", context: "128K context", logo: "/ai-model/allmodels_ic_qwen.png", tags: ["Vision"] },
    { id: "glm45v", name: "GLM4.5V", family: "VISION", params: "106B", context: "128K context", logo: "/ai-model/allmodels_ic_glm.png", tags: ["Vision"] },
    { id: "intern-vl-2-0", name: "INTERN VL 2.0", family: "VISION", params: "26B", context: "4K context", logo: "/ai-model/allmodels_ic_intern.png", tags: ["Vision"] },
    { id: "wan-2-2-t2v", name: "WAN 2.2 T2V", family: "VIDEO", params: "27B", context: "N/A context", logo: "/ai-model/allmodels_ic_wan.png", tags: ["Video"] },
    { id: "mochi-1", name: "MOCHI 1", family: "VIDEO", params: "10B", context: "N/A context", logo: "/ai-model/allmodels_ic_mochi.png", tags: ["Video"] },
    { id: "hunyuanvideo-i2v", name: "HUNYUANVIDEO-I2V", family: "VIDEO", params: "13B", context: "N/A context", logo: "/ai-model/allmodels_ic_hunyuanvideo.png", tags: ["Video"] },
    { id: "sd3-medium", name: "STABLE DIFFUSION 3 MEDIUM", family: "IMAGE", params: "2B", context: "N/A context", logo: "/ai-model/allmodels_ic_stable.png", tags: ["Image"] },
    { id: "flux1-dev", name: "FLUX.1 DEV", family: "IMAGE", params: "12B", context: "N/A context", logo: "/ai-model/allmodels_ic_flux.png", tags: ["Image"] },
    { id: "flux1-kontext-max", name: "FLUX.1 KONTEXT MAX", family: "IMAGE", params: "12B", context: "N/A context", logo: "/ai-model/allmodels_ic_flux.png", tags: ["Image"] },
];

const categories = [
    "All",
    "Transcribe",
    "Chat",
    "Image",
    "Vision",
    "Audio",
    "Moderation",
    "Code",
    "Embeddings",
    "Rerank",
];

export default function AiModelPage() {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [query, setQuery] = useState<string>("");
    const [visibleRows, setVisibleRows] = useState<number>(3);
    const [loadClicks, setLoadClicks] = useState<number>(0);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(57); // 设置为扩展数组的中间位置
    const [isTransitioning, setIsTransitioning] = useState(false);
    const newsCards = [
        {
            id: 'llama',
            href: "/ai-model/dedicated-endpoint",
            family: "CHAT",
            name: "LLAMA 3.3 70B INSTRUCT",
            params: "70B",
            context: "128K",
            logoType: "meta"
        },
        {
            id: 'gemma',
            href: "/ai-model/dedicated-endpoint",
            family: "CHAT",
            name: "GEMMA 3 27B",
            params: "27B",
            context: "32K",
            logoType: "google"
        },
        {
            id: 'gpt-oss',
            href: "/ai-model/dedicated-endpoint",
            family: "CHAT",
            name: "GPT-OSS 120B",
            params: "120B",
            context: "128K",
            logoType: "openai"
        },
    ];
    const handleNextNews = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentNewsIndex(prev => prev + 1);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const handlePrevNews = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentNewsIndex(prev => prev - 1);
        setTimeout(() => setIsTransitioning(false), 300);
    };
    const getExtendedCards = () => {
        // 创建足够多的重复卡片以支持无限滑动
        const repeats = 30; // 增加重复次数
        const extended = [];
        for (let i = 0; i < repeats; i++) {
            extended.push(...newsCards);
        }
        return extended;
    };



    const filtered = useMemo(() => {
        let list = allModels;
        if (activeCategory !== "All") {
            list = list.filter((m) => m.tags.includes(activeCategory));
        }
        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter((m) => m.name.toLowerCase().includes(q));
        }
        return list;
    }, [activeCategory, query]);

    return (
        <main className="min-h-screen text-[#333333] relative">
            <Head>
                <title>Model Library | Canopy Wave</title>
            </Head>

            <Header />

            {/* Hero Section */}
            <div className="w-full relative bg-[#EDF2E4]">
                <video
                    className="w-full h-[900px] object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/ai-model/model library banner.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-48">
                        <SlideUp>
                            <h1 className="text-center text-4xl sm:text-[54px] font-black text-[#333333] text-shadow-lg mb-6">
                                Model Library
                            </h1>
                            <h1 className="text-center sm:text-[18px] text-[#666666] mb-1">
                                We provide top-tier open-source models of various types and support your
                            </h1>
                            <h1 className="text-center sm:text-[18px] text-[#666666]">
                                diverse deployment needs for flexible, high-performance AI applications
                            </h1>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Featured Models */}
            <div className="w-full relative py-12 sm:py-20" style={{
                backgroundImage: 'url(/ai-model/featuredmodel_bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="max-w-7xl mx-auto">
                    <SlideUp>
                        <h2 className="text-2xl sm:text-[48px] font-bold text-[#333333] mb-[40px] text-center">Featured Models</h2>
                    </SlideUp>
                    {/* Cards Carousel */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out py-4"
                                style={{
                                    transform: `translateX(-${currentNewsIndex * (100 / 3)}%)`,
                                    minWidth: '1250px'
                                }}
                            >
                                {getExtendedCards().map((card, index) => {
                                    const isCenter = index === currentNewsIndex + 1;
                                    return (
                                        <div key={`${card.id}-${Math.floor(index / newsCards.length)}-${index}`} className="w-1/3 flex-shrink-0 custom-500:px-4 md:px-4 sm:px-4 lg:px-4">
                                            <Link href={card.href}>
                                                <div className={`transition-all duration-300 cursor-pointer ${isCenter ? 'scale-[1.06] z-10' : 'scale-[0.95] z-0'}`}>
                                                    <div className="p-6 flex flex-col min-h-[310px]" style={{
                                                        backgroundImage: 'url(/ai-model/allmodels_img_bg.png)',
                                                        backgroundSize: 'contain',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat'
                                                    }}>
                                                        <div className="text-[20px] font-bold text-[#666666] mb-3 ml-4">{card.family}</div>
                                                        <div className="flex items-center mb-3 mx-auto">
                                                            <div className="w-16 h-16">
                                                                {card.logoType === 'google' ? (
                                                                    <Image src="/ai-model/allmodels_ic_gemma.png" alt="Gemma logo" width={54} height={54} className="w-16 h-16 object-contain" />
                                                                ) : card.logoType === 'openai' ? (
                                                                    <Image src="/ai-model/allmodels_ic_gpt.png" alt="OpenAI logo" width={54} height={54} className="w-16 h-16 object-contain" />
                                                                ) : (
                                                                    <Image src="/ai-model/allmodels_ic_llama.png" alt="Meta logo" width={54} height={54} className="w-16 h-16 object-contain" />
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className={`font-bold text-[#333333] line-clamp-1 ml-4 mb-[12px] ${isCenter ? 'text-[24px]' : 'text-[20px]'}`}>{card.name}</div>
                                                        <div className={`flex items-center gap-6 text-[#666666] mb-[12px] ml-4 ${isCenter ? 'text-[16px]' : 'text-[14px]'}`}>
                                                            <div className="flex items-center gap-2">
                                                                <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                                                <span>{card.params}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                                                <span>{card.context}</span>
                                                            </div>
                                                        </div>
                                                        {/* <div className="flex items-center gap-2 text-[#666666] ml-4 cursor-pointer" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer'); }} role="link" aria-label="Try Now"> */}
                                                        <div className="flex items-center gap-2 text-[#666666] ml-4 cursor-default" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} role="button" aria-disabled="true">
                                                          <span className={isCenter ? 'text-[24px]' : 'text-[20px]'}>Try Now</span>
                                                          <svg className={isCenter ? 'w-6 h-6 text-gray-500' : 'w-5 h-5 text-gray-500'} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Navigation Buttons - Always visible */}
                        <button
                            onClick={handlePrevNews}
                            disabled={isTransitioning}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16"
                        >
                            <Image src="/ai-model/ic_left_default.png" alt="Previous" width={48} height={48} className="h-20 w-20" />
                        </button>

                        <button
                            onClick={handleNextNews}
                            disabled={isTransitioning}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16"
                        >
                            <Image src="/ai-model/ic_right_default.png" alt="Next" width={48} height={48} className="h-20 w-20" />
                        </button>
                    </div>
                </div>
            </div>

            {/* All Models */}
            <div className='bg-[#F9F9F9] py-12 sm:py-20'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-2xl sm:text-[48px] font-bold text-[#333333] mb-[40px] text-center">All Models</h2>
                    </SlideUp>

                    {/* Tabs + Search */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[40px]">
                        <div className="flex flex-wrap items-center gap-2 bg-[#F9F9F9] p-2 border rounded-3xl">
                            {categories.map((c) => (
                                <button
                                    key={c}
                                    className={`text-[14px] px-4 py-2 rounded-full ${activeCategory === c ? "bg-[#E8F1DB] text-[#80B224] shadow" : "text-[#333333]"}`}
                                    onClick={() => setActiveCategory(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center gap-2 pb-2 border-b-2 border-gray-300 w-full md:w-[300px]">
                            <Image src="/ai-model/ic_search_default.svg" alt="Search" width={20} height={20} className="w-6 h-6" />
                            <input
                                type="text"
                                placeholder="Find a model"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="bg-transparent text-[18px] leading-[20px] text-gray-500 outline-none w-full placeholder:text-[18px] placeholder:leading-[20px] placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="min-h-[1039px] rounded-2xl border border-[#E6E6E6] bg-[#F9F9F9] shadow-[0_6px_24px_rgba(0,0,0,0.12)] p-6 md:py-8 px-12 relative pb-28" style={{ paddingBottom: 112 + loadClicks }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {filtered.slice(0, visibleRows * 3).map((m) => (
                                <div key={m.id}
                                    style={{
                                        backgroundImage: 'url(/ai-model/allmodels_img_bg.png)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                    className="min-h-[282px] p-4">
                                    <div className="text-[20px] text-[#666666] mb-[12px] ml-4">{m.family}</div>
                                    <div className="flex justify-center items-center mb-3">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <Image src={m.logo ?? "/ai-model/allmodels_ic_gpt.png"} alt={`${m.name} logo`} width={54} height={54} className="w-16 h-16 object-contain" />
                                        </div>
                                    </div>
                                    <div className={`text-[20px] font-bold text-[#333333] line-clamp-1 ml-4 mb-[12px]`}>{m.name}</div>
                                    <div className={`flex items-center gap-6 text-[#666666] mb-[12px] ml-4`}>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                            <span>{m.params}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                            <span>{m.context}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#666666] ml-4">
                                        {/* <a href="https://cloud.canopywave.io/" className="flex items-center gap-2 text-[#666666] ml-4" target="_blank" rel="noopener noreferrer">
                                          
                                        </a> */}
                                        <span className={'text-[20px]'}>Try Now</span>
                                          <svg className={'w-5 h-5 text-gray-500'} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Button */}
                        <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                            <Button
                                onClick={() => {
                                    const totalRows = Math.ceil(filtered.length / 3);
                                    setVisibleRows((prev) => Math.min(prev + 3, totalRows));
                                    setLoadClicks((prev) => prev + 1);
                                }}
                                disabled={visibleRows >= Math.ceil(filtered.length / 3)}
                                className="bg-[#80B224] hover:bg-[#7ab32f] disabled:opacity-50 disabled:cursor-not-allowed px-6 py-6 text-2xl text-white rounded-full"
                            >
                                Load More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Which deployment fits your needs */}
            <div className='bg-[#F9F9F9] py-12 sm:py-20'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SlideUp>
                    <h2 className="text-2xl sm:text-[48px] font-bold text-[#333333] mb-[40px] text-center">Which deployment fits your needs</h2>
                </SlideUp>

                {/* Header descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-200">
                    <div className="p-6 md:border-r border-gray-200">
                        <h3 className="text-[32px] font-bold text-[#333333] mb-2">Serverless Endpoints</h3>
                        <p className="text-[#999999] text-[18px] max-w-md">
                            Canopy Wave gives you instant access to the most popular OSS models — optimized for cost, speed, and quality on the fastest AI cloud
                        </p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-[32px] font-bold text-[#333333] mb-2">Dedicated Endpoints</h3>
                        <p className="text-[#999999] text-[18px] max-w-md">
                            Canopy Wave gives you instant access to the most popular OSS models — optimized for cost, speed, and quality on the fastest AI cloud
                        </p>
                    </div>
                </div>

                {/* Feature rows */}
                <div className="border-b border-gray-200">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#F2F8EA]">
                        <div className="px-6 py-8 md:border-r border-gray-200">
                            <div className="flex items-center gap-3 text-[#333333] font-semibold text-[20px]">
                                <span className="inline-block w-4 h-4 bg-[#8CC63F] rounded-full" />
                                <span>Simplest setup</span>
                            </div>
                        </div>
                        <div className="px-6 py-8">
                            <div className="flex items-center gap-3 text-[#333333] font-semibold text-[20px]">
                                <span className="inline-block w-4 h-4 bg-[#8CC63F] rounded-full" />
                                <span>No hard rate limits</span>
                            </div>
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="px-6 py-8 md:border-r border-gray-200">
                            <div className="flex items-center gap-3 text-[#333333] font-semibold text-[20px]">
                                <span className="inline-block w-4 h-4 bg-[#8CC63F] rounded-full" />
                                <span>Highest flexibility</span>
                            </div>
                        </div>
                        <div className="px-6 py-8">
                            <div className="flex items-center gap-3 text-[#333333] font-semibold text-[20px]">
                                <span className="inline-block w-4 h-4 bg-[#8CC63F] rounded-full" />
                                <span>Predictable performance</span>
                            </div>
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#F2F8EA]">
                        <div className="px-6 py-8 md:border-r border-gray-200">
                            <div className="flex items-center gap-3 text-[#333333] font-semibold text-[20px]">
                                <span className="inline-block w-4 h-4 bg-[#8CC63F] rounded-full" />
                                <span>Provide popular models on the market</span>
                            </div>
                        </div>
                        <div className="px-6 py-8">
                            <div className="flex items-center gap-3 text-[#333333] font-semibold text-[20px]">
                                <span className="inline-block w-4 h-4 bg-[#8CC63F] rounded-full" />
                                <span>Custom large models can be deployed.</span>
                            </div>
                        </div>
                    </div>
                    {/* Row 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="px-6 py-8 md:border-r border-gray-200">
                            <div className="flex items-center gap-3 text-[#333333] font-semibold text-[20px]">
                                <span className="inline-block w-4 h-4 bg-[#8CC63F] rounded-full" />
                                <span>Pay per token</span>
                            </div>
                        </div>
                        <div className="px-6 py-8">
                            <div className="flex items-center gap-3 text-[#333333] font-semibold text-[20px]">
                                <span className="inline-block w-4 h-4 bg-[#8CC63F] rounded-full" />
                                <span>Pay for GPU runtime</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-6">
                    {/* Left action: Start Building */}
                    <a href="https://cloud.canopywave.io/" className="inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                        <span className="text-[24px] text-[#80B224]">Start Building</span>
                        <Image src="/ai-model/ic_enter.svg" alt="enter" width={30} height={30} />
                    </a>
                    {/* Right action: Apply for */}
                    <a href="/ai-model/dedicated-endpoint" className="inline-flex items-center gap-2 mt-4 md:mt-0">
                        <span className="text-[24px] text-[#80B224]">Apply for</span>
                        <Image src="/ai-model/ic_enter.svg" alt="enter" width={30} height={30} />
                    </a>
                </div>
            </div>
            </div>
            

            <Footer />
        </main>
    );
}