import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
