import { PrismicNextLink } from '@prismicio/next'

import type { HeaderlinkDocumentData, Simplify } from '../../../prismicio-types'

type MenuLinksProps = {
  data: Simplify<HeaderlinkDocumentData>
  toggle?: () => void
}

export const MenuLinks = ({ data, toggle }: MenuLinksProps) => {
  return data?.links?.map((item, index) => (
    <li key={index} {...(toggle && { onClick: toggle })}>
      <PrismicNextLink field={item.url}>{item.label}</PrismicNextLink>
    </li>
  ))
}
