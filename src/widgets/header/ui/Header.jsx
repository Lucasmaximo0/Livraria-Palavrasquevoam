import { scrollToId } from '../../../shared/lib/scrollToId'
import Button from '../../../shared/ui/button/Button'
import logo from '../../../shared/assets/logo.webp'
import { getInitials } from '../../../entities/user/model/users'
import styles from './Header.module.css'

const navItems = [
  { id: 'onde-estamos', label: 'Onde estamos' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'agenda', label: 'Próximas feiras' },
  { id: 'faq', label: 'Dúvidas' }
]

function Header({ user, onLogout, onOpenAuth }) {
  const firstName = user?.name?.split(' ')[0]

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#topo" className={styles.logoWrap} onClick={() => scrollToId('topo')}>
            <img src={logo} alt="Logo Palavras que Voam" className={styles.logo} />
            <span className={styles.brandName}>Palavras que Voam</span>
          </a>

          <nav className={styles.nav} aria-label="Navegação principal">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollToId(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className={styles.actions}>
            {user ? (
              <div className={styles.userBlock}>
                <span className={styles.avatar}>{getInitials(user.name)}</span>
                <span className={styles.greeting}>Olá, {firstName}</span>
                <button type="button" onClick={onLogout} className={styles.logout}>
                  Sair
                </button>
              </div>
            ) : (
              <Button variant="light" onClick={onOpenAuth}>
                Entrar / Cadastrar
              </Button>
            )}
            <Button onClick={() => scrollToId('agendar')}>Agendar visita</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
