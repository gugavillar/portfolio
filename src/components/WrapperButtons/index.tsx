'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components'

export const WrapperButton = () => {
  const router = useRouter()

  const handleNavigationPortfolio = () => router.push('/portfolio')

  return (
    <div className='flex gap-5'>
      <Button onClick={handleNavigationPortfolio}>Portfólio</Button>
      <Button>Contato</Button>
    </div>
  )
}
