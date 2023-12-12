'use client'
import { useState } from 'react'

import { MenuLinks } from './MenuLinks'
import { MenuWrapper } from './MenuWrapper'
import { Sidebar } from './Sidebar'
import { MobileButton } from '../MobileButton'

import type { HeaderlinkDocumentData, Simplify } from '../../../prismicio-types'

type MobileDrawerProps = {
  data: Simplify<HeaderlinkDocumentData>
}

export const MobileDrawer = ({ data }: MobileDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prevState) => !prevState)

  return (
    <>
      <MobileButton onClick={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen}>
        <MenuWrapper>
          <MenuLinks data={data} toggle={toggle} />
        </MenuWrapper>
      </Sidebar>
    </>
  )
}
