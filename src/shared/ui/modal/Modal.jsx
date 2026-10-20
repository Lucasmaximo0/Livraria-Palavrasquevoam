import { useEffect, useRef } from 'react'
import styles from './Modal.module.css'

function Modal({ isOpen, title, onClose, children }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose} role="presentation">
      <div
        ref={contentRef}
        className={`${styles.content} glass`}
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className={styles.header}>
          <h3>{title}</h3>
          <button type="button" onClick={onClose} className={styles.closeButton} aria-label="Fechar">
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
