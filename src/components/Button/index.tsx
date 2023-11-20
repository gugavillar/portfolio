import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className='rounded-3xl border-2 border-portfolio-gray-100 bg-portfolio-gray-700 px-11 py-3 text-xl text-white transition-colors hover:border-portfolio-blue-500'
    >
      {children}
    </button>
  )
}
