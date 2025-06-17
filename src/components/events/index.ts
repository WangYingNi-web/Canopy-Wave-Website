import { ReactNode } from 'react'

export { default as EventsLayout1 } from './EventsLayout1'
export { default as EventsLayout2 } from './EventsLayout2'

// 导出通用的接口类型
export interface EventPost {
  id: number
  title: string
  description: string
  sections: {
    title: string
    content: (string | ReactNode)[]
  }[]
}