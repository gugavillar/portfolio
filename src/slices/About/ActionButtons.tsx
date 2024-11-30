import { type Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { type SliceComponentProps } from '@prismicio/react'

import { Download, Mail } from '@/components/Icon'

type ActionButtonsProps = {
  resumeLink: SliceComponentProps<Content.AboutSlice>['slice']['primary']['resume_link']
  labelButton: SliceComponentProps<Content.AboutSlice>['slice']['primary']['resume_link_label']
}

export const ActionButtons = ({
  resumeLink,
  labelButton,
}: ActionButtonsProps) => {
  return (
    <div className='mt-8 flex gap-6'>
      <PrismicNextLink
        field={resumeLink}
        className='btn-pink'
        data-cy='download'
      >
        <Download />
        {labelButton}
      </PrismicNextLink>
      <a
        target='_blank'
        href='mailto:grsv.21@gmail.com'
        className='btn-purple'
        data-cy='email'
      >
        <Mail />
        E-mail
      </a>
    </div>
  )
}
