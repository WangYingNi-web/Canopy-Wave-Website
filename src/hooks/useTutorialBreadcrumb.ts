import { useMemo } from 'react'
import { useRouter } from 'next/router'

interface BreadcrumbItem {
  label: string
  href: string
}

// 教程标题映射
const tutorialTitleMap: Record<string, string> = {
  'how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm': 'How to Run DeepSeek-R1 Locally on a Canopy Wave VM?',
  'how-to-run-the-llama-locally-on-a-canopy-wave-vm': 'How to Run the Llama Locally on a Canopy Wave VM?',
  'how-to-run-the-kimi-k2-locally-on-a-canopy-wave-vm': 'How to Run the KIMI-K2 Locally on a Canopy Wave VM?',
  'manage-cloud-via-api': 'Manage Cloud via API'
}

export const useTutorialBreadcrumb = () => {
  const router = useRouter()
  const { title } = router.query

  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    const items: BreadcrumbItem[] = [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Resources',
        href: '/resources'
      },
      {
        label: 'Tutorials',
        href: '/resources/tutorials'
      }
    ]

    // 如果有具体的教程标题，添加到面包屑中
    if (title && typeof title === 'string') {
      const tutorialTitle = tutorialTitleMap[title] || title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      items.push({
        label: tutorialTitle,
        href: `/resources/tutorials/${title}`
      })
    }

    return items
  }, [title])

  return breadcrumbItems
}