import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      // return redirectToSignIn({ returnBackUrl: req.url })
      const dashboard = new URL('/', req.url)

      return NextResponse.redirect(dashboard)
    }
    // redirect them to organization selection page
    if (auth.userId && auth.isPublicRoute) {
      const dashboard = new URL('/dashboard', req.url)
      return NextResponse.redirect(dashboard)
    }
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
