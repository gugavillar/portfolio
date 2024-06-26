import { Poppins, Inter } from 'next/font/google'

import { repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import { Header, Footer } from '@/components'

import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='pt-BR'
      className={`${poppins.variable} ${inter.variable} scroll-pt-20 scroll-smooth`}
    >
      <body className='flex h-screen w-screen flex-col bg-dark-900'>
        <section>
          <Header />
          <main className='flex flex-1 flex-col'>{children}</main>
          <Footer />
        </section>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
