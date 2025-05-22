"use client";

import Image from 'next/image';
import IwsLink from './IwsLink'

export default function Footer() {
    return (
        <footer className="border-t bg-[#F9F9F9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-8">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
                        <Image
                            src="/canopy.svg"
                            alt="Canopy Wave Logo"
                            width={48}
                            height={48}
                        />
                        <span className="font-bold text-gray-600">Canopy Wave</span>
                    </div>
                    <IwsLink
                        href="/contact"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 mb-4 sm:mb-0"
                    >
                        Contact us
                    </IwsLink>
                </div>

                
                <div className="flex flex-col lg:flex-row justify-between items-start mb-12 pt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 w-full lg:w-auto">
                        <div>
                            <h3 className="font-semibold mb-4">Products</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/compute-services" className="text-gray-500 hover:text-gray-700">Compute Services</IwsLink></li>
                                <li><IwsLink href="/storage-services" className="text-gray-500 hover:text-gray-700">Storage Services</IwsLink></li>
                                <li><IwsLink href="/networking-services" className="text-gray-500 hover:text-gray-700">Networking Services</IwsLink></li>
                                <li><IwsLink href="/platform" className="text-gray-500 hover:text-gray-700">Platform</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Solutions</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/model-training" className="text-gray-500 hover:text-gray-700">Model Training</IwsLink></li>
                                <li><IwsLink href="/inference" className="text-gray-500 hover:text-gray-700">Inference</IwsLink></li>
                                <li><IwsLink href="/rendering" className="text-gray-500 hover:text-gray-700">Rendering</IwsLink></li>
                                <li><IwsLink href="/private-cloud" className="text-gray-500 hover:text-gray-700">Private cloud and GPUs deployment</IwsLink></li>
                                <li><IwsLink href="/networking-hardware" className="text-gray-500 hover:text-gray-700">Networking Hardware Solution</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Pricing</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/pricing/h100" className="text-gray-500 hover:text-gray-700">NVIDIA SXM5 H100</IwsLink></li>
                                <li><IwsLink href="/pricing/h200" className="text-gray-500 hover:text-gray-700">NVIDIA SXM5 H200</IwsLink></li>
                                <li><IwsLink href="/pricing/cpu" className="text-gray-500 hover:text-gray-700">Network Shared Storage</IwsLink></li>
                                <li><IwsLink href="/pricing/cloud-storage" className="text-gray-500 hover:text-gray-700">Object Storage</IwsLink></li>
                                <li><IwsLink href="/pricing/rdma" className="text-gray-500 hover:text-gray-700">Additional public IP address</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Data Center</h3>
                            <ul className="space-y-2 text-sm">
                                {/* <li><IwsLink href="/us1" className="text-gray-500 hover:text-gray-700">US 1</IwsLink></li>
                                <li><IwsLink href="/canada1" className="text-gray-500 hover:text-gray-700">Canada 1</IwsLink></li> */}
                                <li><IwsLink href="/iceland" className="text-gray-500 hover:text-gray-700">Iceland 1</IwsLink></li>
                                <li><IwsLink href="/iceland" className="text-gray-500 hover:text-gray-700">Iceland 2</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/cloud-api" className="text-gray-500 hover:text-gray-700">Manage Cloud Via API</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">About</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/about" className="text-gray-500 hover:text-gray-700">About US</IwsLink></li>
                                <li><IwsLink href="/about/careers" className="text-gray-500 hover:text-gray-700">Careers</IwsLink></li>
                                <li><IwsLink href="/about/newsroom" className="text-gray-500 hover:text-gray-700">Newsroom</IwsLink></li>
                                <li><IwsLink href="/blog" className="text-gray-500 hover:text-gray-700">Blog</IwsLink></li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="border-t w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-8">
                        <p className="text-sm text-gray-500 mb-4 sm:mb-0">© 2025 All rights reserved.</p>
                        {/* <div className="flex items-center space-x-6">
                            <IwsLink href="/terms" className="text-sm text-[#80B224] hover:text-[#6a9420]">Terms of Service</IwsLink>
                            <IwsLink href="/privacy" className="text-sm text-[#80B224] hover:text-[#6a9420]">Privacy Policy</IwsLink>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}