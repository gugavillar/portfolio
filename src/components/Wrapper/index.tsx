import { ReactNode } from 'react'

type WrapperProps = {
  title: ReactNode
  children: ReactNode
}

export const Wrapper = ({ children, title }: WrapperProps) => {
  return (
    <div className='flex w-full flex-col px-6 md:w-1/2 md:px-14'>
      <h3 className='mb-6 text-xl font-bold text-white md:text-2xl'>{title}</h3>
      <div className='space-y-11'>{children}</div>
    </div>
  )
}
