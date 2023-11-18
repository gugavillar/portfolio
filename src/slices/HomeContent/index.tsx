import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

import { Button } from '@/components'

export type HomeContentProps = SliceComponentProps<Content.HomeContentSlice>

const paragraph: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-justify text-lg leading-9 text-white'>{children}</p>
  ),
}

const HomeContent = ({ slice }: HomeContentProps): JSX.Element => {
  return (
    <section
      className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 md:flex-row'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage className='rounded-full' field={slice.primary.image} />
      <div className='flex flex-col gap-9'>
        <h4 className='text-2xl text-portfolio-500'>{slice.primary.role}</h4>
        <h2 className='text-5xl font-bold text-white'>{slice.primary.name}</h2>
        <div className='space-y-5'>
          <PrismicRichText
            field={slice.primary.description}
            components={paragraph}
          />
          <div className='flex gap-5'>
            <Button>Portfólio</Button>
            <Button>Contato</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContent
