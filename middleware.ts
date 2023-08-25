import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  if (path === "/") {
    return NextResponse.next()
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  if (!session && path === "/dashboard") {
    return NextResponse.redirect(new URL("/", req.url))
  } else if (session && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }
  return NextResponse.next()
}
