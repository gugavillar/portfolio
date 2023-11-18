import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center'>
      <div className='mt-8 flex w-full flex-col items-center justify-between gap-6 border-t-2 border-portfolio-gray-700 px-6 py-9 md:flex-row md:px-16'>
        <ul className='flex gap-5 text-white opacity-50'>
          <li>
            <Link href='https://github.com/gugavillar' target='_blank'>
              Github
            </Link>
          </li>
          <li>
            <Link href='https://linkedin.com/in/gugavillar' target='_blank'>
              LinkedIn
            </Link>
          </li>
        </ul>
        <p className='text-white opacity-80'>
          © 2023 Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
