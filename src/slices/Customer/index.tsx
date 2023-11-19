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
          <li key={index} className='py-6'>
            <p className='text-xl text-white opacity-50'>
              {item.customer_name}
            </p>
            {/* <PrismicNextImage field={item.customer_logo} /> */}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Customer
