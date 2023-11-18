import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className='rounded-3xl border-2 border-portfolio-gray-100 bg-portfolio-gray-700 px-11 py-3 text-xl text-white transition-colors hover:border-portfolio-blue-500'>
      {children}
    </button>
  )
}
