'use client'
import Link from 'next/link'
import type { ComponentProps } from 'react'
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

export const LanguageSwitcher = ({ locales, lang, className }: LanguageSwitcherProps) => {
	return (
		<div className={twMerge('flex flex-wrap gap-3', className)}>
			<span aria-hidden>🌐</span>
			<ul className="flex flex-wrap gap-3">
				{locales.map((locale) => (
					<li key={locale.lang}>
						<Link
							aria-label={`Change language to ${locale.lang_name}`}
							className={twMerge(lang === locale.lang && 'text-brand font-bold')}
							href={locale.url}
							locale={locale.lang}
						>
							{localeLabels[locale.lang as keyof typeof localeLabels] || locale.lang}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
