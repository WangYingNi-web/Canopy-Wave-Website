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
          <link rel="icon" href="/canopy.svg" />
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
