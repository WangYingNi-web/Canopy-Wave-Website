import React, { useState } from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import ClickableImage from '@/components/ui/ClickableImage'

const TutorialLayout8: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()

    const tutorialData = {
        title: 'Comparing Open-Source AI Agent Frameworks',
        sections: [
            {
                title: 'Introduction',
                navLabel: 'Introduction',
                content: [
                    'Amid the rapid growth of AI agents, open-source frameworks have emerged as powerful tools for developers building intelligent applications. LangGraph, AutoGPT, and AgentGPT each offer distinct features, providing diverse options for developers with varying needs—from technical architecture to practical implementation.'
                ],
            },
            {
                title: 'LangGraph: A Fine-Grained Control Framework Based on Graph Structures',
                navLabel: 'LangGraph',
                content: [
                    React.createElement('h3', { key: 'langgraph-arch', className: 'text-lg font-semibold mt-6 mb-3' }, '(1) Technical Architecture and Principles'),
                    'LangGraph is an extension library built on LangChain, with its core innovation being the introduction of cyclic graph methods. It enables developers to define tasks as graphs, where nodes represent actions (often involving LLMs) and edges define the flow of control, ultimately compiling this graph into a runnable application.',
                    'During task execution, a central state object is maintained and continuously updated based on node transitions. The properties within this state can be freely defined. For instance, when constructing a complex data analysis workflow, steps like data acquisition, cleaning, analysis, and visualization can be defined as nodes in the graph. Edges between nodes represent data flow or operational sequence, while the state object records each node\'s execution status, intermediate data, and other relevant information.',
                    React.createElement('h3', { key: 'langgraph-advantages', className: 'text-lg font-semibold mt-6 mb-3' }, '(2) Technical Advantages'),
                    React.createElement('h4', { key: 'langgraph-control', className: 'font-medium mt-4 mb-2' }, 'a. Fine-grained process control:'),
                    'Unlike LangChain\'s chain structure, LangGraph overcomes the limitation that chains lack "looping" capabilities, enabling more precise control over complex task workflows. For instance, in a machine learning model training task requiring multiple iterations for optimization, it allows easy setup of loop nodes. Based on model evaluation results, it determines whether to re-enter the training step, ensuring optimal model performance.',
                    React.createElement('h4', { key: 'langgraph-compatibility', className: 'font-medium mt-4 mb-2' }, 'b. Compatibility with LangChain Ecosystem:'),
                    'Rather than a standalone framework, LangGraph seamlessly integrates with existing LangChain components like Chains and LCEL (LangChain Express Language). Developers can leverage LangChain\'s extensive library of predefined tools and features—including support for diverse large language models—significantly reducing development overhead.',
                    React.createElement('h3', { key: 'langgraph-scenarios', className: 'text-lg font-semibold mt-6 mb-3' }, '(3) Applicable Scenarios'),
                    React.createElement('h4', { key: 'langgraph-enterprise', className: 'font-medium mt-4 mb-2' }, 'a. Enterprise-level complex business process automation:'),
                    'In financial institutions\' risk assessment workflows, which involve multiple intricate steps such as data collection, risk indicator calculation, model prediction, and result review—potentially including loops and branches—LangGraph can construct these steps as graph structures. This enables full-process automation, ensuring both accuracy and efficiency in risk assessment.',
                    React.createElement('h4', { key: 'langgraph-research', className: 'font-medium mt-4 mb-2' }, 'b. Experimental Process Management in Scientific Research:'),
                    'For instance, in chemical experiment simulations, the workflow from setting experimental conditions, running simulations, collecting data, to analyzing results may require adjusting parameters based on intermediate outcomes and rerunning simulations. LangGraph\'s graph structure clearly defines experimental workflows, enabling researchers to efficiently manage and optimize experimental processes.'
                ],
            },
            {
                title: 'AutoGPT: A Task-Driven Automation Engine',
                navLabel: 'AutoGPT',
                content: [
                    React.createElement('h3', { key: 'autogpt-arch', className: 'text-lg font-semibold mt-6 mb-3' }, '(1) Technical Architecture and Principles'),
                    'AutoGPT employs a hierarchical state machine design with an embedded Planning-Execution-Observation loop. Taking the task of "Developing a Q2 2024 social media marketing plan including competitor analysis" as an example:',
                    'During Execution, it invokes specialized tools (e.g., web crawlers for competitor data extraction, text generation models for marketing copy creation) to execute these subtasks. The Observation phase evaluates outcomes; if results fall short of expectations (e.g., incomplete data collection), the system loops back to Planning to adjust strategies.',
                    'Additionally, it integrates a vector database (ChromaDB) as a long-term memory system for storing and retrieving historical task information and knowledge.',
                    React.createElement('h3', { key: 'autogpt-advantages', className: 'text-lg font-semibold mt-6 mb-3' }, '(2) Technical Advantages'),
                    React.createElement('h4', { key: 'autogpt-automation', className: 'font-medium mt-4 mb-2' }, 'a. High Automation:'),
                    'Capable of autonomously planning, executing, and adjusting based on task objectives, significantly reducing manual intervention. For routine, repetitive complex tasks, it can independently complete the entire workflow from task decomposition to output generation.',
                    'For instance, in the daily product listing process of e-commerce platforms—from product information collection and image processing to detail page generation and publishing—AutoGPT can automate the entire process.',
                    React.createElement('h4', { key: 'autogpt-context', className: 'font-medium mt-4 mb-2' }, 'b. Dynamic Context Management:'),
                    'It intelligently scales its context window based on task requirements, optimizing model resource utilization to enhance efficiency and accuracy when processing long texts or complex tasks. For instance, when analyzing lengthy documents, it intelligently scales the context window to ensure the model focuses on critical information, preventing performance degradation due to information overload.',
                    React.createElement('h3', { key: 'autogpt-scenarios', className: 'text-lg font-semibold mt-6 mb-3' }, '(3) Applicable Scenarios'),
                    React.createElement('h4', { key: 'autogpt-prototyping', className: 'font-medium mt-4 mb-2' }, 'a. Rapid Prototyping:'),
                    'For projects with clear objectives requiring quick initial results—such as developing a simple mobile app prototype—AutoGPT leverages its extensive pre-built tools to swiftly complete preliminary setup from requirements analysis to interface design and feature implementation. This enables developers to validate project feasibility within a short timeframe.',
                    React.createElement('h4', { key: 'autogpt-research', className: 'font-medium mt-4 mb-2' }, 'b. Information Gathering and Analysis Tasks:'),
                    'In market research scenarios requiring extensive data collection, industry trend analysis, and competitor comparison, AutoGPT can automatically plan data acquisition channels (e.g., web scraping, database queries), analyze information, and generate reports to support business decision-making.'
                ],
            },
            {
                title: 'AgentGPT: A Lightweight and Accessible Autonomous Agent Framework',
                navLabel: 'AgentGPT',
                content: [
                    React.createElement('h3', { key: 'agentgpt-arch', className: 'text-lg font-semibold mt-6 mb-3' }, '(1) Technical Architecture and Principles'),
                    'AgentGPT is an autonomous agent framework that runs within a browser, constructing a relatively simple autonomous decision-making system. Through predefined rules and algorithms, it receives task instructions from users and internally parses the task into a series of operational steps. For example, when a user inputs "Write an article about the development trends of artificial intelligence," AgentGPT analyzes keywords to determine the sequence of actions: first conducting data collection (such as searching online for relevant literature and reports), then organizing and drafting content based on the gathered information.',
                    'It also incorporates a memory mechanism that retains key details during task execution—such as important viewpoints and data collected—for use in subsequent steps.',
                    React.createElement('h3', { key: 'agentgpt-advantages', className: 'text-lg font-semibold mt-6 mb-3' }, '(2) Technical Advantages'),
                    React.createElement('h4', { key: 'agentgpt-lightweight', className: 'font-medium mt-4 mb-2' }, 'a. Lightweight and User-Friendly:'),
                    'Requires no complex installation or configuration. Accessible instantly within a browser, making it ideal for users with limited technical expertise. Even content creators without extensive programming experience can effortlessly leverage AgentGPT for writing, planning, and other tasks.',
                    React.createElement('h4', { key: 'agentgpt-intuitive', className: 'font-medium mt-4 mb-2' }, 'b. Intuitive Task Execution Experience:'),
                    'Users clearly see each step of task execution and receive progress feedback. From initial planning to step-by-step execution, every stage is transparently displayed. This allows users to understand the agent\'s workflow and enhances their sense of control over task outcomes.',
                    React.createElement('h3', { key: 'agentgpt-scenarios', className: 'text-lg font-semibold mt-6 mb-3' }, '(3) Applicable Scenarios'),
                    React.createElement('h4', { key: 'agentgpt-personal', className: 'font-medium mt-4 mb-2' }, 'a. Personal Daily Task Assistance:'),
                    'In personal learning and daily life scenarios, such as students writing course papers, AgentGPT can help quickly gather materials and build paper outlines. When homemakers plan family trips, AgentGPT can assist in searching for tourist attractions, booking hotels, and more, becoming a capable assistant for personal life.',
                    React.createElement('h4', { key: 'agentgpt-exploring', className: 'font-medium mt-4 mb-2' }, 'b. Ideal for Exploring AI Agent Capabilities:'),
                    'For users seeking an initial understanding of AI Agent capabilities and applications, performing basic tasks through AgentGPT—such as drafting a cover letter or creating a fitness plan—offers a low-cost, low-barrier way to experience how agents autonomously complete tasks. This lays the groundwork for deeper learning and application of AI Agent technology.'
                ],
            },
            {
                title: 'Comprehensive Framework Comparison and Selection Recommendations',
                navLabel: 'Framework Comparison and Selection',
                content: [
                    React.createElement('h3', { key: 'comparison-tech', className: 'text-lg font-semibold mt-6 mb-3' }, '(1) Summary of Technical Differences'),
                    React.createElement('h4', { key: 'comparison-flow', className: 'font-medium mt-4 mb-2' }, 'a. Task Flow Control:'),
                    'LangGraph achieves the most granular process control through graph structures, making it suitable for complex, dynamic task flows. AutoGPT employs hierarchical state machines and recursive mechanisms to enable automated task planning and execution, though its process flexibility is slightly weaker than LangGraph\'s. AgentGPT features relatively simple, fixed task flows primarily suited for routine, pattern-based tasks.',
                    React.createElement('h4', { key: 'comparison-memory', className: 'font-medium mt-4 mb-2' }, 'b. Memory Mechanisms:'),
                    'LangGraph\'s central state object supports customizable attributes for flexible task-related information logging. AutoGPT integrates vector databases for long-term memory, excelling in historical data storage and retrieval. AgentGPT maintains basic critical information memory during task execution to fulfill its own processing requirements.',
                    React.createElement('h4', { key: 'comparison-difficulty', className: 'font-medium mt-4 mb-2' }, 'c. Development Difficulty and Learning Curve:'),
                    'LangGraph\'s complexity from its graph structure and deep integration with the LangChain ecosystem results in higher development difficulty and a steeper learning curve, though it offers powerful customization and extensibility. AutoGPT\'s technical architecture is relatively complex, requiring some programming foundation and understanding of task automation, but it provides rich tools and automation features. AgentGPT is extremely easy to get started with, has low technical requirements for developers, and is suitable for beginners to experiment with and handle simple tasks.',
                    React.createElement('h3', { key: 'comparison-recommendations', className: 'text-lg font-semibold mt-6 mb-3' }, '(2) Recommended Application Scenarios'),
                    React.createElement('h4', { key: 'comparison-complex', className: 'font-medium mt-4 mb-2' }, 'a. Complex System Integration and Custom Development:'),
                    'When development requirements involve building enterprise-level complex business systems that demand deep customization of task workflows and high integration with existing systems, LangGraph is the optimal choice. For instance, in large enterprises\' supply chain management systems—which involve intricate coordination across multiple stages such as procurement, production, logistics, and inventory—LangGraph can precisely construct workflows and achieve automation.',
                    React.createElement('h4', { key: 'comparison-automation', className: 'font-medium mt-4 mb-2' }, 'b. End-to-End Automated Task Processing:'),
                    'For high-volume routine, repetitive tasks demanding high automation—such as order processing on e-commerce platforms or generating data analysis reports—AutoGPT significantly boosts efficiency and reduces labor costs through its advanced automation capabilities.',
                    React.createElement('h4', { key: 'comparison-individual', className: 'font-medium mt-4 mb-2' }, 'c. Individual Users and Simple Task Scenarios:'),
                    'For everyday tasks like basic writing or life planning by individual users, or for assisting with non-core, straightforward business processes within enterprises, AgentGPT delivers rapid solutions with its lightweight, user-friendly design. Examples include employees drafting weekly reports or planning small team activities.'
                ],
            }
            
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
                            <a
                                href="/resources/tutorials/how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                How to Run DeepSeek-R1 Locally on a Canopy Wave VM?
                            </a>
                        </a>
                    </div>
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
                                href="/resources/tutorials/how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm"
                                className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                            >
                                How to Run the GPT-OSS Locally on a Canopy Wave VM?
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderContent = (content: any) => {
        if (typeof content === 'string') {
            return <p className="text-gray-800 leading-relaxed">{content}</p>
        }
        return content
    }

    return (
        <>
            {/* Banner Section */}
            <div className="w-full h-[520px] relative mt-[84px]">
                <Image
                    src="/tutorials/ai-agent-frameworks/banner.webp"
                    alt="Prompt Engineering Guide Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                Comparing Al Agent Frameworks: <br /> LangGraphvs AutoGPTvs AgentGPT
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
                <div className="prose prose-lg max-w-none
              /* 强制所有文本换行 */
              [&_*]:break-words [&_*]:overflow-wrap-anywhere
              /* 表格响应式处理 */
              [&_table]:w-full [&_table]:table-auto [&_table]:overflow-x-auto
              [&_table]:block [&_table]:whitespace-nowrap
              [&_td]:min-w-0 [&_td]:break-words [&_td]:whitespace-normal
              [&_th]:min-w-0 [&_th]:break-words [&_th]:whitespace-normal
              /* 列表项处理 */
              [&_li]:break-words [&_li]:overflow-wrap-anywhere
              /* 段落处理 */
              [&_p]:break-words [&_p]:overflow-wrap-anywhere
              /* 标题处理 */
              [&_h1]:break-words [&_h2]:break-words [&_h3]:break-words
              /* 移动端特殊处理 */
              max-sm:[&_table]:text-sm max-sm:[&_td]:p-2 max-sm:[&_th]:p-2
              max-sm:[&_li]:text-sm max-sm:[&_p]:text-sm
            ">
                    {tutorialData.sections.map((section, sectionIndex) => (
                        <section key={sectionIndex} id={`section-${sectionIndex}`} className="mb-8">
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
        </>
    )
}

export default TutorialLayout8