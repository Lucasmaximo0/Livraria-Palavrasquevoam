import logo from '../../../shared/assets/logo.webp'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.card} glass`}>
          <div className={styles.brand}>
            <img src={logo} alt="Logo Palavras que Voam" />
            <div>
              <h3>Palavras que Voam</h3>
              <p>
                Livraria itinerante que conecta livros, famílias e escolas em ações culturais
                acessíveis.
              </p>
            </div>
          </div>

          <div className={styles.info}>
            <p>Contato: contato@palavrasquevoam.com.br</p>
            <p>Telefone: (11) 99999-0000</p>
            <a href="https://www.instagram.com/palavrasquevoam__" target="_blank" rel="noreferrer">
              Instagram: @palavrasquevoam__
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
