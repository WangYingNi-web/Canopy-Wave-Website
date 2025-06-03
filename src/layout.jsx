// app/layout.jsx
import { Inter, Roboto } from 'next/font/google';

// 创建两种字体实例
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'],
  variable: '--font-roboto'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        {/* 添加用户代理检测脚本 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 检测是否为苹果设备
              const isApple = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
              
              // 添加相应的字体类
              if (isApple) {
                document.documentElement.classList.add('apple-font');
              } else {
                document.documentElement.classList.add('windows-font');
              }
            `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}