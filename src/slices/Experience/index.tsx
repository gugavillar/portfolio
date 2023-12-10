import type { Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { Container, Title } from '@/components'

import { ExperienceList } from './ExperienceList'

export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>

const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <Container sliceType={slice.slice_type} variation={slice.variation}>
      <div className='py-10 md:py-[100px]'>
        <Title className='mb-6 md:mb-[26px]'>EXPERIÊNCIA</Title>
        <ExperienceList items={slice.items} />
      </div>
    </Container>
  )
}

export default Experience
