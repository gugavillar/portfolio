'use client'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

import { type DateField } from '@prismicio/client'

import { twMerge } from 'tailwind-merge'

import { formatDate } from '@/formatters'

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
  const path = usePathname()
  const localeUSOrBR = path.includes('en-us') ? 'US' : 'BR'
  const current = path.includes('en-us') ? 'Current' : 'Atual'
  const experienceTime = final
    ? `${formatDate(initial, localeUSOrBR)} - ${formatDate(final, localeUSOrBR)}`
    : `${formatDate(initial, localeUSOrBR)} - ${current}`
  return (
    <p
      className={twMerge(
        'text-xs font-medium text-white md:text-base',
        className,
      )}
      {...props}
    >
      {experienceTime}
    </p>
  )
}
