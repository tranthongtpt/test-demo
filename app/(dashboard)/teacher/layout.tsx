'use client'

import ClientLayout from '@/components/dashboard/Layout/ClientLayout'
import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}
