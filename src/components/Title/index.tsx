import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

type TitleProps = ComponentProps<'h2'> & {
  children: string
}

export const Title = ({ children, className, ...props }: TitleProps) => {
  return (
    <h2
      className={twMerge(
        'mb-4 text-2xl font-semibold text-white md:mb-10',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
