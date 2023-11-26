import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'

export const NavMenu = async () => {
  const client = createClient()
  const { data } = await client.getSingle('headerlink')
  return (
    <nav className='hidden md:block'>
      <menu className='flex gap-5 text-white opacity-50'>
        {data.links.map((item, index) => (
          <li key={index}>
            <PrismicNextLink field={item.url}>{item.label}</PrismicNextLink>
          </li>
        ))}
      </menu>
    </nav>
  )
}
