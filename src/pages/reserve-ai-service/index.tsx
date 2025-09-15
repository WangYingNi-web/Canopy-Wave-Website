"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { toast } from 'react-hot-toast';
import SlideUp from '@/components/slide';
import type { FormEvent, ChangeEvent } from 'react';

export default function Reserve() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        enterprise: string;
        coreDemand: string;
        industry: string;
    }>({
        name: '',
        email: '',
        enterprise: '',
        coreDemand: '',
        industry: ''
    });

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        enterprise?: string;
        coreDemand?: string;
        industry?: string;
    }>({});

    // 行业选项
    const industries = [
        'Technology',
        'Finance',
        'Healthcare',
        'Education',
        'Manufacturing',
        'Retail',
        'Automotive',
        'Energy',
        'Government',
        'Other'
    ];

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'name':
                if (!value) return 'Please complete this required field.';
                return '';
            case 'email':
                if (!value) return 'Please complete this required field.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return 'Email must be formatted correctly.';
                }
                return '';
            default:
                return '';
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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



    const isFormValid = () => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email)
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error !== '');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid()) {
            toast.error('Please complete required fields');
            return;
        }

        setIsLoading(true);

        try {
            const requestBody = {
                subject: `New API Reservation from ${formData.name}`,
                recipients: ['Lumi.Xiao@canopywave.com', 'yachal@canopywave.com', 'sales@canopywave.com'],
                body: `New API Reservation Details:

Name: ${formData.name}
Email: ${formData.email}
Enterprise: ${formData.enterprise}
Core Demand: ${formData.coreDemand}
Industry: ${formData.industry}
`
            };

            const response = await fetch('https://sequoia-paas.canopywave.io/api/v1/send_email', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer alsfkjalsdkfjldksjfalksdjfljk13123',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || 'Failed to send email');
            }

            if (response.status === 200) {
                toast.success("Reservation submitted successfully!");
                router.push('/test');
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.error || "Failed to submit reservation. Please try again later";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen relative text-gray-600">
            <Head>
                <title>Canopy Wave - API Reservation</title>
            </Head>
            <Header />
            <div className="pt-[140px] pb-20 bg-[#F5F7F4]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Reserve AI Service</h1>
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
                                    Enterprise
                                </label>
                                <input
                                    type="text"
                                    name="enterprise"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8CC63F] focus:border-[#8CC63F]"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    value={formData.enterprise}
                                    placeholder="Enter your company name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Core Demand
                                </label>
                                <textarea
                                    name="coreDemand"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8CC63F] focus:border-[#8CC63F]"
                                    onChange={handleInputChange}
                                    value={formData.coreDemand}
                                    placeholder="Describe your core requirements and expected AI solutions"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Industry
                                </label>
                                <select
                                    name="industry"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8CC63F] focus:border-[#8CC63F]"
                                    onChange={handleInputChange}
                                    value={formData.industry}
                                >
                                    <option value="">Select your industry</option>
                                    {industries.map((industry) => (
                                        <option key={industry} value={industry}>
                                            {industry}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#8CC63F] text-white px-6 py-3 rounded-md hover:bg-[#80B224] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Submitting...
                                        </div>
                                    ) : (
                                        'Submit Reservation'
                                    )}
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