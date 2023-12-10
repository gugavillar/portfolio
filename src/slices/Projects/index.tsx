import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>

const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for projects (variation: {slice.variation}) Slices
    </section>
  )
}

export default Projects
