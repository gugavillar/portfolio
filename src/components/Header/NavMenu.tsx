import Link from 'next/link'

export const NavMenu = () => {
  return (
    <nav className='hidden text-portfolio-500 md:block'>
      <ul className='flex gap-5'>
        <li>
          <Link href='/'>Sobre</Link>
        </li>
        <li>
          <Link href='/front-end'>Skills</Link>
        </li>
        <li>Portfólio</li>
        <li>Contato</li>
        <li>Blog</li>
      </ul>
    </nav>
  )
}
