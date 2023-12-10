import type { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

import { GitHub, LinkedIn, Loop } from '@/components/Icon'

export type InfoHeaderProps = SliceComponentProps<Content.InfoHeaderSlice>

const H1: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className='text-[32px] font-semibold text-brand md:text-[64px]'>
      {children}
    </h1>
  ),
}

const InfoHeader = ({ slice }: InfoHeaderProps): JSX.Element => {
  return (
    <section
      className='flex w-full flex-col px-6 md:px-11 lg:px-[180px]'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='mt-14 space-y-2 md:mt-[152px] md:space-y-3'>
        <p className='font-semibold text-white md:text-2xl'>OLÁ, EU SOU</p>
        <PrismicRichText components={H1} field={slice.primary.name} />
        <p className='font-semibold text-white md:text-2xl'>
          {slice.primary.role}
        </p>
      </div>
      <Loop className='invisible absolute right-0 top-3 lg:visible' />
      <div className='mt-10 flex gap-6 md:mt-[60px]'>
        <PrismicNextLink
          className='btn-purple'
          field={slice.primary.linkedin_profile}
        >
          <LinkedIn /> LinkedIn
        </PrismicNextLink>
        <PrismicNextLink
          className='btn-pink'
          field={slice.primary.github_profile}
        >
          <GitHub />
          GitHub
        </PrismicNextLink>
      </div>
    </section>
  )
}

export default InfoHeader
