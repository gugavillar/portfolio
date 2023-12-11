import { ReactNode } from 'react'

import type { Content } from '@prismicio/client'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

import { Container } from '@/components/Container'
import { Loop } from '@/components/Icon'

import { SocialButtons } from './SocialButtons'

export type InfoHeaderProps = SliceComponentProps<Content.InfoHeaderSlice>

const H1: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className='text-[32px] font-semibold text-brand md:text-[64px]'>
      {children}
    </h1>
  ),
}

type ParagraphProps = {
  children: ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => (
  <p className='font-semibold text-white md:text-2xl'>{children}</p>
)

const InfoHeader = ({ slice }: InfoHeaderProps): JSX.Element => {
  return (
    <Container
      sliceType={slice.slice_type}
      variation={slice.variation}
      id='home'
    >
      <div className='mt-14 space-y-2 md:mt-[152px] md:space-y-3'>
        <Paragraph>OLÁ, EU SOU</Paragraph>
        <PrismicRichText components={H1} field={slice.primary.name} />
        <Paragraph>{slice.primary.role}</Paragraph>
      </div>
      <Loop className='invisible absolute right-0 top-3 -z-20 lg:visible' />
      <SocialButtons
        github={slice.primary.github_profile}
        linkedIn={slice.primary.linkedin_profile}
      />
    </Container>
  )
}

export default InfoHeader
