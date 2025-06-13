import React, { useState } from 'react'
import { useRouter } from 'next/router'
import SlideUp from '@/components/slide'
import Image from 'next/image';
import { BlogPost } from './index'

interface BlogLayout2Props {
  blogPost: BlogPost
}

interface FormData {
  email: string
  firstName: string
  lastName: string
  companyName: string
  country: string
  marketing: boolean
}
interface FormErrors {
  email: string
  firstName: string
  lastName: string
  companyName: string
  country: string
}

const BlogLayout2: React.FC<BlogLayout2Props> = ({ blogPost }) => {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    marketing: false
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    country: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
  
    if (!value.trim()) {
      setFormErrors(prev => ({
        ...prev,
        [name]: 'Please complete this required field.'
      }))
    } else if (name === 'email' && !validateEmail(value)) {
      setFormErrors(prev => ({
        ...prev,
        email: 'Email must be formatted correctly.'
      }))
    } else {
      // 如果验证通过，清除错误信息
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const sendEmail = async (formData: FormData) => {
    try {
      const emailBody = `
New registration information for webinars:

name: ${formData.firstName} ${formData.lastName}
email: ${formData.email}
Company: ${formData.companyName}
Country/Region: ${formData.country}
Marketing communication agreement: ${formData.marketing ? 'Yes' : 'No'}

Registered webinars: ${blogPost.title}
      `.trim()

      const response = await fetch('https://sequoia-paas.canopywave.io/api/v1/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer alsfkjalsdkfjldksjfalksdjfljk13123'
        },
        body: JSON.stringify({
          subject: `New registration information for webinars - ${blogPost.title}`,
          recipients: [
            "sales@canopywave.com",
          ],
          body: emailBody
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  const handleWatchClick = async (e: React.FormEvent) => {
    e.preventDefault()

    // 表单验证
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.companyName || !formData.country) {
      setSubmitMessage('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // 发送邮件
      await sendEmail(formData)

      // 显示成功消息
      setSubmitMessage('registered successfully Jumping to the video page ..')

      // 延迟跳转，让用户看到成功消息
      setTimeout(() => {
        router.push('/webinar/gpu-performance')
      }, 1500)

    } catch (error) {
      setSubmitMessage('Submission failed, please try again later')
    } finally {
      setIsSubmitting(false)
    }
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
                  <h3 className="text-l text-gray-800 pl-4">James Liao <br /> Chief Technology Officer, Co-founder</h3>
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

                {submitMessage && (
                  <div className={`mb-4 p-3 rounded-md text-sm ${submitMessage.includes('成功')
                    ? 'bg-green-100 text-green-700 border border-green-300'
                    : 'bg-red-100 text-red-700 border border-red-300'
                    }`}>
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleWatchClick} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed ${formErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#2D3748] mb-1">
                      First name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {formErrors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Last name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {formErrors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Company name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed ${formErrors.companyName ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {formErrors.companyName && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#2D3748] mb-1">
                      Country/Region<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#80B224] focus:border-transparent bg-white disabled:bg-gray-100 disabled:cursor-not-allowed ${formErrors.country ? 'border-red-500' : 'border-gray-300'
                        }`}
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
                    {formErrors.country && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.country}</p>
                    )}
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="marketing"
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="mt-1 h-4 w-4 text-[#80B224] focus:ring-[#80B224] border-gray-300 rounded disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full bg-[#80B224] hover:bg-[#6B9A1F] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Watch'
                    )}
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