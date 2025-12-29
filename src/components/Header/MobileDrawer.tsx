'use client'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { useEffect, useRef, useState } from 'react'

import type { HeaderlinkDocumentData, Simplify } from '../../../prismicio-types'
import { LanguageSwitcher, type LanguageSwitcherProps } from '../LanguageSwitch'
import { MobileButton } from '../MobileButton'
import { MenuLinks } from './MenuLinks'
import { MenuWrapper } from './MenuWrapper'
import { Sidebar } from './Sidebar'

type MobileDrawerProps = LanguageSwitcherProps & {
	data: Simplify<HeaderlinkDocumentData>
}

export const MobileDrawer = ({ data, locales, lang }: MobileDrawerProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const isDevelopment = process.env.NODE_ENV === 'development'
	const drawerRef = useRef<HTMLDivElement>(null)

	const toggle = () => setIsOpen((prevState) => !prevState)

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (drawerRef.current && !drawerRef.current?.contains(event.target) && isOpen) {
				toggle()
			}
		}

		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [isOpen])

	return (
		<>
			{!isDevelopment && <GoogleAnalytics />}
			<MobileButton onClick={toggle} />
			<Sidebar drawerRef={drawerRef} isOpen={isOpen} toggle={toggle}>
				<MenuWrapper>
					<MenuLinks data={data} toggle={toggle} />
				</MenuWrapper>
				<LanguageSwitcher className="absolute bottom-8 text-white" lang={lang} locales={locales} />
			</Sidebar>
		</>
	)
}
