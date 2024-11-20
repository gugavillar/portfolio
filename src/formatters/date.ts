import { type DateField } from '@prismicio/client'

import { parse, format } from 'date-fns'
import * as locale from 'date-fns/locale'

const locales = {
  BR: locale.ptBR,
  US: locale.enUS,
}

const getNumberDate = (
  date: string,
  locale = 'BR',
  formatString = 'yyyy-MM-dd',
) => {
  if (!date) return NaN

  return parse(date, formatString, new Date(), {
    locale: locales[locale as keyof typeof locales],
  }).getTime()
}

export const formatDate = (
  date: DateField,
  locale = 'BR',
  formatString = 'MMM yyyy',
) => {
  if (!date) return ''

  const dateFormatted = getNumberDate(date)

  if (isNaN(dateFormatted)) return ''

  return format(new Date(dateFormatted), formatString, {
    locale: locales[locale as keyof typeof locales],
  })
}
