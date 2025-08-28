import React, { useState } from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import ClickableImage from '@/components/ui/ClickableImage'

const TutorialLayout6: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()


    const tutorialData = {
        title: 'NVIDIA H100 vs H200 vs B200: A Comprehensive Comparison Focusing on Application Scenarios',
        sections: [
            {
                title: 'Introduction',
                navLabel: 'Introduction',
                content: [
                    'As the global leader in AI hardware, NVIDIA continues to advance GPU architecture for next-generation AI workloads. The NVIDIA H100, H200, and B200 GPUs play a pivotal role in accelerating AI, machine learning, and high-performance computing tasks. Based on benchmark results, these GPUs dominate AI training and inference landscapes.',
                    'The H100, released in 2022 on the Hopper architecture, set a new standard, while the H200 (2024) enhances it with superior memory and efficiency. The B200, launched in Q1 2025 on the Blackwell architecture, pushes boundaries further with dual-chip design and massive performance leaps.',
                    'This article examines the technical differences and performance of these GPUs, with a special focus on their application scenarios to help you select the ideal one for your needs.'
                ],
            },
            {
                title: '1.Core Architectures and Key Technologies',
                navLabel: 'Core Architectures',
                content: [
                    React.createElement('table', {
                        key: 'core-tech-table',
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }
                    }, [
                        React.createElement('thead', { key: 'thead' },
                            React.createElement('tr', { key: 'header-row' }, [
                                React.createElement('th', {
                                    key: 'th1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'Feature'),
                                React.createElement('th', {
                                    key: 'th2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'H100'),
                                React.createElement('th', {
                                    key: 'th3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'H200'),
                                React.createElement('th', {
                                    key: 'th4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'B200')
                            ])
                        ),
                        React.createElement('tbody', { key: 'tbody' }, [
                            React.createElement('tr', { key: 'row1' }, [
                                React.createElement('td', {
                                    key: 'td1-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Architecture'),
                                React.createElement('td', {
                                    key: 'td1-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Hopper (2022)'),
                                React.createElement('td', {
                                    key: 'td1-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Upgraded Hopper (2024)'),
                                React.createElement('td', {
                                    key: 'td1-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Blackwell (2025)')
                            ]),
                            React.createElement('tr', { key: 'row2' }, [
                                React.createElement('td', {
                                    key: 'td2-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Compute Precision'),
                                React.createElement('td', {
                                    key: 'td2-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Mixed FP8/FP16; 4th Gen Tensor Cores'),
                                React.createElement('td', {
                                    key: 'td2-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'FP8/FP16, 4th Gen Tensor Cores'),
                                React.createElement('td', {
                                    key: 'td2-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'FP8/FP4 dual precision, 5th Gen Tensor Cores')
                            ]),
                            React.createElement('tr', { key: 'row3' }, [
                                React.createElement('td', {
                                    key: 'td3-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'CUDA Compatibility'),
                                React.createElement('td', {
                                    key: 'td3-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'CUDA 12.0+'),
                                React.createElement('td', {
                                    key: 'td3-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'CUDA 12.2+'),
                                React.createElement('td', {
                                    key: 'td3-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'CUDA 12.4+')
                            ]),
                            React.createElement('tr', { key: 'row4' }, [
                                React.createElement('td', {
                                    key: 'td4-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Memory'),
                                React.createElement('td', {
                                    key: 'td4-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '80 GB HBM3'),
                                React.createElement('td', {
                                    key: 'td4-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '141 GB HBM3e'),
                                React.createElement('td', {
                                    key: 'td4-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '180 GB HBM3e')
                            ]),
                            React.createElement('tr', { key: 'row5' }, [
                                React.createElement('td', {
                                    key: 'td5-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Memory Bandwidth'),
                                React.createElement('td', {
                                    key: 'td5-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '3.35 TB/s'),
                                React.createElement('td', {
                                    key: 'td5-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '4.8 TB/s'),
                                React.createElement('td', {
                                    key: 'td5-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '8.0 TB/s')
                            ]),
                            React.createElement('tr', { key: 'row6' }, [
                                React.createElement('td', {
                                    key: 'td6-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'NVLink (Bidirectional Bandwidth)'),
                                React.createElement('td', {
                                    key: 'td6-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '4th Gen, up to 900 GB/s'),
                                React.createElement('td', {
                                    key: 'td6-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '4th Gen, 900 GB/s (standard with upgraded options)'),
                                React.createElement('td', {
                                    key: 'td6-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '5th Gen, up to 3.6 TB/s')
                            ]),
                            React.createElement('tr', { key: 'row7' }, [
                                React.createElement('td', {
                                    key: 'td7-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Power Consumption'),
                                React.createElement('td', {
                                    key: 'td7-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '700W'),
                                React.createElement('td', {
                                    key: 'td7-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '700W'),
                                React.createElement('td', {
                                    key: 'td7-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, '1000W')
                            ]),
                            React.createElement('tr', { key: 'row8' }, [
                                React.createElement('td', {
                                    key: 'td8-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Performance (FP8)'),
                                React.createElement('td', {
                                    key: 'td8-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Up to 32 petaFLOPS'),
                                React.createElement('td', {
                                    key: 'td8-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Up to 32 petaFLOPS'),
                                React.createElement('td', {
                                    key: 'td8-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Up to 72 petaFLOPS')
                            ])
                        ])
                    ])
                ],
            },
            {
                title: '2.Detailed Comparison',
                navLabel: 'Detailed Comparison',
                content: [
                    React.createElement('h4', { key: 'arch-compute' }, React.createElement('strong', {}, 'Architecture and Compute Power')),
                    '• H100: Built on the Hopper architecture, it introduced the first-generation Transformer Engine—specifically designed to accelerate transformer models. It excels in AI training and a broad range of HPC workloads using FP8 mixed precision.',
                    '• H200: An enhanced Hopper variant with nearly doubled memory capacity and a 43% increase in bandwidth; improved energy efficiency by 50%, optimized for large-scale inference and complex training tasks.',
                    '• B200: Built on the brand-new Blackwell architecture featuring 5th generation Tensor Cores, dual Transformer Engines and support for FP4 precision; delivers significantly increased compute power for ultra-large AI models and multi-modal AI workloads.',
                    React.createElement('h4', { key: 'memory-bandwidth' }, React.createElement('strong', {}, 'Memory and Bandwidth')),
                    '• H100\'s 80 GB of HBM3 memory suits a wide variety of workloads.',
                    '• H200\'s 141 GB HBM3e memory and 4.8 TB/s bandwidth address bottlenecks in large model training and memory-intensive HPC jobs.',
                    '• B200 offers the largest memory at 180 GB HBM3e and an industry-leading 8.0 TB/s bandwidth, best suited for data-intensive and massive scale AI.',
                    React.createElement('h4', { key: 'interconnect' }, React.createElement('strong', {}, 'Interconnect (NVLink)')),
                    '• H100 and H200 utilize NVLink 4th Gen with up to 900 GB/s bandwidth for multi-GPU communication.',
                    '• B200 upgrades to NVLink 5th Gen, doubling bandwidth to 1.8 TB/s to accelerate data transfer in dense multi-GPU clusters.',
                    React.createElement('h4', { key: 'power-efficiency' }, React.createElement('strong', {}, 'Power Efficiency and Thermal Design')),
                    '• H200 improves energy efficiency over H100 at the same 700W TDP baseline.',
                    '• B200 requires 1000W of power and advanced cooling solutions, such as liquid cooling, to maintain stable operation. This makes it more demanding on data center infrastructure.'
                ],
            },
            {
                title: '3.Application Scenarios: Which GPU Fits Your Needs?',
                navLabel: 'Application Scenarios',
                content: [
                    'The choice between H100, H200, and B200 hinges on your workload\'s scale, complexity, and resource constraints. Below is a breakdown of their ideal use cases:',
                    React.createElement('h4', { key: 'h100-scenarios', style: { fontSize: '18px' } }, React.createElement('strong', {}, '1) H100: Reliable Performance for Mid-Scale Workloads')),
                    'The H100 excels in moderate-scale AI and HPC tasks where balanced performance and cost-efficiency are key. Its 80GB memory and mature Hopper architecture make it a workhorse for:',
                    React.createElement('ul', { key: 'h100-list', style: { lineHeight: '1.8', marginBottom: '16px' } }, [
                        React.createElement('li', { key: 'h100-1', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'AI Training & Inference: '), 'Training mid-sized deep learning models and real-time inference for applications, recommendation systems, or fraud detection.'),
                        React.createElement('li', { key: 'h100-2', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Data Science & Analytics: '), 'Large-scale data processing, statistical modeling, and ETL pipelines for enterprises and research labs.'),
                        React.createElement('li', { key: 'h100-3', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Scientific Research: '), 'Simulations in physics, chemistry, or climate science (e.g., molecular dynamics, weather forecasting) that don\'t require ultra-large memory.'),
                        React.createElement('li', { key: 'h100-4', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Cloud Services: '), 'Offering scalable AI/ML instances for developers and small-to-medium businesses via cloud platforms.')
                    ]),
                    React.createElement('h4', { key: 'h200-scenarios', style: { fontSize: '18px' } }, React.createElement('strong', {}, '2) H200: Enhanced Memory for Large Models and Complex Inference')),
                    'With double the memory of the H100 and higher bandwidth, the H200 is optimized for memory-intensive workloads and larger models. It shines in:',
                    React.createElement('ul', { key: 'h200-list' }, [
                        React.createElement('li', { key: 'h200-1', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Large Language Model (LLM) Inference: '), 'Running open-source LLMs with longer context windows, critical for enterprise chatbots or document analysis.'),
                        React.createElement('li', { key: 'h200-2', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Fine-Tuning: '), 'Refining pre-trained LLMs or multi-modal models (text + image) with large datasets, where memory bottlenecks often slow progress.'),
                        React.createElement('li', { key: 'h200-3', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Autonomous Vehicles: '), 'Processing high-throughput, real-time sensor data for object detection and path planning using multi-GPU clusters.'),
                        React.createElement('li', { key: 'h200-4', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Healthcare & Life Sciences: '), 'Genomics analysis (e.g., DNA sequencing) and medical imaging (3D MRI/CT scans) that demand fast access to large datasets.')
                    ]),
                    React.createElement('h4', { key: 'b200-scenarios', style: { fontSize: '18px' } }, React.createElement('strong', {}, '3) B200: Next-Gen Power for Ultra-Large and Cutting-Edge Workloads')),
                    'The B200, with its Blackwell architecture and 2x performance leap, is designed for frontier AI and HPC—tasks that push the limits of computational power. It\'s ideal for:',
                    React.createElement('ul', { key: 'b200-list' }, [
                        React.createElement('li', { key: 'b200-1', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Training Trillion-Parameter Models: '), 'Developing next-generation LLMs or multi-modal AI systems (text, image, video, audio) that require massive memory and compute, often leveraging multi-GPU clusters.'),
                        React.createElement('li', { key: 'b200-2', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'Real-Time Multi-Modal Inference: '), 'Processing simultaneous streams of data for applications like smart cities, advanced robotics, or immersive VR/AR.'),
                        React.createElement('li', { key: 'b200-3', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'AI Research Labs: '), 'Academic or industrial labs focused on breakthroughs in generative AI, reinforcement learning, or quantum computing simulations.'),
                        React.createElement('li', { key: 'b200-4', style: { marginBottom: '12px' } }, React.createElement('strong', {}, 'High-Performance Computing (HPC) at Scale: '), 'Running global climate models, nuclear fusion simulations, or astrophysics research that require ultra-fast inter-GPU communication (via NVLink 5.0).')
                    ])
                ],
            },
            {
                title: '4.How to Choose: Key Decision Factors?',
                navLabel: 'Key Decision Factors',
                content: [
                    React.createElement('h4', { key: 'budget-infrastructure', style: { marginBottom: '-10px' } }, React.createElement('strong', {}, 'Budget and Infrastructure')),
                    'H100 offers strong performance at a more affordable cost, suitable for smaller organizations. H200 balances large memory, high performance, and efficiency, ideal for enterprise AI acceleration. B200 provides peak performance but demands higher investment, power capacity, and sophisticated cooling.',
                    React.createElement('h4', { key: 'performance-scalability', style: { marginBottom: '-12px' } }, React.createElement('strong', {}, 'Performance and Scalability Needs')),
                    'For massive AI models or multi-modal AI, B200 is the clear leader. For general AI training, inference, and HPC, H100 and H200 remain excellent choices.',
                    React.createElement('h4', { key: 'energy-efficiency', style: { marginBottom: '-12px' } }, React.createElement('strong', {}, 'Energy Efficiency and Operating Costs')),
                    'H200 is more energy-efficient than H100, reducing long-term costs. B200\'s high power draw requires careful planning of cooling and power infrastructure.',
                    React.createElement('h4', { key: 'future-proofing', style: { marginBottom: '-12px' } }, React.createElement('strong', {}, 'Future-Proofing')),
                    'H200 and B200, with bigger memory and faster interconnects, better accommodate growing AI workloads and model complexity in the years ahead.'
                ],
            },
            {
                title: '5.Conclusion',
                navLabel: 'Conclusion',
                content: [
                    'For organizations seeking flexible access without upfront capital expenses, cloud platforms like Canopy Wave provide an excellent alternative. These services offer scalable access to all three GPUs, supported by global infrastructure and tools to streamline AI workload deployments.',
                    'Feel free to ask if you want more detailed specs or personalized recommendations!'
                ],
            },
        ],
    }

    const meidaSidebar = (
        <div className="rounded-lg mt-6">
            <h4 className="text-l font-semibold ml-4 text-gray-700">Share</h4>
            <SocialMediaLinks
                vertical={false}
                className="items-center pt-2 pl-4"
            />
        </div>
    )

    // 定义导航项
    const navigationItems = tutorialData.sections.map((section, index) => ({
        id: `section-${index}`,
        label: section.navLabel || section.title,
    }))

    // 右侧推荐教程
    const rightSidebar = (
        <div className="space-y-6">
            {/* Recommended Tutorials Section */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200 mt-6">
                    Recommended Tutorials
                </h3>
                <div className="space-y-4">
                    {/* Storage Guide 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/storage-guide"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/workflows/workflows.png"
                                    alt="Storage Guide Tutorial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/how-to-choose-the-right-storage-for-your-ai-workflows"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                How to Choose the Right Storage for Your AI Workflows?
                            </a>

                        </a>
                    </div>
                    {/* GPT-OSS 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/gpt-oss/gpt-oss.png"
                                    alt="GPT-OSS Tutorial"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <a
                                href="/resources/tutorials/how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                How to Run the GPT-OSS Locally on a Canopy Wave VM?
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderContent = (content: any) => {
        if (typeof content === 'string') {
            return <p className="text-gray-800 leading-relaxed">{content}</p>
        }
        return content
    }

    return (
        <>
            {/* Banner Section */}
            <div className="w-full h-[520px] relative mt-[84px]">
                <Image
                    src="/tutorials/workload/banner.png"
                    alt="GPU Comparison Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                NVIDIA H100 vs H200 vs B200: <br /> Which GPU for Your Workload?
                            </h1>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Breadcrumb Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <SlideUp>
                    <Breadcrumb items={breadcrumbItems} />
                </SlideUp>
            </div>

            {/* Content Section */}
            <SidebarLayout
                navigationItems={navigationItems}
                title={tutorialData.title}
                meidaSidebar={meidaSidebar}
                showCustomTutorials={true}
                rightSidebar={rightSidebar}
                showRecommendedTutorials={false}
            >
                <div className="prose prose-lg max-w-none
              /* 强制所有文本换行 */
              [&_*]:break-words [&_*]:overflow-wrap-anywhere
              /* 表格响应式处理 */
              [&_table]:w-full [&_table]:table-auto [&_table]:overflow-x-auto
              [&_table]:block [&_table]:whitespace-nowrap
              [&_td]:min-w-0 [&_td]:break-words [&_td]:whitespace-normal
              [&_th]:min-w-0 [&_th]:break-words [&_th]:whitespace-normal
              /* 列表项处理 */
              [&_li]:break-words [&_li]:overflow-wrap-anywhere
              /* 段落处理 */
              [&_p]:break-words [&_p]:overflow-wrap-anywhere
              /* 标题处理 */
              [&_h1]:break-words [&_h2]:break-words [&_h3]:break-words
              /* 移动端特殊处理 */
              max-sm:[&_table]:text-sm max-sm:[&_td]:p-2 max-sm:[&_th]:p-2
              max-sm:[&_li]:text-sm max-sm:[&_p]:text-sm
            ">
                    {tutorialData.sections.map((section, sectionIndex) => (
                        <section key={sectionIndex} id={`section-${sectionIndex}`} className="mb-8">
                            {section.title && (
                                <SlideUp>
                                    <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                                </SlideUp>
                            )}
                            <div className="space-y-4">
                                {section.content.map((content, contentIndex) => (
                                    <SlideUp key={contentIndex}>
                                        {renderContent(content)}
                                    </SlideUp>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </SidebarLayout>
        </>
    )
}

export default TutorialLayout6