import { ReactElement } from 'react'

import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { type SliceComponentProps } from '@prismicio/react'

import { Container, Title } from '@/components'

import { ActionButtons } from './ActionButtons'
import { PersonalDescription } from './PersonalDescription'

export type AboutProps = SliceComponentProps<Content.AboutSlice>

const About = ({ slice }: AboutProps): ReactElement => {
  return (
    <Container
      className='bg-dark-700 mt-14 min-h-[22.625rem] py-10 lg:py-[6.25rem]'
      sliceType={slice.slice_type}
      variation={slice.variation}
      id='about'
    >
      <div className='flex items-center gap-32'>
        <PrismicNextImage
          loading='lazy'
          height={256}
          className='border-brand hidden h-3/4 rounded border-l-4 lg:flex'
          field={slice.primary.image}
        />
        <div>
          <Title>{slice.primary.title}</Title>
          <PersonalDescription
            location={slice.primary.location}
            aboutMe={slice.primary.about_me}
          />
          <ActionButtons
            resumeLink={slice.primary.resume_link}
            labelButton={slice.primary.resume_link_label}
          />
        </div>
      </div>
    </Container>
  )
}

export default About
