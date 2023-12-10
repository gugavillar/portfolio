import { ComponentProps } from 'react'

import { type DateField } from '@prismicio/client'

import { formatDate } from '@/formatters/date'

type ExperienceTimeProps = ComponentProps<'p'> & {
  initial: DateField
  final: DateField
}

export const ExperienceTime = ({
  initial,
  final,
  className,
  ...props
}: ExperienceTimeProps) => {
  const experienceTime = final
    ? `${formatDate(initial)} - ${formatDate(final)}`
    : `${formatDate(initial)} - Atual}`
  return (
    <p
      className={`text-xs font-medium text-white md:text-base ${className}`}
      {...props}
    >
      {experienceTime}
    </p>
  )
}
