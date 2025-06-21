import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hudence 艾登星 | 科技教育領導品牌',
  description: '艾登星（Hudence）是專注於科技教育的領導品牌，為學校、教育機構和家長提供優質的教育服務和課程。',
  keywords: '科技教育, 程式教育, STEM教育, 艾登星, Hudence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 