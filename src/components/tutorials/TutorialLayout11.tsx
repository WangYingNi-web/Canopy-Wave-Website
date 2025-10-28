import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'

const TutorialLayout11: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()

    const tutorialData = {
        title: 'Dedicated vs Shared LLM Endpoints',
        sections: [
            // {
            //     title: 'Introduction',
            //     navLabel: 'Introduction',
            //     content: [
            //         'In enterprise-level large language model (LLM) deployment, choosing between shared endpoints (also known as serverless endpoints) and dedicated endpoints is a critical decision factor. Each model offers distinct advantages, catering to different business scenarios and requirements. Shared endpoints emphasize flexibility and low barriers to entry, while dedicated endpoints focus on stability and control. Below is a neutral introduction to the advantages of both endpoint types across aspects such as performance, cost, security and compliance, customization, and reliability and control, helping enterprise users weigh their options based on their specific situations.'
            //     ],
            // },
            {
                title: '1. Performance: Response Speed and Resource Allocation',
                navLabel: 'Performance',
                content: [
                    '**Advantages of Shared Endpoints**: Shared endpoints adopt a multi-tenant architecture that enables dynamic resource allocation, supporting rapid scaling and handling of burst traffic. This makes them particularly suitable for experimental applications or scenarios with unstable traffic, where users can receive immediate responses without pre-provisioning resources. At the same time, providers typically optimize overall performance through load balancing mechanisms, ensuring low latency in most cases. ',
                    '**Advantages of Dedicated Endpoints**: Dedicated endpoints exclusively reserve GPU resources for a single tenant, providing highly predictable and consistent performance. This avoids "noisy neighbor" issues in multi-tenant environments, ensuring low latency and high throughput, which is ideal for real-time interactive or high-load mission-critical applications, such as chatbots or automated coding tools.',
                ],
            },
            {
                title: '2. Cost: Budget Planning and Usage Efficiency',
                navLabel: 'Cost',
                content: [
                    '**Advantages of Shared Endpoints**: Typically operating on a pay-as-you-go or per-token billing model, shared endpoints incur no costs during idle periods, making them highly suitable for prototype development, testing, or intermittent usage scenarios. This flexible pricing mechanism lowers the initial investment threshold and allows enterprises to precisely control costs based on actual consumption, avoiding resource waste.',
                    '**Advantages of Dedicated Endpoints**: For high-capacity or continuous workloads, dedicated endpoints offer a more predictable cost structure through fixed hourly/minutely rates or unlimited token generation modes. This facilitates long-term budget planning for enterprises and delivers higher cost-effectiveness at scale, especially when monthly token consumption exceeds a certain threshold. '
                ],
            },
            {
                title: '3. Security and Compliance: Data Protection and Privacy Management ',
                navLabel: 'Security and Compliance',
                content: [
                    '**Advantages of Shared Endpoints**: Providers typically implement standard security measures, such as data transmission encryption and access controls, offering a reliable protection layer for most enterprises. Meanwhile, the shared model enables quick integration without requiring enterprises to maintain security infrastructure themselves, making it suitable for applications with moderate data sensitivity. ',
                    '**Advantages of Dedicated Endpoints**: By deploying in isolated environments like Virtual Private Clouds (VPCs), dedicated endpoints ensure that sensitive data (such as user prompts and model outputs) never leaves the enterprise\'s network boundary. This provides stronger compliance support for highly regulated industries like finance, healthcare, or government, meeting strict standards such as HIPAA or GDPR. '
                ],
            },
            {
                title: '4. Customization and Flexibility: Model Adaptation and Integration ',
                navLabel: 'Customization and Flexibility',
                content: [
                    '**Advantages of Shared Endpoints**: Shared endpoints offer a rich library of pre-configured models and simple API interfaces, facilitating quick onboarding and integration. This lowers the technical barrier, making them ideal for standardized applications or teams needing rapid iteration, where users can easily switch between models without complex configurations. ',
                    '**Advantages of Dedicated Endpoints**: Dedicated endpoints allow enterprises to deploy custom models, including proprietary LLMs fine-tuned on private datasets. This supports advanced optimizations, such as running multiple LoRA models on a single GPU or building multi-model compound AI systems, helping enterprises create unique business solutions. '
                ],
            },
            {
                title: '5. Reliability and Control: Service Assurance and Operational Autonomy ',
                navLabel: 'Reliability and Control',
                content: [
                    '**Advantages of Shared Endpoints**:  Fully managed by the provider, shared endpoints reduce the operational burden on enterprises and benefit from the provider\'s ongoing optimizations and global redundancy. This ensures high availability, making them suitable for enterprises that prefer not to invest internal resources. ',
                    '**Advantages of Dedicated Endpoints**: Dedicated endpoints typically include Service Level Agreements (SLAs), such as 99.99% uptime guarantees, along with dedicated support teams. This grants enterprises greater control, mitigating impacts from provider policy changes and ensuring the service remains unaffected by other users\' activities. '
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
                            href="/resources/tutorials/prompt-engineering-guide"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/prompt-engineering-guide/group.png"
                                    alt="prompt engineering guide"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                               Prompt Engineering Guide
                            </a>
                        </a>
                    </div>
                    {/* ai-workflows 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/redefine-your-workflow-with-canopy-wave-chat"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/ai-integration/ai-integration.webp"
                                    alt="ai office tool"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                Redefine Your Workflow with Canopy Wave Chat
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
                        src="/tutorials/dedicated-vs-shared-llm-endpoints/banner.png"
                        alt="GPU Troubleshooting Tutorial Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                            <SlideUp>
                                <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                    Dedicated vs Shared <br />  LLM Endpoints
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
                                In enterprise-level large language model (LLM) deployment, choosing between shared endpoints (also known as serverless endpoints) and dedicated endpoints is a critical decision factor. Each model offers distinct advantages, catering to different business scenarios and requirements. Shared endpoints emphasize flexibility and low barriers to entry, while dedicated endpoints focus on stability and control. Below is a neutral introduction to the advantages of both endpoint types across aspects such as performance, cost, security and compliance, customization, and reliability and control, helping enterprise users weigh their options based on their specific situations. 
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

export default TutorialLayout11