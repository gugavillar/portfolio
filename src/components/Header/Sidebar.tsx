import { RefObject, ReactNode } from 'react'

type SidebarProps = {
  toggle: () => void
  isOpen: boolean
  children: ReactNode
  drawerRef?: RefObject<HTMLDivElement>
}

export const Sidebar = ({
  toggle,
  isOpen,
  children,
  drawerRef,
}: SidebarProps) => {
  const translate = isOpen ? 'translate-x-0' : 'translate-x-full'
  return (
    <aside
      className={`fixed right-0 top-0 h-screen w-1/2 bg-dark-900 px-8 pb-8 pt-12 duration-500 ease-in-out ${translate}`}
      ref={drawerRef}
    >
      <button
        className='fixed right-8 top-5 cursor-pointer items-center text-xl text-dark-400'
        onClick={toggle}
      >
        X
      </button>
      {children}
    </aside>
  )
}
