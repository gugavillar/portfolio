import { getLocales } from '@/utils/getLocales'

import { MenuLinks } from './MenuLinks'
import { MenuWrapper } from './MenuWrapper'
import { MobileDrawer } from './MobileDrawer'
import {
  type HeaderlinkDocumentData,
  type Simplify,
} from '../../../prismicio-types'
import { LanguageSwitcher } from '../LanguageSwitch'

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
    <header className='sticky top-0 z-50 flex items-center bg-dark-900'>
      <div className='flex w-full items-center justify-between p-6 md:px-11 md:py-10 lg:px-[11.25rem]'>
        <h1 className='text-2xl font-medium text-brand'>{data.title}</h1>
        <MenuWrapper className='hidden md:block'>
          <MenuLinks data={data} />
          <LanguageSwitcher locales={locales} lang={lang} />
        </MenuWrapper>
        <MobileDrawer data={data} locales={locales} lang={lang} />
      </div>
    </header>
  )
}
