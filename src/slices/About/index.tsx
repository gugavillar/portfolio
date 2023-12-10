import type { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import {
  type JSXMapSerializer,
  PrismicRichText,
  type SliceComponentProps,
} from '@prismicio/react'

import { Download, Mail } from '@/components/Icon'

export type AboutProps = SliceComponentProps<Content.AboutSlice>

const location: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className='font-medium text-white md:text-xl'>{children}</h3>
  ),
}

const about: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-justify text-sm font-light text-dark-400 md:text-lg'>
      {children}
    </p>
  ),
}

const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      className='mt-14 flex min-h-[362px] w-full flex-col bg-dark-700 px-6 py-10 md:px-11 lg:px-[180px] lg:py-[100px]'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='flex gap-32'>
        <PrismicNextImage
          className='hidden min-w-[367px] rounded border-l-4 border-brand lg:flex'
          field={slice.primary.image}
        />
        <div>
          <h2 className='mb-4 text-2xl font-semibold text-white md:mb-10'>
            SOBRE MIM
          </h2>
          <div className='space-y-2 md:space-y-5'>
            <PrismicRichText
              components={location}
              field={slice.primary.location}
            />
            <PrismicRichText
              components={about}
              field={slice.primary.about_me}
            />
          </div>
          <div className='mt-8 flex gap-6'>
            <button className='btn-pink'>
              <Download />
              Currículo
            </button>
            <button className='btn-purple'>
              <Mail />
              E-mail
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
