import { createClient } from '@/prismicio'

import { MenuLinks } from './MenuLinks'
import { MenuWrapper } from './MenuWrapper'
import { MobileDrawer } from './MobileDrawer'
import { Programmer } from '../Icon'

export const Header = async () => {
  const client = createClient()
  const { data } = await client.getSingle('headerlink')

  return (
    <header className='flex items-center px-6 py-9 md:px-16 md:py-14'>
      <div className='flex w-full items-center justify-between'>
        <Programmer className='h-16 w-16 md:h-40 md:w-40' />
        <MenuWrapper className='hidden md:block'>
          <MenuLinks data={data} />
        </MenuWrapper>
        <MobileDrawer data={data} />
      </div>
    </header>
  )
}
