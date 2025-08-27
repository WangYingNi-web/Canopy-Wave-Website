import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import ClickableImage from '@/components/ui/ClickableImage'

const TutorialLayout4: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()
    // gpt-oss教程的静态内容
    const tutorialData = {
        title: 'How to Run the GPT-OSS Locally on a Canopy Wave VM?',
        sections: [
            {
                title: 'Why Choose GPT-OSS?',
                navLabel: 'Why Choose GPT-OSS',
                content: [
                    '**1. Powerful yet Lightweight Performance**',
                    'The 120B version approaches top-tier closed-source model performance, while the 20B runs smoothly on edge devices, covering scenarios from servers to mobile phones.',
                    '',
                    '**2. Built-in Agent Capabilities**',
                    'Native support for function calls, web browsing, Python execution, and structured output (JSON/YAML), enabling agent workflows without extra encapsulation.',
                    '',
                    '**3. Enhanced Security and Control**',
                    'Passes biosafety and adversarial attack tests with 100% rejection rate (e.g., for virus synthesis requests) and includes safety fine-tuning guidelines.',
                    '',
                    '**4. Significant Cost Efficiency**',
                    'Local deployment eliminates API fees; the 120B quantized version runs on consumer-grade GPUs (e.g., RTX 4090).',
                ],
            },
            {
                title: 'Why Choose Local Deployment for Large Models?',
                navLabel: 'Why Choose Local Deployment',
                content: [
                    '**1. Data Privacy and Compliance**',
                    'Sensitive data (e.g., healthcare/finance) stays local, meeting strict compliance standards like GDPR/HIPAA.',
                    '',
                    '**2. Low Latency and High Availability**',
                    'Local inference latency drops to 320ms (20B model), offering real-time interaction superior to cloud APIs.',
                    '',
                    '**3. Customization and Long-Term Cost Control**',
                    'Supports fine-tuning for vertical domains (e.g., industry terminology), avoids vendor lock-in, and enables hardware reuse.',
                ],
            },
            {
                title: 'Who is GPT-OSS For?',
                navLabel: 'Who is GPT-OSS For',
                content: [
                    '• **Developers**: Free local alternative to GPT-4-level models with full-stack agent development support.',
                    '• **Privacy-Sensitive Industries (Healthcare/Finance)**: Ensures data remains local and compliant with regulations.',
                    '• **Budget-Constrained Teams**: Deploy a 120B model on a single GPU, slashing API costs that can run into millions.',
                    '• **Educators/Researchers**: Apache 2.0 license enables open development and experimental auditing.',
                ],
            },
            {
                title: 'Create a virtual machine using the Canopy Wave Cloud Platform.',
                navLabel: 'Create a VM',
                content: [
                    '**Step 1**: Click the button "Launch GPU VM" to create a virtual machine.',
                    '<img src="/tutorials/gpt-oss/step1.webp" alt="step1" />',
                    '**Step 2**: Click the button "Continue".',
                    '<img src="/tutorials/gpt-oss/step2.webp" alt="step2" />',
                    '**Step 3**: Enter "VM Name" and "SSH Password", then click the button "Continue".',
                    '<img src="/tutorials/gpt-oss/step3.webp" alt="step3" />',
                ],
            },
            {
                title: 'Deploying GPT-OSS Locally',
                navLabel: 'Deploying GPT-OSS Locally',
                content: [
                    '**1.Using SSH to Access the Virtual Machine**',
                    'Press the Win+R shortcut keys to open the Run dialog.',
                    'In the Run dialog, Enter:',
                    '```bash\nSSH username@IP\n```',
                    'Then enter your SSH password to access the virtual machine. Note that the password won‘t be displayed as you type it.',
                    '<img src="/tutorials/gpt-oss/ssh.webp" alt="lsb_release -a command output" />',
                    '**2. Download the Ollama platform to run the large language model**',
                    '```bash\ncurl -fsSL https://ollama.com/install.sh | sh\n```',
                    '<img src="/tutorials/gpt-oss/curl.webp" alt="curl" />',
                    '**3. Download and run GPT-OSS**',
                    'Copy the gpt model and run it.',
                    '<img src="/tutorials/gpt-oss/copy.png" alt="copy" />',
                    'Enter any large model you want to deploy here, e.g. GPT-OSS.',
                    '<img src="/tutorials/gpt-oss/search.png" alt="search" />',
                    'Copy the corresponding command.',
                    '```bash\nollama run gpt-oss\n```',
                    '<img src="/tutorials/gpt-oss/run.png" alt="run" />',
                    'Enter the command.',
                    '<img src="/tutorials/gpt-oss/enter.webp" alt="enter" />',
                    'You can now interact with your local large language model.',

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
            {/* Recommended GPU Services Section */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    Recommended Tutorials
                </h3>
                <div className="space-y-4">
                    {/* DeepSeek-R1 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/result-banner/DeepSeek-R1.png"
                                    alt="DeepSeek-R1 Tutorial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </a>
                        <a
                            href="/resources/tutorials/how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm"
                            className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                        >
                            How to Run DeepSeek-R1 Locally on a Canopy Wave VM?
                        </a>
                    </div>

                    {/* KIMI-K2 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/how-to-run-the-kimi-k2-locally-on-a-canopy-wave-vm"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/kimi-k2/kimi.png"
                                    alt="gpt-oss Tutorial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </a>
                        <a
                            href="/resources/tutorials/how-to-run-the-kimi-k2-locally-on-a-canopy-wave-vm"
                            className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                        >
                            How to Run the KIMI-K2 Locally on a Canopy Wave VM?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    // 渲染内容的辅助函数
    const renderContent = (content: string): React.ReactNode => {
        // 处理图片标签
        if (content.startsWith('<img')) {
            // 解析img标签的属性
            const srcMatch = content.match(/src="([^"]*)"/)
            const altMatch = content.match(/alt="([^"]*)"/)

            if (srcMatch) {
                return (
                    <div className="my-4">
                        <ClickableImage
                            src={srcMatch[1]}
                            alt={altMatch ? altMatch[1] : ''}
                            className="w-full max-w-full h-auto rounded-lg shadow-md border object-contain"
                        />
                    </div>
                )
            }
        }
        // 处理代码块
        if (content.startsWith('```') && content.endsWith('```')) {
            // 移除 ``` 标记和语言标识（如bash）
            let code = content.slice(3, -3).trim()

            // 如果代码以语言标识开头（如bash、python等），移除第一行
            const lines = code.split('\n')
            if (lines.length > 1 && lines[0].match(/^[a-zA-Z]+$/)) {
                code = lines.slice(1).join('\n')
            }

            return (
                <div className="bg-gray-100 p-2 rounded-lg font-mono text-sm overflow-x-auto my-4">
                    <pre className="text-gray-800">{code}</pre>
                </div>
            )
        }

        // 处理包含HTML链接的文本
        if (content.includes('<a href=')) {
            // 分割文本，处理链接和其他内容
            const parts = content.split(/(<a[^>]*>.*?<\/a>)/g)

            return (
                <p className="text-gray-600 leading-relaxed mb-4">
                    {parts.map((part, index) => {
                        if (part.startsWith('<a href=')) {
                            // 解析链接属性
                            const hrefMatch = part.match(/href="([^"]*)"/)
                            const classMatch = part.match(/className="([^"]*)"/)
                            const targetMatch = part.match(/target="([^"]*)"/)
                            const relMatch = part.match(/rel="([^"]*)"/)
                            const textMatch = part.match(/>([^<]*)</)

                            if (hrefMatch && textMatch) {
                                return (
                                    <a
                                        key={index}
                                        href={hrefMatch[1]}
                                        className={classMatch ? classMatch[1] : 'text-blue-600 hover:text-blue-800'}
                                        target={targetMatch ? targetMatch[1] : undefined}
                                        rel={relMatch ? relMatch[1] : undefined}
                                    >
                                        {textMatch[1]}
                                    </a>
                                )
                            }
                        }

                        // 处理普通文本中的粗体
                        const boldParts = part.split(/\*\*(.*?)\*\*/g)
                        return boldParts.map((boldPart, boldIndex) =>
                            boldIndex % 2 === 1 ?
                                <strong key={`${index}-${boldIndex}`}>{boldPart}</strong> :
                                <span key={`${index}-${boldIndex}`}>{boldPart}</span>
                        )
                    })}
                </p>
            )
        }

        // 处理粗体文本和其他格式
        const parts = content.split(/\*\*(.*?)\*\*/g)
        return (
            <p className="text-gray-600 leading-relaxed mb-4">
                {parts.map((part, index) =>
                    index % 2 === 1 ? <strong key={index}>{part}</strong> : <span key={index}>{part}</span>
                )}
            </p>
        )
    }

    return (
        <main className="min-h-screen bg-[#F9F9F9] text-gray-800">
            {/* Banner Section */}
            <div className="w-full h-[520px] relative mt-[84px]">
                <Image
                    src="/tutorials/gpt-oss/banner.png"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                How to Run the GPT-OSS Locally<br /> on a Canopy Wave VM?
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
                    {/* Video Section */}
                    <div>
                        <SlideUp>
                            <div className="mb-6">
                                <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                        src="https://www.youtube.com/embed/oF6QT8TEfMo"
                                        title="Run the GPT-OSS Locally: Full Guide on Canopy Wave VM (8×HGX H200 GPUs)"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {tutorialData.sections.map((section, sectionIndex) => (
                        <section key={sectionIndex} id={`section-${sectionIndex}`} className="mb-12">
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

export default TutorialLayout4