"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';

export default function Careers() {
    return (
        <main className="min-h-screen relative">
            <Header />
            {/* Hero Section */}
            <div className="w-full h-[720px] relative mt-[84px]">
                <Image
                    src="/careers.svg"
                    alt="cpu-nodes"
                    layout='fill'
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                        <SlideUp>
                            <h1 className="text-5xl sm:text-7xl font-bold text-white mt-16 text-center">
                                Careers
                            </h1>
                        </SlideUp>
                        <SlideUp>
                            <p className="text-white text-lg mt-8 text-center">
                                Our diverse, expanding team is always looking for new talent. See our open in-office, hybrid, and remote tech jobs—and apply to your perfect fit today
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>

            <div className="bg-[#F5F9F4] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-10">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            We are in the early stage of building an energetic, <br /> fast-moving, and fun team
                        </h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-16 max-w-4xl">
                            Canopy Wave is set to enable AI cloud services by deploying and operating hundreds of AI data centers worldwide, close to the end users and enterprises. The team is built by an experienced team with visionary leadership, well funded, and guided by industry leaders
                        </p>
                    </SlideUp>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/healthcare.svg"
                                    alt="Healthcare"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Healthcare</h4>
                            <p className="text-gray-600 group-hover:text-white">
                                Our employees have access to high-quality medical, dental, and vision coverage
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/insurance.svg"
                                    alt="Insurance"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Insurance</h4>
                            <p className="text-gray-600 group-hover:text-white">
                                We offer top-tier life insurance as well as short-term and long-term disability insurance to our employees
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/lunch.svg"
                                    alt="Catered Lunch"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Catered lunch</h4>
                            <p className="text-gray-600 group-hover:text-white">
                                Come together and mangia. We provide catered lunches in office and at our data centers from various local vendors
                            </p>
                        </div>

                        <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
                            <div className="w-16 h-16">
                                <Image
                                    src="/about/pto.svg"
                                    alt="Flexible PTO"
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <h4 className="font-bold mb-4 group-hover:text-white">Flexible PTO</h4>
                            <p className="text-gray-600 group-hover:text-white">
                                We believe in a healthy work-life balance. Take the time you need to recharge with flexible PTO
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9F9F9] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-10">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Open positions</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-12 max-w-4xl">
                            Experience comes in many forms, many skills are transferable, and passion goes a long way. If your experience is this close to what we&apos;re looking for, consider applying. We know that diversity of thought makes for the best problem-solving and creative thinking, which is why we&apos;re dedicated to adding new perspectives to the team and encourage everyone to apply
                        </p>
                    </SlideUp>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-6 bg-gray-50 hover:bg-[#F5F9F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex-1">
                                <span className="text-sm text-[#8CC63F] mb-2 block">ENGINEERING</span>
                                <h3 className="font-semibold">Software Engineer, DevOp</h3>
                            </div>
                            <div className="text-gray-600">Santa Clara, CA</div>
                        </div>

                        <div className="flex items-center justify-between p-6 bg-gray-50 hover:bg-[#F5F9F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex-1">
                                <span className="text-sm text-[#8CC63F] mb-2 block">ENGINEERING</span>
                                <h3 className="font-semibold">Software Engineer, Kubernetes</h3>
                            </div>
                            <div className="text-gray-600">Remote (United States)</div>
                        </div>

                        <div className="flex items-center justify-between p-6 bg-gray-50 hover:bg-[#F5F9F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex-1">
                                <span className="text-sm text-[#8CC63F] mb-2 block">ENGINEERING</span>
                                <h3 className="font-semibold">Software Engineer, Infrastructure</h3>
                            </div>
                            <div className="text-gray-600">Santa Clara, CA</div>
                        </div>

                        <div className="flex items-center justify-between p-6 bg-gray-50 hover:bg-[#F5F9F4] rounded-lg transition-all duration-300 border-b border-gray-200">
                            <div className="flex-1">
                                <span className="text-sm text-[#8CC63F] mb-2 block">ENGINEERING</span>
                                <h3 className="font-semibold">Software Engineer, Front-end</h3>
                            </div>
                            <div className="text-gray-600">Santa Clara, CA</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-[#F9F9F9] py-12 sm:py-24 border border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <SlideUp>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-12">Come build the future with us</h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-gray-600 mb-8">
                            Our diverse, expanding team is always looking for new talent. See our open in-office, hybrid, and remote tech jobs—and apply to your perfect fit today
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <button
                                className="bg-[#8CC63F] text-white px-8 py-3 rounded-lg hover:bg-[#80B224] transition-all duration-300"
                                onClick={() => window.location.href = '/contact'}
                            >
                                Get started
                            </button>
                        </div>
                    </SlideUp>
                </div>
            </div>

            <Footer />
        </main>
    );
}