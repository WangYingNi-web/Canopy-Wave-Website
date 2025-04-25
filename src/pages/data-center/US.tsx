"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function USDataCenter() {
    return (
        <main className="min-h-screen relative">
            <Header />
            <div className="bg-gray-50 py-12 sm:py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <h1 className="text-3xl sm:text-5xl font-bold text-[#8CC63F] mb-8">US Data Center</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Our US data center provides high-performance and reliable services to support your business needs.
                    </p>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Location</h2>
                        <p className="text-gray-600 mb-4">California, USA</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Services</h2>
                        <p className="text-gray-600 mb-4">Offering cloud computing, data storage, and networking services.</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                        <p className="text-gray-600">For more information, please contact <a href="mailto:info@canopywave.com" className="text-[#8CC63F]">info@canopywave.com</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}