import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { type SliceComponentProps } from '@prismicio/react'

import { Container, Title } from '@/components'

import { ActionButtons } from './ActionButtons'
import { PersonalDescription } from './PersonalDescription'

export type AboutProps = SliceComponentProps<Content.AboutSlice>

const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Container
      className='mt-14 min-h-[362px] bg-dark-700 py-10 lg:py-[100px]'
      sliceType={slice.slice_type}
      variation={slice.variation}
      id='about'
    >
      <div className='flex items-center gap-32'>
        <PrismicNextImage
          loading='lazy'
          className='hidden h-3/4 rounded border-l-4 border-brand lg:flex'
          field={slice.primary.image}
        />
        <div>
          <Title>SOBRE MIM</Title>
          <PersonalDescription
            location={slice.primary.location}
            aboutMe={slice.primary.about_me}
          />
          <ActionButtons />
        </div>
      </div>
    </Container>
  )
}

export default About
