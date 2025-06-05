import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* 添加 Zendesk Widget 脚本 */}
          <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=5add6091-74b0-4922-b931-e76bf7e10a24"
            async
          ></script>
          <meta charSet="UTF-8" />
          
          {/* 添加版本号或时间戳来防止缓存 */}
          <link rel="icon" href="/favicon.ico?v=1" />
          <link rel="icon" type="image/svg+xml" href="/canopy.svg?v=1" />
          
          {/* 添加苹果设备专用图标声明 - 解决Safari收藏夹图标过大问题 */}
          <link rel="apple-touch-icon" sizes="180x180" href="/Icon-adaptation/apple-touch-icon-180x180.png?v=1" />
          <link rel="apple-touch-icon" sizes="152x152" href="/Icon-adaptation/apple-touch-icon-152x152.png?v=1" />
          <link rel="apple-touch-icon" sizes="120x120" href="/Icon-adaptation/apple-touch-icon-120x120.png?v=1" />
          <link rel="apple-touch-icon" sizes="76x76" href="/Icon-adaptation/apple-touch-icon-76x76.png?v=1" />
          <link rel="apple-touch-icon" sizes="60x60" href="/Icon-adaptation/apple-touch-icon-60x60.png?v=1" />
          
          {/* 通用图标 */}
          <link rel="icon" type="image/png" sizes="32x32" href="/Icon-adaptation/favicon-32x32.png?v=1" />
          <link rel="icon" type="image/png" sizes="16x16" href="/Icon-adaptation/favicon-16x16.png?v=1" />
          <link rel="shortcut icon" href="/favicon.ico?v=1" />
          
          {/* 添加网站名称和主题颜色 */}
          <meta name="application-name" content="Canopy" />
          <meta name="apple-mobile-web-app-title" content="Canopy" />
          <meta name="theme-color" content="#1a2a6c" />

          {/* 添加 Safari 固定标签图标 */}
          {/* <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#1a2a6c" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument