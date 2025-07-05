import styles from './Button.module.css'
import { Link } from "react-router-dom";

export default function Button({ to, onClick, children, variant = "default" }) {
  const variantClass = styles[`variant-${variant}`] || "";

  // Linkの有無でHTMLタグを出し分ける
  if (to) {
    return (
      <div className={styles.buttonWrapper}>
        <Link className={`${styles.button} ${variantClass}`} to={to}>{children}</Link>
      </div>
    )
  }

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={onClick} className={`${styles.button} ${variantClass}`}>
        {children}
      </button>
    </div>
  )
}
