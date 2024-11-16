import { NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/prismicio'

export async function middleware(request: NextRequest) {
  const client = createClient()
  const repository = await client.getRepository()

  const locales = repository.languages.map((lang) => lang.id)
  const defaultLocale = locales[0]

  const { pathname } = request.nextUrl

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    )
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
