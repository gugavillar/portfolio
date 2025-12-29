import type { ComponentProps } from 'react'

export const MobileButton = (props: ComponentProps<'button'>) => {
	return (
		<button className="text-dark-400 block cursor-pointer md:hidden" {...props}>
			<span className="sr-only">Toggle menu</span>
			<svg
				className="h-8 w-8"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	)
}
