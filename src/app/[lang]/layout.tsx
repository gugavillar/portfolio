import { Poppins, Inter } from 'next/font/google'

import { createClient } from '@/prismicio'

import { Header, Footer } from '@/components'

import '../globals.css'
import { getLocales } from '@/utils/getLocales'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
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
  const [homeData, headerData] = await Promise.all([
    client.getSingle('home'),
    client.getSingle('headerlink', { lang }),
  ])
  const locales = await getLocales(homeData, client)

  return (
    <html
      lang='pt-BR'
      className={`${poppins.variable} ${inter.variable} scroll-pt-20 scroll-smooth`}
    >
      <body className='bg-dark-900 flex h-dvh w-dvw flex-col'>
        <section>
          <Header lang={lang} locales={locales} data={headerData.data} />
          <main className='flex flex-1 flex-col'>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  )
}
