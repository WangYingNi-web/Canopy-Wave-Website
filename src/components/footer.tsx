"use client";

import Image from 'next/image';
import IwsLink from './IwsLink'
import { useRouter } from 'next/router'

export default function Footer() {
    const router = useRouter()

    return (
        <footer className="border-t bg-[#F9F9F9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex flex-col lg:flex-row lg:gap-12">
                <div className="w-full lg:w-1/5 flex flex-col space-y-4 mb-8 lg:mb-0 -mt-[13px]">
                        <div className="flex items-center">
                            <IwsLink href="/" className="flex items-center">
                                <Image
                                    src="/canopy.svg"
                                    alt="Canopy Wave Logo"
                                    width={45}
                                    height={45}
                                    priority
                                />
                                <span className="font-bold text-sm text-gray-600 ml-2">Canopy Wave</span>
                            </IwsLink>
                        </div>
                        <div className="flex items-center space-x-4 pl-1">
                            <IwsLink href="https://www.linkedin.com/company/canopywave/" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/footer/linkedin.svg"
                                    alt="LinkedIn"
                                    width={36}
                                    height={36}
                                />
                            </IwsLink>
                            <IwsLink href="https://x.com/canopywave_cw?s=21" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/footer/twitter.svg"
                                    alt="Twitter"
                                    width={36}
                                    height={36}
                                />
                            </IwsLink>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-sm">Products</h3>
                                <ul className="space-y-2 text-xs">
                                    <li><IwsLink href="/compute-services" className="text-gray-500 hover:text-gray-700">Compute Services</IwsLink></li>
                                    <li><IwsLink href="/storage-services" className="text-gray-500 hover:text-gray-700">Storage Services</IwsLink></li>
                                    <li><IwsLink href="/networking-services" className="text-gray-500 hover:text-gray-700">Networking Services</IwsLink></li>
                                    <li><IwsLink href="/platform" className="text-gray-500 hover:text-gray-700">Platform</IwsLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-sm">Solutions</h3>
                                <ul className="space-y-2 text-xs">
                                    <li><IwsLink href="/model-training" className="text-gray-500 hover:text-gray-700">AI Model Training</IwsLink></li>
                                    <li><IwsLink href="/inference" className="text-gray-500 hover:text-gray-700">Inference</IwsLink></li>
                                    <li><IwsLink href="/rendering" className="text-gray-500 hover:text-gray-700">Rendering</IwsLink></li>
                                    <li><IwsLink href="/private-cloud" className="text-gray-500 hover:text-gray-700">Private Cloud and GPUs Deployment</IwsLink></li>
                                    <li><IwsLink href="/networking-hardware" className="text-gray-500 hover:text-gray-700">Networking Hardware Solution</IwsLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-sm">Pricing</h3>
                                <ul className="space-y-2 text-xs">
                                    <li><IwsLink href="/pricing#H100" className="text-gray-500 hover:text-gray-700">NVIDIA HGX H100</IwsLink></li>
                                    <li><IwsLink href="/pricing#H200" className="text-gray-500 hover:text-gray-700">NVIDIA HGX H200</IwsLink></li>
                                    <li><IwsLink href="/pricing#other" className="text-gray-500 hover:text-gray-700">Network Shared Storage</IwsLink></li>
                                    <li><IwsLink href="/pricing#other" className="text-gray-500 hover:text-gray-700">Object Storage</IwsLink></li>
                                    <li><IwsLink href="/pricing#other" className="text-gray-500 hover:text-gray-700">Additional Public IP Address</IwsLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-sm">Data Center</h3>
                                <ul className="space-y-2 text-xs">
                                    <li><IwsLink href="/data-center/iceland" className="text-gray-500 hover:text-gray-700">Our Datacenter</IwsLink></li>
                                    <li><IwsLink href="/data-center/iceland#future-locations" className="text-gray-500 hover:text-gray-700">Future locations</IwsLink></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 text-sm">Resources</h3>
                                <ul className="space-y-2 text-xs">
                                    <li><IwsLink href="/cloud-api" className="text-gray-500 hover:text-gray-700">Manage Cloud Via API</IwsLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2 text-sm">about</h3>
                                <ul className="space-y-2 text-xs">
                                    <li><IwsLink href="/about" className="text-gray-500 hover:text-gray-700">About Us</IwsLink></li>
                                    <li><IwsLink href="/about/careers" className="text-gray-500 hover:text-gray-700">Careers</IwsLink></li>
                                    <li><IwsLink href="/about/newsroom" className="text-gray-500 hover:text-gray-700">Newsroom</IwsLink></li>
                                </ul>
                            </div>
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