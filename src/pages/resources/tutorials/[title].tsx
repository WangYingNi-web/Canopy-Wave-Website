"use client";

import Head from 'next/head'
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TutorialLayout1, TutorialLayout2,TutorialLayout3,TutorialPost } from '@/components/tutorials'
import Image from 'next/image';
export default function TutorialDetail() {
  const router = useRouter()
  const { title } = router.query


  const getTutorialPost = (title: string): TutorialPost | null => {
    switch (title) {
      case 'how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm':
        return {
          id: 1,
          title: 'How to Run DeepSeek-R1 Locally on a Canopy Wave VM?',
          description: 'A comprehensive guide to understanding and utilizing GPU computing for AI workloads',
          sections: [
            {
              title: '',
              content: [
                'GPU computing has revolutionized the way we approach artificial intelligence and machine learning. This tutorial will guide you through the fundamentals of GPU computing and how to leverage it for your AI projects.',
                'Whether you\'re a beginner looking to understand the basics or an experienced developer wanting to optimize your workflows, this guide provides practical insights and step-by-step instructions.',
              ],
            },
            {
              title: 'Understanding GPU Architecture',
              content: [
                'Graphics Processing Units (GPUs) are specialized processors designed to handle parallel computations efficiently. Unlike CPUs that have a few powerful cores, GPUs contain thousands of smaller cores that can work simultaneously.',
                'This parallel architecture makes GPUs particularly well-suited for AI and machine learning tasks, which often involve processing large amounts of data simultaneously.',
              ],
            },
            {
              title: 'Setting Up Your Environment',
              content: [
                'Before diving into GPU computing, you\'ll need to set up your development environment. This includes installing the necessary drivers, CUDA toolkit, and compatible frameworks.',
                'We\'ll walk through the installation process for popular frameworks like PyTorch and TensorFlow, ensuring you have everything needed to start your GPU-accelerated projects.',
              ],
            },
            {
              title: 'Your First GPU Program',
              content: [
                'Let\'s start with a simple example that demonstrates the power of GPU computing. We\'ll compare the performance of a matrix multiplication operation on CPU versus GPU.',
                'This hands-on example will help you understand the practical benefits of GPU acceleration and provide a foundation for more complex projects.',
              ],
            },
            {
              title: 'Best Practices and Optimization',
              content: [
                'To get the most out of your GPU resources, it\'s important to follow best practices for memory management, data transfer, and kernel optimization.',
                'We\'ll cover common pitfalls and provide tips for maximizing performance in your GPU-accelerated applications.',
              ],
            },
          ],
        }

      case 'how-to-run-the-llama-locally-on-a-canopy-wave-vm':
        return {
          id: 2,
          title: 'How to Run the Llama Locally on a Canopy Wave VM? ',
          description: 'Advanced techniques for accelerating and optimizing AI model training workflows',
          sections: [
            {
              title: '',
              content: [
                'Training AI models efficiently is crucial for both research and production environments. This tutorial covers advanced optimization techniques that can significantly reduce training time and improve model performance.',
                'From data preprocessing to distributed training strategies, we\'ll explore the tools and techniques that can help you train better models faster.',
              ],
            },
            {
              title: 'Data Pipeline Optimization',
              content: [
                'The efficiency of your data pipeline can make or break your training performance. We\'ll discuss strategies for optimizing data loading, preprocessing, and augmentation.',
                'Learn how to identify and eliminate bottlenecks in your data pipeline to ensure your GPUs are always fed with data.',
              ],
            },
            {
              title: 'Memory Management Strategies',
              content: [
                'Effective memory management is essential for training large models. We\'ll cover techniques like gradient checkpointing, mixed precision training, and model parallelism.',
                'These strategies allow you to train larger models or use larger batch sizes within the constraints of your available GPU memory.',
              ],
            },
            {
              title: 'Distributed Training',
              content: [
                'When single-GPU training isn\'t enough, distributed training across multiple GPUs or nodes becomes necessary. We\'ll explore different distributed training strategies and their trade-offs.',
                'Learn how to implement data parallelism, model parallelism, and pipeline parallelism to scale your training to multiple GPUs effectively.',
              ],
            },
            {
              title: 'Monitoring and Debugging',
              content: [
                'Effective monitoring and debugging are crucial for successful model training. We\'ll discuss tools and techniques for tracking training progress, identifying issues, and optimizing performance.',
                'From GPU utilization monitoring to loss curve analysis, learn how to ensure your training runs are progressing as expected.',
              ],
            },
          ],
        }

      case 'how-to-run-the-kimi-k2-locally-on-a-canopy-wave-vm':
        return {
          id: 3,
          title: 'How to Run the KIMI-K2 Locally on a Canopy Wave VM?',
          description: 'KIMI-K2 is an open-source, trillion-parameter large language model released by Moonshot AI in July 2025. Learn how to deploy and run it locally using llama.cpp.',
          sections: [
            {
              title: 'What is KIMI-K2?',
              content: [
                'KIMI-K2 is an open-source, trillion-parameter large language model released by Moonshot AI in July 2025. Although it boasts a total of 1 trillion parameters, it uses a Mixture-of-Experts (MoE) architecture with 384 experts, activating only 32 billion parameters per inference to balance performance and efficiency.',
                'It performs exceptionally well in scenarios such as code generation, long-text processing, and intelligent agent tasks. It supports an ultra-long context length of up to 128K tokens, making it ideal for tasks like analyzing research papers, legal documents, or large codebases.',
                'Moonshot AI provides two open-source versions:',
                '• **Kimi-K2-Base**: The raw pre-trained weights, ideal for research and deep customization.',
                '• **Kimi-K2-Instruct**: A fine-tuned version based on the base model, optimized for general instruction-following tasks and ready to use out of the box.',
                'Kimi-K2 is a highly efficient, trillion-parameter expert in code generation and agentic tasks. It is capable of running on standard laptops or being deployed at scale in the cloud, aiming to advance AI from conversational ability to practical, real-world problem-solving.'
              ],
            },
          ],
        }

      default:
        return null
    }
  }

  const tutorialPost = getTutorialPost(title as string)

  if (!tutorialPost) {
    return (
      <main className="min-h-screen bg-[#F9F9F9]">
        <Header />

        <div className="flex items-center justify-center min-h-[60vh]">
          {/* <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-600 mb-4">Tutorial not found</h1>
            <Link href="/about/newsroom" className="text-blue-600 hover:text-blue-800 underline">
              Back to Newsroom
            </Link>
          </div> */}
        </div>

        <Footer />
      </main>
    )
  }

  // 根据教程ID选择不同的布局组件
  const renderTutorialLayout = () => {
    switch (tutorialPost.id) {
      case 1:
        return <TutorialLayout1 tutorialPost={tutorialPost} />
      case 2:
        return <TutorialLayout2 tutorialPost={tutorialPost} />
      case 3:
        return <TutorialLayout3/>
      default:
        return <TutorialLayout1 tutorialPost={tutorialPost} />
    }
  }

  // 根据教程ID选择不同的背景样式
  const getBackgroundClass = () => {
    switch (tutorialPost.id) {
      case 1:
        return "min-h-screen bg-[#F9F9F9]"
      case 2:
        return "min-h-screen bg-[#F9F9F9]"
      case 3:
        return "min-h-screen bg-[#F9F9F9]"
      default:
        return "min-h-screen bg-[#F9F9F9]"
    }
  }

  return (
    <main className={getBackgroundClass()}>
      <Head>
        <title>Canopy Wave - {tutorialPost.title}</title>
        <meta name="description" content={tutorialPost.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://canopywave.com/resources/tutorials/${title}`} />
        <meta property="og:title" content={tutorialPost.title} />
        <meta property="og:description" content={tutorialPost.description} />
        <meta property="og:image" content="https://canopywave.com/tutorials/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Canopy Wave" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://canopywave.com/resources/tutorials/${title}`} />
        <meta property="twitter:title" content={tutorialPost.title} />
        <meta property="twitter:description" content={tutorialPost.description} />
        <meta property="twitter:image" content="https://canopywave.com/tutorials/banner.png" />

        {/* LinkedIn */}
        <meta property="linkedin:owner" content="Canopy Wave" />
      </Head>
      <Header />
      {renderTutorialLayout()}
      <Footer />
    </main>
  )
}