import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'
import type { ReactElement } from 'react'

import { Container, Title } from '@/components'

import { ExperienceList } from './ExperienceList'

export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>

const Experience = ({ slice }: ExperienceProps): ReactElement => {
	return (
		<Container id="experience" sliceType={slice.slice_type} variation={slice.variation}>
			<div className="overflow-x-clip py-10 md:py-[6.25rem]">
				<Title className="mb-6 md:mb-[1.625rem]">{slice.primary.title}</Title>
				<ExperienceList items={slice.items} />
			</div>
		</Container>
	)
}

export default Experience
