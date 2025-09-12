"use client";

import Image from 'next/image';
import IwsLink from './IwsLink'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { log } from 'util';

export default function Footer() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
    
    const handleSubscribe = async () => {
        // 验证是否填写内容
        if (!email.trim()) {
            setMessage('This field is required')
            setMessageType('error')
            setTimeout(() => {
                setMessage('')
                setMessageType('')
            }, 3000)
            return
        }
        
        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email.trim())) {
            setMessage('Email format error')
            setMessageType('error')
            setTimeout(() => {
                setMessage('')
                setMessageType('')
            }, 3000)
            return
        }
        
        setIsSubmitting(true)
        try {
            const emailBody = `New newsletter subscription from: ${email} at ${new Date().toLocaleString()}`;
            const response = await fetch('https://sequoia-paas.canopywave.io/api/v1/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer alsfkjalsdkfjldksjfalksdjfljk13123'
                },
                body: JSON.stringify({
                    subject: 'New Newsletter Subscription',
                    // recipients: ['Lumi.Xiao@canopywave.com', 'yachal@canopywave.com', 'sales@canopywave.com'],
                    recipients: ['wangyingni@canopywave.com'],
                    body: emailBody
                })
            })
            console.log('Email sent:', email);
            console.log(emailBody,'12312');
            
            if (response.ok) {
                setMessage('Successfully subscribed!')
                setMessageType('success')
                setEmail('')
                setTimeout(() => {
                    setMessage('')
                    setMessageType('')
                }, 3000)
            } else {
                setMessage('Subscription failed. Please try again.')
                setMessageType('error')
                setTimeout(() => {
                    setMessage('')
                    setMessageType('')
                }, 3000)
            }
        } catch (error) {
            console.error('Subscription error:', error)
            setMessage('Subscription failed. Please try again.')
            setMessageType('error')
            setTimeout(() => {
                setMessage('')
                setMessageType('')
            }, 3000)
        } finally {
            setIsSubmitting(false)
        }
    }
    
    const handleLinkedInShare = (e: React.MouseEvent) => {
        e.preventDefault()

        // 确保在点击时获取最新的URL
        const currentUrl = window.location.href
        const encodedUrl = encodeURIComponent(currentUrl)
        const shareUrl = `https://www.linkedin.com/feed/?shareActive=true&shareUrl=${encodedUrl}`

        // 打开新窗口
        window.open(shareUrl, '_blank', 'noopener,noreferrer')
    }
    const getContainerMaxWidth = () => {
        return router.pathname === '/resources/docs/cw-cloud-account/quick-start' ? 'max-w-7xl' : 'max-w-7xl';
    };
    return (
        <footer className="border-t bg-[#F9F9F9]">
            <div className={`${getContainerMaxWidth()} mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12`}>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/4 lg:flex lg:justify-start">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-start gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-8 lg:gap-x-16 lg:gap-y-0">
                            <div className="space-y-8 min-w-[120px]">
                                <div>
                                    <h3 className="font-semibold mb-4 text-sm">Products</h3>
                                    <ul className="space-y-3 text-xs">
                                        <li><IwsLink href="/compute-services" className="text-gray-500 hover:text-[#36496E] hover:underline">Compute Services</IwsLink></li>
                                        <li><IwsLink href="/storage-services" className="text-gray-500 hover:text-[#36496E] hover:underline">Storage Services</IwsLink></li>
                                        <li><IwsLink href="/networking-services" className="text-gray-500 hover:text-[#36496E] hover:underline">Networking Services</IwsLink></li>
                                        <li><IwsLink href="/platform" className="text-gray-500 hover:text-[#36496E] hover:underline">Platform</IwsLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-8 max-w-[130px]">
                                <div>
                                    <h3 className="font-semibold mb-4 text-sm">Solutions</h3>
                                    <ul className="space-y-3 text-xs">
                                        <li><IwsLink href="/model-training" className="text-gray-500 hover:text-[#36496E] hover:underline">AI Model Training</IwsLink></li>
                                        <li><IwsLink href="/inference" className="text-gray-500 hover:text-[#36496E] hover:underline">Inference</IwsLink></li>
                                        <li><IwsLink href="/rendering" className="text-gray-500 hover:text-[#36496E] hover:underline">Rendering</IwsLink></li>
                                        <li><IwsLink href="/private-cloud" className="text-gray-500 hover:text-[#36496E] hover:underline">Private Cloud and GPUs Deployment</IwsLink></li>
                                        <li><IwsLink href="/networking-hardware" className="text-gray-500 hover:text-[#36496E] hover:underline">Networking Hardware Solution</IwsLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-8 max-w-[140px]">
                                <div>
                                    <h3 className="font-semibold mb-4 text-sm">Pricing</h3>
                                    <ul className="space-y-3 text-xs">
                                        <li><IwsLink href="/pricing#GB200" className="text-gray-500 hover:text-[#36496E] hover:underline">NVIDIA GB200 NVL72</IwsLink></li>
                                        <li><IwsLink href="/pricing#B200" className="text-gray-500 hover:text-[#36496E] hover:underline">NVIDIA HGX B200</IwsLink></li>
                                        <li><IwsLink href="/pricing#H100" className="text-gray-500 hover:text-[#36496E] hover:underline">NVIDIA HGX H100</IwsLink></li>
                                        <li><IwsLink href="/pricing#H200" className="text-gray-500 hover:text-[#36496E] hover:underline">NVIDIA HGX H200</IwsLink></li>
                                        <li><IwsLink href="/pricing#other" className="text-gray-500 hover:text-[#36496E] hover:underline">Network Shared Storage</IwsLink></li>
                                        <li><IwsLink href="/pricing#other" className="text-gray-500 hover:text-[#36496E] hover:underline">Object Storage</IwsLink></li>
                                        <li><IwsLink href="/pricing#other" className="text-gray-500 hover:text-[#36496E] hover:underline">Additional Public IP Address</IwsLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-8 min-w-[130px]">
                                <div>
                                    <h3 className="font-semibold mb-4 text-sm">Data Center</h3>
                                    <ul className="space-y-3 text-xs">
                                        <li><IwsLink href="/data-center/iceland" className="text-gray-500 hover:text-[#36496E] hover:underline">Our Data Center</IwsLink></li>
                                        <li><IwsLink href="/data-center/iceland#future-locations" className="text-gray-500 hover:text-[#36496E] hover:underline">Future locations</IwsLink></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-sm">Resources</h3>
                                    <ul className="space-y-2 text-xs">
                                        {/* <li><IwsLink href="/resources/cloud-api" className="text-gray-500 hover:text-gray-700">Manage Cloud Via API</IwsLink></li> */}
                                        <li><IwsLink href="/resources/tutorials" className="text-gray-500 hover:text-[#36496E] hover:underline">Tutorials</IwsLink></li>
                                        <li><IwsLink href="/resources/case-study" className="text-gray-500 hover:text-[#36496E] hover:underline">Case Studies</IwsLink></li>
                                        <li><IwsLink href="/resources/docs/cw-cloud-account/quick-start" className="text-gray-500 hover:text-[#36496E] hover:underline">Docs</IwsLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-8 sm:min-w-[80px]">
                                <div>
                                    <h3 className="font-semibold mb-4 text-sm">About</h3>
                                    <ul className="space-y-3 text-xs">
                                        <li><IwsLink href="/about" className="text-gray-500 hover:text-[#36496E] hover:underline">About Us</IwsLink></li>
                                        <li><IwsLink href="/about/careers" className="text-gray-500 hover:text-[#36496E] hover:underline">Careers</IwsLink></li>
                                        <li><IwsLink href="/about/newsroom" className="text-gray-500 hover:text-[#36496E] hover:underline">Newsroom</IwsLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col mb-8 lg:mb-4 pl-10">
                        <div className="flex items-center">
                            <IwsLink href="/" className="flex items-center">
                                <Image
                                    src="/canopy.png"
                                    alt="Canopy Wave Logo"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <span className="font-bold text-sm text-gray-600 ml-2">Canopy Wave</span>
                            </IwsLink>
                        </div>
                        
                        {/* Subscribe Section */}
                        <div className="mt-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Subscribe for updates</h3>
                            <div className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-[34px] flex-1 px-3 py-1 bg-gray-100 border border-gray-200 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-[#80B224] focus:border-transparent"
                                />
                                <button 
                                    onClick={handleSubscribe}
                                    disabled={isSubmitting}
                                    className={`h-[34px] px-3 py-2 text-white text-xs font-medium transition-colors duration-200 ${
                                        isSubmitting 
                                            ? 'bg-[#5A960F]' 
                                            : 'bg-[#80B224] hover:bg-[#C3E691]'
                                    }`}
                                >
                                    {isSubmitting ? 'Subscribe...' : 'Subscribe'}
                                </button>
                            </div>
                            {message && (
                                <div className={`mt-2 p-2 rounded-md text-xs transition-all duration-300 ${
                                    messageType === 'success' 
                                        ? 'bg-green-100 text-green-700 border border-green-200' 
                                        : 'bg-red-100 text-red-700 border border-red-200'
                                }`}>
                                    {message}
                                </div>
                            )}
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-6">
                            {/* <button
                                onClick={handleLinkedInShare}
                                className="hover:opacity-80"
                                aria-label="Share on LinkedIn"
                            >
                                <Image
                                    src="/footer/linkedin.svg"
                                    alt="LinkedIn"
                                    width={36}
                                    height={36}
                                />
                            </button> */}
                            <IwsLink href="https://www.linkedin.com/company/canopywave/" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/footer/linkedin.svg"
                                    alt="LinkedIn"
                                    width={32}
                                    height={32}
                                />
                            </IwsLink>
                            <IwsLink href="https://x.com/canopywave_cw?s=21" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/footer/twitter.svg"
                                    alt="Twitter"
                                    width={32}
                                    height={32}
                                />
                            </IwsLink>
                            <IwsLink href="https://www.youtube.com/@CanopyWave-CW" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/footer/youtube.svg"
                                    alt="Youtube"
                                    width={32}
                                    height={32}
                                />
                            </IwsLink>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 mt-8 sm:pt-10 sm:mt-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs text-gray-500 mb-4 sm:mb-0">© 2025 All rights reserved</p>
                        <div className="flex items-center space-x-4 sm:space-x-6">
                            <IwsLink href="/terms" className="text-xs text-[#80B224] hover:text-[#6a9420]">Terms of Service</IwsLink>
                            <IwsLink href="/privacy" className="text-xs text-[#80B224] hover:text-[#6a9420]">Privacy Policy</IwsLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}