import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'

import { components } from '@/slices'

type SkillsProps = {
  skill: string
}

export const Skill = async ({ skill }: SkillsProps) => {
  const client = createClient()
  const { data } = await client.getByUID('skill', skill)

  return <SliceZone slices={data.slices} components={components} />
}
