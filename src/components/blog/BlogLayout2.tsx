import React from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image';
import { BlogPost } from './index'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface BlogLayout2Props {
  blogPost: BlogPost
}

const BlogLayout2: React.FC<BlogLayout2Props> = ({ blogPost }) => {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/resources/tutorials/how-to-choose-the-right-storage-for-your-ai-workflows')
  }, [])
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
              <h1 className="text-4xl lg:text-5xl font-black text-[#80b224] mb-6 leading-tight">
                How to Choose the Right <br className="hidden sm:block" /> Storage for Your AI Workflows
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {blogPost.description}
              </p>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Content Section - 修改这里的容器设置 */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none
              /* 强制所有文本换行 */
              [&_*]:break-words [&_*]:overflow-wrap-anywhere
              /* 表格响应式处理 */
              [&_table]:w-full [&_table]:table-auto [&_table]:overflow-x-auto
              [&_table]:block [&_table]:whitespace-nowrap
              [&_td]:min-w-0 [&_td]:break-words [&_td]:whitespace-normal
              [&_th]:min-w-0 [&_th]:break-words [&_th]:whitespace-normal
              /* 列表项处理 */
              [&_li]:break-words [&_li]:overflow-wrap-anywhere
              /* 段落处理 */
              [&_p]:break-words [&_p]:overflow-wrap-anywhere
              /* 标题处理 */
              [&_h1]:break-words [&_h2]:break-words [&_h3]:break-words
              /* 移动端特殊处理 */
              max-sm:[&_table]:text-sm max-sm:[&_td]:p-2 max-sm:[&_th]:p-2
              max-sm:[&_li]:text-sm max-sm:[&_p]:text-sm
            ">
            {blogPost.sections.map((section, index) => (
              <SlideUp key={index}>
                <div className="mb-12 w-full">
                  {section.title && (
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-green-500 pl-4">
                      {section.title}
                    </h2>
                  )}
                  <div className="space-y-6 w-full">
                    {section.content.map((paragraph, pIndex) => (
                      <div key={pIndex} className="text-gray-700 leading-relaxed text-base w-full break-words">
                        {paragraph}
                      </div>
                    ))}
                  </div>
                </div>
              </SlideUp>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}


export default BlogLayout2