// src\pages\_app.tsx
'use client'
import '../app/globals.css' 
import type { AppProps } from 'next/app'
import HomeLayout from '../components/layouts/HomeLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}