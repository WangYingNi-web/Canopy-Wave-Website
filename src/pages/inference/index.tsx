"use client";

import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SlideUp from "@/components/slide";
import Link from 'next/link';


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
    { id: "wan-2-2-t2v", name: "WAN 2.2 T2V", family: "VIDEO", params: "27B", context: "", logo: "/ai-model/allmodels_ic_wan.png", tags: ["Video"] },
    { id: "mochi-1", name: "MOCHI 1", family: "VIDEO", params: "10B", context: "", logo: "/ai-model/allmodels_ic_mochi.png", tags: ["Video"] },
    { id: "hunyuanvideo-i2v", name: "HUNYUANVIDEO-I2V", family: "VIDEO", params: "13B", context: "", logo: "/ai-model/allmodels_ic_hunyuanvideo.png", tags: ["Video"] },
    { id: "sd3-medium", name: "STABLE DIFFUSION 3 MEDIUM", family: "IMAGE", params: "2B", context: "", logo: "/ai-model/allmodels_ic_stable.png", tags: ["Image"] },
    { id: "flux1-dev", name: "FLUX.1 DEV", family: "IMAGE", params: "12B", context: "", logo: "/ai-model/allmodels_ic_flux.png", tags: ["Image"] },
    { id: "flux1-kontext-max", name: "FLUX.1 KONTEXT MAX", family: "IMAGE", params: "12B", context: "", logo: "/ai-model/allmodels_ic_flux.png", tags: ["Image"] },
];

