import { ReactNode } from 'react'

type SidebarProps = {
  toggle: () => void
  isOpen: boolean
  children: ReactNode
}

export const Sidebar = ({ toggle, isOpen, children }: SidebarProps) => {
  const translate = isOpen ? 'translate-x-0' : 'translate-x-full'
  return (
    <div
      className={`fixed right-0 top-0 h-screen w-2/3 bg-portfolio-gray-900 px-8 pb-8 pt-12 duration-500 ease-in-out ${translate}`}
    >
      <button
        className='fixed right-5 top-5 cursor-pointer items-center text-2xl text-white opacity-50'
        onClick={toggle}
      >
        X
      </button>
      {children}
    </div>
  )
}
