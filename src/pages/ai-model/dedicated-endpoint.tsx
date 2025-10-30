"use client";

import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import BackgroundTransition from '@/components/BackgroundTransition';
import { toast } from 'react-hot-toast';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  modelInterests: string[]; // required checkboxes
  description: string;
  otherDescription: string;
  marketing: boolean;
}

export default function DedicatedEndpoint() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    modelInterests: [],
    description: '',
    otherDescription: '',
    marketing: false,
  });

  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    modelInterests: '',
    description: '',
    otherDescription: '',
    marketing: '',
  });

  const maxDescription = 5000;

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateField = (name: keyof FormData, value: string | boolean | string[]) => {
    let error = '';

    if (name === 'marketing') {
      return '';
    }

    if (name === 'modelInterests') {
      const arr = Array.isArray(value) ? value : [];
      if (arr.length === 0) error = 'Please select at least one model.';
      return error;
    }

    if (typeof value === 'string') {
      if (['firstName', 'lastName', 'company', 'email'].includes(name)) {
        if (!value.trim()) error = 'Please complete this required field.';
      }
      if (name === 'email' && value.trim() && !validateEmail(value)) {
        error = 'Email must be formatted correctly.';
      }
      if (name === 'description' && value.length > maxDescription) {
        error = `Description must be less than ${maxDescription} characters.`;
      }
    }

    return error;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (name === 'modelInterests' && type === 'checkbox') {
      const val = String(value);
      const prevSelected = formData.modelInterests;
      const next = checked ? [...prevSelected, val] : prevSelected.filter((v: string) => v !== val);
      setFormData(prev => ({ ...prev, modelInterests: next }));
      setErrors(prevErr => ({
        ...prevErr,
        modelInterests: next.length === 0 ? 'Please select at least one model.' : ''
      }));
      return;
    }

    const key = name as keyof FormData;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [key]: newValue }));
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const key = name as keyof FormData;
    const error = validateField(key, type === 'checkbox' ? checked : value);
    setErrors(prev => ({ ...prev, [key]: error }));
  };

  const isFormValid = () => {
    const newErrors: Record<keyof FormData, string> = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      company: validateField('company', formData.company),
      email: validateField('email', formData.email),
      modelInterests: validateField('modelInterests', formData.modelInterests),
      description: '',
      otherDescription: '',
      marketing: '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(err => err !== '');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setLoading(true);
    try {
      const interests = formData.modelInterests.map(m =>
        m.toLowerCase() === 'other' && formData.otherDescription.trim()
          ? `Other: ${formData.otherDescription.trim()}`
          : m
      );
      const interestsDisplay = interests.length ? interests.join(', ') : 'N/A';
      const emailBody = `Reserve Your Dedicated Endpoint\n\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nCompany: ${formData.company}\nEmail: ${formData.email}\nInterested Models: ${interestsDisplay}\nMarketing Opt-in: ${formData.marketing ? 'Yes' : 'No'}\n\nRequirements:\n${formData.description}\nSubmitted From: ${typeof window !== 'undefined' ? window.location.href : ''}`;
      console.log(emailBody,'emailBody');
      
      const response = await fetch('https://sequoia-paas.canopywave.io/api/v1/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer alsfkjalsdkfjldksjfalksdjfljk13123',
        },
        body: JSON.stringify({
          subject: 'Dedicated Endpoint Reservation',
          recipients: ['Lumi.Xiao@canopywave.com', 'yachal@canopywave.com', 'sales@canopywave.com'],
          body: emailBody,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast.success('Submitted successfully');
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        modelInterests: [],
        description: '',
        otherDescription: '',
        marketing: false,
      });
    } catch (err: any) {
      toast.error(err?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  const modelOptions = [
    { value: 'Llama', label: 'Llama' },
    { value: 'Qwen', label: 'Qwen' },
    { value: 'DeepSeek', label: 'DeepSeek' },
    { value: 'Kimi', label: 'Kimi' },
    { value: 'GPT-OSS', label: 'GPT-OSS' },
    { value: 'Other', label: 'other' },
  ];

  return (
    <main className="min-h-screen relative text-[#333333]">
      <Head>
        <title>Reserve Your Dedicated Endpoint</title>
      </Head>
      <Header />


      {/* Form Section */}
      <div className="bg-[#F9F9F9] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative w-full bg-cover bg-center sm:min-h-[1040px]"
            style={{
              backgroundImage: 'url("/ai-model/library_list_bg.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="inset-0 p-6 sm:absolute sm:p-12 pb-24">
              <SlideUp>
                <h2 className="text-2xl sm:text-[48px] font-black text-[#333333] mb-8 text-center leading-[1.2]">Reserve Your Dedicated Endpoint</h2>
              </SlideUp>
              <form onSubmit={handleSubmit} noValidate>
                {/* fields grid */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2 font-semibold">First Name<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-xl focus:ring-[#8CC63F] focus:border-[#8CC63F] ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2 font-semibold">Last Name<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-xl focus:ring-[#8CC63F] focus:border-[#8CC63F] ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2 font-semibold">Company Name<span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-xl focus:ring-[#8CC63F] focus:border-[#8CC63F] ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2 font-semibold">Email<span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-xl focus:ring-[#8CC63F] focus:border-[#8CC63F] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* model interest radio group */}
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-[#333333] mb-3">which model are you interested in?<span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {modelOptions.map(opt => (
                        <div key={opt.value} className="space-y-2">
                          <label className={`flex items-center justify-between border border-gray-200 rounded-xl px-3 py-3 transition-colors ${formData.modelInterests.includes(opt.value) ? 'bg-[#80B224] hover:bg-[#80B224]' : 'bg-white hover:bg-[#C6E893]'}`}>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                name="modelInterests"
                                value={opt.value}
                                checked={formData.modelInterests.includes(opt.value)}
                                onChange={handleInputChange}
                                className="peer sr-only"
                              />
                              <span className="mr-3 inline-block h-5 w-5 rounded-full border-2 border-[#80B224] bg-transparent relative peer-checked:border-white after:content-[''] after:absolute after:inset-1 after:rounded-full after:bg-transparent peer-checked:after:bg-white"></span>
                            </div>
                            <span className={`text-sm ${formData.modelInterests.includes(opt.value) ? 'text-white' : 'text-[#333333]'}`}>{opt.label}</span>
                          </label>
                          {opt.value.toLowerCase() === 'other' && formData.modelInterests.some(v => v.toLowerCase() === 'other') && (
                            <textarea
                              name="otherDescription"
                              rows={4}
                              value={formData.otherDescription}
                              onChange={handleInputChange}
                              onBlur={handleBlur}
                              placeholder="Please write the models you are interested in."
                              className="w-full px-4 py-2 border rounded-2xl text-sm focus:ring-[#8CC63F] focus:border-[#8CC63F]"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    {errors.modelInterests && <p className="mt-1 text-xs text-red-500">{errors.modelInterests}</p>}
                  </div>

                  {/* description */}
                  <div className="mt-6">
                    <div className="flex items-end justify-between mb-2">
                      <label className="block text-sm font-medium text-[#333333] font-semibold">Please briefly describe your requirements</label>
                      <span className="text-xs text-gray-500">{formData.description.length}/{maxDescription}</span>
                    </div>
                    <textarea
                      name="description"
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Briefly outline your interest or project requirements, such as project backcalation scenario, involved devices, scales, budget, and other information."
                      className={`w-full px-4 py-1 border rounded-2xl text-sm focus:ring-[#8CC63F] focus:border-[#8CC63F] ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
                  </div>

                  {/* marketing opt-in */}
                  <div className="mt-4">
                    {/* marketing opt-in */}
                    <label className="flex items-center text-sm text-[#333333]">
                      <input
                        type="checkbox"
                        name="marketing"
                        checked={formData.marketing}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="h-4 w-4 text-[#8CC63F] focus:ring-[#8CC63F] border-gray-300 rounded"
                      />
                      <span className="ml-2">I agree to receive marketing communications from Canopy Wave</span>
                    </label>
                    {/* marketing is optional; no error message */}
                  </div>

                  {/* submit */}
                  <div className="mt-8 text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-10 py-2 rounded-3xl text-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}