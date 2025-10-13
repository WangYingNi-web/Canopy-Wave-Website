"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';
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
        email: '',
        lastName: '',
        company: '',
        marketing: false
    });
    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };
    const validateField = (name: string, value: string | string[]) => {
        let error = '';

        // 对于 interests 数组的特殊处理
        // if (name === 'interests' && Array.isArray(value) && value.length === 0) {
        //     error = 'Please complete this required field.';
        // }
        // 对于普通字符串字段的处理
        if (typeof value === 'string') {
            if (!value.trim()) {
                error = 'Please complete this required field.';
            } else if (name === 'email' && !validateEmail(value)) {
                error = 'Email must be formatted correctly.';
            }
        }

        return error;
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = React.useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const [errors, setErrors] = useState({
        message: '',
        name: '',
        email: '',
        lastName: '',
        company: '',
        marketing: ''
    });


        
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields before submitting
        const newErrors = {
            message: validateField('message', formData.message),
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            lastName: validateField('lastName', formData.lastName),
            company: validateField('company', formData.company),
            marketing: formData.marketing ? '' : 'Please complete this required field.'
        };

        if (Object.values(newErrors).some(err => err)) {
            setErrors(newErrors);
            // 阻止提交
            setIsSubmitting(false);
            return;
        }
        setIsSubmitting(true);

        try {
            const emailBody = `
                subject: GB200 with RoCEv2 Inquiry
                First Name: ${formData.name}
                Last Name: ${formData.lastName}
                Company Name: ${formData.company}
                Email: ${formData.email}
                message: ${formData.message}
                marketing:${formData.marketing}
                submitted from: ${window.location.href}
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
                setFormData({ message: '', name: '', email: '', lastName: '', company: '', marketing: false });
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
                            <h1 className="text-4xl sm:text-[48px] font-black text-[#80B224] text-shadow-lg mb-4">
                                GB200 Cluster with RoCEv2
                            </h1>
                            <h1 className="text-5xl sm:text-[48px] font-black text-[#80B224] text-shadow-lg mb-6">
                                High-Performance Network Solution
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-[20px]">
                                Low Latency | High Throughput | Optimized for AI and HPC
                            </p>
                        </SlideUp>

                    </div>
                </div>
            </div>

            {/* Challenges Section */}
            <div className="py-12 sm:py-20" style={{
                backgroundImage: 'url("/solutions/networking-hardware/gb200-with-rocev2/challenges_bg_white.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-[48px] font-black text-center mb-[40px]">
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
                                <h3 className="text-[20px] font-bold text-[#333333] mb-2">
                                    Prolonged R&D Cycles
                                </h3>
                                <p className="text-[16px] text-[#666666]">
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
                                <h3 className="text-[20px] font-bold text-[#333333] mb-2">
                                    Performance Bottlenecks
                                </h3>
                                <p className="text-[16px] text-[#666666]">
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
                                <h3 className="text-[20px] font-bold text-[#333333] mb-2">
                                    Operational Complexity
                                </h3>
                                <p className="text-[16px] text-[#666666]">
                                    Deploying and managing large AI clusters is time-consuming and labor-intensive.This slows business responsiveness and makes troubleshooting difficult.
                                </p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Solution */}
            <div className='bg-[#F9F9F9] py-12 sm:py-20'>
                <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-[48px] font-black text-center mb-[40px]">Solution & Performance</h2>
                    </SlideUp>
                    <SlideUp>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-[40px]">
                            {/* Left Column - Overview and Table */}
                            <div className="lg:col-span-5 sm:pt-24">
                                <div className="rounded-lg">
                                    <h3 className="text-[24px] font-bold mb-4">Overview of the Network Topology Diagram</h3>
                                    <p className="text-[18px] text-[#333333] mb-6">A turnkey GB200 supercluster engineered for 24/7 production, featuring self-managing and self-monitoring capabilities</p>
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
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <SlideUp>
                            <div className="bg-[#E5F2D0] rounded-lg p-6 text-center">
                                <h3 className="text-[40px] font-bold mb-2">&lt;10μs</h3>
                                <p className="text-[18px] text-[#333333] font-bold">Latency</p>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="bg-[#DAEFBC] rounded-lg p-6 text-center">
                                <h3 className="text-[40px] font-bold mb-2">99.999%</h3>
                                <p className="text-[18px] text-[#333333] font-bold">Reliability</p>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="bg-[#C6E893] rounded-lg p-6 text-center">
                                <h3 className="text-[40px] font-bold mb-2">400Gbps</h3>
                                <p className="text-[18px] text-[#333333] font-bold">Throughput</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

           


            {/* Benefits Section */}
            <div className="py-12 sm:py-20 bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-[48px] font-black text-center mb-[40px] text-[#333333]">Benefits</h2>
                    </SlideUp>

                    {/* 上半部分 */}
                    <div className="flex flex-col lg:flex-row gap-12 mb-[40px]">
                        {/* 左侧图片 */}
                        <div className="lg:w-1/2">
                            <SlideUp>
                                <div className="rounded-lg overflow-hidden">
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
                                <h3 className="text-[24px] font-bold mb-6 text-[#333333]">GB200 GPU Clusters to Shorten R&D Cycles</h3>
                                <div className="mb-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-4 h-4 rounded-full bg-[#80B224] mr-3"></div>
                                        <h4 className="font-medium text-[24px]">4× Faster Model Training</h4>
                                    </div>
                                    <div className="h-[2px] bg-[#E0E0E0] my-2"></div>
                                    <p className="text-gray-600 mt-4 text-[18px]">Reduced training time for a 1.8T model from 90 days to just 22, which is 4 times more efficient than the H100 cluster</p>
                                </div>
                                <button className="bg-[#80B224] text-white px-[18px] py-[8px] rounded-3xl hover:bg-opacity-90 transition-all w-fit" onClick={()=>{window.location.href = '/gb200-nvl72'}}>Learn More</button>
                            </SlideUp>
                        </div>
                    </div>

                    {/* 下半部分 */}
                    <div className="flex flex-col-reverse lg:flex-row gap-12">
                        {/* 左侧内容 */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <SlideUp delay={0.2}>
                                <h3 className="text-[24px] font-bold mb-4 text-[#333333]">RoCEv2 and NVLink Enables 95%+ GPU Utilization</h3>
                                <div className="mb-4">
                                    <div className="flex items-center mb-6">
                                        <div className="w-4 h-4 rounded-full bg-[#80B224] mr-3"></div>
                                        <h4 className="text-[24px] font-medium">Ultra-Low Latency RoCEv2 Fabric</h4>
                                    </div>
                                    <div className="h-[2px] bg-[#E0E0E0] -mt-2 my-2"></div>
                                    <p className="text-gray-600 text-[18px] mt-4">Utilizes RDMA for direct, kernel-bypass data transfer, minimizing latency and CPU load.</p>
                                    <p className="text-gray-600 text-[18px]">Ensures efficient, non-blocking communication between any two GPUs across the cluster.</p>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center mb-6">
                                        <div className="w-4 h-4 rounded-full bg-[#80B224] mr-3"></div>
                                        <h4 className="text-[24px] font-medium">Unified High-Bandwidth GPU Domain</h4>
                                    </div>
                                    <div className="h-[2px] bg-[#E0E0E0] -mt-2 my-2"></div>
                                    <p className="text-gray-600 text-[18px] mt-4">Each NVL72 rack operates as a single, massive GPU with 1.8 TB/s of all-to-all NVLink bandwidth.</p>
                                    <p className="text-gray-600 text-[18px]">Eliminates all communication bottlenecks within the rack.</p>
                                </div>
                            </SlideUp>
                        </div>

                        {/* 右侧图片 */}
                        <div className="lg:w-1/2">
                            <SlideUp>
                                <div className="rounded-lg overflow-hidden">
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
            <div className="bg-[#F9F9F9] py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-[48px] font-black text-center mb-[40px]">Operation & Support</h2>
                    </SlideUp>

                    {/* Intelligent End-to-End Monitoring */}
                    <div className="mb-[40px]">
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
                                            <h3 className="text-[20px] font-bold mb-4">Intelligent End-to-End Monitoring</h3>
                                            <div className="mb-4">
                                                <h4 className="font-bold mb-2 text-[18px]">How</h4>
                                                <p className="text-[#666666] text-[18px]">A unified platform integrates deep telemetry from all components (GPU, NVLink, Network).</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-2 text-[18px]">Benefit</h4>
                                                <p className="text-[#666666] text-[18px]">AI-driven analytics proactively detect anomalies and bottlenecks before they impact training jobs.</p>
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
                                        <div className="max-w-md text-left ml-[24px]">
                                            <h3 className="text-[20px] font-bold mb-4 text-black">24/7 Proactive Expert Support</h3>
                                            <div className="mb-4">
                                                <h4 className="font-bold mb-2 text-[18px]">How</h4>
                                                <p className="text-[#666666] text-[18px]">Engineers with deep experience with NVIDIA GPUs and software provide constant, around-the-clock system monitoring.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-2 text-[18px]">Benefit</h4>
                                                <p className="text-[#666666] text-[18px]">Immediate remote intervention ensures maximum uptime and uninterrupted training.</p>
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
            <div className="bg-[#F9F9F9] py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-[48px] font-black mb-[40px]">
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
                                        <h3 className="text-[20px] font-bold text-[#333333]">Planning & Design</h3>
                                    </div>
                                    <p className="text-[#666666]">
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
                                        <h3 className="text-[20px] font-bold text-[#333333]">Deployment</h3>
                                    </div>
                                    <p className="text-[#666666]">
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
                                        <h3 className="text-[20px] font-bold text-[#333333]">Configuration & Validation</h3>
                                    </div>
                                    <p className="text-[#666666]">
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
                                        <h3 className="text-[20px] font-bold text-[#333333]">Acceptance & Handover</h3>
                                    </div>
                                    <p className="text-[#666666]">
                                        Provide precise acceptance criteria and deliver upon meeting the standards.
                                    </p>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Resource Section */}
            <div className="bg-[#F9F9F9] py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl sm:text-[48px] font-black text-[#333333] mb-[40px]">
                                Resources
                            </h2>
                        </div>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <SlideUp>
                            <div className="bg-[#ECF2E9] rounded-3xl hover:shadow-lg transition-shadow overflow-hidden h-full">
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-[20px] font-bold text-[#333333] mb-3">Tutorials</h3>
                                    <p className="text-[#666666] text-[16px] mb-8 flex-grow">
                                        NVIDIA H100 vs H200 vs B200: Which GPU for Your Workload
                                    </p>
                                    <div className="mt-auto">
                                        <button className="border-2 border-[#80B224] font-bold text-[#80B224] hover:bg-[#80B224] hover:text-white hover:scale-105 hover:shadow-lg px-[18px] py-[8px] rounded-full text-sm transition-all duration-300" onClick={() => window.location.href = '/resources/tutorials/nvidia-h100-vs-h200-vs-b200:-which-gpu-for-your-workload'}>
                                            Read More&gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>

                        <SlideUp>
                            <div className="bg-[#ECF2E9] rounded-3xl hover:shadow-lg transition-shadow overflow-hidden h-full">
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-[20px] font-bold text-[#333333] mb-3">Case Studies</h3>
                                    <p className="text-[#666666] text-[16px] mb-8 flex-grow">
                                        Accelerating Protein Engineering with Canopy Wave's GPUaaS
                                    </p>
                                    <div className="mt-auto">
                                        <button className="border-2 border-[#80B224] font-bold text-[#80B224] hover:bg-[#80B224] hover:text-white hover:scale-105 hover:shadow-lg px-[18px] py-[8px] rounded-full text-sm transition-all duration-300" onClick={() => window.location.href = '/resources/case-study'}>
                                            Read More&gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>

                        <SlideUp>
                            <div className="bg-[#ECF2E9] rounded-3xl hover:shadow-lg transition-shadow overflow-hidden h-full">
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-[20px] font-bold text-[#333333] mb-3">Docs</h3>
                                    <p className="text-[#666666] text-[16px] mb-8 flex-grow">
                                        Canopy Wave GPU Cluster Hardware Product Portfolio
                                    </p>
                                    <div className="mt-auto">
                                        <button className="border-2 border-[#80B224] font-bold text-[#80B224] hover:bg-[#80B224] hover:text-white hover:scale-105 hover:shadow-lg px-[18px] py-[8px] rounded-full text-sm transition-all duration-300" onClick={() => window.location.href = '/resources/docs/products/canopy-wave-gpu'}>
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
            <div className="bg-[#F9F9F9] py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative w-full">
                        <Image
                            src="/solutions/networking-hardware/gb200-with-rocev2/ready_bg copy.png"
                            alt="Ready to get started background"
                            width={1200}
                            height={980}
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 p-12">
                            <SlideUp>
                                <h2 className="text-3xl sm:text-[48px] font-black text-[#333333] mb-8 text-center">Ready to get started?</h2>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-[#333333] mb-8 text-center text-l">
                                    Have a question about solution that you are interested in? Fill in the form and we’ll respond to you promptly.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                                                First Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-transparent bg-white ${errors.name ? 'border-red-500' : ''}`}
                                                placeholder=""
                                            />
                                            {errors.name && (
                                            <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                                        )}
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-[#333333] mb-2">
                                                Last Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName || ''}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-transparent bg-white ${errors.lastName ? 'border-red-500' : ''}`}
                                                placeholder=""
                                            />
                                            {errors.lastName && (
                                            <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>
                                        )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-[#333333] mb-2">
                                                Company Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company || ''}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-transparent bg-white ${errors.company ? 'border-red-500' : ''}`}
                                                placeholder=""
                                            />
                                            {errors.company && (
                                            <span className="text-red-500 text-xs mt-1">{errors.company}</span>
                                        )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                                                Email<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-transparent bg-white ${errors.email ? 'border-red-500' : ''}`}
                                                placeholder=""
                                            />
                                            {errors.email && (
                                            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                                        )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label htmlFor="message" className="text-sm font-medium text-[#333333]">
                                                What's Your Project Interest, or How We Can Best Help You?<span className="text-red-500">*</span>
                                            </label>
                                            <div className="text-xs text-gray-400">
                                                0/5000
                                            </div>
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-transparent resize-none bg-white placeholder:text-sm ${errors.message ? 'border-red-500' : ''}`}
                                            placeholder="Briefly outline your interest or project requirements, such as project application scenario, involved devices, scales, budget, and other information."
                                        />
                                        {errors.message && (
                                            <span className="text-red-500 text-xs mt-1">{errors.message}</span>
                                        )}
                                    </div>

                                    <div className="flex items-start space-x-3 mb-10">
                                        <input
                                            type="checkbox"
                                            id="marketing"
                                            name="marketing"
                                            checked={formData.marketing}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`mt-1 h-4 w-4 text-[#8CC63F] focus:ring-[#8CC63F] border-gray-300 rounded ${errors.marketing ? 'border-red-500' : ''}`}
                                        />
                                        <label htmlFor="marketing" className="text-sm text-[#666666] leading-5">
                                            I agree to receive marketing communications from Canopy Wave.<span className="text-red-500">*</span>
                                        </label>
                                        {errors.marketing && (
                                            <span className="text-red-500 text-xs mt-1">{errors.marketing}</span>
                                        )}
                                    </div>

                                    {/* 状态消息显示 - 在屏幕右上方显示 */}
                                    {submitStatus !== 'idle' && (
                                        <div className={`fixed top-[63px] right-4 max-w-md p-4 rounded-lg text-center transition-all duration-300 z-50 shadow-lg ${submitStatus === 'success'
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

                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#8CC63F] hover:bg-[#7ab32f] px-12 py-3 text-white font-medium rounded-3xl transition-colors"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </Button>
                                    </div>
                                </form>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
