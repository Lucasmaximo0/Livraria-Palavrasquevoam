import { locations } from '../../../entities/location/model/locations'
import SectionTitle from '../../../shared/ui/section-title/SectionTitle'
import LocationCarousel from '../../../features/location-carousel/ui/LocationCarousel'
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
