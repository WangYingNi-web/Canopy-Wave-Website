"use client";

import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-hot-toast';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        jobTitle: '',
        phone: '',
        country: '',
        usagePlan: '',
        expectedGPUs: '',
        interests: [] as string[],
        message: '',
        marketing: false
    });
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND}/api/contact/submit`,
                formData
            );

            toast.success("Form submitted successfully!");
            // 重置表单
            setFormData({
                firstName: '',
                lastName: '',
                company: '',
                email: '',
                jobTitle: '',
                phone: '',
                country: '',
                usagePlan: '',
                expectedGPUs: '',
                interests: [],
                message: '',
                marketing: false
            });
        } catch (error: any) {
            const errorMessage = error.response?.data?.error || "Failed to submit form.";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name === 'marketing') {
            setFormData(prev => ({
                ...prev,
                marketing: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                interests: checked
                    ? [...prev.interests, name]
                    : prev.interests.filter(interest => interest !== name)
            }));
        }
    };

    return (
        <main className="min-h-screen relative">
            <Header />
            <div className="bg-[#F5F9F4] py-12 sm:py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-2xl sm:text-4xl font-bold text-[#8CC63F] mb-6">CONTACT US</h1>
                            <p className="text-base text-gray-700 mb-4">
                                We&apos;d love to better understand your capacity needs and learn how our platform can take your AI-powered innovation to the next level. Fill out the form and tell us more about yourself.
                            </p>
                            <div className="mt-6">
                                <h2 className="text-lg font-bold mb-3">TECHNICAL AND ACCOUNT SUPPORT</h2>
                                <p className="text-gray-600 mb-3">We&apos;re here to help! If you have technical issues or questions about your account <a href="mailto:support@canopywave.com" className="text-[#8CC63F]">support@canopywave.com</a></p>
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
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }} className="bg-white p-8 rounded-lg shadow-md">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div className="flex flex-col">
                                        <label className="mb-2 text-gray-700">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-2 text-gray-700">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-2 text-gray-700">Company Name *</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-2 text-gray-700">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-2 text-gray-700">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-2 text-gray-700">Job Title *</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* <select className="border p-2 rounded w-full mb-6">
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
                                </select> */}
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
                                    <span className="text-gray-600">I agree to receive marketing communications from CanopyWave.</span>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#8CC63F] text-white px-6 py-3 rounded-md hover:bg-[#7ab32f] disabled:opacity-50"
                                    disabled={loading}
                                >
                                    {loading ? 'Submitting...' : 'Contact Us'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}