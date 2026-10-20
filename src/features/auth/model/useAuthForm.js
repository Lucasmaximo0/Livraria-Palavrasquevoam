import { useState } from 'react'
import { demoUser } from '../../../entities/user/model/users'

const loginInitial = { email: '', password: '' }
const signupInitial = {
  name: '',
  email: '',
  phone: '',
  profile: 'Escola',
  password: '',
  confirmPassword: ''
}

export function useAuthForm(onAuthSuccess) {
  const [mode, setMode] = useState('login')
  const [users, setUsers] = useState([demoUser])
  const [login, setLogin] = useState(loginInitial)
  const [signup, setSignup] = useState(signupInitial)
  const [error, setError] = useState('')

  const updateLogin = (field, value) => {
    setLogin((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const updateSignup = (field, value) => {
    setSignup((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const submitLogin = (event) => {
    event.preventDefault()
    const user = users.find((item) => item.email === login.email && item.password === login.password)

    if (!user) {
      setError('E-mail ou senha inválidos.')
      return false
    }

    onAuthSuccess(user)
    setLogin(loginInitial)
    return true
  }

  const submitSignup = (event) => {
    event.preventDefault()

    if (users.some((item) => item.email === signup.email)) {
      setError('Este e-mail já está cadastrado.')
      return false
    }

    if (signup.password.length < 6) {
      setError('A senha precisa ter no mínimo 6 caracteres.')
      return false
    }

    if (signup.password !== signup.confirmPassword) {
      setError('A confirmação de senha não confere.')
      return false
    }

    const newUser = {
      name: signup.name,
      email: signup.email,
      phone: signup.phone,
      profile: signup.profile,
      password: signup.password
    }

    setUsers((prev) => [...prev, newUser])
    onAuthSuccess(newUser)
    setSignup(signupInitial)
    return true
  }

  return {
    mode,
    setMode,
    login,
    signup,
    error,
    updateLogin,
    updateSignup,
    submitLogin,
    submitSignup
  }
}
