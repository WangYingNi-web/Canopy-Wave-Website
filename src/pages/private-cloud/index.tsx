"use client";

import Image from "next/image";
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function SolutionsPage() {
    return (
        <main className="bg-white min-h-screen w-full font-sans">
            <Header />
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 pt-24 pb-16 bg-white max-w-6xl mx-auto">
                {/* Left: Title, description, and button */}
                <div className="flex-1 mb-8 md:mb-0 max-w-md">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#060709] mb-4">
                        Private Cloud
                    </h1>
                    <p className="text-lg md:text-xl text-[#62646f] mb-7 max-w-lg">
                        内容需补充内容需补充内容需补充内容需补充内容需补充内容需补充.
                    </p>
                    {/* Blue button - UI only, no interaction */}
                    <button
                        className="px-6 py-3 rounded-full bg-[#80B224] text-white font-semibold text-base shadow-sm hover:brightness-95 transition cursor-default"
                        tabIndex={-1}
                    >
                        Schedule a discovery callxxxx
                    </button>
                </div>
                {/* Right: Illustration */}
                <div className="flex-1 flex justify-center max-w-md">
                    <Image
                        src="/ai-inference-illustration.svg"
                        alt="AI Inference Illustration"
                        width={440}
                        height={324}
                        className="w-[340px] md:w-[420px] h-auto"
                        priority
                    />
                </div>
            </section>

            {/* Purpose-built black section */}
            <section className="bg-[#F5F9F4] text-black py-14 px-4 md:px-0 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Purpose-built cloud infrastructure for AI inference
                </h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
                    CanopyWave’s cloud infrastructure is made to handle the demanding demands of running modern-day AI inference workloads at speed and scale. Our bare-metal instances, optimized for performance, provide access to the latest NVIDIA GPUs, while managed clusters accelerate time-to-production and networking innovations power ultra-fast multi-node scalability. Accelerate the deployment of your applications—and learning—without infrastructure friction.
                </p>
            </section>

            {/* Features Section */}
            <section className="grid md:grid-cols-2 gap-0 bg-white py-16 md:px-24 px-4">
                {/* Left: Record-breaking performance */}
                <div className="pr-8 max-w-lg md:ml-auto md:mr-8">
                    <span className="inline-block bg-[#80B224] text-white px-2.5 py-1 rounded-md font-semibold text-sm mb-5">
                        Record-breaking
                    </span>
                    <h3 className="text-2xl font-semibold text-[#060709] mb-3">
                        performance
                    </h3>
                    <p className="text-[#62646f] text-base md:text-lg">
                        Get the latest and greatest NVIDIA GPUs, alongside other cutting-edge hardware innovation, to unlock unprecedented performance for AI/ML and high-throughput inference workloads.
                    </p>
                </div>

                {/* Right: 3 Feature Items */}
                <div className="flex flex-col gap-7 max-w-xl md:pl-10 mt-8 md:mt-0">
                    {/* Feature Item 1 */}
                    <div className="flex items-start gap-4">
                        <Image
                            src="/optimized.png"
                            alt="Bare Metal GPU"
                            width={32}
                            height={32}
                        />
                        <div>
                            <div className="font-semibold text-lg text-[#060709] mb-1">
                                Bare metal GPU compute
                            </div>
                            <div className="text-[#62646f] text-sm">
                                Get unparalleled, ultra-fast performance out of your workloads, with optimized latency and industry-leading hardware.
                            </div>
                        </div>
                    </div>
                    {/* Feature Item 2 */}
                    <div className="flex items-start gap-4">
                        <Image
                            src="/optimized.png"
                            alt="Managed Clusters"
                            width={32}
                            height={32}
                        />
                        <div>
                            <div className="font-semibold text-lg text-[#060709] mb-1">
                                Managed clusters for AI
                            </div>
                            <div className="text-[#62646f] text-sm">
                                Autoscale and orchestrate your inferencing workloads, gain access and control straight out-of-the-box.
                            </div>
                        </div>
                    </div>
                    {/* Feature Item 3 */}
                    <div className="flex items-start gap-4">
                        <Image
                            src="/optimized.png"
                            alt="Fastest Interconnect"
                            width={32}
                            height={32}
                        />
                        <div>
                            <div className="font-semibold text-lg text-[#060709] mb-1">
                                Industry’s fastest multi-node interconnect
                            </div>
                            <div className="text-[#62646f] text-sm">
                                Run your most demanding AI inference workloads at scale with a powerful, purpose-built interconnect for multi-node clusters.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Storage Solutions Section (black background) */}
            <section className="bg-[#F5F9F4] py-16 px-4 md:px-0">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                        Optimize AI inference with fast storage solutions
                    </h2>
                    <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto">
                        GenAI models need a lot of data—and they need it fast. Handle massive datasets with reliability and ease, enabling better performance and faster training times. Fit more in each epoch, as our tailored storage solutions are designed and built for speed at scale. Store AI inference data in a more performant and efficient way.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {/* Storage Card 1 */}
                    <div className="border rounded-2xl bg-[#80B224] p-7 flex flex-col items-center text-center min-h-[260px]">
                        <Image
                            src="/optimized.png"
                            width={36}
                            height={36}
                            alt="Local Instance Storage Icon"
                            className="mb-3"
                        />
                        <div className="font-semibold text-lg text-white mb-2">
                            Local Instance Storage
                        </div>
                        <div className="text-white/80 text-sm">
                            Our GPU instances provide ultra-fast I/O at the highest throughput, designed for the demanding data access and retrieval domains of AI inference.
                        </div>
                    </div>
                    {/* Storage Card 2 */}
                    <div className="border rounded-2xl bg-[#80B224] p-7 flex flex-col items-center text-center min-h-[260px]">
                        <Image
                            src="/optimized.png"
                            width={36}
                            height={36}
                            alt="AI Object Storage Icon"
                            className="mb-3"
                        />
                        <div className="font-semibold text-lg text-white mb-2">
                            AI Object Storage with LOTA
                        </div>
                        <div className="text-white/80 text-sm">
                            CanopyWave AI ObjectStorage is a highly performant and cost-effective solution with multi-cloud compatibility and integrated access controls. Quickly store, archive, and retrieve huge datasets for AI/ML pipelines, easily integrating with every workflow.
                        </div>
                    </div>
                    {/* Storage Card 3 */}
                    <div className="border rounded-2xl bg-[#80B224] p-7 flex flex-col items-center text-center min-h-[260px]">
                        <Image
                            src="/optimized.png"
                            width={36}
                            height={36}
                            alt="Fast Distributed File Storage Icon"
                            className="mb-3"
                        />
                        <div className="font-semibold text-lg text-white mb-2">
                            Fast Distributed File Storage Services
                        </div>
                        <div className="text-white/80 text-sm">
                            Our Distributed File Storage offering is designed for performance at large scale, offering seamless scalability and efficiency for AI inference.
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
