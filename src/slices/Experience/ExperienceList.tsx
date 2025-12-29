'use client'
import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import type { Simplify } from '../../../prismicio-types'
import { ExperienceContent } from './ExperienceContent'

type ExperienceListProps = {
	items: SliceComponentProps<Content.ExperienceSlice>['slice']['items']
}

export const ExperienceList = ({ items }: ExperienceListProps) => {
	const [selectedItem, setSelectedItem] = useState(items[0])

	const handleSelectedItem = (selected: Simplify<Content.ExperienceSliceDefaultItem>) => {
		const findItem = items.find((item) => item.company === selected.company)

		if (findItem) return setSelectedItem(findItem)

		return setSelectedItem(items[0])
	}

	return (
		<div className="flex flex-col gap-10 md:gap-22 lg:flex-row">
			<ul className="flex gap-3 overflow-x-auto lg:flex-col">
				{items.map((item, index) => {
					const isSelected =
						selectedItem.company === item.company
							? 'bg-dark-600 max-lg:border-b-2 border-brand lg:border-l-2'
							: 'max-lg:border-b-2 border-dark-700 md:border-dark-700 '

					return (
						<li
							className={twMerge(
								'flex h-10 min-w-37.5 items-center justify-center text-lg whitespace-nowrap text-white transition-colors duration-500 ease-in-out md:h-14 md:w-48',
								isSelected
							)}
							data-cy={`experience-${index}`}
							key={index}
							onClick={() => handleSelectedItem(item)}
						>
							{item.company}
						</li>
					)
				})}
			</ul>
			<ExperienceContent item={selectedItem} />
		</div>
	)
}
