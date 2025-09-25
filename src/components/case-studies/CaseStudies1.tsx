import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import { CaseStudyPost } from './index'

interface CaseStudies1Props {
  title?: string
}

const CaseStudies1: React.FC<CaseStudies1Props> = ({ title }) => {
  useScrollToHash();
  const breadcrumbItems = useTutorialBreadcrumb()
  
  // 根据title参数选择对应的内容
  const getCaseStudyContent = (title?: string) => {
    switch (title) {
      case 'supporting-academic-research-with-advanced-ai-and-gpu-cloud-computing':
        return {
          pageTitle: 'Canopy Wave - Supporting Academic Research with Advanced AI and GPU Cloud Computing',
          heroTitle: 'Supporting Academic Research with <br /> Advanced AI and GPU Cloud Computing',
          heroSubtitle: 'University of California San Diego Case Study',
          mainTitle: 'Supporting Academic Research with Advanced AI and GPU Cloud Computing'
        }
      case 'enterprise-ai-transformation':
      default:
        return {
          pageTitle: 'Canopy Wave - Accelerating Protein Engineering with Canopy Wave\'s GPUaaS',
          heroTitle: 'Accelerating Protein Engineering with <br /> Canopy Wave\'s GPUaaS',
          heroSubtitle: 'Foundry BioSciences Case Study',
          mainTitle: 'Accelerating Protein Engineering with Canopy Wave\'s GPUaaS'
        }
    }
  }

  const content = getCaseStudyContent(title)
  
  const navigationItems = [
    { id: 'executive-summary', label: 'Executive Summary' },
    { id: 'company-background', label: 'Company Background' },
    { id: 'challenges-faced', label: 'Challenges Faced' },
    { id: 'solution', label: 'Solution' },
    { id: 'results', label: 'Results and Benefits' },
    { id: 'future', label: 'Future Outlook' }
  ];
  
  const meidaSidebar = (
    <div className="rounded-lg mt-6">
      <h4 className="text-l font-semibold ml-4 text-gray-700">Share</h4>
      <SocialMediaLinks
        vertical={false}
        className="items-center pt-2 pl-4"
      />
    </div>
  )

  const rightSidebar = (
    <div className="space-y-6">
      {/* Recommended GPU Services Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
          Related Products
        </h3>
        <div className="space-y-4">
          {/* NVIDIA HGX H200 */}
          <div className="bg-gray-50 rounded-lg pb-2">
            <a
              href="/compute-services#hgx-h200"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                <img
                  src="/cloud/h200.png"
                  alt="NVIDIA HGX H200"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <a
              href="/compute-services#hgx-h200"
              rel="noopener noreferrer"
              className="font-bold text-gray-900 text-center text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
            >
              NVIDIA HGX H200
            </a>
          </div>

          {/* NVIDIA HGX H100 */}
          <div className="bg-gray-50 rounded-lg pb-2">
            <a
              href="/compute-services#hgx-h100"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden hover:opacity-90 transition-opacity duration-200">
                <img
                  src="/compute/h100.png"
                  alt="NVIDIA HGX H100"
                  className="w-full h-full"
                />
              </div>
            </a>
            <a
              href="/compute-services#hgx-h100"
              rel="noopener noreferrer"
              className="font-bold text-gray-900 text-center text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
            >
              NVIDIA HGX H100
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-[#F9F9F9] text-gray-800 relative">
      <Head>
        <title>{content.pageTitle}</title>
      </Head>
      <Header />

      {/* Hero Section */}
      <div className="w-full h-[520px] relative mt-[84px]">
        <Image
          src="/about/banner.svg"
          alt="banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
            <SlideUp>
              <h1 className="text-4xl sm:text-5xl font-black text-[#80B224] text-center" dangerouslySetInnerHTML={{ __html: content.heroTitle }}>
              </h1>
              <p className="text-gray-600 text-l mt-8 text-center">{content.heroSubtitle}</p>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <SidebarLayout
        navigationItems={navigationItems}
        title={content.mainTitle}
        meidaSidebar={meidaSidebar}
        rightSidebar={rightSidebar}
        showRecommendedTutorials={false}
      >
        {/* Executive Summary Section */}
        <section id="executive-summary" className="mb-12">
          <h2 className="text-xl font-bold mb-4">Executive Summary</h2>
          <p className="text-gray-600">
            The University of California San Diego (UCSD) research team faced significant challenges in analyzing complex government contracting data for their academic research project. Traditional computing resources were insufficient for processing large datasets and running advanced AI models required for their analysis. By partnering with Canopy Wave's GPU-as-a-Service platform, UCSD researchers gained access to high-performance H100 GPU instances that dramatically accelerated their research timeline. This case study demonstrates how Canopy Wave's cloud GPU infrastructure enables academic institutions to conduct cutting-edge research without the burden of expensive hardware investments.
          </p>
        </section>
        
        {/* Company Background Section */}
        <section id="company-background" className="mb-12">
          <h2 className="text-xl font-bold mb-4">Research Background</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              The University of California San Diego research team was conducting an ambitious study on government contracting patterns and their economic impacts. The project required processing massive datasets containing millions of contract records, financial transactions, and regulatory documents spanning multiple decades. The research aimed to identify patterns, inefficiencies, and opportunities for improvement in government procurement processes using advanced machine learning and natural language processing techniques.
            </p>
            <p className="text-gray-600">
              As an academic institution, UCSD operates with limited budgets for computational resources. The research team needed access to powerful GPU infrastructure capable of training large language models and processing complex datasets, but traditional on-premises solutions were cost-prohibitive and would require significant time for procurement and setup.
            </p>
          </div>
        </section>
        
        {/* Challenges Faced Section */}
        <section id="challenges-faced" className="mb-12">
          <h2 className="text-xl font-bold mb-4">Challenges Faced</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Before partnering with Canopy Wave, the UCSD research team encountered several significant obstacles:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Limited Computational Resources:</h3>
                <p className="text-gray-600">
                  The university's existing computing infrastructure was insufficient for the scale of data processing required. Traditional CPU-based systems would have taken months to complete tasks that could be accomplished in days with proper GPU acceleration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2. Budget Constraints:</h3>
                <p className="text-gray-600">
                  As an academic institution, UCSD had limited funding for expensive hardware purchases. The cost of acquiring and maintaining high-end GPU systems was beyond their research budget, making cloud-based solutions more attractive.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Time Sensitivity:</h3>
                <p className="text-gray-600">
                  The research project had strict deadlines for publication and grant reporting. Delays in computational processing could jeopardize the entire research timeline and funding opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Technical Expertise Requirements:</h3>
                <p className="text-gray-600">
                  Setting up and maintaining GPU infrastructure required specialized technical knowledge that was not readily available within the research team, potentially causing further delays.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solution Section */}
        <section id="solution" className="mb-12">
          <h2 className="text-xl font-bold mb-4">Solution</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Canopy Wave provided UCSD with a comprehensive GPU-as-a-Service solution that addressed all their computational needs:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">High-Performance GPU Access:</h3>
                <p className="text-gray-600">
                  UCSD gained immediate access to NVIDIA H100 GPU instances, providing the computational power needed for their machine learning models and data processing tasks.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Flexible Scaling:</h3>
                <p className="text-gray-600">
                  The cloud-based solution allowed researchers to scale their computational resources up or down based on project requirements, optimizing both performance and costs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Pre-configured Environments:</h3>
                <p className="text-gray-600">
                  Canopy Wave provided pre-configured environments with popular machine learning frameworks and libraries, eliminating setup time and technical barriers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert Support:</h3>
                <p className="text-gray-600">
                  The research team received dedicated technical support to optimize their workflows and troubleshoot any issues, ensuring maximum productivity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section id="results" className="mb-12">
          <h2 className="text-xl font-bold mb-4">Results and Benefits</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              The partnership with Canopy Wave delivered significant improvements across multiple dimensions:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Accelerated Research Timeline:</h3>
                <p className="text-gray-600">
                  Data processing tasks that would have taken months on traditional systems were completed in weeks, allowing the research team to meet their publication deadlines.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cost Efficiency:</h3>
                <p className="text-gray-600">
                  The pay-as-you-use model provided significant cost savings compared to purchasing and maintaining dedicated hardware, allowing the research budget to be allocated more effectively.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Enhanced Research Quality:</h3>
                <p className="text-gray-600">
                  Access to high-performance computing enabled more sophisticated analysis techniques and larger-scale experiments, improving the quality and impact of the research findings.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Quantitative Results:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>75% reduction in data processing time compared to traditional methods</li>
                <li>60% cost savings compared to hardware acquisition and maintenance</li>
                <li>Successful completion of research project 3 months ahead of schedule</li>
                <li>Publication of findings in top-tier academic journals</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Future Outlook Section */}
        <section id="future" className="mb-28">
          <h2 className="text-xl font-bold mb-6">Future Outlook</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              The success of this collaboration has opened new possibilities for academic research at UCSD. The research team plans to expand their use of AI and machine learning techniques in future projects, leveraging Canopy Wave's infrastructure for even more ambitious studies. This partnership demonstrates the potential for cloud-based GPU services to democratize access to high-performance computing for academic institutions.
            </p>
            <p className="text-gray-600">
              For more information on how Canopy Wave can support your academic research projects,{' '}
              <a href="https://cloud.canopywave.io/" className="text-[#80B224] hover:text-[#6b9a1f] underline" target="_blank" rel="noopener noreferrer">
                visit Canopy Wave Cloud
              </a>{' '}
              or <Link href="/contact" className="text-[#80B224] hover:text-[#6b9a1f] underline">contact our academic partnerships team</Link>.
            </p>
          </div>
        </section>
      </SidebarLayout>

    </main>
  )
}

export default CaseStudies1