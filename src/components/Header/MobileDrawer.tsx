'use client'
import { useEffect, useRef, useState } from 'react'

import { GoogleAnalytics } from 'nextjs-google-analytics'

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

  const isDevelopment = process.env.NODE_ENV === 'development'
  const drawerRef = useRef<HTMLDivElement>(null)

  const toggle = () => setIsOpen((prevState) => !prevState)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        drawerRef.current &&
        !drawerRef.current?.contains(event.target) &&
        isOpen
      ) {
        toggle()
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [isOpen])

  return (
    <>
      {!isDevelopment && <GoogleAnalytics />}
      <MobileButton onClick={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} drawerRef={drawerRef}>
        <MenuWrapper>
          <MenuLinks data={data} toggle={toggle} />
        </MenuWrapper>
      </Sidebar>
    </>
  )
}
