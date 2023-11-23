'use client'

import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
