import { ReactNode } from 'react'

type PageTitleProps = {
  children: ReactNode
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <div className='w-full border-y-2 border-portfolio-gray-700 bg-portfolio-gray-800'>
      <h2 className='px-6 py-9 text-4xl font-bold text-white md:px-14 md:py-12 md:text-5xl'>
        {children}
      </h2>
    </div>
  )
}
