"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';
import SlideUp from '@/components/slide';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  const blogPost: BlogPost = {
    id: Number(id),
    title: "Joint Blog - Accelerate Enterprise AI",
    description: "by James Liao, CTO of Canopy Wave, and Severi Tikkala, CTO of ConfidentialMind",
    sections: [
      {
        title: "",
        content: [
          "I am excited to invite Severi Tikkala, CTO of ConfidentialMind, to co-author this blog on the challenges of enabling AI in enterprises and how to navigate through these challenges.",
          "AI isn’t just a buzzword anymore. It’s quickly becoming the backbone of modern enterprise strategy—transforming how companies operate, compete, and grow. Whether you're a Fortune 500 company or a fast-scaling startup, AI is no longer optional. It's essential.",
          "So how do enterprises start with AI? Enterprises can start by using AI as a copilot to automate workflows, detecting anomalies, reaching decisions, and enhancing efficiencies. "
        ]
      },
      {
        title: "Where Do Enterprises Start with AI?",
        content: [
          "A practical entry point for many enterprises is to use AI as a copilot, such as automating workflows, detecting anomalies, accelerating decision-making, and enhancing overall efficiency."
        ]
      },
      {
        title: "Automating Workflows",
        content: [
          "Repetitive tasks such as data entry, reporting, internal ticketing, and customer service triage drain valuable time and resources. With AI, enterprises can automate these processes and save time—dramatically. For instance, summarizing lengthy reports using AI can reduce reading time by over 90%.",
          "By offloading routine work, employees can focus on strategic, high-impact initiatives—the kind that truly moves the business forward."
        ]
      },
      {
        title: "Detecting Anomalies",
        content: [
          "AI excels at spotting anomalies across large datasets. Rather than relying on brittle, rule-based validation, AI can learn patterns from historical data and flag outliers or inconsistencies using techniques like fuzzy matching, anomaly detection, and NLP.",
          "This makes it easier to identify subtle issues—like duplicate records with slight variations or inconsistent formatting—that traditional methods often miss."
        ]
      },
      {
        title: "Enabling Faster, Smarter Decisions",
        content: [
          "Enterprises today are awash in data but often struggle to derive timely insights. AI addresses this gap with real-time analytics, machine learning, and predictive modeling—turning data into action at unprecedented speed.",
          "Whether you're forecasting demand, detecting fraud, or optimizing logistics, AI enables faster, more confident decision-making."
        ]
      },
      {
        title: "Scaling Innovation",
        content: [
          "AI isn’t just about optimization. it’s a catalyst for innovation. With generative AI, computer vision, and natural language processing, enterprises can explore ideas that were unimaginable just a few years ago.",
          "From content generation to rapid prototyping, AI empowers teams to iterate, experiment, and scale innovation like never before."
        ]
      },
      {
        title: "But Wait, Can I Just Use ChatGPT or Deepseek?",
        content: [
          "That’s the tempting path: drop a report into ChatGPT and ask for a summary. But here’s the problem, data privacy and control.",
          "Uploading internal documents to public AI models can inadvertently expose sensitive information. Once shared, your data may be used to train future models, potentially benefitting competitors.",
          "You want your AI to learn from your business. But you don't want it to share your business."
        ]
      },
      {
        title: "Build Your Own AI",
        content: [
          "The solution? Enterprises need to build their own AI systems, ensuring that models learn from proprietary data without sharing it externally.",
          "Until recently, this required deep infrastructure investments, including training massive LLMs to managing GPU drivers and data center logistics. But the landscape has changed.",
          "Thanks to open-source LLMs and more accessible compute infrastructure, it's now feasible and smart for enterprises to develop private, high-performance AI solutions."
        ]
      },
      {
        title: "Your Infrastructure. Your Rules.",
        content: [
          "To make this real, enterprises need:",
          "• A trusted partner for AI inference and deployment.",
          "• A private cloud with dedicated infrastructure.",
          "• Total control over configuration, access, and security.",
          "That means no “noisy neighbors,” and no cross-tenant risks. Just your data, your environment, your compliance standards.",
          "Whether you're meeting SOC 2 or regional data residency laws, a private AI cloud ensures you're covered. You decide where your data lives, and you control what happens to it, eliminating jurisdictional and compliance headaches."
        ]
      },
      {
        title: "AI That's Ready to Go",
        content: [
          "That’s why Canopy Wave and ConfidentialMind have joined forces, to help enterprises kickstart their AI journey, quickly and securely.",
          "We’re offering a pre-configured Kubernetes environment loaded with pre-qualified LLMs such as Llama-4 and Deepseek, optimized for private deployments. Connecting your enterprise data with LLMs is quick and easy with premade data connectors, data ingestion, and RAG-pipelines.",
          "You no longer need to worry about setting up infrastructure, managing drivers, or debugging environments. Just plug in and build.",
          "With Canopy Wave's Instant GPU Private Cloud, you can spin up anywhere from 2 to thousands of H100/H200 GPUs instantly, no long procurement cycles, no supply chain delays, and no wasted engineering hours.",
          "Whether you're training new models or deploying inference pipelines at scale, we deliver the performance and flexibility you need, out of the box."
        ]
      },
      {
        title: "Why This Partnership Matters",
        content: [
          "This collaboration brings together:",
          "• Canopy Wave's private, high-performance GPU infrastructure",
          "• ConfidentialMind's expertise in AI systems deployment",
          "The result? A turnkey enterprise AI solution, without the traditional friction.",
          "If your team is looking to move fast, stay secure, and scale intelligently, this is the shortcut you've been waiting for.",
          "We're excited to share more updates, success stories, and technical guides soon. Stay tuned."
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <Header />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <article className="prose max-w-none">
          <SlideUp>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">{blogPost.title}</h1>
            <div className="text-sm mb-8 italic">{blogPost.description}</div>
          </SlideUp>
          <div className="w-full md:w-[700px]">
            <img
              src="/blog.svg"
              alt="Blog"
              className="w-full h-auto"
            />
          </div>
          <div>
            
            <h3 className="text-l text-gray-600 m-4 text-center">
            Canopy Wave + ConfidentialMind = A Faster Track to Enterprise AI
            </h3>
          </div>
          {blogPost.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl text-[#333] font-bold mb-4">{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </article>
      </div>
      <Footer />
    </main>
  );
}