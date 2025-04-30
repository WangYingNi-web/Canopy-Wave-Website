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
        purpose: '',
        expectedGPUs: '',
        interests: [] as string[],
        projectStartTime: '',
        message: '',
        marketing: false
    });

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const emailBody = `
                name: ${formData.firstName} ${formData.lastName}
                company: ${formData.company}
                email: ${formData.email}
                jobTitle: ${formData.jobTitle}
                phone: ${formData.phone}
                purpose: ${formData.purpose}
                expectedGPUs: ${formData.expectedGPUs}
                interests: ${formData.interests.join(', ')}
                project start time: ${formData.projectStartTime}
                message: ${formData.message}
                Do you agree with marketing: ${formData.marketing ? 'yes' : 'no'}
            `;

            const response = await axios.post(
                'https://sequoia-paas.canopywave.io/api/v1/send_email',
                {
                    subject: 'New Contact Form Submission',
                    recipients: ['wangyingni@canopywave.com', 'liuuisj@canopywave.com'],
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
                toast.success("Email sent successfully");
                // 重置表单
                setFormData({
                    firstName: '',
                    lastName: '',
                    company: '',
                    email: '',
                    jobTitle: '',
                    phone: '',
                    purpose: '',
                    expectedGPUs: '',
                    interests: [],
                    projectStartTime: '',
                    message: '',
                    marketing: false
                });
            } else {
                throw new Error('Email sending failed');
            }
        } catch (error: any) {
            console.error('Email sending failed:', error);
            const errorMessage = error.response?.data?.error || "Email sending failed";
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
                            <h1 className="text-5xl sm:text-6xl font-bold text-[#8CC63F] mb-6">CONTACT US</h1>
                            <p className="text-base text-gray-700 mb-4 max-w-md">
                                We&apos;d love to better understand your capacity needs and learn how our platform can take your AI-powered innovation to the next level.
                            </p>
                            <div className="mt-4">
                                <h2 className="text-lg font-bold mb-2">TECHNICAL AND ACCOUNT SUPPORT</h2>
                                <p className="text-gray-600 mb-2 max-w-md">We&apos;re here to help! If you have technical issues or questions about your account <a href="mailto:support@canopywave.com" className="text-[#8CC63F]">support@canopywave.com</a></p>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-bold mb-2">CONTACT INFORMATION</h2>
                                <p className="text-gray-600 mb-2 max-w-md">For general queries, including partnership opportunities, please email <a href="mailto:sales@canopywave.com" className="text-[#8CC63F]">sales@canopywave.com</a></p>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-bold mb-2">ABUSE AND LEGAL</h2>
                                <p className="text-gray-600 mb-2 max-w-md">For abuse reports such as DMCA notices and other legal matters, please email <a href="mailto:support@canopywave.com" className="text-[#8CC63F]">support@canopywave.com</a></p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }} className="bg-white p-6 rounded-lg shadow-md text-sm">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="border p-1.5 rounded text-sm"
                                            required
                                        />

                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="border p-1.5 rounded text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">Company Name *</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="border p-1.5 rounded text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="border p-1.5 rounded text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="border p-1.5 rounded text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">Job Title *</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleInputChange}
                                            className="border p-1.5 rounded text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1 text-gray-700 text-sm">I plan to use CanopyWave for:</label>
                                    <select
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleInputChange}
                                        className="border p-2 rounded w-full">
                                        <option value="" disabled selected className="text-gray-400">Please select</option>
                                        <option value="AI Training">Machine Learning / Artificial Intelligence</option>
                                        <option value="Data Analysis">Batch Processing</option>
                                        <option value="Machine Learning">Visual Effects & Rendering</option>
                                        <option value="Pixel Streaming">Pixel Streaming</option>
                                        <option value="Partnerships">Partnerships</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1 text-gray-700 text-sm">Expected Number of GPUs*</label>
                                    <select
                                        name="expectedGPUs"
                                        value={formData.expectedGPUs}
                                        onChange={handleInputChange}
                                        className="border p-2 rounded w-full">
                                        <option value="" disabled selected className="text-gray-400">Please select</option>
                                        <option value="1-10">1-10</option>
                                        <option value="11-50">11-50</option>
                                        <option value="51-100">51-100</option>
                                        <option value="100+">100+</option>
                                    </select>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-base font-bold mb-2">Select Your interests *</h3>
                                    <div className="flex flex-col">
                                        <label className="flex items-center mb-2 text-sm">
                                            <input
                                                type="checkbox"
                                                name="instant-cluster"
                                                checked={formData.interests.includes('instant-cluster')}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-600">Instant Cluster</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input
                                                type="checkbox"
                                                name="bare-metal-cloud"
                                                checked={formData.interests.includes('bare-metal-cloud')}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-600">Bare Metal Cloud</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input
                                                type="checkbox"
                                                name="nvdia-gb200-blackwell-superchip"
                                                checked={formData.interests.includes('nvdia-gb200-blackwell-superchip')}
                                                onChange={handleCheckboxChange}
                                                className="mr-2" />
                                            <span className="text-gray-600">Nvdia GB200 Blackwell Superchip</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input
                                                type="checkbox"
                                                name="nvidia-b200-gpu"
                                                checked={formData.interests.includes('nvidia-b200-gpu')}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-600">Nvidia B200 GPU</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input
                                                type="checkbox"
                                                name="nvidia-h200-sxm"
                                                checked={formData.interests.includes('nvidia-h200-sxm')}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-600">Nvidia H200 SXM</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input
                                                type="checkbox"
                                                name="nvidia-h100-sxm"
                                                checked={formData.interests.includes('nvidia-h100-sxm')}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-600">Nvidia H100 SXM</span>
                                        </label>
                                        <label className="flex items-center mb-3">
                                            <input
                                                type="checkbox"
                                                name="other"
                                                checked={formData.interests.includes('other')}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-600">Other</span>
                                        </label>
                                        <div className="flex flex-col mb-4">
                                            <label className="mb-1 text-gray-700 text-sm">When are you looking to start your project? *</label>
                                            <select
                                                name="projectStartTime"
                                                value={formData.projectStartTime}
                                                onChange={handleInputChange}
                                                className="border p-1.5 rounded w-full text-sm">
                                                <option value="" disabled selected className="text-gray-400">Please select</option>
                                                <option value="Immediately">Immediately</option>
                                                <option value="1-3 months">1-3 months</option>
                                                <option value="3-6 months">4-12 months</option>
                                                <option value="6+ months">12+ months</option>
                                            </select>
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your need for high-performance compute, and how you plan to use it to advance your business?"
                                            className="border p-1.5 rounded w-full mb-4 text-sm"
                                        ></textarea>

                                        <div className="flex items-center mb-4 text-sm">
                                            <input
                                                type="checkbox"
                                                name="marketing"
                                                checked={formData.marketing}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-600">I agree to receive marketing communications from CanopyWave.</span>
                                        </div>
                                    </div>
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