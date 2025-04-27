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
      <div id='object-storage' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">OBJECT STORAGE FOR AI</h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-8">
          CanopyWave AI Object Storage provides the performance, reliability, and scale AI enterprises need for GenAI workloads. Unlock direct access to data for accelerated performance.
        </p>
        <div className="text-center mb-16">
          <button className="bg-[#8CC63F] text-white px-4 py-1.5 text-sm rounded hover:bg-[#80B224] transition-all duration-300">
            Learn More
          </button>
        </div>

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
            <p className="text-gray-600 text-center group-hover:text-white">CanopyWave AI Object Storage utilizes a standard S3 interface and supports S3 SDKs.</p>
          </div>
        </div>
      </div>


      {/* Distributed File Storage Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">DISTRIBUTED FILE STORAGE</h2>
            <p className="text-gray-600 mb-4">
              CanopyWave distributed file storage helps with centralized asset storage or parallel computation setups necessary for GenAI.
            </p>
          </div>
          <div>
            <Image
              src="/fleet-lifecycle.svg"
              alt="Distributed File Storage"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Storage Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/optimized.png"
                alt="Network Made for AI"
                width={40}
                height={40}
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center group-hover:text-white">A NETWORK MADE FOR AI</h3>
            <p className="text-gray-600 text-center group-hover:text-white">Our highly performant, ultra-low latency networking architecture is built from the ground up to get data to GPUs with the speed and efficiency GenAI models need to develop, train, and deploy.</p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/optimized.png"
                alt="Strategic Partnerships"
                width={40}
                height={40}
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center group-hover:text-white">STRATEGIC PARTNERSHIPS</h3>
            <p className="text-gray-600 text-center group-hover:text-white">Our partnership with VAST enables us to manage and secure hundreds of petabytes of data at a time. Plus, we are POSIX-compliant and suitable for shared access across multiple instances.</p>
          </div>

          <div className="border border-gray-200 p-8 rounded-lg hover:bg-[#80B224] group transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Image
                src="/optimized.png"
                alt="Ultra-fast Access at Scale"
                width={40}
                height={40}
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center group-hover:text-white">ULTRA-FAST ACCESS AT SCALE</h3>
            <p className="text-gray-600 text-center group-hover:text-white">Leverage a petabyte-scale shared file system with up to 1 GB/s per GPU. Our benchmarks show strong results for up to 64-node NVIDIA H200 GPU clusters.</p>
          </div>
        </div>
      </div>

      {/* Cloud Storage Section */}
      <div id='cloud-storage' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/cloud-storage.svg"
              alt="Cloud Storage"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">CLOUD STORAGE</h2>
            <p className="text-gray-600 mb-4">
              High-performance cloud storage solution providing reliable, secure, and scalable storage services for your AI workloads. Supporting multiple storage types to meet diverse scenario requirements.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">Multi-region data replication for high availability</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">Auto-scaling storage capacity with pay-as-you-go pricing</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">Built-in data encryption and access control</p>
              </div>
              <div className="mt-8">
                <button className="bg-[#8CC63F] text-white px-6 py-2 rounded hover:bg-[#80B224] transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RDMA Storage Section */}
      <div id='rdma-storage' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#F5F9F4]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">RDMA STORAGE</h2>
            <p className="text-gray-600 mb-4">
              Utilizing Remote Direct Memory Access (RDMA) technology to achieve ultra-low latency data transfer, delivering ultimate performance for AI training and inference.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">Microsecond-level latency for high-performance computing</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">Support for large-scale parallel access to enhance training efficiency</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">Zero-copy technology to reduce CPU overhead</p>
              </div>
              <div className="mt-8">
                <button className="bg-[#8CC63F] text-white px-6 py-2 rounded hover:bg-[#80B224] transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/rdma-storage.svg"
              alt="RDMA Storage"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Local Storage Section */}
      <div id='local-storage' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/local-storage.svg"
              alt="Local Storage"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">LOCAL STORAGE</h2>
            <p className="text-gray-600 mb-4">
              High-performance local storage solution providing direct data access channels for GPUs to maximize computational resource utilization.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">NVMe storage for ultimate I/O performance</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">Local cache acceleration to reduce network overhead</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/optimized.png" alt="Feature" width={24} height={24} />
                <p className="text-gray-600">Flexible storage configuration options</p>
              </div>
              <div className="mt-8">
                <button className="bg-[#8CC63F] text-white px-6 py-2 rounded hover:bg-[#80B224] transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">
            Choose the Right<br />
            Storage Solution for You
          </h2>
          <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto">
            We provide comprehensive storage services to accelerate your AI application deployment.
          </p>
          <button className="bg-[#8CC63F] text-white px-8 py-3 rounded-lg hover:bg-[#80B224] transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>



      <Footer />
    </main>
  );
}