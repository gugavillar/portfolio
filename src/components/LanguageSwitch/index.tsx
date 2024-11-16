'use client'
import Link from 'next/link'

import { twMerge } from 'tailwind-merge'

interface LanguageSwitcherProps {
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

export const LanguageSwitcher = ({ locales, lang }: LanguageSwitcherProps) => {
  return (
    <div className='flex flex-wrap gap-3'>
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
