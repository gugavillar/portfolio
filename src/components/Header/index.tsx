import { NavMenu } from './NavMenu'

export const Header = () => {
  return (
    <header className='flex items-center px-6 py-9 md:px-16 md:py-14'>
      <div className='flex w-full items-center justify-between'>
        <h1 className='text-3xl text-white'>Guga Villar</h1>
        <NavMenu />
      </div>
    </header>
  )
}
