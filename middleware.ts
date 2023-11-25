import { getToken } from 'next-auth/jwt'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  async function middleware(request: NextRequest, _next: NextFetchEvent) {
    const { pathname } = request.nextUrl
    const token = await getToken({ req: request })
    console.log('pathname', pathname)
    if (!token) {
      const url = new URL(`/login`, request.url)
      url.searchParams.set('callbackUrl', encodeURI(request.url))
      return NextResponse.redirect(url)
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
