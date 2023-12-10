import { type LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

import { GitHub, LinkedIn } from '@/components/Icon'

type SocialButtonsProps = {
  linkedIn: LinkField
  github: LinkField
}

export const SocialButtons = ({ github, linkedIn }: SocialButtonsProps) => {
  return (
    <div className='mt-10 flex gap-6 md:mt-[60px]'>
      <PrismicNextLink className='btn-purple' field={linkedIn}>
        <LinkedIn />
        LinkedIn
      </PrismicNextLink>
      <PrismicNextLink className='btn-pink' field={github}>
        <GitHub />
        GitHub
      </PrismicNextLink>
    </div>
  )
}
