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
                subject: GB200 with RoCEv2 Inquiry
                name: ${formData.name}
                email: ${formData.email}
                message: ${formData.message}
                submitted from: ${window.location.href}
            `;

            const response = await axios.post(
                'https://sequoia-paas.canopywave.io/api/v1/send_email',
                {
                    subject: 'GB200 with RoCEv2 Inquiry',
                    recipients: ['Lumi.Xiao@canopywave.com', 'yachal@canopywave.com', 'sales@canopywave.com'],
                    // recipients: ['wangyingni@canopywave.com'],
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
        <main className="min-h-screen text-[#333333] relative">
            <Header />
            <Head>
                <title>Canopy Wave - GB200 with RoCEv2</title>
                <link rel="preload" href="/solutions/networking-hardware/gb200-with-rocev2/banner.png" as="image" type="image/svg+xml" />
            </Head>
            {/* Hero Section */}
            <div className="w-full h-[520px] relative mt-[84px] bg-[#EDF2E4]">
                <Image
                    src="/solutions/networking-hardware/gb200-with-rocev2/banner_GB200banner.png"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-5xl font-black text-[#80B224] text-shadow-lg mb-4">
                                GB200 cluster with RoCEv2
                            </h1>
                            <h1 className="text-5xl sm:text-5xl font-black text-[#80B224] text-shadow-lg mb-6">
                                High-Performance Network Solution
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-lg">
                                Low Latency | High Throughput | Optimized for AI and HPC
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Challenges Section */}
            <div className="py-12 sm:py-16" style={{
                backgroundImage: 'url("/solutions/networking-hardware/gb200-with-rocev2/challenges_bg_white.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">
                            Challenges
                        </h2>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Prolonged R&D Cycles */}
                        <SlideUp>
                            <div className="text-left p-6 min-h-[271px] relative" style={{ backgroundImage: 'url(/solutions/networking-hardware/gb200-with-rocev2/challenges_card_white.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="w-16 h-16 mb-6">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/prolonged-rd-cycles.svg"
                                        alt="Prolonged R&D Cycles"
                                        width={82}
                                        height={82}
                                        style={{ width: '82px', height: '82px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-[#333333] mb-2">
                                    Prolonged R&D Cycles
                                </h3>
                                <p className="text-l text-[#666666]">
                                    Training trillion-parameter models takes months.This severely slows algorithm iteration and delays time-to-market.
                                </p>
                            </div>
                        </SlideUp>

                        {/* Performance Bottlenecks */}
                        <SlideUp>
                            <div className="text-left p-6 min-h-[271px] relative" style={{ backgroundImage: 'url(/solutions/networking-hardware/gb200-with-rocev2/challenges_card_white.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="w-16 h-16 mb-6">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/performance-bottlenecks.svg"
                                        alt="Performance Bottlenecks"
                                        width={82}
                                        height={82}
                                        style={{ width: '82px', height: '82px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-[#333333] mb-2">
                                    Performance Bottlenecks
                                </h3>
                                <p className="text-l text-[#666666]">
                                    Network latency between GPUs is the key bottleneck.This leads to idle GPUs and low MFU (Model FLOPs Utilization).
                                </p>
                            </div>
                        </SlideUp>

                        {/* Operational Complexity */}
                        <SlideUp>
                            <div className="text-left p-6 min-h-[271px] relative" style={{ backgroundImage: 'url(/solutions/networking-hardware/gb200-with-rocev2/challenges_card_white.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="w-16 h-16 mb-6">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/operational-complexity.svg"
                                        alt="Operational Complexity"
                                        width={82}
                                        height={82}
                                        style={{ width: '82px', height: '82px' }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-[#333333] mb-2">
                                    Operational Complexity
                                </h3>
                                <p className="text-l text-[#666666]">
                                    Deploying and managing large AI clusters is time-consuming and labor-intensive.This slows business responsiveness and makes troubleshooting difficult.
                                </p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Solution */}
            <div className='bg-[#F9F9F9] py-12'>
                <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">Solution</h2>
                    </SlideUp>
                    <SlideUp>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-16">
                            {/* Left Column - Overview and Table */}
                            <div className="lg:col-span-5 sm:pt-24">
                                <div className="rounded-lg">
                                    <h3 className="text-[24px] font-bold mb-4">Overview of the Network Topology Diagram</h3>
                                    <p className="text-gray-700 mb-6">A turnkey GB200 supercluster engineered for 24/7 production, featuring self-managing and self-monitoring capabilities</p>
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/solution_img_left.png"
                                        alt="Network Topology Table"
                                        width={500}
                                        height={400}
                                        className="mt-6 rounded-lg object-contain"
                                    />
                                </div>
                            </div>
                            {/* Right Column - Network Diagram */}
                            <div className="lg:col-span-7">
                                <div className="rounded-lg md:min-h-[500px] flex flex-col">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/solution_img_right.png"
                                        alt="Network Topology Diagram"
                                        width={800}
                                        height={500}
                                        className="rounded-lg object-contain flex-grow"
                                    />
                                </div>
                            </div>
                        </div>
                    </SlideUp>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:mb-8">
                        <SlideUp>
                            <div className="bg-[#f0f8e8] rounded-lg p-6 text-center">
                                <h3 className="text-3xl font-bold mb-2">&lt;10μs</h3>
                                <p className="text-[#333333] font-bold">Latency</p>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="bg-[#f0f8e8] rounded-lg p-6 text-center">
                                <h3 className="text-3xl font-bold mb-2">99.999%</h3>
                                <p className="text-[#333333] font-bold">Reliability</p>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="bg-[#e3f1d4] rounded-lg p-6 text-center">
                                <h3 className="text-3xl font-bold mb-2">400Gbps</h3>
                                <p className="text-[#333333] font-bold">Throughput</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* On-Demand High-Performance GPU Section */}
            {/* <div className='bg-[#F9F9F9]'>
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
            </div> */}

            {/* RoCEv2 + NVLink Performance Section */}
            {/* <div className="bg-[#F9F9F9] py-12 sm:py-10 pb-12">
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

                            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            </div> */}

            {/* Intelligent platform + 24/7 expert team simplifies operation Section */}
            {/* <div className="bg-[#F9F9F9] py-12 sm:py-16">
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
                            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8">
                                <button
                                    onClick={() => setActiveTab2('platform')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab2 === 'platform'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    End-to-End Inteligent Monitoring
                                </button>
                                <button
                                    onClick={() => setActiveTab2('team')}
                                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab2 === 'team'
                                        ? 'border-[#8CC63F] text-[#8CC63F]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    24/7 Proactive Expert Support
                                </button>
                            </div>

                            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            </div> */}


            {/* Benefits Section */}
            <div className="py-16 bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-10 text-[#333333]">Benefits</h2>

                    {/* 上半部分 */}
                    <div className="flex flex-col lg:flex-row gap-12 mb-20">
                        {/* 左侧图片 */}
                        <div className="lg:w-1/2">
                            <SlideUp>
                                <div className="rounded-lg overflow-hidden border border-gray-100 shadow-lg">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/benefits_img_gb200 gpu.png"
                                        alt="GB200 GPU Clusters"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </SlideUp>
                        </div>

                        {/* 右侧内容 */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <SlideUp delay={0.2}>
                                <h3 className="text-2xl font-bold mb-6 text-[#333333]">GB200 GPU Clusters to Shorten R&D Cycles</h3>
                                <div className="mb-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-4 h-4 rounded-full bg-[#80B224] mr-3"></div>
                                        <h4 className="text-xl font-semibold">4× Faster Model Training</h4>
                                    </div>
                                    <div className="h-[2px] bg-[#E0E0E0] my-2"></div>
                                    <p className="text-gray-600 mt-4">Reduced training time for a 1.8T model from 90 days to just 22, which is 4 times more efficient than the H100 cluster</p>
                                </div>
                                <button className="bg-[#80B224] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all w-fit">Learn More</button>
                            </SlideUp>
                        </div>
                    </div>

                    {/* 下半部分 */}
                    <div className="flex flex-col-reverse lg:flex-row gap-12">
                        {/* 左侧内容 */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <SlideUp delay={0.2}>
                                <h3 className="text-2xl font-bold mb-4 text-[#333333]">RoCEv2 and NVLink Enables 95%+ GPU Utilization</h3>
                                <div className="mb-4">
                                    <div className="flex items-center mb-6">
                                        <div className="w-4 h-4 rounded-full bg-[#80B224] mr-3"></div>
                                        <h4 className="text-xl font-semibold">Ultra-Low Latency RoCEv2 Fabric</h4>
                                    </div>
                                    <div className="h-[2px] bg-[#E0E0E0] -mt-2 my-2"></div>
                                    <p className="text-gray-600 mt-4">Utilizes RDMA for direct, kernel-bypass data transfer, minimizing latency and CPU load.</p>
                                    <p className="text-gray-600">Ensures efficient, non-blocking communication between any two GPUs across the cluster.</p>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center mb-6">
                                        <div className="w-4 h-4 rounded-full bg-[#80B224] mr-3"></div>
                                        <h4 className="text-xl font-semibold">Unified High-Bandwidth GPU Domain</h4>
                                    </div>
                                    <div className="h-[2px] bg-[#E0E0E0] -mt-2 my-2"></div>
                                    <p className="text-gray-600 mt-4">Each NVL72 rack operates as a single, massive GPU with 1.8 TB/s of all-to-all NVLink bandwidth.</p>
                                    <p className="text-gray-600">Eliminates all communication bottlenecks within the rack.</p>
                                </div>
                            </SlideUp>
                        </div>

                        {/* 右侧图片 */}
                        <div className="lg:w-1/2">
                            <SlideUp>
                                <div className="rounded-lg overflow-hidden border border-gray-100 shadow-lg">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/benefits_img_RoCEv2.png"
                                        alt="RoCEv2 and NVLink"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Section */}
            <div className="bg-[#F9F9F9] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">Support</h2>
                    </SlideUp>

                    {/* Intelligent End-to-End Monitoring */}
                    <div className="mb-8">
                        <SlideUp>
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="w-full relative">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/support_bg_intelligent.png"
                                        alt="Intelligent End-to-End Monitoring"
                                        width={1200}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="ml-auto max-w-md text-left mr-6">
                                            <h3 className="text-2xl font-bold mb-4 text-black">Intelligent End-to-End Monitoring</h3>
                                            <div className="mb-4">
                                                <h4 className="font-bold mb-2 text-black">How</h4>
                                                <p className="text-[#666666]">A unified platform integrates deep telemetry from all components (GPU, NVLink, Network).</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-2 text-black">Benefit</h4>
                                                <p className="text-[#666666]">AI-driven analytics proactively detect anomalies and bottlenecks before they impact training jobs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    {/* 24/7 Proactive Expert Support */}
                    <div>
                        <SlideUp>
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="w-full relative">
                                    <Image
                                        src="/solutions/networking-hardware/gb200-with-rocev2/support_bg_247.png"
                                        alt="24/7 Proactive Expert Support"
                                        width={1200}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="max-w-md text-left ml-8">
                                            <h3 className="text-2xl font-bold mb-4 text-black">24/7 Proactive Expert Support</h3>
                                            <div className="mb-4">
                                                <h4 className="font-bold mb-2 text-black">How</h4>
                                                <p className="text-[#666666]">Engineers with deep experience with NVIDIA GPUs and software provide constant, around-the-clock system monitoring.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-2 text-black">Benefit</h4>
                                                <p className="text-[#666666]">Immediate remote intervention ensures maximum uptime and uninterrupted training.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
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
                                        <div className="text-3xl font-black text-[#80B224] mb-2">01</div>
                                        <h3 className="text-lg font-semibold text-[#333333]">Planning & Design</h3>
                                    </div>
                                    <p className="text-sm text-[#666666] leading-relaxed">
                                        Develop comprehensive documentation based on the client's data center topology, including detailed cabling plans and an IP addressing scheme.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>

                        {/* Arrow 01 - Hidden on small screens */}
                        <div className='hidden lg:flex flex-col lg:flex-row items-start justify-center h-[220px] max-h-[16px] p-6'>
                            <div className="w-6 h-6 pt-16">
                                <img src="/solutions/networking-hardware/gb200-with-rocev2/deployment_ic.png" alt="arrow" className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Step 02 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center lg:h-[220px] w-full lg:max-w-[260px]'>
                                <div className="text-left">
                                    <div className="mb-2">
                                        <div className="text-3xl font-black text-[#80B224] mb-2">02</div>
                                        <h3 className="text-lg font-semibold text-[#333333]">Deployment</h3>
                                    </div>
                                    <p className="text-sm text-[#666666] leading-relaxed">
                                        Rack switches, connect all physical cabling, and install GB200 NICs.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>

                        {/* Arrow 02 - Hidden on small screens */}
                        <div className='hidden lg:flex flex-col lg:flex-row items-start justify-center h-[220px] max-h-[16px] p-6'>
                            <div className="w-6 h-6 pt-16">
                                <img src="/solutions/networking-hardware/gb200-with-rocev2/deployment_ic.png" alt="arrow" className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Step 03 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center lg:h-[220px] w-full lg:max-w-[260px]'>
                                <div className="text-left">
                                    <div className="mb-2">
                                        <div className="text-3xl font-black text-[#80B224] mb-2">03</div>
                                        <h3 className="text-lg font-semibold text-[#333333]">Configuration & Validation</h3>
                                    </div>
                                    <p className="text-sm text-[#666666] leading-relaxed">
                                        Configure RoCEv2 parameters and conduct performance stress tests, followed by a final test report.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>

                        {/* Arrow 03 - Hidden on small screens */}
                        <div className='hidden lg:flex flex-col lg:flex-row items-start justify-center h-[220px] max-h-[16px] p-6'>
                            <div className="w-6 h-6 pt-16">
                                <img src="/solutions/networking-hardware/gb200-with-rocev2/deployment_ic.png" alt="arrow" className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Step 04 */}
                        <SlideUp>
                            <div className='flex flex-col lg:flex-row items-start justify-center lg:h-[220px] w-full lg:max-w-[260px]'>
                                <div className="text-left">
                                    <div className="mb-2">
                                        <div className="text-3xl font-black text-[#80B224] mb-2">04</div>
                                        <h3 className="text-lg font-semibold text-[#333333]">Acceptance & Handover</h3>
                                    </div>
                                    <p className="text-sm text-[#666666] leading-relaxed">
                                        Provide precise acceptance criteria and deliver upon meeting the standards.
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
                        <SlideUp>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Tutorials</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">
                                        NVIDIA H100 vs H200 vs B200: Which GPU for Your Workload
                                    </p>
                                    <div className="mt-auto">
                                        <button
                                            className="text-[#80B224] font-medium hover:text-[#6BA000] transition-colors duration-300 flex items-center"
                                            onClick={() => window.location.href = '/resources/tutorials'}
                                        >
                                            Read More&gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>

                        <SlideUp>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Case Studies</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">
                                        Accelerating Protein Engineering with Canopy Wave's GPUaaS
                                    </p>
                                    <div className="mt-auto">
                                        <button
                                            className="text-[#80B224] font-medium hover:text-[#6BA000] transition-colors duration-300 flex items-center"
                                            onClick={() => window.location.href = '/resources/case-study'}
                                        >
                                            Read More&gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>

                        <SlideUp>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Docs</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">
                                        Canopy Wave GPU Cluster Hardware Product Portfolio
                                    </p>
                                    <div className="mt-auto">
                                        <button
                                            className="text-[#80B224] font-medium hover:text-[#6BA000] transition-colors duration-300 flex items-center"
                                            onClick={() => window.location.href = '/resources/docs/cw-cloud-account/quick-start'}
                                        >
                                            Read More&gt;
                                        </button>
                                    </div>
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
                                    <div className={`mt-4 p-4 rounded-lg text-center transition-all duration-300 ${submitStatus === 'success'
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