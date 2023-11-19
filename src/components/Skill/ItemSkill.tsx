import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

export type ItemSkillProps = {
  item: SliceComponentProps<Content.SkillDescriptionSlice>['slice']['items'][number]
}

const paragraph: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-white opacity-70'>{children}</p>
  ),
}

export const ItemSkill = ({ item }: ItemSkillProps) => {
  return (
    <div className='flex gap-6'>
      <PrismicNextImage className='h-16 w-16' field={item.skill_icon} />
      <div className='space-y-2'>
        <h4 className='text-lg font-bold text-white'>{item.skill_name}</h4>
        <PrismicRichText
          field={item.skill_description}
          components={paragraph}
        />
      </div>
    </div>
  )
}
