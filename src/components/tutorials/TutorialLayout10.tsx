import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import ClickableImage from '@/components/ui/ClickableImage'

const TutorialLayout10: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()

    const tutorialData = {
        title: 'GPU Card Drop Causes and How to Troubleshoot',
        sections: [
            {
                title: 'Introduction',
                navLabel: 'Introduction',
                content: [
                    'In our daily lives, we often encounter GPU dropouts when using computers. Therefore, this article primarily explains the causes and how to troubleshoot them.'
                ],
            },
            {
                title: '(I) Hardware-Related Causes',
                navLabel: 'Hardware-Related Causes',
                content: [
                    '**Overheating**',
                    'During high-load operation, the GPU generates a significant amount of heat. If the cooling fan stops working, the heatsink becomes severely clogged with dust, or the thermal paste dries out and loses its thermal conductivity, the GPU temperature will rapidly soar. When the temperature exceeds its critical tolerance limit, to protect the hardware, the GPU will automatically throttle its performance or shut down entirely, causing it to disappear from the system.',
                    '',
                    '**Connection Failure**',
                    'The stability of the connection between the GPU and the motherboard\'s PCIe slot is crucial. Vibrations during daily use or frequent insertion and removal can cause poor contact between the GPU and the slot, hindering signal transmission and subsequently triggering a card drop. Additionally, if the external power supply connector for the GPU is loose and cannot provide stable power, it can also cause the GPU to drop.',
                    '',
                    '**Insufficient Power Supply**',
                    'High-performance GPUs have substantial power requirements. If the power supply unit (PSU) lacks sufficient wattage, it cannot provide adequate power during high GPU load. Alternatively, an aged or damaged PSU with unstable output voltage, or poor contact between the power connectors and the GPU, can all cause the GPU to drop due to power issues.',
                    '',
                    '**Hardware Damage**',
                    'After prolonged continuous use, key hardware components such as the GPU core or VRAM may fail. For example, faulty VRAM modules can interfere with normal data read/write operations; damage to the core chip can completely disable the GPU.'
                ],
            },
            {
                title: '(II) Software-Level Issues',
                navLabel: 'Software-Level Issues',
                content: [
                    '**Driver Issues**',
                    'The driver acts as a bridge between the operating system and the GPU hardware. Outdated drivers may not fully utilize the GPU\'s performance potential and might be incompatible with new operating systems or applications; corrupted drivers can introduce errors during data transmission, preventing the GPU from functioning correctly; Installing a driver version that is not compatible with your specific GPU model is a frequent cause of failures.',
                    '',
                    '**Operating System Instability**',
                    'Corrupted system files within the operating system can disrupt the system\'s normal mechanism for recognizing and utilizing the GPU. Different operating system versions vary in their level of support for GPUs, and poor compatibility between the OS and the GPU driver can also easily lead to card drops.',
                    '',
                    '**Application Conflicts**',
                    'Some applications might excessively occupy GPU resources during operation, causing the GPU load to become too high. Or, applications with inherent bugs might conflict with the GPU driver, preventing the GPU from working according to normal commands and ultimately causing a drop.'
                ],
            },
            {
                title: '(III) Environmental Factor Interference',
                navLabel: 'Environmental Factor Interference',
                content: [
                    '**Electrostatic Discharge (ESD) Threat**',
                    'In dry environments, both the human body and equipment can easily accumulate static electricity. When an object carrying static electricity comes into contact with sensitive electronic components like the GPU, a sudden discharge when touching the GPU can permanently damage its sensitive electronic components.',
                    '',
                    '**Electromagnetic Interference (EMI)**',
                    'When powerful electromagnetic equipment (such as high-power motors or transformers) is present near the GPU, the strong electromagnetic interference they generate can severely affect the stability of signal transmission between the GPU and the motherboard. Signals being interfered with during transmission can lead to errors or interruptions, subsequently causing the GPU to drop.'
                ],
            },
            {
                title: 'Troubleshooting',
                navLabel: 'Troubleshooting',
                content: [
                    'A total of eight GPU cards were tested this time.',
                    'Users can primarily check for GPU drops via the command line.',
                    '',
                    '**Step 1:** Access the system\'s command line, enter the username and password.',
                    '<ClickableImage src="/tutorials/troubleshooting-gpu-drops/step1.webp" alt="Step 1 - Access command line" />',
                    '',
                    '**Step 2:** Enter `nvidia-smi -L` to view the GPU serial numbers and check if all 8 GPUs are detected.',
                    '<ClickableImage src="/tutorials/troubleshooting-gpu-drops/step2.webp" alt="Step 2 - nvidia-smi -L command" />',
                    '',
                    '**Step 3:** Enter `nvidia-smi` to monitor the status of all GPUs and view relevant information about GPU operation.',
                    '<ClickableImage src="/tutorials/troubleshooting-gpu-drops/step3.webp" alt="Step 3 - nvidia-smi command" />',
                    '',
                    '**Step 4:** If a dropped GPU is suspected, you can query its Serial Number (SN) for subsequent replacement (here we assume the first card, GPU 0, has dropped). The command is: `nvidia-smi -a | egrep "GPU 00000000:|Serial Number|Parity"`',
                    '<ClickableImage src="/tutorials/troubleshooting-gpu-drops/step4.webp" alt="Step 4 - Query GPU Serial Number" />',
                    '',
                    '**Step 5:** After finding the SN, you can try reseating the card to see if the drop was caused by poor contact. If the GPU cannot be restored, you can provide the SN to NVIDIA official support and inquire with their customer service.'
                ],
            },
        ]
    }

    // 根据教程内容动态生成导航项
    const navigationItems = tutorialData.sections.map((section, index) => ({
        id: `section-${index}`,
        label: section.navLabel || section.title || `Section ${index + 1}`
    }))

    const meidaSidebar = (
        <div className="rounded-lg mt-6">
            <h4 className="text-l font-semibold ml-4 text-gray-700">Share</h4>
            <SocialMediaLinks
                vertical={false}
                className="items-center pt-2 pl-4"
            />
        </div>
    )

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
                                href="/resources/tutorials/how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                How to Run the GPT-OSS Locally on a Canopy Wave VM?
                            </a>
                        </a>
                    </div>
                    {/* ai-workflows 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/nvidia-h100-vs-h200-vs-b200:-which-gpu-for-your-workload"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/workload/workload.png"
                                    alt="LangGraph vs AutoGPT vs AgentGPT Tutorial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                NVIDIA H100 vs H200 vs B200: Which GPU for Your Workload?
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderContent = (content: string) => {
        // 处理ClickableImage组件
        if (content.includes('<ClickableImage')) {
            const srcMatch = content.match(/src="([^"]+)"/)
            const altMatch = content.match(/alt="([^"]+)"/)

            if (srcMatch && altMatch) {
                return (
                    <div className="mb-6">
                        <ClickableImage
                            src={srcMatch[1]}
                            alt={altMatch[1]}
                            className="w-full max-w-2xl rounded-lg shadow-sm"
                        />
                    </div>
                )
            }
        }

        // 处理代码块
        if (content.includes('`') && !content.includes('**')) {
            const parts = content.split('`')
            return (
                <p className="text-gray-600 mb-4">
                    {parts.map((part, index) =>
                        index % 2 === 1 ? (
                            <code key={index} className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                                {part}
                            </code>
                        ) : (
                            part
                        )
                    )}
                </p>
            )
        }

        // 处理粗体文本
        if (content.includes('**')) {
            const parts = content.split('**')
            return (
                <p className="text-gray-600 mb-4">
                    {parts.map((part, index) =>
                        index % 2 === 1 ? (
                            <strong key={index} className="font-semibold text-gray-800">
                                {part}
                            </strong>
                        ) : (
                            part
                        )
                    )}
                </p>
            )
        }

        // 处理空行
        if (content.trim() === '') {
            return <div className="mb-4" />
        }

        // 普通文本
        return <p className="text-gray-600 mb-4">{content}</p>
    }

    return (
        <main className="min-h-screen bg-[#F9F9F9] text-gray-800 relative">
            {/* Banner Section */}
            <div className="w-full h-[520px] relative mt-[84px]">
                <Image
                    src="/tutorials/troubleshooting-gpu-drops/banner.webp"
                    alt="GPU Troubleshooting Tutorial Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                GPU Card Drop Causes and <br /> How to Troubleshoot
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
                <div className="prose prose-lg max-w-none">
                    <SlideUp>
                        <div className="mb-6">
                            <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                                <iframe
                                    src="https://www.youtube.com/embed/VanNu-HQLRA?modestbranding=1&rel=0&controls=1"
                                    title="What Causes a GPU to Disconnect? And how to use SSH for a simple GPU failure check."
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </SlideUp>
                    {tutorialData.sections.map((section, sectionIndex) => (
                        <section key={sectionIndex} id={`section-${sectionIndex}`} className="mb-12">
                            {/* Additional Video Section */}

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
        </main>
    )
}

export default TutorialLayout10