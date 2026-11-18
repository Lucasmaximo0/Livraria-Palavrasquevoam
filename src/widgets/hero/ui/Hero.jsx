import { Button, logo } from '../../../shared'
import styles from './Hero.module.css'

const floatingWords = ['LEITURA', 'IMAGINAÇÃO', 'CULTURA', 'INFÂNCIA', 'HISTÓRIAS', 'ESCOLA']

function Hero({ onScrollToBooking, onScrollToSchedule }) {
  return (
    <section id="topo" className={styles.hero}>
      <div className="container">
        <div className={`${styles.card} glass`}>
          <div className={styles.content}>
            <p className={styles.kicker}>Livraria itinerante</p>
            <h1 className={styles.title}>
              A gente leva os livros
              <span className={styles.titleHighlight}>até onde as crianças estão</span>
            </h1>
            <p className={styles.description}>
              A Palavras que Voam visita escolas gratuitamente e também participa de feiras livres,
              praças e shoppings com livros para toda a família.
            </p>

            <div className={styles.ctas}>
              <Button onClick={onScrollToBooking}>Levar a feira para minha escola</Button>
              <Button variant="secondary" onClick={onScrollToSchedule}>
                Onde nos encontrar
              </Button>
            </div>

            <div className={styles.badges}>
              <span>Gratuito para escolas</span>
              <span>Livros a partir de R$ 15</span>
              <span>Contação de histórias</span>
            </div>
          </div>

          <div className={styles.logoStage}>
            <img src={logo} alt="Logo Palavras que Voam" className={styles.heroLogo} />
            {floatingWords.map((word, index) => (
              <span key={word} style={{ '--index': index }} className={styles.floatingWord}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
