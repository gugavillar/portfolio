import { type Content } from '@prismicio/client'
import {
  PrismicRichText,
  type JSXMapSerializer,
  type SliceComponentProps,
} from '@prismicio/react'

import { ExperienceTime } from './ExperienceTime'

const H3: JSXMapSerializer = {
  heading3: ({ children, text }) => (
    <h3
      data-cy={`experience-role-${text}`}
      className='font-medium text-white md:text-2xl'
    >
      {children}
    </h3>
  ),
}

const Paragraph: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-justify text-sm font-light text-dark-400 md:text-lg'>
      {children}
    </p>
  ),
}

type ExperienceContentProps = {
  item: SliceComponentProps<Content.ExperienceSlice>['slice']['items'][number]
}

export const ExperienceContent = ({ item }: ExperienceContentProps) => {
  return (
    <div className='flex flex-1 flex-col space-y-4 md:space-y-[26px]'>
      <div className='flex items-center justify-between'>
        <PrismicRichText components={H3} field={item.role} />
        <ExperienceTime
          initial={item.initial}
          final={item.final}
          className='invisible md:visible'
        />
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-medium text-brand md:text-base'>
          {item.company}
        </p>
        <ExperienceTime
          initial={item.initial}
          final={item.final}
          className='visible md:invisible'
        />
      </div>
      <PrismicRichText components={Paragraph} field={item.description} />
    </div>
  )
}
