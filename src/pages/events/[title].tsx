import Head from 'next/head';
import React from 'react';
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { EventsLayout1, EventsLayout2, EventPost } from '@/components/events'

export default function EventDetail() {
  const router = useRouter()
  const { title } = router.query

  const getEventPost = (title: string): EventPost | null => {
    switch (title) {
      case 'ai-agent-summit-keynote':
        return {
          id: 1,
          title: "The Rise of Enterprise AI: Trends in Inferencing and GPU Resource Planning",
          description: "AI Agent Summit Keynote by James Liao @Canopy Wave",
          sections: [
            {
                title: 'How Canopy Wave Ensures Secure AI-Driven Innovation',
                content: [
                  'Organizations are increasingly using AI to save costs and generate revenue. Recently countless open-source models have democratized access to AI\'s capabilities. Although this is beneficial, it also increases the risk of data breaches. As enterprises harness AI\'s potential while safeguarding their confidential information, the demand for secure and private cloud services have surged. We will examine professional strategies for optimizing the security and efficiency in AI deployments, and how Canopy Wave can help.'
                ]
              },
            {
              title: 'Key takeaways',
              content: [
                '• Rising costs of training AI combined with slow revenue growth have caused a convergence in AI models.',
                '• Increasing accessibility of open-source AI models will lead to the adoption of AI inferencing in various industries.',
                '• Unlike consumers, enterprises possess trade secrets and confidential information that must be protected. To safeguard these assets, we spot a rising demand for privatized clouds and proprietary AI models.'
              ]
            },
            {
              title: '',
              content: [
                <>AI is evolving fast—are your GPU clusters keeping up? Watch the webinar to learn more or <Link href="/contact" className="text-[#80B224] hover:text-[#6b9a1f] underline">contact us</Link> to get started now.</>,
              ]
            }
          ]
        }
      
      case 'canopy-confidentialmind-partnership':
        return {
          id: 2,
          title: "Canopy Wave and ConfidentialMind Join Forces to Accelerate Enterprise AI",
          description: "Strategic partnership delivers turnkey AI solutions with private cloud infrastructure",
          sections: [
            {
              title: 'Partnership Overview',
              content: [
                'Canopy Wave and ConfidentialMind have announced a strategic partnership to deliver comprehensive enterprise AI solutions that combine cutting-edge infrastructure with advanced AI deployment capabilities.',
                'This collaboration brings together Canopy Wave\'s high-performance GPU cloud infrastructure and ConfidentialMind\'s expertise in secure AI systems deployment.'
              ]
            },
            {
              title: 'Key Benefits',
              content: [
                '• Turnkey AI solutions with pre-configured environments',
                '• Private cloud infrastructure ensuring data security and compliance',
                '• Instant access to H100/H200 GPU clusters',
                '• Expert support for AI model deployment and optimization'
              ]
            },
            {
              title: 'What This Means for Enterprises',
              content: [
                'Enterprises can now accelerate their AI initiatives without the traditional barriers of infrastructure setup, security concerns, or technical complexity.',
                <>Learn more about our partnership and how it can benefit your organization by <Link href="/contact" className="text-[#80B224] hover:text-[#6b9a1f] underline">contacting our team</Link>.</>
              ]
            }
          ]
        }

      default:
        return null
    }
  }

  const eventPost = getEventPost(title as string)

  if (!eventPost) {
    return (
      <main className="min-h-screen bg-[#F9F9F9]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-600 mb-4">Event not found</h1>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  // 根据事件ID选择不同的布局组件
  const renderEventLayout = () => {
    switch (eventPost.id) {
      case 1:
        return <EventsLayout2 eventPost={eventPost} /> // 网络研讨会使用Layout2（带注册表单）
      case 2:
        return <EventsLayout1 eventPost={eventPost} /> // 普通事件使用Layout1
      default:
        return <EventsLayout1 eventPost={eventPost} />
    }
  }

  // 根据事件ID选择不同的背景样式
  const getBackgroundClass = () => {
    switch (eventPost.id) {
      case 1:
        return "min-h-screen bg-[#F9F9F9]"
      case 2:
        return "min-h-screen bg-[#F9F9F9]"
      default:
        return "min-h-screen bg-[#F9F9F9]"
    }
  }

  return (
    <main className={getBackgroundClass()}>
      <Head>
        <title>Canopy Wave - {eventPost.title}</title>
        <link rel="preload" href="/blog/banner.svg" as="image" type="image/svg+xml" />
      </Head>
      <Header />
      {renderEventLayout()}
      <Footer />
    </main>
  )
}