export const demoUser = {
  name: 'Ana Souza',
  email: 'demo@palavrasquevoam.com',
  phone: '(11) 97777-6655',
  profile: 'Escola',
  password: '123456'
}

export const profileOptions = ['Escola', 'Família / leitor', 'Shopping ou organizador de feira']

export function getInitials(name) {
  if (!name) {
    return 'PV'
  }

  const pieces = name
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)

  return pieces.map((item) => item[0]?.toUpperCase()).join('')
}
