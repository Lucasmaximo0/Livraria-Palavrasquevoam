const weekdays = [
  'domingo',
  'segunda-feira',
  'terça-feira',
  'quarta-feira',
  'quinta-feira',
  'sexta-feira',
  'sábado'
]

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]

export function toIsoDate(value) {
  const date = typeof value === 'string' ? new Date(`${value}T00:00:00`) : value
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function monthLabel(value) {
  const date = typeof value === 'string' ? new Date(`${value}-01T00:00:00`) : value
  return `${months[date.getMonth()]} de ${date.getFullYear()}`
}

export function formatLongDate(value) {
  const date = typeof value === 'string' ? new Date(`${value}T00:00:00`) : value
  const weekday = weekdays[date.getDay()]
  const day = date.getDate()
  const month = months[date.getMonth()]

  return `${weekday}, ${day} de ${month}`
}
