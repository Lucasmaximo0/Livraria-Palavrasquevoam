import { profileOptions } from '../../../entities/user/model/users'
import Button from '../../../shared/ui/button/Button'
import Modal from '../../../shared/ui/modal/Modal'
import { useAuthForm } from '../model/useAuthForm'
import styles from './AuthModal.module.css'

function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const {
    mode,
    setMode,
    login,
    signup,
    error,
    updateLogin,
    updateSignup,
    submitLogin,
    submitSignup
  } = useAuthForm((user) => {
    onAuthSuccess(user)
    onClose()
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Entrar ou criar conta">
      <div className={styles.tabs}>
        <button
          type="button"
          onClick={() => setMode('login')}
          className={mode === 'login' ? styles.active : ''}
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={() => setMode('signup')}
          className={mode === 'signup' ? styles.active : ''}
        >
          Criar conta
        </button>
      </div>

      {mode === 'login' ? (
        <form className={styles.form} onSubmit={submitLogin}>
          <label>
            E-mail
            <input
              type="email"
              value={login.email}
              onChange={(event) => updateLogin('email', event.target.value)}
              required
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              value={login.password}
              onChange={(event) => updateLogin('password', event.target.value)}
              required
            />
          </label>
          <p className={styles.tip}>Conta de teste: demo@palavrasquevoam.com / 123456</p>
          {error ? <p className={styles.error}>{error}</p> : null}
          <Button type="submit">Entrar</Button>
        </form>
      ) : (
        <form className={styles.form} onSubmit={submitSignup}>
          <label>
            Nome
            <input value={signup.name} onChange={(event) => updateSignup('name', event.target.value)} required />
          </label>
          <label>
            E-mail
            <input
              type="email"
              value={signup.email}
              onChange={(event) => updateSignup('email', event.target.value)}
              required
            />
          </label>
          <label>
            Telefone
            <input
              value={signup.phone}
              onChange={(event) => updateSignup('phone', event.target.value)}
              required
            />
          </label>
          <label>
            Você é
            <select
              value={signup.profile}
              onChange={(event) => updateSignup('profile', event.target.value)}
            >
              {profileOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Senha
            <input
              type="password"
              value={signup.password}
              onChange={(event) => updateSignup('password', event.target.value)}
              required
            />
          </label>
          <label>
            Confirmar senha
            <input
              type="password"
              value={signup.confirmPassword}
              onChange={(event) => updateSignup('confirmPassword', event.target.value)}
              required
            />
          </label>
          <p className={styles.tip}>Protótipo: os dados ficam apenas em memória no navegador.</p>
          {error ? <p className={styles.error}>{error}</p> : null}
          <Button type="submit">Criar conta</Button>
        </form>
      )}
    </Modal>
  )
}

export default AuthModal
