"use client";

import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-hot-toast';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        purpose: '',
        expectedGPUs: '',
        interests: [] as string[],
        projectStartTime: '',
        message: '',
        marketing: false
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        purpose: '',
        expectedGPUs: '',
        projectStartTime: '',
        interests: '',
        message: '',
    });

    const handleSubmit = async () => {
        const newErrors = {
            firstName: validateField('firstName', formData.firstName),
            lastName: validateField('lastName', formData.lastName),
            company: validateField('company', formData.company),
            email: validateField('email', formData.email),
            purpose: validateField('purpose', formData.purpose),
            expectedGPUs: validateField('expectedGPUs', formData.expectedGPUs),
            projectStartTime: validateField('projectStartTime', formData.projectStartTime),
            interests: validateField('interests', formData.interests),
            message: validateField('message', formData.message),
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error !== '')) {
            return;
        }

        setLoading(true);

        try {
            const emailBody = `
                name: ${formData.firstName} ${formData.lastName}
                company: ${formData.company}
                email: ${formData.email}
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
                    recipients: ['andrew.li@canopywave.com', 'yachal@canopywave.com'],
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
            const errorMessage = error.response?.data?.error || "Email sending failed";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };
    // 添加正则验证函数
    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // 清除错误信息当用户开始输入
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
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
            const newInterests = checked
                ? [...formData.interests, name]
                : formData.interests.filter(interest => interest !== name);

            setFormData(prev => ({
                ...prev,
                interests: newInterests
            }));

            // 更新错误状态
            setErrors(prev => ({
                ...prev,
                interests: newInterests.length === 0 ? 'Please complete this required field.' : ''
            }));
        }
    };

    const validateField = (name: string, value: string | string[]) => {
        let error = '';

        // 对于 interests 数组的特殊处理
        if (name === 'interests' && Array.isArray(value) && value.length === 0) {
            error = 'Please complete this required field.';
        }
        // 对于普通字符串字段的处理
        else if (typeof value === 'string') {
            if (!value.trim()) {
                error = 'Please complete this required field.';
            } else if (name === 'email' && !validateEmail(value)) {
                error = 'Email must be formatted correctly.';
            }
        }

        return error;
    };

    return (
        <main className="min-h-screen relative text-gray-600">
            <Header />
            <div className="bg-[#F5F9F4] py-12 sm:py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                        <SlideUp>
                        <h1 className="text-5xl sm:text-8xl font-bold text-[#8CC63F] mb-6">Contact Us</h1>

                        </SlideUp>
                            <p className="text-base text-gray-700 mb-4 max-w-md">
                                We'd love to better understand your capacity needs and learn how our platform can take your AI-powered innovation to the next level
                            </p>
                            <div className="mt-4">
                                <h2 className="text-lg font-bold mb-2">TECHNICAL AND ACCOUNT SUPPORT</h2>
                                <p className="text-gray-600 mb-2 max-w-md">We're here to help! If you have technical issues or questions about your account <a href="mailto:support@canopywave.com" className="text-[#8CC63F]">support@canopywave.com</a></p>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-bold mb-2">CONTACT INFORMATION</h2>
                                <p className="text-gray-600 mb-2 max-w-md">For general queries, including partnership opportunities, please email <a href="mailto:sales@canopywave.com" className="text-[#8CC63F]">sales@canopywave.com</a></p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit();
                                }}
                                className="bg-white p-6 rounded-lg shadow-md text-sm"
                                noValidate
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">First Name<span className="text-red-500"><span className="text-red-500">*</span></span></label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`border p-1.5 rounded text-sm ${errors.firstName ? 'border-red-500' : ''}`}
                                            required
                                        />
                                        {errors.firstName && (
                                            <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">Last Name<span className="text-red-500"><span className="text-red-500">*</span></span></label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`border p-1.5 rounded text-sm ${errors.lastName ? 'border-red-500' : ''}`}
                                            required
                                        />
                                        {errors.lastName && (
                                            <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">Company Name<span className="text-red-500"><span className="text-red-500">*</span></span></label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`border p-1.5 rounded text-sm ${errors.company ? 'border-red-500' : ''}`}
                                            required
                                        />
                                        {errors.company && (
                                            <span className="text-red-500 text-xs mt-1">{errors.company}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-700 text-sm">Email <span className="text-red-500"><span className="text-red-500">*</span></span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`border p-1.5 rounded text-sm ${errors.email ? 'border-red-500' : ''}`}
                                            required
                                        />
                                        {errors.email && (
                                            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1 text-gray-700 text-sm">I plan to use CanopyWave for:<span className="text-red-500">*</span></label>
                                    <select
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        className={`border p-2 rounded w-full ${errors.purpose ? 'border-red-500' : ''}`}>
                                        <option value="" disabled className="text-gray-400">Please select</option>
                                        <option value="AI Training">Machine Learning / Artificial Intelligence</option>
                                        <option value="Data Analysis">Batch Processing</option>
                                        <option value="Machine Learning">Visual Effects & Rendering</option>
                                        <option value="Pixel Streaming">Pixel Streaming</option>
                                        <option value="Partnerships">Partnerships</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.purpose && (
                                        <span className="text-red-500 text-xs mt-1">{errors.purpose}</span>
                                    )}
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1 text-gray-700 text-sm">Expected Number of GPUs<span className="text-red-500">*</span></label>
                                    <select
                                        name="expectedGPUs"
                                        value={formData.expectedGPUs}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        className={`border p-2 rounded w-full ${errors.expectedGPUs ? 'border-red-500' : ''}`}>
                                        <option value="" disabled className="text-gray-400">Please select</option>
                                        <option value="1-10">1-10</option>
                                        <option value="11-50">11-50</option>
                                        <option value="51-100">51-100</option>
                                        <option value="100+">100+</option>
                                    </select>
                                    {errors.expectedGPUs && (
                                        <span className="text-red-500 text-xs mt-1">{errors.expectedGPUs}</span>
                                    )}
                                </div>
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-base font-bold mb-2">Select Your interests <span className="text-red-500">*</span></h3>
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
                                        {errors.interests && (
                                            <span className="text-red-500 text-xs -mt-1 mb-2">{errors.interests}</span>
                                        )}
                                        <div className="flex flex-col mb-4">
                                            <label className="mb-1 text-gray-700 text-sm">When are you looking to start your project? <span className="text-red-500">*</span></label>
                                            <select
                                                name="projectStartTime"
                                                value={formData.projectStartTime}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`border p-2 rounded w-full ${errors.projectStartTime ? 'border-red-500' : ''}`}>
                                                <option value="" disabled className="text-gray-400">Please select</option>
                                                <option value="Immediately">Immediately</option>
                                                <option value="1-3 months">1-3 months</option>
                                                <option value="3-6 months">4-12 months</option>
                                                <option value="6+ months">12+ months</option>
                                            </select>
                                            {errors.projectStartTime && (
                                                <span className="text-red-500 text-xs mt-1">{errors.projectStartTime}</span>
                                            )}
                                        </div>
                                        <div className="flex flex-col mb-4">
                                            <label className="mb-1 text-gray-700 text-sm">Tell us about your need for high-performance compute, and how you plan to use it to advance your business?<span className="text-red-500">*</span></label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`border p-2 rounded w-full h-32 ${errors.message ? 'border-red-500' : ''}`}
                                            />
                                            {errors.message && (
                                                <span className="text-red-500 text-xs mt-1">{errors.message}</span>
                                            )}
                                        </div>
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
                                    className={`bg-[#8CC63F] text-white px-6 py-2 rounded hover:bg-[#7AB530] transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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