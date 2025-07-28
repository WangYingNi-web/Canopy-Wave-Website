import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image';
import { BlogPost } from './index'

interface BlogLayout2Props {
  blogPost: BlogPost
}

const BlogLayout2: React.FC<BlogLayout2Props> = ({ blogPost }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-[520px] relative mt-[84px]">
                <Image
                    src="/blog/workflows.png"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[160px]">
                    <SlideUp>
                <h1 className="text-4xl lg:text-5xl font-black text-[#80b224] mb-6 leading-tight leading-relaxed">
                  {/* {blogPost.title} */}
                  How to Choose the Right <br /> Storage for Your AI Workflows
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {blogPost.description}
                </p>
              </SlideUp>
                    </div>
                </div>
            </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          {blogPost.sections.map((section, index) => (
            <SlideUp key={index}>
              <div className="mb-12">
                {section.title && (
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-green-500 pl-4">
                    {section.title}
                  </h2>
                )}
                <div className="space-y-6">
                  {section.content.map((paragraph, pIndex) => (
                    <div key={pIndex} className="text-gray-700 leading-relaxed text-base">
                      {paragraph}
                    </div>
                  ))}
                </div>
              </div>
            </SlideUp>
          ))}
        </article>
      </div>
    </div>
  )
}

export default BlogLayout2