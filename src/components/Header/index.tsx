import { createClient } from '@/prismicio'

import { MenuLinks } from './MenuLinks'
import { MenuWrapper } from './MenuWrapper'
import { MobileDrawer } from './MobileDrawer'

export const Header = async ({
  params: { lang },
}: {
  params: { lang: string }
}) => {
  const client = createClient()
  const { data } = await client.getSingle('headerlink', { lang })

  return (
    <header className='sticky top-0 z-50 flex items-center bg-dark-900'>
      <div className='flex w-full items-center justify-between p-6 md:px-11 md:py-10 lg:px-[180px]'>
        <h1 className='text-2xl font-medium text-brand'>{data.title}</h1>
        <MenuWrapper className='hidden md:block'>
          <MenuLinks data={data} />
        </MenuWrapper>
        <MobileDrawer data={data} />
      </div>
    </header>
  )
}
