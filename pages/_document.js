import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <link rel="manifest" href="/public/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#042940" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
