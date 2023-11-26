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
      className='w-full px-6 md:px-16'
    >
      <Subtitle subtitle='Clientes' />
      <ul className='flex w-full gap-8 pl-4 md:pl-16'>
        {slice.items.map((item, index) => (
          <li key={index} className='w-32 space-y-4 py-6'>
            <PrismicNextImage field={item.customer_logo} />
            <p className='text-center text-white opacity-50'>
              {item.customer_name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Customer
