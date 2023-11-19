import { ReactNode } from 'react'

import { Subtitle } from '@/components'

type WrapperProps = {
  title: string
  children: ReactNode
}

export const Wrapper = ({ children, title }: WrapperProps) => {
  return (
    <div className='flex w-full flex-col px-6 md:w-1/2 md:px-14'>
      <Subtitle subtitle={title} />
      <div className='space-y-11'>{children}</div>
    </div>
  )
}
