import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import DocumentLayout from '@/components/DocumentLayout';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import ClickableImage from '@/components/ui/ClickableImage'
import { docsLeftNavItems } from '@/components/docs/docsNavigation';

export default function DeployInstancePage() {



    // Deploy an instance 专用的Jump to内容
    const jumpToItems = [
        { id: 'sign-in-sign-up', label: 'Sign In or Sign Up' },
        { id: 'access-dashboard', label: 'Access the Dashboard' },
        { id: 'deploy-instance', label: 'Deploy an Instance' }
    ];
    // 图片预加载组件
    const PreloadedImage: React.FC<{
        src: string;
        alt: string;
        className?: string;
    }> = ({ src, alt, className }) => {
        const [isLoaded, setIsLoaded] = useState(false);
        const [hasError, setHasError] = useState(false);

        return (
            <div className={`relative ${className}`}>
                {/* 加载占位符 */}
                {!isLoaded && !hasError && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                        <div className="text-gray-500 text-sm">Image loading in progress...</div>
                    </div>
                )}

                {/* 错误占位符 */}
                {hasError && (
                    <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        {/* <div className="text-gray-400 text-sm">图片加载失败</div> */}
                    </div>
                )}

                {/* 实际图片 */}
                <ClickableImage
                    src={src}
                    alt={alt}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
                    showZoomIcon={true}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    loading="lazy"
                />
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>Canopy Wave - Deploy an Instance</title>
                <meta name="description" content="Detailed guide for deploying GPU instances on Canopy Wave platform. Learn how to configure H100 and H200 instances step by step." />
            </Head>

            <DocumentLayout
                title="Accessing the Dashboard and Deploying an Instance"
                breadcrumb='Deploy an Instance'
                description=""
                previousPage={{
                    title: "Quick Start",
                    href: "/resources/docs/cw-cloud-account/quick-start"
                }}
                nextPage={{
                    title: "GPU Cluster Hardware Product Portfolio",
                    href: "/resources/docs/products/canopy-wave-gpu"
                }}
                reviewDate="August 26, 2025"
                leftNavItems={docsLeftNavItems}
                jumpToItems={jumpToItems}
                pageTitle="Deploy an Instance - GPU Configuration Guide"
            >

                <h2 id="sign-in-sign-up" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    1. Sign In or Sign Up
                </h2>
                <p className="mb-4">
                    Click the <a href="https://cloud.canopywave.io/" className="text-[#80B224] hover:text-[#98c455]" target="_blank" rel="noopener noreferrer">Canopy Wave</a> link to register or sign in.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    1) Sign in/ Sign up.
                </h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>For existing users: Enter your email and password, then click <strong>Sign In</strong>.</li>
                    <li>For new users: Click <strong>Sign Up</strong>.</li>
                </ul>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/sign-in.webp"
                        alt="sign-in"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    2) Registration Process
                </h3>
                <p className="mb-4">
                    On the registration page, select your account type (Personal or Company) and complete all required fields.
                </p>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/sign-up.webp"
                        alt="sign-in"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    3) Complete Registration
                </h3>
                <p className="mb-6">
                    After registration is complete, you will be redirected to the sign-in page. Please sign in to your new account.
                </p>

                <h2 id="access-dashboard" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    2. Access the Dashboard
                </h2>
                <p className="mb-4">
                    The dashboard allows you to monitor GPU utilization, VM status, and other critical metrics. You can navigate between modules by clicking on items like GPU Status or CPU Status. In the Running VMs section, select GPU or CPU to view detailed resource allocation.
                </p>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/Click 1.webp"
                        alt="Click 1"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>

                <h2 id="deploy-instance" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    3. Deploy an Instance
                </h2>
                <p className="mb-4">
                    Within this interface, you can provision GPU or CPU-enabled VM instances and allocate public IP addresses.
                </p>
                <p className="mb-6">
                    The creation process is the same for both GPU and CPU virtual machines. The following steps use a GPU VM as an example.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    1) Launch GPU VM
                </h3>
                <p className="mb-4">
                    Click the button "Launch GPU VM" to create a virtual machine.
                </p>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/Select.webp"
                        alt="Select"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    2) Configure GPU and Payment
                </h3>
                <p className="mb-4">
                    Select number of GPUs, select Payment Mode, click the button "Continue".
                </p>
                <div className="bg-[#F0F0F0] p-4 mb-4">
                    <p className="text-sm text-gray-700">
                        <strong>Payment Modes:</strong> We offer two models: On-Demand and Reserved. Reserved instances receive a 10% discount but require specifying a usage duration. Hourly rates are displayed for your reference.
                    </p>
                </div>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/Enter.webp"
                        alt="Enter"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    3) VM Configuration
                </h3>
                <p className="mb-4">
                    Enter "VM Name" and "SSH Password", then click the "Continue" button.
                </p>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/Deploy 3.webp"
                        alt="Deploy 3"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    4) Payment Information
                </h3>
                <p className="mb-4">
                    Click Add New Card to enter and save your payment information.
                </p>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/Deploy 4.webp"
                        alt="Deploy 4"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    5) Request Public IP
                </h3>
                <p className="mb-4">
                    Click the Public IP button to request a public IP address for your instance.
                </p>
                <div className="bg-[#F0F0F0] p-4 mb-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-gray-700">
                                <strong>Note:</strong> Each VM requires only one public IP address.
                            </p>
                        </div>
                    </div>
                </div>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/note 1.webp"
                        alt="note 1"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/note 2.webp"
                        alt="note 2"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/note 3.webp"
                        alt="note 3"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>

                <h3 className="text-lg font-medium text-gray-900 mb-3 mt-6">
                    6) Assign Public IP
                </h3>
                <p className="mb-4">
                    Click the highlighted text to assign the Public IP to your instance.
                </p>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/last 1.webp"
                        alt="last 1"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>
                <SlideUp>
                    <PreloadedImage
                        src="/docs/cw-cloud-account/last 2.webp"
                        alt="last 2"
                        className="w-full max-w-3xl rounded-lg shadow-sm"
                    />
                </SlideUp>
                <SlideUp>
                    <p className="text-sm mt-8">
                        <strong>Congratulations!</strong> The instance setup is now complete, and you may begin using your instance immediately.
                    </p>
                </SlideUp>
            </DocumentLayout>
        </>
    );
}