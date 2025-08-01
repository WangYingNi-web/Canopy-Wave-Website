import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import { TutorialPost } from './index'

interface TutorialLayout1Props {
    tutorialPost: TutorialPost
}

const TutorialLayout1: React.FC<TutorialLayout1Props> = ({ tutorialPost }) => {
    return (
        <>
            <main className="min-h-screen bg-[#f9f9f9] mt-[84px]">
                {/* Banner Section */}
                <div className="w-full h-[520px] relative">
                    <Image
                        src="/tutorials/banner.png"
                        alt="banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[165px]">
                            <SlideUp>
                                <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                    How to Run DeepSeek-R1 <br /> Locally in a Canopy Wave VM?
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
                                    Ⅰ. Why Deploy and Run a Large Language Model Locally?
                                </h2>
                            </SlideUp>
                            <div className="space-y-8 sm:ml-8">
                                <div>
                                    <SlideUp>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">1. Data Privacy & Security</h3>
                                        <p className="text-gray-600 leading-relaxed ml-[20px]">
                                            When running an LLM locally, no user data is collected and no user actions are tracked. All your chat data stay on your own computer and are never shared with any AI or machine-learning servers.
                                        </p>
                                    </SlideUp>
                                </div>
                                <div>
                                    <SlideUp>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">2. Deep Customization of Models & Business Logic</h3>
                                        <ul className="text-gray-600 space-y-2 ml-6">
                                            <li><strong>Domain Adaptation:</strong> Fine-tune a general-purpose model with industry-specific knowledge (e.g., medical terminology, legal clauses) to generate more accurate domain content.</li>
                                            <li><strong>Feature Extensions:</strong> Integrate with local databases, knowledge bases, or business systems (CRM, ERP, etc.) to deliver private intelligent Q&A, document analysis, and other bespoke functions.</li>
                                            <li><strong>Full Control:</strong> Freely modify model architecture, inference logic, and output formats without being constrained by public API limitations.</li>
                                        </ul>
                                    </SlideUp>
                                </div>

                                <div>
                                    <SlideUp>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">3. Technical Autonomy & Controllability</h3>
                                        <ul className="text-gray-600 space-y-2 ml-6">
                                            <li><strong>Version Pinning:</strong> Prevent unexpected business-logic failures caused by cloud-side model updates.</li>
                                            <li><strong>Audit Transparency:</strong> Gain complete visibility into the model's input/output stream to satisfy security-audit requirements.</li>
                                            <li><strong>Vendor Independence:</strong> Reduce reliance on any single cloud provider (e.g., OpenAI).</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                                <div>
                                    <SlideUp>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">4. Development & Research Needs</h3>
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
                                    Ⅱ. Deploying DeepSeek-R1 Locally
                                </h2>
                            </SlideUp>
                            <div className="space-y-8 sm:ml-8">
                                <div>
                                    <SlideUp>
                                        <h3 className="text-xl font-medium text-gray-800 mb-4">1. Check your hardware and pick the right model size</h3>
                                    </SlideUp>
                                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                        <SlideUp>
                                            <div className="font-mono text-sm">
                                                <code className="bg-gray-200 px-2 py-1 rounded">df -Th</code>
                                                <span className="ml-4 text-gray-600">Check how much free disk space you have.</span>
                                            </div>
                                            <img src="/tutorials/df-Th.png" alt="df -Th command output" className="w-full max-w-2xl rounded-lg shadow-sm" />
                                        </SlideUp>
                                        <br />
                                        <SlideUp>
                                            <div className="font-mono text-sm">
                                                <code className="bg-gray-200 px-2 py-1 rounded">nvidia-smi</code>
                                                <span className="ml-4 text-gray-600">Check GPU model, quantity, driver version and other information</span>
                                            </div>
                                            <img src="/tutorials/nvidia-smi.png" alt="df -Th command output" className="w-full max-w-2xl rounded-lg shadow-sm" />
                                        </SlideUp>
                                    </div>
                                </div>

                                <div>
                                    <SlideUp>
                                        <h3 className="text-xl font-medium text-gray-800 mb-4">2. Download the Ollama platform to run the large language model</h3>
                                    </SlideUp>
                                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                        <SlideUp>
                                            <div className="font-mono text-sm">
                                                <code className="bg-gray-200 px-2 py-1 rounded">curl -fsSL https://ollama.com/install.sh | sh</code>
                                            </div>
                                            <img src="/tutorials/curl-fsSL.png" alt="curl-fsSL" className="w-full max-w-2xl rounded-lg shadow-sm" />
                                        </SlideUp>
                                        <br />
                                        <SlideUp>
                                            <div className="font-mono text-sm">
                                                <code className="bg-gray-200 px-2 py-1 rounded">ollama list</code>
                                                <span className="ml-4 text-gray-600">List the models you've already downloaded.</span>
                                            </div>
                                            <img src="/tutorials/ollama-list.png" alt="ollama-list" className="w-full max-w-sm rounded-lg shadow-sm" />
                                        </SlideUp>
                                        <br />
                                        <SlideUp>
                                            <div className="font-mono text-sm">
                                                <code className="bg-gray-200 px-2 py-1 rounded">ollama --help</code>
                                                <span className="ml-4 text-gray-600">Display the Ollama command-line help.</span>
                                            </div>
                                            <img src="/tutorials/ollama-help.png" alt="ollama-help" className="w-full max-w-2xl rounded-lg shadow-sm" />
                                        </SlideUp>
                                    </div>
                                </div>

                                <div>
                                    <SlideUp>
                                        <h3 className="text-xl font-medium text-gray-800 mb-4">3. Download and run DeepSeek-R1</h3>
                                    </SlideUp>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <SlideUp>
                                            <div className="font-mono text-sm mb-2">
                                                <code className="bg-gray-200 px-2 py-1 rounded">ollama run deepseek-r1</code>
                                                <span className="ml-4 text-gray-600">Download and start DeepSeek-R1 <br />
                                                    (Choose the exact model size that matches your hardware.)</span>
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
                </div>
            </main >

        </>
    )
}

export default TutorialLayout1