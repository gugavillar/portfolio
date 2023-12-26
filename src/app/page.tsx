import { Metadata } from 'next'
import { Author } from 'next/dist/lib/metadata/types/metadata-types'

import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'

import { components } from '@/slices'

export default async function HomePage() {
  const client = createClient()
  const page = await client.getSingle('home')

  return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('home')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    authors: page.data.meta_authors as Array<Author>,
    keywords: page.data.meta_keywords,
  }
}
