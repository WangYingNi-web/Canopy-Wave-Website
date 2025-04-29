import type { AppProps } from 'next/app'
import '../styles/global.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
