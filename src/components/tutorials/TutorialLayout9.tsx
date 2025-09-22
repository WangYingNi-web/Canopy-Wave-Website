import React, { useState } from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import ClickableImage from '@/components/ui/ClickableImage'

const TutorialLayout9: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()

    const tutorialData = {
        title: 'How AI Integration with Office Tools Boosts Work Efficiency',
        sections: [
            {
                title: 'Introduction',
                navLabel: 'Introduction',
                content: [
                    'Every day, office workers worldwide spend nearly 420 million hours on repetitive tasks. Artificial Intelligence (AI) is reclaiming that time and redefining the meaning of work efficiency.',
                    'When AI seamlessly integrates with your daily office tools, it doesn\'t just enhance speed—it elevates the intelligence of your entire workflow. This article reveals how AI can become your ultimate "efficiency secret weapon."',
                    'AI is transforming this landscape. With deep integration into everyday office tools, we are experiencing a revolution in workplace productivity. From automated report generation to intelligent data analysis, meeting summaries to predictive planning, AI is no longer a distant concept but a practical tool to supercharge efficiency.',
                ],
            },
            {
                title: 'Why Choose Canopy Wave\'s AI Solution?',
                navLabel: 'Why Canopy Wave',
                content: [
                    'Our company\'s AI platform is powerful, seamlessly integrating with your preferred office tools (SheetAI App, Arcwise, ChatCSV, Numerous AI, etc.), and our models are finely tuned for optimal performance.',
                    '**1. Enterprise-Grade Security and Privacy**: Your data is your asset. Our infrastructure is built on private clouds with strict access controls, end-to-end encryption, and optional on-premises deployment, ensuring sensitive business data is never used to train third-party models.',
                    '**2. Multi-Model Selection**: Flexibly switch between top-tier AI models based on task needs for the best results.',
                    '**3. Model Parameter Fine-Tuning**: Adjust core model parameters to meet your specific scenarios and personalized requirements.',
                    '**4. Multi-Model Output Comparison**: Generate and compare outputs from multiple models side by side, helping you choose the best solution intuitively.',
                    '**5. Feature-Rich**: Integrates a wide range of capabilities, from content generation and code writing to data analysis, providing an all-in-one AI work platform to meet diverse needs.',
                ],

            },
            {
                title: '4 AI Office Hacks to Save You 2 Hours Daily',
                navLabel: '4 Daily AI Hacks',
                content: [
                    '**Hack 1: Automate Complex Excel Reports in 3 Steps**',
                    'Pain Point: Manually merging, cleaning, and analyzing multiple data sources is time-consuming and error-prone.',
                    'Solution: Use Canopy Wave\'s data insight model to replace VLOOKUP and pivot tables with a single command.',
                    'Steps in Canopy Wave:',
                    '1. Log in to the main Chat interface at `https://chat.canopywave.io/login.`',
                    React.createElement('div', { key: 'ai-integration-image', className: 'my-2 text-center' }, [
                        React.createElement(ClickableImage, {
                            key: 'ai-integration-img',
                            src: '/tutorials/ai-integration/1.png',
                            alt: 'ai office tool',
                            className: 'max-w-full rounded-lg shadow-md'
                        })
                    ]),
                    '2. Upload your Excel or CSV file.',
                    React.createElement('div', { key: 'ai-integration-image', className: 'my-2 text-center' }, [
                        React.createElement(ClickableImage, {
                            key: 'ai-integration-img',
                            src: '/tutorials/ai-integration/2.png',
                            alt: 'ai office tool',
                            className: 'max-w-full rounded-lg shadow-md'
                        })
                    ]),
                    '3. Enter the command(copy-paste ready):',
                    '"Please sort the items by category, highlight the top 10 best-selling products, and generate a new table."',
                    React.createElement('div', { key: 'ai-integration-image', className: 'my-2 text-center' }, [
                        React.createElement(ClickableImage, {
                            key: 'ai-integration-img',
                            src: '/tutorials/ai-integration/3.png',
                            alt: 'ai office tool',
                            className: 'max-w-full rounded-lg shadow-md'
                        })
                    ]),

                    'Result: AI generates cleaned data, visualized charts, and textual analysis in seconds, exportable with one click.',
                    '',
                    '**Hack 2: One-Click Meeting Minutes and Task Lists**',
                    'Pain Point: Scattered meeting information and unclear task assignments lead to time-consuming follow-ups.',
                    'Solution: Use Canopy Wave\'s AI model to automatically summarize and organize.',
                    'Steps in Canopy Wave: ',
                    '1. Convert your meeting recording to text or paste text notes directly',
                    '2. Enter the command in the Chat interface:',
                    React.createElement('div', { key: 'ai-integration-image', className: 'my-2 text-center' }, [
                        React.createElement(ClickableImage, {
                            key: 'ai-integration-img',
                            src: '/tutorials/ai-integration/4.png',
                            alt: 'ai office tool',
                            className: 'max-w-full rounded-lg shadow-md'
                        })
                    ]),
                    '"Convert the meeting notes below into meeting minutes, extract key decision points, and create a clear task list for each person with deadlines (this Friday). Finally, output the document in Markdown table format."',
                    'Result: A clear task list ready to be copied into project management tools, ensuring team alignment.',
                    '',
                    '**Hack 3: Generate a Professional PPT Draft in 10 Minutes**',
                    'Pain Point: Creating PPTs is time-intensive, with content sourcing and formatting taking up most of the effort.',
                    'Solution: Use Canopy Wave\'s content creation model to quickly build a framework.',
                    'Steps in Canopy Wave: ',
                    '1. Enter your core theme and objectives in the Chat interface',
                    '2. Try this command: "Generate a PowerPoint outline for the \'Q2 2024 Product Launch Plan\' comprising 12 pages: Cover Page, Table of Contents, Market Background, Product Highlights, Target Audience, Marketing Strategy, Channel Planning, Budget Allocation, Timeline, Key Performance Indicators (KPIs), Summary, and Q&A."',
                    React.createElement('div', { key: 'ai-integration-image', className: 'my-2 text-center' }, [
                        React.createElement(ClickableImage, {
                            key: 'ai-integration-img',
                            src: '/tutorials/ai-integration/5.png',
                            alt: 'ai office tool',
                            className: 'max-w-full rounded-lg shadow-md'
                        })
                    ]),
                    'Result: Based on the outline, you can further instruct AI to generate detailed content for each slide, drastically reducing creation time.',
                    '**Hack 4: 3 Structured Prompt Formulas to Make AI Understand You Better**',
                    'Pain Point: AI outputs are too generic and lack precision.',
                    'Solution: Use structured prompts to communicate effectively with AI.',
                    '',
                    '**Formula 1: Role + Task + Format**',
                    'Example: "As a seasoned Chief Financial Officer (role), analyze this income statement (task). Summarize the primary issues in 200 words and present them as three key points (format)."',
                    '',
                    '**Formula 2: CRISPE Framework (Context, Role, Insight, Statement, Personality, Experiment)**',
                    'Example: After providing the AI with the necessary data context, use this prompt: "As a data analytics specialist (role), based on past data insights, draft an email (statement) to the CEO using professional yet concise language (personality), recommending that the company focus its marketing investment (experiment) on Product A in the next quarter."',
                    '',
                    
                ],
            },
            {
                title: 'Ready to Transform Your Workflow? Try Canopy Wave Today!',
                navLabel: 'Get Started',
                content: [
                    'Don\'t let repetitive tasks hold you back. Experience the power of Canopy Wave\'s AI platform and unlock a smarter, faster, and more efficient way to work.',
                    'Sign up now for a free trial at http://chat.canopywave.io and discover how our AI tools can save you hours every day. Join thousands of professionals who are already revolutionizing their workflows—start your journey to 300% productivity today!',
                ],

            },

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

    // 右侧推荐教程
    const rightSidebar = (
        <div className="space-y-6">
            {/* Recommended Tutorials Section */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200 mt-6">
                    Recommended Tutorials
                </h3>
                <div className="space-y-4">
                    {/* Llama-Locally 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/how-to-run-the-llama-locally-on-a-canopy-wave-vm"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/result-banner/Llama-Locally.png"
                                    alt="Llama-Locally Tutorial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                How to Run the Llama Locally on a Canopy Wave VM?
                            </a>
                        </a>
                    </div>
                    {/* LangGraph vs AutoGPT vs AgentGPT 文章 */}
                    <div className="bg-gray-50 rounded-lg pb-2">
                        <a
                            href="/resources/tutorials/comparing-open-source-ai-agent-frameworks"
                            className="block"
                        >
                            <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                                <img
                                    src="/tutorials/ai-agent-frameworks/ai-agent-frameworks.webp"
                                    alt="LangGraph vs AutoGPT vs AgentGPT Tutorial"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <a
                                href="/resources/tutorials/how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                LangGraph vs AutoGPT vs AgentGPT
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
                        src="/tutorials/ai-integration/banner.webp"
                        alt="ai office tool"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                            <SlideUp>
                                <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                    Redefine Your Workflow with<br />Canopy Wave Chat
                                </h1>
                            </SlideUp>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                <SidebarLayout
                    navigationItems={navigationItems}
                    title={tutorialData.title}
                    meidaSidebar={meidaSidebar}
                    showCustomTutorials={true}
                    rightSidebar={rightSidebar}
                    showRecommendedTutorials={false}
                >
                    <div className="space-y-8">
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
                </SidebarLayout>
            </main>
        </>
    )
}

export default TutorialLayout9