import { calendarMonths } from '../../../entities/availability/model/availableDates'
import { formatLongDate, monthLabel } from '../../../shared/lib/formatDate'
import Button from '../../../shared/ui/button/Button'
import { useAvailabilityCalendar } from '../model/useAvailabilityCalendar'
import styles from './AvailabilityCalendar.module.css'

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

function AvailabilityCalendar({ availableDates, onConfirmDay }) {
  const {
    currentMonth,
    monthGrid,
    selectedDay,
    prevMonth,
    nextMonth,
    selectDay,
    hasPrev,
    hasNext
  } = useAvailabilityCalendar(availableDates, calendarMonths)

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.calendar} glass`}>
        <header className={styles.header}>
          <button type="button" onClick={prevMonth} disabled={!hasPrev}>
            ←
          </button>
          <h3>{monthLabel(currentMonth)}</h3>
          <button type="button" onClick={nextMonth} disabled={!hasNext}>
            →
          </button>
        </header>

        <div className={styles.weekRow}>
          {weekDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className={styles.grid}>
          {monthGrid.map((cell) => (
            <button
              key={cell.iso}
              type="button"
              className={[
                styles.day,
                !cell.isCurrentMonth && styles.muted,
                cell.isAvailable ? styles.available : styles.busy,
                cell.isSelected && styles.selected
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => selectDay(cell)}
            >
              {cell.day}
            </button>
          ))}
        </div>

        <div className={styles.legend}>
          <span>
            <i className={styles.legendAvailable} /> Disponível
          </span>
          <span>
            <i className={styles.legendBusy} /> Ocupado
          </span>
          <span>
            <i className={styles.legendSelected} /> Selecionado
          </span>
        </div>
      </div>

      <aside className={`${styles.panel} glass`}>
        <h4>Dia escolhido</h4>
        {selectedDay ? (
          <>
            <p>{formatLongDate(selectedDay.date)}</p>
            <strong>Período: {selectedDay.period}</strong>
            <Button onClick={() => onConfirmDay(selectedDay)}>Quero esse dia</Button>
          </>
        ) : (
          <p>Selecione um dia disponível no calendário para agendar sua visita gratuita.</p>
        )}
      </aside>
    </div>
  )
}

export default AvailabilityCalendar
