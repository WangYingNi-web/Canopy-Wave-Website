import React, { useState, useEffect } from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import { TutorialPost } from './index'

interface TutorialLayout2Props {
    tutorialPost: TutorialPost
}

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
            <img
                src={src}
                alt={alt}
                className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                loading="lazy"
            />
        </div>
    );
};

const TutorialLayout2: React.FC<TutorialLayout2Props> = ({ tutorialPost }) => {
    // 预加载所有图片
    useEffect(() => {
        const imagesToPreload = [
            '/tutorials/banner2.png',
            '/tutorials/Click-1.png',
            '/tutorials/Click-2.png',
            '/tutorials/Enter-1.png',
            '/tutorials/conntact-1.png',
            '/tutorials/conntact-2.png',
            '/tutorials/run-1.png',
            '/tutorials/run-2.png',
            '/tutorials/run-3.png'
        ];

        const preloadImages = (imageUrls: string[]) => {
            imageUrls.forEach(url => {
                const img = new window.Image();
                img.src = url;
            });
        };

        // 延迟预加载，避免阻塞初始渲染
        const timer = setTimeout(() => {
            preloadImages(imagesToPreload);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-[#f9f9f9] mt-[84px]">
            {/* Banner Section */}
            <div className="w-full h-[520px] relative">
                <Image
                    src="/tutorials/banner2.png"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[165px]">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                How to Run the Llama Locally <br /> in a Canopy Wave VM?
                            </h1>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-lg max-w-none">
                    <section className="mb-12">
                        <SlideUp>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                                Ⅰ、Why Deploy and Run a Large Language Model Locally?
                            </h2>
                        </SlideUp>
                        <div className="space-y-8 sm:ml-8">
                            <div>
                                <SlideUp>
                                    <h3 className="text-xl font-medium text-gray-800 mb-3">Data Privacy & Security</h3>
                                    <p className="text-gray-600 leading-relaxed ml-[20px]">
                                        When running an LLM locally, no user data is collected and no user actions are tracked. All your chat data stay on your own computer and are never shared with any AI or machine-learning servers.
                                    </p>
                                </SlideUp>
                            </div>
                            <div>
                                <SlideUp>
                                    <h3 className="text-xl font-medium text-gray-800 mb-3">Deep Customization of Models & Business Logic</h3>
                                    <ul className="text-gray-600 space-y-2 ml-6">
                                        <li><strong>Domain Adaptation:</strong> Fine-tune a general-purpose model with industry-specific knowledge (e.g., medical terminology, legal clauses) to generate more accurate domain content.</li>
                                        <li><strong>Feature Extensions:</strong> Integrate with local databases, knowledge bases, or business systems (CRM, ERP, etc.) to deliver private intelligent Q&A, document analysis, and other bespoke functions.</li>
                                        <li><strong>Full Control:</strong> Freely modify model architecture, inference logic, and output formats without being constrained by public API limitations.</li>
                                    </ul>
                                </SlideUp>
                            </div>

                            <div>
                                <SlideUp>
                                    <h3 className="text-xl font-medium text-gray-800 mb-3">Technical Autonomy & Controllability</h3>
                                    <ul className="text-gray-600 space-y-2 ml-6">
                                        <li><strong>Version Pinning:</strong> Prevent unexpected business-logic failures caused by cloud-side model updates.</li>
                                        <li><strong>Audit Transparency:</strong> Gain complete visibility into the model's input/output stream to satisfy security-audit requirements.</li>
                                        <li><strong>Vendor Independence:</strong> Reduce reliance on any single cloud provider (e.g., OpenAI).</li>
                                    </ul>
                                </SlideUp>
                            </div>
                            <div>
                                <SlideUp>
                                    <h3 className="text-xl font-medium text-gray-800 mb-3">Development & Research Needs</h3>
                                    <ul className="text-gray-600 space-y-2 ml-6">
                                        <li><strong>Model Experimentation:</strong> Researchers can freely tweak model structures and training strategies without cloud-imposed quota limits.</li>
                                        <li><strong>Edge Deployment:</strong> Explore lightweight model variants for deployment on mobile phones and IoT devices.</li>
                                    </ul>
                                </SlideUp>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <SlideUp>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                                Ⅱ. Create a virtual machine using the Canopy Wave cloud platform.
                            </h2>
                        </SlideUp>
                        <div className="space-y-8 sm:ml-8">
                            <div>
                                <SlideUp>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        1.Click the "Launch GPU VM" button to create a virtual machine.
                                    </p>
                                </SlideUp>
                                <SlideUp>
                                    <PreloadedImage 
                                        src="/tutorials/Click-1.png" 
                                        alt="Click-1" 
                                        className="w-full max-w-2xl rounded-lg shadow-sm" 
                                    />
                                </SlideUp>
                            </div>
                            <div>
                                <SlideUp>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        2.Click the "Continue" button
                                    </p>
                                </SlideUp>
                                <SlideUp>
                                    <PreloadedImage 
                                        src="/tutorials/Click-2.png" 
                                        alt="Click-2" 
                                        className="w-full max-w-2xl rounded-lg shadow-sm" 
                                    />
                                </SlideUp>
                            </div>
                            <div>
                                <SlideUp>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        3.Enter "VM Name" and "SSH Password", then click the "Continue" button.
                                    </p>
                                </SlideUp>
                                <SlideUp>
                                    <PreloadedImage 
                                        src="/tutorials/Enter-1.png" 
                                        alt="Enter-2" 
                                        className="w-full max-w-2xl rounded-lg shadow-sm" 
                                    />
                                </SlideUp>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <SlideUp>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                                Ⅲ. Deploying Llama Locally
                            </h2>
                        </SlideUp>
                        <div className="space-y-8 sm:ml-8">
                            <div>
                                <SlideUp>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Connect to the virtual machine via SSH. Open a terminal (for example, press Win+R, type cmd, and hit Enter). In the terminal, type ssh username@IP and press Enter. When prompted, enter your SSH password. Note: The password characters will not be visible as you type.
                                    </p>
                                </SlideUp>
                                <SlideUp>
                                    <PreloadedImage 
                                        src="/tutorials/conntact-1.png" 
                                        alt="conntact-1" 
                                        className="w-full max-w-2xl rounded-lg shadow-sm" 
                                    />
                                </SlideUp>
                                <SlideUp>
                                    <PreloadedImage 
                                        src="/tutorials/conntact-2.png" 
                                        alt="conntact-2" 
                                        className="w-full max-w-2xl rounded-lg shadow-sm mt-8" 
                                    />
                                </SlideUp>
                            </div>

                            <div>
                                <SlideUp>
                                    <h3 className="text-xl font-medium text-gray-800 mb-4">Download the Ollama platform to run the large language model.</h3>
                                </SlideUp>
                                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                    <SlideUp>
                                        <p className="text-gray-600 mb-2">Execute the command.：</p>
                                        <div className="font-mono text-sm">
                                            <code className="bg-gray-200 px-2 py-1 rounded">curl -fsSL https://ollama.com/install.sh | sh</code>
                                        </div>
                                    </SlideUp>
                                </div>
                                <SlideUp>
                                    <PreloadedImage 
                                        src="/tutorials/conntact-1.png" 
                                        alt="conntact-1" 
                                        className="w-full max-w-2xl rounded-lg shadow-sm" 
                                    />
                                </SlideUp>
                            </div>

                            <div>
                                <SlideUp>
                                    <h3 className="text-xl font-medium text-gray-800 mb-4">Download and run llama</h3>
                                </SlideUp>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <SlideUp>
                                        <p className="text-gray-600 mb-4">
                                            Copy the llama model and run it.
                                        </p>
                                        <PreloadedImage 
                                            src="/tutorials/run-1.png" 
                                            alt="run-1" 
                                            className="w-full max-w-2xl rounded-lg shadow-sm" 
                                        />
                                        <PreloadedImage 
                                            src="/tutorials/run-2.png" 
                                            alt="run-2" 
                                            className="w-full max-w-2xl rounded-lg shadow-sm mt-8" 
                                        />
                                        <PreloadedImage 
                                            src="/tutorials/run-3.png" 
                                            alt="run-3" 
                                            className="w-full max-w-2xl rounded-lg shadow-sm mt-8" 
                                        />
                                    </SlideUp>
                                    <SlideUp>
                                        <p className="text-gray-600 text-sm mt-4">
                                            You can now interact with your local large language model.
                                        </p>
                                    </SlideUp>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default TutorialLayout2