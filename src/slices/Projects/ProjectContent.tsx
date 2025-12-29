import type { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { type JSXMapSerializer, PrismicRichText, type SliceComponentProps } from '@prismicio/react'

import { Link } from '@/components/Icon'

const H3: JSXMapSerializer = {
	heading3: ({ children }) => <h3 className="font-medium text-white md:text-2xl">{children}</h3>,
}

const Paragraph: JSXMapSerializer = {
	paragraph: ({ children }) => <p className="text-dark-400 text-justify text-sm font-light">{children}</p>,
}

const Technologies: JSXMapSerializer = {
	paragraph: ({ children }) => <p className="text-brand text-sm font-medium">{children}</p>,
}

type ProjectContentProps = {
	item: SliceComponentProps<Content.ProjectsSlice>['slice']['items'][number]
}

export const ProjectContent = ({ item }: ProjectContentProps) => {
	return (
		<div className="flex flex-col gap-6">
			<PrismicNextImage
				field={item.screenshot}
				loading="lazy"
				sizes="(max-width: 768px) 714px, (max-width: 1280px) 450px, (min-width: 1281px) 450px"
			/>
			<PrismicRichText components={H3} field={item.name} />
			<PrismicRichText components={Paragraph} field={item.description} />
			<div className="flex flex-wrap gap-2">
				<PrismicRichText components={Technologies} field={item.technologies} />
			</div>
			<div className="mt-auto flex gap-6">
				{item.link.link_type === 'Web' && (
					<PrismicNextLink className="btn-purple w-full md:w-[11.25rem]" field={item.link}>
						<Link />
						{item.button_label}
					</PrismicNextLink>
				)}
				{item.github.link_type === 'Web' && (
					<PrismicNextLink className="btn-pink w-full md:w-[11.25rem]" field={item.github}>
						<Link />
						Github
					</PrismicNextLink>
				)}
			</div>
		</div>
	)
}
