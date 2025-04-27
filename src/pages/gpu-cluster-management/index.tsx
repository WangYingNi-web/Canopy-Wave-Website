"use client";


import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function GPUClusterManagementPage() {
    const [activeTab, setActiveTab] = useState('deployment');

    return (
        <main className="min-h-screen bg-white pt-16">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-[#80B224] from-gray-900 to-gray-800 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                        GPU Cluster Deployment & Management Experts
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                        From planning and design to deployment and daily operations, we provide end-to-end GPU cluster solutions to support your AI and high-performance computing needs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#80B224] hover:bg-[#6c9a1e] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                Contact Us
                            </button>
                            <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* Service Advantages */}
            <section className="py-16 bg-[#F5F9F4]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Advantages</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            With rich experience and expertise, we provide comprehensive GPU cluster solutions for our clients
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Advantage Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Professional Planning & Design</h3>
                            <p className="text-gray-600">
                                We provide customized GPU cluster architecture design based on your business needs and budget, including hardware selection, network topology, and cooling solutions.
                            </p>
                        </div>

                        {/* Advantage Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Efficient Deployment</h3>
                            <p className="text-gray-600">
                                Our professional team handles hardware installation, system configuration, software deployment, and performance optimization to ensure your GPU cluster is quickly operational.
                            </p>
                        </div>

                        {/* Advantage Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">24/7 Operational Support</h3>
                            <p className="text-gray-600">
                                We provide round-the-clock monitoring and technical support to ensure your GPU cluster runs stably and handle any issues promptly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Process */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Process</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide end-to-end GPU cluster deployment and management services, from requirement analysis to continuous operation
                        </p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="inline-flex rounded-md shadow-sm">
                            <button
                                onClick={() => setActiveTab('deployment')}
                                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeTab === 'deployment'
                                        ? 'bg-[#80B224] text-white'
                                        : 'bg-white text-gray-700 hover:bg-[#F5F9F4]'
                                    } border border-gray-200`}
                            >
                                Cluster Deployment
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`px-4 py-2 text-sm font-medium ${activeTab === 'management'
                                        ? 'bg-[#80B224] text-white'
                                        : 'bg-white text-gray-700 hover:bg-[#F5F9F4]'
                                    } border-t border-b border-r border-gray-200`}
                            >
                                Cluster Management
                            </button>
                            <button
                                onClick={() => setActiveTab('optimization')}
                                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeTab === 'optimization'
                                        ? 'bg-[#80B224] text-white'
                                        : 'bg-white text-gray-700 hover:bg-[#F5F9F4]'
                                    } border-t border-b border-r border-gray-200`}
                            >
                                Performance Optimization
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        {activeTab === 'deployment' && (
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">GPU Cluster Deployment</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Requirement Analysis & Planning</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Hardware Procurement & Acceptance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Data Center Environment Preparation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Hardware Installation & Wiring</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>System Software Installation & Configuration</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Cluster Management Software Deployment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Performance Testing & Acceptance</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Image section remains unchanged */}
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">GPU Cluster Management</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Cluster Monitoring & Alerting</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Resource Scheduling & Allocation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>User Access Management</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Log Collection & Analysis</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Fault Diagnosis & Resolution</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Regular Maintenance & Upgrades</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Performance Reports & Analysis</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Image section remains unchanged */}
                            </div>
                        )}

                        {activeTab === 'optimization' && (
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Performance Optimization</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>System Performance Assessment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>GPU Utilization Optimization</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Memory Usage Optimization</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Network Throughput Optimization</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Storage Performance Optimization</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Task Scheduling Optimization</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#80B224] mr-2">✓</span>
                                            <span>Power Management Optimization</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Image section remains unchanged */}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 bg-[#F5F9F4]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We have provided GPU cluster solutions for clients across various industries, helping them achieve their business goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Case 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">AI Research Institute</h3>
                                <p className="text-gray-600 mb-4">
                                    Deployed a high-performance computing cluster with 200 NVIDIA H100 GPUs for a top AI research institute, supporting large-scale language model training.
                                </p>
                                <a href="#" className="text-[#80B224] hover:underline font-medium">Learn More →</a>
                            </div>
                        </div>

                        {/* Case 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">FinTech Company</h3>
                                <p className="text-gray-600 mb-4">
                                    Built a low-latency GPU inference cluster for a fintech company, supporting real-time risk control and fraud detection, reducing response time by 80%.
                                </p>
                                <a href="#" className="text-[#80B224] hover:underline font-medium">Learn More →</a>
                            </div>
                        </div>

                        {/* Case 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Biomedical Enterprise</h3>
                                <p className="text-gray-600 mb-4">
                                    Deployed a GPU computing cluster for a biomedical enterprise, accelerating drug molecule simulation and protein structure prediction, reducing R&D cycle by 40%.
                                </p>
                                <a href="#" className="text-[#80B224] hover:underline font-medium">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your GPU Cluster Project?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Contact our expert team to get a customized GPU cluster solution
                        </p>
                        <div className="bg-[#F5F9F4] p-8 rounded-lg shadow-md">
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#80B224] focus:border-[#80B224]" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#80B224] focus:border-[#80B224]" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                    <input type="text" id="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#80B224] focus:border-[#80B224]" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Requirements</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#80B224] focus:border-[#80B224]"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#80B224] hover:bg-[#6c9a1e] text-white px-6 py-3 rounded-md font-medium transition-colors">
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}