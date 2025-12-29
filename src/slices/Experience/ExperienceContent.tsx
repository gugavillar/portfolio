import type { Content } from '@prismicio/client'
import { type JSXMapSerializer, PrismicRichText, type SliceComponentProps } from '@prismicio/react'

import { ExperienceTime } from './ExperienceTime'

const H3: JSXMapSerializer = {
	heading3: ({ children }) => <h3 className="font-medium text-white md:text-2xl">{children}</h3>,
}

const Paragraph: JSXMapSerializer = {
	paragraph: ({ children }) => <p className="text-dark-400 text-justify text-sm font-light md:text-lg">{children}</p>,
}

type ExperienceContentProps = {
	item: SliceComponentProps<Content.ExperienceSlice>['slice']['items'][number]
}

export const ExperienceContent = ({ item }: ExperienceContentProps) => {
	return (
		<div className="flex flex-1 flex-col space-y-4 md:space-y-6.5">
			<div className="flex items-center justify-between">
				<PrismicRichText components={H3} field={item.role} />
				<ExperienceTime className="invisible md:visible" final={item.final} initial={item.initial} />
			</div>
			<div className="flex items-center justify-between">
				<p className="text-brand text-sm font-medium md:text-base">{item.company}</p>
				<ExperienceTime className="visible md:invisible" final={item.final} initial={item.initial} />
			</div>
			<PrismicRichText components={Paragraph} field={item.description} />
		</div>
	)
}
