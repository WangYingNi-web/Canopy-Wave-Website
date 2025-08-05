import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google'; // 导入 next/font
import FloatingButtons from '../components/FloatingButtons';
import Chat from '@/components/Chart'

// 关键修改：显式声明需要的所有字重（包括900）
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'], // 确保包含900字重
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 预加载关键图片资源 */}
      {/* <link rel="preload" href="/gb200-nvl72/nvidia-gb200-nvl72.webp" as="image" type="image/svg+xml" /> */}
      {/* <link rel="preload" href="/home_banner.svg" as="image" type="image/svg+xml" /> */}
      {/* <link rel="preload" href="/compute/banner.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/storage/banner.svg" as="image" type="image/svg+xml" /> */}
      {/* <link rel="preload" href="/platform/banner.svg" as="image" type="image/svg+xml" /> */}
      {/* <link rel="preload" href="/.svg" as="image" type="image/svg+xml" /> */}
      {/* <link rel="preload" href="/about/banner.svg" as="image" type="image/svg+xml" /> */}
      {/* <link rel="preload" href="/networking/banner.svg" as="image" type="image/svg+xml" /> */}
      {/* <link rel="preload" href="/blog/banner.svg" as="image" type="image/svg+xml" /> */}
      <Head>
        {/* 基础Open Graph标签 */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Canopy Wave" />
        <meta property="og:title" content="Canopy Wave - High-Performance Computing Solutions" />
        <meta property="og:description" content="Leading provider of GPU computing, cloud infrastructure, and AI solutions with sustainable data centers in Iceland." />
        <meta property="og:image" content="https://canopywave.com/canopy.png" />
        <meta property="og:url" content="https://canopywave.com" />
        
        {/* Twitter Card标签 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@canopywave_cw" />
        <meta name="twitter:title" content="Canopy Wave - High-Performance Computing Solutions" />
        <meta name="twitter:description" content="Leading provider of GPU computing, cloud infrastructure, and AI solutions." />
        <meta name="twitter:image" content="https://canopywave.com/canopy.png" />
        
        {/* LinkedIn特定标签 */}
        <meta property="article:author" content="Canopy Wave" />
        <meta property="article:publisher" content="https://www.linkedin.com/company/canopywave/" />
      </Head>
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