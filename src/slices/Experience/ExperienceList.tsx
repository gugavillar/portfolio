'use client'
import { useState } from 'react'

import { type Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { ExperienceContent } from './ExperienceContent'
import { type Simplify } from '../../../prismicio-types'

type ExperienceListProps = {
  items: SliceComponentProps<Content.ExperienceSlice>['slice']['items']
}

export const ExperienceList = ({ items }: ExperienceListProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0])

  const handleSelectedItem = (
    selected: Simplify<Content.ExperienceSliceDefaultItem>,
  ) => {
    const findItem = items.find((item) => item.company === selected.company)

    if (findItem) return setSelectedItem(findItem)

    return setSelectedItem(items[0])
  }

  return (
    <div className='flex flex-col gap-10 md:gap-[88px] lg:flex-row'>
      <ul className='flex gap-3 lg:flex-col'>
        {items.map((item, index) => {
          const isSelected =
            selectedItem.company === item.company
              ? 'bg-dark-600 max-lg:border-b-2 border-brand lg:border-l-2'
              : 'max-lg:border-b-2 border-dark-700 md:border-dark-700 '

          return (
            <li
              data-cy={`experience-${index}`}
              key={index}
              onClick={() => handleSelectedItem(item)}
              className={`flex h-10 w-36 items-center justify-center text-lg text-white transition-colors duration-500 ease-in-out md:h-14 md:w-48 ${isSelected}`}
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
