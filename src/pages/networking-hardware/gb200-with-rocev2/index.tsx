"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { Button } from "@/components/ui/button";
import React from 'react';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import BackgroundTransition from '@/components/BackgroundTransition';
import axios from "axios";

export default function GB200WithRoCEv2() {
    useScrollToHash();
    // 添加tab状态管理
    const [activeTab, setActiveTab] = React.useState('rocev2');
    const [activeTab2, setActiveTab2] = React.useState('platform');
    
    // 添加表单状态管理
    const [formData, setFormData] = React.useState({
        message: '',
        name: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = React.useState('');
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const emailBody = `
                name: ${formData.name}
                email: ${formData.email}
                message: ${formData.message}
            `;

            const response = await axios.post(
                'https://sequoia-paas.canopywave.io/api/v1/send_email',
                {
                    subject: 'GB200 with RoCEv2 Inquiry',
                    // recipients: ['Lumi.Xiao@canopywave.com', 'yachal@canopywave.com', 'sales@canopywave.com'],
                    recipients: ['wangyingni@canopywave.com'],
                    body: emailBody
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer alsfkjalsdkfjldksjfalksdjfljk13123'
                    }
                }
            );
            
            if (response.status === 200) {
                setSubmitStatus('success');
                setStatusMessage('Message sent successfully!');
                setFormData({ message: '', name: '', email: '' });
                // 3秒后清除状态消息
                setTimeout(() => {
                    setSubmitStatus('idle');
                    setStatusMessage('');
                }, 3000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');
            setStatusMessage('Failed to send message. Please try again.');
            // 5秒后清除错误消息
            setTimeout(() => {
                setSubmitStatus('idle');
                setStatusMessage('');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen text-gray-600 relative">
            <Header />
            <Head>
                <title>Canopy Wave - GB200 with RoCEv2</title>
                <link rel="preload" href="/solutions/networking-hardware/gb200-with-rocev2/banner.png" as="image" type="image/svg+xml" />
            </Head>
            {/* Hero Section */}
            <div className="w-full h-[520px] relative mt-[84px] bg-[#EDF2E4]">
                <Image
                    src="/solutions/networking-hardware/gb200-with-rocev2/banner.webp"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-shadow-lg">
                                GB200: Unleash the true <br /> potential of your infrastructure
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-l mt-8">
                                Low Latency | High Throughput | Optimized for AI and HPC
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Challenges Section */}
            <div className="bg-[#F9F9F9] py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">
                            Challenges
                        </h2>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Prolonged R&D Cycles */}
                        <SlideUp>
                            <div className="text-left p-6 bg-white min-h-[260px]">
                                <div className="w-12 h-12 mb-4">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/prolonged-rd-cycles.svg"
                                        alt="Prolonged R&D Cycles"
                                        width={42}
                                        height={42}
                                        style={{ width: '42px', height: '42px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 mb-4">
                                    Prolonged R&D Cycles
                                </h3>
                                <p className="text-l text-gray-600 leading-relaxed">
                                    Training trillion-parameter models takes months. This severely slows algorithm iteration and delays time-to-market.
                                </p>
                            </div>
                        </SlideUp>

                        {/* Performance Bottlenecks */}
                        <SlideUp>
                            <div className="text-left p-6 bg-white min-h-[260px]">
                                <div className="w-12 h-12 mb-4">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/performance-bottlenecks.svg"
                                        alt="Performance Bottlenecks"
                                        width={42}
                                        height={42}
                                        style={{ width: '42px', height: '42px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 mb-4">
                                    Performance Bottlenecks
                                </h3>
                                <p className="text-l text-gray-600 leading-relaxed">
                                    Network latency between GPUs is the key bottleneck. This leads to idle GPUs and low Model FLOPs Utilization.
                                </p>
                            </div>
                        </SlideUp>

                        {/* Operational Complexity */}
                        <SlideUp>
                            <div className="text-left p-6 bg-white min-h-[260px]">
                                <div className="w-12 h-12 mb-4">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/operational-complexity.svg"
                                        alt="Operational Complexity"
                                        width={42}
                                        height={42}
                                        style={{ width: '42px', height: '42px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-700 mb-4">
                                    Operational Complexity
                                </h3>
                                <p className="text-l text-gray-600 leading-relaxed">
                                    Deploying and managing large AI clusters is time-consuming and labor-intensive. This slows business responsiveness and makes troubleshooting difficult.
                                </p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* GB200 Cluster with RoCEv2 Section */}
            <div className='bg-[#F9F9F9] py-12'>
                <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">Take your infrastructure further <br /> than ever before</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-10 text-l">
                            A turnkey GB200 supercluster engineered for 24/7 production, featuring self-managing and self-monitoring capabilities
                        </p>
                    </SlideUp>

                    <SlideUp>
                        <div className="mb-16 group">
                            <Image
                                src="/solutions/networking-hardware/gb200-with-rocev2/gb200-table.webp"
                                alt="NVIDIA GB200 NVL72 Cluster"
                                width={1300}
                                height={400}
                                className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </SlideUp>
                </div>
            </div>

            {/* On-Demand High-Performance GPU Section */}
            <div className='bg-[#F9F9F9]'>
                <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-12">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">Aaccelerate trillion-parameter model training</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-6 text-l">
                            Access cutting-edge GB200 GPUs on-demand to accelerate training computations and<br />help clients shorten their R&D cycles
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex justify-center pb-8">
                            <button className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md text-l" onClick={() => window.location.href = '/gb200-nvl72'}>
                                Learn more
                            </button>
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <div className="mb-16 group">
                            <Image
                                src="/solutions/networking-hardware/gb200-with-rocev2/gb200.webp"
                                alt="NVIDIA GB200 NVL72 Cluster"
                                width={1300}
                                height={400}
                                className="rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </SlideUp>
                </div>
            </div>


            {/* RoCEv2 + NVLink Performance Section */}
            <div className="bg-[#F9F9F9] py-12 sm:py-10 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-black mb-4">
                                Connecting every GPU with ultra-fast speed
                            </h2>
                        </div>
                    </SlideUp>

                    <SlideUp>
                        <div className="mb-8">
                            {/* Tab Navigation */}
                            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8">
                                <button
                                    onClick={() => setActiveTab('rocev2')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'rocev2'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Ultra-Low Latency RoCEv2 Fabric
                                </button>
                                <button
                                    onClick={() => setActiveTab('nvlink')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === 'nvlink'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Unified High-Bandwidth GPU Domain
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div className="space-y-4">
                                    {activeTab === 'rocev2' && (
                                        <div className="space-y-2 pl-8">
                                            <h3 className="font-semibold text-gray-700">
                                                Ultra-Low Latency RoCEv2 Fabric
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Utilizes RDMA for direct, kernel-bypass data transfer, minimizing latency and CPU load.
                                            </p>
                                            <div>
                                                <p className="font-semibold text-gray-700">Result:</p>
                                                <p className="text-gray-600">
                                                    Ensures efficient, non-blocking communication between any two GPUs across the cluster.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'nvlink' && (
                                        <div className="space-y-2 pl-8">
                                            <h3 className="font-semibold text-gray-700">
                                                Unified High-Bandwidth GPU Domain
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Each NVL72 rack operates as a single, massive GPU with 1.8 TB/s of all-to-all NVLink bandwidth.
                                            </p>
                                            <div>
                                                <p className="font-semibold text-gray-700">Result:</p>
                                                <p className="text-gray-600">
                                                    Eliminates all communication bottlenecks within the rack.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center">
                                    <div className="relative w-full max-w-6xl">
                                        <Image
                                            src="/solutions/networking-hardware/gb200-with-rocev2/performance-architecture.png"
                                            alt="RoCEv2 + NVLink Performance Architecture"
                                            width={1600}
                                            height={600}
                                            className="object-cover w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>

            {/* Intelligent platform + 24/7 expert team simplifies operation Section */}
            <div className="bg-[#F9F9F9] py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-black mb-4">
                                Intelligent platform + 24/7 expert team <br />simplifies operation
                            </h2>
                        </div>
                    </SlideUp>

                    <SlideUp>
                        <div className="mb-8">
                            {/* Tab Navigation */}
                            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8">
                                <button
                                    onClick={() => setActiveTab2('platform')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab2 === 'platform'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Intelligent, End-to-End Monitoring
                                </button>
                                <button
                                    onClick={() => setActiveTab2('team')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab2 === 'team'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Unified High-Bandwidth GPU Domain
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div className="space-y-4">
                                    {activeTab2 === 'platform' && (
                                        <div className="space-y-2 pl-8">
                                            <h3 className="font-semibold text-gray-700">
                                                How:
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                A unified platform integrates deep telemetry from all components (GPU, NVLink, Network).
                                            </p>
                                            <div>
                                                <p className="font-semibold text-gray-700">Benefit:</p>
                                                <p className="text-gray-600">
                                                    AI-driven analytics proactively detect anomalies and bottlenecks before they impact training jobs.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab2 === 'team' && (
                                        <div className="space-y-2 pl-8">
                                            <h3 className="font-semibold text-gray-700">
                                                How:
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Engineers with deep experience with NVIDIA GPUs and software provide constant, around-the-clock
                                                system monitoring.
                                            </p>
                                            <div>
                                                <p className="font-semibold text-gray-700">Benefit:</p>
                                                <p className="text-gray-600">
                                                    Immediate remote intervention ensures maximum uptime and uninterrupted training.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center">
                                    <div className="relative w-full max-w-6xl">
                                        <Image
                                            src="/solutions/networking-hardware/gb200-with-rocev2/iaas.png"
                                            alt="RoCEv2 + NVLink Performance Architecture"
                                            width={1600}
                                            height={600}
                                            className="object-cover w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>

            {/* Deployment Process Section */}
            <div className="bg-[#F9F9F9] py-12 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-black mb-6">
                                Deployment Process
                            </h2>
                        </div>
                    </SlideUp>

                    <div className="flex flex-col lg:flex-row items-start justify-center space-y-8 lg:space-y-0">
                        {/* Step 01 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center lg:h-[220px] w-full lg:max-w-[260px]'>
                                <div className="text-left">
                                    <div className="mb-2">
                                        <div className="text-3xl font-black text-gray-300 mb-2">01</div>
                                        <h3 className="text-lg font-semibold text-gray-700">Planning & Design</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Create documentation based on the client's data center topology, including detailed cabling plans and an IP addressing scheme.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>
                        
                        {/* Arrow 01 - Hidden on small screens */}
                        <div className='hidden lg:flex flex-col lg:flex-row items-start justify-center h-[220px] max-h-[16px] p-6'>
                            <div className="w-6 h-6 pt-16">
                                <img src="/solutions/networking-hardware/gb200-with-rocev2/arrow.svg" alt="arrow" className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Step 02 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center lg:h-[220px] w-full lg:max-w-[260px]'>
                                <div className="text-left">
                                    <div className="mb-2">
                                        <div className="text-3xl font-black text-gray-300 mb-2">02</div>
                                        <h3 className="text-lg font-semibold text-gray-700">Deployment</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Rack switches, connect all physical cabling, and install GB200 NICs.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>
                        
                        {/* Arrow 02 - Hidden on small screens */}
                        <div className='hidden lg:flex flex-col lg:flex-row items-start justify-center h-[220px] max-h-[16px] p-6'>
                            <div className="w-6 h-6 pt-16">
                                <img src="/solutions/networking-hardware/gb200-with-rocev2/arrow.svg" alt="arrow" className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Step 03 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center lg:h-[220px] w-full lg:max-w-[260px]'>
                                <div className="text-left">
                                    <div className="mb-2">
                                        <div className="text-3xl font-black text-gray-300 mb-2">03</div>
                                        <h3 className="text-lg font-semibold text-gray-700">Configuration & Validation</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Set up software, configure network and conduct performance stress tests, followed by a final test report.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>
                        
                        {/* Arrow 03 - Hidden on small screens */}
                        <div className='hidden lg:flex flex-col lg:flex-row items-start justify-center h-[220px] max-h-[16px] p-6'>
                            <div className="w-6 h-6 pt-16">
                                <img src="/solutions/networking-hardware/gb200-with-rocev2/arrow.svg" alt="arrow" className="w-6 h-6" />
                            </div>
                        </div>
                        
                        {/* Step 04 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center lg:h-[220px] w-full lg:max-w-[260px]'>
                                <div className="text-left">
                                    <div className="mb-2">
                                        <div className="text-3xl font-black text-gray-300 mb-2">04</div>
                                        <h3 className="text-lg font-semibold text-gray-700">Acceptance & Handover</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Provide complete acceptance criteria and deliver upon meeting the standards.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Resource Section */}
            <div className="bg-[#F9F9F9] py-12 sm:pt-12 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-700 mb-4">
                                Resource
                            </h2>
                        </div>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Tutorials Card */}
                        <SlideUp>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-54 bg-gradient-to-r from-blue-900 to-blue-700 relative">
                                    <img
                                        src="/solutions/networking-hardware/gb200-with-rocev2/tutorials.png"
                                        alt="Tutorials"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Tutorials</h3>
                                    <p className="text-gray-600 mb-4">
                                        How to Leverage Canopy Wave’s Resources to Use AI
                                    </p>

                                </div>
                                <div className='p-4'>
                                    <Button
                                        variant="outline"
                                        className="px-4 py-1 text-sm rounded-full"
                                        onClick={() => window.location.href = '/resources/tutorials'}
                                    >
                                        Tutorials
                                    </Button>
                                </div>
                            </div>
                        </SlideUp>

                        {/* Case Study Card */}
                        <SlideUp>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-54 bg-gradient-to-r from-cyan-900 to-blue-600 relative">
                                    <img
                                        src="/solutions/networking-hardware/gb200-with-rocev2/case-study.png"
                                        alt="Case Study"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg  font-bold text-gray-800 mb-3">Case Study</h3>
                                    <p className="text-gray-600 mb-4">
                                        Discover how canopywave builds powerful GPU + Network solutions in practice
                                    </p>

                                </div>
                                <div className='p-4'>
                                    <Button
                                        variant="outline"
                                        className="px-4 py-1 text-sm rounded-full"
                                        onClick={() => window.location.href = '/resources/case-study'}
                                    >
                                        Case Study
                                    </Button>
                                </div>

                            </div>
                        </SlideUp>

                        {/* Documents Card */}
                        <SlideUp>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-54 bg-gradient-to-r from-gray-400 to-gray-600 relative">
                                    <img
                                        src="/solutions/networking-hardware/gb200-with-rocev2/documents.png"
                                        alt="Documents"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Documents</h3>
                                    <p className="text-gray-600 mb-2">
                                        Explore our Technical Docs, Help Center, Knowledge Base, Product Manuals, and more useful information
                                    </p>

                                </div>
                                <div className='pl-4 pb-4 pr-4'>
                                    <Button
                                        variant="outline"
                                        className="px-4 py-1 text-sm rounded-full"
                                        onClick={() => window.location.href = '/resources/docs/cw-cloud-account/quick-start'}
                                    >
                                        Documents
                                    </Button>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Ready to Get Started Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-28 overflow-hidden">
                <div className="relative z-30 container mx-auto px-4">
                    <div className="relative max-w-7xl mx-auto">
                        <SlideUp>
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-600 mb-4 text-center">Leave Us a Message</h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 mb-8 text-center text-lg">
                                Have questions about our GB200 with RoCEv2 solutions? We'd love to hear from you.
                            </p>
                        </SlideUp>
                        <SlideUp>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                                            placeholder="Please enter"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Email<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                                            placeholder="Please enter"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message<span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent resize-none"
                                        placeholder="Please enter"
                                    />
                                </div>
                                
                                <div className="text-left">
                                    <p className="text-sm text-gray-500 mb-4">
                                        We respect your privacy. Your information will not be published.
                                    </p>
                                    <Button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="bg-[#8CC63F] hover:bg-[#7ab32f] px-8 py-3 text-white font-medium rounded-lg transition-colors"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </div>
                                
                                {/* 状态消息显示 */}
                                {submitStatus !== 'idle' && (
                                    <div className={`mt-4 p-4 rounded-lg text-center transition-all duration-300 ${
                                        submitStatus === 'success' 
                                            ? 'bg-green-50 text-green-700 border border-green-200' 
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                    }`}>
                                        <div className="flex items-center justify-center gap-2">
                                            {submitStatus === 'success' ? (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                            <span className="font-medium">{statusMessage}</span>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </SlideUp>
                    </div>
                </div>
            </div>
            

            <Footer />
        </main>
    );
}