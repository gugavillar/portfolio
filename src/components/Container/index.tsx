import { ComponentProps, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

type ContainerProps<T> = ComponentProps<'section'> & {
  children: ReactNode
  sliceType: T
  variation: T
}

export const Container = <T,>({
  children,
  sliceType,
  variation,
  className,
  ...props
}: ContainerProps<T>) => {
  return (
    <section
      className={twMerge(
        'flex w-full flex-col px-6 md:px-11 lg:px-[11.25rem]',
        className,
      )}
      data-slice-type={sliceType}
      data-slice-variation={variation}
      {...props}
    >
      {children}
    </section>
  )
}
