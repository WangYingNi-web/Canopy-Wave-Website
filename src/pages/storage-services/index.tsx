"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { Button } from "@/components/ui/button";
import React from 'react';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';

export default function StorageServices() {
  useScrollToHash();
  return (
    <main className="min-h-screen relative">
      <Header />

      <div className="w-full h-[720px] relative mt-[84px]">
        <Image
          src="/storage/banner.svg"
          alt="banner"
          layout='fill'
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-56">
            <SlideUp>
              <h1 className="text-5xl sm:text-7xl font-bold text-[#8CC63F] mb-6">
                Storage Services<br />
              </h1>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-gray-600 text-lg mb-12">
                Flexible storage architecture for any AI or enterprise workload
              </p>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Multi-tier Storage Architecture Section */}
      <div className='bg-[#F5F9F4]'>
        <div id='storage-architecture' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SlideUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Our Data Centers offer Multi-Tier <br /> Storage Architecture</h2>
          </SlideUp>
          <SlideUp>
            <p className="text-gray-600 text-center max-w-4xl mx-auto mb-6">
              Our enterprise-class storage solutions are built on self-controlled hardware infrastructure and achieve technological differentiation through a four-layer architecture
            </p>
          </SlideUp>
          <SlideUp>
            <div className="flex justify-center pb-8">
              <button className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md" onClick={() => window.location.href = '/contact'}>
                Learn more
              </button>
            </div>
          </SlideUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                <Image
                  src="/compute/fast.svg"
                  alt="Performance"
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="font-bold text-xl mb-4">Performance Where IT Counts</h3>
              <p className="text-gray-600">Uses SSD storage to analyze data access in real time, prioritizing hot data (like transactions) in fast tiers for microsecond speeds. Smart algorithms auto-move data between tiers</p>
            </div>

            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                <Image
                  src="/storage/scalability.svg"
                  alt="Scalability"
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="font-bold text-xl mb-4">Scalability For<br />Growth</h3>
              <p className="text-gray-600">Uses distributed storage to manage exabyte-scale unstructured data. Cross-rack/data center distribution enables seamless capacity expansion without service disruption</p>
            </div>

            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                <Image
                  src="/storage/collaboration.svg"
                  alt="Collaboration"
                  width={38}
                  height={38}
                />
              </div>
              <h3 className="font-bold text-xl mb-4">Seamlesss Collaboration</h3>
              <p className="text-gray-600">Global file system enables multi-node read/write. Smart load balancing optimizes access paths automatically, with version control and file locking to keep data consistent during team work</p>
            </div>

            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                <Image
                  src="/storage/cloud-native.svg"
                  alt="Cloud Native"
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="font-bold text-xl mb-4">Cloud-Native Readiness</h3>
              <p className="text-gray-600">Object storage offers standard APIs with cross-region sync & auto-tiering. Pools mixed storage, runs in containers, and copies data across regions in under 1 second</p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Storage Section */}
      <div id='local-storage' className="bg-[#F9F9F9] sm:py-16 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SlideUp>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Local Storage</h2>
                <p className="text-gray-600 mb-8">15.6TB of NVMe storage, physically attached to the GPU servers</p>
              </SlideUp>
              <SlideUp>
                <button
                  onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                  className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md"
                >
                  Try Control Panel
                </button>
              </SlideUp>
            </div>
            <div className="space-y-6">
              {/* Performance Optimized Design */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/storage/performance-icon.svg" alt="Performance" width={36} height={36} />
                  <FadeIn>
                    <h3 className="text-2xl font-bold">Performance Optimized Design</h3>
                  </FadeIn>

                </div>
                <FadeIn>
                  <ul className="text-gray-600 space-y-1 pl-12">
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Dynamic GPU-Aware Chunking - Auto-sizes data batches to match GPU memory (e.g. micro-batches)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Parallel I/O Boost - Multi-threaded access hits millions of ops/sec in image training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Smart Prefetch - Predicts & preloads next training batch into cache</span>
                    </li>
                  </ul>
                </FadeIn>

              </div>

              <div className="w-full h-[1px] bg-gray-200"></div>
              {/* Security Isolation Mechanism */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/storage/hpc-icon.svg" alt="Security" width={36} height={36} />
                  <FadeIn>
                    <h3 className="text-2xl font-bold">Security Isolation Mechanism</h3>
                  </FadeIn>
                </div>
                <FadeIn>
                  <ul className="text-gray-600 space-y-1 pl-12">
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Port Locking - Physically binds storage to pre-authorized servers only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Live Encryption - End-to-end data scrambling, unreadable even if physically breached</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Isolated Operation - Zero network sharing, direct host-server exclusive access</span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
              <div className="w-full h-[1px] bg-gray-200"></div>
              {/* HPC Compatibility */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/storage/compatibility.svg" alt="HPC" width={36} height={36} />
                  <FadeIn>
                    <h3 className="text-2xl font-bold">HPC Compatibility</h3>
                  </FadeIn>
                </div>
                <FadeIn>
                  <ul className="text-gray-600 space-y-1 pl-12">
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Plugs into major AI frameworks (PyTorch/TensorFlow) out-of-the-box</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Auto-optimizes storage for NLP/CV workflows with smart caching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Real-time bit-level checks prevent data corruption during long training runs</span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Storage Section */}
      <div id='shared-storage' className="bg-[#F5F9F4] sm:py-16 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/storage/circuit-board.svg"
                alt="Circuit Board" 
                layout="fill"
                objectFit="cover"
                className="filter brightness-90"
              />
            </div>
            <div>
              <SlideUp>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Shared Storage</h2>
                <p className="text-gray-600 mb-8">2PB+ centralized parallel file system, accessible by multiple machines over a network</p>
              </SlideUp>
              <SlideUp>
                <button
                  onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                  className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md mb-12"
                >
                  Try Control Panel
                </button>
              </SlideUp>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* File-based */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/storage/file.svg" alt="NVIDIA GPUs" width={36} height={36} className="mb-4" />
              <h3 className="text-xl font-bold mb-4">File-Based</h3>
              <p className="text-gray-600">
                All servers see the same folder structure like your local PC. Files stay unique - no duplicates, no matter where they're physically stored
              </p>
            </div>

            {/* ​​Multi-server file access​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/storage/multi.svg" alt="Multi-GPU Instances" width={36} height={36} className="mb-4" />
              <h3 className="text-xl font-bold mb-4">Multi-Server File Access</h3>
              <p className="text-gray-600">
                Multi-server editing with auto-conflict resolution. Works like Google Docs for servers - changes appear instantly everywhere, no version chaos
              </p>
            </div>

            {/* ​​Distributed Harmony Engine​ */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image src="/storage/harmony-icon.svg" alt="Private Cloud" width={36} height={36} className="mb-4" />
              <h3 className="text-xl font-bold mb-4">Distributed Harmony Engine</h3>
              <p className="text-gray-600">
                Auto-schedules distributed tasks like traffic lights. Smart scheduling prevents file access conflicts. For example, AI training gets 40% faster with hot data auto-prioritized in fast storage
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Object Storage */}
      <div id='object-storage' className="bg-[#F9F9F9] sm:py-16 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SlideUp>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Object Storage</h2>
                <p className="text-gray-600 mb-8">10PB+ Object File System, accessed via S3 APIs</p>
              </SlideUp>
              <SlideUp>
                <button
                  onClick={() => window.open('https://cloud.canopywave.io/', '_blank')}
                  className="bg-[#8CC63F] hover:bg-[#7ab32f] text-white px-6 py-2 rounded-md"
                >
                  Try Control Panel
                </button>
              </SlideUp>
            </div>
            <div className="space-y-6">
              {/* Designed for scalability and durability */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/storage/performance-icon.svg" alt="Performance" width={36} height={36} />
                  <FadeIn>
                    <h3 className="text-2xl font-bold">Designed for scalability and durability</h3>
                  </FadeIn>
                </div>
                <FadeIn> 
                <ul className="text-gray-600 space-y-1 pl-12">
                  <li className="flex items-start">
                    <span className="w-4 shrink-0">•</span>
                    <span>Starts at 10PB with seamless scaling - auto-balances data when adding drives. Triple copies protect against hardware failures (auto-heals in minutes), while multi-site deployment guards against regional disasters</span>
                  </li>
                </ul>
                </FadeIn>
              </div>

              <div className="w-full h-[1px] bg-gray-200"></div>
              {/* Accessed using HTTP-based protocols */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/storage/hpc-icon.svg" alt="Security" width={36} height={36} />
                  <FadeIn>
                    <h3 className="text-2xl font-bold">Accessed using HTTP-based protocols</h3>
                  </FadeIn>
                </div>
                <FadeIn>
                  <ul className="text-gray-600 space-y-1 pl-12">
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Access files via unique URLs (e.g. user123/photo.jpg) like visiting webpages. HTTP(S) upload/download handles millions of files worldwide - perfect for web apps</span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
              <div className="w-full h-[1px] bg-gray-200"></div>
              {/* Optimized for unstructured data */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image src="/storage/compatibility.svg" alt="HPC" width={36} height={36} />
                  <FadeIn>
                    <h3 className="text-2xl font-bold">Optimized for unstructured data</h3>
                  </FadeIn>
                </div>
                <FadeIn>
                  <ul className="text-gray-600 space-y-1 pl-12">
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Auto-Tagging: Labels files (images/videos/logs) with types & dates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Hot/Cold Auto-Tier: Auto-moves hot data to fast storage, cold to cheap tiers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 shrink-0">•</span>
                      <span>Lightning Search: Find files instantly across 100B+ objects using keywords</span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Get Started Section */}
      <div className="bg-[#F9F9F9] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <SlideUp>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-gray-600 mb-8 mx-auto text-lg">
              Create your Canopy Wave cloud account to launch GPU clusters immediately or contact us to reserve a long term contract
            </p>
          </SlideUp>
          <SlideUp>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:w-auto bg-[#8CC63F] hover:bg-[#7ab32f]" onClick={() => window.open('https://cloud.canopywave.io/', '_blank', 'noopener,noreferrer')}>
                Launch GPU instances
              </Button>
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>
                Contact sales
              </Button>
            </div>
          </SlideUp>
        </div>
      </div>

      <Footer />
    </main>
  );
}