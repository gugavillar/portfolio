import type { getLocales } from '@/utils/getLocales'

import type { HeaderlinkDocumentData, Simplify } from '../../../prismicio-types'
import { LanguageSwitcher } from '../LanguageSwitch'
import { MenuLinks } from './MenuLinks'
import { MenuWrapper } from './MenuWrapper'
import { MobileDrawer } from './MobileDrawer'

export const Header = ({
	lang,
	locales,
	data,
}: {
	lang: string
	locales: Awaited<ReturnType<typeof getLocales>>
	data: Simplify<HeaderlinkDocumentData>
}) => {
	return (
		<header className="bg-dark-900 sticky top-0 z-50 flex items-center">
			<div className="flex w-full items-center justify-between p-6 md:px-11 md:py-10 lg:px-45">
				<h1 className="text-brand text-2xl font-medium">{data.title}</h1>
				<MenuWrapper className="hidden md:block">
					<MenuLinks data={data} />
					<LanguageSwitcher lang={lang} locales={locales} />
				</MenuWrapper>
				<MobileDrawer data={data} lang={lang} locales={locales} />
			</div>
		</header>
	)
}
