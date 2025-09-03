"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import { useRouter } from 'next/router';
import BackgroundTransition from '@/components/BackgroundTransition';
import { useState } from 'react';

export default function Careers() {
    const router = useRouter();
    const [isProductManagerExpanded, setIsProductManagerExpanded] = useState(false);
    const [isHardwareAccountManager, setIsHardwareAccountManager] = useState(false);
    const [isLeadAccountManager, setIsLeadAccountManager] = useState(false);
    const [isAccountManager, setIsAccountManager] = useState(false);
    const [isMonitoringDevelopmentEngineer, setIsMonitoringDevelopmentEngineer] = useState(false);



    return (
        <main className="min-h-screen relative text-gray-600">
            <Head>
                <title>Canopy Wave - Explore Our Open Positions</title>
                <link rel="preload" href="/about/banner.svg" as="image" type="image/svg+xml" />
            </Head>
            <Header />
            {/* Hero Section */}
            <div className="w-full h-[520px] relative mt-[84px]">
                <Image
                    src="/about/banner.svg"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px]">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-center">
                                Careers
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8 text-center">
                                Our growing, dynamic team is always looking for fresh talent.Explore our in-office, hybrid, and remote <br /> opportunities across tech roles - and apply to the role that aligns with your skills and goals
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <div className="bg-[#F5F7F4] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-10">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6">
                            Even if you don’t meet every <br /> requirement, we’d love to hear from you
                        </h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-16 max-w-4xl">
                            We are building a global network of AI data centers to power next generation cloud services. With hundreds of deployments planned worldwide—strategically located near end users and enterprises—we are positioned to deliver low-latency, high-performance AI infrastructure at scale. Backed by visionary leadership, deep industry expertise, and strong funding, our team is guided by pioneers shaping the future of AI computing
                        </p>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/healthcare.svg"
                                    alt="Healthcare"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                    style={{ width: '36px', height: '36px' }}

                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Healthcare</h4>
                            <p className="text-gray-600 group-hover:text-white text-l">
                                Our employees have access to high-quality medical, dental, and vision coverage
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/insurance.svg"
                                    alt="Insurance"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                    style={{ width: '36px', height: '36px' }}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Insurance</h4>
                            <p className="text-gray-600 group-hover:text-white text-l">
                                We offer top-tier life insurance as well as short-term and long-term disability insurance to our employees
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/lunch.svg"
                                    alt="Catered Lunch"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                    style={{ width: '36px', height: '36px' }}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Rapid Growth Platform</h4>
                            <p className="text-gray-600 group-hover:text-white text-l">
                                Gain access to our core business and strategies through a comprehensive training system designed for rapid career development
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/pto.svg"
                                    alt="Flexible PTO"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                    style={{ width: '36px', height: '36px' }}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Environment</h4>
                            <p className="text-gray-600 group-hover:text-white text-l">
                                Join a high-growth, innovative, and international team that offers boundless opportunities for professional development
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9F9F9] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-10">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6">Open positions</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-12 max-w-4xl">
                            Experience comes in many forms, many skills are transferable, and passion goes a long way. If your experience is this close to what we&apos;re looking for, consider applying. We know that diversity of thought makes for the best problem-solving and creative thinking, which is why we&apos;re dedicated to adding new perspectives to the team and encourage everyone to apply
                        </p>
                    </SlideUp>
                    <div className="space-y-0">
                        <div className="bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex items-center justify-between p-8 cursor-pointer" onClick={() => setIsProductManagerExpanded(!isProductManagerExpanded)}>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#80B224]">Product Manager</h3>
                                </div>
                                <div className="ml-4">
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-200 ${isProductManagerExpanded ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {isProductManagerExpanded && (
                                <div className="px-8 pb-8 border-t border-gray-200 bg-[#F5F7F4]">
                                    <div className="mt-4 space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Responsibilities</h4>
                                            <div className="space-y-3 text-sm text-gray-600">
                                                <div>
                                                    <p className="font-medium">1. Product Operations</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>i. Website Optimization: Drive the optimization of the company's official website features and functionalities to enhance user experience.</li>
                                                        <li>ii. Product Content Management: Manage product updates on the official website, ensuring the timeliness and accuracy of all information.</li>
                                                        <li>iii. Solution Iteration: Lead the continuous update, optimization, and iteration of customer-facing solutions.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium">2. Content Output</p>
                                                    <p className="ml-4 mt-1">Monitor industry and market dynamics, develop technical documentation and content for product landing pages, and effectively articulate product value propositions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Job Requirements</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li>1. Bachelor's degree or above.</li>
                                                <li>2. English as working language: Excellent English reading and writing skills (verbal communication skills are a plus).</li>
                                                <li>3. Exceptional fresh graduates are welcome to apply. Familiarity with AI, large models, GPU cloud services, servers and other related basic knowledge is preferred; 2 years or more of experience in software and hardware sales, technical support or product operation is preferred.</li>
                                                <li>4. Excellent communication and coordination skills, resilience under pressure, and strong execution skills, and the ability to learn independently and produce content.</li>
                                            </ul>
                                        </div>
                                        <div className="pt-4 border-t border-gray-100">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push('/about/job-application?position=product-manager');
                                                }}
                                                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>




                        <div className="bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex items-center justify-between p-8 cursor-pointer" onClick={() => setIsHardwareAccountManager(!isHardwareAccountManager)}>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#80B224]">Hardware Account Manager</h3>
                                </div>
                                <div className="ml-4">
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-200 ${isHardwareAccountManager ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {isHardwareAccountManager && (
                                <div className="px-8 pb-8 border-t border-gray-200 bg-[#F5F7F4]">
                                    <div className="mt-4 space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Responsibilities</h4>
                                            <div className="space-y-3 text-sm text-gray-600">
                                                <div>
                                                    <p className="font-medium">1. Business Development and Performance Achievement</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>Responsible for the sales of the company's GPU hardware products (servers, clusters, etc.), independently managing the full sales cycle, from pre-sales and sales to post-sales support.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium">2. Customer Relationship Management</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>i Establish and maintain good customer relationships, deeply understand customer needs, and provide professional hardware product consultation and solutions.</li>
                                                        <li>ii Conduct regular follow-ups with clients to ensure satisfaction, identifying and
                                                            capitalizing on opportunities for repeat business and upselling.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium">3. Cross-team Collaboration</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>i Work closely with the technical team to accurately convey customer needs, jointly refine and optimize hardware product solutions tailored to customer scenarios, and ensure the feasibility of the solutions.</li>
                                                        <li>ii Collect and feedback market trends and customer needs to provide front-line information support for company and team decision-making.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Job Requirements</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li>1. Education and Language: Bachelor's degree or above, with excellent English reading and writing skills , capable of understanding product English materials and conducting simple email communication.</li>
                                                <li>2. Industry Experience: Recent graduates are also encouraged to apply. Direct sales experience in computer software or hardware (such as servers, storage, network devices or GPU cards, etc.) to enterprise customers is preferred.</li>
                                                <li>3. Possess outstanding customer communication skills, negotiation abilities and relationship-building capabilities.</li>
                                                <li>4. Proactive self-starter with a strong learning ability, and be able to quickly grasp the technical highlights and application scenarios of complex hardware products.</li>
                                                <li>5. Have good stress resistance and teamwork spirit.</li>
                                            </ul>
                                        </div>
                                        <div className="pt-4 border-t border-gray-100">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push('/about/job-application?position=hardware-account-manager')
                                                }}
                                                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex items-center justify-between p-8 cursor-pointer" onClick={() => setIsLeadAccountManager(!isLeadAccountManager)}>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#80B224]">Lead Account Manager</h3>
                                </div>
                                <div className="ml-4">
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-200 ${isLeadAccountManager ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {isLeadAccountManager && (
                                <div className="px-8 pb-8 border-t border-gray-200 bg-[#F5F7F4]">
                                    <div className="mt-4 space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Responsibilities</h4>
                                            <div className="space-y-3 text-sm text-gray-600">
                                                <div>
                                                    <p className="font-medium">1. Team Management and Empowerment - Core</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>Responsible for the daily management of the customer manager team, establishing a high-performance and highly collaborative team culture, enhancing team productivity, deepening customer relationships, and ensuring long-term client retention and loyalty.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium">2. Process Optimization and SOP Construction - Core</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>Sort out and optimize the entire customer management process, build reusable sales and service SOPs, promote standardized and refined operations, and improve team collaboration efficiency and business replicability.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium">3. Business Strategy and Goal Achievement</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>Formulate and implement global market customer operation strategies, lead the entire process from business opportunity exploration, solution customization, negotiation to closed-loop contract signing, and be responsible for the team's annual revenue target and customer satisfaction.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium">4. Industry Insight and Customer Success</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>Evaluate industry trends, collaborate with product and technology teams to drive solution iterations, and increase customer repurchase and recommendation rates.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Job Requirements</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li>1. Educational Background: Bachelor's degree or above, majoring in Computer Science, Information Technology or related fields is preferred.</li>
                                                <li>2. Language Skills: Excellent English communication skills, capable of using it as the working language, and able to effectively manage long-term relationships with overseas clients.</li>
                                                <li>3. Industry Experience: More than 5 years of experience in managing or expanding international B2B clients, a proven track record of client success is highly preferred.</li>
                                                <li>4. Management Skills: Experience in managing a team of more than 10 account managers, skilled in setting and cascading goals, managing performance, developing talent, and empowering the organization.</li>
                                            </ul>
                                        </div>
                                        <div className="pt-4 border-t border-gray-100">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push('/about/job-application?position=lead-account-manager')
                                                }}
                                                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex items-center justify-between p-8 cursor-pointer" onClick={() => setIsAccountManager(!isAccountManager)}>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#80B224]">Account Manager</h3>
                                </div>
                                <div className="ml-4">
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-200 ${isAccountManager ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {isAccountManager && (
                                <div className="px-8 pb-8 border-t border-gray-200 bg-[#F5F7F4]">
                                    <div className="mt-4 space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Responsibilities</h4>
                                            <div className="space-y-3 text-sm text-gray-600">
                                                <div>
                                                    <p className="font-medium">1. Business Development and Performance Achievement:</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>Be responsible for the sales of GPU cluster solutions (including AI training/inference/rendering/private cloud). Participate in the full sales process from initial outreach and lead generation to contract signing, and achieve personal annual revenue targets.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium">2. Customer Management and Relationship Maintenance:</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>Gain in-depth understanding of customer needs, establish and maintain long-term and stable customer relationships, and improve customer satisfaction.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium">3. Cross-team Collaboration and Process Optimization:</p>
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        <li>Collaborate with the technical team to refine product solutions and ensure the solution s meet customer needs. Participate in the establishment and optimization of the sales SOP (Standard Operating Procedure) system.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Job Requirements</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li>1. Educational Background: Bachelor's degree or above, with basic English reading and writing skills, capable of conducting daily email communication and document processing.</li>
                                                <li>2. Industry Experience: 1-3 years of B2B sales experience in cloud computing-related fields; candidates with sales experience in GPU/AI infrastructure are preferred.</li>
                                                <li>3. Result-oriented: Have a strong sense of responsibility for performance goals and be able to proactively promote business progress.</li>
                                                <li>4. Systematic Thinking: Possess preliminary process sorting capabilities and be willing to learn and refine standardized sales methods.</li>
                                            </ul>
                                        </div>
                                        <div className="pt-4 border-t border-gray-100">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push('/about/job-application?position=account-manager')
                                                }}
                                                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex items-center justify-between p-8 cursor-pointer" onClick={() => setIsMonitoringDevelopmentEngineer(!isMonitoringDevelopmentEngineer)}>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#80B224]">Monitoring Development Engineer</h3>
                                </div>
                                <div className="ml-4">
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-200 ${isMonitoringDevelopmentEngineer ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {isMonitoringDevelopmentEngineer && (
                                <div className="px-8 pb-8 border-t border-gray-200 bg-[#F5F7F4]">
                                    <div className="mt-4 space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Responsibilities</h4>
                                            <div className="space-y-3 text-sm text-gray-600">
                                                <div>
                                                    <p className="font-medium">1. Responsible for the development, functional iteration, and daily maintenance of the IaaS Web management platform based on Flask.</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">2. Develop and maintain the monitoring system based on Prometheus, write PromQL for data query and analysis, and integrate monitoring capabilities such as Grafana into the in-house platform.</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">3. Design and develop collection mechanisms for system metrics (including Exporter, PushGateway, and custom collection scripts) to establish a comprehensive data collection pipeline.</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">4. Develop and optimize the alarm system, and configure alarm rules for Prometheus Alertmanager.</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">5. Collaborate closely with the operation and maintenance (O&M) team to understand their daily processing workflows and common requirements; design and implement Grafana dashboards based on the needs of the business or O&M team.</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium">6. Build highly interactive and reusable front-end components and single-page applications (SPAs) based on [Vue.js/Next.js], and optimize the user interface for functions such as resource management, monitoring chart integration, and work order processes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Job Requirements</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li>1. Bachelor's degree or above in Computer Science, Software Engineering, Network Engineering, or related majors.</li>
                                                <li>2. Familiar with basic Linux system operations and service running principles.</li>
                                                <li>3. Familiar with Python and any one of the Web frameworks such as Flask, Django, or FastAPI.</li>
                                                <li>4. Familiar with the configuration and use of Prometheus and Grafana, and capable of independently developing Exporters or event processing programs.</li>
                                                <li>5. Have front-end development experience with Vue.js or Next.js.</li>
                                                <li>6. Good communication skills, able to work collaboratively with the O&M and platform teams, understand requirements, and achieve rapid iteration.</li>
                                            </ul>
                                        </div>
                                        <div className="pt-4 border-t border-gray-100">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push('/about/job-application?position=monitoring-development-engineer')
                                                }}
                                                className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-sm"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-28 overflow-hidden">
                <BackgroundTransition
                    defaultImage="/contact-section1.webp"  // 暗色版本
                    activeImage="/contact-section2.webp"   // 亮色版本
                    className="w-full h-full"
                    fadeDuration={4000}  // 4秒的点亮过程
                    threshold={0.7}  // 当70%进入视口时触发
                />
                <div className="relative z-30 container mx-auto px-4">
                    <div className="relative max-w-7xl mx-auto">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black mb-10 sm:mb-8">Work with us</h2>
                        </SlideUp>
                        <SlideUp>
                            <div className="text-gray-600 mb-8 mx-auto text-l flex flex-col">
                                <span className="block sm:hidden">Ready to shape the future? Join Canopy Wave and help drive the future of technology with a team redefining what's possible</span>
                                <span className="hidden sm:block">Ready to shape the future? Join Canopy Wave and help drive the future of technology <br /> with a team redefining what's possible</span>
                            </div>
                        </SlideUp>
                        <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="bg-[#8CC63F] text-white px-4 py-2 rounded-lg hover:bg-[#80B224] transition-all duration-300" onClick={() => router.push('/about/job-application?position=infrastructure')}>
                                Open positions
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}