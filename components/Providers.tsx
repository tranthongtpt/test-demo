'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Provider as ProvidersRedux } from 'react-redux'
import store from 'redux/store'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <ProvidersRedux store={store}>
      <SessionProvider>{children}</SessionProvider>
    </ProvidersRedux>
  )
}

export default Providers
