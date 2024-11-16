import { Poppins, Inter } from 'next/font/google'

import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

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
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const client = createClient()
  const home = await client.getSingle('home')
  const locales = await getLocales(home, client)

  return (
    <html
      lang='pt-BR'
      className={`${poppins.variable} ${inter.variable} scroll-pt-20 scroll-smooth`}
    >
      <body className='flex h-screen w-screen flex-col bg-dark-900'>
        <section>
          <Header params={{ lang }} locales={locales} />
          <main className='flex flex-1 flex-col'>{children}</main>
          <Footer />
        </section>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
