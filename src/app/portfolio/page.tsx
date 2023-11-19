import { Metadata } from 'next'

import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'

import { PageTitle } from '@/components'

import { components } from '@/slices'

export default async function PortfolioPage() {
  const client = createClient()
  const page = await client.getSingle('portfolio')

  return (
    <section className='flex w-full flex-col gap-6'>
      <PageTitle>{page.data.title}</PageTitle>
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('portfolio')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
