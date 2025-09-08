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
        <div className="w-full mb-12">
          <SlideUp>
            <img
              src={
                blogPost.title === "Canopy Wave Launches Next-Gen GPU Cluster with NVIDIA GB200 NVL72" 
                  ? "/blog/blog2.png" 
                  : blogPost.title === "AI Generates Personalized Content"
                  ? "/blog/ai-content-generation.png"
                  : blogPost.title === "Why Enterprises Choose Dedicated LLM Endpoints?"
                  ? "/blog/dedicated-endpoints.png"
                  : blogPost.title === "GPU: The Core Engine of a New Era in Computing"
                  ? "/blog/gpu-computing.png"
                  : blogPost.title === "AI-Powered E-commerce"
                  ? "/blog/ai-shopping.png"
                  : blogPost.title === "AI's Role in Autonomous Driving"
                  ? "/blog/ai-car.png"
                  : "/blog1.webp"
                  
              }
              alt="Blog"
              className="w-full h-auto rounded-[20px] shadow-md"
            />
          </SlideUp>
        </div>
        
        {blogPost.sections.map((section, index) => (
          <SlideUp key={index}>
            {section.title && (
              <h2 className="text-xl font-semibold text-[#333] mt-8 mb-4">
                {section.title}
              </h2>
            )}
            <div className="space-y-4">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </SlideUp>
        ))}
      </article>
    </div>
  )
}

export default BlogLayout1