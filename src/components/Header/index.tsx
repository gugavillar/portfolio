import { createClient } from '@/prismicio'

import { MenuLinks } from './MenuLinks'
import { MenuWrapper } from './MenuWrapper'
import { MobileDrawer } from './MobileDrawer'

export const Header = async () => {
  const client = createClient()
  const { data } = await client.getSingle('headerlink')

  return (
    <header className='flex items-center'>
      <div className='flex w-full items-center justify-between p-6 md:px-11 md:py-10 lg:px-[180px]'>
        <h1 className='text-2xl font-medium text-brand'>Portfólio</h1>
        <MenuWrapper className='hidden md:block'>
          <MenuLinks data={data} />
        </MenuWrapper>
        <MobileDrawer data={data} />
      </div>
    </header>
  )
}
