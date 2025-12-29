import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'
import type { ReactElement } from 'react'

import { Container, Title } from '@/components'

import { ActionButtons } from './ActionButtons'
import { PersonalDescription } from './PersonalDescription'

export type AboutProps = SliceComponentProps<Content.AboutSlice>

const About = ({ slice }: AboutProps): ReactElement => {
	return (
		<Container
			className="bg-dark-700 mt-14 min-h-[22.625rem] py-10 lg:py-[6.25rem]"
			id="about"
			sliceType={slice.slice_type}
			variation={slice.variation}
		>
			<div className="flex items-center gap-32">
				<PrismicNextImage
					className="border-brand hidden h-3/4 rounded border-l-4 lg:flex"
					field={slice.primary.image}
					height={256}
					loading="lazy"
				/>
				<div>
					<Title>{slice.primary.title}</Title>
					<PersonalDescription aboutMe={slice.primary.about_me} location={slice.primary.location} />
					<ActionButtons labelButton={slice.primary.resume_link_label} resumeLink={slice.primary.resume_link} />
				</div>
			</div>
		</Container>
	)
}

export default About
