import type { Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { ItemSkill } from '@/components/Skill/ItemSkill'

export type SkillDescriptionProps =
  SliceComponentProps<Content.SkillDescriptionSlice>

const SkillDescription = ({ slice }: SkillDescriptionProps): JSX.Element[] => {
  return slice.items.map((item, index) => <ItemSkill key={index} item={item} />)
}

export default SkillDescription
