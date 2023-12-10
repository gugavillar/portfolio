import type { Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { ExperienceList } from './ExperienceList'

export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>

const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex w-full flex-col px-6 md:px-11 lg:px-[180px]'
    >
      <div className='py-10 md:py-[100px]'>
        <h2 className='mb-6 text-2xl font-semibold text-white md:mb-[26px]'>
          EXPERIÊNCIA
        </h2>
        <ExperienceList items={slice.items} />
      </div>
    </section>
  )
}

export default Experience
