"use client";
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function SolutionsPage() {
  // 添加表单状态管理
  const [formData, setFormData] = React.useState({
    message: '',
    name: '',
    email: '',
    lastName: '',
    company: '',
    marketing: false
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string | string[]) => {
    let error = '';
    // 对于普通字符串字段的处理
    if (typeof value === 'string') {
      if (!value.trim()) {
        error = 'Please complete this required field.';
      } else if (name === 'email' && !validateEmail(value)) {
        error = 'Email must be formatted correctly.';
      }
    }

    return error;
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const [errors, setErrors] = useState({
    message: '',
    name: '',
    email: '',
    lastName: '',
    company: '',
    marketing: ''
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isProductAutoPlaying, setIsProductAutoPlaying] = useState(true);
  const [productAutoPlayTimer, setProductAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
  const [mapAutoPlayTimer, setMapAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
  const [enterTimer, setEnterTimer] = useState<NodeJS.Timeout | null>(null);
  const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
  // 产品自动播放逻辑
  useEffect(() => {
    if (!isProductAutoPlaying) return;

    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => {
        // 从上至下循环：0 -> 1 -> 2 -> 3 -> 0
        return (prev + 1) % 4;
      });
    }, 4000); // 每4秒切换一次

    setProductAutoPlayTimer(timer);
    return () => {
      clearTimeout(timer);
    };
  }, [isProductAutoPlaying, currentImageIndex]);

  // 清理定时器的useEffect
  useEffect(() => {
    return () => {
      if (enterTimer) {
        clearTimeout(enterTimer);
      }
      if (autoPlayTimer) {
        clearTimeout(autoPlayTimer);
      }
      if (productAutoPlayTimer) {
        clearTimeout(productAutoPlayTimer);
      }
    };
  }, [enterTimer, autoPlayTimer, productAutoPlayTimer, mapAutoPlayTimer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields before submitting
    const newErrors = {
      message: '',
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      lastName: validateField('lastName', formData.lastName),
      company: validateField('company', formData.company),
      marketing: ''
    };

    if (Object.values(newErrors).some(err => err)) {
      setErrors(newErrors);
      // 阻止提交
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);

    try {
      const emailBody = `
                subject: GB200 with RoCEv2 Inquiry
                First Name: ${formData.name}
                Last Name: ${formData.lastName}
                Company Name: ${formData.company}
                Email: ${formData.email}
                message: ${formData.message}
                marketing:${formData.marketing}
                submitted from: ${window.location.href}
            `;

      const response = await axios.post(
        'https://sequoia-paas.canopywave.io/api/v1/send_email',
        {
          subject: 'GB200 with RoCEv2 Inquiry',
          // recipients: ['Lumi.Xiao@canopywave.com', 'yachal@canopywave.com', 'sales@canopywave.com'],
          recipients: ['wangyingni@canopywave.com'],
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
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully!');
        setFormData({ message: '', name: '', email: '', lastName: '', company: '', marketing: false });
        // 3秒后清除状态消息
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again.');
      // 5秒后清除错误消息
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen relative text-gray-600">
      <Head>
        <title>Best GPUs for Model Training Accelerate Your AI Projects | Canopy Wave</title>
        <meta name="description" content="Find the perfect GPUs for model training to accelerate your AI and machine learning models. Boost performance and reduce training time with top-tier GPUs." />
        <meta property="og:title" content="Best GPUs for Model Training Accelerate Your AI Projects | Canopy Wave" />
        {/* <link rel="preload" href="/solutions-banner.svg" as="image" type="image/svg+xml" /> */}
      </Head>
      <Header />
      <div className="w-full h-[520px] relative mt-[84px]">
        <video
          src={"/ai-model-training/model_training_banner.mp4"}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
            <SlideUp>
              <div className="flex items-center gap-2 mb-3">
                <img className="w-8 cursor-pointer hover:scale-110 transition-transform duration-200" src="/ai-model-training/banner_ic_aimodeltraining.png" alt="" />
                <span className="text-lg">AI model training</span>
              </div>
            </SlideUp>
            <SlideUp>
              <h1 className="text-4xl sm:text-5xl/[1.5] font-bold text-[#333333] text-left leading-[72]">
                Utilize <span className="text-[#80B224]">The Lastest And Most</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl/[1.5] font-bold text-[#333333] text-left">
                <span className="text-[#80B224]">Powerful GPUs</span> <span>To Maximize</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl/[1.5] font-bold text-[#333333] text-left">
                Your Training Speed
              </h1>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* AI Model training*/}
      <div className='bg-[#F9F9F9]'>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-12">
          <div className="w-full mx-auto mt-[40px] px-4 bg-[#FFF] rounded-2xl" >
            <div className="flex items-center justify-center p-5 pt-10 pb-8">
              <div className="text-center flex flex-col items-center mt-10 mb-10">
                <img src="/ai-model-training/ic_poweredby.png" className="w-12" alt="" />
                <p className="font-bold text-2xl mt-7">POWERED BY</p>
                <p className="font-bold text-2xl mb-7">PREMIUM GPU CLUSTERS</p>
                <p className="text-lg">Canopy Wave features &nbsp;NVIDIA&apos;s latest generation GPU clusters, fully covering the GB200, B200, H200, and H100 .</p>
              </div>
              <div className="w-px h-[268px] bg-[#80B224] m-4"></div>
              <div className="text-center flex flex-col items-center">
                <img src="/ai-model-training/ic_nearbaremetal.png" className="w-12" alt="" />
                <p className="font-bold text-2xl mt-7">NEAR-BARE-METAL</p>
                <p className="font-bold text-2xl mb-7">PERFORMANCE EXPERIENCE</p>
                <p className="text-lg">A dedicated, optimized virtual machine architecture minimizes performance overhead to near zero.</p>
              </div>
              <div className="w-px h-[268px] bg-[#80B224] m-4"></div>
              <div className="text-center flex flex-col items-center">
                <img src="/ai-model-training/ic_flexible.png" className="w-12" alt="" />
                <p className="font-bold text-2xl mt-7">FLEXIBLE</p>
                <p className="font-bold text-2xl mb-7">ON-DEMAND USAGE</p>
                <p className="text-lg">Nodes are available instantly, no waiting required; billing is precise to the minute based on actual usage time.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto pb-24 pt-4">
          <div className="flex items-center justify-center gap-60">
            <div className="text-center flex flex-col items-center space-y-3">
              <p className="text-5xl font-bold text-[#333]">99.99%</p>
              <p className="text-lg font-bold text-[#80B224]">Uptime</p>
            </div>
            <div className="text-center flex flex-col items-center space-y-3">
              <p className="text-5xl font-bold text-[#333]">0.1ms</p>
              <p className="text-lg font-bold text-[#80B224]">Latency</p>
            </div>
            <div className="text-center flex flex-col items-center space-y-3">
              <p className="text-5xl font-bold text-[#333]">3200Gbps</p>
              <p className="text-lg font-bold text-[#80B224]">Infiniband</p>
            </div>
          </div>
        </div>
      </div>

      {/* State-of-the-Art AI Infrastructure */}
      <div className="bg-[#F1EFED]">
        <SlideUp>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SlideUp>
              <h2 className="text-center text-5xl sm:text-5xl font-bold mb-14 text-[#333333]">
                State-of-the-art AI Infrastructure
              </h2>
            </SlideUp>

            <div className="grid grid-cols-2 lg:grid-cols-10 gap-8 items-center">
              {/* 右侧图片展示和切换按钮 */}
              <div
                className="lg:col-span-5 relative"
                onMouseEnter={() => setIsProductAutoPlaying(false)}
                onMouseLeave={() => setIsProductAutoPlaying(true)}
              >

                <div className="p-6 sm:ml-[55px] flex items-center justify-center h-[420px]">
                  <Image
                    src={`/ai-model-training/training-${currentImageIndex + 1}.png`}
                    onLoad={() => setImageLoaded(true)}
                    alt="NVIDIA GPUs"
                    width={490}
                    height={360}
                    className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>

                {/* 图片切换按钮 */}
                <div className="absolute lg:left-0 lg:top-[142px] lg:transform lg:-translate-y-1/2 lg:flex-col lg:space-y-4 lg:mt-16 
                                                    bottom-[-60px] transform -translate-x-1/2 lg:translate-x-0 lg:bottom-auto lg:left-auto 
                                                    flex lg:flex-col flex-row space-x-3 lg:space-x-0 lg:space-y-4">

                  {[1, 2, 3, 4].map((index) => {
                    return (
                      <div key={index} className="flex lg:flex-row flex-col items-center lg:space-x-4 space-x-0">
                        <button
                          onClick={() => {
                            setCurrentImageIndex(index - 1);
                            setIsProductAutoPlaying(false);
                            // 点击后3秒恢复自动播放
                            setTimeout(() => setIsProductAutoPlaying(true), 3000);
                          }}
                          onMouseEnter={() => {
                            setCurrentImageIndex(index - 1);
                            setIsProductAutoPlaying(false);
                          }}
                          onMouseLeave={() => setIsProductAutoPlaying(true)}
                          className={`w-[69px] h-[69px] lg:w-[79px] lg:h-[79px] w-[60px] h-[60px] rounded-3xl transition-all duration-200 relative overflow-hidden ${currentImageIndex === index - 1
                            ? 'border-[#76B900] shadow-lg border-2'
                            : 'border-gray-300 hover:border-gray-400'
                            }`}
                        >
                          <Image
                            src={`/ai-model-training/unselect-${index}.png`}
                            alt={`View ${index}`}
                            width={60}
                            height={60}
                            className="w-full h-full object-contain rounded-lg"
                          />
                          {currentImageIndex !== index - 1 && (
                            <div className="absolute inset-0 bg-gray-100 bg-opacity-50 rounded-lg"></div>
                          )}
                        </button>
                        <span className={`text-xs font-medium transition-all duration-200 whitespace-nowrap lg:block hidden ${currentImageIndex === index - 1
                          ? 'text-[#76B900] font-bold'
                          : 'text-gray-600'
                          }`}>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='lg:col-span-5 space-y-5 text-2xl font-bold text-[#333]'>
                <p>Delivering unmatched computing power for <br /> AI training</p>
                <p className='text-lg font-normal'>Canopy Wave provides high-performance GPU clusters powered by the latest NVIDIA GPUs, including GB200, B200, H200, and H100.</p>
              </div>
            </div>
          </div>
        </SlideUp>
        <SlideUp>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
              <div className='lg:col-span-1 space-y-5'>
                <p className='text-2xl font-bold text-[#333]'>High-Performance Networking for AI Workloads</p>
                <p className='text-lg text-[#333]'>
                  <span className='text-[#80B224]'>Maximize your AI training performance with our AI-optimized RDMA networking (utilizing InfiniBand and RoCEv2 technologies). </span>
                  <span>Featuring a non-blocking topology with up to 3200G bandwidth, our network enables millisecond-level latency and seamless communication between large-scale GPUs, accelerating your training and boosting throughput.</span>
                </p>
              </div>
              <div className='lg:col-span-1'>
                <img src="/ai-model-training/state_img_highperformance.png" alt="" />
              </div>
            </div>
          </div>
        </SlideUp>
        <SlideUp>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
              <div className='lg:col-span-1'>
                <img src="/ai-model-training/state_img_aiready.png" alt="" />
              </div>
              <div className='lg:col-span-1 space-y-5'>
                <p className='text-2xl font-bold text-[#333]'>AI-Ready Storage Architecture</p>
                <p className='text-lg text-[#333]'>
                  <span className='text-[#80B224]'>Our flexible storage infrastructure is designed to support diverse AI workloads. Choose between local storage, shared storage, or object storage based on your performance, scalability, and data access requirements. </span>
                  <span>Canopy Wave ensures your storage solution aligns perfectly with your workflow.</span>
                </p>
              </div>
            </div>
          </div>
        </SlideUp>
        <SlideUp>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <SlideUp>
              <h2 className="text-center text-5xl sm:text-5xl font-bold mb-6 text-[#333333]">
                Virtual Machines <br /> with Near-Bare-Metal Performance
              </h2>
            </SlideUp>
            <div className="flex justify-around mt-24">
              <div className="flex flex-col items-start space-y-6">
                <img src="/ai-model-training/virtual_ic_rapid.png" className="w-16" alt="" />
                <p className="font-bold text-2xl mt-7">Rapid Boot</p>
                <p className="text-lg">From launch command to full system<br />readiness in minutes—start your<br />journey seamlessly.</p>
              </div>
              <div className="flex flex-col items-start space-y-6">
                <img src="/ai-model-training/virtual_ic_ultral.png" className="w-16" alt="" />
                <p className="font-bold text-2xl mt-7">Ultra-Low Latency</p>
                <p className="text-lg">Reduces latency to 0.1ms using<br />lightweight compression (SDVoE) and<br />6G ULLC technologies.</p>
              </div>
              <div className="flex flex-col items-start space-y-6">
                <img src="/ai-model-training/virtual_ic_peak.png" className="w-16" alt="" />
                <p className="font-bold text-2xl mt-7">Peak Performance</p>
                <p className="text-lg">We utilize GPU-accelerated instances <br />and optimize the virtualization stack,<br />delivering performance comparable to<br /> physical hardware.</p>
              </div>
            </div>
          </div>
        </SlideUp>

        <SlideUp>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <SlideUp>
              <div className='space-y-5'>
                <h2 className="text-center text-5xl sm:text-5xl font-bold mb-6 text-[#333333]">
                  On-demand Flexibility<br />and Per-minute Billing
                </h2>

                <p>No waiting in line, no paying for idle time. Whether &nbsp;you&apos;re a team or company needing to scale up at critical moments or<br />wanting to avoid heavy capital investments in hardware, with Canopy Wave you can instantly launch powerful training nodes<br />and pay only for what you use, down to the minute.</p>
              </div>
            </SlideUp>
          </div>
        </SlideUp>
      </div>

      {/* Support Section */}
      <div className="bg-[#F9F9F9] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-3xl sm:text-[48px] font-black text-center mb-[40px]">Operation & Support</h2>
          </SlideUp>

          {/* Intelligent End-to-End Monitoring */}
          <div className="mb-[40px]">
            <SlideUp>
              <div className="relative rounded-lg overflow-hidden">
                <div className="w-full relative">
                  <Image
                    src="/solutions/networking-hardware/gb200-with-rocev2/support_bg_intelligent.png"
                    alt="Intelligent End-to-End Monitoring"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 items-center hidden md:flex">
                    <div className="ml-auto max-w-md text-left mr-6 text-[#333333] p-4 rounded-md">
                      <h3 className="text-[20px] font-bold mb-4">Intelligent End-to-End Monitoring</h3>
                      <div className="mb-4">
                        <h4 className="font-bold mb-2 text-[18px]">How</h4>
                        <p className="text-[18px] text-[#666666]">A unified platform integrates deep telemetry from all components (GPU, NVLink, Network).</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-[18px]">Benefit</h4>
                        <p className="text-[18px] text-[#666666]">AI-driven analytics proactively detect anomalies and bottlenecks before they impact training jobs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden mt-4 px-4">
                <h3 className="text-[20px] font-bold mb-4">Intelligent End-to-End Monitoring</h3>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-[18px]">How</h4>
                  <p className="text-[#666666] text-[18px]">A unified platform integrates deep telemetry from all components (GPU, NVLink, Network).</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-[18px]">Benefit</h4>
                  <p className="text-[#666666] text-[18px]">AI-driven analytics proactively detect anomalies and bottlenecks before they impact training jobs.</p>
                </div>
              </div>
            </SlideUp>
          </div>

          {/* 24/7 Proactive Expert Support */}
          <div>
            <SlideUp>
              <div className="relative rounded-lg overflow-hidden">
                <div className="w-full relative">
                  <Image
                    src="/solutions/networking-hardware/gb200-with-rocev2/support_bg_247.png"
                    alt="24/7 Proactive Expert Support"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 items-center hidden md:flex">
                    <div className="max-w-md text-left ml-[24px] text-[#333333] rounded-md">
                      <h3 className="text-[20px] font-bold mb-4">24/7 Proactive Expert Support</h3>
                      <div className="mb-4">
                        <h4 className="font-bold mb-2 text-[18px]">How</h4>
                        <p className="text-[18px] text-[#666666]">Engineers with deep experience with NVIDIA GPUs and software provide constant, around-the-clock system monitoring.</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-[18px]">Benefit</h4>
                        <p className="text-[18px] text-[#666666]">Immediate remote intervention ensures maximum uptime and uninterrupted training.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden mt-4 px-4">
                <h3 className="text-[20px] font-bold mb-4 text-black">24/7 Proactive Expert Support</h3>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-[18px]">How</h4>
                  <p className="text-[#666666] text-[18px]">Engineers with deep experience with NVIDIA GPUs and software provide constant, around-the-clock system monitoring.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-[18px]">Benefit</h4>
                  <p className="text-[#666666] text-[18px]">Immediate remote intervention ensures maximum uptime and uninterrupted training.</p>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Resource Section */}
      <div className="bg-[#F9F9F9] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-[48px] font-black text-[#333333] mb-[40px]">
                Resources
              </h2>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideUp>
              <div className="bg-[#ECF2E9] rounded-3xl hover:shadow-lg transition-shadow overflow-hidden h-full">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-[20px] font-bold text-[#333333] mb-3">Tutorials</h3>
                  <p className="text-[#666666] text-[16px] mb-8 flex-grow">
                    How to Run the GPT-OSS Locally on a Canopy Wave VM
                  </p>
                  <div className="mt-auto">
                    <button className="border-2 border-[#80B224] font-bold text-[#80B224] hover:bg-[#80B224] hover:text-white hover:scale-105 hover:shadow-lg px-[18px] py-[8px] rounded-full text-sm transition-all duration-300" onClick={() => window.location.href = '/resources/tutorials/how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm'}>
                      Read More&gt;
                    </button>
                  </div>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="bg-[#ECF2E9] rounded-3xl hover:shadow-lg transition-shadow overflow-hidden h-full">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-[20px] font-bold text-[#333333] mb-3">Case Studies</h3>
                  <p className="text-[#666666] text-[16px] mb-8 flex-grow">
                    Accelerating Protein Engineering with Canopy &nbsp;Wave&apos;s GPUaaS
                  </p>
                  <div className="mt-auto">
                    <button className="border-2 border-[#80B224] font-bold text-[#80B224] hover:bg-[#80B224] hover:text-white hover:scale-105 hover:shadow-lg px-[18px] py-[8px] rounded-full text-sm transition-all duration-300" onClick={() => window.location.href = '/resources/case-study'}>
                      Read More&gt;
                    </button>
                  </div>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="bg-[#ECF2E9] rounded-3xl hover:shadow-lg transition-shadow overflow-hidden h-full">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-[20px] font-bold text-[#333333] mb-3">Docs</h3>
                  <p className="text-[#666666] text-[16px] mb-8 flex-grow">
                    Canopy Wave GPU Cluster Hardware Product Portfolio
                  </p>
                  <div className="mt-auto">
                    <button className="border-2 border-[#80B224] font-bold text-[#80B224] hover:bg-[#80B224] hover:text-white hover:scale-105 hover:shadow-lg px-[18px] py-[8px] rounded-full text-sm transition-all duration-300" onClick={() => window.location.href = '/resources/docs/products/canopy-wave-gpu'}>
                      Read More&gt;
                    </button>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Ready to Get Started Section */}
      <div className="bg-[#F9F9F9] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full bg-cover bg-center sm:min-h-[770px]"
            style={{
              backgroundImage: 'url("/solutions/networking-hardware/gb200-with-rocev2/ready_bg copy.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
            <div className="inset-0 p-6 sm:absolute sm:p-12 pb-24">
              <SlideUp>
                <h2 className="text-3xl sm:text-[48px] font-black text-[#333333] mb-8 text-center">Ready to get started?</h2>
              </SlideUp>
              <SlideUp>
                <p className="text-[#333333] mb-8 text-center text-l">
                  Have a question about solution that you are interested in? Fill in the form and we’ll respond to you promptly.
                </p>
              </SlideUp>
              <SlideUp>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                        First Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-transparent bg-white ${errors.name ? 'border-red-500' : ''}`}
                        placeholder=""
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#333333] mb-2">
                        Last Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName || ''}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-transparent bg-white ${errors.lastName ? 'border-red-500' : ''}`}
                        placeholder=""
                      />
                      {errors.lastName && (
                        <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#333333] mb-2">
                        Company Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company || ''}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-transparent bg-white ${errors.company ? 'border-red-500' : ''}`}
                        placeholder=""
                      />
                      {errors.company && (
                        <span className="text-red-500 text-xs mt-1">{errors.company}</span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-transparent bg-white ${errors.email ? 'border-red-500' : ''}`}
                        placeholder=""
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <label htmlFor="message" className="text-sm font-medium text-[#333333]">
                        &nbsp;What&apos;s  Your Project Interest, or How We Can Best Help You?
                      </label>
                      <div className="text-xs text-gray-400">
                        0/5000
                      </div>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      // onBlur={handleBlur}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-transparent resize-none bg-white placeholder:text-sm ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Briefly outline your interest or project requirements, such as project application scenario, involved devices, scales, budget, and other information."
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1">{errors.message}</span>
                    )}
                  </div>

                  <div className="flex items-start space-x-3 mb-6 sm:mb-10">
                    <input
                      type="checkbox"
                      id="marketing"
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleInputChange}
                      // onBlur={handleBlur}
                      className={`mt-1 h-4 w-4 text-[#8CC63F] focus:ring-[#8CC63F] border-gray-300 rounded ${errors.marketing ? 'border-red-500' : ''}`}
                    />
                    <label htmlFor="marketing" className="text-sm text-[#666666] leading-5">
                      I agree to receive marketing communications from Canopy Wave.
                    </label>
                    {errors.marketing && (
                      <span className="text-red-500 text-xs mt-1">{errors.marketing}</span>
                    )}
                  </div>

                  {/* 状态消息显示 - 在屏幕右上方显示 */}
                  {submitStatus !== 'idle' && (
                    <div className={`fixed top-[63px] right-4 max-w-md p-4 rounded-lg text-center transition-all duration-300 z-50 shadow-lg ${submitStatus === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                      <div className="flex items-center justify-center gap-2">
                        {submitStatus === 'success' ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        )}
                        <span className="font-medium">{statusMessage}</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#8CC63F] hover:bg-[#7ab32f] px-12 py-3 text-white font-medium rounded-3xl transition-colors"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </div>
                </form>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
