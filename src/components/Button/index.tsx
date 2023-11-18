import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className='rounded-3xl border-2 border-portfolio-button-border bg-portfolio-border px-11 py-3 text-xl text-white transition-colors hover:border-portfolio-button-hover'>
      {children}
    </button>
  )
}
