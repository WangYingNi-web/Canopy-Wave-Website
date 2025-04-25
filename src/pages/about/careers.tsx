"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Careers() {
    return (
        <main className="min-h-screen relative">
            <Header />
            <div className="w-full h-[600px] relative">
                <div className="absolute inset-0 bg-[#80B224]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h1 className="text-6xl font-bold text-white mb-6">CAREERS</h1>
                    <p className="text-white text-lg max-w-3xl mx-auto px-4">
                        Our diverse, expanding team is always looking for new talent. See our open in-office, hybrid, and remote tech jobs—and apply to your perfect fit today.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-4xl font-bold mb-6">
                    WE ARE IN THE EARLY STAGE OF BUILDING AN ENERGETIC, FAST-MOVING, AND FUN TEAM
                </h2>
                <p className="text-gray-600 mb-16 max-w-4xl">
                    Canopy Wave is set to enable AI cloud services by deploying and operating hundreds of AI data centers worldwide, close to the end users and enterprises. The team is built by an experienced team with visionary leadership, well funded, and guided by industry leaders
                </p>

                <h3 className="text-xl text-gray-500 mb-8">here&apos;s-what-working-with-us-is-like</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
                        <h4 className="font-semibold mb-4 group-hover:text-white">WORK CALMLY</h4>
                        <p className="text-gray-600 group-hover:text-white">
                            Work-life balance is important for us, so we keep things calm and balanced by offering flexible work schedules.
                            Work-life balance is important for us, so we keep things calm and balanced by offering flexible work schedules.
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
                        <h4 className="font-semibold mb-4 group-hover:text-white">WORK CALMLY</h4>
                        <p className="text-gray-600 group-hover:text-white">
                            Work-life balance is important for us, so we keep things calm and balanced by offering flexible work schedules.
                            Work-life balance is important for us, so we keep things calm and balanced by offering flexible work schedules.
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
                        <h4 className="font-semibold mb-4 group-hover:text-white">WORK CALMLY</h4>
                        <p className="text-gray-600 group-hover:text-white">
                            Work-life balance is important for us, so we keep things calm and balanced by offering flexible work schedules.
                            Work-life balance is important for us, so we keep things calm and balanced by offering flexible work schedules.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-4xl font-bold mb-6">OPEN POSITIONS</h2>
                <p className="text-gray-600 mb-12 max-w-4xl">
                    Experience comes in many forms, many skills are transferable, and passion goes a long way. If your experience is this close to what we&apos;re looking for, consider applying. We know that diversity of thought makes for the best problem-solving and creative thinking, which is why we&apos;re dedicated to adding new perspectives to the team and encourage everyone to apply.
                </p>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300">
                        <div className="flex-1">
                            <span className="text-sm text-[#8CC63F] mb-2 block">ENGINEERING</span>
                            <h3 className="font-semibold">Software Engineer, DevOp</h3>
                        </div>
                        <div className="text-gray-600">Santa Clara, CA</div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300">
                        <div className="flex-1">
                            <span className="text-sm text-[#8CC63F] mb-2 block">ENGINEERING</span>
                            <h3 className="font-semibold">Software Engineer, Kubernetes</h3>
                        </div>
                        <div className="text-gray-600">Remote (United States)</div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300">
                        <div className="flex-1">
                            <span className="text-sm text-[#8CC63F] mb-2 block">ENGINEERING</span>
                            <h3 className="font-semibold">Software Engineer, Infrastructure</h3>
                        </div>
                        <div className="text-gray-600">Santa Clara, CA</div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300">
                        <div className="flex-1">
                            <span className="text-sm text-[#8CC63F] mb-2 block">ENGINEERING</span>
                            <h3 className="font-semibold">Software Engineer, Front-end</h3>
                        </div>
                        <div className="text-gray-600">Santa Clara, CA</div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-10 sm:mb-12">COME BUILD THE FUTURE WITH US</h2>
                    <p className="text-gray-600 mb-8">
                        Our diverse, expanding team is always looking for new talent. See our open in-office, hybrid, and remote tech jobs—and apply to your perfect fit today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="bg-[#8CC63F] text-white px-8 py-3 rounded-lg hover:bg-[#80B224] transition-all duration-300">
                            Get started
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}