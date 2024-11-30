import { Metadata } from 'next'
import { Author } from 'next/dist/lib/metadata/types/metadata-types'

import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'

import { components } from '@/slices'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const client = createClient()
  const page = await client.getSingle('home', { lang })

  return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const { lang } = await params
  const client = createClient()
  const page = await client.getSingle('home', { lang })

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    authors: page.data.meta_authors as Array<Author>,
    keywords: page.data.meta_keywords,
  }
}
