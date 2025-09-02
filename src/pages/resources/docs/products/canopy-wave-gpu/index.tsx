import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import DocumentLayout from '@/components/DocumentLayout';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import ClickableImage from '@/components/ui/ClickableImage'
import { docsLeftNavItems } from '@/components/docs/docsNavigation';

export default function CanopyWaveGPUPage() {

    // 右侧Jump to导航项
    const jumpToItems = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'compute', label: 'Compute' },
        { id: 'storage', label: 'Storage' },
        { id: 'network', label: 'Network' },
        { id: 'infrastructure', label: 'Infrastructure' },
        { id: 'conclusion-next-steps', label: 'Conclusion & Next Steps' }
    ];

    // 图片预加载组件
    const PreloadedImage: React.FC<{
        src: string;
        alt: string;
        className?: string;
    }> = ({ src, alt, className }) => {
        const [isLoaded, setIsLoaded] = useState(false);
        const [hasError, setHasError] = useState(false);

        return (
            <div className={`relative ${className}`}>
                {/* 加载占位符 */}
                {!isLoaded && !hasError && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                        <div className="text-gray-500 text-sm">Image loading in progress...</div>
                    </div>
                )}

                {/* 错误占位符 */}
                {hasError && (
                    <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        {/* <div className="text-gray-400 text-sm">图片加载失败</div> */}
                    </div>
                )}

                {/* 实际图片 */}
                <ClickableImage
                    src={src}
                    alt={alt}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
                    showZoomIcon={true}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    loading="lazy"
                />
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>Canopy Wave - GPU Solutions</title>
                <meta name="description" content="Comprehensive GPU solutions and services provided by Canopy Wave, including high-performance computing, AI training, and cloud infrastructure." />
            </Head>

            <DocumentLayout
                title="Canopy Wave GPU Cluster Hardware Product Portfolio "
                breadcrumb='Canopy Wave GPU'
                previousPage={{
                    title: "Deploy an Instance",
                    href: "/resources/docs/cw-cloud-account/deploy-an-instance"
                }}
                nextPage={{
                    title: "Key Metrics of GPU Performance",
                    href: "/resources/docs/products/key-metrics-of-gpu-performance"
                }}
                reviewDate="September 2, 2025"
                leftNavItems={docsLeftNavItems}
                jumpToItems={jumpToItems}
                pageTitle="Canopy Wave GPU Cluster Hardware Product Portfolio  - Technical Overview"
            >
                <h2 id="introduction" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Introduction
                </h2>
                <p className="mb-4 text-gray-700">
                    As artificial intelligence (AI), big data, and high-performance computing (HPC) continue to evolve, GPU clusters have become the backbone of modern intelligent infrastructure. Whether for training large AI models or running complex data workloads, having a reliable and scalable GPU cluster is crucial for success.
                </p>
                <p className="mb-4 text-gray-700">
                    This Product Portfolio showcases our company's comprehensive capabilities in GPU cluster design, hardware supply, deployment, and delivery. We offer tailored cluster architecture and system integration services, as well as a one-stop hardware procurement solution that includes servers, switches, storage, power, cooling, and more.
                </p>
                <p className="mb-4 text-gray-700">
                    With our deep technical expertise and hands-on experience, we understand the diverse demands of different use cases. This portfolio outlines modular hardware components and recommended configurations, helping clients quickly identify the most suitable solutions.
                </p>
                <p className="mb-6 text-gray-700">
                    Our goal is to demonstrate that we provide more than just design—we deliver tangible results. We hope this portfolio helps you better understand our strengths and instills confidence in partnering with us for your GPU cluster needs.
                </p>

                <h2 id="compute" className="text-2xl font-bold mb-6 text-gray-900">
                    1.Compute
                </h2>

                <h3 className="text-l font-semibold mb-4 text-gray-800">
                    1.1 GPU Servers
                </h3>

                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-32 mb-6 max-w-2xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/gb200-nvl72.png"
                                alt="GB200 NVL72 GPU Server"
                                className="w-full max-w-[100px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                GB200 NVL72
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 18x compute trays in a rack</li>
                                <li>• 36x Grace CPUs, 72x Blackwell GPUs</li>
                                <li>• Up to 13.4 TB HBM3e | 576 TB/s</li>
                                <li>• 2,592 Arm® Neoverse V2 cores</li>
                                <li>• Up to 17 TB LPDDR5X | Up to 18.4 TB/s</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 rounded-lg mb-6">
                        <h4 className="text-l font-semibold mb-3 text-gray-800">
                            Feature Highlights
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• 72 Blackwell GPUs + 36 Grace CPUs in one unified NVLink system</li>
                            <li>• Up to 130 TB/s NVLink bandwidth for ultra-fast GPU communication</li>
                            <li>• 30x faster LLM inference, 4x faster training, and 25x energy efficiency vs H100</li>
                            <li>• Liquid-cooled rack design with up to 132 kW power per rack</li>
                        </ul>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/hgx-b200.png"
                                alt="HGX B200 GPU Module"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                HGX B200
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 8x NVIDIA Blackwell SXM</li>
                                <li>• 1.8 TB/s NVSwitch GPU-to-GPU Bandwidth</li>
                                <li>• NVLink 5 Switch</li>
                                <li>• 14.4 TB/s Total NVLink Bandwidth</li>
                                <li>• 1.4 TB Total Memory</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/hgx-h200.png"
                                alt="HGX H200 GPU Module"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                HGX H200
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 141 GB of HBM3e memory</li>
                                <li>• 4.8 TB/s memory bandwidth</li>
                                <li>• Up to 7 MIGs @16.5GB each</li>
                                <li>• 72 billion transistors</li>
                                <li>• 64 vCPUs per instance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/hgx-h100.png"
                                alt="HGX H100 GPU Module"
                                className="w-full max-w-[190px]"
                            />
                             <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                HGX H100
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• GPU Memory 94 GB</li>
                                <li>• GPU Memory Bandwidth 3.9 TB/s</li>
                                <li>• 7 NVDEC, 7 JPEG</li>
                                <li>• Up to 7 MIGs @ 12 GB each</li>
                                <li>• Max TDP 350-400W (configurable)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 rounded-lg mt-8">
                        <h4 className="text-l font-semibold mb-3 text-gray-800">
                            Feature Highlights
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Unified HGX platform with 8x SXM GPUs for large-scale AI and HPC workloads</li>
                            <li>• NVLink & NVSwitch interconnects enable ultra-fast GPU-to-GPU communication</li>
                            <li>• Equipped with high-bandwidth HBM3 / HBM3e memory for faster data access</li>
                            <li>• Supports multi-precision AI computing with Transformer Engine (FP8/FP4)</li>
                            <li>• Designed for cloud-scale deployment, LLM training, and advanced inference tasks</li>
                        </ul>
                    </div>
                </div>

                <h3 className="text-l font-semibold mb-4 text-gray-800">
                    1.2 CPUs & Memory
                </h3>

                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/intel-8568.png"
                                alt="Intel 8568 Processor"
                                className="w-full max-w-[195px]"
                            />
                             <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Intel 8568
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Total Cores: 48</li>
                                <li>• Total Threads: 96</li>
                                <li>• Max Turbo Frequency: 4 GHz</li>
                                <li>• Processor Base Frequency: 2.3 GHz</li>
                                <li>• Cache: 300 MB</li>
                                <li>• Intel® UPI Speed: 20 GT/s</li>
                                <li>• TDP: 350 W</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/samsung-64gb-ddr5-rdimm.png"
                                alt="Samsung 64GB DDR5 RDIMM"
                                className="w-full max-w-[195px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Samsung 64GB DDR5 RDIMM
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 4800 MHz</li>
                                <li>• Server, 4th Gen Intel Xeon, 4th Gen AMD EPYC</li>
                                <li>• DDR5 ECC Registered</li>
                                <li>• 64 GB</li>
                                <li>• DDR5 DIMM 288-Pin, PC5-38400 (PC5-4800B)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg mb-6">
                        <h4 className="text-l font-semibold mb-3 text-gray-800">
                            Feature Highlights
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Fully compatible with DDR5-4800 ECC Registered DIMMs for high-speed memory access</li>
                            <li>• Designed for 4th Gen Intel Xeon and 4th Gen AMD EPYC server platforms</li>
                            <li>• Delivers high bandwidth and performance for compute-intensive workloads</li>
                            <li>• Supports server-grade stability with ECC (Error-Correcting Code) memory</li>
                            <li>• Ideal for AI, cloud, HPC, and enterprise data center deployments</li>
                        </ul>
                    </div>
                </div>


                <h2 id="storage" className="text-2xl font-bold mb-6 text-gray-900">
                    2.Storage
                </h2>

                <h3 className="text-l font-semibold mb-4 text-gray-800">
                    2.1 Local Storage
                </h3>

                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/samsung-pm9d3a.png"
                                alt="Samsung PM9D3A NVMe SSD"
                                className="w-full max-w-[190px]"
                            />
                             <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Samsung PM9D3A(NVMe SSD)
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• PCIe Gen 5.0 x4(NVMe)</li>
                                <li>• E1.S (25/15/9.5mmT), E1.L (9.5mmT), E3.S (1T/2T), U.2/U.3 2.5" (15mmT), M.2</li>
                                <li>• Capacity: 240GB, 480GB, 960GB, 1.92TB, 3.84TB, 7.68TB, 15.36TB, 30.72TB</li>
                                <li>• Sequential Read&Write: up to 12,000 MB/s&6,800 MB/s</li>
                                <li>• Random Read&Write: up to 2,000K IOPS&400K IOPS</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/samsung-pm1743.png"
                                alt="Samsung PM1743 NVMe SSD"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Samsung PM1743(NVMe SSD)
                            </h4>
                        </div>
                        <div className="flex-1 ml-[7px]">
                            <ul className="space-y-2 text-gray-700">
                                <li>• PCIe Gen 5.0 x4(NVMe)</li>
                                <li>• 2.5, E3.S</li>
                                <li>• 1.92TB, 3.84TB, 7.68TB, 15.36TB</li>
                                <li>• Sequential Read: 14000 MB/s</li>
                                <li>• Sequential Write: 3000 MB/s, 6000MB/s, 7100MB/s</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 rounded-lg mb-8">
                        <h4 className="text-l font-semibold mb-3 text-gray-800">
                            Feature Highlights
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• PCIe Gen 5.0 x4 NVMe Interface — Delivers next-generation high-speed data transfer for HPC and data center workloads.</li>
                            <li>• Multiple Enterprise Form Factors — Supports E1.S, E3.S, U.2/U.3, 2.5", M.2, offering flexible server and storage integration.</li>
                            <li>• Wide Capacity Range — From 240GB/1.92TB up to 30.72TB, meeting diverse storage requirements.</li>
                            <li>• High Sequential & Random Performance — Sequential speeds up to 12-14 GB/s and up to millions of IOPS for AI, big data, and virtualization.</li>
                            <li>• Enterprise-grade Reliability & Stability — Optimized for continuous high-load operation with robust error correction and data protection.</li>
                        </ul>
                    </div>
                </div>

                <h3 className="text-l font-semibold mb-4 text-gray-800">
                    2.2 Storage Servers
                </h3>

                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-4xl mx-auto pr-8">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/supermicro-1029u-tn10rt.png"
                                alt="Supermicro Ultra SuperServer 1029U-TN10RT"
                                className="w-full max-w-[190px]"
                            />
                             <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Supermicro Ultra SuperServer 1029U-TN10RT
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• CPU: 2x Intel Xeon Platinum 8168 (24 cores, 48 threads, up to 3.7 GHz)</li>
                                <li>• Memory (RAM): 12x 32 GB DDR4-2666 DIMMs, total 384GB</li>
                                <li>• Storage: 10x Micron 9300 MAX NVMe SSDs (12.8 TB each)</li>
                                <li>• Network Interfaces: 2x Mellanox ConnectX-5 dual-port 100 GbE NICs</li>
                                <li>• Other Features: Supports PCIe 3.0 slots, tool-less maintenance, efficient thermal design, and redundant power</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 rounded-lg">
                        <h4 className="text-l font-semibold mb-3 text-gray-800">
                            Feature Highlights
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Dual Intel Xeon CPUs – Powerful compute for high-throughput tasks</li>
                            <li>• High-Capacity NVMe Storage – 10x enterprise-grade NVMe SSDs for ultra-fast data access</li>
                            <li>• 100 GbE Networking – Dual high-speed network ports for rapid cluster communication</li>
                            <li>• Enterprise-Grade Design – Redundant power, hot-swappable drives, and easy maintenance</li>
                        </ul>
                    </div>
                </div>

                <h2 id="network" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    3. Network
                </h2>
                <h3 className="text-l font-semibold mb-4 text-gray-800">
                    3.1 Networking Switches
                </h3>

                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/nvidia-qm9790.png"
                                alt="NVIDIA QM9790 InfiniBand Switch"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                NVIDIA QM9790<br />(InfiniBand Switch)
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 32x OSFP ports, 64x 400 GbE or 128x 200 GbE</li>
                                <li>• Switching Capacity: 51.2 Tb/s</li>
                                <li>• System Power Usage: 640 W</li>
                                <li>• 43.6 mm (H) x 438 mm (W) x 660.4 mm (D)</li>
                                <li>• Latency: 130 ns</li>
                                <li>• 1U rack mount</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/nvidia-qm9700.png"
                                alt="NVIDIA QM9700 InfiniBand Switch"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                NVIDIA QM9700<br />(InfiniBand Switch)
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 32x OSFP ports, 64x 400 GbE or 128x 200 GbE</li>
                                <li>• Switching Capacity: 51.2 Tb/s</li>
                                <li>• System Power Usage: 747 W</li>
                                <li>• 43.6 mm (H) x 438 mm (W) x 660.4 mm (D)</li>
                                <li>• Latency: 130ns</li>
                                <li>• 1U rack mount</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/nvidia-spectrum-sn5600.png"
                                alt="NVIDIA Spectrum SN5600 RoCEv2 Switch"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                NVIDIA Spectrum SN5600<br />(RoCEv2 Switch)
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 64 x 800 GbE OSFP ports</li>
                                <li>• 1 x 25 GbE SFP28 management port</li>
                                <li>• switching capacity: 51.2Tb/s</li>
                                <li>• Typical power with passive cables (ATIS): 940 W</li>
                                <li>• 86.2 mm (H) x 438 mm (W) x 720 mm (D)</li>
                                <li>• 2U rack mount</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/management-switch-1.png"
                                alt="Management Switch"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Management Switch
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 24x multi-rate Ethernet ports supporting 100M / 1G / 2.5G / 5G</li>
                                <li>• 4x SFP28 uplink ports supporting 10G / 25G</li>
                                <li>• Switching capacity: 2.56 Tbps</li>
                                <li>• Packet forwarding rate: 360 Mpps</li>
                                <li>• 2U form factor</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/management-switch-2.png"
                                alt="Management Switch 2"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Management Switch
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 48 x 25G SFP28 ports, 8 x 100G QSFP28 ports</li>
                                <li>• Switching capacity: 4.0 Tbps</li>
                                <li>• Packet forwarding rate: 2000 Mpps</li>
                                <li>• 442 mm x 387 mm x 44 mm (17.40 in. x 15.24 in. x 1.73 in.)</li>
                                <li>• Operating temperature: 0°C to 45°C (32°F to 113°F)</li>
                                <li>• Operating humidity: 10% RH to 90% RH (non-condensing)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-lg p-6">
                        <h4 className="text-l font-semibold mb-4 text-gray-800">Feature Highlights</h4>
                        <ul className="text-gray-700 space-y-3">
                            <li>• Ultra-High Speed & Scalability: Supports diverse port types (25G SFP28, 100G QSFP28, 800G OSFP, etc.) and massive switching capacity (up to 51.2 Tb/s), catering to multi-generation bandwidth demands from edge to core.</li>
                            <li>• Low-Latency & RDMA-Optimized: Delivers lossless RDMA with ultra-low latency (down to 130 ns), ensuring zero packet loss and real-time performance for AI, HPC, and high-frequency workloads.</li>
                            <li>• Resilient & Redundant Architecture: Enables cross-device link aggregation (M-LAG/VSU), hardware-level protection, and device redundancy, guaranteeing service continuity even under failures.</li>
                            <li>• Intelligent Operations: Integrates telemetry, gRPC, sFlow, and SPAN for real-time network monitoring, automated troubleshooting, and simplified lifecycle management at scale.</li>
                            <li>• Flexible Deployment: Offers 1U/2U form factors, multi-rate port adaptability (100M–800G), and power-efficient designs, fitting diverse data center architectures and density requirements.</li>
                        </ul>
                    </div>
                </div>

                <h3 className="text-l font-semibold mb-4 text-gray-800">
                    3.2 Network Adapters
                </h3>
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/connectx-8-supernic.png"
                                alt="ConnectX-8 SuperNIC"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                ConnectX-8 SuperNIC
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Supported network protocols: InfiniBand, Ethernet</li>
                                <li>• Maximum Total Bandwidth: 800 Gb/s</li>
                                <li>• InfiniBand Speeds: 800/400/200/100 Gb/s</li>
                                <li>• Ethernet Speeds: 400/200/100/50/25 Gb/s</li>
                                <li>• Host interface: PCIe Gen6: up to48 lanes</li>
                                <li>• PCIe HHHL 1Px OSFP</li>
                                <li>• PCIe HHHL 2Px QSFP112</li>
                                <li>• Dual ConnectX-8 Mezzanine</li>
                                <li>• OCP 3.0 T5FF 1Px OSFP</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/nvidia-connectx-7.png"
                                alt="NVIDIA ConnectX-7"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                NVIDIA ConnectX-7
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 400GbE HDR</li>
                                <li>• PCIe 5.0 x16</li>
                                <li>• On-chip RDMA, GPUDirect; 2x QSFP56 ports</li>
                                <li>• 2x higher throughput than ConnectX-6; low-profile design (7mm)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/nvidia-connectx-6.png"
                                alt="NVIDIA ConnectX®-6 MCX653105A-ECAT"
                                className="w-full max-w-[190px]"
                            />
                             <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                NVIDIA ConnectX®-6<br />MCX653105A-ECAT
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• HDR and 100Gb/s</li>
                                <li>• Ports: Single</li>
                                <li>• PCIe 4.0 x16</li>
                                <li>• Storage Temperature: -40 °C to 70 °C</li>
                                <li>• Operating Temperature: 0 °C to 55 °C</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/nvidia-connectx-6-dual.png"
                                alt="NVIDIA ConnectX®-6 MCX631102AN-ADAT"
                                className="w-full max-w-[190px]"
                            />
                             <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                NVIDIA ConnectX®-6<br />MCX631102AN-ADAT
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Interface Type: 25G SFP28</li>
                                <li>• Ports: Dual</li>
                                <li>• PCIe 4.0 x8</li>
                                <li>• SFP28 Transceiver, DAC and AOC</li>
                                <li>• Supported Ethernet Speeds: 25/10/1GbE</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-lg p-6">
                        <h4 className="text-l font-semibold mb-4 text-gray-800">Feature Highlights</h4>
                        <ul className="text-gray-700 space-y-3">
                            <li>• Unmatched throughput: Up to 800 Gb/s (vs. 400 GbE HDR on ConnectX-7 and 200 Gb/s on ConnectX-6).</li>
                            <li>• Advanced acceleration: RDMA, RoCEv2, and GPUDirect for ultra-low latency, high-performance networking.</li>
                            <li>• Integrated PCIe Gen6 switch with 48 lanes for direct GPU-to-network and GPU-to-GPU connectivity.</li>
                            <li>• Flexible port options: Single OSFP (C8180), dual QSFP112 (C8240), and other models with dual QSFP56/SFP28.</li>
                            <li>• Data-center ready: Wide 0°C–55°C operating range, robust security, and cloud-optimized networking.</li>
                        </ul>
                    </div>
                </div>
                <h3 className="text-l font-semibold mb-6 text-gray-800">
                    3.3 Optical Modules & Cables
                </h3>
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/osfp-sr8-800g.png"
                                alt="OSFP-SR8-800G"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                OSFP-SR8-800G
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 800Gbps OSFP SR8</li>
                                <li>• Connector type: Dual MTP/MPO -12 APC</li>
                                <li>• 800G to 2x 400G or 800G to 4x 200G links</li>
                                <li>• Max Cable Distance: 30m@OM3/50m@OM4</li>
                                <li>• Case temperature range of 0°C to +70°C (C-temp)</li>
                                <li>• InfiniBand NDR</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/osfp-sr8-400g.png"
                                alt="OSFP-SR8-400G"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                OSFP-SR8-400G
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 400G OSFP SR4</li>
                                <li>• Connector Type: MPO-12/APC</li>
                                <li>• Modulation (Electrical): 4x100G-PAM4</li>
                                <li>• Max Cable Distance: 30m@OM3/50m@OM4</li>
                                <li>• Case Temperature Range of 0°C to +70°C (C-temp)</li>
                                <li>• InfiniBand NDR</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/qsfp-sr4-100g.png"
                                alt="QSFP-SR4-100G"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                QSFP-SR4-100G
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 100G QSFP28 SR4</li>
                                <li>• Connector Type: MPO-12/UPC</li>
                                <li>• Max Cable Distance: 70m@OM3/100m@OM4</li>
                                <li>• Typical Power Consumption: ≤ 2.5 W</li>
                                <li>• Case Temperature Range of 0°C to +70°C (C-temp)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/sfp-25gsr-85.png"
                                alt="SFP-25GSR-85"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                SFP-25GSR-85
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 25G SFP28 SR</li>
                                <li>• Connector Type: Duplex LC</li>
                                <li>• Max Data Rate: 25.78 Gbps</li>
                                <li>• Max Cable Distance:100m@OM4/70m@OM3</li>
                                <li>• Max. Power Consumption: 1 W</li>
                                <li>• Case Temperature Range of 0°C to +70°C (C-temp)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-lg p-6">
                        <h4 className="text-l font-semibold mb-4 text-gray-800">Feature Highlights</h4>
                        <ul className="text-gray-700 space-y-3">
                            <li>• Broad Speed Flexibility: Covers 25G–800G speeds, with flexible splits for diverse network needs.</li>
                            <li>• Cost-Effective Short-Reach: Optimized for OM3/OM4 multimode fiber, supporting short-reach (up to 100m) data center links at lower cost than single-mode.</li>
                            <li>• Temperature Resilience: Operates across 0°C–70°C (with hot-plug support for some), ensuring stable performance in data center environments.</li>
                            <li>• Easy Interoperability: Follows OSFP/QSFP28/SFP28 form factors & common connectors (MTP/MPO, LC), enabling seamless integration with existing gear.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/mtp-jumpers.png"
                                alt="MTP Jumpers"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                MTP Jumpers
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Model: MTP®-12/24/48</li>
                                <li>• Fiber Type: OM3, OM4, OM5, OS2</li>
                                <li>• Wavelength: 850nm (multi-mode), 1310nm/1550nm (single-mode)</li>
                                <li>• Maximum Transmission Distance:</li>
                                <li>&nbsp;&nbsp;OM3: 300m (850nm)</li>
                                <li>&nbsp;&nbsp;OM4: 400m (850nm)</li>
                                <li>&nbsp;&nbsp;OM5: 500m (850nm)</li>
                                <li>&nbsp;&nbsp;OS2: 10km (1310nm)</li>
                                <li>• MTP® to LC, SC, MPO adapters</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-lg p-6">
                        <h4 className="text-l font-semibold mb-4 text-gray-800">Feature Highlights</h4>
                        <ul className="text-gray-700 space-y-3">
                            <li>• Supports high-speed Ethernet connections (10G/40G/100G) for data centers, high-density networks, and other performance-driven applications.</li>
                            <li>• OM3/OM4/OM5 are optimized for short-range multi-mode transmission at 850nm, supporting up to 300m/400m/500m with higher bandwidth for multi-rate systems.</li>
                            <li>• OS2 is optimized for long-distance single-mode transmission at 1310nm/1550nm, supporting up to 10km.</li>
                            <li>• All types are compatible with MTP® connectors (LC, SC, MPO, etc.) for flexible integration into existing infrastructure.</li>
                            <li>• OM4/OM5/OS2 are ideal for future-proofing, supporting multi-rate, high-bandwidth applications including 40G/100G Ethernet.</li>
                        </ul>
                    </div>
                </div>
                <h3 className="text-l font-semibold mb-6 text-gray-800">
                    3.4 DPU/Smart NIC
                </h3>
                <div className='mb-8'>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/nvidia-bluefield-3-dpu.png"
                                alt="NVIDIA BlueField-3 DPU"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                NVIDIA BlueField-3 DPU
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• ARM Neoverse N2 cores (16 cores, 2.0 GHz)</li>
                                <li>• 2x 400 GbE InfiniBand/Ethernet (supports
                                    HDR100/EDR/200 GbE/100 GbE)</li>
                                <li>• PCIe 5.0 x16</li>
                                <li>• Built-in 16 TOPS (INT8)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/nvidia-bluefield-2-dpu.png"
                                alt="NVIDIA BlueField-2 DPU"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                NVIDIA BlueField-2 DPU
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• ARM Cortex-A78 cores (8 cores, 2.5 GHz)</li>
                                <li>• 2x 200 GbE InfiniBand/Ethernet (supports
                                    EDR/HDR/100GbE) HDR100/EDR/200GbE/100GbE)</li>
                                <li>• PCIe 4.0 x 16</li>
                                <li>• Supports NVMe over Fabrics, RDMA over Converged
                                    Ethernet (RoCE)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-lg p-6">
                        <h4 className="text-l font-semibold mb-4 text-gray-800">Feature Highlights</h4>
                        <ul className="text-gray-700 space-y-3">
                            <li>• Integrate ARM processor cores to deliver robust computing capabilities for data processing and
                                offloading tasks</li>
                            <li>• Dual InfiniBand/Ethernet Connectivity ensures seamless integration into high-speed,
                                heterogeneous network architectures</li>
                            <li>• High-Speed PCIe Interfaces enable fast data transfer between the DPU and server hardware</li>
                            <li>• Support cutting-edge protocols for efficient data movement and storage integration</li>
                        </ul>
                    </div>
                </div>
                <h3 className="text-l font-semibold mb-6 text-gray-800">
                    3.5 Firewall Appliances
                </h3>
                <div className='mb-8'>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/palo-alto-networks-pa-3220.png"
                                alt="Palo Alto Networks PA-3220"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Palo Alto Networks PA-3220
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Firewall Throughput: 5 Gbps</li>
                                <li>• Threat Prevention Throughput: 2.2 Gbps</li>
                                <li>• IPSec VPN Throughput: 2.5 Gbps</li>
                                <li>• Maximum Concurrent Sessions: 1,000,000</li>
                                <li>• New Sessions per Second: 58,000</li>
                                <li>• Airflow: Front-to-back</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-lg p-6">
                        <h4 className="text-l font-semibold mb-4 text-gray-800">Feature Highlights</h4>
                        <ul className="text-gray-700 space-y-3">
                            <li>• Blocks known and unknown threats with deep packet inspection (DPI) for all traffic, including
                                encrypted data.</li>
                            <li>• Offers 5 Gbps firewall throughput and 2.2 Gbps threat prevention throughput for fast, secure
                                connections.</li>
                            <li>• Classifies and controls applications regardless of port or encryption, ensuring secure access and
                                performance.</li>
                            <li>• Supports multi-tenant environments with Virtual Systems, ideal for scalable, centralized
                                management.</li>
                            <li>• Includes multiple port options (10/100/1000 RJ-45, 1G/10G SFP), suitable for diverse network
                                setups.</li>
                        </ul>
                    </div>
                </div>


                <h2 id="infrastructure" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    4. Infrastructure
                </h2>
                <h3 className="text-l font-semibold mb-6 text-gray-800">
                    4.1 Cabinet & Racks & Cable Management
                </h3>
                <div className='mb-8'>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/standard-42u-racks.png"
                                alt="Standard 42U Racks"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Standard 42U Racks
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Orientation: Horizontal</li>
                                <li>• 80.19''x31.50''x43.31'' (2036.94x800.00x1100.00 mm)</li>
                                <li>• Weight (Approximate): 279.99 lb(127.00 kg)</li>
                                <li>• Product Material: SPCC</li>
                                <li>• load capacities: 3300lbs (1500kg) static & 2200lbs (1000kg) dynamic</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/horizontal-cable-managers.png"
                                alt="Horizontal Cable Managers"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                Horizontal Cable Managers
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 42 U</li>
                                <li>• 68 kg</li>
                                <li>• Depth: 1070 mm</li>
                                <li>• Supports rack-mounted fans for airflow management</li>
                                <li>• Load Capacity: 2000 lbs (907 kg)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-lg p-6">
                        <h4 className="text-l font-semibold mb-4 text-gray-800">Feature Highlights</h4>
                        <ul className="text-gray-700 space-y-3">
                            <li>• Designed for standard rack-based IT infrastructure</li>
                            <li>• Durable construction for reliable performance</li>
                            <li>• Easy installation with included mounting accessories</li>
                            <li>• Compatible with common data center equipment standards</li>
                        </ul>
                    </div>
                </div>
                <h3 className="text-l font-semibold mb-6 text-gray-800">
                    4.2 Power cord & PDU
                </h3>
                <div className='mb-8'>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/c13-to-c14-power-cable.png"
                                alt="C13 to C14 Power Cable"
                                className="w-full max-w-[190px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                C13 to C14 Power Cable
                            </h4>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-2 text-gray-700">
                                <li>• C13 (female) to C14 (male)</li>
                                <li>• 250V, 10A rated</li>
                                <li>• IEC 60320 standard</li>
                                <li>• High-quality PVC insulation and reliable performance for
                                    enterprise servers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-28 mb-6 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <PreloadedImage
                                src="/docs/products/canopy-wave-gpu/apc-rack-pdu.png"
                                alt="APC Rack PDU (AP8959)"
                                className="w-full max-w-[100px]"
                            />
                            <h4 className="text-sm font-medium" style={{color: '#80B224'}}>
                                APC Rack PDU (AP8959)
                            </h4>
                        </div>
                        <div className="flex-1 ml-[10px]">
                            <ul className="space-y-2 text-gray-700">
                                <li>• 208V/415V, Single-phase or Three-phase configurations</li>
                                <li>• Output: 24 outlets, IEC 60320 C13/C19</li>
                                <li>• Surge protection, environmental monitoring</li>
                                <li>• Provides real-time energy consumption metrics</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-lg p-6">
                        <h4 className="text-l font-semibold mb-4 text-gray-800">Feature Highlights</h4>
                        <ul className="text-gray-700 space-y-3">
                            <li>• Follow the IEC 60320 specification, ensuring compatibility with global data center and enterprise
                                power systems.</li>
                            <li>• Designed for stable and secure power delivery to enterprise equipment, minimizing downtime
                                risks</li>
                            <li>• Constructed with durable materials to ensure long service life and consistent performance in
                                demanding environments</li>
                            <li>• suited for powering and managing data center racks, servers, and networking devices</li>
                        </ul>
                    </div>
                </div>

                <h2 id="conclusion-next-steps" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    5. Conclusion & Next Steps
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Our portfolio delivers a robust, multi-tiered, enterprise-grade infrastructure—from high-density racks and precision cabling to intelligent storage and seamless networking. We leverage standards-aligned hardware designed for peak efficiency, security, and scalability in demanding AI and data center environments.
                </p>

                <h3 className="text-l font-semibold mb-4 text-gray-800">Key Highlights</h3>
                <ul className="mb-8 text-gray-700 space-y-2">
                    <li>• High-performance and scalable architecture, optimized for modern workloads.</li>
                    <li>• Data placement that adapts dynamically,enabling microsecond access to hot data.</li>
                    <li>• Built-in security and isolation, ensuring data integrity and operational safety.</li>
                    <li>• Modular design, engineered for both immediate deployment and long-term growth.</li>
                </ul>

                <h3 className="text-l font-semibold mb-4 text-gray-800">What You Can Do Next</h3>
                <ul className="mb-8 text-gray-700 space-y-2">
                    <li>• Connect with us to discuss your unique infrastructure needs—whether it's AI, HPC, or enterprise-grade compute and storage.</li>
                    <li>• Request more details, tailored quotes, or hands-on demos.</li>
                    <li>• Build future-ready deployments with confidence, utilizing proven, modular technology and scalable workflows.</li>
                </ul>

            </DocumentLayout>
        </>
    );
}