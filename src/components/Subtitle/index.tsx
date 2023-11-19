type SubtitleProps = {
  subtitle: string
}

export const Subtitle = ({ subtitle }: SubtitleProps) => {
  return (
    <div className='mb-6 space-y-2'>
      <h3 className=' text-2xl font-bold text-white'>{subtitle}</h3>
      <div className='relative w-32 border-b-2'>
        <div className='absolute w-10 border-b-2 border-portfolio-blue-500' />
      </div>
    </div>
  )
}
