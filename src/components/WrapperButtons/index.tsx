'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components'

export const WrapperButton = () => {
  const router = useRouter()

  const handleNavigationPortfolio = () => router.push('/portfolio')

  return (
    <div className='flex items-center justify-center gap-5 md:justify-start'>
      <Button onClick={handleNavigationPortfolio}>Portfólio</Button>
      <Button>Contato</Button>
    </div>
  )
}
