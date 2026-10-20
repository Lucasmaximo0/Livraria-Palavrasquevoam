import { useEffect, useState } from 'react'

const initialState = {
  school: '',
  responsible: '',
  phone: '',
  email: '',
  students: '',
  notes: ''
}

export function useScheduleForm(user, isOpen) {
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState('')
  const [isSent, setIsSent] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    setForm((prev) => ({
      ...prev,
      responsible: user?.name || prev.responsible,
      phone: user?.phone || prev.phone,
      email: user?.email || prev.email
    }))
  }, [isOpen, user])

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const submit = (event) => {
    event.preventDefault()
    const digits = form.phone.replace(/\D/g, '')

    if (digits.length < 10) {
      setError('Informe um telefone com DDD e no mínimo 10 dígitos.')
      return false
    }

    setIsSent(true)
    return true
  }

  const reset = () => {
    setForm(initialState)
    setError('')
    setIsSent(false)
  }

  return { form, error, isSent, updateField, submit, reset }
}
