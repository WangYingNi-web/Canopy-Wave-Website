"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Learn more about our company, our vision, and the team that makes it all happen.
        </p>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
        <p className="text-gray-600 mb-6">
          Our company is dedicated to providing cutting-edge solutions in the field of AI and cloud computing. We strive to deliver the best services to our clients worldwide.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image src="/company.jpg" alt="Company Image" width={400} height={300} className="rounded-lg" />
          <p className="text-gray-600">
            Canopy Wave is dedicated to helping Enterprise optimize their AI workload budget, whether for development, fine-tuning, or inferencing. We own and operate thousands of H100/H200 GPUs, running with renewable energy with the cutting-edge management infrastructure to provide users high performance and reliable GPU resources.
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of AI-driven solutions that empower businesses to achieve their goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To innovate and deliver high-quality products and services that enhance the capabilities of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Image src="/team1.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="font-bold">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="text-center">
            <Image src="/team2.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="font-bold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="text-center">
            <Image src="/team3.jpg" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="font-bold">Alice Johnson</h3>
            <p className="text-gray-600">COO</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}