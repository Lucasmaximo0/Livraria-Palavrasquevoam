import { locations } from '../../../entities'
import { LocationCarousel } from '../../../features'
import { SectionTitle } from '../../../shared'
import styles from './Locations.module.css'

function Locations() {
  return (
    <section id="onde-estamos" className={`container sectionSpacing ${styles.section}`}>
      <SectionTitle
        kicker="Onde estamos"
        title="A livraria vai até o público"
        text="Conheça os formatos de presença da Palavras que Voam em diferentes espaços."
      />

      <LocationCarousel items={locations} />
    </section>
  )
}

export default Locations
