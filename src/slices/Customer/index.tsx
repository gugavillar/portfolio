import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'

import { Subtitle } from '@/components'

export type CustomerProps = SliceComponentProps<Content.CustomerSlice>

const Customer = ({ slice }: CustomerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='w-full border-y-2 border-portfolio-gray-500 bg-portfolio-gray-700 bg-opacity-50 p-6 md:px-16'
    >
      <Subtitle subtitle='Clientes' />
      <ul className='flex w-full items-center gap-8 px-4 md:px-16'>
        {slice.items.map((item, index) => (
          <li key={index} className='flex space-y-4'>
            <PrismicNextImage
              className='w-48 object-contain p-3'
              field={item.customer_logo}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Customer
