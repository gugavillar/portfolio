import { Inter, Poppins } from 'next/font/google'

import { Footer, Header } from '@/components'
import { createClient } from '@/prismicio'

import '../globals.css'

import { getLocales } from '@/utils/getLocales'

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params
	const client = createClient()
	const [homeData, headerData] = await Promise.all([client.getSingle('home'), client.getSingle('headerlink', { lang })])
	const locales = await getLocales(homeData, client)

	return (
		<html className={`${poppins.variable} ${inter.variable} scroll-pt-20 scroll-smooth`} lang="pt-BR">
			<body className="bg-dark-900 flex h-dvh w-dvw flex-col">
				<section>
					<Header data={headerData.data} lang={lang} locales={locales} />
					<main className="flex flex-1 flex-col">{children}</main>
					<Footer />
				</section>
			</body>
		</html>
	)
}
