import type { Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { Container, Title } from '@/components'

import { ProjectContent } from './ProjectContent'

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>

const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <Container
      sliceType={slice.slice_type}
      variation={slice.variation}
      className='bg-dark-700 md:py-[100px]'
      id='projects'
    >
      <Title className='mb-6 md:mb-[60px]'>{slice.primary.title}</Title>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-5 xl:grid-cols-3'>
        {slice.items.map((item, index) => (
          <ProjectContent item={item} key={index} />
        ))}
      </div>
    </Container>
  )
}

export default Projects
