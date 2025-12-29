import type { RichTextField, TitleField } from '@prismicio/client'
import { type JSXMapSerializer, PrismicRichText } from '@prismicio/react'

const H3: JSXMapSerializer = {
	heading3: ({ children }) => <h3 className="font-medium text-white md:text-xl">{children}</h3>,
}

const Paragraph: JSXMapSerializer = {
	paragraph: ({ children }) => <p className="text-dark-400 text-justify text-sm font-light md:text-lg">{children}</p>,
}

type PersonalDescriptionProps = {
	location: TitleField
	aboutMe: RichTextField
}

export const PersonalDescription = ({ aboutMe, location }: PersonalDescriptionProps) => {
	return (
		<div className="space-y-2 md:space-y-5">
			<PrismicRichText components={H3} field={location} />
			<PrismicRichText components={Paragraph} field={aboutMe} />
		</div>
	)
}
