import type { AppProps } from 'next/app'
import '../styles/global.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google'; // 导入 next/font

// 关键修改：显式声明需要的所有字重（包括900）
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'], // 确保包含900字重
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={inter.className}> {/* 应用字体类名 */}
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </div>
  )
}

export default MyApp