import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="">
        <Head>
          {/* 添加 Zendesk Widget 脚本 */}
          <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=5add6091-74b0-4922-b931-e76bf7e10a24"
            async
          ></script>
          <meta charSet="UTF-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          {/* 添加版本号或时间戳来防止缓存 */}
          <link rel="icon" href="/favicon.ico?v=1" />
          <link rel="icon" type="image/svg+xml" href="/canopy.svg?v=1" />
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
