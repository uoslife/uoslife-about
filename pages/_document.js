import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko" className="scroll-smooth">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/static/logo.svg" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="true"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
          />
        </Head>

        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
