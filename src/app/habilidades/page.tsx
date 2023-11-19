import { Metadata } from 'next'

import { createClient } from '@/prismicio'

import { PageTitle, Wrapper, Skill } from '@/components'

export default async function SkillsPage() {
  const client = createClient()
  const page = await client.getSingle('abilities')

  return (
    <section className='flex w-full flex-col gap-20'>
      <PageTitle>{page.data.title}</PageTitle>
      <div className='flex w-full flex-col gap-8 md:flex-row'>
        <Wrapper title='Soft Skills'>
          <Skill skill='soft_skills' />
        </Wrapper>
        <Wrapper title='Hard Skills'>
          <Skill skill='hard_skills' />
        </Wrapper>
      </div>
    </section>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('abilities')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
