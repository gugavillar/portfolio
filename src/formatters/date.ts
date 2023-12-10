import { type DateField } from '@prismicio/client'

import { parse, format } from 'date-fns'
import * as locale from 'date-fns/locale'

const ptBR = locale.ptBR

const getNumberDate = (date: string, formatString = 'yyyy-MM-dd') => {
  if (!date) return NaN

  return parse(date, formatString, new Date(), {
    locale: ptBR,
  }).getTime()
}

export const formatDate = (date: DateField, formatString = 'MMM yyyy') => {
  if (!date) return ''

  const dateFormatted = getNumberDate(date)

  if (isNaN(dateFormatted)) return ''

  return format(new Date(dateFormatted), formatString, { locale: ptBR })
}
