import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { type SliceComponentProps } from '@prismicio/react'

import { WrapperButton } from '@/components/WrapperButtons'

import { ContentHome } from './ContentHome'

export type HomeContentProps = SliceComponentProps<Content.HomeContentSlice>

const HomeContent = ({ slice }: HomeContentProps): JSX.Element => {
  return (
    <section
      className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 md:flex-row'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        className='max-w-80 h-80 max-h-80 w-80 rounded-full border-8 border-portfolio-gray-500 object-contain '
        field={slice.primary.image}
      />
      <ContentHome
        description={slice.primary.description}
        name={slice.primary.name}
        role={slice.primary.role}
      >
        <WrapperButton />
      </ContentHome>
    </section>
  )
}

export default HomeContent
