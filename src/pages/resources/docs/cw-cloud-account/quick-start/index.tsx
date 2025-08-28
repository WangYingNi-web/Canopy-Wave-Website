import Head from 'next/head';
import DocumentLayout from '@/components/DocumentLayout';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import Image from 'next/image';

export default function CaseStudyPage() {
    useScrollToHash();


    const leftNavItems = [
        {
            id: 'tutorials',
            label: (
                <span className="flex items-center w-full">
                    📚 Tutorials
                    <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16}  className='ml-2 mt-1'/>
                </span>
            ),
            href: '/resources/tutorials'
        },
        {
            id: 'case-studies',
            label: (
                <span className="flex items-center w-full">
                    📖 Case Studies
                    <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16}  className='ml-2 mt-1'/>
                </span>
            ),
            href: '/resources/case-study'
        },
        {
            id: 'newsroom',
            label: (
                <span className="flex items-center w-full">
                    📰 Newsroom
                    <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16}  className='ml-2 mt-1'/>
                </span>
            ),
            href: '/about/newsroom'
        },
        { id: 'divider-1', label: '', isDivider: true }, // 添加分隔线
        {
            id: 'cw-cloud',
            label: '☁️ CW Cloud Account',
            children: [
                { id: 'quick-start', label: 'Quick Start', href: '/resources/docs/cw-cloud-account/quick-start' },
                { id: 'deploy-an-instance', label: 'Deploy an instance', href: '/resources/docs/cw-cloud-account/deploy-an-instance' },
                { id: 'key-metrics-of-gpu-performance', label: 'Key Metrics of GPU Performance', href: '/resources/docs/cw-cloud-account/key-metrics-of-gpu-performance' },
                // { id: 'manage-instance', label: 'Manage Instance', href: '#' }
            ]
        },
        // {
        //     id: 'products',
        //     label: '🛍️ Products',
        //     children: [
        //         { id: 'hardware-roundup', label: 'Hardware Roundup', href: '#' }
        //     ]
        // },
        // {
        //     id: 'technical-docs',
        //     label: '📋 Technical Documents',
        //     children: [
        //         { id: 'data-sheet', label: 'Data Sheet', href: '#' }
        //     ]
        // },
        // { id: 'faqs', label: '❓ FAQs', href: '#' }
    ];

    const jumpToItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'step1-login', label: 'Log in to your dashboard' },
        { id: 'step2-deploy', label: 'Deploy an instance' },
        { id: 'step3-access', label: 'Access your instance' },
        { id: 'step4-manage', label: 'Manage your instance' },
        { id: 'step5-cost', label: 'Cost monitoring' },
        // { id: 'step6-help', label: 'Need Help' }
    ];

    return (
        <>
            <Head>
                <title>Canopy Wave Documentation</title>
                <meta name="description" content="Complete configuration guide for NVIDIA H100 and H200 GPU instances on Canopy Wave. Deploy production-ready AI training environments in 5 minutes." />
            </Head>

            <DocumentLayout
                title="Quick Start"
                breadcrumb="Quick Start"
                description="Welcome to the Quick Start Guide! This guide covers the complete configuration process for NVIDIA H100 GPU and NVIDIA H200 GPU instances on both bare metal and virtual machines (VMs), optimized for AI training, machine learning, and high-performance computing workloads. This guide will help you deploy a production-ready environment in just 5 minutes."
                reviewDate="August 25, 2025"
                // downloadUrl="#"
                nextPage={{ title: 'Deploy an instance', href: '/resources/docs/cw-cloud-account/deploy-an-instance' }}
                // previousPage={{ title: 'Manage Instance', href: '/resources/docs/cw-cloud-account/manage-instance' }}
                leftNavItems={leftNavItems}
                jumpToItems={jumpToItems}
                pageTitle="Quick Start Guide - NVIDIA H100 & H200 GPU Instances"
                bannerImage="/docs/quick-banner.png"
            >
                <div className="bg-[#F0F0F0] p-4 mt-10">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-gray-700">
                                <strong>Tip2:</strong> If you already have a Canopy Wave account, simply log in with your credentials. If not, you can register for an account by clicking: <a href="https://cloud.canopywave.io/" className="text-[#80B224] hover:text-[#98c455] underline" target="_blank" rel="noopener noreferrer">https://cloud.canopywave.io/</a>
                            </p>
                        </div>
                    </div>
                </div>

                <h2 id="overview" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Overview
                </h2>

                <p className="mb-8">
                    Welcome to the Quick Start Guide! This guide covers the complete configuration process for NVIDIA H100 GPU and NVIDIA H200 GPU instances on both bare metal and virtual machines (VMs), optimized for AI training, machine learning, and high-performance computing workloads. This guide will help you deploy a production-ready environment in just 5 minutes.
                </p>

                <h2 id="step1-login" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Step 1: Log in to your dashboard
                </h2>

                <p className="mb-6">
                    Log in to the platform and navigate to your dashboard. Here, you can manage instances and access additional tools—such as monitoring real-time metrics like GPU memory usage, compute utilization, and temperature.
                </p>

                <h2 id="step2-deploy" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Step 2: Deploy an instance
                </h2>

                <p className="mb-4">
                    Click <strong>Virtual Machines</strong>, then click <strong>Launch GPU VM</strong> in the upper-right corner to start creating your GPU instance.
                </p>

                <h3 className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    GPU Configuration
                </h3>

                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Select the number of GPUs and billing mode.</li>
                    <li>Click <strong>Continue</strong>, then set your username and password.</li>
                </ul>

                <h3 className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    Request Public IP
                </h3>

                <p className="mb-6">
                    Check the <strong>Request Public IP</strong> option and select the allocation method.
                </p>

                <h2 id="step3-access" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Step 3: Access your instance
                </h2>

                <h3 className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    SSH Direct Connection (Recommended for CLI Operations)
                </h3>

                <p className="mb-3"><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside mb-4 space-y-2">
                    <li>Copy the public IP address from your instance details page.</li>
                    <li>Open Terminal (Mac/Linux) or PowerShell (Windows).</li>
                    <li>Run the command: <code className="bg-gray-200 px-2 py-1 rounded text-sm">ssh username@&lt;your-instance-ip&gt;</code></li>
                    <li>Enter the password you set during instance creation when prompted.</li>
                </ol>

                <p className="mb-6">
                    Upon successful connection, the terminal prompt will display: <code className="bg-gray-200 px-2 py-1 rounded text-sm">ubuntu@h100-instance:~$</code>
                </p>

                <h2 id="step4-manage" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Step 4: Manage your instance
                </h2>

                <p className="mb-3">In the virtual machine interface, you can:</p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li><strong>Start:</strong> Start your instance</li>
                    <li><strong>Delete:</strong> Permanently removes your instance. Billing stops immediately, and all data will be irrecoverably lost.</li>
                </ul>

                <h2 id="step5-cost" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Step 5: Cost monitoring
                </h2>

                <p className="mb-6">
                    In the dashboard, click <strong>Billing</strong> in the left navigation bar. Here you can view your detailed cost breakdown and export billing statements in Excel/CSV format.
                </p>

                {/* <h2 id="step6-help" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Step 6: Need Help?
                </h2>

                <p className="mb-4">
                    If you encounter any issues, contact our support team at <a href="mailto:support@canopywave.com" className="text-[#80B224] hover:text-[#98c455]">support@canopywave.com</a>. <br /> We provide 24/7 assistance.
                </p> */}

                {/* <div className="bg-[#F0F0F0] p-4 mt-10">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-gray-700">
                                <strong>Get started now:</strong> Launch your H100 and H200 instances by clicking: <a href="https://cloud.canopywave.io/" className="text-[#80B224] hover:text-[#98c455] underline" target="_blank" rel="noopener noreferrer">https://cloud.canopywave.io/</a>
                            </p>
                        </div>
                    </div>
                </div> */}
            </DocumentLayout>
        </>
    );
}