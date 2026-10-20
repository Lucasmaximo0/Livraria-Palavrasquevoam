import { testimonials } from '../../../entities/testimonial/model/testimonials'
import SectionTitle from '../../../shared/ui/section-title/SectionTitle'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <section className={`container sectionSpacing ${styles.section}`}>
      <SectionTitle
        kicker="Depoimentos"
        title="Quem já viveu essa experiência"
      />

      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className={styles.card}>
            <div className={styles.avatar}>{testimonial.avatar}</div>
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <h3>{testimonial.name}</h3>
            <span>{testimonial.role}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
