'use client'
import React, { useState } from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import ClickableImage from '@/components/ui/ClickableImage'
import { TutorialPost } from './index'
interface TutorialLayout1Props {
    tutorialPost: TutorialPost
}

const TutorialLayout1: React.FC<TutorialLayout1Props> = ({ tutorialPost }) => {
    const breadcrumbItems = useTutorialBreadcrumb()
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
    const navigationItems = [
        { id: 'why', label: 'Why' },
        { id: 'deploying-deepseek', label: 'Deploying DeepSeek-R1 Locally' },
    ];

    return (
        <>
            <main className="min-h-screen bg-[#F9F9F9] text-gray-800 relative overflow-x-hidden">
                {/* Banner Section */}
                <div className="w-full h-[520px] relative mt-[84px]">
                    <Image
                        src="/tutorials/banner.png"
                        alt="banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                            <SlideUp>
                                <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                    How to Run DeepSeek-R1 <br /> Locally on a Canopy Wave VM?
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
                
                {/* Content Section with SidebarLayout */}
                <SidebarLayout
                    navigationItems={navigationItems}
                    title="How to Run DeepSeek-R1 Locally on a Canopy Wave VM?"
                    meidaSidebar={meidaSidebar}
                >
                    <div className="prose prose-lg max-w-none">
                        {/* Video Section */}
                        <div>
                            <SlideUp>
                                <div className="mb-6">
                                    <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                                        <iframe
                                            src="https://www.youtube.com/embed/PD_UHUQM7nM?modestbranding=1&rel=0&controls=1"
                                            title="How to Run DeepSeek-R1 Locally on a Canopy Wave VM"
                                            className="w-full h-full"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                        <section id="why" className="mb-12">
                            <SlideUp>
                                <h2 className="text-xl font-bold mb-6">
                                    Ⅰ. Why Deploy and Run a Large Language Model Locally?
                                </h2>
                            </SlideUp>
                            <div className="space-y-8 sm:ml-8">
                                <div>
                                    <SlideUp>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Data Privacy & Security</h3>
                                        <p className="text-gray-600 leading-relaxed ml-[20px]">
                                            When running an LLM locally, no user data is collected and no user actions are tracked. All your chat data stay on your own computer and are never shared with any AI or machine-learning servers.
                                        </p>
                                    </SlideUp>
                                </div>
                                <div>
                                    <SlideUp>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Deep Customization of Models & Business Logic</h3>
                                        <ul className="text-gray-600 space-y-2 ml-6">
                                            <li><strong>Domain Adaptation:</strong> Fine-tune a general-purpose model with industry-specific knowledge (e.g., medical terminology, legal clauses) to generate more accurate domain content.</li>
                                            <li><strong>Feature Extensions:</strong> Integrate with local databases, knowledge bases, or business systems (CRM, ERP, etc.) to deliver private intelligent Q&A, document analysis, and other bespoke functions.</li>
                                            <li><strong>Full Control:</strong> Freely modify model architecture, inference logic, and output formats without being constrained by public API limitations.</li>
                                        </ul>
                                    </SlideUp>
                                </div>

                                <div>
                                    <SlideUp>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Technical Autonomy & Controllability</h3>
                                        <ul className="text-gray-600 space-y-2 ml-6">
                                            <li><strong>Version Pinning:</strong> Prevent unexpected business-logic failures caused by cloud-side model updates.</li>
                                            <li><strong>Audit Transparency:</strong> Gain complete visibility into the model's input/output stream to satisfy security-audit requirements.</li>
                                            <li><strong>Vendor Independence:</strong> Reduce reliance on any single cloud provider (e.g., OpenAI).</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                                <div>
                                    <SlideUp>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Development & Research Needs</h3>
                                        <ul className="text-gray-600 space-y-2 ml-6">
                                            <li><strong>Model Experimentation:</strong> Researchers can freely tweak model structures and training strategies without cloud-imposed quota limits.</li>
                                            <li><strong>Edge Deployment:</strong> Explore lightweight model variants for deployment on mobile phones and IoT devices.</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                            </div>
                        </section>

                        <section id="deploying-deepseek" className="mb-6">
                            <SlideUp>
                                <h2 className="text-xl font-bold mb-6">
                                    Ⅱ. Deploying DeepSeek-R1 Locally
                                </h2>
                            </SlideUp>
                            <div className="space-y-8 sm:ml-8 mb-4">
                                <div>
                                    <SlideUp>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">1. Check your hardware and pick the right model size</h3>
                                    </SlideUp>
                                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                        <SlideUp>
                                            <div className="font-mono text-sm mb-4">
                                                <div className="text-gray-600 mb-2">Check how much free disk space you have.</div>
                                                <code className="bg-gray-200 px-2 py-1 rounded">df -Th</code>
                                            </div>
                                            <img src="/tutorials/df-Th.png" alt="df -Th command output" className="w-full max-w-2xl rounded-lg shadow-sm" />
                                        </SlideUp>
                                        <br />
                                        <SlideUp>
                                            <div className="font-mono text-sm mb-4">
                                                <div className="text-gray-600 mb-2">Check GPU model, quantity, driver version and other information</div>
                                                <code className="bg-gray-200 px-2 py-1 rounded">nvidia-smi</code>
                                            </div>
                                            <img src="/tutorials/nvidia-smi.png" alt="df -Th command output" className="w-full max-w-2xl rounded-lg shadow-sm" />
                                        </SlideUp>
                                    </div>
                                </div>
                                <div>
                                    <SlideUp>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">2. Download the Ollama platform to run the large language model</h3>
                                    </SlideUp>
                                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                        <SlideUp>
                                            <div className="font-mono text-sm mb-4">
                                                <code className="bg-gray-200 px-2 py-1 rounded">curl -fsSL https://ollama.com/install.sh | sh</code>
                                            </div>
                                            <img src="/tutorials/curl-fsSL.png" alt="curl-fsSL" className="w-full max-w-2xl rounded-lg shadow-sm" />
                                        </SlideUp>
                                        <br />
                                        <SlideUp>
                                            <div className="font-mono text-sm mb-4">
                                                <div className='text-gray-600 mb-2'>List the models you've already downloaded.</div>
                                                <code className="bg-gray-200 px-2 py-1 rounded">ollama list</code>
                                            </div>
                                            <img src="/tutorials/ollama-list.png" alt="ollama-list" className="w-full max-w-sm rounded-lg shadow-sm" />
                                        </SlideUp>
                                        <br />
                                        <SlideUp>
                                            <div className="font-mono text-sm mb-4">
                                                <div className='text-gray-600 mb-2'>Display the Ollama command-line help.</div>
                                                <code className="bg-gray-200 px-2 py-1 rounded">ollama --help</code>
                                            </div>
                                            <img src="/tutorials/ollama-help.png" alt="ollama-help" className="w-full max-w-2xl rounded-lg shadow-sm" />
                                        </SlideUp>
                                    </div>
                                </div>

                                <div>
                                    <SlideUp>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">3. Download and run DeepSeek-R1</h3>
                                    </SlideUp>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <SlideUp>
                                            <div className="font-mono text-sm mb-4">
                                                <div className="text-gray-600 mb-2">Download and start DeepSeek-R1
                                                    (Choose the exact model size that matches your hardware.)</div>
                                                <code className="bg-gray-200 px-2 py-1 rounded">ollama run deepseek-r1</code>
                                            </div>
                                            <img src="/tutorials/ollama-run.png" alt="ollama-run" className="w-full max-w-2xl rounded-lg shadow-sm" />

                                            <p className="text-gray-600 text-sm mt-4">
                                                You can now interact with your local large language model. To exit, press <code className="bg-gray-200 px-1 rounded">Ctrl + D</code> or type <code className="bg-gray-200 px-1 rounded">/bye</code> in the chat window.
                                            </p>
                                        </SlideUp>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </SidebarLayout>
            </main >

        </>
    )
}

export default TutorialLayout1