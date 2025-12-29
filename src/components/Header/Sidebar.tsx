import type { ReactNode, RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

type SidebarProps = {
	toggle: () => void
	isOpen: boolean
	children: ReactNode
	drawerRef: RefObject<HTMLDivElement | null>
}

export const Sidebar = ({ toggle, isOpen, children, drawerRef }: SidebarProps) => {
	return (
		<aside
			className={twMerge(
				'bg-dark-900 fixed top-0 right-0 h-full w-1/2 px-8 pt-12 pb-8 duration-500 ease-in-out',
				isOpen ? 'translate-x-0' : 'translate-x-full'
			)}
			ref={drawerRef}
		>
			<button className="text-dark-400 fixed top-5 right-8 cursor-pointer items-center text-xl" onClick={toggle}>
				X
			</button>
			{children}
		</aside>
	)
}