// Hooks moved inside InferencePage component to avoid invalid hook usage at module scope.
export default function InferencePage() {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const childScrollRef = useRef<HTMLDivElement | null>(null);
    const wheelInertiaRef = useRef<{ v: number; raf: number | null } | null>(null);
    const scrollWindowWithInertia = (deltaY: number) => {
        const MAX_INITIAL_V = 24;
        const SCALE = 0.5;
        const v0 = Math.max(-MAX_INITIAL_V, Math.min(MAX_INITIAL_V, deltaY * SCALE));
    
        let state = wheelInertiaRef.current;
        if (!state) {
            state = { v: 0, raf: null };
        }
        if (state.raf) {
            cancelAnimationFrame(state.raf);
            state.raf = null;
        }
        state.v = v0;
        wheelInertiaRef.current = state;
    
        const decay = 0.88;
        let steps = 0;
        const MAX_STEPS = 20;
    
        const step = () => {
            const s = wheelInertiaRef.current;
            if (!s) return;
            window.scrollBy({ top: s.v, left: 0, behavior: 'auto' });
            s.v *= decay;
            steps += 1;
            if (Math.abs(s.v) > 0.6 && steps < MAX_STEPS) {
                s.raf = requestAnimationFrame(step);
            } else {
                s.raf = null;
            }
        };
        state.raf = requestAnimationFrame(step);
    };
    
    useEffect(() => {
        return () => {
            const s = wheelInertiaRef.current;
            if (s?.raf) cancelAnimationFrame(s.raf);
            wheelInertiaRef.current = null;
        };
    }, []);
    
    useEffect(() => {
        const el = childScrollRef.current;
        if (!el) return;
        const handler = (e: WheelEvent) => {
            const delta = e.deltaY * (e.deltaMode === 1 ? 16 : 1);
            const { scrollTop, scrollHeight, clientHeight } = el;
            const atTop = scrollTop <= 0;
            const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
            const willUpBeyondTop = atTop && delta < 0;
            const willDownBeyondBottom = atBottom && delta > 0;
            if (willUpBeyondTop || willDownBeyondBottom) {
                e.preventDefault();
                e.stopPropagation();
                scrollWindowWithInertia(delta);
            }
        };
        el.addEventListener('wheel', handler, { passive: false });
        return () => {
            el.removeEventListener('wheel', handler as EventListener);
        };
    }, []);
    
    return (
        <main className="min-h-screen text-[#333333] relative">
            <Head>
                <title>Model Library | Canopy Wave</title>
            </Head>

            <Header />

            {/* Hero Section */}
            <div className="w-full relative bg-[#EDF2E4]">
                <video
                    className="w-full h-[calc(100vh-148px)] object-cover mt-20"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/inference/inference.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-[148px]">
                        <SlideUp>
                            <div className="flex items-center gap-4 mb-[16px]">
                                <Image
                                    src="/inference/ic_serverlessinfrence.png"
                                    alt="Performance"
                                    width={36}
                                    height={36}
                                />
                                <h3 className="text-[18px] text-[#333333]">Serverless Inference</h3>
                            </div>
                            <h2 className="text-left text-[40px] sm:text-[52px] font-bold text-[#333333] mb-[16px] leading-[72px]">
                                AI Inference Service <br />
                                where AI meets reality
                            </h2>
                            <p className="text-[18px] text-[#333333] leading-[24px] mb-[28px]">Our Inferencing as a Service (InfaaS) achieves AI Inference with Canopy Wave api</p>
                            <div className="flex justify-left">
                                <a href="https://cloud.canopywave.io/" target="_blank" rel="noopener noreferrer" className="hidden md:block" aria-label="Open Canopy Wave Cloud">
                                    <div className="text-[24px] bg-[#80B224] hover:bg-[#6a9620] text-white py-[8px] px-[28px] rounded-full transition-colors duration-300">Start building</div>
                                </a>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Model Library Section */}
            <div className="py-12 sm:py-20">
                <SlideUp>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl sm:text-[48px] leading-[1.2] font-bold text-center text-[#333333] mb-[40px]">Model Library</h2>
                        <p className="text-[14px] sm:text-[18px] text-[#666666] text-center">We have built an open-source model library covering all types and fields. Users can call it directly via API without</p>
                        <p className="text-[14px] sm:text-[18px] text-[#666666] text-center mb-[40px]">additional development or adaptation.</p>
                        {/* Tabs + Try Now */}
                        <div className="flex items-center justify-between gap-4 mb-[40px]">
                            <div className="flex flex-wrap items-center gap-2 bg-white p-2 border rounded-3xl">
                                {["All",
                                    "Transcribe",
                                    "Chat",
                                    "Image",
                                    "Vision",
                                    "Audio",
                                    "Moderation",
                                    "Code",
                                    "Embeddings",
                                    "Rerank",].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => setActiveCategory(c)}
                                            className={`text-[14px] px-4 py-2 rounded-full ${c === activeCategory ? 'bg-[#E8F1DB] text-[#80B224] shadow' : 'text-[#333333]'}`}
                                        >
                                            {c}
                                        </button>
                                    ))}
                            </div>
                            <a href="https://cloud.canopywave.io/" target="_blank" rel="noopener noreferrer" className="hidden md:block" aria-label="Open Canopy Wave Cloud">
                                <div className="bg-[#80B224] hover:bg-[#6a9620] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-[24px] transition-colors duration-300">Try Now</div>
                            </a>
                        </div>
                        {/* Grid */}
                        <div className="mb-[40px] rounded-2xl border border-[#E6E6E6] bg-[#F9F9F9] shadow-[0_6px_24px_rgba(0,0,0,0.12)] p-6 md:py-8 px-12 relative" onWheel={(e) => { let node: HTMLElement | null = e.target as HTMLElement; while (node) { if (node === childScrollRef.current) { return; } node = node.parentElement; } e.preventDefault(); e.stopPropagation(); const normalizedDelta = e.deltaY * (e.deltaMode === 1 ? 16 : 1); scrollWindowWithInertia(normalizedDelta); }}>
                            <div ref={childScrollRef} className="h-[590px] overflow-y-auto pr-2 md:pr-6 scrollbar-custom">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {(activeCategory === 'All' ? allModels : allModels.filter(m => m.tags.includes(activeCategory))).map((m) => (
                                        // <Link href="/ai-model" key={m.id}>
                                        <div className="rounded-2xl" key={m.id}>
                                            <div className="p-6 flex flex-col min-h-[290px]" style={{
                                                backgroundImage: 'url(/ai-model/allmodels_img_bg.png)',
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat'
                                            }}>
                                                <div className="text-[16px] text-[#666666] mb-3 ml-4 font-regular">{m.family}</div>
                                                <div className="flex items-center mb-3 mx-auto">
                                                    <div className="w-16 h-16">
                                                        <Image src={m.logo ?? '/ai-model/allmodels_ic_gpt.png'} alt={`${m.name} logo`} width={54} height={54} className="w-16 h-16 object-contain" />
                                                    </div>
                                                </div>
                                                <div className="font-bold text-[#333333] line-clamp-1 ml-4 mb-[12px] text-[18px]">{m.name}</div>
                                                <div className="flex items-center gap-6 text-[#666666] mb-[12px] ml-4 text-[16px]">
                                                    {m.params && (
                                                        <div className="flex items-center gap-2">
                                                            <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                                            <span>{m.params}</span>
                                                        </div>
                                                    )}
                                                    {m.context && (
                                                        <div className="flex items-center gap-2">
                                                            <span className="inline-block w-2 h-2 bg-[#8CC63F] rounded-full" />
                                                            <span>{m.context}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div
                                                    className="flex items-center gap-2 text-[#666666] ml-4 cursor-default select-none"
                                                    role="button"
                                                    aria-disabled="true"
                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                                >
                                                    <span className="text-[16px]">Try Now</span>
                                                    <svg className="w-5 h-5 text-[#666666]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        // </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/ai-model">
                                <div className="bg-[#80B224] hover:bg-[#6a9620] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-[24px] transition-colors duration-300">Explore All Models</div>
                            </Link>
                        </div>
                    </div>
                </SlideUp>
            </div>


            {/* Inference that is fast, cost-effective, and secure */}
            <div className="py-12 sm:py-20 bg-[#F1EFED]">
                <SlideUp>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl sm:text-[48px] font-bold text-center text-[#333333] leading-[1.2] mb-[40px]">Inference that is <br /> fast, cost-effective, and secure</h2>
                        <p className="text-[14px] sm:text-[18px] text-[#666666] text-center mb-[40px]">Users can run pre-trained models through simple API calls without managing infrastructure, achieving efficient "pay-as-you-go" inference.</p>
                        <div className="divide-y divide-[#E6E6E6]">
                            {/* FAST RESPONSE */}
                            <div className="py-10 grid grid-cols-1 md:grid-cols-12 items-start gap-6">
                                <div className="md:col-span-3">
                                    <h3 className="text-[16px] sm:text-[24px] text-[#333333] uppercase tracking-wide">FAST RESPONSE</h3>
                                </div>
                                <div className="md:col-span-3 flex justify-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
                                        <video className="w-full h-full" autoPlay muted loop playsInline>
                                            <source src="/inference/infrence_ic_fastresponse.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="md:col-span-6">
                                    <p className="text-[14px] sm:text-[18px] text-[#666666]">With API calls, the first response time is &lt;100ms, and the output speed reaches up to 400 tokens/s (DeepSeek-V3.1 671B full precision). NVIDIA's latest-generation GPU + edge caching ensure low latency globally, with no cold start issues.</p>
                                </div>
                            </div>
                            {/* COST REDUCTION */}
                            <div className="py-12 grid grid-cols-1 md:grid-cols-12 items-start gap-6">
                                <div className="md:col-span-3">
                                    <h3 className="text-[16px] sm:text-[24px] text-[#333333] uppercase tracking-wide">COST REDUCTION</h3>
                                </div>
                                <div className="md:col-span-3 flex justify-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
                                        <video className="w-full h-full" autoPlay muted loop playsInline>
                                            <source src="/inference/infrence_ic_costreduction.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="md:col-span-6">
                                    <p className="text-[14px] sm:text-[18px] text-[#666666]">No need to pay for idle GPUs. Charges are based on the number of model calls, compute duration (e.g., token count/image resolution), and required compute specifications. Truly "pay for what you use," with no costs for idle GPU resources.</p>
                                </div>
                            </div>
                            {/* DATA PRIVACY */}
                            <div className="py-10 grid grid-cols-1 md:grid-cols-12 items-start gap-6">
                                <div className="md:col-span-3">
                                    <h3 className="text-[16px] sm:text-[24px] text-[#333333] uppercase tracking-wide">DATA PRIVACY</h3>
                                </div>
                                <div className="md:col-span-3 flex justify-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
                                        <video className="w-full h-full" autoPlay muted loop playsInline>
                                            <source src="/inference/infrence_ic_dataprivacy.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="md:col-span-6">
                                    <p className="text-[14px] sm:text-[18px] text-[#666666]">Our models are deployed within a private cloud environment in our internal data center, ensuring complete data isolation, significantly enhanced control, and enterprise-grade security.</p>
                                    <div className="mt-[40px] flex flex-wrap items-center gap-6">
                                        <div className="flex items-center gap-2 text-[#666666]">
                                            <span className="inline-block w-4 h-4 rounded-full bg-[#80B224]"></span>
                                            <span className="text-[14px] sm:text-[18px] text-[#80B224] font-bold">zero retaining policy</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#666666]">
                                            <span className="inline-block w-4 h-4 rounded-full bg-[#80B224]"></span>
                                            <span className="text-[14px] sm:text-[18px] text-[#80B224] font-bold">no training usage</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SlideUp>
            </div>

            {/* Which deployment fits your needs */}
            <div className='bg-[#F9F9F9] py-12 sm:py-20'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-[48px] font-bold leading-[1.2] text-[#333333] mb-[40px] text-center">Which deployment fits your needs</h2>
                    </SlideUp>

                    {/* Header descriptions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-200">
                        <div className="p-6 md:border-r border-gray-200">
                            <h3 className="text-2xl sm:text-[32px] font-bold text-[#333333] mb-2">Serverless Endpoints</h3>
                            <p className="text-[#999999] sm:text-[18px] max-w-md">
                                Canopy Wave gives you instant access to the most popular OSS models — optimized for cost, speed, and quality on the fastest AI cloud
                            </p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl sm:text-[32px] font-bold text-[#333333] mb-2">Dedicated Endpoints</h3>
                            <p className="text-[#999999] sm:text-[18px] max-w-md">
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

            {/* Get started today */}
            <div className="bg-[#F9F9F9] py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-[48px] font-bold text-center text-[#333333] mb-[40px]">Get started today</h2>
                        <div className="rounded-[24px] bg-[#EBF2E9] py-20 mx-auto text-center">
                            <p className="text-[20px] sm:text-[24px] text-[#333333] font-bold mb-6">
                                Experience AI inference that just works — <span className="text-[#80B224] text-[40px] font-bold">no setup, no waiting</span>.
                            </p>
                            <p className="text-[#999999] text-[14px] sm:text-[16px] mb-10">
                                Try InfaaS and see how inference becomes the simplest, most powerful part of your AI workflow.
                            </p>
                            <a href="https://cloud.canopywave.io/" target="_blank" rel="noopener noreferrer" className="inline-block">
                                <button className="text-white bg-[#80B224] hover:bg-[#6a9620] px-6 py-2.5 sm:px-[28px] sm:py-[8px] rounded-full text-[16px] sm:text-[18px] transition-colors">
                                    Sign up
                                </button>
                            </a>
                        </div>
                    </SlideUp>
                </div>
            </div>


            <Footer />
        </main>
    );
}