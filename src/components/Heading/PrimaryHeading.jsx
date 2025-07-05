import styles from './PrimaryHeading.module.css'

export default function PrimaryHeading({ children }) {
  return (
    <h2 className={styles.primaryHeading}>{children}</h2>
  )
}

