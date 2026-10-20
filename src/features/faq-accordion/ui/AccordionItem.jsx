import { useState } from 'react'
import styles from './AccordionItem.module.css'

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className={styles.item}>
      <button type="button" className={styles.trigger} onClick={() => setIsOpen((prev) => !prev)}>
        <span>{question}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden>
          +
        </span>
      </button>

      {isOpen ? <p className={styles.content}>{answer}</p> : null}
    </article>
  )
}

export default AccordionItem
