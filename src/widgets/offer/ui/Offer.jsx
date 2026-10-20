import { readerOffer, schoolOffer } from '../../../entities/offer/model/offer'
import { scrollToId } from '../../../shared/lib/scrollToId'
import Button from '../../../shared/ui/button/Button'
import SectionTitle from '../../../shared/ui/section-title/SectionTitle'
import styles from './Offer.module.css'

function OfferCard({ offer, highlight }) {
  return (
    <article className={`${styles.card} ${highlight ? styles.highlight : ''} glass`}>
      <h3>{offer.title}</h3>
      <p className={styles.price}>{offer.price}</p>
      <p className={styles.subtitle}>{offer.subtitle}</p>
      <ul>
        {offer.items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      {highlight ? (
        <Button onClick={() => scrollToId('agendar')}>Agendar visita gratuita</Button>
      ) : null}
    </article>
  )
}

function Offer() {
  return (
    <section id="quanto-custa" className={`container sectionSpacing ${styles.section}`}>
      <SectionTitle
        kicker="Quanto custa"
        title="A escola não paga nada"
        text="A visita da livraria itinerante é gratuita para a instituição."
      />

      <div className={styles.grid}>
        <OfferCard offer={schoolOffer} highlight />
        <OfferCard offer={readerOffer} />
      </div>
    </section>
  )
}

export default Offer
