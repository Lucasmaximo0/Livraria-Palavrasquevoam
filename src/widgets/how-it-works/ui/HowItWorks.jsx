import { steps } from '../../../entities'
import { SectionTitle } from '../../../shared'
import styles from './HowItWorks.module.css'

function HowItWorks() {
  return (
    <section id="como-funciona" className={`container sectionSpacing ${styles.section}`}>
      <SectionTitle
        kicker="Como funciona"
        title="Agendamento simples para a escola"
        text="Você escolhe a data disponível e a nossa equipe confirma por telefone."
      />

      <ol className={styles.timeline}>
        {steps.map((step) => (
          <li key={step.title} className={styles.item}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default HowItWorks
