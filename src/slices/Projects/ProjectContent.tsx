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
    <h3 className='font-medium text-white md:text-2xl'>{children}</h3>
  ),
}

const Paragraph: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-justify text-sm font-light text-dark-400'>{children}</p>
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
    <div className='flex flex-col gap-6'>
      <PrismicNextImage
        sizes='(max-width: 768px) 714px, (max-width: 1280px) 450px, (min-width: 1281px) 450px'
        loading='lazy'
        field={item.screenshot}
      />
      <PrismicRichText components={H3} field={item.name} />
      <PrismicRichText components={Paragraph} field={item.description} />
      <div className='flex flex-wrap gap-2'>
        <PrismicRichText components={Technologies} field={item.technologies} />
      </div>
      <div className='mt-auto flex gap-6'>
        {item.link.link_type === 'Web' && (
          <PrismicNextLink
            className='btn-purple w-full md:w-[180px]'
            field={item.link}
          >
            <Link />
            Visualizar
          </PrismicNextLink>
        )}
        {item.github.link_type === 'Web' && (
          <PrismicNextLink
            className='btn-pink w-full md:w-[180px]'
            field={item.github}
          >
            <Link />
            Github
          </PrismicNextLink>
        )}
      </div>
    </div>
  )
}
