import { ComponentProps, ReactNode } from 'react'

type MenuWrapperProps = ComponentProps<'nav'> & {
  children: ReactNode
}

export const MenuWrapper = ({ children, ...props }: MenuWrapperProps) => {
  return (
    <nav aria-label='Menu principal' {...props}>
      <menu className='flex flex-col gap-5 text-dark-400 md:flex-row'>
        {children}
      </menu>
    </nav>
  )
}
