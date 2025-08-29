import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image';
import { BlogPost } from './index'

interface BlogLayout2Props {
  blogPost: BlogPost
}

const BlogLayout2: React.FC<BlogLayout2Props> = ({ blogPost }) => {
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
            <iframe
              src="https://www.youtube.com/embed/CFv-CzlcXn4"
              title="AI Agent for Animal Health Monitoring | Multi-Step Analysis on Canopywave Cloud Platform"
              className="w-full h-auto rounded-[20px] shadow-md"
              style={{ aspectRatio: '16/9', minHeight: '315px' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
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

export default BlogLayout2