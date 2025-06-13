"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import { useRouter } from 'next/router';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function Careers() {
    const router = useRouter();

    return (
        <main className="min-h-screen relative text-gray-600">
            <Head>
                <title>Canopy Wave - Explore Our Open Positions</title>
            </Head>
            <Header />
            {/* Hero Section */}
            <div className="w-full h-[490px] relative mt-[84px]">
                <Image
                    src="/about/banner.svg"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px]">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-6xl font-black text-[#80B224] text-center">
                                Careers
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-gray-600 text-l mt-8 text-center">
                                Our growing, dynamic team is always looking for fresh talent.Explore our in-office, hybrid, and remote <br /> opportunities across tech roles - and apply to the role that aligns with your skills and goals
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <div className="bg-[#F5F7F4] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-10">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6">
                            Even if you don’t meet every <br /> requirement, we’d love to hear from you
                        </h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-16 max-w-4xl">
                            We are building a global network of AI data centers to power next generation cloud services. With hundreds of deployments planned worldwide—strategically located near end users and enterprises—we are positioned to deliver low-latency, high-performance AI infrastructure at scale. Backed by visionary leadership, deep industry expertise, and strong funding, our team is guided by pioneers shaping the future of AI computing
                        </p>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/healthcare.svg"
                                    alt="Healthcare"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                    style={{ width: '36px', height: '36px' }}

                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Healthcare</h4>
                            <p className="text-gray-600 group-hover:text-white text-l">
                                Our employees have access to high-quality medical, dental, and vision coverage
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/insurance.svg"
                                    alt="Insurance"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                    style={{ width: '36px', height: '36px' }}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Insurance</h4>
                            <p className="text-gray-600 group-hover:text-white text-l">
                                We offer top-tier life insurance as well as short-term and long-term disability insurance to our employees
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/lunch.svg"
                                    alt="Catered Lunch"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                    style={{ width: '36px', height: '36px' }}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Catered lunch</h4>
                            <p className="text-gray-600 group-hover:text-white text-l">
                                Come together and mangia. We provide catered lunches in office and at our data centers from various local vendors
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/pto.svg"
                                    alt="Flexible PTO"
                                    width={36}
                                    height={36}
                                    className='svg-gray'
                                    style={{ width: '36px', height: '36px' }}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Flexible PTO</h4>
                            <p className="text-gray-600 group-hover:text-white text-l">
                                We believe in a healthy work-life balance. Take the time you need to recharge with flexible PTO
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9F9F9] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-10">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6">Open positions</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-12 max-w-4xl">
                            Experience comes in many forms, many skills are transferable, and passion goes a long way. If your experience is this close to what we&apos;re looking for, consider applying. We know that diversity of thought makes for the best problem-solving and creative thinking, which is why we&apos;re dedicated to adding new perspectives to the team and encourage everyone to apply
                        </p>
                    </SlideUp>
                    <div className="space-y-4">
                        <div onClick={() => router.push('/about/job-application?position=devops')} className="flex items-center justify-between p-6 bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200 cursor-pointer">
                            <div className="flex-1">
                                <span className="text-l text-[#8CC63F] mb-2 block">ENGINEERING</span>
                                <h3 className="font-semibold">Software Engineer, DevOp</h3>
                            </div>
                            <div className="text-gray-600">Santa Clara, CA</div>
                        </div>

                        <div onClick={() => router.push('/about/job-application?position=kubernetes')} className="flex items-center justify-between p-6 bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200 cursor-pointer">
                            <div className="flex-1">
                                <span className="text-l text-[#8CC63F] mb-2 block">ENGINEERING</span>
                                <h3 className="font-semibold">Software Engineer, Kubernetes</h3>
                            </div>
                            <div className="text-gray-600">Remote (United States)</div>
                        </div>
                        <div onClick={() => router.push('/about/job-application?position=infrastructure')} className="flex items-center justify-between p-6 bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200 cursor-pointer">
                            <div className="flex-1">
                                <span className="text-l text-[#8CC63F] mb-2 block">ENGINEERING</span>
                                <h3 className="font-semibold">Software Engineer, Infrastructure</h3>
                            </div>
                            <div className="text-gray-600">Santa Clara, CA</div>
                        </div>

                        <div onClick={() => router.push('/about/job-application?position=frontend')} className="flex items-center justify-between p-6 bg-gray-50 hover:bg-[#F5F7F4] rounded-lg transition-all duration-300 border-b border-gray-200 cursor-pointer">
                            <div className="flex-1">
                                <span className="text-l text-[#8CC63F] mb-2 block">ENGINEERING</span>
                                <h3 className="font-semibold">Software Engineer, Front-end</h3>
                            </div>
                            <div className="text-gray-600">Santa Clara, CA</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative bg-[#F9F9F9] border border-gray-200 py-16 sm:py-32 overflow-hidden">
                <BackgroundTransition
                    defaultImage="/contact-section1.webp"
                    activeImage="/contact-section2.webp"
                    className="w-full h-full absolute inset-0"
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideUp>
                        <h2 className="text-3xl sm:text-4xl font-black mb-10 sm:mb-8">Work with us</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-8">
                            Ready to shape the future? Join Canopy Wave and help drive the future of technology with a team redefining what's possible
                        </p>
                    </SlideUp>
                    <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="bg-[#8CC63F] text-white px-4 py-2 rounded-lg hover:bg-[#80B224] transition-all duration-300" onClick={() => router.push('/about/job-application?position=infrastructure')}>
                            Open positions
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}