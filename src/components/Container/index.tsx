import { ComponentProps, ReactNode } from 'react'

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
      className={`flex w-full flex-col px-6 md:px-11 lg:px-[180px] ${className}`}
      data-slice-type={sliceType}
      data-slice-variation={variation}
      {...props}
    >
      {children}
    </section>
  )
}
