import '../styles/globals.css'

import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'

const interVariable = Inter({
  subsets: ['cyrillic', 'latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={interVariable.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
