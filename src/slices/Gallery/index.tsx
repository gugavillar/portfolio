import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'

import { Subtitle } from '@/components'

export type GalleryProps = SliceComponentProps<Content.GallerySlice>

const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='w-full px-6 md:px-16'
    >
      <Subtitle subtitle='Galeria' />
      <div className=' grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {slice.items.map((item, index) => (
          <figure key={index}>
            <figcaption className=' mb-3 text-lg text-white opacity-50'>
              {item.project_name}
            </figcaption>
            <PrismicNextImage
              className='h-[270px] w-[475px] rounded-2xl'
              field={item.project_image}
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
