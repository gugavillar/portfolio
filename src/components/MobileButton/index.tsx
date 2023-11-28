import { ComponentProps } from 'react'

export const MobileButton = (props: ComponentProps<'button'>) => {
  return (
    <button
      className='block cursor-pointer text-white opacity-50 md:hidden'
      {...props}
    >
      <span className='sr-only'>Toggle menu</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    </button>
  )
}
