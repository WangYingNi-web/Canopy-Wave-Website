"use client";

import Image from 'next/image';
import IwsLink from './IwsLink'

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-8">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <Image
                            src="/canopy.svg"
                            alt="Canopy Wave Logo"
                            width={30}
                            height={30}
                        />
                        <span className="text-sm">CANOPY WAVE</span>
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
                            <h3 className="font-semibold mb-4">PRODUCTS</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/compute-services" className="text-gray-500 hover:text-gray-700">Compute Services</IwsLink></li>
                                <li><IwsLink href="/storage-services" className="text-gray-500 hover:text-gray-700">Storage Services</IwsLink></li>
                                <li><IwsLink href="/networking-services" className="text-gray-500 hover:text-gray-700">Networking Services</IwsLink></li>
                                <li><IwsLink href="/platform" className="text-gray-500 hover:text-gray-700">Platform</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">SOLUTIONS</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/model-training" className="text-gray-500 hover:text-gray-700">Model Training</IwsLink></li>
                                <li><IwsLink href="/inference" className="text-gray-500 hover:text-gray-700">Inference</IwsLink></li>
                                <li><IwsLink href="/rendering" className="text-gray-500 hover:text-gray-700">Rendering</IwsLink></li>
                                <li><IwsLink href="/private-cloud" className="text-gray-500 hover:text-gray-700">Private Cloud</IwsLink></li>
                                <li><IwsLink href="/gpu-cluster-management" className="text-gray-500 hover:text-gray-700">GPUs Cluster bring up and management</IwsLink></li>
                                <li><IwsLink href="/networking-hardware" className="text-gray-500 hover:text-gray-700">Networking Hardware Solution</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">PRICING</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/pricing/h100" className="text-gray-500 hover:text-gray-700">NVIDIA HGX H100</IwsLink></li>
                                <li><IwsLink href="/pricing/h200" className="text-gray-500 hover:text-gray-700">NVIDIA HGX H200</IwsLink></li>
                                <li><IwsLink href="/pricing/cpu" className="text-gray-500 hover:text-gray-700">CPU NODE</IwsLink></li>
                                <li><IwsLink href="/pricing/cloud-storage" className="text-gray-500 hover:text-gray-700">Cloud Storage</IwsLink></li>
                                <li><IwsLink href="/pricing/rdma" className="text-gray-500 hover:text-gray-700">RDMA Storage</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Data Center</h3>
                            <ul className="space-y-2 text-sm">
                                <li><IwsLink href="/us1" className="text-gray-500 hover:text-gray-700">US 1</IwsLink></li>
                                <li><IwsLink href="/canada1" className="text-gray-500 hover:text-gray-700">Canada 1</IwsLink></li>
                                <li><IwsLink href="/iceland1" className="text-gray-500 hover:text-gray-700">Iceland 1</IwsLink></li>
                                <li><IwsLink href="/iceland2" className="text-gray-500 hover:text-gray-700">Iceland 2</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><IwsLink href="/documentation" className="text-gray-500 hover:text-gray-700">Documentation</IwsLink></li>
                                <li><IwsLink href="/status" className="text-gray-500 hover:text-gray-700">Status</IwsLink></li>
                                <li><IwsLink href="/blog" className="text-gray-500 hover:text-gray-700">Blog</IwsLink></li>
                                <li><IwsLink href="/events" className="text-gray-500 hover:text-gray-700">Events & Webinars</IwsLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">About</h3>
                            <ul className="space-y-2">
                                <li><IwsLink href="/about" className="text-gray-500 hover:text-gray-700">About US</IwsLink></li>
                                <li><IwsLink href="/careers" className="text-gray-500 hover:text-gray-700">Careers</IwsLink></li>
                                <li><IwsLink href="/newsroom" className="text-gray-500 hover:text-gray-700">Newsroom</IwsLink></li>
                                <li><IwsLink href="/blog" className="text-gray-500 hover:text-gray-700">Blog</IwsLink></li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="border-t -mx-[100vw] px-[100vw]">
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-8">
                        <p className="text-sm text-gray-500 mb-4 sm:mb-0">© 2025 All rights reserved.</p>
                        <div className="flex items-center space-x-6">
                            <IwsLink href="/terms" className="text-sm text-[#80B224] hover:text-[#6a9420]">Terms of Service</IwsLink>
                            <IwsLink href="/privacy" className="text-sm text-[#80B224] hover:text-[#6a9420]">Privacy Policy</IwsLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}