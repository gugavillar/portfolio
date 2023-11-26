import { PropsWithChildren } from 'react'

import type { Content } from '@prismicio/client'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

const paragraph: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-justify text-lg leading-9 text-white'>{children}</p>
  ),
}

type ContentProps = PropsWithChildren & {
  content: SliceComponentProps<Content.HomeContentSlice>['slice']['primary']
}

export const ContentHome = ({
  children,
  content: { role, name, description },
}: ContentProps) => {
  return (
    <div className='flex flex-col gap-9'>
      <h4 className='text-2xl text-white opacity-50'>{role}</h4>
      <h2 className='text-5xl font-bold text-white'>{name}</h2>
      <div className='space-y-5'>
        <PrismicRichText field={description} components={paragraph} />
        {children}
      </div>
    </div>
  )
}
