'use client'
import React, { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { signIn, useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import LoadingScreen from './dashboard/LoadingScreen'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { setSession } from 'redux/features/sessionSlice'

type Props = {
  className?: string
}

const Login = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { data: session } = useSession()
  const router = useRouter()
  const dispatch = useDispatch()

  const MySwal = withReactContent(Swal)

  const validateEmail = (userName: string) => userName.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)

  const validationState = useMemo(() => {
    if (userName === '') return undefined
    return validateEmail(userName) ? 'valid' : 'invalid'
  }, [userName])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', {
      username: userName,
      password: password,
      redirect: false,
    })

    if (res?.error) {
      setLoading(false)
      MySwal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        icon: 'error',
        title: 'Lỗi',
      })
    } else {
      MySwal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        icon: 'success',
        title: 'Đăng nhập thành công!',
      }).then(() => {
        setLoading(false)
        if (session) {
          const user = session.user as User
          if (user && user.typeUser === 'admin') {
            router.push('/teacher')
          } else {
            router.push('/student')
          }
        }
      })
    }
  }

  useEffect(() => {
    if (session) {
      dispatch(setSession(session))
      const user = session.user as User
      if (user && user.typeUser === 'admin') {
        router.push('/teacher')
      } else {
        router.push('/student')
      }
    }
  }, [session])

  return (
    <div>
      {loading && <LoadingScreen />}
      <div className="my-56 flex min-h-full w-full items-center justify-center text-gray-600">
        <div className="relative">
          <div className="a-z-10 absolute -left-20 -top-20 hidden h-56 w-56 text-red-300 sm:block">
            <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="a"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.6) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
            </svg>
          </div>
          <div className="a-z-10 absolute -bottom-20 -right-20 hidden h-28 w-28 text-red-300 sm:block">
            <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="b"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.5) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
            </svg>
          </div>
          <div className="relative flex flex-col rounded-lg border-gray-400 bg-white px-4 shadow-lg sm:w-[30rem]">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <Image src="/images/logos/logo.svg" alt="logo" height={140} width={180} priority />
              </div>
              <p className="text-center text-xl text-gray-600">Welcome back!</p>
              <Button
                // href='#'
                onClick={() => signIn('google')}
                className="mx-auto my-4 flex items-center justify-center rounded-lg text-white shadow-md hover:bg-gray-100"
              >
                <div className="px-4 py-3">
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <h1 className="w-5/6 px-4 py-3 text-center font-bold text-gray-600">
                  Đăng nhập bằng Google
                </h1>
              </Button>
              <form onSubmit={onSubmit} className="mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Tên đăng nhập
                  </label>
                  <input
                    type="text"
                    className="bg--100 block w-full cursor-text appearance-none rounded-md border border-gray-400 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <label
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      htmlFor="password"
                    >
                      Mật khẩu
                    </label>
                    <Link
                      href="#"
                      className="cursor-pointer text-red-500 no-underline hover:text-red-400"
                    >
                      <small className="">Quên mật khẩu?</small>
                    </Link>
                  </div>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="password"
                      id="password"
                      className="bg--100 relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="············"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <button
                    className="grid w-full cursor-pointer select-none rounded-md border border-red-500 bg-red-500 px-5 py-2 text-center align-middle text-sm text-white shadow hover:border-red-600 hover:bg-red-600 hover:text-white focus:border-red-600 focus:bg-red-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>

              <p className="mb-4 text-center">
                <a href="#" className="cursor-pointer text-red-500 no-underline hover:text-red-700">
                  Tạo tài khoản
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
