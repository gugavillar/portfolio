import { SliceZone } from '@prismicio/react'
import type { Metadata } from 'next'
import type { Author } from 'next/dist/lib/metadata/types/metadata-types'

import { createClient } from '@/prismicio'
import { components } from '@/slices'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
	const { lang } = await params
	const client = createClient()
	const page = await client.getSingle('home', { lang })

	return <SliceZone components={components} slices={page.data.slices} />
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
	const { lang } = await params
	const client = createClient()
	const page = await client.getSingle('home', { lang })

	return {
		authors: page.data.meta_authors as Array<Author>,
		description: page.data.meta_description,
		keywords: page.data.meta_keywords,
		title: page.data.meta_title,
	}
}
