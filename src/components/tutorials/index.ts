import { ReactNode } from 'react'

export { default as TutorialLayout1 } from './TutorialLayout1'
export { default as TutorialLayout2 } from './TutorialLayout2'
export { default as TutorialLayout3 } from './TutorialLayout3'
export { default as TutorialLayout4 } from './TutorialLayout4'
export { default as TutorialLayout5 } from './TutorialLayout5'
export { default as TutorialLayout6 } from './TutorialLayout6'

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