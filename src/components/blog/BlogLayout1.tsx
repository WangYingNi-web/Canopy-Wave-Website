import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image';
import { BlogPost } from './index'

// 删除本地的 BlogPost 接口定义

interface BlogLayout1Props {
  blogPost: BlogPost
}

const BlogLayout1: React.FC<BlogLayout1Props> = ({ blogPost }) => {
  return (
    <div className="max-w-[810px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <article className="prose max-w-none">
        <SlideUp>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#333] mb-4">
            {blogPost.title}
          </h1>
          <div className="text-sm mb-8 italic">
            {blogPost.description}
          </div>
        </SlideUp>
        <div className="max-w-[700px] mb-12">
          <SlideUp>
            <img
              src={
                blogPost.title === "Canopy Wave Launches Next-Gen GPU Cluster with NVIDIA GB200 NVL72" 
                  ? "/blog/blog2.webp" 
                  : blogPost.title === "AI Generates Personalized Content"
                  ? "/blog/ai-content-generation.webp"
                  : blogPost.title === "Why Enterprises Choose Dedicated LLM Endpoints?"
                  ? "/blog/dedicated-endpoints.webp"
                  : blogPost.title === "GPU: The Core Engine of a New Era in Computing"
                  ? "/blog/gpu-computing.webp"
                  : blogPost.title === "AI-Powered E-commerce"
                  ? "/blog/ai-shopping.webp"
                  : blogPost.title === "AI's Role in Autonomous Driving"
                  ? "/blog/ai-car.webp"
                  : blogPost.title === "Cost Breakdown: 32-Unit GB200 GPU Cluster"
                  ? "/blog/gpu-cluster-cost.webp"
                  : blogPost.title === "AI Transforms Pet Care" || blogPost.title === "How AI Transforms Pet Care"
                  ? "/blog/workflows2.webp"
                  : blogPost.title === "Humanity's Next Partner: The AI Agent"
                  ? "/blog/ai-agent.webp"
                  : blogPost.title === "How Artificial Intelligence is Transforming Pet Care"
                  ? "/blog/ai-pet.webp"
                  : blogPost.title === "Accelerated AI for Business"
                  ? "/blog/ai-business.webp"
                  :blogPost.title === "AI Fine-tuning for Beginners"
                  ? "/blog/ai-fine-tuning.webp"
                  :blogPost.title === "Decoding AI Hallucinations"
                  ? "/blog/ai-hallucinations.webp"
                  : blogPost.title === "AI: The Doctor's Third Eye in Medical Imaging"
                  ? "/blog/ai-doctor.webp"
                  : blogPost.title === "Gpus In Edge Computing"
                  ? "/blog/ai-gpu-edge.webp"
                  : blogPost.title === "GPU Virtualization: Unlocking the Intelligent Future of Compute Sharing"
                  ? "/blog/ai-GPU-Virtualization.webp"
                  : blogPost.title === "How Can Pay-Per-Token Inference Services Reduce AI Costs"
                  ? "/blog/token-inference-service.webp"
                  : blogPost.title === "NVLink 5.0 is a Game-Changer for AI Agent Development"
                  ? "/blog/ai-nvLink.webp"
                  : blogPost.title === "How Businesses Can Prepare for Rising GPU Prices"
                  ? "/blog/gpu-monitoring-system.webp"
                  : blogPost.title === "Canopy Wave Proprietary Monitoring System"
                  ? "/blog/monitoring-system.webp"
                  : "/blog1.webp"
                  
              }
              alt="Blog"
              className="w-full h-auto rounded-[20px] shadow-md"
            />
          </SlideUp>
        </div>
        
        {blogPost.sections.map((section, index) => {
          // 代码块渲染逻辑
          const renderContent = (contentArr: any[]) => {
            const result: React.ReactNode[] = [];
            let inCodeBlock = false;
            let codeLang = '';
            let codeLines: string[] = [];
            contentArr.forEach((paragraph, pIndex) => {
              if (typeof paragraph === 'string' && paragraph.startsWith('```')) {
                if (!inCodeBlock) {
                  // 进入代码块
                  inCodeBlock = true;
                  codeLang = paragraph.replace('```', '').trim();
                  codeLines = [];
                } else {
                  // 结束代码块
                  inCodeBlock = false;
                  result.push(
                    <pre key={`codeblock-${index}-${pIndex}`} className={`bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto`}>
                      <code className={codeLang ? `language-${codeLang}` : ''}>
                        {codeLines.join('\n')}
                      </code>
                    </pre>
                  );
                  codeLang = '';
                  codeLines = [];
                }
              } else if (inCodeBlock) {
                // 收集代码内容
                if (typeof paragraph === 'string') {
                  codeLines.push(paragraph);
                }
              } else if (React.isValidElement(paragraph)) {
                // React 元素也加灰色样式
                result.push(
                  <div key={`element-${index}-${pIndex}`} className="text-gray-700 leading-relaxed">{paragraph}</div>
                );
              } else {
                // 普通文本 - 处理换行符
                if (typeof paragraph === 'string' && paragraph.includes('\n')) {
                  const lines = paragraph.split('\n');
                  result.push(
                    <div key={pIndex} className="text-gray-700 leading-relaxed">
                      {lines.map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < lines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  );
                } else {
                  result.push(
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              }
            });
            return result;
          };

          return (
            <SlideUp key={index}>
              {section.title && (
                <h2 className="text-xl font-semibold text-[#333] mt-8 mb-4">
                  {section.title}
                </h2>
              )}
              <div className="space-y-4">
                {renderContent(section.content)}
              </div>
            </SlideUp>
          );
        })}
      </article>
    </div>
  )
}

export default BlogLayout1