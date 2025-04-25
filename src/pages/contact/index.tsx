"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Contact() {
    return (
        <main className="min-h-screen relative">
            <Header />
            <div className="bg-gray-50 py-12 sm:py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-2xl sm:text-4xl font-bold text-[#8CC63F] mb-6">CONTACT US</h1>
                            <p className="text-base text-gray-700 mb-4">
                                We&apos;d love to better understand your capacity needs and learn how our platform can take your AI-powered innovation to the next level. Fill out the form and tell us more about yourself.
                            </p>
                            <div className="mt-6">
                                <h2 className="text-lg font-bold mb-3">TECHNICAL AND ACCOUNT SUPPORT</h2>
                                <p className="text-gray-600 mb-3">We&apos;re here to help! If you have technical issues or questions about your account, <a href="mailto:support@canopywave.com" className="text-[#8CC63F]">support@canopywave.com</a></p>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-bold mb-3">CONTACT INFORMATION</h2>
                                <p className="text-gray-600 mb-3">For general queries, including partnership opportunities, please email <a href="mailto:sales@canopywave.com" className="text-[#8CC63F]">sales@canopywave.com</a></p>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-bold mb-3">ABUSE AND LEGAL</h2>
                                <p className="text-gray-600">For abuse reports such as DMCA notices and other legal matters, please email <a href="mailto:support@canopywave.com" className="text-[#8CC63F]">support@canopywave.com</a></p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form className="bg-white p-8 rounded-lg shadow-md">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <input type="text" placeholder="First name*" className="border p-2 rounded mb-4" />
                                    <input type="text" placeholder="Last name*" className="border p-2 rounded mb-4" />
                                    <input type="text" placeholder="Company name*" className="border p-2 rounded mb-4" />
                                    <input type="email" placeholder="Business email*" className="border p-2 rounded mb-4" />
                                    <input type="text" placeholder="Job title*" className="border p-2 rounded mb-4" />
                                    <select className="border p-2 rounded mb-4">
                                        <option value="">Country*</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UK">UK</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>
                                <select className="border p-2 rounded w-full mb-6">
                                    <option value="">I plan to use CoreWave for:</option>
                                    <option value="AI Training">AI Training</option>
                                    <option value="Data Analysis">Data Analysis</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Other">Other</option>
                                </select>
                                <select className="border p-2 rounded w-full mb-6">
                                    <option value="">Expected Number of GPUs*</option>
                                    <option value="1-10">1-10</option>
                                    <option value="11-50">11-50</option>
                                    <option value="51-100">51-100</option>
                                    <option value="100+">100+</option>
                                </select>
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold mb-2">Select Your interests *</h3>
                                    <div className="flex flex-col">
                                        <label className="flex items-center mb-3">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-gray-600">Instant Cluster</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-gray-600">Bare Metal Cloud</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-gray-600">Nvdia GB200 Blackwell Superchip</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-gray-600">Nvidia B200 GPU</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-gray-600">Nvidia H200 SXM</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-gray-600">Nvidia H100 SXM</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-gray-600">Other</span>
                                        </label>
                                    </div>
                                </div>
                                <textarea placeholder="Tell us about your need for high-performance compute, and how you plan to use it to advance your business?" className="border p-2 rounded w-full mb-6"></textarea>
                                <div className="flex items-center mb-6">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-gray-600">I agree to receive marketing communications from CoreWave.</span>
                                </div>
                                <button type="submit" className="bg-[#8CC63F] text-white px-6 py-3 rounded-md hover:bg-[#7ab32f]">Explore careers</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}