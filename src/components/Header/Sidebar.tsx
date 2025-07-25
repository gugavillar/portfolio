import { RefObject, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

type SidebarProps = {
  toggle: () => void
  isOpen: boolean
  children: ReactNode
  drawerRef: RefObject<HTMLDivElement | null>
}

export const Sidebar = ({
  toggle,
  isOpen,
  children,
  drawerRef,
}: SidebarProps) => {
  return (
    <aside
      className={twMerge(
        'fixed right-0 top-0 h-full w-1/2 bg-dark-900 px-8 pb-8 pt-12 duration-500 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
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
