import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'

const TutorialLayout13: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()

    const tutorialData = {
        title: 'How to Choose Between Bare Metal GPUs and Virtual GPUs',
        sections: [
            {
                title: '1. Understanding Bare Metal GPUs and Virtual GPUs',
                navLabel: 'Bare Metal vs. Virtual GPUs',
                content: [
                    '**Bare Metal GPU**: Refers to running AI workloads directly on a physical server without any virtualization layer. Users gain exclusive access, for example, on a DGX B200 server equipped with 8 NVIDIA B200 GPUs, directly loading CUDA drivers and frameworks. This is akin to a "bare machine" operating system installation, providing zero-overhead hardware access, suitable for single-tenant high-intensity scenarios. Typical 2025 configuration: B200 GPU (up to 20 PFLOPS FP8 performance per card), combined with Grace CPU, enabling end-to-end AI pipelines.',
                    '**Virtual GPU**: Achieved by virtualizing multiple physical GPUs and integrating them into a single logical "super VM." NVIDIA vGPU 19.0 supports Multi-vGPU technology, allowing a single VM to dynamically allocate up to 16 vGPU instances, with total compute power equivalent to the aggregation of multiple physical cards. For example, the VRAM of 4 B200 GPUs can be merged into a 768 GB virtual pool. This includes GPU passthrough and time-sharing modes, suitable for multi-user or elastic scaling. Performance benchmarks show that virtualization overhead in 2025 has dropped to 1-5%, approaching bare metal levels.',
                    'The core difference lies in the access model: bare metal provides exclusive physical hardware access, while vGPU enables shared, flexible access via virtualization '
                ],
            },
            {
                title: '2. Key Impacts of These Architectures',
                navLabel: 'Key Architectural Impacts',
                content: [
                    'AI workloads are influenced by the following factors, which are particularly prominent in the 2025 Blackwell era:',
                    '**(1) Performance and Latency**: Bare metal provides 100% hardware throughput and the lowest latency (<1 ms), ideal for real-time training. Virtual GPUs achieve 95-100% performance through optimizations, but multi-VM sharing may introduce 2-5% jitter, especially under high concurrency.',
                    '**(2) Resource Utilization**: Bare metal GPUs can achieve high utilization rates of 90%+, but severe waste occurs during idle times. Virtual GPUs support dynamic partitioning, boosting utilization to 80-95%, suitable for bursty loads.',
                    '**(3) Cost and Scalability**: Bare metal has high initial investment but low TCO. Virtual GPUs lower the entry barrier through cloud on-demand pricing and support horizontal scaling via Kubernetes orchestration of multiple VMs.',
                    '**(4) Security and Compliance**: Virtual GPUs provide hardware-level isolation, compliant with GDPR/HIPAA; bare metal relies on physical access controls and is prone to single-point failures.',
                    'Overall, the Blackwell architecture amplifies these impacts: the B200\'s high bandwidth (8 TB/s) is maximized under bare metal, while virtualization requires vGPU 19.0 to match it.'
                ],
            },
            {
                title: '3. Advantages and Disadvantages Comparison',
                navLabel: 'Advantages and Disadvantages',
                content: [
                    'The following table summarizes the comparison based on 2025 benchmarks, assuming a configuration of 8 B200 GPUs.',
                    React.createElement('h4', { key: 'strategy-1-title', className: 'font-medium mt-6 mb-3' }, '1. Define clear goals'),
                    React.createElement('div', { key: 'strategy-1-table', className: 'overflow-x-auto mb-6' }, 
                        React.createElement('table', { className: 'w-full' }, [
                            React.createElement('thead', { key: 'thead-1' }, 
                                React.createElement('tr', { }, [
                                    React.createElement('th', { key: 'th-1-1', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Dimension'),
                                    React.createElement('th', { key: 'th-1-2', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Bare Metal GPU'),
                                    React.createElement('th', { key: 'th-1-3', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Virtual GPU'),
                                ])

                                
                            ),
                            React.createElement('tbody', { key: 'tbody-1' }, [
                                React.createElement('tr', { key: 'tr-1-1', className: 'bg-gray-50' }, [
                                    React.createElement('td', { key: 'td-1-1', className: 'border border-gray-300 px-4 py-2' }, 'Advantages'),
                                    React.createElement('td', { key: 'td-1-2', className: 'border border-gray-300 px-4 py-2' }, 
                                        React.createElement('div', {}, [
                                            'No virtualization layer overhead',
                                            React.createElement('br', { key: 'br1' }),
                                            '100% GPU compute power / VRAM directly accessible to users',
                                            React.createElement('br', { key: 'br2' }),
                                            'Low latency, ideal for training large models',
                                        ])
                                    ),
                                    React.createElement('td', { key: 'td-1-3', className: 'border border-gray-300 px-4 py-2' }, 
                                        React.createElement('div', {}, [
                                            'Near-native performance (95-100%), aggregating multi-card resources',
                                            React.createElement('br', { key: 'br1' }),
                                            'High flexibility, supporting multi-tenancy and dynamic allocation',
                                            React.createElement('br', { key: 'br2' }),
                                            'Better resource sharing, reducing idle waste',
                                        ])
                                    ),
                                ]),
                                React.createElement('tr', { key: 'tr-1-2' }, [
                                    React.createElement('td', { key: 'td-1-4', className: 'border border-gray-300 px-4 py-2' }, 'Disadvantages'),
                                    
                                    React.createElement('td', { key: 'td-1-5', className: 'border border-gray-300 px-4 py-2' }, 
                                        React.createElement('div', {}, [
                                            'Slow scalability, high initial costs',
                                            React.createElement('br', { key: 'br1' }),
                                            'Weak security isolation, significant impact from single points of failure',
                                        ])
                                    ),
                                    React.createElement('td', { key: 'td-1-6', className: 'border border-gray-300 px-4 py-2' }, 
                                        React.createElement('div', {}, [
                                            'Virtual machine incurs a minor overhead of 2-5%',
                                            React.createElement('br', { key: 'br1' }),
                                            'Complex scheduling may introduce scheduling delays',
                                        ])
                                    ),
                                ]),
                                React.createElement('tr', { key: 'tr-1-3', className: 'bg-gray-50' }, [
                                    React.createElement('td', { key: 'td-1-7', className: 'border border-gray-300 px-4 py-2' }, 'Performance Benchmarks'),
                                    React.createElement('td', { key: 'td-1-8', className: 'border border-gray-300 px-4 py-2' }, 
                                        React.createElement('div', {}, [
                                            'B200 training ResNet-50: ~2x',
                                            React.createElement('br', { key: 'br1' }),
                                            'H100 speed, no jitter',
                                        ])
                                    ),
                                    React.createElement('td', { key: 'td-1-9', className: 'border border-gray-300 px-4 py-2' }, 
                                        React.createElement('div', {}, [
                                            'B200 vGPU inference: 98% bare',
                                            React.createElement('br', { key: 'br1' }),
                                            'metal speed, supports 48 VMs/GPU',
                                        ])
                                    ),
                                ])
                              
                            ])
                        ])
                    ),
                ],
            },
            {
                title: '4. When to Choose Bare Metal GPUs vs. Virtual GPUs',
                navLabel: 'Use Cases & Scenarios',
                content: [
                    'Bare metal GPUs and virtual GPUs are typically used for different types of workloads. Your choice will depend on the AI tasks you aim to perform.',
                    '**Choose Bare Metal GPUs**: Bare metal GPUs are better suited for compute-intensive AI workloads that require absolute performance and low latency, such as training large language models. They are also a good choice for workloads that must run 24/7 without interruption, such as certain production AI inference services. Finally, bare metal GPUs are preferred for real-time AI tasks, such as robotic surgery or high-frequency trading analytics.',
                    '**Choose Virtual GPUs**: Virtual GPUs are more suitable for the early stages of AI/ML and iteration on AI models, where flexibility and cost-effectiveness are more important than top performance. Workloads with variable or unpredictable resource requirements can also run on this type of GPU, such as training and fine-tuning small models or AI inference tasks that are not sensitive to latency and performance. Virtual GPUs are also great for occasional, short-term, and collaborative AI/ML projects that don’t require dedicated hardware—for example, an academic collaboration involving multiple institutions.'
                ],
            },
            {
                title: '5. Decision Framework: Key Factors to Consider',
                navLabel: 'The Decision Framework',
                content: [
                    '**(1) Performance Requirements. ** Is raw GPU speed critical for your AI workloads? If so, bare metal GPUs are the superior choice.',
                    '**(2) Scalability and Flexibility. ** Do you need GPUs that can easily scale up and down to handle dynamic workloads? If yes, opt for virtual GPUs.',
                    '**(3) Budget. ** Depending on the cloud provider, bare metal GPU servers can be more expensive than virtual GPU instances. Virtual GPUs typically offer more flexible pricing, which may be appropriate for occasional or variable workloads.'
                ],
            },

            // {
            //     title: '(I) Hardware-Related Causes',
            //     navLabel: 'Hardware-Related Causes',
            //     content: [
            //         '**Overheating**',
            //         'During high-load operation, the GPU generates a significant amount of heat. If the cooling fan stops working, the heatsink becomes severely clogged with dust, or the thermal paste dries out and loses its thermal conductivity, the GPU temperature will rapidly soar. When the temperature exceeds its critical tolerance limit, to protect the hardware, the GPU will automatically throttle its performance or shut down entirely, causing it to disappear from the system.',
            //         '',
            //         '**Connection Failure**',
            //         'The stability of the connection between the GPU and the motherboard\'s PCIe slot is crucial. Vibrations during daily use or frequent insertion and removal can cause poor contact between the GPU and the slot, hindering signal transmission and subsequently triggering a card drop. Additionally, if the external power supply connector for the GPU is loose and cannot provide stable power, it can also cause the GPU to drop.',
            //         '',
            //         '**Insufficient Power Supply**',
            //         'High-performance GPUs have substantial power requirements. If the power supply unit (PSU) lacks sufficient wattage, it cannot provide adequate power during high GPU load. Alternatively, an aged or damaged PSU with unstable output voltage, or poor contact between the power connectors and the GPU, can all cause the GPU to drop due to power issues.',
            //         '',
            //         '**Hardware Damage**',
            //         'After prolonged continuous use, key hardware components such as the GPU core or VRAM may fail. For example, faulty VRAM modules can interfere with normal data read/write operations; damage to the core chip can completely disable the GPU.'
            //     ],
            // },

        ]
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

const rightSidebar = (
        <div className="space-y-6">
            {/* Recommended Tutorials Section */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200 mt-6">
                    Recommended Tutorials
                </h3>
                <div className="space-y-4">
                    {/* GPT-OSS 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/nvidia-h100-vs-h200-vs-b200:-which-gpu-for-your-workload"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/workload/workload.png"
                                    alt="prompt engineering guide"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/nvidia-h100-vs-h200-vs-b200:-which-gpu-for-your-workload"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                               NVIDIA H100 vs H200 vs B200: Which GPU for Your Workload?
                            </a>
                        </a>
                    </div>
                    {/* ai-workflows 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/how-to-choose-on-demand-private-ai-cloud"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/private-ai-cloud/index.webp"
                                    alt="ai office tool"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/how-to-choose-on-demand-private-ai-cloud"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                How to choose On-demand Private AI Cloud
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <main className="min-h-screen bg-[#F9F9F9] text-gray-800 relative">
                {/* Banner Section */}
                <div className="w-full h-[520px] relative mt-[84px]">
                    <Image
                        src="/tutorials/bare-metal-gpus-and-virtual-gpus/banner.png"
                        alt="GPU Troubleshooting Tutorial Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                            <SlideUp>
                                <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                    How to Choose Between   <br />  Bare Metal GPUs and Virtual GPUs
                                </h1>
                            </SlideUp>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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

                    
                    <div className="space-y-8">
                        <section id="executive-summary" className="mb-12">
                            <p className="text-gray-600">
                                With the widespread deployment of machines based on the NVIDIA Blackwell architecture, such as the B200 GPU, the demands of AI workloads on computing resources have reached their peak. Bare metal GPUs and virtual GPUs, as two mainstream architectures, can both leverage this top-tier hardware, but the choice depends on performance requirements, resource utilization, and operational flexibility. 
                            </p>
                        </section>
                        {tutorialData.sections.map((section, sectionIndex) => (
                            <section key={sectionIndex} id={`section-${sectionIndex}`} className="scroll-mt-24">
                                <div className="space-y-4">
                                    {section.title && (
                                        <SlideUp>
                                            <h2 className="text-xl font-bold text-gray-900">
                                                {section.title}
                                            </h2>
                                        </SlideUp>
                                    )}
                                    <div className="space-y-4">
                                        {section.content.map((paragraph, paragraphIndex) => (
                                            <SlideUp key={paragraphIndex}>
                                                <div className="text-gray-700 leading-relaxed">
                                                    {typeof paragraph === 'string' ? (
                                                        <p dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                    ) : (
                                                        paragraph
                                                    )}
                                                </div>
                                            </SlideUp>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        ))}
                        <section id="executive-summary" className="mb-12">
                            <h2 className="text-xl font-bold mb-4">Summary</h2>
                            <p className="text-gray-600">
                                Shared and dedicated endpoints each have distinct strengths: the former excels in flexibility, low cost, and ease of use, making it ideal for exploratory phases or variable-traffic applications; the latter supports large-scale, production-grade deployments through advantages in stability, security, and customization. When selecting, enterprise users should assess their workload patterns, compliance requirements, and budget priorities to achieve optimal AI application outcomes. Regardless of the approach, aligning with business goals through testing and iteration is key to successful deployment. 
                            </p>
                        </section>
                    </div>
                    {/* Executive Summary Section */}

                
                </SidebarLayout>
            </main>
        </>
    )
}

export default TutorialLayout13