import { ReactNode } from 'react'

export { default as CaseStudies1 } from './CaseStudies1'

// 导出通用的接口类型
export interface CaseStudyPost {
  id: string
  title: string
  description: string
  sections: {
    title?: string
    content: (string | React.ReactNode)[]
  }[]
}