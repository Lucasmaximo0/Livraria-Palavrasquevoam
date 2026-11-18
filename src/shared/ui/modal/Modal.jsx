import { useEffect, useRef } from 'react'
import styles from './Modal.module.css'

function Modal({ isOpen, title, onClose, children }) {
  const contentRef = useRef(null)
  const lastActiveElementRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    lastActiveElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const dialogNode = contentRef.current

    const getFocusableElements = () => {
      if (!dialogNode) {
        return []
      }

      return Array.from(
        dialogNode.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      )
    }

    const focusableElements = getFocusableElements()
    ;(focusableElements[0] || dialogNode)?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const currentFocusableElements = getFocusableElements()

      if (!currentFocusableElements.length) {
        event.preventDefault()
        dialogNode?.focus()
        return
      }

      const firstElement = currentFocusableElements[0]
      const lastElement = currentFocusableElements[currentFocusableElements.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey) {
        if (activeElement === firstElement || activeElement === dialogNode) {
          event.preventDefault()
          lastElement.focus()
        }
      } else if (activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      lastActiveElementRef.current?.focus?.()
    }
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
        tabIndex={-1}
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
