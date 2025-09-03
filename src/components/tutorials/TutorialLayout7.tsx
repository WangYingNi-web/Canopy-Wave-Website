import React, { useState } from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import ClickableImage from '@/components/ui/ClickableImage'

const TutorialLayout7: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()

    const tutorialData = {
        title: 'Prompt Engineering Guide',
        sections: [
            {
                title: 'Introduction',
                navLabel: 'Introduction',
                content: [
                    'The rise of Large Language Models (LLMs) has brought exciting possibilities for human-computer interaction. However, to fully unlock the potential of these powerful AI models, one crucial skill is required: prompt engineering.',
                    'This rapidly evolving field focuses on crafting effective prompts that leverage the capabilities of LLMs, enabling them to understand intent, follow instructions, and generate desired outputs. As AI becomes increasingly embedded in various applications, prompt engineering plays a critical role in ensuring accurate, relevant, and safe interactions.'
                ],
            },
            {
                title: 'Roles of Prompts',
                navLabel: 'Roles of Prompts',
                content: [
                    'In AI dialogue, system, user, and assistant are the core interaction roles, while tool/function serves as an extension that enhances the assistant\'s capabilities.',
                    React.createElement('span', {}, [
                        'These four roles have clear division of responsibilities and work together to form a complete process of "',
                        React.createElement('em', {}, 'understanding the need → invoking the right capability → generating results'),
                        '."'
                    ]),
                    React.createElement('h3', { key: 'system-role', className: 'text-lg font-semibold mt-6 mb-3' }, '1. System: The Invisible Rule Setter'),
                    'The system role consists of instructions preset by developers. These are not exposed to users directly but instead guide the assistant, defining boundaries, scope, tone, and style—essentially serving as the AI\'s instruction manual.',
                    React.createElement('h4', { key: 'system-functions', className: 'font-medium mt-4 mb-2' }, 'Core Functions:'),
                    React.createElement('ul', { key: 'system-list', className: 'space-y-3' }, [
                        React.createElement('li', { key: 'system-1' }, [
                            React.createElement('strong', {}, 'Define identity and goals'),
                            React.createElement('br'),
                            'Example: "You are a professional math tutor. Explain junior-high math step by step, and avoid advanced math terminology."'
                        ]),
                        React.createElement('li', { key: 'system-2' }, [
                            React.createElement('strong', {}, 'Set interaction rules'),
                            React.createElement('br'),
                            'Example: "If a user asks non-math questions, politely redirect to math. Keep answers under 300 words and emphasize formula derivation."'
                        ]),
                        React.createElement('li', { key: 'system-3' }, [
                            React.createElement('strong', {}, 'Provide background information'),
                            React.createElement('br'),
                            'Example: "Here is a company\'s product specification sheet. When asked about products, only use this sheet and do not invent information."'
                        ]),
                        React.createElement('li', { key: 'system-4' }, [
                            React.createElement('strong', {}, 'Define output format'),
                            React.createElement('br'),
                            'Example: "When using the calculator, respond strictly in the format: [Tool: Calculator, Parameters: {expression: \'2+34\', precision: integer}]"'
                        ])
                    ]),
                    React.createElement('h3', { key: 'user-role', className: 'text-lg font-semibold mt-6 mb-3' }, '2. User: The Origin of Demand'),
                    'The user role represents the source of interaction—the user expresses needs through text, voice, images, or other forms. User inputs serve as the primary basis for the assistant\'s responses.',
                    React.createElement('h4', { key: 'user-functions', className: 'font-medium mt-4 mb-2' }, 'Core Functions:'),
                    React.createElement('ul', { key: 'user-list', className: 'space-y-3' }, [
                        React.createElement('li', { key: 'user-1' }, [
                            React.createElement('strong', {}, 'Initiate requests'),
                            React.createElement('br'),
                            'Example: "Calculate the number of working days in May 2024" / "Explain the core principles of relativity" / "Write a product marketing copy."'
                        ]),
                        React.createElement('li', { key: 'user-2' }, [
                            React.createElement('strong', {}, 'Provide additional details'),
                            React.createElement('br'),
                            'Example: Assistant asks: "Is your product in electronics or cosmetics?" User: "Cosmetics—lipstick."'
                        ]),
                        React.createElement('li', { key: 'user-3' }, [
                            React.createElement('strong', {}, 'Feedback and adjustment'),
                            React.createElement('br'),
                            'Example: "The copy sounds too formal. Can you make it more playful?" / "The calculation is wrong, check again."'
                        ])
                    ]),
                    React.createElement('h3', { key: 'assistant-role', className: 'text-lg font-semibold mt-6 mb-3' }, '3. Assistant: The Executor and Bridge'),
                    'The assistant is the AI system\'s visible role. Its core duties are to interpret system rules + parse user intent + produce compliant responses. In systems with tools, it also decides whether and how to invoke them.',
                    React.createElement('h4', { key: 'assistant-functions', className: 'font-medium mt-4 mb-2' }, 'Core Functions:'),
                    React.createElement('ul', { key: 'assistant-list', className: 'space-y-3' }, [
                        React.createElement('li', { key: 'assistant-1' }, [
                            React.createElement('strong', {}, 'Understand intent'),
                            React.createElement('br'),
                            'Example: User asks "Should I bring an umbrella tomorrow?" → Assistant interprets as "Check tomorrow\'s rainfall probability."'
                        ]),
                        React.createElement('li', { key: 'assistant-2' }, [
                            React.createElement('strong', {}, 'Directly respond'),
                            React.createElement('br'),
                            'Example: "The core principle of relativity is…" / "2 + 3 = 5."'
                        ]),
                        React.createElement('li', { key: 'assistant-3' }, [
                            React.createElement('strong', {}, 'Decide tool use'),
                            React.createElement('br'),
                            'Example: "Call weather API for Beijing\'s forecast" / "Call calculator for 12345 × 6789."'
                        ]),
                        React.createElement('li', { key: 'assistant-4' }, [
                            React.createElement('strong', {}, 'Integrate tool results'),
                            React.createElement('br'),
                            'Example: Tool returns: "Beijing May 1, 2024: Rain probability 60%." Assistant says: "Beijing\'s rain chance is 60%. We suggest carrying an umbrella."'
                        ]),
                        // React.createElement('li', { key: 'assistant-5' }, [
                        //     React.createElement('strong', {}, 'Ask clarifying questions'),
                        //     ': If user input is vague, probe for details before responding.'
                        // ])
                    ]),
                    React.createElement('h3', { key: 'tool-role', className: 'text-lg font-semibold mt-6 mb-3' }, '4. Extended Role: Tool/Function – Assistant\'s Power Extension'),
                    'Tools and Functions handle tasks that the assistant cannot perform on its own. They are essentially callable programs, APIs, or services, e.g., weather APIs, calculators, document parsers, or map services.',
                    'Without tools, assistants rely solely on training data. With tools, they can access real-time info, perform complex operations, and support far broader use cases.',
                    React.createElement('h4', { key: 'tool-functions', className: 'font-medium mt-4 mb-2' }, 'Core Functions:'),
                    React.createElement('ul', { key: 'tool-list', className: 'space-y-2' }, [
                        React.createElement('li', { key: 'tool-1' }, React.createElement('strong', {}, 'Fill capability gaps'), ': Handle tasks beyond model limitations.'),
                        React.createElement('li', { key: 'tool-2' }, React.createElement('strong', {}, 'Improve precision'), ': Avoid outdated/guessed answers (e.g., get live stock prices instead of relying on old data).'),
                        React.createElement('li', { key: 'tool-3' }, React.createElement('strong', {}, 'Reduce user effort'), ': Users state their needs, the Assistant handles tool calls automatically.')
                    ])
                ],
            },
            {
                title: 'Role Interaction Logic',
                navLabel: 'Role Interaction Logic',
                content: [
                    React.createElement('strong', { key: 'example-scenario' }, 'Example scenario: '),
                    'User asks for the PM2.5 index of Santa Clara, California on May 1, 2024, and requests an analysis report.',
                    React.createElement('h4', { key: 'workflow-title', className: 'font-medium mt-4 mb-2' }, 'Workflow:'),
                    React.createElement('div', { key: 'workflow-image', className: 'my-6 text-center' }, [
                        React.createElement(ClickableImage, { 
                            key: 'workflow-img', 
                            src: '/tutorials/prompt-engineering-guide/workflow.jpg',
                            alt: 'Prompt Engineering Workflow Diagram',
                            className: 'mx-auto max-w-sm rounded-lg shadow-md'
                        })
                    ]),
                    React.createElement('ol', { key: 'workflow-steps', className: 'space-y-2 list-decimal list-inside' }, [
                        React.createElement('li', { key: 'step-1' }, React.createElement('strong', {}, 'System preset rule'), ': "Must call Air Quality API; report must include index value + grade + health advice, and provide a download link."'),
                        React.createElement('li', { key: 'step-2' }, React.createElement('strong', {}, 'User initiates'), ': the query and later receives the result.'),
                        React.createElement('li', { key: 'step-3' }, React.createElement('strong', {}, 'Assistant acts as decision-maker'), ': decides to call both the Air Quality API and a PDF report generator.'),
                        React.createElement('li', { key: 'step-4' }, React.createElement('strong', {}, 'Tool executes'), ': returns live data and generates the report.')
                    ])
                ],
            },
            {
                title: 'Benefits of Prompt Engineering',
                navLabel: 'Key Benefits',
                content: [
                    React.createElement('ul', { key: 'benefits-list', className: 'space-y-3 mt-4' }, [
                        React.createElement('li', { key: 'benefit-1' }, [
                            React.createElement('strong', {}, 'Improved model performance'), 
                            ': Clear prompts yield more accurate, relevant, and informative responses.'
                        ]),
                        React.createElement('li', { key: 'benefit-2' }, [
                            React.createElement('strong', {}, 'Bias & harm reduction'), 
                            ': Well-crafted prompts help reduce biased or unsafe outputs, when combined with model-level safeguards.'
                        ]),
                        React.createElement('li', { key: 'benefit-3' }, [
                            React.createElement('strong', {}, 'Greater control & predictability'), 
                            ': Prompts guide model behavior toward consistent, expected results.'
                        ]),
                        React.createElement('li', { key: 'benefit-4' }, [
                            React.createElement('strong', {}, 'Enhanced user experience'), 
                            ': Clear prompts enable smoother, more intuitive interactions.'
                        ])
                    ])
                ],
            },
            {
                title: 'Strategies for Writing Better Prompts',
                navLabel: 'Prompting Strategies',
                content: [
                    React.createElement('h4', { key: 'strategy-1-title', className: 'font-medium mt-6 mb-3' }, '1. Define clear goals'),
                    React.createElement('div', { key: 'strategy-1-table', className: 'overflow-x-auto mb-6' }, 
                        React.createElement('table', { className: 'w-full' }, [
                            React.createElement('thead', { key: 'thead-1' }, 
                                React.createElement('tr', { className: 'bg-gray-50' }, [
                                    React.createElement('th', { key: 'th-1-1', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Strategy'),
                                    React.createElement('th', { key: 'th-1-2', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Example')
                                ])
                            ),
                            React.createElement('tbody', { key: 'tbody-1' }, [
                                React.createElement('tr', { key: 'tr-1-1' }, [
                                    React.createElement('td', { key: 'td-1-1', className: 'border border-gray-300 px-4 py-2' }, 'Use action verbs'),
                                    React.createElement('td', { key: 'td-1-2', className: 'border border-gray-300 px-4 py-2' }, 'Write a bullet-point summary of the attached research paper\'s key findings.')
                                ]),
                                React.createElement('tr', { key: 'tr-1-2' }, [
                                    React.createElement('td', { key: 'td-1-3', className: 'border border-gray-300 px-4 py-2' }, 'Set output length/format'),
                                    React.createElement('td', { key: 'td-1-4', className: 'border border-gray-300 px-4 py-2' }, 'Write a 500-word article about climate change impacts on coastal communities.')
                                ]),
                                React.createElement('tr', { key: 'tr-1-3' }, [
                                    React.createElement('td', { key: 'td-1-5', className: 'border border-gray-300 px-4 py-2' }, 'Specify target audience'),
                                    React.createElement('td', { key: 'td-1-6', className: 'border border-gray-300 px-4 py-2' }, 'Draft product descriptions for an organic skincare line, targeting eco-conscious young adults.')
                                ])
                            ])
                        ])
                    ),
                    React.createElement('h4', { key: 'strategy-2-title', className: 'font-medium mt-6 mb-3' }, '2. Provide context & background'),
                    React.createElement('div', { key: 'strategy-2-table', className: 'overflow-x-auto mb-6' }, 
                        React.createElement('table', { className: 'w-full' }, [
                            React.createElement('thead', { key: 'thead-2' }, 
                                React.createElement('tr', { className: 'bg-gray-50' }, [
                                    React.createElement('th', { key: 'th-2-1', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Strategy'),
                                    React.createElement('th', { key: 'th-2-2', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Example')
                                ])
                            ),
                            React.createElement('tbody', { key: 'tbody-2' }, [
                                React.createElement('tr', { key: 'tr-2-1' }, [
                                    React.createElement('td', { key: 'td-2-1', className: 'border border-gray-300 px-4 py-2' }, 'Include facts/data'),
                                    React.createElement('td', { key: 'td-2-2', className: 'border border-gray-300 px-4 py-2' }, 'Considering global temperatures have risen 1°C since pre-industrial times, discuss the impacts of sea-level rise.')
                                ]),
                                React.createElement('tr', { key: 'tr-2-2' }, [
                                    React.createElement('td', { key: 'td-2-3', className: 'border border-gray-300 px-4 py-2' }, 'Reference documents'),
                                    React.createElement('td', { key: 'td-2-4', className: 'border border-gray-300 px-4 py-2' }, 'Analyze the company\'s profitability over the past 5 years based on the attached financial report.')
                                ]),
                                React.createElement('tr', { key: 'tr-2-3' }, [
                                    React.createElement('td', { key: 'td-2-5', className: 'border border-gray-300 px-4 py-2' }, 'Define key terms'),
                                    React.createElement('td', { key: 'td-2-6', className: 'border border-gray-300 px-4 py-2' }, 'Explain quantum computing in simple terms for non-technical readers.')
                                ])
                            ])
                        ])
                    ),
                    React.createElement('h4', { key: 'strategy-3-title', className: 'font-medium mt-6 mb-3' }, '3. Use few-shot prompting'),
                    React.createElement('div', { key: 'strategy-3-table', className: 'overflow-x-auto mb-6' }, 
                        React.createElement('table', { className: 'w-full' }, [
                            React.createElement('thead', { key: 'thead-3' }, 
                                React.createElement('tr', { className: 'bg-gray-50' }, [
                                    React.createElement('th', { key: 'th-3-1', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Strategy'),
                                    React.createElement('th', { key: 'th-3-2', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Example')
                                ])
                            ),
                            React.createElement('tbody', { key: 'tbody-3' }, [
                                React.createElement('tr', { key: 'tr-3-1' }, [
                                    React.createElement('td', { key: 'td-3-1', className: 'border border-gray-300 px-4 py-2' }, 'Give input-output examples'),
                                    React.createElement('td', { key: 'td-3-2', className: 'border border-gray-300 px-4 py-2' }, 'Input: Cat → Output: A small furry mammal with whiskers. Input: Dog → Output: A loyal domesticated animal. Question: Elephant?')
                                ]),
                                React.createElement('tr', { key: 'tr-3-2' }, [
                                    React.createElement('td', { key: 'td-3-3', className: 'border border-gray-300 px-4 py-2' }, 'Demonstrate style/tone'),
                                    React.createElement('td', { key: 'td-3-4', className: 'border border-gray-300 px-4 py-2' }, 'Example (Humorous): This politician\'s speech is so dull it could cure insomnia. Example (Formal): "This statesman delivered a rich and engaging address." Prompt: Write a description of a comedian\'s stand-up performance.')
                                ]),
                                React.createElement('tr', { key: 'tr-3-3' }, [
                                    React.createElement('td', { key: 'td-3-5', className: 'border border-gray-300 px-4 py-2' }, 'Show level of detail'),
                                    React.createElement('td', { key: 'td-3-6', className: 'border border-gray-300 px-4 py-2' }, 'Example (Brief): This movie is about a boy befriending an alien. Example (Detailed): A sci-fi film about Elliott, a lonely boy who discovers an alien stranded on Earth and builds a special bond. Prompt: Summarize the novel you just read.')
                                ])
                            ])
                        ])
                    ),
                    React.createElement('h4', { key: 'strategy-4-title', className: 'font-medium mt-6 mb-3' }, '4. Use chain-of-thought prompting'),
                    React.createElement('div', { key: 'strategy-4-table', className: 'overflow-x-auto mb-6' }, 
                        React.createElement('table', { className: 'w-full' }, [
                            React.createElement('thead', { key: 'thead-4' }, 
                                React.createElement('tr', { className: 'bg-gray-50' }, [
                                    React.createElement('th', { key: 'th-4-1', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Strategy'),
                                    React.createElement('th', { key: 'th-4-2', className: 'border border-gray-300 px-4 py-2 text-left font-medium' }, 'Example')
                                ])
                            ),
                            React.createElement('tbody', { key: 'tbody-4' }, [
                                React.createElement('tr', { key: 'tr-4-1' }, [
                                    React.createElement('td', { key: 'td-4-1', className: 'border border-gray-300 px-4 py-2' }, 'Encourage step-by-step reasoning'),
                                    React.createElement('td', { key: 'td-4-2', className: 'border border-gray-300 px-4 py-2' }, 
                                        React.createElement('div', {}, [
                                            'Solve step by step: Xiao Qiang has 5 apples and eats 2.',
                                            React.createElement('br', { key: 'br1' }),
                                            'Step 1: He starts with 5.',
                                            React.createElement('br', { key: 'br2' }),
                                            'Step 2: Eats 2, so subtract.',
                                            React.createElement('br', { key: 'br3' }),
                                            'Step 3: 5 – 2 = 3. Answer: 3 apples left.'
                                        ])
                                    )
                                ]),
                                React.createElement('tr', { key: 'tr-4-2' }, [
                                    React.createElement('td', { key: 'td-4-3', className: 'border border-gray-300 px-4 py-2' }, 'Ask model to explain reasoning'),
                                    React.createElement('td', { key: 'td-4-4', className: 'border border-gray-300 px-4 py-2' }, 'Explain your reasoning for classifying this movie review: The acting was great, but the plot was predictable.')
                                ]),
                                React.createElement('tr', { key: 'tr-4-3' }, [
                                    React.createElement('td', { key: 'td-4-5', className: 'border border-gray-300 px-4 py-2' }, 'Guide logical flow'),
                                    React.createElement('td', { key: 'td-4-6', className: 'border border-gray-300 px-4 py-2' },
                                        React.createElement('div', {}, [
                                            'To classify an email as spam, consider :',
                                            React.createElement('br', { key: 'br1' }),
                                            '(1) Is the sender known?',
                                            React.createElement('br', { key: 'br2' }),
                                            '(2) Does subject line contain suspicious keywords?',
                                            React.createElement('br', { key: 'br3' }),
                                            '(3) Is content too good to be true?'
                                        ])
                                    )
                                ])
                            ])
                        ])
                    )
                ],
            },
        ],
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
                    src="/tutorials/prompt-engineering-guide/banner.png"
                    alt="Prompt Engineering Guide Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-6xl sm:leading-[1.2] font-black text-[#80b224]">
                                Prompt Engineering Guide
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

export default TutorialLayout7