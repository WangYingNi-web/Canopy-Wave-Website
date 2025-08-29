import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google'; // 导入 next/font
import FloatingButtons from '../components/FloatingButtons';
import Chat from '@/components/Chart'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga4'

import localFont from 'next/font/local'

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter'
})
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: Record<string, any>[];
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // / 备用分析函数
  const sendToFallbackAnalytics = async (page: string) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        })
      })
    } catch (error) {
      // 静默处理
    }
  }
  useEffect(() => {
    try {
      ReactGA.initialize('G-5T0R0TPE9P')
      ReactGA.send({ hitType: 'pageview', page: router.pathname })
    } catch (error) {
      // GA 失败时使用备用方案
      sendToFallbackAnalytics(router.pathname)
    }
    
    // 检查 GA 是否真正加载成功
    setTimeout(() => {
      if (typeof window !== 'undefined' && !window.gtag) {
        sendToFallbackAnalytics(router.pathname)
      }
    }, 3000)
  }, [])
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      try {
        ReactGA.send({ hitType: 'pageview', page: url })
      } catch (error) {
        sendToFallbackAnalytics(url)
      }
    }
  
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <>
      {/* 预加载关键图片资源 */}
      {/* <link rel="preload" href="/gb200-nvl72/nvidia-gb200-nvl72.webp" as="image" type="image/svg+xml" /> */}
      {/* <link rel="preload" href="/home_banner.svg" as="image" type="image/svg+xml" /> */}


      <div id="root" className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
          <FloatingButtons />
          <div className="fixed flex bottom-5 right-5 z-[999]">
            <Chat />
          </div>
          <Toaster />
        </ThemeProvider>
      </div>
    </>
  )
}

export default MyApp