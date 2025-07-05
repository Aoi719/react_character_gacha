import styles from "./PageWrapper.module.css"

export default function PageWrapper({ children }) {
  return (
    <main>
      <div className={styles.pageWrapper}>
        <div className={styles.pageWrapperInner}>
          {children}
        </div>
      </div>
    </main>
  )
}

