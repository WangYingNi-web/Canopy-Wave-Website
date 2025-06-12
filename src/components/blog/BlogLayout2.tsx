import React from 'react'
import { useRouter } from 'next/router'
import SlideUp from '@/components/slide'
import Image from 'next/image';
import { BlogPost } from './index'

interface BlogLayout2Props {
  blogPost: BlogPost
}

const BlogLayout2: React.FC<BlogLayout2Props> = ({ blogPost }) => {
  const router = useRouter()
  const handleWatchClick = (e: React.FormEvent) => {
    e.preventDefault()
    // 跳转到视频观看页面
    router.push('/webinar/gpu-performance')
  }
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-40 pb-24">
      <article className="prose max-w-none">
        <div className="w-full mb-12">
          <SlideUp>
            <img
              src="/CTO.png"
              alt="Blog"
              className="w-full h-auto rounded-[20px] shadow-md"
            />
          </SlideUp>
        </div>

        {/* 双栏布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 主内容区域 */}
          <div className="lg:col-span-8 pr-10">
            <SlideUp>
              <div className="text-left mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6 leading-tight">
                  {blogPost.title}
                </h1>
                <div className="text-lg mb-8 text-[#4A5568] font-medium">
                  {blogPost.description}
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <Image src="/blog/human.svg" alt="Value icon" width={24} height={24} className='svg-gray' />
                  </div>
                  <h3 className="text-l text-gray-800 pl-4">James Liao <br /> Chief Technology Officer Canopy Wave</h3>
                  <div className="flex-shrink-0 flex items-center justify-center ml-16">
                    <Image src="/blog/clock.svg" alt="Value icon" width={24} height={24} className='svg-gray' />
                  </div>
                  <h3 className="text-l text-gray-800 pl-4">24 min. webinar</h3>
                </div>
                {/* 装饰线 */}
                <hr className="border-t border-gray-800 mt-8" />
              </div>
            </SlideUp>

            {blogPost.sections.map((section, index) => (
              <div key={index} className="mb-12">
                {section.title && (
                  <h2 className="text-3xl text-[#333] font-bold mb-6">
                    {section.title}
                  </h2>
                )}
                <div className="space-y-6">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg leading-relaxed text-[#2D3748]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 侧边栏 */}
          <div className="lg:col-span-4">
            <div className="top-8">
              <div className="bg-gradient-to-br bg-[#F1F3F6] p-10 rounded-[20px]">
                <h3 className="text-xl font-bold text-[#333] mb-4">Watch the webinar on-demand</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#2D3748] mb-1">
                      First name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Last name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent"
                    />
                  </div>

                  {/* <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Job title<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent"
                    />
                  </div> */}

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Company name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Country/Region<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent bg-white"
                    >
                      <option value="">Please Select</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="CN">China</option>
                      <option value="AU">Australia</option>
                      <option value="SG">Singapore</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="marketing"
                      name="marketing"
                      className="mt-1 h-4 w-4 text-[#80B224] focus:ring-[#80B224] border-gray-300 rounded"
                    />
                    <label htmlFor="marketing" className="text-sm text-[#2D3748]">
                      I agree to receive marketing communications from CanopyWave.
                    </label>
                  </div>

                  <div className="text-xs text-[#4A5568] leading-relaxed">
                    You can unsubscribe at any time by clicking "Unsubscribe" at the bottom of any marketing email you receive from us and updating your email preferences. See CanopyWave's{' '}
                    <a href="/privacy" className="text-[#80B224] hover:underline">
                      Privacy Policy
                    </a>{' '}
                    for more information on our privacy practices and guidelines.
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#80B224] hover:bg-[#6B9A1F] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                    onClick={handleWatchClick}
                  >
                    Watch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogLayout2