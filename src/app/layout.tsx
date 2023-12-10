import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'

import { repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import { Header, Footer } from '@/components'

import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Gustavo Villar front-end portfólio',
}

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
    <html lang='pt-BR' className={`${poppins.variable} ${inter.variable}`}>
      <body className='flex h-screen w-screen flex-col bg-dark-900'>
        <Header />
        <main className='flex flex-1 flex-col'>{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
