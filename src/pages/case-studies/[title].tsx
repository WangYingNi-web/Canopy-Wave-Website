import Head from 'next/head';
import React from 'react';
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { CaseStudies1 } from '@/components/case-studies'

interface CaseStudyPost {
  id: string
  title: string
  description: string
  sections: {
    title?: string
    content: (string | React.ReactNode)[]
  }[]
}

export default function CaseStudyDetail() {
  const router = useRouter()
  const { title } = router.query

  const getCaseStudyPost = (title: string): CaseStudyPost | null => {
    switch (title) {
      case 'supporting-academic-research-with-advanced-ai-and-gpu-cloud-computing':
        return {
          id: 'supporting-academic-research-with-advanced-ai-and-gpu-cloud-computing',
          title: 'Boosteroid & Canopy Wave: High-Performance Infrastructure Empowers Global Cloud Gaming Operations',
          description: 'How Boosteroid partnered with Canopy Wave to overcome critical challenges in network scalability, storage reliability, and operational efficiency.',
          sections: [
            {
              title: '1 Executive Summary',
              content: [
                'As one of the world\'s top three cloud gaming providers, Boosteroid partnered with Canopy Wave to overcome critical challenges in network scalability, storage reliability, and operational efficiency. By deploying Canopy Wave\'s high-performance storage and networking solutions, Boosteroid enhanced the performance and stability of its global data centers, establishing a strong foundation for future expansion across Europe, North America, and Latin America.'
              ]
            },
            {
              title: '2 Customer Background',
              content: [
                'Boosteroid is the world\'s largest independent cloud gaming provider, ranking alongside Microsoft and NVIDIA among the global top three. Its mission is to enable users to play high-performance PC and console games seamlessly from the cloud—without the need for expensive local hardware.',
                'With millions of registered users and growing demand for low-latency, high-resolution streaming, Boosteroid focuses on building scalable server clusters capable of reliably supporting massive concurrent gaming sessions at peak loads. Similar to other players in the cloud services space, Boosteroid pursues a lean operating model, continually seeking ways to balance cost control with efficient scaling of compute and network capacity.',
                'Operating environments must handle multi-gigabit throughput, heavy workloads, and uninterrupted access to GPU resources. In cloud gaming, ultra-low latency and consistent service quality are mission-critical, as even brief interruptions or spikes in latency can severely impact the user experience.'
              ]
            },
            {
              title: '3 Challenges',
              content: [
                'Before working with Canopy Wave, Boosteroid encountered several common challenges faced by cloud gaming providers:',
                'Limited network scalability: Rapid user growth strained Boosteroid\'s existing network infrastructure. Peak-hour traffic often caused latency fluctuations and temporary bottlenecks in certain regions, undermining the goal of consistently delivering low latency worldwide.',
                'Storage overload: Running a large-scale cloud gaming platform requires not only streaming games to end users but also managing internal logs, updates, and telemetry data. This dual workload created heavy strain on the storage system, occasionally causing delays during data access or content updates.',
                'Insufficient fault tolerance and recovery: Despite its distributed infrastructure, Boosteroid faced challenges in quickly recovering from unexpected data center outages. Local hardware failures or power interruptions could result in dropped user sessions, and redundancy mechanisms were not always fast enough to guarantee uninterrupted service. In cloud gaming, even a few seconds of downtime can significantly reduce user satisfaction.',
                'Balancing cost and performance: Early solutions lacked flexibility, making it difficult to balance high performance with cost efficiency. Supporting high-resolution, low-latency streaming demanded powerful GPU and networking resources, but hyperscaler pricing models made such deployments expensive and unsustainable long term. Boosteroid needed a cost-effective yet high-performance solution.'
              ]
            },
            {
              title: '4 Solution',
              content: [
                'Canopy Wave delivered a customized network and storage solution, successfully integrating it into Boosteroid\'s data centers in Europe and the United States. The deployment improved both performance and reliability across Boosteroid\'s global infrastructure.',
                '4.1 Scalable Network Infrastructure: Boosteroid deployed Ruijie RG-S6510-48VS8CQ (V2.0) Layer-3 data-center switches with 48 × 25 Gb SFP28 ports and 8 × 100 Gb QSFP28 uplinks. After implementation, concurrent gaming-session capacity rose by 35%, and east-west latency between data-center nodes dropped about 22 microseconds (from 50 µs to 28 µs by iPerf3 test, ~44% reduction), effectively eliminating peak-hour network bottlenecks.',
                '4.2 Optimized Storage Architecture: Boosteroid deployed 2U 24-bay U.2 NVMe SSD storage servers, with core specifications including: CPU: AMD EPYC Turin 9255 (24 cores / 48 threads), Memory: Samsung DDR5 5600 RDIMM, 8 × 64GB (512GB total), Storage: Samsung PM9D3A NVMe 3.84TB ×24. Running Ubuntu Server 22.04 LTS with NVMe driver 5.15.0-78-generic and XFS file system (TRIM enabled, 4 KB block size), the system was monitored by Prometheus + Grafana for SSD health, IOPS, and latency.',
                'GPU servers connected directly to storage nodes via PCIe 5.0 switches with NVIDIA GPUDirect Storage, reducing latency by ~30%, and game assets were pre-cached in GPU memory for over 95% cache-hit rate. Dual 100 Gb Intel NICs ensured high-speed, low-latency inter-data-center links. Random-read IOPS reached 520k at QD32/4 KB with fio testing, providing about 90 TB usable NVMe capacity and extremely low access latency—cutting patch and update distribution time by 45%.'
              ]
            },
            {
              title: '5 Results',
              content: [
                'Boosteroid realized significant improvements after partnering with Canopy Wave:',
                'Performance and fault tolerance: Deploying the RG-S6510-48VS8CQ data center switch, the cluster throughput has been increased by up to 3.5 times, and it can smoothly support millions of concurrent game sessions; (based on a single node with 10Gbps throughput, the test tool is Netperf, and the test packet size is 1500B). Using a 2U NVMe storage server, the I/O latency has been reduced to below 100 microseconds, the storage system\'s fault tolerance has been enhanced, and it ensures that cloud gaming operations can achieve seamless real-time data access under significantly heavier loads.',
                'Cost savings: Optimized network utilization and higher storage density improved rack efficiency by 25%+, reducing space and power consumption. Unified architecture simplified spare part logistics, lowering management and operational costs.',
                'Streamlined supply and maintenance: Canopy Wave handled end-to-end design, supply, installation, and operations, ensuring a smooth cluster deployment process. 24/7 support guaranteed uninterrupted operation and rapid issue resolution.'
              ]
            },
            {
              title: 'Future Outlook',
              content: [
                'Looking forward, Boosteroid plans to expand into Latin America and North America, developing modular data centers that host its proprietary gaming servers while also offering colocation services to third parties.',
                'Boosteroid emphasizes that ongoing collaboration with technology partners is critical for innovation. Future initiatives may include joint R&D with Canopy Wave, exploring new storage and networking architectures optimized for large-scale, low-latency cloud gaming.',
                'This case demonstrates how customized infrastructure solutions can help cloud gaming providers like Boosteroid achieve greater performance, scalability, and cost efficiency in a competitive global market.'
              ]
            }
          ]
        }

      default:
        return null
    }
  }

  const caseStudyPost = getCaseStudyPost(title as string)

  if (!caseStudyPost) {
    return (
      <main className="min-h-screen bg-[#F9F9F9]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-600 mb-4">Case study not found</h1>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <Head>
        <title>Canopy Wave - {caseStudyPost?.title || 'Case Study'}</title>
        </Head>
        <Header />
        <CaseStudies1 title={title as string} />
      <Footer />
    </main>
  )
}