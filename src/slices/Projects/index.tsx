import { ReactElement } from 'react'

import type { Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { Container, Title } from '@/components'

import { ProjectContent } from './ProjectContent'

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>

const Projects = ({ slice }: ProjectsProps): ReactElement => {
  return (
    <Container
      sliceType={slice.slice_type}
      variation={slice.variation}
      className='bg-dark-700 md:py-[6.25rem]'
      id='projects'
    >
      <Title className='mb-6 md:mb-[3.75rem]'>{slice.primary.title}</Title>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-5 xl:grid-cols-3'>
        {slice.items.map((item, index) => (
          <ProjectContent item={item} key={index} />
        ))}
      </div>
    </Container>
  )
}

export default Projects
