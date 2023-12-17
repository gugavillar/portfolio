import { type Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

import { Link } from '@/components/Icon'

const H3: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className='mt-6 font-medium text-white md:mt-10 md:text-2xl'>
      {children}
    </h3>
  ),
}

const Paragraph: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='mb-2 mt-4 text-justify text-sm font-light text-dark-400 md:mb-[26px] md:mt-[30px]'>
      {children}
    </p>
  ),
}

const Technologies: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-sm font-medium text-brand'>{children}</p>
  ),
}

type ProjectContentProps = {
  item: SliceComponentProps<Content.ProjectsSlice>['slice']['items'][number]
}

export const ProjectContent = ({ item }: ProjectContentProps) => {
  return (
    <div>
      <PrismicNextImage field={item.screenshot} />
      <PrismicRichText components={H3} field={item.name} />
      <PrismicRichText components={Paragraph} field={item.description} />
      <div className='flex flex-wrap gap-2'>
        <PrismicRichText components={Technologies} field={item.technologies} />
      </div>
      <PrismicNextLink
        className='btn-purple mt-8 w-full md:w-[180px]'
        field={item.link}
      >
        <Link />
        Visualizar
      </PrismicNextLink>
    </div>
  )
}