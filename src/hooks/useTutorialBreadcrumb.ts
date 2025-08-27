import { useMemo } from 'react'
import { useRouter } from 'next/router'

interface BreadcrumbItem {
  label: string
  href: string
  icon?: string
}

// 教程标题映射
const tutorialTitleMap: Record<string, string> = {
  'how-to-run-deepseek-r1-locally-on-a-canopy-wave-vm': 'How to Run DeepSeek-R1 Locally on a Canopy Wave VM',
  'how-to-run-the-llama-locally-on-a-canopy-wave-vm': 'How to Run the Llama Locally on a Canopy Wave VM',
  'how-to-run-the-kimi-k2-locally-on-a-canopy-wave-vm': 'How to Run the KIMI-K2 Locally on a Canopy Wave VM',
  'how-to-run-the-gpt-oss-locally-on-a-canopy-wave-vm': 'How to Run the GPT-OSS Locally on a Canopy Wave VM',
  'manage-cloud-via-api': 'Manage Cloud via API',
  'case-study': 'Case Studies',
  'nvidia-h100-vs-h200-vs-b200:-which-gpu-for-your-workload': 'NVIDIA H100 vs H200 vs B200: Which GPU for Your Workload'
}

export const useTutorialBreadcrumb = () => {
  const router = useRouter()
  const { title } = router.query

  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    const items: BreadcrumbItem[] = [
      {
        label: 'Home',
        href: '/',
        icon: '/tutorials/home.svg'
      },
      {
        label: 'Tutorials',
        href: '/resources/tutorials'
      }
    ]

    // 优先从查询参数获取title
    let tutorialSlug = title as string
    
    // 如果查询参数中没有title，尝试从路由路径中提取
    if (!tutorialSlug && router.asPath) {
      // 先匹配 tutorials 路径
      const tutorialsMatch = router.asPath.match(/\/resources\/tutorials\/([^/?]+)/)
      if (tutorialsMatch) {
        tutorialSlug = tutorialsMatch[1]
      } else {
        // 再匹配其他 resources 子路径（如 case-study）
        const resourcesMatch = router.asPath.match(/\/resources\/([^/?]+)/)
        if (resourcesMatch) {
          tutorialSlug = resourcesMatch[1]
        }
      }
    }

    // 如果有具体的教程标题，添加到面包屑中
    if (tutorialSlug) {
      const tutorialTitle = tutorialTitleMap[tutorialSlug] || tutorialSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      
      // 根据路径类型设置正确的 href
      const href = tutorialSlug === 'case-study' 
        ? `/resources/case-study` 
        : `/resources/tutorials/${tutorialSlug}`
      
      items.push({
        label: tutorialTitle,
        href: href
      })
    }

    return items
  }, [title, router.asPath])

  return breadcrumbItems
}