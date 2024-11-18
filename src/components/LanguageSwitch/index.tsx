'use client'
import Link from 'next/link'
import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

export type LanguageSwitcherProps = ComponentProps<'div'> & {
  locales: {
    lang: string
    lang_name: string
    url: string
  }[]
  lang: string
}

const localeLabels = {
  'en-us': 'EN',
  'pt-br': 'BR',
}

export const LanguageSwitcher = ({
  locales,
  lang,
  className,
}: LanguageSwitcherProps) => {
  return (
    <div className={twMerge('flex flex-wrap gap-3', className)}>
      <span aria-hidden>🌐</span>
      <ul className='flex flex-wrap gap-3'>
        {locales.map((locale) => (
          <li key={locale.lang}>
            <Link
              className={twMerge(
                lang === locale.lang && 'font-bold text-brand',
              )}
              href={locale.url}
              locale={locale.lang}
              aria-label={`Change language to ${locale.lang_name}`}
            >
              {localeLabels[locale.lang as keyof typeof localeLabels] ||
                locale.lang}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
