import { ReactElement } from 'react'

import type { Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { Container, Title } from '@/components'

import { ExperienceList } from './ExperienceList'

export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>

const Experience = ({ slice }: ExperienceProps): ReactElement => {
  return (
    <Container
      sliceType={slice.slice_type}
      variation={slice.variation}
      id='experience'
    >
      <div className='overflow-x-clip py-10 md:py-[6.25rem]'>
        <Title className='mb-6 md:mb-[1.625rem]'>{slice.primary.title}</Title>
        <ExperienceList items={slice.items} />
      </div>
    </Container>
  )
}

export default Experience
