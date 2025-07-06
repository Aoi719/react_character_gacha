import styles from './Loading.module.css'

export default function Loading({ active }) {
  return (
    <div className={`${styles.loading} ${active ? styles.isActive : ""}`}>
      <span>召喚中...</span>
    </div>
  )
}
