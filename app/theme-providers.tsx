'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { NextUIProvider } from '@nextui-org/react'
import Providers from '@/components/Providers'
export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      <Providers>
        <NextUIProvider>{children}</NextUIProvider>
      </Providers>
    </ThemeProvider>
  )
}
