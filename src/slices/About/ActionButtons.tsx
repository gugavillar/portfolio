import { Download, Mail } from '@/components/Icon'

export const ActionButtons = () => {
  return (
    <div className='mt-8 flex gap-6'>
      <a
        target='_blank'
        href='/assets/gustavo_villar_cv.pdf'
        className='btn-pink'
        data-cy='download'
      >
        <Download />
        Currículo
      </a>
      <a
        target='_blank'
        href='mailto:grsv.21@gmail.com'
        className='btn-purple'
        data-cy='email'
      >
        <Mail />
        E-mail
      </a>
    </div>
  )
}
