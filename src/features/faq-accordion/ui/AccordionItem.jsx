import { useId, useState } from 'react'
import styles from './AccordionItem.module.css'

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()
  const triggerId = useId()

  return (
    <article className={styles.item}>
      <button
        id={triggerId}
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{question}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden>
          +
        </span>
      </button>

      <p id={contentId} className={styles.content} role="region" aria-labelledby={triggerId} hidden={!isOpen}>
        {answer}
      </p>
    </article>
  )
}

export default AccordionItem
