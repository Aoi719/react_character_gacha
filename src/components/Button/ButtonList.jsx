import styles from './ButtonList.module.css'

export default function ButtonList({ children }) {
  return (
    <div className={styles.buttonList}>
      {children}
    </div>
  )
}
