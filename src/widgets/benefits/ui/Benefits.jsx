import { benefits } from '../../../entities/benefit/model/benefits'
import SectionTitle from '../../../shared/ui/section-title/SectionTitle'
import styles from './Benefits.module.css'

function Benefits() {
  return (
    <section id="beneficios" className={`container sectionSpacing ${styles.section}`}>
      <SectionTitle
        kicker="Diferenciais"
        title="Educação, cultura e acesso ao livro"
        text="Uma proposta itinerante para ampliar o contato com a leitura em diferentes territórios."
      />

      <div className={styles.grid}>
        {benefits.map((benefit) => (
          <article key={benefit.title} className={styles.card}>
            <span className={styles.icon}>{benefit.icon}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Benefits
