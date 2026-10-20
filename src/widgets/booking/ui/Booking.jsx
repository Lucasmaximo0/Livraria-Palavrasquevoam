import { availableDates } from '../../../entities/availability/model/availableDates'
import AvailabilityCalendar from '../../../features/schedule-visit/ui/AvailabilityCalendar'
import SectionTitle from '../../../shared/ui/section-title/SectionTitle'

function Booking({ onSelectDay }) {
  return (
    <section id="agendar" className="container sectionSpacing">
      <SectionTitle
        kicker="Agendar visita"
        title="Calendário de dias livres para escolas"
        text="Selecione uma data em novembro ou dezembro de 2026 e envie seu contato."
      />

      <AvailabilityCalendar availableDates={availableDates} onConfirmDay={onSelectDay} />
    </section>
  )
}

export default Booking
