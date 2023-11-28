import { PrismicNextLink } from '@prismicio/next'

import type { HeaderlinkDocumentData, Simplify } from '../../../prismicio-types'

type MenuLinksProps = {
  data: Simplify<HeaderlinkDocumentData>
}

export const MenuLinks = ({ data }: MenuLinksProps) => {
  return data?.links?.map((item, index) => (
    <li key={index}>
      <PrismicNextLink field={item.url}>{item.label}</PrismicNextLink>
    </li>
  ))
}
