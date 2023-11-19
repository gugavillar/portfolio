import Link from 'next/link'

export const NavMenu = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-5 text-white opacity-50'>
        <li>
          <Link href='/'>Sobre</Link>
        </li>
        <li>
          <Link href='/habilidades'>Habilidades</Link>
        </li>
        {/* <li>Portfólio</li>
        <li>Contato</li>
        <li>Blog</li> */}
      </ul>
    </nav>
  )
}
