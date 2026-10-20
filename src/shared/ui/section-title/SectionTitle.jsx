import styles from './SectionTitle.module.css'

function SectionTitle({ kicker, title, text }) {
  return (
    <header className={styles.header}>
      <p className={styles.kicker}>{kicker}</p>
      <h2 className={styles.title}>{title}</h2>
      {text ? <p className={styles.text}>{text}</p> : null}
    </header>
  )
}

export default SectionTitle
