'use client'
import Login from '@/components/Login'
import React, { useState } from 'react'

const SignInPage = () => {
  const [loading, setLoading] = useState(false)

  return <Login />
}

export default SignInPage
