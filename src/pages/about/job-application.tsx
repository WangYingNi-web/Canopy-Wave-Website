"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { toast } from 'react-hot-toast';
import SlideUp from '@/components/slide';
import type { FormEvent, ChangeEvent } from 'react';

export default function JobApplication() {
    const router = useRouter();
    const { position } = router.query;
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        phone: string;
        message: string;
        resume: File | null;
    }>({
        name: '',
        email: '',
        phone: '',
        message: '',
        resume: null
    });

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        phone?: string;
        resume?: string;
    }>({});

    const validateField = (name: string, value: string | File | null) => {
        switch (name) {
            case 'name':
                if (!value) return 'Please complete this required field.';
                return '';
            case 'email':
                if (!value) return 'Please complete this required field.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)) {
                    return 'Email must be formatted correctly.';
                }
                return '';
            case 'phone':
                if (!value) return 'Please complete this required field.';
                // if (!/^[0-9+\-\s()]{8,}$/.test(value as string)) {
                //     return 'Phone number must be formatted correctly.';
                // }
                return '';
            case 'resume':
                if (!value) return 'Please upload your resume';
                return '';
            default:
                return '';
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFormData(prev => ({
                ...prev,
                resume: files[0]
            }));
            setErrors(prev => ({
                ...prev,
                resume: ''
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                resume: 'Please upload your resume'
            }));
        }
    };

    const isFormValid = () => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            phone: validateField('phone', formData.phone),
            resume: validateField('resume', formData.resume)
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error !== '');
    };

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (!isFormValid()) {
    //         toast.error('Please complete all required fields');
    //         return;
    //     }

    //     try {
    //         const formDataToSend = new FormData();
    //         formDataToSend.append('subject', `New Job Application: ${position || 'Position Not Specified'}`);
    //         formDataToSend.append('recipients', JSON.stringify([
    //             'wangyingni@canopywave.com',
    //             'liuuisj@canopywave.com'
    //         ]));
    //         formDataToSend.append('body', `
    //             New job application received:

    //             Position: ${position || 'Not Specified'}
    //             Name: ${formData.name}
    //             Email: ${formData.email}
    //             Phone: ${formData.phone}
    //         `.trim());

    //         // 添加简历文件作为附件
    //         if (formData.resume) {
    //             formDataToSend.append('attachment', formData.resume, formData.resume.name);
    //         }

    //         // 发送邮件
    //         const response = await fetch('', {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': 'Bearer alsfkjalsdkfjldksjfalksdjfljk13123',
    //                 'Content-Type': 'application/json',
    //                 // 不要设置 Content-Type，让浏览器自动设置正确的 multipart/form-data
    //             },
    //             mode: 'cors',
    //             body: formDataToSend
    //         });

    //         let errorMessage = 'Failed to submit application. Please try again later';

    //         if (!response.ok) {
    //             // 尝试获取详细的错误信息
    //             const contentType = response.headers.get('content-type');
    //             if (contentType && contentType.includes('application/json')) {
    //                 const errorData = await response.json();
    //                 errorMessage = errorData.message || errorData.error || errorMessage;
    //             } else {
    //                 const textError = await response.text();
    //                 errorMessage = textError || errorMessage;
    //             }
    //             throw new Error(errorMessage);
    //         }

    //         // 提交成功后的处理
    //         toast.success("Application submitted successfully!");
    //         router.push('/about/careers');
    //     } catch (error) {
    //         console.error('Error submitting application:', error);
    //         toast.error(error instanceof Error ? error.message : 'An unexpected error occurred');
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid()) {
            toast.error('Please complete required fields');
            return;
        }
        try {
            // 将简历文件转换为 Base64
            let resumeBase64 = '';
            if (formData.resume) {
                const reader = new FileReader();
                resumeBase64 = await new Promise((resolve, reject) => {
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = reject;
                    reader.readAsDataURL(formData.resume as File);
                });
            }

            // 发送邮件
            const response = await fetch('https://sequoia-paas.canopywave.io/api/v1/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer alsfkjalsdkfjldksjfalksdjfljk13123',
                    'Accept': 'application/json'
                },
                mode: 'cors', // 明确指定使用 CORS
                credentials: 'include', // 包含凭证（如果需要）
                body: JSON.stringify({
                    subject: `New Job Application: ${position || 'Position Not Specified'}`,
                    recipients: [
                        'wangyingni@canopywave.com',
                        'liuuisj@canopywave.com'
                    ],
                    body: `
                        New job application received:
                        
                        Position: ${position || 'Not Specified'}
                        Name: ${formData.name}
                        Email: ${formData.email}
                        Phone: ${formData.phone}
                        Message: ${formData.message}
                        
                        Resume: ${resumeBase64}
                    `.trim()
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || 'Failed to send email');
            }

            // 提交成功后的处理
            toast.success("Application submitted successfully!");
            router.push('/about/careers');
        } catch (error: any) {
            console.error('Error submitting application:', error);
            const errorMessage = error.response?.data?.error || "Failed to submit application. Please try again later";
            toast.error(errorMessage);
        }
    };

    return (
        <main className="min-h-screen relative text-gray-600">
            <Header />
            <div className="pt-[140px] pb-20 bg-[#F5F9F4]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-10">Job Application</h1>
                    </SlideUp>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className={`w-full px-4 py-2 border rounded-md focus:ring-[#8CC63F] focus:border-[#8CC63F] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    value={formData.name}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className={`w-full px-4 py-2 border rounded-md focus:ring-[#8CC63F] focus:border-[#8CC63F] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    value={formData.email}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className={`w-full px-4 py-2 border rounded-md focus:ring-[#8CC63F] focus:border-[#8CC63F] ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    value={formData.phone}
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Resume/CV <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        name="resume"
                                        required
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        id="resume-upload"
                                        aria-label="Upload Resume"
                                    />
                                    <label
                                        htmlFor="resume-upload"
                                        className={`w-full px-4 py-2 border rounded-md flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-200 ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                                    >
                                        {formData.resume ? formData.resume.name : 'Attach'}
                                    </label>
                                    {errors.resume && <p className="mt-1 text-sm text-red-500">{errors.resume}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8CC63F] focus:border-[#8CC63F]"
                                    onChange={handleInputChange}
                                    value={formData.message}
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#8CC63F] text-white px-6 py-3 rounded-md hover:bg-[#80B224] transition-colors duration-200"
                                >
                                    Submit application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}