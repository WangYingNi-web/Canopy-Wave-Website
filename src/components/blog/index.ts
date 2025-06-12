import { ReactNode } from 'react'

export { default as BlogLayout1 } from './BlogLayout1'
export { default as BlogLayout2 } from './BlogLayout2'

// 导出通用的接口类型
export interface BlogPost {
  id: number
  title: string
  description: string
  sections: {
    title: string
    content: (string | ReactNode)[]
  }[]
}