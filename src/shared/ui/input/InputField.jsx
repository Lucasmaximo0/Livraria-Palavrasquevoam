import styles from './InputField.module.css'

function InputField({ label, id, children }) {
  return (
    <label htmlFor={id} className={styles.field}>
      <span>{label}</span>
      {children}
    </label>
  )
}

export default InputField
