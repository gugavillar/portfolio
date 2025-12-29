import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST() {
	revalidateTag('prismic', 'all')

	return NextResponse.json({ now: Date.now(), revalidated: true })
}
