import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'

const TutorialLayout12: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()

    const tutorialData = {
        title: 'How to Choose On-demand Private AI Cloud',
        sections: [
            // {
            //     title: 'Introduction',
            //     navLabel: 'Introduction',
            //     content: [
            //         'In enterprise-level large language model (LLM) deployment, choosing between shared endpoints (also known as serverless endpoints) and dedicated endpoints is a critical decision factor. Each model offers distinct advantages, catering to different business scenarios and requirements. Shared endpoints emphasize flexibility and low barriers to entry, while dedicated endpoints focus on stability and control. Below is a neutral introduction to the advantages of both endpoint types across aspects such as performance, cost, security and compliance, customization, and reliability and control, helping enterprise users weigh their options based on their specific situations.'
            //     ],
            // },
            // {
            //     title: '',
            //     // navLabel: 'Executive Summary',
            //     content: [
            //         'As artificial intelligence evolves from an experimental technology into a core necessity, it is rapidly becoming a critical operational layer for modern enterprises. From predictive analytics and fraud detection to personalized customer services and workflow automation, AI is no longer a peripheral initiative—it is an essential element for businesses to maintain competitiveness. However, while AI adoption accelerates, the underlying infrastructure supporting its operations still faces significant challenges, particularly for enterprises with stringent requirements for data security and operational reliability. '
            //     ],
            // },
            {
                title: 'GPU Bottlenecks',
                navLabel: 'GPU Bottlenecks',
                content: [
                    'AI workloads demand immense computational power, and GPUs (graphics processing units) remain the gold standard for training and deploying large models. Yet significant challenges persist: GPUs are prohibitively expensive, subject to supply shortages, and extremely difficult to manage at scale. Building and operating high-performance GPU clusters requires not only substantial capital investment but also teams with deep expertise in infrastructure engineering and workflow orchestration. For most enterprises, building reliable AI infrastructure in-house presents complexity and costs that are difficult to bear.'
                ],
            },
            {
                title: 'True On-Demand GPU Resources',
                navLabel: 'True On-Demand GPU Resources',
                content: [
                    'Many cloud providers claim to offer “on-demand GPU resources,” but most solutions merely charge short-term rental fees. Users bear high costs for environment setup, performance validation, and secure deployment every time they use a GPU.',
                    'Canopy Wave pioneered the unique “Flashback” feature, enabling users to save and restore AI instances pre-configured for enterprise applications and data. This eliminates the need to rebuild AI tech stacks each time GPU resources are required. Users simply load saved images onto multiple virtual machine instances to run AI programs directly, preserving all performance metrics and security configurations.',
                    'While this should be a fundamental feature of enterprise-grade cloud services, most GPU providers only offer bare-metal leasing. Even if users negotiate short-term leases, they still must invest significant time and resources to validate the AI tech stack. For many enterprises with intermittent GPU demands, the high costs of setting up and shutting down GPU platforms force them into long-term leases. '
                ],
            },
            {
                title: 'Public clouds struggle to meet core enterprise AI requirements',
                navLabel: 'Public Cloud Limitations for AI',
                content: [
                    'While public cloud providers offer on-demand GPU access, this does not resolve all challenges. Sensitive data processed by enterprises—including intellectual property, customer records, financial transactions, and medical data—must be protected by a "security by design" approach. In many industries, compliance requirements (such as HIPAA, GDPR, and internal data governance policies) make it impossible or inappropriate to migrate critical datasets to public clouds. In short: The convenience of public clouds often comes at the expense of data control and security.'
                ],
            },
            {
                title: 'The Misconception of “On-Demand Private Cloud”',
                navLabel: 'Private Cloud: Myth vs. Reality',
                content: [
                    'Some vendors claim to offer “on-demand private cloud” solutions, touting the ability to combine the security of on-premises deployment with the elasticity of cloud services. However, the reality is that most of these solutions fall short of their promises. The majority require enterprises to pre-lease GPU and storage resources, with each lease necessitating lengthy deployment, integration, and validation cycles. The so-called “on-demand service” often necessitates weeks or even months of waiting before workloads can be launched—making it entirely unsuitable for AI teams requiring rapid iteration.'
                ],
            },
            {
                title: 'The AI Infrastructure Enterprises Truly Need',
                navLabel: 'The Ideal Enterprise AI Infrastructure',
                content: [
                    'For AI to truly align with enterprise-grade requirements, the infrastructure must satisfy the unique demands of modern machine learning workloads while meeting enterprise-level standards for security, agility, and manageability.',
                    'Native Security Design: Sensitive data—particularly proprietary models, training datasets, and customer information—must remain within the enterprise\'s trusted perimeter at all times. It must not be exposed to shared environments or violate data governance rules and compliance requirements.',
                    React.createElement(React.Fragment, {}, React.createElement('strong', {}, '•'), 'True On-Demand Elasticity: Enterprise AI teams cannot afford weeks of wait time for GPU cluster provisioning. Infrastructure must support rapid deployment and seamless scaling, ensuring resources are instantly available when training new foundational models or deploying large-scale inference services.', ),
                    React.createElement(React.Fragment, {}, React.createElement('strong', {}, '•'), 'AI-Native Architecture: Beyond high-performance GPU clusters, this requires a complete, end-to-end ecosystem, including efficient storage systems, high-speed interconnect networks, and native integration with MLOps platforms to support model lifecycle management. General-purpose computing environments simply cannot meet AI\'s demands for throughput and complexity.', ),
                    React.createElement(React.Fragment, {}, React.createElement('strong', {}, '•'), 'Ultra-simplified operations: Managing hardware, networking, drivers, and container runtimes should not consume data scientists\' and ML engineers\' time and energy. The ideal platform abstracts underlying complexity and automates routine tasks, allowing internal teams to focus on core objectives: building, optimizing, and deploying AI models that drive business growth.', ),
                ],
            },
            {
                title: 'Conclusion: ',
                navLabel: 'Conclusion',
                content: [
                    'The Future of AI Requires Infrastructure Tailored for Enterprises',
                    'Enterprises are ready to embrace AI, but they need infrastructure as powerful and agile as the models they build. The future of AI won\'t be built on traditional cloud services or inefficient private environments—it will rely on dedicated platforms that deeply understand the core needs of enterprise-grade AI.',
                    'Canopy Wave enables users to deploy, replicate, preserve, and restore AI images tailored to enterprise applications and data through unique technology. This solution addresses public cloud data security concerns while maintaining flexibility in GPU resource utilization, clearing obstacles for enterprise AI implementation.'
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
                    {/* ai-workflows 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/how-to-choose-between-bare-metal-gpus-and-virtual-gpus"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/bare-metal-gpus-and-virtual-gpus/index.webp"
                                    alt="ai office tool"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/how-to-choose-between-bare-metal-gpus-and-virtual-gpus"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                How to Choose Between Bare Metal GPUs and Virtual GPUs
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
                        src="/tutorials/private-ai-cloud/banner.png"
                        alt="GPU Troubleshooting Tutorial Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                            <SlideUp>
                                <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                    How to Choose On-demand  <br />  Private AI Cloud
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
                                As artificial intelligence evolves from an experimental technology into a core necessity, it is rapidly becoming a critical operational layer for modern enterprises. From predictive analytics and fraud detection to personalized customer services and workflow automation, AI is no longer a peripheral initiative—it is an essential element for businesses to maintain competitiveness. However, while AI adoption accelerates, the underlying infrastructure supporting its operations still faces significant challenges, particularly for enterprises with stringent requirements for data security and operational reliability. 
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
                    </div>
                    {/* Executive Summary Section */}

                
                </SidebarLayout>
            </main>
        </>
    )
}

export default TutorialLayout12