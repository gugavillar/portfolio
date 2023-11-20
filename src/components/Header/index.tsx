import { NavMenu } from './NavMenu'
import { Programmer } from '../Icon'

export const Header = () => {
  return (
    <header className='flex items-center px-6 py-9 md:px-16 md:py-14'>
      <div className='flex w-full items-center justify-center md:justify-between'>
        <Programmer className='h-40 w-40' />
        <NavMenu />
      </div>
    </header>
  )
}
