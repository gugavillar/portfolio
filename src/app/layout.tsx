import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR' className={`${poppins.variable}`}>
      <body className='flex h-screen w-screen flex-col bg-portfolio-background'>
        <Header />
        <main className='flex flex-1'>{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
