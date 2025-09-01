import Head from 'next/head';
import React from 'react';
import DocumentLayout from '@/components/DocumentLayout';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import Image from 'next/image';
import SlideUp from '@/components/slide';

export default function GPUPerformanceMetricsPage() {
    useScrollToHash();

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

    // 右侧Jump to导航项（基于你提供的左侧目录）
    const jumpToItems = [
        { id: 'floating-point-performance', label: 'Floating-point performance' },
        { id: 'cores-architecture', label: 'Core architecture' },
        { id: 'memory-subsystem', label: 'Memory subsystem' },
        { id: 'clock-frequency', label: 'Clock frequency' },
        { id: 'application-specific-performance', label: 'Application-specific performance' },
        { id: 'synthesis-of-metrics', label: 'Synthesis of metrics' }
    ];

    return (
        <>
            <Head>
                <title>Canopy Wave - Key Metrics of GPU Performance</title>
                <meta name="description" content="Comprehensive analysis of GPU computing power metrics including FLOPS, core architecture, memory subsystem, and application-specific performance benchmarks." />
            </Head>

            <DocumentLayout
                title="Demystifying GPU Computing Power: A Comprehensive Analysis of Key Metrics"
                breadcrumb='Key Metrics of GPU Performance'
                description="GPU computing power quantifies a graphics processing unit's performance in executing computational tasks, typically measured by the number of operations performed per second. This metric serves as a critical benchmark for evaluating GPU capabilities across graphics rendering, machine learning, scientific computing, and parallel processing workloads."
                previousPage={{
                    title: "Deploy an Instance",
                    href: "/resources/docs/cw-cloud-account/deploy-an-instance"
                }}
                nextPage={{
                    title: "Components Advantages",
                    href: "/resources/docs/products/components-advantages"
                }}
                reviewDate="August 29, 2025"
                leftNavItems={leftNavItems}
                jumpToItems={jumpToItems}
                pageTitle="Key Metrics of GPU Performance - Technical Analysis"
            >
                <p className="mb-6 text-gray-700">
                    The following integrated metrics define GPU computational performance:
                </p>

                <h2 id="floating-point-performance" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    1. Floating-point performance
                </h2>
                <p className="mb-4">
                    The cornerstone of GPU capability assessment is <strong>Floating-Point Operations Per Second (FLOPS)</strong>, representing the processor's throughput in handling real-number calculations. This metric is indispensable for scientific simulations, data analytics, and AI workloads. Key precision tiers include:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                    <li><strong>FP32 (Single Precision):</strong> Standard for mainstream deep learning training</li>
                    <li><strong>FP64 (Double Precision):</strong> Essential for high-accuracy scientific computing</li>
                    <li><strong>FP16 (Half Precision):</strong> Optimized for inference and memory-intensive tasks</li>
                    <li><strong>Emerging formats:</strong> BF16 (Brain Float) and FP8 for specialized AI acceleration</li>
                </ul>

                <h2 id="cores-architecture" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    2. Core architecture & Parallel processing
                </h2>
                <div className="mb-6">
                    <p className="mb-4">
                        <strong>Core Count:</strong> Directly determines parallel task throughput. Modern GPUs contain thousands of processing cores (e.g., NVIDIA CUDA cores, AMD stream processors).
                    </p>

                    <p className="mb-4">
                        <strong>Microarchitecture:</strong> Defines core efficiency through innovations like:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                        <li>Simultaneous multithreading (NVIDIA Hyper-Q)</li>
                        <li>Tensor cores (dedicated AI matrix operations)</li>
                        <li>Ray-tracing acceleration (RT cores)</li>
                    </ul>
                    <p className="mb-4">
                        <strong>Architectural evolution:</strong> Each generation (e.g., Hopper, Ada Lovelace) enhances instruction-level parallelism and workload specialization.
                    </p>
                </div>

                <h2 id="memory-subsystem" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    3. Memory subsystem
                </h2>
                <p className="mb-4">
                    Two critical constraints in data-intensive computing:
                </p>
                <div className="mb-6">
                    <h3 className="text-l font-medium text-gray-900 mb-3">
                        <strong>Memory Bandwidth (GB/s):</strong>
                    </h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                        <li>Dictates data transfer rates between GPU and VRAM</li>
                        <li>High bandwidth (&gt;1 TB/s in H100) prevents computational starvation</li>
                    </ul>

                    <h3 className="text-l font-medium text-gray-900 mb-3">
                        <strong>VRAM Capacity (GB):</strong>
                    </h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                        <li>Determines dataset/model size residency (e.g., 80GB HBM3 in H200)</li>
                        <li>Critical for large-batch training and high-resolution rendering</li>
                    </ul>

                    <p className="mb-4">
                        <strong>Advanced technologies:</strong> HBM (High Bandwidth Memory), NVLink interconnect
                    </p>
                </div>

                <h2 id="clock-frequency" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    4. Clock frequency
                </h2>
                <div className="mb-6">
                    <h3 className="text-l font-medium text-gray-900 mb-3">
                        <strong>Base/Boost Clocks (MHz/GHz):</strong>
                    </h3>
                    <ul className="text-l list-disc list-inside mb-4 space-y-2 ml-4">
                        <li>Governs per-core operation speed</li>
                        <li>Higher frequencies accelerate serial operations</li>
                    </ul>
                    <h3 className="text-l font-medium text-gray-900 mb-3">
                        <strong> Thermal Design Constraints:</strong>
                    </h3>
                    <ul className="text-l list-disc list-inside mb-4 space-y-2 ml-4">
                        <li>Frequency scaling is limited by power envelope (TDP) and cooling solutions</li>
                        <li>Modern GPUs employ dynamic frequency scaling (e.g., NVIDIA GPU Boost)</li>
                    </ul>
                </div>

                <h2 id="application-specific-performance" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    5. Application-specific performance
                </h2>
                <p className="mb-4">
                    Real-world effectiveness varies by workload profile:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                    <li><strong>AI Training:</strong> Measured in TFLOPS (FP16/FP8 with sparsity)</li>
                    <li><strong>Inference Latency:</strong> Transactions per second (TPS)</li>
                    <li><strong>Scientific Computing:</strong> FP64 performance benchmarks</li>
                    <li><strong>Graphics:</strong> Ray tracing ops/sec, pixel fill rates</li>
                    <li><strong>Domain-specific frameworks:</strong> CUDA, ROCm, OpenCL optimization levels</li>
                </ul>

                <h2 id="synthesis-of-metrics" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    6. Synthesis of metrics
                </h2>
                <p className="mb-4">
                    GPU computational capability emerges from the interplay of these factors:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                    <li>FLOPS defines theoretical peak performance</li>
                    <li>Core architecture determines realizable efficiency</li>
                    <li>Memory subsystem governs data accessibility</li>
                    <li>Clock rates influence temporal execution</li>
                    <li>Workload alignment dictates practical effectiveness</li>
                </ul>

                <div className="ml-3">
                    <p className="text-l">
                        <strong>Technical Insight:</strong> Modern performance analysis requires cross-metric evaluation. For instance, NVIDIA's H200 achieves
                        <strong> 1979 TFLOPS FP8 performance</strong> not solely through <strong> 16896 CUDA cores</strong>, but via architectural synergies between Tensor Cores, <strong>4.8TB/s memory bandwidth</strong>, and structured sparsity acceleration.
                    </p>
                </div>

            </DocumentLayout>
        </>
    );
}