import styles from "./PageWrapper.module.css"

export default function PageWrapper({ children }) {
  return (
    <main>
      <div className={styles.pageWrapper}>
        {children}
      </div>
    </main>
  )
}

