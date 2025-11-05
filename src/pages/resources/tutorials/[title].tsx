"use client";

import Head from 'next/head'
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TutorialLayout1, TutorialLayout2, TutorialLayout3, 
  TutorialLayout4, TutorialLayout5, TutorialLayout6,TutorialLayout7,TutorialLayout8,TutorialLayout9,TutorialLayout10,TutorialLayout11,TutorialLayout12,TutorialLayout13,TutorialPost } from '@/components/tutorials'
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

      case 'how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm':
        return {
          id: 4,
          title: 'How to Run the GPT-OSS Locally on a Canopy Wave VM?',
          description: 'A comprehensive guide to deploying GPT-OSS locally using Ollama on Canopy Wave virtual machines for enhanced privacy and cost efficiency.',
          sections: [
            {
              title: 'Why Choose GPT-OSS?',
              content: [
                '**1. Powerful yet Lightweight Performance**',
                'The 120B version approaches top-tier closed-source model performance, while the 20B runs smoothly on edge devices, covering scenarios from servers to mobile phones.',
                '',
                '**2. Built-in Agent Capabilities**',
                'Native support for function calls, web browsing, Python execution, and structured output (JSON/YAML), enabling agent workflows without extra encapsulation.',
                '',
                '**3. Enhanced Security and Control**',
                'Passes biosafety and adversarial attack tests with 100% rejection rate (e.g., for virus synthesis requests) and includes safety fine-tuning guidelines.',
                '',
                '**4. Significant Cost Efficiency**',
                'Local deployment eliminates API fees; the 120B quantized version runs on consumer-grade GPUs (e.g., RTX 4090).',
              ],
            },
            {
              title: 'Why Choose Local Deployment for Large Models?',
              content: [
                '**1. Data Privacy and Compliance**',
                'Sensitive data (e.g., healthcare/finance) stays local, meeting strict compliance standards like GDPR/HIPAA.',
                '',
                '**2. Low Latency and High Availability**',
                'Local inference latency drops to 320ms (20B model), offering real-time interaction superior to cloud APIs.',
                '',
                '**3. Customization and Long-Term Cost Control**',
                'Supports fine-tuning for vertical domains (e.g., industry terminology), avoids vendor lock-in, and enables hardware reuse.',
              ],
            },
            {
              title: 'Who is GPT-OSS For?',
              content: [
                '• **Developers**: Free local alternative to GPT-4-level models with full-stack agent development support.',
                '• **Privacy-Sensitive Industries (Healthcare/Finance)**: Ensures data remains local and compliant with regulations.',
                '• **Budget-Constrained Teams**: Deploy a 120B model on a single GPU, slashing API costs that can run into millions.',
                '• **Educators/Researchers**: Apache 2.0 license enables open development and experimental auditing.',
              ],
            },
            {
              title: 'Creating a Virtual Machine',
              content: [
                'Create a virtual machine using the Canopy Wave Cloud Platform.',
                '',
                '**Step 1**: Click the button "Launch GPU VM" to create a virtual machine.',
                '**Step 2**: Click the button "Continue".',
                '**Step 3**: Enter "VM Name" and "SSH Password", then click the button "Continue".',
              ],
            },
            {
              title: 'Deploying GPT-OSS Locally',
              content: [
                '**1. Using SSH to Access the Virtual Machine**',
                'Press the Win+R shortcut keys to open the Run dialog.',
                'In the Run dialog, Enter:',
                '```bash',
                'ssh username@IP',
                '```',
                'Then enter your SSH password to access the virtual machine. Note that the password won\'t be displayed as you type it.',
                '',
                '**2. Download the Ollama platform to run the large language model**',
                '```bash',
                'curl -fsSL https://ollama.com/install.sh | sh',
                '```',
                '',
                '**3. Download and run GPT-OSS**',
                'Copy the gpt model and run it.',
                'Enter any large model you want to deploy here, e.g. GPT-OSS.',
                'Copy the corresponding command:',
                '```bash',
                'ollama run GPT-OSS',
                '```',
                'Enter the command.',
                'You can now interact with your local large language model.',
              ],
            },
          ],
        }
      case 'how-to-choose-the-right-storage-for-your-ai-workflows':
        return {
          id: 5,
          title: 'How to Choose the Right Storage for Your AI Workflows',
          description: 'A comprehensive guide to selecting optimal storage solutions for AI and machine learning workloads, covering performance, scalability, and cost considerations.',
          sections: [
            {
              title: 'Understanding AI Storage Requirements',
              content: [
                'AI workflows have unique storage demands that differ significantly from traditional computing applications...',
              ],
            },
          ],
        }
      case 'nvidia-h100-vs-h200-vs-b200:-which-gpu-for-your-workload': // 添加这行支持带冒
        return {
          id: 6,
          title: 'NVIDIA H100 vs H200 vs B200: Which GPU for Your Workload',
          description: 'A comprehensive comparison of NVIDIA H100, H200, and B200 GPUs to help you choose the right GPU for your AI and machine learning workloads.',
          sections: [
            {
              title: 'GPU Comparison Guide',
              content: [
                'Detailed comparison of NVIDIA\'s latest GPU offerings...',
              ],
            },
          ],
        }
      case 'prompt-engineering-guide': // 添加这行支持带冒
        return {
          id: 7,
          title: 'Prompt Engineering Guide',
          description: 'A comprehensive guide to prompt engineering, including best practices, techniques, and tools for creating effective prompts for large language models.',
          sections: [
            {
              title: 'Prompt Engineering Guide',
              content: [
                'Prompt engineering is the process of creating effective prompts for large language models (LLMs) to generate desired outputs. This guide covers best practices, techniques, and tools for prompt engineering.',
              ],
            },
          ],
        }
        
      case 'comparing-open-source-ai-agent-frameworks':
        return {
          id: 8,
          title: 'Comparing Open-Source AI Agent Frameworks',
          description: 'A comprehensive comparison of popular open-source AI agent frameworks to help you choose the right one for your project',
          metaDescription: 'Amid the rapid growth of AI agents, open-source frameworks have emerged as powerful tools for developers building intelligent applications.',
          imageAlt: 'ai agent frameworks',
          sections: [
            {
              title: '',
              content: [
                'Amid the rapid growth of AI agents, open-source frameworks have emerged as powerful tools for developers building intelligent applications. LangGraph, AutoGPT, and AgentGPT each offer distinct features, providing diverse options for developers with varying needs—from technical architecture to practical implementation.',
              ],
            },
          ],
        }

      case 'redefine-your-workflow-with-canopy-wave-chat':
        return {
          id: 9,
          title: 'Redefine Your Workflow with Canopy Wave Chat',
          description: 'How AI Integration with Office Tools',
          metaDescription: 'From automated report generation to intelligent data analysis, meeting summaries to predictive planning, AI is no longer a distant concept but a practical tool to supercharge efficiency.',
          imageAlt: 'ai office tool',
          sections: [
            {
              title: 'Transform Your Daily Work with AI',
              content: [
                'From automated report generation to intelligent data analysis, meeting summaries to predictive planning, AI is no longer a distant concept but a practical tool to supercharge efficiency.',
                'Canopy Wave Chat represents the next evolution in workplace productivity, seamlessly integrating advanced AI capabilities directly into your existing office workflow.',
              ],
            },
          ],
        }

      case 'troubleshooting-gpu-drops':
        return {
          id: 10,
          title: 'Troubleshooting GPU Drops',
          description: 'A comprehensive guide to understanding and resolving GPU dropout issues, covering hardware, software, and environmental causes.',
          metaDescription: 'Learn how to diagnose and fix GPU drops with this detailed troubleshooting guide covering hardware failures, driver issues, and environmental factors.',
          imageAlt: 'GPU troubleshooting guide',
          sections: [
            {
              title: 'GPU Card Drop Causes and How to Troubleshoot',
              content: [
                'In our daily lives, we often encounter GPU dropouts when using computers. Therefore, this article primarily explains the causes and how to troubleshoot them.',
              ],
            },
          ],
        }

      case 'dedicated-vs-shared-llm-endpoints':
        return {
          id: 11,
          title: 'Dedicated vs Shared LLM Endpoints',
          description: 'In enterprise-level large language model (LLM) deployment, choosing between shared endpoints (also known as serverless endpoints) and dedicated endpoints is a critical decision factor. Each model offers distinct advantages, catering to different business scenarios and requirements. Shared endpoints emphasize flexibility and low barriers to entry, while dedicated endpoints focus on stability and control. Below is a neutral introduction to the advantages of both endpoint types across aspects such as performance, cost, security and compliance, customization, and reliability and control, helping enterprise users weigh their options based on their specific situations. ',
          metaDescription: 'Choosing between shared endpoints (also known as serverless endpoints) and dedicated endpoints is a critical decision factor. Each model offers distinct advantages, catering to different business scenarios and requirements.',
          imageAlt: 'Dedicated vs Shared LLM Endpoints',
          sections: [
            {
              title: 'Dedicated vs Shared LLM Endpoints',
              content: [
                'In the rapidly evolving landscape of AI and machine learning, selecting the right infrastructure is crucial for optimizing performance and cost-efficiency. This guide delves into the key differences between dedicated and shared LLM endpoints, providing insights to help you make an informed decision for your AI workloads.',
              ],
            },
          ],
        }

      case 'how-to-choose-on-demand-private-ai-cloud':
        return {
          id: 12,
          title: 'How to choose On-demand Private AI Cloud',
          description: 'The future of AI won\'t be built on traditional cloud services or inefficient private environments—it will rely on dedicated platforms that deeply understand the core needs of enterprise-grade AI. ',
          sections: [
            {
              title: '',
              content: [
                '',
              ],
            },
          ],
        }

      case 'how-to-choose-between-bare-metal-gpus-and-virtual-gpus':
        return {
          id: 13,
          title: 'How to Choose Between Bare Metal GPUs and Virtual GPUs',
          description: 'Bare metal GPUs and virtual GPUs, as two mainstream architectures, can both leverage this top-tier hardware, but the choice depends on performance requirements, resource utilization, and operational flexibility.',
          sections: [
            {
              title: '',
              content: [
                '',
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
        return <TutorialLayout3 />
      case 4:
        return <TutorialLayout4 />
      case 5:
        return <TutorialLayout5 />
      case 6:
        return <TutorialLayout6 />
      case 7:
        return <TutorialLayout7 />
      case 8:
        return <TutorialLayout8 />
      case 9:
        return <TutorialLayout9 />
      case 10:
        return <TutorialLayout10 />
      case 11:
        return <TutorialLayout11 />
      case 12:
        return <TutorialLayout12 />
      case 13:
        return <TutorialLayout13 />
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
      case 8:
        return "min-h-screen bg-[#F9F9F9]"
      default:
        return "min-h-screen bg-[#F9F9F9]"
    }
  }

  return (
    <main className={getBackgroundClass()}>
      <Head>
        <title>{`Canopy Wave - ${tutorialPost.title}`}</title>
        <meta name="description" content={tutorialPost.metaDescription || tutorialPost.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://canopywave.com/resources/tutorials/${title}`} />
        <meta property="og:title" content={tutorialPost.title} />
        <meta property="og:description" content={tutorialPost.metaDescription || tutorialPost.description} />
        <meta property="og:image" content="https://canopywave.com/tutorials/banner.png" />
        <meta property="og:image:alt" content={tutorialPost.imageAlt || tutorialPost.title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Canopy Wave" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://canopywave.com/resources/tutorials/${title}`} />
        <meta property="twitter:title" content={tutorialPost.title} />
        <meta property="twitter:description" content={tutorialPost.metaDescription || tutorialPost.description} />
        <meta property="twitter:image" content="https://canopywave.com/tutorials/banner.png" />
        <meta property="twitter:image:alt" content={tutorialPost.imageAlt || tutorialPost.title} />

        {/* LinkedIn */}
        <meta property="linkedin:owner" content="Canopy Wave" />
      </Head>
      <Header />
      {renderTutorialLayout()}
      <Footer />
    </main>
  )
}