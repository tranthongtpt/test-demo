import { getToken } from 'next-auth/jwt'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'
import { adminEmails } from './data/dummy'

export default withAuth(
  async function middleware(request: NextRequest, _next: NextFetchEvent) {
    const { pathname } = request.nextUrl
    const token = await getToken({ req: request })

    if (!token) {
      const url = new URL(`/login`, request.url)
      url.searchParams.set('callbackUrl', encodeURI(request.url))
      return NextResponse.redirect(url)
    }
    if (token && pathname.startsWith('/login')) {
      const targetPath = token.typeUser === 'admin' ? '/teacher' : '/student' // Hoặc đường dẫn mặc định khác dựa trên vai trò
      return NextResponse.redirect(new URL(targetPath, request.url))
    }

    if (token.email && adminEmails.includes(token.email)) {
      token.typeUser = 'admin';
    }

    const isAdmin = token.typeUser === 'admin'
    const isProtectedPath = ['/teacher'].some((path) => pathname.startsWith(path))

    if ((isAdmin && !isProtectedPath) || (!isAdmin && isProtectedPath)) {
      const url = new URL(`/403`, request.url)
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.nextUrl.pathname.startsWith('/teacher' || '/student') && token === null) {
          return false
        }
        return true
      },
    },
    pages: {
      signIn: '/login',
    },
  }
)

export const config = {
  matcher: ['/teacher/:path*', '/student/:path*'],
}
