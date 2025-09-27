import { ComponentProps, ReactNode } from 'react'

type MenuWrapperProps = ComponentProps<'nav'> & {
  children: ReactNode
}

export const MenuWrapper = ({ children, ...props }: MenuWrapperProps) => {
  return (
    <nav aria-label='Menu principal' {...props}>
      <menu className='text-dark-400 flex flex-col gap-5 md:flex-row md:gap-14'>
        {children}
      </menu>
    </nav>
  )
}
