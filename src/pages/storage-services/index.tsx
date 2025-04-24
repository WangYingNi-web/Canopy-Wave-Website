"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function StorageServices() {
  useScrollToHash();
  return (
    <main className="min-h-screen relative">
      <Header />

      <div className="w-full h-[600px] relative mt-20">
        <Image
          src="/cube.svg"
          alt="cube"
          layout='fill'
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
            <h1 className="text-6xl font-bold text-[#8CC63F] mb-6">
              Storage Services<br />
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              Get performant, secure, and reliable storage for AI.
            </p>
          </div>
        </div>
      </div>

      {/* Object Storage Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">OBJECT STORAGE FOR AI</h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16">
          CoreWeave AI Object Storage provides the performance, reliability, and scale AI enterprises need for GenAI workloads. Unlock direct access to data for accelerated performance.
        </p>

        {/* LOTA Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image
              src="/fleet-lifecycle.svg"
              alt="fleet-lifecycle"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">LOCAL OBJECT TRANSPORT ACCELERATOR (LOTA)</h3>
              <p className="text-gray-600">Get a more direct path between GPUs and data. We built LOTA, a simple and secure proxy that lives on GPU nodes, to listen and respond to Object Storage data requests.</p>
              <p className="text-gray-600 mt-4">LOTA accelerates responses by directly accessing data repositories—bypassing Object Storage gateway and index.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">LOTA OBJECT CACHING</h3>
              <p className="text-gray-600">Cache data and frequently used files on GPU nodes for quick access. LOTA caches data in the local disk of GPU nodes, balancing out data loads instead of hot-spotting specific nodes for faster and easier access.</p>
              <p className="text-gray-600 mt-4">Requests still follow secure LOTA paths, ensuring proper authorization and authentication protocols. Caches are formed and deleted on a session-by-session basis.</p>
            </div>
          </div>
        </div>

        {/* Storage Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/optimized.png"
                alt="Higher Performance"
                width={40}
                height={40}
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center group-hover:text-white">HIGHER PERFORMANCE RESULTS</h3>
            <p className="text-gray-600 text-center group-hover:text-white">See a significant per-GPU performance boost with up to 2GB/s per GPU, enabling faster training and inference cycles.</p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/optimized.png"
                alt="Enhanced Uptime"
                width={40}
                height={40}
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center group-hover:text-white">ENHANCED UPTIME</h3>
            <p className="text-gray-600 text-center group-hover:text-white">Get the benefits of 99.9% uptime and eleven 9s of durability—so your teams can get models to market ultra-fast.</p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/optimized.png"
                alt="Greater Capacity"
                width={40}
                height={40}
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center group-hover:text-white">GREATER CAPACITY</h3>
            <p className="text-gray-600 text-center group-hover:text-white">Scale to trillions of objects and exabytes of data, with performance that grows with your storage needs.</p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/optimized.png"
                alt="Compliance and Support"
                width={40}
                height={40}
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center group-hover:text-white">COMPLIANCE AND SUPPORT</h3>
            <p className="text-gray-600 text-center group-hover:text-white">CoreWeave AI Object Storage utilizes a standard S3 interface and supports S3 SDKs.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}