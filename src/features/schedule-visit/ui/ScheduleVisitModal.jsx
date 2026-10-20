import Button from '../../../shared/ui/button/Button'
import Modal from '../../../shared/ui/modal/Modal'
import { formatLongDate } from '../../../shared/lib/formatDate'
import { useScheduleForm } from '../model/useScheduleForm'
import styles from './ScheduleVisitModal.module.css'

function ScheduleVisitModal({ isOpen, selectedDay, user, onClose }) {
  const { form, error, isSent, updateField, submit, reset } = useScheduleForm(user, isOpen)

  const closeModal = () => {
    reset()
    onClose()
  }

  const handleSubmit = (event) => {
    const ok = submit(event)
    if (!ok) {
      return
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="Agendar visita gratuita">
      <p className={styles.dayInfo}>
        Data escolhida: <strong>{selectedDay ? formatLongDate(selectedDay.date) : '-'}</strong>
        {selectedDay ? ` (${selectedDay.period})` : ''}
      </p>

      {!isSent ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Escola
            <input
              value={form.school}
              required
              onChange={(event) => updateField('school', event.target.value)}
            />
          </label>

          <label>
            Responsável
            <input
              value={form.responsible}
              required
              onChange={(event) => updateField('responsible', event.target.value)}
            />
          </label>

          <label>
            Telefone
            <input
              value={form.phone}
              required
              onChange={(event) => updateField('phone', event.target.value)}
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              value={form.email}
              required
              onChange={(event) => updateField('email', event.target.value)}
            />
          </label>

          <label>
            Número de alunos (opcional)
            <input
              value={form.students}
              onChange={(event) => updateField('students', event.target.value)}
            />
          </label>

          <label>
            Observações (opcional)
            <textarea
              rows="3"
              value={form.notes}
              onChange={(event) => updateField('notes', event.target.value)}
            />
          </label>

          {error ? <p className={styles.error}>{error}</p> : null}

          <Button type="submit">Enviar pedido</Button>
        </form>
      ) : (
        <div className={styles.success}>
          <p>
            Pedido enviado com sucesso. Nossa equipe vai entrar em contato pelo telefone{' '}
            <strong>{form.phone}</strong> para confirmar a visita.
          </p>
          <Button variant="light" onClick={closeModal}>
            Fechar
          </Button>
        </div>
      )}
    </Modal>
  )
}

export default ScheduleVisitModal
