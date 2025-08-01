import { ReactNode } from 'react'

export { default as TutorialLayout1 } from './TutorialLayout1'
export { default as TutorialLayout2 } from './TutorialLayout2'

// 导出通用的接口类型
export interface TutorialPost {
  id: number
  title: string
  description: string
  sections: {
    title: string
    content: (string | ReactNode)[]
  }[]
}