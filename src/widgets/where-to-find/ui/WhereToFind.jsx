import { schedule } from '../../../entities/event/model/schedule'
import SectionTitle from '../../../shared/ui/section-title/SectionTitle'
import { formatLongDate } from '../../../shared/lib/formatDate'
import styles from './WhereToFind.module.css'

function WhereToFind() {
  return (
    <section id="agenda" className={`container sectionSpacing ${styles.section}`}>
      <SectionTitle
        kicker="Próximas feiras"
        title="Datas abertas ao público"
        text="Acompanhe onde encontrar a Palavras que Voam fora das escolas."
      />

      <div className={styles.grid}>
        {schedule.map((item) => (
          <article key={`${item.date}-${item.place}`} className={`${styles.card} glass`}>
            <p className={styles.date}>{formatLongDate(item.date)}</p>
            <h3>{item.place}</h3>
            <p className={styles.type}>{item.type}</p>
            <p className={styles.time}>{item.weekday} • {item.time}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhereToFind
