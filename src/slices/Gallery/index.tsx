import type { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

import { Subtitle } from '@/components'

export type GalleryProps = SliceComponentProps<Content.GallerySlice>

const technologyTags: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <span className='rounded-full bg-portfolio-gray-700 px-3 py-1 text-white'>
      {children}
    </span>
  ),
}

const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='w-full px-6 md:px-16'
    >
      <Subtitle subtitle='Projetos' />
      <div className=' grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {slice.items.map((item, index) => {
          const hasRepoAndApp =
            item.gitrepo?.link_type === 'Web' && item.app?.link_type === 'Wep'
              ? 'visible'
              : undefined

          return (
            <div className='flex w-full flex-col space-y-4' key={index}>
              <figure>
                <figcaption className=' mb-3 text-lg text-white opacity-50'>
                  {item.project_name}
                </figcaption>
                <PrismicNextImage
                  className='h-[270px] w-[475px] rounded-2xl'
                  field={item.project_image}
                />
              </figure>
              <div className='mt-3 flex flex-wrap gap-2'>
                <PrismicRichText
                  field={item.technology}
                  components={technologyTags}
                />
              </div>
              <div
                className={`invisible flex w-full items-center gap-5 ${hasRepoAndApp}`}
              >
                <PrismicNextLink
                  className='text-white'
                  target='_blank'
                  field={item.gitrepo}
                >
                  Repositório
                </PrismicNextLink>
                <PrismicNextLink
                  className='text-white'
                  target='_blank'
                  field={item.app}
                >
                  Aplicação
                </PrismicNextLink>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery
