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

// 关键修改：显式声明需要的所有字重（包括900）
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'], // 确保包含900字重
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    try {
      if (process.env.NODE_ENV === 'development') {
        console.log('初始化 Google Analytics')
      }
      ReactGA.initialize('G-5T0R0TPE9P')
      
      if (process.env.NODE_ENV === 'development') {
        console.log('发送页面浏览事件:', router.pathname)
      }
      ReactGA.send({ hitType: 'pageview', page: router.pathname })
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Google Analytics 初始化失败:', error)
      }
    }
  }, [])
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      try {
        if (process.env.NODE_ENV === 'development') {
          console.log('路由变化:', url)
        }
        ReactGA.send({ hitType: 'pageview', page: url })
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Google Analytics 事件发送失败:', error)
        }
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
          {/* <FloatingButtons /> */}
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