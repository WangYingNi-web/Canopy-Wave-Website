import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import DocumentLayout from '@/components/DocumentLayout';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import ClickableImage from '@/components/ui/ClickableImage'

export default function InfiniBandComponentsPage() {

    // 左侧导航结构
    const leftNavItems = [
        {
            id: 'tutorials',
            label: (
                <span className="flex items-center w-full">
                    <Image src="/docs/icon/tutorials.svg" alt="Tutorials" width={16} height={16} className="mr-2" />
                    Tutorials
                    <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16} className='ml-2 mt-1' />
                </span>
            ),
            href: '/resources/tutorials'
        },
        {
            id: 'case-studies',
            label: (
                <span className="flex items-center w-full">
                    <Image src="/docs/icon/case-studies.svg" alt="Case Studies" width={16} height={16} className="mr-2" />
                    Case Studies
                    <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16} className='ml-2 mt-1' />
                </span>
            ),
            href: '/resources/case-study'
        },
        {
            id: 'newsroom',
            label: (
                <span className="flex items-center w-full">
                    <Image src="/docs/icon/newsroom.svg" alt="Newsroom" width={16} height={16} className="mr-2" />
                    Newsroom
                    <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16} className='ml-2 mt-1' />
                </span>
            ),
            href: '/about/newsroom'
        },
        { id: 'divider-1', label: '', isDivider: true },
        {
            id: 'cw-cloud',
            label: (
                <span className="flex items-center w-full">
                    <Image src="/docs/icon/cloud.svg" alt="CW Cloud Account" width={16} height={16} className="mr-2" />
                    CW Cloud Account
                </span>
            ),
            children: [
                { id: 'quick-start', label: 'Quick Start', href: '/resources/docs/cw-cloud-account/quick-start' },
                { id: 'deploy-an-instance', label: 'Deploy an instance', href: '/resources/docs/cw-cloud-account/deploy-an-instance' },
            ]
        },
        {
            id: 'products',
            label: (
                <span className="flex items-center w-full">
                    <Image src="/docs/icon/products.svg" alt="Products" width={16} height={16} className="mr-2" />
                    Products
                </span>
            ),
            children: [
                { id: 'key-metrics-of-gpu-performance', label: 'Key Metrics of GPU Performance', href: '/resources/docs/products/key-metrics-of-gpu-performance' },
                { id: 'components-advantages', label: 'Components Advantages', href: '/resources/docs/products/components-advantages' },
            ],
        },
    ];

    // 右侧Jump to导航项
    const jumpToItems = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'development-overview', label: 'Development overview' },
        { id: 'core-technology-and-architecture', label: 'Core technology and architecture' },
        { id: 'core-components', label: 'Core components' },
        { id: 'key-advantages', label: 'Key advantages' },
        { id: 'application-scenarios', label: 'Application scenarios' },
        { id: 'canopy-wave-solution', label: 'Canopy Wave\'s solution' },
        { id: 'conclusion-contact', label: 'Conclusion & Contact' }
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
                <title>Canopy Wave - InfiniBand: Components and Advantages</title>
                <meta name="description" content="Comprehensive analysis of InfiniBand technology, its core components, advantages, and applications in HPC, AI clusters, and high-performance computing environments." />
            </Head>

            <DocumentLayout
                title="InfiniBand: Components and Advantages"
                breadcrumb='Components Advantages'
                previousPage={{
                    title: "Key Metrics of GPU Performance",
                    href: "/resources/docs/products/key-metrics-of-gpu-performance"
                }}
                reviewDate="September 1, 2025"
                leftNavItems={leftNavItems}
                jumpToItems={jumpToItems}
                pageTitle="InfiniBand: Components and Advantages - Technical Analysis"
            >
                <h2 id="introduction" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    1. Introduction
                </h2>
                <p className="mb-6 text-gray-700">
                    InfiniBand (IB) is a high-speed, low-latency interconnect technology widely used in High-Performance Computing (HPC), Artificial Intelligence (AI) clusters, cloud data centers, and large-scale simulations. Its extreme bandwidth and ultra-low latency make it the preferred choice for workloads requiring massive parallel computing and rapid data exchange. The proliferation of large-scale AI models, such as GPT, has fueled a rapid growth in demand for InfiniBand, as industry leaders like NVIDIA rely on it for training massive systems.
                </p>

                <h2 id="development-overview" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    2. Development Overview
                </h2>
                <p className="mb-6 text-gray-700">
                    InfiniBand, short for "infinite bandwidth," was created to overcome the limitations of the PCI bus in the 1990s. It introduced Remote Direct Memory Access (RDMA), which enables faster and more efficient communication between systems. The InfiniBand Trade Association (IBTA) released the first specification in 2000, and the technology has since evolved through generations, reaching speeds up to 400Gb/s with NDR and beyond.
                </p>

                <h2 id="core-technology-and-architecture" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    3. Core Technology and Architecture
                </h2>
                
                <h3 className="text-lg text-gray-900 mb-3 mt-6">
                    3.1 RDMA Core Technology
                </h3>
                <p className="mb-4 text-gray-700">
                    Unlike traditional TCP/IP networking, which requires multiple copies of data through system memory, RDMA allows the network adapter of one system to directly access the memory of another. This reduces CPU overhead and transmission latency to the sub-microsecond level while improving overall efficiency.
                </p>
                <PreloadedImage src="/docs/products/ib-rdma.png" alt="ib-rdma" className="w-full max-w-3xl" />
                <h3 className="text-lg text-gray-900 mb-3 mt-6">
                    3.2 The Network Architecture of InfiniBand
                </h3>
                <p className="mb-4 text-gray-700">The schematic diagram of the network topology of InfiniBand is as follows: </p>
                <PreloadedImage src="/docs/products/ib-topology.png" alt="ib-topology" className="w-full max-w-[450px] mb-2" />
                <p className="mb-4 text-gray-700">
                    InfiniBand uses a channel-based architecture consisting of:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2 ml-4 text-gray-700">
                    <li><strong>HCA (Host Channel Adapter):</strong> Connects servers, GPUs, or storage systems to the IB fabric via PCIe.</li>
                    <li><strong>TCA (Target Channel Adapter):</strong> Provides connectivity for storage and other targets.</li>
                    <li><strong>Switches & Routers:</strong> Direct traffic and connect subnets.</li>
                    <li><strong>Links:</strong> Copper or optical cables enabling high-speed connections.</li>
                </ul>
                <p className="mb-6 text-gray-700">
                    Each subnet can support up to 60,000 nodes, with switches performing ultra-low latency forwarding (under 100ns). Cut-through switching and efficient routing make IB significantly faster than Ethernet in HPC/AI workloads.
                </p>

                <h2 id="core-components" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    4. Core Components of an InfiniBand Network
                </h2>

                <h3 className="text-lg text-gray-900 mb-3 mt-6">
                    4.1 Host Channel Adapters (HCAs)
                </h3>
                <p className="mb-4 text-gray-700">
                    HCAs connect servers to the InfiniBand fabric, delivering high throughput and low latency. They support speeds from HDR to NDR and enable GPU Direct for optimized data movement.
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4 text-gray-700">
                    <li><strong>Function:</strong> Connects servers, GPUs, or storage systems to the IB fabric via PCIe interface.</li>
                    <li><strong>Key Features:</strong> Supports RDMA, GPU Direct, and multi-protocol operations.</li>
                </ul>
                <div className="mb-6">
                    <p className="mb-2 text-gray-700"><strong>Example Models:</strong></p>
                    <PreloadedImage src="/docs/products/ib-hca.png" alt="ib-hca" className="w-full max-w-[300px] mb-2" />
                    <ul className="list-disc list-inside mb-4 space-y-1 ml-8 text-gray-700">
                        <li>NVIDIA ConnectX-7</li>
                        <li>400G InfiniBand PCIe Gen5</li>
                        <li>Programmable Datapath In-Network Computing</li>
                    </ul>
                </div>

                <h3 className="text-lg text-gray-900 mb-3 mt-6">
                    4.2 InfiniBand Switches
                </h3>
                <p className="mb-4 text-gray-700">
                    Switches form the backbone of IB networks, aggregating bandwidth and enabling flexible topologies with varying port counts for scale-out performance.
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4 text-gray-700">
                    <li><strong>Function:</strong> Core of IB fabric interconnection, directing traffic between nodes.</li>
                    <li><strong>Topology Support:</strong> Fat Tree, Dragonfly, Torus, and custom designs.</li>
                </ul>
                <div className="mb-6">
                    <p className="mb-2 text-gray-700"><strong>Example Models:</strong></p>
                    <PreloadedImage src="/docs/products/ib-switch.png" alt="ib-switch" className="w-full max-w-[300px] mb-2" />
                    <ul className="list-disc list-inside mb-4 space-y-1 ml-8 text-gray-700">
                        <li>Quantum-2 Switch</li>
                        <li>64-ports 400G InfiniBand</li>
                        <li>128-ports 200G</li>
                        <li>In-Network Computing</li>
                    </ul>
                </div>

                <h3 className="text-lg text-gray-900 mb-3 mt-6">
                    4.3 Cables & Transceivers
                </h3>
                <p className="mb-4 text-gray-700">
                    Includes Active Optical Cables (AOCs), Direct Attach Cables (DACs), and optical transceivers to enable both short and long-reach connectivity.
                </p>
                <div className="mb-4">
                    <p className="mb-2 text-gray-700"><strong>Types:</strong></p>
                    <ul className="list-disc list-inside mb-4 space-y-2 ml-4 text-gray-700">
                        <li><strong>DAC (Direct Attach Copper):</strong> Short distance, cost-effective</li>
                        <li><strong>AOC (Active Optical Cable):</strong> Longer distances, low signal loss</li>
                        <li><strong>Optical transceivers:</strong> (e.g., QSFP56)</li>
                    </ul>
                </div>
                <p className="mb-6 text-gray-700">
                    <strong>Speeds:</strong> HDR (200Gb/s), NDR (400Gb/s)
                </p>

                <h2 id="key-advantages" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    5. Key Advantages
                </h2>
                <ul className="list-disc list-inside mb-6 space-y-2 ml-4 text-gray-700">
                    <li><strong>Performance:</strong> Port speeds up to 400Gb/s and latency as low as 100–150ns, far outperforming Ethernet.</li>
                    <li><strong>Efficiency:</strong> Offloads networking from CPUs, reducing utilization and power consumption.</li>
                    <li><strong>Parallel Workload Optimization:</strong> GPU Direct RDMA and adaptive routing ensure near-linear scaling for large clusters.</li>
                    <li><strong>Lower TCO:</strong> Higher performance per watt and per rack reduce total costs despite higher upfront investment.</li>
                </ul>

                <h2 id="application-scenarios" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    6. Application Scenarios
                </h2>
                <ul className="list-disc list-inside mb-6 space-y-2 ml-4 text-gray-700">
                    <li><strong>HPC:</strong> Weather forecasting, molecular dynamics, scientific simulations.</li>
                    <li><strong>AI Training:</strong> Large-scale deep learning clusters for LLM and CV models.</li>
                    <li><strong>Financial Services:</strong> High-Frequency Trading (HFT) environments.</li>
                    <li><strong>Big Data Analytics:</strong> Real-time data processing and analysis.</li>
                </ul>

                <h2 id="canopy-wave-solution" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    7. Canopy Wave's Solution
                </h2>
                <p className="mb-6 text-gray-700">
                    Canopy Wave delivers end-to-end InfiniBand solutions, covering hardware sourcing, network design, configuration, and integration. Our global supply chain and proven expertise help clients in HPC and AI achieve faster deployment, enhanced reliability, and optimized costs.
                </p>

                <h2 id="conclusion-contact" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    8. Conclusion & Contact
                </h2>
                <p className="mb-4 text-gray-700">
                    InfiniBand offers unmatched performance, scalability, and efficiency for HPC, AI, and other demanding workloads. To learn more or explore a tailored solution, contact Canopy Wave:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-700">
                        <strong>Contact:</strong> 
                        <a href="mailto:sales@canopywave.com" className="text-[#80B224] hover:text-[#98c455]">sales@canopywave.com </a>
                         | <a href="https://www.canopywave.com" className="text-[#80B224] hover:text-[#98c455]">www.canopywave.com </a>
                         | +1 (408) 883-5665
                    </p>
                </div>

            </DocumentLayout>
        </>
    );
}