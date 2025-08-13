import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'

const TutorialLayout3: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()
    // KIMI-K2教程的静态内容
    const tutorialData = {
        title: 'How to Run the KIMI-K2 Locally on a Canopy Wave VM?',
        sections: [
            {
                title: 'What is KIMI-K2?',
                navLabel: 'What is KIMI-K2',
                content: [
                    'KIMI-K2 is an open-source, trillion-parameter large language model released by Moonshot AI in July 2025. Although it boasts a total of 1 trillion parameters, it uses a Mixture-of-Experts (MoE) architecture with 384 experts, activating only 32 billion parameters per inference to balance performance and efficiency.',
                    'It performs exceptionally well in scenarios such as code generation, long-text processing, and intelligent agent tasks. It supports an ultra-long context length of up to 128K tokens, making it ideal for tasks like analyzing research papers, legal documents, or large codebases.',
                    'Moonshot AI provides two open-source versions:',
                    '• **Kimi-K2-Base**: The raw pre-trained weights, ideal for research and deep customization.',
                    '• **Kimi-K2-Instruct**: A fine-tuned version based on the base model, optimized for general instruction-following tasks and ready to use out of the box.',
                    'Kimi-K2 is a highly efficient, trillion-parameter expert in code generation and agentic tasks. It is capable of running on standard laptops or being deployed at scale in the cloud, aiming to advance AI from conversational ability to practical, real-world problem-solving.'
                ],
            },
            {
                title: 'Technical Background: Llama.cpp',
                navLabel: 'Technical Background',
                content: [
                    '**One-sentence definition**: LLAMA.CPP is a zero-dependency, pure C/C++ open-source inference engine started by Georgi Gerganov that quantizes any GGUF-format large model (7B–405B) and runs it at high speed on CPUs, laptops, phones, or even inside a browser.',
                    '**Core objectives**:',
                    '• **Democratize large models**: no high-end GPU required for local, private deployment.',
                    '• **Ultra-lightweight**: single-file executable, cross-platform (Windows / Linux / macOS / Android / iOS).',
                    '• **Peak performance**: 128K context length, speculative decoding, function calling, and multimodal support—all out of the box.'
                ],
            },
            {
                title: 'How to Deploy the KIMI-K2 Large Language Model Locally',
                navLabel: 'How to Deploy',
                content: [
                    '**1. Check System Resources to Choose the Appropriate Model Version**',
                    'View system information:',
                    '```bash\nlsb_release -a\n```',
                    '<img src="/tutorials/kimi-k2/lsb-release-output.webp" alt="lsb_release -a command output" />',
                    'Check storage space size:',
                    '```bash\ndf -Th\n```',
                    '<img src="/tutorials/df-Th.png" alt="df -Th command output" />',
                    '**2. Download and Update Software**',
                    'Update software package:',
                    '```bash\nsudo apt update\n```',
                    '<img src="/tutorials/kimi-k2/sudo-apt-update.webp" alt="sudo apt update command output" />',
                    'Install basic dependencies:',
                    '```bash\nsudo apt install -y build-essential git cmake curl libcurl4-openssl-dev libssl-dev python3-pip\n```',
                    '<img src="/tutorials/kimi-k2/sudo-apt-install.webp" alt="sudo apt update command output" />',
                    'Install Hugging Face CLI:',
                    '```bash\npip install --upgrade "huggingface_hub[cli]"\n```',
                    '<img src="/tutorials/kimi-k2/pip-install.webp" alt="sudo apt update command output" />',
                    'Download llama.cpp source code and switch directory:',
                    '```bash\ngit clone https://github.com/ggerganov/llama.cpp\ncd llama.cpp\n```',
                    '<img src="/tutorials/kimi-k2/clone.webp" alt="sudo apt update command output" />',
                    '**3. Compile the GPU version**',
                    '```bash\ncmake -B build -DGGML_CUDA=ON\ncmake --build build --config Release -j$(nproc)\n```',
                    '<img src="/tutorials/kimi-k2/cmake.webp" alt="sudo apt update command output" />',
                    '**4. Verify that the installation was successful**',
                    '```bash\n./build/bin/llama-cli --version\n```',
                    '<img src="/tutorials/kimi-k2/build.webp" alt="sudo apt update command output" />',
                    '**5. Add environment variables**',
                    '```bash\necho "export PATH=\"$PATH:$HOME/.local/bin\"" >> ~/.bashrc\nsource ~/.bashrc\n```',
                    '<img src="/tutorials/kimi-k2/echo.webp" alt="sudo apt update command output" />',
                    '**6. Download the model file**',
                    'To download the model file, please select a model that suits your storage space and graphics card on Hugging Face:',
                    '```bash\nhf download unsloth/Kimi-K2-Instruct-GGUF --include "*Q4_0*" --local-dir ./models\n```',
                    '<img src="/tutorials/kimi-k2/download.webp" alt="sudo apt update command output" />',
                    '**7. Run the Model**',
                    '```bash\n./build/bin/llama-cli -m ./models/Q4_0/Kimi-K2-Instruct-Q2_K_L-00001-of-00013.gguf --n-gpu-layers 99   --ctx-size 8192   --temp 0.6\n```',
                    '<img src="/tutorials/kimi-k2/run1.webp" alt="sudo apt update command output" />',
                    '<img src="/tutorials/kimi-k2/run2.webp" alt="sudo apt update command output" />',
                    'Next, you can interact with your local large language model on your own. If you need to exit, please press **Ctrl + C**.',
                    '**8. Code generation**',
                    'Ask AI to use Python to generate a simple horizontal game.',
                    '<img src="/tutorials/kimi-k2/code.webp" alt="sudo apt update command output" />',
                    'Use PyCharm to run the code and view the code generation results.',
                    '<img src="/tutorials/kimi-k2/pycharm.webp" alt="sudo apt update command output" />',
                ],
            },
            {
                title: 'Conclusion',
                navLabel: 'Conclusion',
                content: [
                    'Congratulations — you\'ve successfully launched KIMI-K2 on your Canopy Wave Virtual Machine! Ready to unlock more hands-on large-model tricks and the latest weights?\nEmail <a href="mailto:support@canopywave.com" className="text-[#8CC63F]">support@canopywave.com</a> right now—or click the live-chat button in the bottom-right corner at <a href="https://canopywave.com/" target="_blank" rel="noopener noreferrer" className="text-[#8CC63F]">canopywave.com</a> for live expert support within 5 minutes.',
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
                        <img
                            src={srcMatch[1]}
                            alt={altMatch ? altMatch[1] : ''}
                            className="max-w-2xl rounded-lg shadow-md border"
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
            <div className="w-full h-[490px] relative mt-[84px]">
                <Image
                    src="/tutorials/kimi-k2/banner.png"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                How to Run the KIMI-K2 Locally <br /> on a Canopy Wave VM?
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
            >
                <div className="prose prose-lg max-w-none">
                    {/* YouTube Video Section */}
                    <div className="mb-8">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                src="https://www.youtube.com/embed/rkhgwotw0gs?"
                                title="Run KIMI-K2 Locally on a Canopy Wave Virtual Machine"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
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

export default TutorialLayout3